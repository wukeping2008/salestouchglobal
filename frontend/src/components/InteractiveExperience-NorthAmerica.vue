<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('coach')
const tabs = [
  { id: 'coach', name: 'Mentor Simulator', icon: '🎯' },
  { id: 'nail', name: 'Expert Engine', icon: '⚡' }
]

const selectTab = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <section class="experience-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Experience AI-Powered Sales Excellence</h2>
        <p class="section-subtitle">Try our engine below. No sign-up required.</p>
      </div>

      <!-- Tabs -->
      <div class="tabs-container">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="selectTab(tab.id)"
          :class="{ active: activeTab === tab.id }"
          class="tab-btn"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-name">{{ tab.name }}</span>
        </button>
      </div>

      <!-- Tab Content: Mentor Simulator -->
      <div v-show="activeTab === 'coach'" class="tab-content tab-coach">
        <div class="coach-container">
          <!-- AI Avatar -->
          <div class="ai-avatar-wrapper">
            <div class="ai-avatar">🤖</div>
            <div class="avatar-badge">AI Sales Coach</div>
          </div>

          <!-- Chat Interface -->
          <div class="chat-interface">
            <div class="chat-message coach-message">
              <div class="message-content">
                <div class="greeting">
                  👋 Hello! I'm your AI-powered Sales Coach.
                </div>
                <div class="introduction">
                  I've analyzed thousands of successful sales conversations and patterns from top North American sales leaders.
                </div>
                <div class="offer">
                  <strong>Let me help you master the art of closing.</strong>
                </div>
                <div class="incentives">
                  <span class="incentive">✨ Share your current sales scenario</span>
                  <span class="incentive">💡 Get expert-level SPIN/FAB feedback</span>
                  <span class="incentive">🚀 Practice in a safe, risk-free environment</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Suggestions -->
          <div class="suggestions-container">
            <h3 class="suggestions-title">Quick Start Scenarios</h3>
            
            <div class="suggestion-card" @click="selectScenario('tech')">
              <div class="scenario-icon">💻</div>
              <div class="scenario-content">
                <div class="scenario-title">Technology Enterprise</div>
                <div class="scenario-desc">Selling to CTOs and CIOs</div>
                <div class="scenario-meta">
                  <span class="meta-tag">Avg Deal: $500K</span>
                  <span class="meta-tag">Cycle: 90 days</span>
                </div>
              </div>
            </div>

            <div class="suggestion-card" @click="selectScenario('healthcare')">
              <div class="scenario-icon">🏥</div>
              <div class="scenario-content">
                <div class="scenario-title">Healthcare Sales</div>
                <div class="scenario-desc">Selling to hospital administrators</div>
                <div class="scenario-meta">
                  <span class="meta-tag">Avg Deal: $250K</span>
                  <span class="meta-tag">Cycle: 60 days</span>
                </div>
              </div>
            </div>

            <div class="suggestion-card" @click="selectScenario('finance')">
              <div class="scenario-icon">💰</div>
              <div class="scenario-content">
                <div class="scenario-title">Financial Services</div>
                <div class="scenario-desc">Selling to CFOs and treasurers</div>
                <div class="scenario-meta">
                  <span class="meta-tag">Avg Deal: $750K</span>
                  <span class="meta-tag">Cycle: 120 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content: Expert Engine -->
      <div v-show="activeTab === 'nail'" class="tab-content tab-nail">
        <div class="nail-container">
          <!-- Input Simulation -->
          <div class="input-simulation">
            <div class="input-header">
              <div class="input-icon">📝</div>
              <div class="input-title">Paste Your Notes</div>
              <div class="input-subtitle">Raw meeting notes, transcripts, or bullet points</div>
            </div>

            <textarea
              class="input-textarea"
              placeholder="Paste your meeting notes here...

