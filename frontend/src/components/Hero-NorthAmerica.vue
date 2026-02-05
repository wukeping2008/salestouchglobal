<script setup lang="ts">
import { ref } from 'vue'

const activeProduct = ref('salesTouch')
const showDropdown = ref(false)

const products = [
  {
    id: 'salesTouch',
    name: ' SalesTouch',
    tagline: 'AI Sales Coach',
    description: 'Real-time AI coaching with SPIN & FAB method'
  },
  {
    id: 'salesNail',
    name: ' SalesNail',
    tagline: 'Smart Page Generator',
    description: 'Generate professional sales pages in seconds'
  }
]

const selectProduct = (productId: string) => {
  activeProduct.value = productId
  showDropdown.value = false
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <section class="hero-section">
    <!-- Background Effects -->
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="hero-glow hero-glow-3"></div>
    
    <div class="hero-container">
      <div class="hero-content">
        
        <!-- Trust Badges -->
        <div class="trust-badges">
          <span class="badge badge-primary">
             #1 AI Sales Coach in North America
          </span>
          <span class="badge badge-secondary">
             14-Day Free Trial - No Credit Card
          </span>
          <span class="badge badge-tertiary">
             Trusted by 500+ Enterprise Sales Teams
          </span>
        </div>

        <!-- Main Headline -->
        <h1 class="hero-title">
          Stop Trading Time for Money. 
          <span class="highlight-text">Scale Your Sales Expertise</span> 
          with an AI Engine Thinks, Closes, and Coaches Like You.
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle">
          The First AI Architecture Built for Sales Experts. 
          <strong>Empower Your Sales Team</strong> with Precision-Driven AI that 
          <span class="highlight-text">Doubles Your Deal Velocity</span>.
        </p>

        <!-- Key Metrics -->
        <div class="metrics-container">
          <div class="metric-card">
            <div class="metric-icon">DATA</div>
            <div class="metric-content">
              <div class="metric-value">Top 1%</div>
              <div class="metric-label">North America</div>
              <div class="metric-sublabel">Sales Logic</div>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">DATA</div>
            <div class="metric-content">
              <div class="metric-value">$4.2M</div>
              <div class="metric-label">Revenue Impact</div>
              <div class="metric-sublabel">For Clients</div>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">DATA</div>
            <div class="metric-content">
              <div class="metric-value">15x</div>
              <div class="metric-label">Velocity Gain</div>
              <div class="metric-sublabel">Deal Speed</div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="cta-group">
          <a href="#salesTouch" 
             :class="{ 'cta-primary': activeProduct === 'salesTouch' }"
             class="cta-button">
            <span class="cta-icon"></span>
            <span class="cta-text">Start Free Trial</span>
            <span class="cta-subtext">14 days, no credit card</span>
          </a>
          
          <a href="#demo" class="cta-button cta-secondary">
            <span class="cta-icon"></span>
            <span class="cta-text">Try Demo</span>
            <span class="cta-subtext">Interactive experience</span>
          </a>
        </div>

        <!-- Social Proof -->
        <div class="social-proof">
          <div class="social-stat">
            <div class="social-icon"></div>
            <div class="social-content">
              <div class="social-value">500+</div>
              <div class="social-label">Enterprise Teams</div>
            </div>
          </div>

          <div class="social-stat">
            <div class="social-icon"></div>
            <div class="social-content">
              <div class="social-value">4.9/5</div>
              <div class="social-label">G2 Rating</div>
            </div>
          </div>

          <div class="social-stat">
            <div class="social-icon"></div>
            <div class="social-content">
              <div class="social-value">#1</div>
              <div class="social-label">North America</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Visual Side -->
      <div class="hero-visual">
        
        <!-- Product Switcher -->
        <div class="product-switcher">
          <button 
            v-for="product in products"
            :key="product.id"
            @click="selectProduct(product.id)"
            :class="{ 'active': activeProduct === product.id }"
            class="product-tab"
          >
            <span class="tab-icon">{{ product.name.split(' ')[0] }}</span>
            <span class="tab-text">{{ product.tagline }}</span>
          </button>
        </div>

        <!-- SalesTouch Product Card -->
        <div v-show="activeProduct === 'salesTouch'" class="product-card product-salesTouch">
          <div class="product-badge">AI Sales Coach</div>
          <div class="product-visual">
            <div class="glass-card glass-card-large">
              <div class="ai-avatar"></div>
              <div class="chat-bubble">
                <div class="chat-message">
                  I see you're working on Technology sector. Based on SPIN method, 
                  your next question should focus on <span class="highlight">"Cost of Inaction"</span>.
                </div>
                <div class="chat-suggestions">
                  <div class="suggestion"> Ask about resource drain</div>
                  <div class="suggestion"> Ask about missed opportunity cost</div>
                  <div class="suggestion"> Pivot to pay-off</div>
                </div>
              </div>
            </div>
            <div class="overlay-stat">
              <span class="stat-value">Expert Level</span>
              <span class="stat-label">Confidence Score</span>
            </div>
          </div>

          <div class="product-features">
            <div class="feature-item">
              <span class="feature-icon"></span>
              <span class="feature-text">Real-time AI feedback & coaching</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon"></span>
              <span class="feature-text">Expert-level conversation logic (SPIN, FAB)</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon"></span>
              <span class="feature-text">Scale coaching to millions simultaneously</span>
            </div>
          </div>
        </div>

        <!-- SalesNail Product Card -->
        <div v-show="activeProduct === 'salesNail'" class="product-card product-salesNail">
          <div class="product-badge">Smart Page Generator</div>
          <div class="product-visual">
            <div class="glass-card glass-card-large">
              <div class="input-simulation">
                <div class="input-field">
                  <span class="input-label">Raw Meeting Notes:</span>
                  <textarea class="input-textarea" readonly></textarea>
                </div>
                <div class="ai-processing">
                  <span class="processing-icon"></span>
                  <span class="processing-text">AI Generating...</span>
                </div>
              </div>
              <div class="output-result">
                <div class="result-title">Professional Sales Landing Page</div>
                <div class="result-url">
                  <span class="url-badge">https://</span>
                  <span class="url-domain">salesnail.io/</span>
                  <span class="url-slug">enterprise-sales-strategy-2026</span>
                </div>
                <div class="result-preview">
                  <div class="preview-mini-landing">
                    <div class="preview-hero">Stop Trading Time for Money</div>
                    <div class="preview-cta">Get Started </div>
                    <div class="preview-metrics">
                      <span class="preview-stat">15x</span> faster
                      <span class="preview-stat">42%</span> conversion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-features">
            <div class="feature-item">
              <span class="feature-icon"></span>
              <span class="feature-text">Generate professional sales pages in seconds</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon"></span>
              <span class="feature-text">From simple notes or meeting transcripts</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon"></span>
              <span class="feature-text">High-authority visual boards that command respect</span>
            </div>
          </div>
        </div>

        <!-- Guide Arrow -->
        <div class="guide-arrow">
          <span class="arrow-text">See how it works </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0A2647 0%, #144272 50%, #205295 100%);
  overflow: hidden;
  padding-top: 80px;
}

