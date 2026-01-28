<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const features = [
  {
    key: 'simulation',
    icon: '🎯'
  },
  {
    key: 'smartPage',
    icon: '📄'
  },
  {
    key: 'fab',
    icon: '⚡'
  }
]
</script>

<template>
  <section class="premium-container">
    <div class="features-grid">
      <div v-for="f in features" :key="f.key" class="feature-card glass">
        <div class="feature-icon">{{ f.icon }}</div>
        <h3 class="feature-title">{{ t(`features.${f.key}`) }}</h3>
        <p class="feature-desc">{{ t(`features.${f.key}Desc`) }}</p>
      </div>
    </div>
  </section>
</template>