Example:
- Prospected: TechCorp
- Industry: Enterprise Software
- Budget: $500K/year
- Decision Maker: CTO, VP of Engineering
- Pain Points: Legacy systems, integration complexity
- Current Process: 6-month evaluation cycle, 20% conversion rate..."
              rows="8"
            ></textarea>

            <div class="ai-status">
              <div class="status-icon">⚡</div>
              <div class="status-text">
                <div class="status-main">AI Analysis Ready</div>
                <div class="status-sub">Click "Generate" to create your expert landing page</div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="action-btn primary">
              <span class="btn-icon">🚀</span>
              <span class="btn-text">Generate Landing Page</span>
            </button>
            <button class="action-btn secondary">
              <span class="btn-icon">📋</span>
              <span class="btn-text">Save Notes</span>
            </button>
          </div>

          <!-- Preview Section -->
          <div class="preview-section">
            <div class="preview-header">
              <div class="preview-icon">👁</div>
              <div class="preview-title">Preview Your Result</div>
              <div class="preview-subtitle">See how your notes transform into a pro landing page</div>
            </div>

            <div class="preview-content">
              <!-- Preview Card -->
              <div class="preview-card">
                <div class="preview-hero">
                  <h2 class="preview-hero-title">Transform Your Sales Process</h2>
                  <p class="preview-hero-subtitle">From manual chaos to automated excellence</p>
                </div>

                <div class="preview-features">
                  <div class="preview-feature">
                    <span class="feature-icon">⚡</span>
                    <span class="feature-text">AI-Powered Optimization</span>
                  </div>
                  <div class="preview-feature">
                    <span class="feature-icon">📊</span>
                    <span class="feature-text">Data-Driven Insights</span>
                  </div>
                  <div class="preview-feature">
                    <span class="feature-icon">🎨</span>
                    <span class="feature-text">Professional Visual Design</span>
                  </div>
                </div>

                <div class="preview-metrics">
                  <div class="preview-metric">
                    <span class="metric-icon">📈</span>
                    <span class="metric-text">+15x Faster</span>
                  </div>
                  <div class="preview-metric">
                    <span class="metric-icon">💰</span>
                    <span class="metric-text">+42% Conversion</span>
                  </div>
                </div>

                <div class="preview-cta">
                  <button class="preview-cta-btn">
                    <span class="cta-icon">👉</span>
                    <span class="cta-text">Get Started</span>
                  </button>
                </div>
              </div>

              <div class="preview-url">
                <span class="url-badge">https://</span>
                <span class="url-domain">salesnail.io/</span>
                <span class="url-slug">techcorp-2026-sales-page</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="experience-cta">
        <h3 class="cta-title">Ready to Elevate Your Sales Game?</h3>
        <p class="cta-subtitle">Join 500+ North American sales leaders using AI to scale their expertise</p>
        
        <div class="cta-group">
          <a href="#start-free-trial" class="cta-button primary">
            <span class="cta-icon">🎯</span>
            <span class="cta-text">Start 14-Day Free Trial</span>
            <span class="cta-subtext">No credit card required</span>
          </a>
          <a href="#contact-demo" class="cta-button secondary">
            <span class="cta-icon">💬</span>
            <span class="cta-text">Book Demo</span>
            <span class="cta-subtext">Talk to a sales expert</span>
          </a>
        </div>

        <!-- Social Proof -->
        <div class="social-proof-experience">
          <div class="proof-item">
            <span class="proof-icon">👥</span>
            <span class="proof-text">Used by 500+ Enterprise Sales Teams</span>
          </div>
          <div class="proof-item">
            <span class="proof-icon">⭐</span>
            <span class="proof-text">4.9/5 Average Rating</span>
          </div>
          <div class="proof-item">
            <span class="proof-icon">🏆</span>
            <span class="proof-text">#1 AI Sales Coach in North America</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #FFF0F5, #FFE5D9);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: #FF6F61;
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
}

/* Tabs */
.tabs-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  border: 2px solid #FF6F61;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 600;
  color: #FF6F61;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.tab-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tab-btn.active {
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  border-color: #FF6F61;
  box-shadow: 0 0 20px rgba(255, 111, 97, 0.3);
}

.tab-icon {
  font-size: 1.5rem;
}

.tab-name {
  font-weight: 600;
}

