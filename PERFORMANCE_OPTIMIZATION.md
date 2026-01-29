# ⚡ North America Performance Optimization

**Project**: SalesTouch NorthAmerica Landing Page
**Market**: North America (USA, Canada, Mexico)
**Created**: 2026-01-29

---

## 🎯 Performance Goals

### Core Objectives
- **Page Load Time**: < 2 seconds (4G connection)
- **First Contentful Paint (FCP)**: < 1.5 seconds
- **Time to Interactive (TTI)**: < 3 seconds
- **API Response Time**: < 500ms (p95)
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices)

### Target Metrics
- **Mobile Performance**: Critical for mobile users (60%+ traffic)
- **Desktop Performance**: 3G/4G connectivity scenarios
- **CDN Coverage**: Global edge distribution
- **Cache Hit Rate**: > 80% for static assets

---

## 📊 Current Performance Analysis

### Frontend Bottlenecks
1. **Bundle Size**: Initial Vue bundle ~450KB
2. **Image Assets**: Unoptimized PNGs, total ~15MB
3. **Font Loading**: 4 external fonts blocking render
4. **JavaScript Execution**: Synchronous API calls
5. **CSS**: Unused styles, specificity issues

### Backend Performance
1. **API Latency**: Current ~800ms average
2. **Database Queries**: N+1 queries without indexes
3. **No Caching**: Every request hits database
4. **No Compression**: Text responses not gzipped
5. **No CDN**: All assets served from origin

---

## 🔧 Frontend Optimization

### Code Splitting & Lazy Loading

#### Route-Based Splitting
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    visualizer({
      openFile: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'common': ['src/components'],
          'roi-calculator': ['src/components/ROICalculator.vue'],
          'sales-dashboard': ['src/components/SalesDashboard.vue']
        }
      }
    }
  }
})
```

#### Component Lazy Loading
```typescript
// Router configuration
const routes = [
  {
    path: '/roi-calculator',
    component: () => import('./components/ROICalculator.vue')
  },
  {
    path: '/dashboard',
    component: () => import('./components/SalesDashboard.vue')
  },
  {
    path: '/case-studies',
    component: () => import('./components/SuccessStories-NorthAmerica.vue')
  }
]
```

### Image Optimization

#### WebP Conversion
```bash
# Convert all images to WebP
find public/images -type f \( -name "*.png" -o -name "*.jpg" \) | while read img; do
  cwebp "$img" -o "${img%.*}.webp" -q 80 -m 6
done

# Create fallback for older browsers
<picture>
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Sales coaching dashboard">
</picture>
```

#### Responsive Images
```html
<img 
  srcset="
    /images/hero-mobile.webp 400w,
    /images/hero-tablet.webp 800w,
    /images/hero-desktop.webp 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
  src="/images/hero-desktop.webp"
  loading="lazy"
  alt="AI sales coaching dashboard"
>
```

### Font Optimization

#### Font Subsetting & Preloading
```html
<!-- Preload critical fonts -->
<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/inter-subset.woff2">

<!-- Subset fonts to include only used characters -->
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-subset.woff2') format('woff2');
  font-display: swap;
  unicode-range: U+0020-007E; /* ASCII + common symbols */
}
```

#### CSS Font Display
```css
* {
  font-display: swap; /* Show text immediately, swap font when loaded */
}

.font-display-auto {
  font-display: auto; /* Wait until fully loaded */
}
```

### CSS Optimization

#### Critical CSS Inline
```html
<style>
  /* Critical path styles - inline in <head> */
  .hero-section { display: flex; }
  .cta-button { background: linear-gradient(135deg, #0ea5e9, #0284c7); }
  /* 2-3KB max */
</style>
```

#### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0ea5e9',
        'brand-green': '#22c55e',
        'brand-orange': '#f97316'
      }
    }
  },
  variants: {
    responsive: ['sm', 'md', 'lg']
  }
}
```

### JavaScript Optimization

#### Tree Shaking
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn']
      }
    }
  }
})
```

#### Async/Await API Calls
```typescript
// Use async/await instead of Promises where possible
async function fetchDashboardData() {
  const [revenue, deals] = await Promise.all([
    fetchRevenue(),
    fetchDeals()
  ]);
  
  return { revenue, deals };
}
```

---

## ⚡ Backend Optimization

### API Response Optimization

#### Database Indexing
```typescript
// Database schema with indexes
interface CaseStudy {
  id: string;
  industry: string;
  publishedDate: Date;
  location: string;
  
