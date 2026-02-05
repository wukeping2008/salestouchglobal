<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const { t } = useI18n()

const featureImages = {
  training:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/robotics_kep0.svg',
  planning:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/scrum_board_cesn.svg',
  execution:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/schedule_pnbk.svg',
  management:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/social_dashboard_k3pt.svg'
}

const defaultFeatures = [
  { key: 'training', icon: '01', image: featureImages.training },
  { key: 'planning', icon: '02', image: featureImages.planning },
  { key: 'execution', icon: '03', image: featureImages.execution },
  { key: 'management', icon: '04', image: featureImages.management }
]

const displayTitle = computed(() => props.title || t('features.title'))
const displaySubtitle = computed(() => {
  if (props.subtitle) return props.subtitle
  const translated = t('features.subtitle')
  return translated !== 'features.subtitle' ? translated : 'Designed for expert-led teams worldwide'
})

const featureList = computed(() => {
  return defaultFeatures.map((item) => ({
    title: t(`features.${item.key}`),
    desc: t(`features.${item.key}Desc`),
    icon: item.icon,
    image: item.image,
    imageAlt: t(`features.${item.key}`)
  }))
})
</script>

<template>
  <section class="premium-container">
    <div class="feature-headings">
      <h2 class="section-title">{{ displayTitle }}</h2>
      <p class="section-subtitle">{{ displaySubtitle }}</p>
    </div>
    <div class="features-grid">
      <div v-for="f in featureList" :key="f.title + f.icon" class="feature-card glass">
        <div class="feature-media">
          <img :src="f.image" :alt="f.imageAlt" loading="lazy" />
          <div class="feature-index">{{ f.icon }}</div>
        </div>
        <h3 class="feature-title">{{ f.title }}</h3>
        <p class="feature-desc">{{ f.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-headings {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #fff 0%, #a5a5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: var(--text-muted);
}

.feature-media {
  position: relative;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.feature-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
}

.feature-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 10, 20, 0.2) 0%, rgba(6, 10, 20, 0.65) 100%);
}

.feature-index {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.85);
  color: #0f172a;
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-weight: 700;
  font-size: 0.85rem;
  z-index: 1;
}
</style>
