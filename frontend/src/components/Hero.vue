<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  title?: string
  subtitle?: string
  cta?: string
  ctaSecondary?: string
  ctaHref?: string
  ctaSecondaryHref?: string
}>()

const { t } = useI18n()

// Prefer region-driven copy when available, otherwise fall back to locale strings
const displayTitle = computed(() => props.title || t('hero.title'))
const displaySubtitle = computed(() => props.subtitle || t('hero.subtitle'))
const primaryCta = computed(() => props.cta || t('hero.cta'))
const secondaryCta = computed(() => props.ctaSecondary || t('hero.ctaSecondary'))
const primaryHref = computed(() => props.ctaHref || 'https://touch.long-arena.com/')
const secondaryHref = computed(() => props.ctaSecondaryHref || 'https://touch.long-arena.com/')
const heroImage = '/assets/ai-coach.png'
const heroImageAlt = computed(() => t('hero.imageAlt'))
</script>

<template>
  <section class="hero-section">
    <div class="hero-glow"></div>
    <div class="premium-container hero-content">
      <div class="hero-text">
        <div class="badge glass">{{ t('hero.badge') }}</div>
        <h1 class="hero-title">{{ displayTitle }}</h1>
        <p class="hero-subtitle">{{ displaySubtitle }}</p>
        <div class="cta-group">
          <a :href="primaryHref" class="cta-button primary">{{ primaryCta }}</a>
          <a :href="secondaryHref" class="cta-button secondary">{{ secondaryCta }}</a>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <div class="image-glass-card">
          <img 
            :src="heroImage" 
            :alt="heroImageAlt"  
            class="hero-img"
            loading="eager"
          />
          <div class="overlay-stat glass">
            <span class="stat-value">Top 1%</span>
            <span class="stat-label">Sales Logic</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 6rem; /* Account for navbar */
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-text {
    order: 2;
  }
  
  .hero-image-wrapper {
    order: 1;
  }

  .cta-group {
    justify-content: center;
  }
}

.hero-text {
  max-width: 600px;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #88d3ce;
  border-radius: 20px;
  background: rgba(136, 211, 206, 0.1);
  border: 1px solid rgba(136, 211, 206, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #a5a5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.cta-button.primary {
  background: #fff;
  color: #000;
}

.cta-button.primary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.cta-button.secondary {
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
}

.cta-button.secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.4);
}

/* Image Styles */
.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.image-glass-card {
  position: relative;
  border-radius: 24px;
  padding: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

.hero-img {
  width: 100%;
  max-width: 500px;
  /* height: 600px; */
  /* object-fit: cover; */
  border-radius: 16px;
  display: block;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.overlay-stat {
  position: absolute;
  bottom: 40px;
  right: -20px;
  padding: 1rem 1.5rem;
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  animation: float 4s ease-in-out infinite;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #88d3ce;
}

.stat-label {
  font-size: 0.8rem;
  color: #aaa;
  text-transform: uppercase;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
