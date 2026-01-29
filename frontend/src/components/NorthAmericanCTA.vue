<script setup lang="ts">
import { ref } from 'vue'

const showTrialInfo = ref(false)
const toggleTrialInfo = () => {
  showTrialInfo.value = !showTrialInfo.value
}
</script>

<template>
  <section class="north-american-cta-section">
    <div class="container">
      
      <!-- CTA Title -->
      <div class="cta-header">
        <h2 class="cta-title">
          <span class="title-icon">🎯</span>
          Ready to Scale Your Sales Success?
        </h2>
        <p class="cta-subtitle">
          Join 500+ North American sales leaders using AI to 
          <span class="highlight">double</span> their deal velocity
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="pricing-grid">
        
        <!-- Individual Plan -->
        <div class="pricing-card individual">
          <div class="card-header">
            <div class="card-icon">👤</div>
            <h3 class="plan-name">Individual</h3>
            <div class="plan-badge">Most Popular</div>
          </div>
          
          <div class="pricing-amount">
            <div class="price-display">
              <span class="price-currency">$</span>
              <span class="price-value">99</span>
              <span class="price-period">/month</span>
            </div>
            <div class="price-annual">
              <span class="annual-value">$948</span>
              <span class="annual-period">/year</span>
              <span class="annual-savings">Save 20%</span>
            </div>
          </div>

          <ul class="features-list">
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Full access to SalesTouch AI Coach
            </li>
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Unlimited AI-powered coaching sessions
            </li>
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Generate unlimited sales pages with SalesNail
            </li>
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Access to 500+ expert sales methodologies
            </li>
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Priority email & chat support
            </li>
          </ul>

          <div class="cta-group">
            <a href="#start-individual" class="cta-button primary">
              <span class="btn-icon">🚀</span>
              <span class="btn-text">Start 14-Day Free Trial</span>
              <span class="btn-subtext">No credit card required</span>
            </a>
          </div>
        </div>

        <!-- Team Plan -->
        <div class="pricing-card team">
          <div class="card-header">
            <div class="card-icon">👥</div>
            <h3 class="plan-name">Team</h3>
            <div class="plan-badge">Best for Teams</div>
          </div>
          
          <div class="pricing-amount">
            <div class="price-display">
              <span class="price-currency">$</span>
              <span class="price-value">299</span>
              <span class="price-period">/user/month</span>
            </div>
            <div class="price-annual">
              <span class="annual-value">$2,868</span>
              <span class="annual-period">/user/year</span>
              <span class="annual-savings">Save 20%</span>
            </div>
          </div>

          <ul class="features-list">
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Everything in Individual, plus:
            </li>
            <li class="feature-item">
              <span class="feature-icon">🎯</span>
              Team collaboration features
            </li>
            <li class="feature-item">
              <span class="feature-icon">📊</span>
              Shared analytics & insights
            </li>
            <li class="feature-item">
              <span class="feature-icon">👨‍💼</span>
              Dedicated customer success manager
            </li>
            <li class="feature-item">
              <span class="feature-icon">💼</span>
              Team training sessions (monthly）
            </li>
            <li class="feature-item">
              <span class="feature-icon">🚀</span>
              Priority support (response < 2 hours）
            </li>
          </ul>

          <div class="team-info">
            <p class="team-note">Minimum 5 users per team</p>
          </div>

          <div class="cta-group">
            <a href="#start-team" class="cta-button primary">
              <span class="btn-icon">👥</span>
              <span class="btn-text">Start Team Trial</span>
              <span class="btn-subtext">14 days, no credit card</span>
            </a>
          </div>
        </div>

        <!-- Enterprise Plan -->
        <div class="pricing-card enterprise">
          <div class="card-header">
            <div class="card-icon">🏢</div>
            <h3 class="plan-name">Enterprise</h3>
            <div class="plan-badge">For 50+ Seats</div>
          </div>
          
          <div class="pricing-amount">
            <div class="price-display">
              <span class="price-currency">$</span>
              <span class="price-value">299</span>
              <span class="price-period">/seat/year</span>
            </div>
            <div class="price-annual">
              <span class="annual-value">$5,980</span>
              <span class="annual-period">/seat/year</span>
            </div>
          </div>

          <ul class="features-list">
            <li class="feature-item">
              <span class="feature-icon">✅</span>
              Everything in Team, plus:
            </li>
            <li class="feature-item">
              <span class="feature-icon">🔐</span>
              SSO (Single Sign-On) integration
            </li>
            <li class="feature-item">
              <span class="feature-icon">💳</span>
              Dedicated success manager
            </li>
            <li class="feature-item">
              <span class="feature-icon">🎯</span>
              Custom implementation support
            </li>
            <li class="feature-item">
              <span class="feature-icon">🛡️</span>
              99.9% uptime SLA guarantee
            </li>
            <li class="feature-item">
              <span class="feature-icon">📞</span>
              24/7 priority phone support
            </li>
            <li class="feature-item">
              <span class="feature-icon">📋</span>
              Contract lock-in pricing
            </li>
          </ul>

          <div class="enterprise-info">
            <p class="enterprise-note">Perfect for organizations with 50+ seats</p>
          </div>

          <div class="cta-group">
            <a href="#start-enterprise" class="cta-button primary">
              <span class="btn-icon">🏢</span>
              <span class="btn-text">Contact Sales</span>
              <span class="btn-subtext">Custom quote</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Trial Info Modal -->
      <div class="trial-info-banner" v-if="showTrialInfo">
        <div class="trial-content">
          <h3 class="trial-title">
            <span class="trial-icon">✨</span>
            14-Day Free Trial Explained
          </h3>
          
          <div class="trial-details">
            <div class="trial-detail">
              <span class="detail-icon">📅</span>
              <div class="detail-text">
                <strong>Full Access</strong> during 14 days
              </div>
            </div>
            
            <div class="trial-detail">
              <span class="detail-icon">💳</span>
              <div class="detail-text">
                <strong>No Credit Card Required</strong> to start
              </div>
            </div>
            
            <div class="trial-detail">
              <span class="detail-icon">🚀</span>
              <div class="detail-text">
                <strong>Cancel Anytime</strong> if not satisfied
              </div>
            </div>
          </div>

          <div class="trial-cta">
            <button @click="toggleTrialInfo" class="close-button">
              Close ×
            </button>
          </div>
        </div>
      </div>

      <!-- Trust Signals -->
      <div class="trust-section">
        <div class="trust-item">
          <span class="trust-icon">🔒</span>
          <span class="trust-text">
            <strong>256-bit SSL Encryption</strong>
            <span class="trust-subtext">Your data is secure</span>
          </span>
        </div>

        <div class="trust-item">
          <span class="trust-icon">🏆</span>
          <span class="trust-text">
            <strong>#1 in North America</strong>
            <span class="trust-subtext">AI Sales Coach Platform</span>
          </span>
        </div>

        <div class="trust-item">
          <span class="trust-icon">💯</span>
          <span class="trust-text">
            <strong>500+ Enterprise Teams</strong>
            <span class="trust-subtext">Trust SalesTouch</span>
          </span>
        </div>

        <div class="trust-item">
          <span class="trust-icon">⭐</span>
          <span class="trust-text">
            <strong>4.9/5 G2 Rating</strong>
            <span class="trust-subtext">Customer satisfaction</span>
          </span>
        </div>
      </div>

      <!-- Money-back Guarantee -->
      <div class="guarantee-section">
        <div class="guarantee-icon">💰</div>
        <div class="guarantee-content">
          <h3 class="guarantee-title">100% Money-Back Guarantee</h3>
          <p class="guarantee-text">
            We're so confident in SalesTouch's value that if you're not 
            <span class="highlight">completely satisfied</span> with your results 
            during the 14-day trial, we'll refund 100% of your payment.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.north-american-cta-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #FFF0F5, #FFE5D9);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* CTA Header */
.cta-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background: linear-gradient(135deg, #0A2647 0%, #144272 50%, #205295 100%);
  border-radius: 24px;
  color: white;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2rem;
}

.highlight {
  color: #FFD700;
  text-decoration: underline;
  text-decoration-style: wavy;
}

.cta-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
}

.cta-subtitle strong {
  font-weight: 700;
  color: #4BC0C0;
}

/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Pricing Cards */
.pricing-card {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  border-color: #FF6F61;
}

.pricing-card.individual {
  border-top: 4px solid #FF6F61;
}

.pricing-card.team {
  border-top: 4px solid #4CAF50;
}

.pricing-card.enterprise {
  border-top: 4px solid #FF9500;
}

/* Card Header */
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.card-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.plan-name {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 0.25rem;
  font-weight: 700;
}

.plan-badge {
  padding: 0.375rem 1rem;
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

/* Pricing Amount */
.pricing-amount {
  margin-bottom: 2rem;
}

.price-display {
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
}

.price-currency {
  font-size: 1.25rem;
  color: #666;
  font-weight: 600;
}

.price-value {
  font-size: 3.5rem;
  font-weight: 800;
  color: #FF6F61;
  margin: 0 0.5rem;
  display: inline-block;
}

.price-period {
  font-size: 1.125rem;
  color: #999;
  font-weight: 500;
}

.price-annual {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 12px;
}

.annual-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4CAF50;
}

.annual-period {
  font-size: 0.875rem;
  color: #999;
}

.annual-savings {
  font-size: 0.875rem;
  color: #4CAF50;
  font-weight: 700;
}

/* Features List */
.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
}

