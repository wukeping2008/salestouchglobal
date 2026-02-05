<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stockImages = {
  paperwork:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/printing_invoices_5r4r.svg',
  schedule:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/schedule_pnbk.svg',
  workflow:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/user_flow_vr6w.svg',
  dashboard:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/social_dashboard_k3pt.svg',
  scrum:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/scrum_board_cesn.svg',
  status:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/status_update_jjgk.svg',
  robotics:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/robotics_kep0.svg',
  progress:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/in_progress_ql66.svg',
  chat:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/group_chat_v059.svg',
  activity:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/developer_activity_bv83.svg',
  revenue:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/revenue_3osh.svg'
}

const modules = [
  { key: 'workbench', icon: '01', image: stockImages.paperwork },
  { key: 'productEntry', icon: '02', image: stockImages.schedule },
  { key: 'productBrowse', icon: '03', image: stockImages.workflow },
  { key: 'customerPipeline', icon: '04', image: stockImages.dashboard },
  { key: 'spinPlan', icon: '05', image: stockImages.scrum },
  { key: 'pptStudio', icon: '06', image: stockImages.status },
  { key: 'voiceBot', icon: '07', image: stockImages.robotics },
  { key: 'voiceTraining', icon: '08', image: stockImages.progress },
  { key: 'assistantChat', icon: '09', image: stockImages.chat },
  { key: 'managerView', icon: '10', image: stockImages.activity },
  { key: 'b2bFlow', icon: '11', image: stockImages.revenue }
]
</script>

<template>
  <section class="modules-section" id="modules">
    <div class="premium-container">
      <div class="title-wrapper">
        <h2 class="section-title">{{ t('modules.title') }}</h2>
        <p class="section-subtitle">{{ t('modules.subtitle') }}</p>
      </div>

      <div class="modules-grid">
        <div v-for="module in modules" :key="module.key" class="module-card glass-panel">
          <div class="module-visual">
            <img :src="module.image" :alt="t(`modules.items.${module.key}.title`)" loading="lazy" />
            <span class="module-index">{{ module.icon }}</span>
          </div>
          <h3 class="module-title">{{ t(`modules.items.${module.key}.title`) }}</h3>
          <p class="module-desc">{{ t(`modules.items.${module.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.modules-section {
  padding: 6rem 0;
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
  max-width: 720px;
  margin: 0 auto;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.75rem;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
}

.module-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.module-card:hover {
  transform: translateY(-6px);
  border-color: rgba(136, 211, 206, 0.3);
}

.module-visual {
  height: 120px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(136, 211, 206, 0.18), rgba(110, 69, 226, 0.2));
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0.75rem;
  overflow: hidden;
  position: relative;
}

.module-visual img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
  opacity: 0.85;
}

.module-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 10, 20, 0.2) 0%, rgba(6, 10, 20, 0.7) 100%);
}

.module-index {
  font-weight: 700;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.85);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  position: relative;
  z-index: 1;
}

.module-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}

.module-desc {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .modules-section {
    padding: 4.5rem 0;
  }
}
</style>
