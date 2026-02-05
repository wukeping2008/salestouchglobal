<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const { t } = useI18n()

const defaultCases = [
  {
    key: 'case1',
    metric: '+300%',
    metricLabel: 'stat1',
    logo: 'CASE1'
  },
  {
    key: 'case2',
    metric: '$2M+',
    metricLabel: 'stat2',
    logo: 'CASE2'
  }
]

const displayTitle = computed(() => props.title || t('success.title'))
const displaySubtitle = computed(() => props.subtitle || t('success.subtitle'))

const companyList = computed(() => null)
</script>

<template>
  <section class="success-section" id="success">
    <div class="premium-container">
      <div class="title-wrapper">
        <h2 class="section-title">{{ displayTitle }}</h2>
        <p class="section-subtitle">{{ displaySubtitle }}</p>
      </div>
      
      <div v-if="companyList" class="logo-row">
        <span v-for="company in companyList" :key="company" class="logo-pill glass-panel">
          {{ company }}
        </span>
      </div>

      <div class="cases-grid">
        <div v-for="c in defaultCases" :key="c.key" class="case-card glass-panel">
          <div class="case-header">
            <div class="case-logo">{{ c.logo }}</div>
            <div class="case-metric-wrapper">
              <span class="case-metric">{{ c.metric }}</span>
              <span class="case-metric-label">{{ t(`success.${c.metricLabel}`) }}</span>
            </div>
          </div>
          <h3 class="case-name">{{ t(`success.${c.key}`) }}</h3>
          <p class="case-desc">{{ t(`success.${c.key}Desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.success-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,30,0.5) 100%);
}

.title-wrapper {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #a5a5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.logo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.logo-pill {
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  font-size: 0.95rem;
  border: 1px solid rgba(255,255,255,0.08);
}

.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s, border-color 0.3s;
}

.glass-panel:hover {
  transform: translateY(-5px);
  border-color: rgba(136, 211, 206, 0.3);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.case-logo {
  font-size: 2.5rem;
  background: rgba(255,255,255,0.05);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.case-metric-wrapper {
  text-align: right;
}

.case-metric {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #88d3ce;
  line-height: 1;
}

.case-metric-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.case-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
}

.case-desc {
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
