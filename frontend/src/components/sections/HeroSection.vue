<template>
  <section class="hero-section">
    <div class="hero-bg-image"></div>
    <div class="hero-gradient-overlay"></div>
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>
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
          href="https://longarena.ai/registerEmail?utm_source=longarenaai&utm_medium=landing&utm_campaign=hero_trial"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
          @click="trackCTAClick('start_free_trial', 'hero')"
        >
          {{ t('hero.ctaPrimary') }}
        </a>
        <a
          href="#max-demo"
          class="btn btn-secondary"
          @click="trackCTAClick('see_max_demo', 'hero')"
        >
          {{ t('hero.ctaSecondary') }}
        </a>
      </div>

      <div class="trust-badges">
        <div class="trust-badge">
          <span class="trust-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <span class="trust-text">{{ t('hero.trustBadge1') }}</span>
        </div>
        <div class="trust-badge">
          <span class="trust-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <span class="trust-text">{{ t('hero.trustBadge2') }}</span>
        </div>
        <div class="trust-badge">
          <span class="trust-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <span class="trust-text">{{ t('hero.trustBadge3') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { trackCTAClick } from '../../analytics'

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

.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(15, 15, 30, 0.4) 50%, #0f0f1e 85%),
    linear-gradient(180deg, rgba(15, 15, 30, 0.1) 0%, rgba(15, 15, 30, 0.5) 100%);
  z-index: 0;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  will-change: transform;
}

.hero-orb-1 {
  width: 700px;
  height: 700px;
  top: -20%;
  right: -15%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.5) 0%, transparent 70%);
  animation: orbDrift1 20s ease-in-out infinite;
}

.hero-orb-2 {
  width: 600px;
  height: 600px;
  bottom: -15%;
  left: -12%;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.4) 0%, transparent 70%);
  animation: orbDrift2 25s ease-in-out infinite;
}

@keyframes orbDrift1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(-60px, 50px) scale(1.1);
  }
  66% {
    transform: translate(40px, -30px) scale(0.9);
  }
}

@keyframes orbDrift2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -40px) scale(1.12);
  }
  66% {
    transform: translate(-35px, 25px) scale(0.88);
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

.hero-bg-image {
  position: absolute;
  top: -5%;
  left: -5%;
  right: -5%;
  bottom: -5%;
  background: url('/images/hero-team.jpg') center/cover no-repeat;
  opacity: 0.35;
  z-index: 0;
  animation: kenBurns 30s ease-in-out infinite;
  filter: saturate(0.7) brightness(0.8);
}

@keyframes kenBurns {
  0%, 100% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.1) translate(-1.5%, 1%);
  }
}

.trust-icon {
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-text {
  color: #d1d5db;
  font-size: 0.9rem;
}

@media (prefers-reduced-motion: reduce) {
  .hero-bg-image,
  .hero-orb-1,
  .hero-orb-2,
  .hero-title,
  .hero-subtitle,
  .cta-buttons,
  .trust-badges {
    animation: none;
  }
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

  .hero-orb-1 {
    width: 350px;
    height: 350px;
  }

  .hero-orb-2 {
    width: 300px;
    height: 300px;
  }
}
</style>
