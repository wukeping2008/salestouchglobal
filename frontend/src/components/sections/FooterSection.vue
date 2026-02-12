<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column brand-column">
          <div class="brand-logo">
            <span class="logo-icon">✦</span>
            <span class="logo-text">SalesTouch.io</span>
          </div>
          <p class="tagline">{{ t('footer.tagline') }}</p>
        </div>

        <div class="footer-column">
          <h3 class="column-title">{{ t('footer.product.title') }}</h3>
          <ul class="footer-links">
            <li><a href="#">{{ t('footer.product.features') }}</a></li>
            <li><a href="#">{{ t('footer.product.pricing') }}</a></li>
            <li><a href="#">{{ t('footer.product.demo') }}</a></li>
            <li><a href="#">{{ t('footer.product.changelog') }}</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="column-title">{{ t('footer.company.title') }}</h3>
          <ul class="footer-links">
            <li><a href="#">{{ t('footer.company.about') }}</a></li>
            <li><a href="#">{{ t('footer.company.blog') }}</a></li>
            <li><a href="#">{{ t('footer.company.careers') }}</a></li>
            <li><a href="#">{{ t('footer.company.contact') }}</a></li>
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

.logo-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
