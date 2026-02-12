<template>
  <div class="feature-card">
    <div class="icon-wrapper">
      <span class="icon">{{ icon }}</span>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <div v-if="modules" class="card-modules">{{ modules }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
  modules?: string;
}

defineProps<Props>();
</script>

<style scoped>
.feature-card {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow:
    0 12px 40px rgba(102, 126, 234, 0.3),
    0 0 0 1px rgba(102, 126, 234, 0.2) inset;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  transition: all 0.4s ease;
}

.feature-card:hover .icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
}

.icon {
  font-size: 2rem;
  filter: brightness(1.2);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-description {
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: auto;
}

.card-modules {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 600;
}

@media (max-width: 768px) {
  .feature-card {
    padding: 1.5rem;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    margin-bottom: 1.25rem;
  }

  .icon {
    font-size: 1.75rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .card-description {
    font-size: 0.9375rem;
  }

  .card-modules {
    margin-top: 1.25rem;
    padding-top: 1.25rem;
    font-size: 0.8125rem;
  }
}
</style>
