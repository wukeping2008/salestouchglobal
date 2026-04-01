<template>
  <section class="clients-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">{{ t('clients.badge') }}</span>
        <h2 class="section-title">{{ t('clients.title') }}</h2>
        <p class="section-subtitle">{{ t('clients.subtitle') }}</p>
      </div>

      <div class="client-wall">
        <div class="client-wall-inner">
          <img
            src="https://sojourn.oss-cn-shanghai.aliyuncs.com/www-en/home/Group-390.jpg"
            :alt="t('clients.title')"
            class="client-wall-img"
            loading="lazy"
          />
        </div>
      </div>

      <div class="trust-indicators">
        <div class="trust-item">
          <span class="trust-number">{{ t('clients.stat1Number') }}</span>
          <span class="trust-label">{{ t('clients.stat1Label') }}</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <span class="trust-number">{{ t('clients.stat2Number') }}</span>
          <span class="trust-label">{{ t('clients.stat2Label') }}</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <span class="trust-number">{{ t('clients.stat3Number') }}</span>
          <span class="trust-label">{{ t('clients.stat3Label') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.clients-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, #0d0d1a 100%);
  position: relative;
  overflow: hidden;
}

.clients-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  color: var(--color-accent-light);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.client-wall {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  padding: 1.5rem;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.client-wall-inner {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: #0e0e1e;
}

.client-wall-img {
  width: 100%;
  height: auto;
  display: block;
  filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(1.1);
  opacity: 0.78;
  transition: opacity 0.4s ease, filter 0.4s ease;
}

.client-wall:hover .client-wall-img {
  opacity: 0.92;
  filter: invert(1) hue-rotate(180deg) brightness(0.95) contrast(1.15);
}

.trust-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.trust-number {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trust-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-align: center;
}

.trust-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .clients-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .client-wall {
    padding: 0.75rem;
    margin-bottom: 2rem;
  }

  .trust-indicators {
    flex-direction: column;
    gap: 1.5rem;
  }

  .trust-divider {
    width: 40px;
    height: 1px;
  }

  .trust-number {
    font-size: 1.5rem;
  }
}
</style>
