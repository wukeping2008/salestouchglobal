<template>
  <section class="cta-section">
    <div class="cta-bg-image"></div>
    <div class="glow-orb"></div>
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">{{ t('cta.title') }}</h2>
        <p class="cta-subtitle">{{ t('cta.subtitle') }}</p>

        <div class="cta-actions">
          <a
            href="https://www.long-arena.com/?utm_source=longarenaai&utm_medium=landing&utm_campaign=cta_trial"
            target="_blank"
            rel="noopener"
            class="cta-button-primary"
            @click="trackCTAClick('start_free_trial', 'cta_section')"
          >
            {{ t('cta.button') }}
          </a>
          <a
            href="https://www.long-arena.com/?utm_source=longarenaai&utm_medium=landing&utm_campaign=cta_demo"
            target="_blank"
            rel="noopener"
            class="cta-button-secondary"
            @click="trackCTAClick('schedule_demo', 'cta_section')"
          >
            {{ t('cta.secondary') }}
          </a>
        </div>

        <p class="cta-subtext">{{ t('cta.subtext') }}</p>
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
.cta-section {
  position: relative;
  background: #0f0f1e;
  padding: 8rem 0;
  overflow: hidden;
}

.cta-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/hero-team.jpg') center/cover no-repeat;
  opacity: 0.12;
  filter: saturate(0.5) brightness(0.6);
}

.glow-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.2) 40%, transparent 70%);
  filter: blur(80px);
  border-radius: 50%;
  pointer-events: none;
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.8;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-size: 1.5rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.cta-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 3rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.6);
}

.cta-button-primary:hover::before {
  opacity: 1;
}

.cta-button-primary span {
  position: relative;
  z-index: 1;
}

.cta-button-secondary {
  font-size: 1.125rem;
  font-weight: 600;
  color: #cbd5e1;
  text-decoration: none;
  border-bottom: 2px solid rgba(102, 126, 234, 0.5);
  padding-bottom: 0.25rem;
  transition: all 0.3s ease;
}

.cta-button-secondary:hover {
  color: #667eea;
  border-bottom-color: #667eea;
}

.cta-subtext {
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .cta-section {
    padding: 5rem 0;
  }

  .glow-orb {
    width: 400px;
    height: 400px;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-subtitle {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  .cta-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-button-primary {
    width: 100%;
    max-width: 320px;
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }

  .cta-button-secondary {
    font-size: 1rem;
  }

  .cta-subtext {
    font-size: 0.8125rem;
  }
}
</style>
