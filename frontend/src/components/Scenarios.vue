<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scenarioImages = {
  tob:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/user_flow_vr6w.svg',
  toc:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/messaging_fun_86y2.svg',
  product:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/status_update_jjgk.svg'
}

const scenarios = [
  { key: 'tob', image: scenarioImages.tob },
  { key: 'toc', image: scenarioImages.toc },
  { key: 'product', image: scenarioImages.product }
]
</script>

<template>
  <section class="scenarios-section" id="scenarios">
    <div class="premium-container">
      <div class="title-wrapper">
        <h2 class="section-title">{{ t('scenarios.title') }}</h2>
        <p class="section-subtitle">{{ t('scenarios.subtitle') }}</p>
      </div>

      <div class="scenarios-grid">
        <div v-for="scenario in scenarios" :key="scenario.key" class="scenario-card glass-panel">
          <div class="scenario-media">
            <img :src="scenario.image" :alt="t(`scenarios.items.${scenario.key}.title`)" loading="lazy" />
          </div>
          <h3 class="scenario-title">{{ t(`scenarios.items.${scenario.key}.title`) }}</h3>
          <p class="scenario-desc">{{ t(`scenarios.items.${scenario.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scenarios-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,30,0.4) 100%);
}

.title-wrapper {
  text-align: center;
  margin-bottom: 3rem;
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
  max-width: 760px;
  margin: 0 auto;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.6rem;
}

.scenario-media {
  height: 150px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
}

.scenario-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
}

.scenario-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 10, 20, 0.15) 0%, rgba(6, 10, 20, 0.6) 100%);
}

.scenario-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.scenario-desc {
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