/* Tab Content */
.tab-content {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-coach, .tab-nail {
  display: block;
}

/* Coach Simulator */
.coach-container {
  max-width: 800px;
  margin: 0 auto;
}

.ai-avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.ai-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.avatar-badge {
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
}

/* Chat Interface */
.chat-interface {
  background: linear-gradient(135deg, #FFF0F5, #FFE5D9);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 2px solid #FF6F61;
}

.chat-message {
  margin-bottom: 1.5rem;
}

.coach-message {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #FF6F61;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.message-content {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
}

.greeting {
  font-size: 1.25rem;
  font-weight: 700;
  color: #FF6F61;
  margin-bottom: 1rem;
}

.introduction {
  color: #666;
  margin-bottom: 1rem;
}

.offer {
  background: rgba(255, 111, 97, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #FF6F61;
  margin-bottom: 1.5rem;
}

.offer strong {
  color: #FF6F61;
  font-weight: 700;
}

.incentives {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.incentive {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4CAF50;
  font-weight: 600;
  font-size: 1rem;
}

/* Suggestions */
.suggestions-container {
  margin-top: 2rem;
}

.suggestions-title {
  font-size: 1.25rem;
  color: #FF6F61;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.suggestion-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #FFF0F5, #FFFFFF);
  padding: 1.5rem;
  border-radius: 16px;
  border: 2px solid #FF6F61;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.suggestion-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: #FFFFFF;
}

.scenario-icon {
  font-size: 2rem;
}

.scenario-content {
  flex: 1;
}

.scenario-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.scenario-desc {
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.scenario-meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.meta-tag {
  background: #FF6F61;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Expert Engine */
.nail-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Input Simulation */
.input-simulation {
  background: linear-gradient(135deg, #FFF0F5, #FFFFFF);
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid #FF6F61;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.input-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.input-icon {
  font-size: 2rem;
}

.input-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.input-subtitle {
  color: #666;
  font-size: 0.9375rem;
}

.input-textarea {
  width: 100%;
  min-height: 250px;
  padding: 1rem;
  border: 2px solid #FF6F61;
  border-radius: 12px;
  font-size: 1rem;
  color: #333;
  font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
  line-height: 1.6;
  resize: vertical;
  background: white;
  transition: all 0.3s ease;
}

.input-textarea:focus {
  outline: none;
  border-color: #FF9800;
  box-shadow: 0 0 0 4px rgba(255, 111, 97, 0.2);
}

.input-textarea::placeholder {
  color: #999;
}

.ai-status {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #FFF0F5, #FFFFFF);
  border-radius: 12px;
  border: 1px solid #FF6F61;
}

.status-icon {
  font-size: 2rem;
}

.status-text {
  flex: 1;
}

.status-main {
  font-size: 1.25rem;
  font-weight: 700;
  color: #FF6F61;
  margin-bottom: 0.25rem;
}

.status-sub {
  font-size: 0.9375rem;
  color: #666;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 2rem;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.action-btn.primary {
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  box-shadow: 0 10px 30px rgba(255, 111, 97, 0.3);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(255, 111, 97, 0.4);
}

.action-btn.secondary {
  background: white;
  color: #FF6F61;
  border-color: #FF6F61;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.action-btn.secondary:hover {
  background: #FFF0F5;
  border-color: #FF9800;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.btn-icon {
  font-size: 1.25rem;
}

.btn-text {
  font-weight: 700;
}

/* Preview Section */
.preview-section {
  background: linear-gradient(135deg, #FFF0F5, #FFFFFF);
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid #FF6F61;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #FFE5D9;
}

.preview-icon {
  font-size: 2rem;
}

.preview-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
}

.preview-subtitle {
  color: #666;
  font-size: 0.9375rem;
}

/* Preview Card */
.preview-content {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid #FF6F61;
}

.preview-card {
  background: linear-gradient(135deg, #144272, #0A2647);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.preview-hero-title {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
}

.preview-hero-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.preview-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.preview-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.feature-icon {
  font-size: 1.25rem;
}

.feature-text {
  color: white;
  font-size: 0.9375rem;
  font-weight: 600;
}

.preview-metrics {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.preview-metric {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.metric-icon {
  font-size: 1.25rem;
}

.metric-text {
  color: white;
  font-size: 0.9375rem;
  font-weight: 700;
}

.preview-cta {
  text-align: center;
  margin-top: 2rem;
}

.preview-cta-btn {
  background: white;
  color: #0A2647;
  border: 2px solid white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-cta-btn:hover {
  background: #FF6F61;
  color: white;
  border-color: #FF6F61;
  transform: translateY(-2px);
}

.cta-icon {
  margin-right: 0.5rem;
}

.cta-text {
  font-weight: 700;
}

.cta-subtext {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
}

.preview-url {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  font-family: 'SF Mono', 'Monaco', monospace;
}

.url-badge {
  color: #4CAF50;
  font-weight: 700;
  font-size: 0.875rem;
}

.url-domain {
  color: white;
  font-weight: 600;
}

.url-slug {
  color: #FFD700;
  font-weight: 600;
}

/* Call to Action */
.experience-cta {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  border-radius: 20px;
  color: white;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.cta-subtitle {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.cta-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button.primary {
  background: white;
  color: #FF6F61;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.cta-button.primary:hover {
  background: #FFF0F5;
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.cta-icon {
  font-size: 1.5rem;
}

.cta-text {
  font-size: 1.125rem;
}

.cta-subtext {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Social Proof */
.social-proof-experience {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.proof-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 50px;
}

.proof-icon {
  font-size: 1.5rem;
}

.proof-text {
  font-size: 0.9375rem;
  font-weight: 600;
  color: white;
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .tabs-container {
    flex-wrap: wrap;
  }

  .tab-btn {
    flex: 1;
    min-width: 150px;
    justify-content: center;
  }

  .suggestions-container {
    grid-template-columns: 1fr;
  }

  .suggestion-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .preview-features {
    gap: 0.75rem;
  }

  .cta-group {
    flex-direction: column;
  }

  .social-proof-experience {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 0.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .experience-section {
    padding: 3rem 0;
  }

  .experience-cta {
    padding: 2rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .input-textarea {
    min-height: 200px;
  }
}
</style>