.feature-icon {
  flex-shrink: 0;
  font-size: 1.25rem;
  min-width: 24px;
}

/* CTA Group */
.cta-group {
  text-align: center;
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
  width: 100%;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  box-shadow: 0 10px 30px rgba(255, 111, 97, 0.3);
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #FF9800, #FF6F61);
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(255, 111, 97, 0.4);
  border-color: rgba(255, 111, 97, 0.5);
}

.cta-button.secondary {
  background: white;
  color: #FF6F61;
  border-color: #FF6F61;
  box-shadow: 0 5px 20px rgba(255, 111, 97, 0.1);
}

.cta-button.secondary:hover {
  background: #FFF0F5;
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(255, 111, 97, 0.2);
}

.btn-icon {
  font-size: 1.5rem;
}

.btn-text {
  font-size: 1.125rem;
  font-weight: 700;
}

.btn-subtext {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Team & Enterprise Info */
.team-info,
.enterprise-info {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #f0f0f0;
}

.team-note,
.enterprise-note {
  font-size: 0.875rem;
  color: #666;
  text-align: center;
  font-style: italic;
}

/* Trial Info Banner */
.trial-info-banner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  z-index: 100;
  max-width: 600px;
}

.trial-content {
  text-align: center;
}

.trial-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.trial-icon {
  font-size: 2rem;
}

