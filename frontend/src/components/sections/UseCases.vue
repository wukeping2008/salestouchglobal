<template>
  <section class="use-cases">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('useCases.title') }}</h2>
        <p class="section-subtitle">{{ t('useCases.subtitle') }}</p>
      </div>

      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-label">{{ t(`useCases.${tab.id}.title`) }}</span>
        </button>
      </div>

      <div class="content-card">
        <div class="card-icon">
          <span>{{ tabs.find(t => t.id === activeTab)?.icon }}</span>
        </div>
        <h3 class="card-title">{{ t(`useCases.${activeTab}.title`) }}</h3>
        <p class="card-description">{{ t(`useCases.${activeTab}.desc`) }}</p>
        <ul class="feature-list">
          <li class="feature-item">
            <span class="feature-bullet">✓</span>
            <span>{{ t(`useCases.${activeTab}.f1`) }}</span>
          </li>
          <li class="feature-item">
            <span class="feature-bullet">✓</span>
            <span>{{ t(`useCases.${activeTab}.f2`) }}</span>
          </li>
          <li class="feature-item">
            <span class="feature-bullet">✓</span>
            <span>{{ t(`useCases.${activeTab}.f3`) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const tabs = [
  { id: 'sales', icon: '💼' },
  { id: 'managers', icon: '📊' },
  { id: 'trainers', icon: '🎓' },
  { id: 'medical', icon: '⚕️' }
];

const activeTab = ref('sales');
</script>

<style scoped>
.use-cases {
  background: #0f0f1e;
  padding: 6rem 0;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #94a3b8;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
  color: #fff;
  transform: translateY(-2px);
}

.tab-button.active {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-color: #667eea;
  color: #fff;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.tab-icon {
  font-size: 1.5rem;
}

.content-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.card-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.card-description {
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.6;
}

.feature-bullet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid #667eea;
  border-radius: 50%;
  color: #667eea;
  font-size: 0.875rem;
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .use-cases {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .tabs {
    gap: 0.5rem;
  }

  .tab-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }

  .tab-icon {
    font-size: 1.25rem;
  }

  .tab-label {
    display: none;
  }

  .tab-button.active .tab-label {
    display: inline;
  }

  .content-card {
    padding: 2rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-description {
    font-size: 1rem;
  }

  .feature-item {
    font-size: 0.875rem;
  }
}
</style>
