<template>
  <section class="problem-section">
    <div class="section-header">
      <h2 class="section-title">{{ t('problem.title') }}</h2>
      <p class="section-subtitle">{{ t('problem.subtitle') }}</p>
    </div>

    <div class="pain-grid">
      <div
        v-for="i in 4"
        :key="i"
        class="pain-card"
      >
        <div class="pain-icon" v-html="t(`problem.pain${i}.icon`)"></div>
        <h3 class="pain-title">{{ t(`problem.pain${i}.title`) }}</h3>
        <p class="pain-description">{{ t(`problem.pain${i}.desc`) }}</p>
        <div class="pain-stat">{{ t(`problem.pain${i}.stat`) }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.problem-section {
  padding: 6rem 2rem;
  background: #0f0f1e;
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

.pain-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
}

.pain-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  cursor: default;
}

.pain-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
}

.pain-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #667eea;
}

.pain-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.pain-description {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.pain-stat {
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  padding: 0.75rem 1.25rem;
  background: rgba(102, 126, 234, 0.15);
  border-radius: 8px;
  display: inline-block;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .problem-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .pain-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pain-card {
    padding: 2rem;
  }

  .pain-icon {
    font-size: 2rem;
  }

  .pain-title {
    font-size: 1.25rem;
  }

  .pain-description {
    font-size: 0.95rem;
  }

  .pain-stat {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
