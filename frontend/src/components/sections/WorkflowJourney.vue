<template>
  <section class="workflow-section">
    <div class="section-header">
      <h2 class="section-title">{{ t('workflow.title') }}</h2>
      <p class="section-subtitle">{{ t('workflow.subtitle') }}</p>
    </div>

    <div class="workflow-timeline">
      <div class="timeline-line"></div>

      <div
        v-for="step in 5"
        :key="step"
        :class="['workflow-step', { active: activeStep === step }]"
        @click="setActiveStep(step)"
      >
        <div class="step-marker">
          <div class="step-number">{{ step }}</div>
          <div class="step-pulse"></div>
        </div>

        <div class="step-content">
          <div class="step-icon" v-html="t(`workflow.step${step}.icon`)"></div>
          <h3 class="step-title">{{ t(`workflow.step${step}.title`) }}</h3>
          <p class="step-description">{{ t(`workflow.step${step}.desc`) }}</p>
          <div class="step-action">{{ t(`workflow.step${step}.action`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeStep = ref(1)

const setActiveStep = (step: number) => {
  activeStep.value = step
}
</script>

<style scoped>
.workflow-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
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

.workflow-timeline {
  position: relative;
  display: flex;
  gap: 2rem;
  max-width: 1600px;
  width: 100%;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  opacity: 0.3;
  z-index: 0;
}

.workflow-step {
  flex: 1;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.step-marker {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto 2rem;
  z-index: 1;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(102, 126, 234, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
}

.step-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  animation: pulse 2s ease infinite;
  z-index: 1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

.workflow-step.active .step-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
  transform: scale(1.1);
}

.workflow-step.active .step-pulse {
  animation-play-state: running;
}

.step-content {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.workflow-step:hover .step-content {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
}

.workflow-step.active .step-content {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #667eea;
  transition: transform 0.3s ease;
}

.workflow-step.active .step-icon {
  transform: scale(1.1);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.step-description {
  font-size: 0.95rem;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.step-action {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  color: #667eea;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
}

.workflow-step.active .step-action {
  background: rgba(102, 126, 234, 0.25);
  border-color: rgba(102, 126, 234, 0.5);
  color: #a5b4fc;
}

@media (max-width: 1024px) {
  .workflow-timeline {
    flex-direction: column;
    align-items: stretch;
  }

  .timeline-line {
    top: 0;
    bottom: 0;
    left: 2rem;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  }

  .workflow-step {
    display: flex;
    gap: 2rem;
  }

  .step-marker {
    margin: 0;
    flex-shrink: 0;
  }

  .step-content {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .workflow-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .workflow-timeline {
    gap: 1.5rem;
  }

  .timeline-line {
    left: 1.5rem;
  }

  .step-marker {
    width: 50px;
    height: 50px;
  }

  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  .step-pulse {
    width: 50px;
    height: 50px;
  }

  .workflow-step {
    gap: 1.5rem;
  }

  .step-content {
    padding: 1.5rem;
  }

  .step-icon {
    font-size: 2rem;
  }

  .step-title {
    font-size: 1.125rem;
  }

  .step-description {
    font-size: 0.875rem;
  }

  .step-action {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
