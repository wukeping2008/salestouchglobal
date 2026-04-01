<template>
  <section id="salesnail" class="salesnail-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">{{ t('salesNail.badge') }}</span>
        <h2 class="section-title">{{ t('salesNail.title') }}</h2>
        <p class="section-subtitle">{{ t('salesNail.subtitle') }}</p>
      </div>

      <!-- Interactive Demo Preview -->
      <div class="demo-preview">
        <div class="demo-window">
          <div class="window-header">
            <div class="window-dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="window-title">SalesNail Smart Page</div>
          </div>
          <div class="window-body">
            <!-- Left: Input -->
            <div class="input-panel">
              <div class="input-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                <span>Meeting Notes</span>
              </div>
              <div class="input-placeholder">
                <div class="typing-line" v-for="i in 4" :key="i" :style="{ width: `${85 - i * 12}%`, animationDelay: `${i * 0.15}s` }"></div>
              </div>
              <div class="paste-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Pasted from clipboard</span>
              </div>
            </div>

            <!-- Arrow -->
            <div class="arrow-divider">
              <div class="arrow-pulse">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>

            <!-- Right: Output -->
            <div class="output-panel">
              <div class="output-header">
                <div class="score-ring">
                  <svg viewBox="0 0 60 60" width="60" height="60">
                    <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"/>
                    <circle cx="30" cy="30" r="26" fill="none" stroke="url(#scoreGrad)" stroke-width="4"
                            stroke-dasharray="150.8 163.4"
                            stroke-linecap="round"
                            transform="rotate(-90 30 30)"
                            class="score-progress"/>
                    <defs>
                      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#667eea"/>
                        <stop offset="100%" stop-color="#764ba2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span class="score-text">92</span>
                </div>
                <div class="output-meta">
                  <div class="output-title">Expert Sales Script</div>
                  <div class="output-tag">Authority Score: 92/100</div>
                </div>
              </div>
              <div class="output-lines">
                <div class="output-line" v-for="i in 5" :key="i" :style="{ width: `${90 - i * 8}%`, animationDelay: `${0.6 + i * 0.1}s` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="features-grid">
        <div
          v-for="i in 4"
          :key="i"
          class="feature-card"
        >
          <div class="feature-icon" v-html="t(`salesNail.feature${i}.icon`)"></div>
          <h3 class="feature-title">{{ t(`salesNail.feature${i}.title`) }}</h3>
          <p class="feature-desc">{{ t(`salesNail.feature${i}.desc`) }}</p>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="stats-bar">
        <div v-for="i in 4" :key="i" class="stat-item">
          <div class="stat-value">{{ t(`salesNail.stat${i}.value`) }}</div>
          <div class="stat-label">{{ t(`salesNail.stat${i}.label`) }}</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="salesnail-cta">
        <a
          href="https://longarena.ai/sales-nail/index.html?utm_source=longarenaai&utm_medium=landing&utm_campaign=salesnail_section"
          target="_blank"
          rel="noopener"
          class="cta-button-primary"
        >
          <span>{{ t('salesNail.cta') }}</span>
        </a>
        <a
          href="https://longarena.ai/sales-nail/index.html?utm_source=longarenaai&utm_medium=landing&utm_campaign=salesnail_how"
          target="_blank"
          rel="noopener"
          class="cta-button-secondary"
        >
          {{ t('salesNail.ctaSecondary') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.salesnail-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 50%, #0f0f1e 100%);
  position: relative;
  overflow: hidden;
}

.salesnail-section::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
  filter: blur(80px);
  border-radius: 50%;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  color: var(--color-accent-light);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Demo Preview */
.demo-preview {
  margin-bottom: 4rem;
}

.demo-window {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
}

.window-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
}

.window-title {
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  color: #9ca3af;
  font-weight: 500;
}

.window-body {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  padding: 2rem;
  align-items: center;
}

.input-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.input-placeholder {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.typing-line {
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.paste-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.25);
  border-radius: 6px;
  color: #a5b4fc;
  font-size: 0.75rem;
}

.arrow-divider {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-pulse {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  animation: arrowPulse 2s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
  50% { transform: scale(1.08); box-shadow: 0 0 20px 8px rgba(102, 126, 234, 0.2); }
}

.output-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
}

.output-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.score-ring {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.score-progress {
  transition: stroke-dasharray 1s ease;
}

.score-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

.output-meta {
  flex: 1;
}

.output-title {
  font-weight: 600;
  color: #fff;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.output-tag {
  font-size: 0.8rem;
  color: #667eea;
  font-weight: 500;
}

.output-lines {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.output-line {
  height: 8px;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.15));
  border-radius: 4px;
  animation: fadeLineIn 0.5s ease backwards;
}

@keyframes fadeLineIn {
  from { opacity: 0; transform: translateX(10px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Feature Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
}

.feature-icon {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  color: #667eea;
}

.feature-icon :deep(svg) {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;
}

.feature-desc {
  font-size: 0.95rem;
  color: #9ca3af;
  line-height: 1.6;
}

/* Stats Bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #94a3b8;
  font-weight: 500;
}

/* CTA */
.salesnail-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #764ba2, #667eea);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.6);
}

.cta-button-primary:hover::before {
  opacity: 1;
}

.cta-button-primary span {
  position: relative;
  z-index: 1;
}

.cta-button-secondary {
  font-size: 1rem;
  font-weight: 600;
  color: #cbd5e1;
  text-decoration: none;
  border-bottom: 2px solid rgba(102, 126, 234, 0.5);
  padding-bottom: 0.25rem;
  transition: all 0.3s ease;
}

.cta-button-secondary:hover {
  color: #667eea;
  border-bottom-color: #667eea;
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .salesnail-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .window-body {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.25rem;
  }

  .arrow-divider {
    transform: rotate(90deg);
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  .salesnail-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-button-primary {
    width: 100%;
    max-width: 320px;
  }
}
</style>
