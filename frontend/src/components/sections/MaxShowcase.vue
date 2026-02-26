<template>
  <section id="max-demo" class="max-showcase">
    <div class="section-header">
      <h2 class="section-title">{{ t('max.title') }}</h2>
      <p class="section-subtitle">{{ t('max.subtitle') }}</p>
    </div>

    <div class="demo-container">
      <div class="demo-controls">
        <button
          v-for="step in 3"
          :key="step"
          :class="['step-button', { active: currentStep === step }]"
          @click="setStep(step)"
        >
          <span class="step-number">{{ step }}</span>
          <span class="step-title">{{ t(`max.step${step}Title`) }}</span>
        </button>
      </div>

      <div class="demo-content">
        <div class="demo-grid">
          <!-- Left: Screen Preview -->
          <div class="screen-preview">
            <div class="screen-header">
              <div class="screen-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="screen-title">{{ t(`max.step${currentStep}Title`) }}</div>
            </div>
            <div class="screen-body">
              <div v-if="currentStep === 1" class="step-visual">
                <div class="email-preview">
                  <div class="email-header">
                    <div class="email-avatar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div class="email-meta">
                      <div class="email-subject">{{ t('max.step1Visual.subject') }}</div>
                      <div class="email-from">{{ t('max.step1Visual.from') }}</div>
                    </div>
                  </div>
                  <div class="email-body">
                    <p>{{ t('max.step1Visual.content') }}</p>
                  </div>
                  <div class="analysis-badge">
                    <span class="badge-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><circle cx="8" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none"/></svg>
                    </span>
                    <span>{{ t('max.step1Visual.analyzing') }}</span>
                  </div>
                </div>
              </div>

              <div v-if="currentStep === 2" class="step-visual">
                <div class="suggestions-container">
                  <div
                    v-for="(_suggestion, idx) in 3"
                    :key="idx"
                    class="suggestion-card"
                    :style="{ animationDelay: `${idx * 0.1}s` }"
                  >
                    <div class="suggestion-header">
                      <div class="skill-confidence-ring">
                        <svg width="48" height="48" viewBox="0 0 48 48" class="confidence-circle">
                          <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"/>
                          <circle cx="24" cy="24" r="20" fill="none" stroke="url(#gradient)" stroke-width="3"
                                  :stroke-dasharray="`${[95, 88, 92][idx] * 1.256} 125.6`"
                                  stroke-linecap="round"
                                  transform="rotate(-90 24 24)"
                                  class="confidence-progress"/>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#667eea"/>
                              <stop offset="100%" stop-color="#764ba2"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        <span class="confidence-percent">{{ ['95', '88', '92'][idx] }}</span>
                      </div>
                      <div class="suggestion-info">
                        <span class="suggestion-icon" v-html="suggestionIcons[idx]"></span>
                        <span class="suggestion-type">{{ t(`max.step2Visual.suggestion${idx + 1}.type`) }}</span>
                      </div>
                    </div>
                    <div class="suggestion-text">{{ t(`max.step2Visual.suggestion${idx + 1}.text`) }}</div>
                  </div>
                </div>
              </div>

              <div v-if="currentStep === 3" class="step-visual">
                <div class="action-result">
                  <div class="result-header">
                    <span class="result-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span class="result-status">{{ t('max.step3Visual.status') }}</span>
                  </div>
                  <div class="proposal-preview">
                    <div class="proposal-header">
                      <div class="proposal-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                      </div>
                      <div class="proposal-meta">
                        <div class="proposal-title">Northstar Medical - Pilot Pricing Proposal</div>
                        <div class="proposal-subtitle">Generated in 28 seconds</div>
                      </div>
                    </div>
                    <div class="proposal-actions">
                      <button class="proposal-btn proposal-btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        <span>Copy Shareable Link</span>
                      </button>
                      <button class="proposal-btn proposal-btn-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        <span>Export PDF</span>
                      </button>
                    </div>
                  </div>
                  <div class="next-steps">
                    <div class="next-step-title">{{ t('max.step3Visual.nextSteps') }}</div>
                    <div
                      v-for="i in 2"
                      :key="i"
                      class="next-step-item"
                    >
                      {{ t(`max.step3Visual.nextStep${i}`) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Step Description -->
          <div class="step-description">
            <h3 class="description-title">{{ t(`max.step${currentStep}Title`) }}</h3>
            <p class="description-text">{{ t(`max.step${currentStep}Desc`) }}</p>
            <div class="description-features">
              <div
                v-for="i in 3"
                :key="i"
                class="feature-item"
              >
                <span class="feature-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span class="feature-text">{{ t(`max.step${currentStep}Feature${i}`) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-progress">
          <div
            v-for="step in 3"
            :key="step"
            :class="['progress-dot', { active: currentStep === step }]"
            @click="setStep(step)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const suggestionIcons = [
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>',
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
]

const currentStep = ref(1)
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

const setStep = (step: number) => {
  currentStep.value = step
  resetAutoPlay()
}

const nextStep = () => {
  currentStep.value = currentStep.value >= 3 ? 1 : currentStep.value + 1
}

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextStep, 5000)
}

const resetAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<style scoped>
.max-showcase {
  padding: 6rem 2rem;
  background: #1a1a2e;
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

.demo-container {
  max-width: 1400px;
  width: 100%;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
}

.step-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.step-button:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(102, 126, 234, 0.3);
}

.step-button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  font-weight: 600;
}

.step-button.active .step-number {
  background: rgba(255, 255, 255, 0.2);
}

.step-title {
  font-weight: 500;
}

.demo-content {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.screen-preview {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
}

.screen-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.screen-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.screen-title {
  font-size: 0.9rem;
  color: #9ca3af;
  flex: 1;
  text-align: center;
}

.screen-body {
  padding: 2rem;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-visual {
  width: 100%;
}

/* Step 1: Email Preview */
.email-preview {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
}

.email-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.email-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a5b4fc;
}

.email-meta {
  flex: 1;
}

.email-subject {
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.email-from {
  font-size: 0.875rem;
  color: #9ca3af;
}

.email-body {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.analysis-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  color: #a5b4fc;
  font-size: 0.875rem;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.badge-icon {
  display: flex;
  align-items: center;
  color: #a5b4fc;
}

/* Step 2: Suggestions */
.suggestions-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.suggestion-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  animation: slideInRight 0.5s ease backwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.suggestion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.skill-confidence-ring {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.confidence-circle {
  transform-origin: center;
}

.confidence-progress {
  transition: stroke-dasharray 0.8s ease;
}

.confidence-percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
}

.suggestion-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.suggestion-icon {
  display: flex;
  align-items: center;
  color: #a5b4fc;
}

.suggestion-type {
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 500;
}

.suggestion-text {
  color: #d1d5db;
  line-height: 1.5;
}

/* Step 3: Action Result */
.action-result {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
}

.result-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.result-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #667eea;
}

.result-status {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.proposal-preview {
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
}

.proposal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.proposal-icon {
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a5b4fc;
  flex-shrink: 0;
}

.proposal-meta {
  flex: 1;
}

.proposal-title {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.25rem;
}

.proposal-subtitle {
  font-size: 0.75rem;
  color: #9ca3af;
}

.proposal-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.proposal-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.proposal-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.proposal-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.proposal-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.proposal-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
}

.next-steps {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.next-step-title {
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.next-step-item {
  padding: 0.75rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
  color: #d1d5db;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

/* Step Description */
.step-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.description-text {
  font-size: 1.1rem;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.description-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-check {
  color: #667eea;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-text {
  color: #d1d5db;
  line-height: 1.5;
  flex: 1;
}

/* Progress Dots */
.demo-progress {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.progress-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.progress-dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.progress-dot.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 32px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .max-showcase {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .demo-controls {
    flex-direction: column;
    gap: 0.75rem;
  }

  .step-button {
    width: 100%;
    justify-content: center;
  }

  .demo-content {
    padding: 1.5rem;
  }

  .demo-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .screen-body {
    min-height: 300px;
    padding: 1rem;
  }

  .description-title {
    font-size: 1.5rem;
  }

  .description-text {
    font-size: 1rem;
  }
}
</style>