.trial-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.trial-detail {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-icon {
  font-size: 1.25rem;
}

.detail-text {
  font-size: 0.9375rem;
  color: #666;
}

.detail-text strong {
  color: #4CAF50;
  font-weight: 600;
}

.close-button {
  padding: 0.5rem 1.5rem;
  background: #FF6F61;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.close-button:hover {
  background: #FF9800;
  transform: scale(1.05);
}

.trial-cta {
  margin-top: 1rem;
}

/* Trust Section */
.trust-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 16px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.trust-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.trust-text {
  flex: 1;
}

.trust-text strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.25rem;
}

.trust-subtext {
  font-size: 0.875rem;
  color: #999;
}

/* Guarantee Section */
.guarantee-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  background: linear-gradient(135deg, #4CAF50, #45A049);
  border-radius: 24px;
  color: white;
  margin-bottom: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.guarantee-icon {
  font-size: 4rem;
  flex-shrink: 0;
}

.guarantee-content {
  flex: 1;
}

.guarantee-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.guarantee-text {
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.95;
}

.guarantee-text .highlight {
  color: #FFD700;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 1200px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .guarantee-section {
    flex-direction: column;
    text-align: center;
  }

  .trust-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .cta-header {
    padding: 1.5rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-subtitle {
    font-size: 1.125rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pricing-card {
    padding: 2rem;
  }

  .card-header {
    padding-bottom: 1rem;
  }

  .card-icon {
    font-size: 2rem;
  }

  .plan-name {
    font-size: 1.5rem;
  }

  .pricing-amount {
    margin-bottom: 1.5rem;
  }

  .price-value {
    font-size: 3rem;
  }

  .plan-badge {
    font-size: 0.625rem;
    padding: 0.25rem 0.75rem;
  }

  .guarantee-section {
    padding: 2rem;
    flex-direction: column;
  }

  .guarantee-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .cta-header {
    padding: 1rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-subtitle {
    font-size: 1rem;
  }

  .pricing-card {
    padding: 1.5rem;
  }

  .price-value {
    font-size: 2.5rem;
  }
}
</style>
