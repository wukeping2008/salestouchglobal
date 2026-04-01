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
            <div class="window-title">SalesNail — B2B Sales Simulation</div>
          </div>
          <div class="window-body">
            <!-- Left: Team Panel -->
            <div class="team-panel">
              <div class="panel-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                <span>COMPETING TEAMS</span>
              </div>
              <div class="team-list">
                <div class="team-row team-active">
                  <div class="team-avatar">A</div>
                  <div class="team-info">
                    <div class="team-name">Alpha Team</div>
                    <div class="team-score-bar"><div class="score-fill" style="width: 78%"></div></div>
                  </div>
                  <div class="team-pts">78</div>
                </div>
                <div class="team-row">
                  <div class="team-avatar">B</div>
                  <div class="team-info">
                    <div class="team-name">Beta Team</div>
                    <div class="team-score-bar"><div class="score-fill" style="width: 65%"></div></div>
                  </div>
                  <div class="team-pts">65</div>
                </div>
                <div class="team-row">
                  <div class="team-avatar">C</div>
                  <div class="team-info">
                    <div class="team-name">Gamma Team</div>
                    <div class="team-score-bar"><div class="score-fill" style="width: 52%"></div></div>
                  </div>
                  <div class="team-pts">52</div>
                </div>
              </div>
            </div>

            <!-- Center: Game Board -->
            <div class="game-board">
              <div class="round-indicator">
                <div class="round-dot active"></div>
                <div class="round-connector"></div>
                <div class="round-dot active"></div>
                <div class="round-connector"></div>
                <div class="round-dot"></div>
              </div>
              <div class="round-label">Round 2 / 3</div>
              <div class="opportunity-grid">
                <div class="opp-card won">
                  <div class="opp-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
                  </div>
                  <span>Deal 1</span>
                </div>
                <div class="opp-card active">
                  <div class="opp-icon pulse">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <span>Deal 2</span>
                </div>
                <div class="opp-card">
                  <div class="opp-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                  </div>
                  <span>Deal 3</span>
                </div>
                <div class="opp-card">
                  <div class="opp-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                  </div>
                  <span>Deal 4</span>
                </div>
              </div>
              <div class="npc-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>NPC: VP of Procurement</span>
              </div>
            </div>

            <!-- Right: Strategy Cards -->
            <div class="strategy-panel">
              <div class="panel-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                <span>ACTION CARDS</span>
              </div>
              <div class="card-stack">
                <div class="strategy-card card-played">
                  <div class="card-type">Resource</div>
                  <div class="card-name">Deploy Tech Expert</div>
                </div>
                <div class="strategy-card card-ready">
                  <div class="card-type">Timing</div>
                  <div class="card-name">Schedule C-Suite Meeting</div>
                </div>
                <div class="strategy-card card-ready">
                  <div class="card-type">Process</div>
                  <div class="card-name">Customize Proposal</div>
                </div>
              </div>
              <div class="ai-scenario-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M12 2a4 4 0 014 4c0 1.95-2 4-4 6-2-2-4-4.05-4-6a4 4 0 014-4z"/><path d="M12 12v6"/></svg>
                <span>AI Scenario: Pharma Enterprise</span>
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
          href="https://www.long-arena.com/?utm_source=longarenaai&utm_medium=landing&utm_campaign=salesnail_section"
          target="_blank"
          rel="noopener"
          class="cta-button-primary"
        >
          <span>{{ t('salesNail.cta') }}</span>
        </a>
        <a
          href="https://www.long-arena.com/?utm_source=longarenaai&utm_medium=landing&utm_campaign=salesnail_how"
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
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
  align-items: start;
}

/* Team Panel */
.team-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
}

.panel-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.team-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.team-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.team-row.team-active {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.25);
}

.team-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.team-info {
  flex: 1;
  min-width: 0;
}

.team-name {
  font-size: 0.8rem;
  color: #e2e8f0;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.team-score-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

.score-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
  transition: width 1s ease;
}

.team-pts {
  font-size: 0.85rem;
  font-weight: 700;
  color: #a5b4fc;
  flex-shrink: 0;
}

/* Game Board */
.game-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.round-indicator {
  display: flex;
  align-items: center;
  gap: 0;
}

.round-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.round-dot.active {
  background: #667eea;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

.round-connector {
  width: 32px;
  height: 2px;
  background: rgba(255, 255, 255, 0.12);
}

.round-label {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.opportunity-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  width: 100%;
}

.opp-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.opp-card span {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
}

.opp-card.won {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.08);
}

.opp-card.won .opp-icon {
  color: #22c55e;
}

.opp-card.won span {
  color: #22c55e;
}

.opp-card.active {
  border-color: rgba(102, 126, 234, 0.4);
  background: rgba(102, 126, 234, 0.12);
  animation: cardGlow 2s ease-in-out infinite;
}

.opp-card.active .opp-icon {
  color: #fbbf24;
}

.opp-card.active span {
  color: #fbbf24;
}

@keyframes cardGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
  50% { box-shadow: 0 0 16px 4px rgba(102, 126, 234, 0.15); }
}

.opp-icon {
  color: #64748b;
  line-height: 0;
}

.opp-icon.pulse {
  animation: iconPulse 1.5s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.npc-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.25);
  border-radius: 6px;
  color: #fbbf24;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Strategy Panel */
.strategy-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
}

.card-stack {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.strategy-card {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.strategy-card.card-played {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.25);
  opacity: 0.6;
}

.strategy-card.card-ready {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}

.strategy-card.card-ready:hover {
  border-color: rgba(102, 126, 234, 0.3);
  background: rgba(102, 126, 234, 0.08);
}

.card-type {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.card-name {
  font-size: 0.8rem;
  color: #e2e8f0;
  font-weight: 500;
}

.ai-scenario-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 6px;
  color: #a78bfa;
  font-size: 0.7rem;
  font-weight: 500;
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

  .game-board {
    order: -1;
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
