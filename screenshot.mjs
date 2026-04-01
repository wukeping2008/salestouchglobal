import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'screenshots');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:5173';

const sections = [
  { name: '01-FullPage',         selector: null },
  { name: '02-Hero',             selector: 'section, .hero-section, .hero, main > div:first-child, main > *:first-child' },
  { name: '03-ProblemStatement',  selector: null, index: 1 },
  { name: '04-PlatformOverview',  selector: null, index: 2 },
  { name: '05-MaxShowcase',       selector: null, index: 3 },
  { name: '06-WorkflowJourney',   selector: null, index: 4 },
  { name: '07-UseCases',          selector: null, index: 5 },
  { name: '08-SocialProof',       selector: null, index: 6 },
  { name: '09-CTA',              selector: null, index: 7 },
  { name: '10-Footer',           selector: null, index: 8 },
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Loading page...');
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for animations to settle
  await new Promise(r => setTimeout(r, 3000));

  // Scroll the full page slowly to trigger all AnimatedSection reveals
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < totalHeight; y += 400) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 200));
  }
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  // 1) Full-page screenshot
  console.log('Taking full-page screenshot...');
  await page.screenshot({
    path: path.join(outDir, '01-FullPage.png'),
    fullPage: true,
  });
  console.log('  -> 01-FullPage.png');

  // 2) Get all main > * children (the sections in order)
  const sectionCount = await page.evaluate(() => {
    // main contains: HeroSection, then AnimatedSection wrappers
    const main = document.querySelector('main');
    return main ? main.children.length : 0;
  });
  console.log(`Found ${sectionCount} sections in <main>`);

  // Map section names to main > child indices
  const sectionMap = [
    { name: '02-Hero',             childIndex: 0 },
    { name: '03-ProblemStatement',  childIndex: 1 },
    { name: '04-PlatformOverview',  childIndex: 2 },
    { name: '05-MaxShowcase',       childIndex: 3 },
    { name: '06-WorkflowJourney',   childIndex: 4 },
    { name: '07-UseCases',          childIndex: 5 },
    { name: '08-SocialProof',       childIndex: 6 },
    { name: '09-CTA',              childIndex: 7 },
  ];

  for (const sec of sectionMap) {
    try {
      const box = await page.evaluate((idx) => {
        const main = document.querySelector('main');
        if (!main || !main.children[idx]) return null;
        const el = main.children[idx];
        const rect = el.getBoundingClientRect();
        return {
          x: rect.x,
          y: rect.y + window.scrollY,
          width: rect.width,
          height: rect.height,
        };
      }, sec.childIndex);

      if (box && box.height > 0) {
        await page.screenshot({
          path: path.join(outDir, `${sec.name}.png`),
          clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 5000) },
        });
        console.log(`  -> ${sec.name}.png (${Math.round(box.width)}x${Math.round(box.height)})`);
      } else {
        console.log(`  !! ${sec.name} - element not found or zero height`);
      }
    } catch (err) {
      console.log(`  !! ${sec.name} - error: ${err.message}`);
    }
  }

  // Footer (outside main, inside AnimatedSection wrapper)
  try {
    const footerBox = await page.evaluate(() => {
      const footer = document.querySelector('footer') ||
                     document.querySelector('.footer-section') ||
                     document.querySelector('[class*="footer"]');
      if (!footer) return null;
      const rect = footer.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
    });

    if (footerBox && footerBox.height > 0) {
      await page.screenshot({
        path: path.join(outDir, '10-Footer.png'),
        clip: { x: footerBox.x, y: footerBox.y, width: footerBox.width, height: Math.min(footerBox.height, 3000) },
      });
      console.log(`  -> 10-Footer.png (${Math.round(footerBox.width)}x${Math.round(footerBox.height)})`);
    }
  } catch (err) {
    console.log(`  !! Footer - error: ${err.message}`);
  }

  await browser.close();
  console.log('\nAll screenshots saved to ./screenshots/');
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
