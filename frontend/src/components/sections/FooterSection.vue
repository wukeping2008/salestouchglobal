<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column brand-column">
          <div class="brand-logo">
            <img src="https://longarena.ai/about-us/assets/images/longarena-logo-white.png" alt="LóngArena" class="footer-logo-img" />
          </div>
          <p class="tagline">{{ t('footer.tagline') }}</p>
          <div class="footer-contact">
            <a href="mailto:bd@long-arena.com" class="contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              bd@long-arena.com
            </a>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/bingbing-bai-89400953/" target="_blank" rel="noopener" class="social-link" title="Bingbing Bai on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/maxmao/" target="_blank" rel="noopener" class="social-link" title="Max Mao on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-column">
          <h3 class="column-title">{{ t('footer.product.title') }}</h3>
          <ul class="footer-links">
            <li><a href="#">{{ t('footer.product.features') }}</a></li>
            <li><a href="#">{{ t('footer.product.pricing') }}</a></li>
            <li><a href="#">{{ t('footer.product.demo') }}</a></li>
            <li><a href="https://longarena.ai/sales-nail/index.html" target="_blank" rel="noopener">{{ t('footer.product.salesNail') }}</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="column-title">{{ t('footer.company.title') }}</h3>
          <ul class="footer-links">
            <li><a href="https://longarena.ai/about-us/about.html" target="_blank" rel="noopener">{{ t('footer.company.about') }}</a></li>
            <li><a href="#">{{ t('footer.company.blog') }}</a></li>
            <li><a href="#">{{ t('footer.company.careers') }}</a></li>
            <li><a href="mailto:bd@long-arena.com">{{ t('footer.company.contact') }}</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="column-title">{{ t('footer.legal.title') }}</h3>
          <ul class="footer-links">
            <li><a href="#">{{ t('footer.legal.privacy') }}</a></li>
            <li><a href="#">{{ t('footer.legal.terms') }}</a></li>
            <li><a href="#">{{ t('footer.legal.security') }}</a></li>
            <li><a href="#">{{ t('footer.legal.compliance') }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ t('footer.copy') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.footer {
  background: #0a0a14;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4rem 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.brand-column {
  max-width: 320px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.tagline {
  font-size: 0.9375rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #667eea;
}

.contact-link svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
  color: #667eea;
}

.social-link svg {
  width: 16px;
  height: 16px;
}

.column-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  font-size: 0.9375rem;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #667eea;
  transform: translateX(4px);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.copyright {
  font-size: 0.875rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 2rem;
  }

  .brand-column {
    max-width: 100%;
  }

  .brand-logo {
    justify-content: center;
  }

  .tagline {
    text-align: center;
  }

  .column-title {
    font-size: 0.8125rem;
    margin-bottom: 1rem;
  }

  .footer-links {
    gap: 0.625rem;
  }

  .footer-links a {
    font-size: 0.875rem;
  }

  .footer-bottom {
    padding-top: 1.5rem;
  }

  .copyright {
    font-size: 0.8125rem;
  }
}
</style>
