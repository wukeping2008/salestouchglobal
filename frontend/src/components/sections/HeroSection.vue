<template>
  <section class="hero-section">
    <div class="animated-background"></div>
    <div class="hero-content">
      <div class="badge-pill">
        {{ t('hero.badge') }}
      </div>

      <h1 class="hero-title">
        {{ t('hero.title') }}
      </h1>

      <p class="hero-subtitle">
        {{ t('hero.subtitle') }}
      </p>

      <div class="cta-buttons">
        <a
          href="https://touch.long-arena.com"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          {{ t('hero.ctaPrimary') }}
        </a>
        <a
          href="#max-demo"
          class="btn btn-secondary"
        >
          {{ t('hero.ctaSecondary') }}
        </a>
      </div>

      <div class="trust-badges">
        <div class="trust-badge">
          <span class="trust-icon">✓</span>
          <span class="trust-text">{{ t('hero.trustBadge1') }}</span>
        </div>
        <div class="trust-badge">
          <span class="trust-icon">✓</span>
          <span class="trust-text">{{ t('hero.trustBadge2') }}</span>
        </div>
        <div class="trust-badge">
          <span class="trust-icon">✓</span>
          <span class="trust-text">{{ t('hero.trustBadge3') }}</span>
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
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #0f0f1e;
  overflow: hidden;
}

.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.15;
  animation: rotateGradient 15s ease infinite;
  z-index: 0;
}

@keyframes rotateGradient {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
}

.badge-pill {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
  border-radius: 50px;
  color: #a5b4fc;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge-pill:hover {
  background: rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.6);
  transform: translateY(-2px);
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(to bottom, #ffffff 0%, #9ca3af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #9ca3af;
  margin-bottom: 3rem;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease 0.2s backwards;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease 0.4s backwards;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: transparent;
  color: #a5b4fc;
  border: 2px solid rgba(102, 126, 234, 0.5);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.8);
  transform: translateY(-2px);
}

.trust-badges {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.6s backwards;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.trust-badge:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.trust-icon {
  color: #667eea;
  font-weight: bold;
  font-size: 1.1rem;
}

.trust-text {
  color: #d1d5db;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1.5rem;
    min-height: calc(100vh - 60px);
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn {
    width: 100%;
  }

  .trust-badges {
    flex-direction: column;
    gap: 1rem;
  }

  .trust-badge {
    justify-content: center;
  }
}
</style>