/* Background Effects */
.hero-glow {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.hero-glow-1 {
  width: 400px;
  height: 400px;
  top: 10%;
  left: 10%;
  background: radial-gradient(circle, #4BC0C0 0%, transparent 70%);
}

.hero-glow-2 {
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  background: radial-gradient(circle, #00D68F 0%, transparent 70%);
}

.hero-glow-3 {
  width: 500px;
  height: 500px;
  bottom: 10%;
  right: 10%;
  background: radial-gradient(circle, #FFD700 0%, transparent 70%);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
}

/* Container */
.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 10;
}

.hero-content {
  color: white;
}

/* Trust Badges */
.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.badge-primary {
  background: rgba(255, 215, 0, 0.15);
  border-color: rgba(255, 215, 0, 0.3);
  color: #FFD700;
}

.badge-secondary {
  background: rgba(0, 255, 136, 0.15);
  border-color: rgba(0, 255, 136, 0.3);
  color: #00FF88;
}

.badge-tertiary {
  background: rgba(75, 192, 192, 0.15);
  border-color: rgba(75, 192, 192, 0.3);
  color: #4BC0C0;
}

/* Title */
.hero-title {
  font-size: 3.5rem;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.highlight-text {
  color: #FFD700;
  position: relative;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  font-weight: 400;
}

.hero-subtitle strong {
  color: #4BC0C0;
  font-weight: 600;
}

/* Metrics */
.metrics-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.metric-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.metric-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
}

.metric-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.metric-content {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-size: 2rem;
  font-weight: 800;
  color: #4BC0C0;
  margin-bottom: 0.25rem;
}

.metric-label {
  font-size: 0.875rem;
  color: #E0E0E0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.metric-sublabel {
  font-size: 0.75rem;
  color: #B0B0B0;
  opacity: 0.8;
}

/* CTA Group */
.cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.cta-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  flex: 1;
  min-width: 200px;
}

.cta-primary {
  background: linear-gradient(135deg, #00D68F 0%, #00A3BF 100%);
  color: white;
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 214, 111, 0.3);
}

.cta-primary:hover {
  background: linear-gradient(135deg, #00A3BF 0%, #0085B0 100%);
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 214, 111, 0.4);
  border-color: rgba(255, 255, 255, 0.2);
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.cta-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.cta-text {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  text-align: center;
}

.cta-subtext {
  font-size: 0.75rem;
  opacity: 0.8;
  text-align: center;
}

/* Social Proof */
.social-proof {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-stat {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-icon {
  font-size: 1.5rem;
}

.social-content {
  display: flex;
  flex-direction: column;
}

.social-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #4BC0C0;
  margin-bottom: 0.25rem;
}

.social-label {
  font-size: 0.75rem;
  color: #E0E0E0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* Visual Side */
.hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

/* Product Switcher */
.product-switcher {
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.product-tab {
  flex: 1;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.product-tab:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.product-tab.active {
  background: rgba(0, 214, 111, 0.2);
  border-color: #00D68F;
  box-shadow: 0 0 20px rgba(0, 214, 111, 0.3);
}

.tab-icon {
  font-size: 1.25rem;
}

.tab-text {
  font-size: 0.875rem;
  opacity: 0.9;
}

.product-tab.active .tab-text {
  opacity: 1;
  color: #00D68F;
}

/* Product Cards */
.product-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.5s ease-out;
  max-width: 550px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card.product-salesTouch {
  border-color: rgba(255, 215, 0, 0.2);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.15);
}

.product-card.product-salesNail {
  border-color: rgba(255, 165, 0, 0.2);
  box-shadow: 0 20px 40px rgba(255, 165, 0, 0.15);
}

.product-badge {
  font-size: 0.875rem;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.product-visual {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
}

.ai-avatar {
  font-size: 5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.chat-bubble {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 2rem;
}

.chat-message {
  font-size: 1rem;
  line-height: 1.6;
  color: #E0E0E0;
  margin-bottom: 1rem;
}

.chat-message .highlight {
  color: #FFD700;
  font-weight: 600;
  background: rgba(255, 215, 0, 0.1);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
}

.chat-suggestions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.suggestion {
  font-size: 0.875rem;
  color: #4BC0C0;
  background: rgba(75, 192, 192, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(75, 192, 192, 0.2);
}

/* Input Simulation */
.input-simulation {
  margin-bottom: 2rem;
}

.input-field {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  font-size: 0.75rem;
  color: #B0B0B0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.input-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  color: #E0E0E0;
  font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  min-height: 80px;
}

.ai-processing {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 12px;
  margin-top: 1rem;
}

.processing-icon {
  font-size: 1.5rem;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.processing-text {
  font-size: 0.875rem;
  color: #FFD700;
  font-weight: 600;
}

/* Output Result */
.output-result {
  background: rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.result-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4BC0C0;
  margin-bottom: 1rem;
}

.result-url {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  background: rgba(75, 192, 192, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid rgba(75, 192, 192, 0.2);
}

.url-badge {
  color: #4BC0C0;
  font-size: 0.75rem;
  font-weight: 700;
}

.url-domain {
  font-weight: 600;
  color: white;
}

.url-slug {
  color: #FFD700;
  font-family: 'SF Mono', 'Monaco', monospace;
}

.result-preview {
  background: linear-gradient(135deg, #144272 0%, #0A2647 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.preview-mini-landing {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.preview-hero {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.preview-cta {
  font-size: 0.75rem;
  color: #4BC0C0;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.preview-metrics {
  display: flex;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #E0E0E0;
}

.preview-stat {
  background: rgba(75, 192, 192, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #FFD700;
}

/* Product Features */
.product-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-text {
  font-size: 0.875rem;
  color: #E0E0E0;
}

/* Overlay Stat */
.overlay-stat {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 214, 111, 0.2);
  border: 1px solid #00D68F;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #4BC0C0;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #E0E0E0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Guide Arrow */
.guide-arrow {
  text-align: center;
  margin-top: 2rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.guide-arrow .arrow-text {
  color: #4BC0C0;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1.5rem;
  }
  
  .hero-content {
    order: 2;
  }
  
  .hero-visual {
    order: 1;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .metrics-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .social-proof {
    grid-template-columns: 1fr;
  }

  .cta-group {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding-top: 60px;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .trust-badges {
    flex-direction: column;
    align-items: flex-start;
  }

  .badge {
    width: 100%;
    justify-content: flex-start;
  }

  .cta-button {
    width: 100%;
    min-width: auto;
  }

  .product-switcher {
    flex-direction: column;
    gap: 0.5rem;
  }

  .product-tab {
    padding: 0.75rem 1.5rem;
  }

  .cta-group {
    flex-direction: column;
  }
}
</style>
