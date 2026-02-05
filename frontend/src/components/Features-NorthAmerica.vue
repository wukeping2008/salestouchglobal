<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const features = [
  {
    id: 'roi',
    icon: 'ROI',
    title: 'title',
    description: 'description',
    stat: '42% avg increase'
  },
  {
    id: 'dashboard',
    icon: 'DASH',
    title: 'title',
    description: 'description',
    stat: '15x velocity gain'
  },
  {
    id: 'ai-coach',
    icon: 'AI',
    title: 'title',
    description: 'description',
    stat: 'Top 1% logic accuracy'
  },
  {
    id: 'cr-integration',
    icon: 'CRM',
    title: 'title',
    description: 'description',
    stat: 'Salesforce, HubSpot ready'
  },
  {
    id: 'time-saving',
    icon: 'TIME',
    title: 'title',
    description: 'description',
    stat: '20 hrs/quarter saved'
  },
  {
    id: 'north-american-compliance',
    icon: 'COMP',
    title: 'title',
    description: 'description',
    stat: 'SOC 2 & CCPA certified'
  }
]
</script>

<template>
  <section class="features-section">
    <div class="container">
      <!-- Section Title -->
      <div class="section-header">
        <h2 class="section-title">{{ t('features.title') }}</h2>
        <p class="section-subtitle">{{ t('features.subtitle') }}</p>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        
        <!-- Feature 1: ROI Calculator -->
        <div class="feature-card feature-roi">
          <div class="feature-icon">{{ features[0].icon }}</div>
          <h3 class="feature-title">{{ t('features.feature1.title') }}</h3>
          <p class="feature-description">{{ t('features.feature1.description') }}</p>
          <div class="feature-stat">
            <span class="stat-value">{{ features[0].stat }}</span>
            <span class="stat-label">Average Increase</span>
          </div>
        </div>

        <!-- Feature 2: Sales Dashboard -->
        <div class="feature-card feature-dashboard">
          <div class="feature-icon">{{ features[1].icon }}</div>
          <h3 class="feature-title">{{ t('features.feature2.title') }}</h3>
          <p class="feature-description">{{ t('features.feature2.description') }}</p>
          <div class="feature-stat">
            <span class="stat-value">{{ features[1].stat }}</span>
            <span class="stat-label">Velocity Gain</span>
          </div>
        </div>

        <!-- Feature 3: AI Coach -->
        <div class="feature-card feature-ai">
          <div class="feature-icon">{{ features[2].icon }}</div>
          <h3 class="feature-title">{{ t('features.feature3.title') }}</h3>
          <p class="feature-description">{{ t('features.feature3.description') }}</p>
          <div class="feature-stat">
            <span class="stat-value">{{ features[2].stat }}</span>
            <span class="stat-label">Logic Accuracy</span>
          </div>
        </div>

        <!-- Feature 4: CRM Integration -->
        <div class="feature-card feature-crm">
          <div class="feature-icon">{{ features[3].icon }}</div>
          <h3 class="feature-title">{{ t('features.feature4.title') }}</h3>
          <p class="feature-description">{{ t('features.feature4.description') }}</p>
          <div class="feature-stat">
            <span class="stat-value">{{ features[3].stat }}</span>
            <span class="stat-label">Platforms Supported</span>
          </div>
        </div>

        <!-- Feature 5: Time Saving -->
        <div class="feature-card feature-time">
          <div class="feature-icon">{{ features[4].icon }}</div>
          <h3 class="feature-title">{{ t('features.feature5.title') }}</h3>
          <p class="feature-description">{{ t('features.feature5.description') }}</p>
          <div class="feature-stat">
            <span class="stat-value">{{ features[4].stat }}</span>
            <span class="stat-label">Time Saved</span>
          </div>
        </div>

        <!-- Feature 6: North American Compliance -->
        <div class="feature-card feature-compliance">
          <div class="feature-icon">{{ features[5].icon }}</div>
          <h3 class="feature-title">{{ t('features.feature6.title') }}</h3>
          <p class="feature-description">{{ t('features.feature6.description') }}</p>
          <div class="feature-stat">
            <span class="stat-value">{{ features[5].stat }}</span>
            <span class="stat-label">Certifications</span>
          </div>
        </div>

      </div>

      <!-- CTA Section -->
      <div class="features-cta">
        <a href="#roi" class="cta-button primary">
          <span class="cta-text">Calculate Your ROI</span>
        </a>
        <a href="#dashboard" class="cta-button secondary">
          <span class="cta-text">View Dashboard Demo</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 5rem 0;
  background: linear-gradient(to bottom, #FFF0F5, #FFE5D9);
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--card-gradient), var(--card-gradient));
  transition: all 0.3s ease;
}

.feature-roi::before {
  --card-gradient: #FF6F61, #FF9800;
}

.feature-dashboard::before {
  --card-gradient: #4BC0C0, #00D68F;
}

.feature-ai::before {
  --card-gradient: #9C27B0, #673AB7;
}

.feature-crm::before {
  --card-gradient: #FF9500, #FFD700;
}

.feature-time::before {
  --card-gradient: #2D527A, #205295;
}

.feature-compliance::before {
  --card-gradient: #00D68F, #4CAF50;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-card:hover::before {
  height: 8px;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.feature-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
}

.feature-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 2rem;
  min-height: 60px;
}

.feature-stat {
  background: linear-gradient(135deg, #FFF0F5, #FFE5D9);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: #4BC0C0;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.features-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.cta-button.primary {
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #FF9800, #FF6F61);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 111, 97, 0.25);
}

.cta-button.secondary {
  background: white;
  color: #FF6F61;
  border: 2px solid #FF6F61;
}

.cta-button.secondary:hover {
  background: #FFF0F5;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 111, 97, 0.1);
}

.cta-icon {
  font-size: 1.5rem;
}

.cta-text {
  font-size: 1.125rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 2rem;
  }
  
  .features-cta {
    flex-direction: column;
  }
  
  .cta-button {
    width: 100%;
  }
}
</style>
