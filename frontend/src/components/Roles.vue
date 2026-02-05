<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const roleImages = {
  salesRep:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/schedule_pnbk.svg',
  salesManager:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/social_dashboard_k3pt.svg',
  marketing:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/user_flow_vr6w.svg',
  owner:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/revenue_3osh.svg',
  externalConsultant:
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/scrum_board_cesn.svg'
}

const roles = [
  { key: 'salesRep', image: roleImages.salesRep },
  { key: 'salesManager', image: roleImages.salesManager },
  { key: 'marketing', image: roleImages.marketing },
  { key: 'owner', image: roleImages.owner },
  { key: 'externalConsultant', image: roleImages.externalConsultant }
]
</script>

<template>
  <section class="roles-section" id="roles">
    <div class="premium-container">
      <div class="title-wrapper">
        <h2 class="section-title">{{ t('roles.title') }}</h2>
        <p class="section-subtitle">{{ t('roles.subtitle') }}</p>
      </div>

      <div class="roles-grid">
        <div v-for="role in roles" :key="role.key" class="role-card glass-panel">
          <div class="role-media">
            <img :src="role.image" :alt="t(`roles.items.${role.key}.title`)" loading="lazy" />
          </div>
          <h3 class="role-title">{{ t(`roles.items.${role.key}.title`) }}</h3>
          <p class="role-desc">{{ t(`roles.items.${role.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roles-section {
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

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
}

.role-media {
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
}

.role-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
}

.role-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 10, 20, 0.15) 0%, rgba(6, 10, 20, 0.55) 100%);
}

.role-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.role-desc {
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