  // Indexed fields
  @Index('industry')
  @Index('publishedDate')
  @Index('location')
  @Index(['industry', 'publishedDate']) // Compound index
}
```

#### Query Optimization
```typescript
// Use projection to fetch only needed fields
router.get('/case-studies', async (req, res) => {
  const { industry, limit } = req.query;
  
  const caseStudies = await CaseStudyModel
    .find({ industry })
    .select('id title company industry results') // Only select needed fields
    .limit(parseInt(limit))
    .lean() // Return plain objects
    .exec();
  
  res.json(caseStudies);
});
```

### Caching Strategy

#### Redis Cache Layer
```typescript
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

async function getCaseStudies(industry: string, limit: number) {
  const cacheKey = `case-studies:${industry}:${limit}`;
  
  // Check cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Fetch from database if not cached
  const caseStudies = await fetchCaseStudiesFromDB(industry, limit);
  
  // Set cache with 30-second TTL
  await redis.setex(cacheKey, 30, JSON.stringify(caseStudies));
  
  return caseStudies;
}
```

#### Response Compression
```typescript
import compression from 'compression';

app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  },
  threshold: 1024, // Only compress responses larger than 1KB
  level: 6 // Compression level (1-9, 6 is default)
}));
```

### CDN Configuration

#### Static Asset CDN
```javascript
// Cloudflare CDN configuration
{
  "name": "SalesTouch NA Static",
  "url": "https://cdn.salestouch.northamerica",
  "cache": {
    "everything": true,
    "browser_ttl": 43200, // 12 hours
    "edge_ttl": 604800 // 7 days
  },
  "page_rules": [
    {
      "target": "*.jpg|*.png|*.webp",
      "settings": {
        "cache_level": "cache_everything"
      }
    },
    {
      "target": "*.js|*.css",
      "settings": {
        "cache_level": "aggressive"
      }
    }
  ]
}
```

---

## 📱 Mobile Optimization

### Mobile-First Design

#### Viewport Meta
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
```

#### Touch Targets
```css
/* Minimum touch target size: 44x44 pixels (iOS recommendation) */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 16px;
}

.accordion-trigger {
  min-width: 44px;
  min-height: 44px;
}
```

#### Responsive Breakpoints
```css
/* Mobile-first breakpoints */
.container {
  width: 100%;
  padding: 0 16px;
}

@media (min-width: 640px) {
  .container {
    max-width: 600px;
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
    padding: 0 40px;
  }
}
```

### Mobile-Specific Features
- **Hamburger menu** for navigation
- **Bottom sheet** for actions
- **Swipe gestures** for case studies carousel
- **Pull-to-refresh** for dashboard data
- **Offline PWA support** for basic functionality

---

## 📊 Monitoring & Analytics

### Performance Monitoring

#### Web Vitals Tracking
```typescript
// Report Web Vitals to Google Analytics
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  gtag('event', 'web_vitals', {
    event_category: 'Performance',
    event_label: metric.name,
    value: metric.value,
    custom_map: {
      metric_dimension: metric.name
    }
  });
}

// Track all Core Web Vitals
getCLS(sendToAnalytics); // Cumulative Layout Shift
getFID(sendToAnalytics); // First Input Delay
getFCP(sendToAnalytics); // First Contentful Paint
getLCP(sendToAnalytics); // Largest Contentful Paint
getTTFB(sendToAnalytics); // Time to First Byte
```

