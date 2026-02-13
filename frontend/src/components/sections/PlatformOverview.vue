<template>
  <section class="platform-section">
    <div class="section-header">
      <h2 class="section-title">{{ t('platform.title') }}</h2>
      <p class="section-subtitle">{{ t('platform.subtitle') }}</p>
    </div>

    <div class="capabilities-grid">
      <div
        v-for="i in 6"
        :key="i"
        class="capability-card"
      >
        <div class="capability-icon" v-html="t(`platform.cap${i}.icon`)"></div>
        <h3 class="capability-title">{{ t(`platform.cap${i}.title`) }}</h3>
        <p class="capability-description">{{ t(`platform.cap${i}.desc`) }}</p>
        <div class="capability-modules">{{ t(`platform.cap${i}.modules`) }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.platform-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #9ca3af;
  line-height: 1.6;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
}

.capability-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.capability-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #667eea, #764ba2) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.capability-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.capability-card:hover::before {
  opacity: 1;
}

.capability-icon {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #667eea;
  transition: transform 0.3s ease;
}

.capability-icon :deep(svg) {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.capability-card:hover .capability-icon {
  transform: scale(1.1);
}

.capability-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.capability-description {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.capability-modules {
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 500;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(102, 126, 234, 0.2);
  margin-top: auto;
}

@media (max-width: 1024px) {
  .capabilities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .platform-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .capability-card {
    padding: 2rem;
  }

  .capability-icon :deep(svg) {
    width: 32px;
    height: 32px;
  }

  .capability-title {
    font-size: 1.25rem;
  }

  .capability-description {
    font-size: 0.95rem;
  }

  .capability-modules {
    font-size: 0.8rem;
  }
}
</style>