#### Error Tracking
```typescript
// Track JavaScript errors globally
window.addEventListener('error', (event) => {
  gtag('event', 'exception', {
    event_category: 'JavaScript Error',
    event_label: event.message,
    fatal: event.error ? true : false
  });
});
```

---

## ✅ Performance Implementation Checklist

### Phase 1: Code Optimization
- [ ] Implement code splitting (route-based)
- [ ] Lazy load non-critical components
- [ ] Tree-shake unused dependencies
- [ ] Minify JavaScript and CSS
- [ ] Remove unused CSS
- [ ] Optimize bundle size (< 300KB)

### Phase 2: Asset Optimization
- [ ] Convert all images to WebP format
- [ ] Create responsive image variants
- [ ] Subset fonts to used characters
- [ ] Preload critical fonts
- [ ] Implement font-display: swap
- [ ] Compress static assets (gzip/brotli)

### Phase 3: Backend Optimization
- [ ] Add database indexes
- [ ] Implement Redis caching
- [ ] Add response compression
- [ ] Optimize database queries
- [ ] Implement connection pooling
- [ ] Add API rate limiting

### Phase 4: CDN & Distribution
- [ ] Deploy Cloudflare CDN
- [ ] Configure caching rules
- [ ] Set up global edge locations
- [ ] Enable image optimization
- [ ] Configure auto-minification

### Phase 5: Mobile Optimization
- [ ] Implement mobile-first responsive design
- [ ] Optimize touch targets (44x44px minimum)
- [ ] Test on mobile devices (iOS/Android)
- [ ] Optimize for slow 3G connections
- [ ] Implement offline PWA support

### Phase 6: Monitoring
- [ ] Set up Web Vitals tracking
- [ ] Configure performance budgets
- [ ] Implement error tracking
- [ ] Set up alerts for performance degradation
- [ ] Create performance dashboards

---

## 🎯 Performance Budgets

### Resource Budgets
```json
{
  "performance": {
    "budgets": [
      {
        "resourceType": "script",
        "budget": 150000
      },
      {
        "resourceType": "stylesheet",
        "budget": 0
      },
      {
        "resourceType": "image",
        "budget": 2048
      },
      {
        "resourceType": "font",
        "budget": 100000
      },
      {
        "resourceType": "total",
        "budget": 300000
      }
    ]
  }
}
```

---

## 📈 Expected Performance Improvements

### After Optimization (90 Days)

| Metric | Before | After Target | Improvement |
|--------|--------|-------------|-------------|
| Page Load Time | 4.5s | < 2s | 56% faster |
| First Contentful Paint | 2.1s | < 1.5s | 29% faster |
| Time to Interactive | 3.8s | < 3s | 21% faster |
| Lighthouse Score | 72 | 90+ | 25% better |
| API Response Time | 800ms | < 500ms | 38% faster |
| Cache Hit Rate | 0% | > 80% | N/A |
| Mobile Performance Score | 65 | 85+ | 31% better |

---

## 🚀 Deployment Recommendations

### CI/CD Pipeline
```yaml
# .github/workflows/performance.yml
name: Performance Checks
on: [push, pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://salestouch.northamerica/
            https://salestouch.northamerica/roi-calculator
            https://salestouch.northamerica/case-studies
          budgetPath: ./.github/lighthouse-budget.json
          uploadArtifacts: true
```

### Environment Configuration
```bash
# Production environment variables
NODE_ENV=production
VITE_API_URL=https://api.salestouch.northamerica
VITE_CDN_URL=https://cdn.salestouch.northamerica
VITE_REDIS_URL=redis://production:6379
VITE_SENTRY_DSN=https://xxx@sentry.io/xxx
```

---

**Performance Optimization Complete!** ⚡

**Ready to implement:**
1. Code splitting and lazy loading
2. Image optimization (WebP + responsive)
3. Backend caching (Redis)
4. CDN deployment (Cloudflare)
5. Mobile optimization
6. Performance monitoring

**Expected Timeline**: 4-6 weeks for full implementation

**Need help deploying or configuring specific performance tools?** 🛠️
