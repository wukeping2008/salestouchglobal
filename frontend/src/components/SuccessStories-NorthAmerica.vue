<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const successStories = [
  {
    company: 'TechCorp',
    industry: 'Technology',
    companySize: 'Enterprise',
    dealSize: '$2.5M',
    timeSaved: '12 months',
    roi: '420%',
    testimonial: 'SalesTouch transformed our enterprise sales operation. The AI-powered territory planning alone saved us 30 hours per quarter.',
    author: 'John Smith',
    authorTitle: 'VP of Sales',
    authorImage: ''
  },
  {
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    companySize: 'SMB',
    dealSize: '$850K',
    timeSaved: '8 months',
    roi: '325%',
    testimonial: 'We went from $50K/month in coaching to $200K/month in revenue. SalesTouch\'s AI logic is the real deal.',
    author: 'Sarah Johnson',
    authorTitle: 'Founder & CEO',
    authorImage: ''
  },
  {
    company: 'FinTech Innovations',
    industry: 'Financial Services',
    companySize: 'Enterprise',
    dealSize: '$3.8M',
    timeSaved: '18 months',
    roi: '580%',
    testimonial: 'Automated our "Executive Briefing" generation, saving 20 hours per deal. The ROI is insane.',
    author: 'Michael Davis',
    authorTitle: 'Director of Sales Operations',
    authorImage: ''
  }
]
</script>

<template>
  <section class="success-stories-section">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-icon"></span>
          {{ t('success.title') }}
        </h2>
        <p class="section-subtitle">{{ t('success.subtitle') }}</p>
      </div>

      <!-- Key Metrics -->
      <div class="metrics-banner">
        <div class="metric-banner-item">
          <div class="metric-icon">DATA</div>
          <div class="metric-content">
            <div class="metric-value">{{ t('success.stat1') }}</div>
            <div class="metric-label">{{ t('success.metric1') }}</div>
            <div class="metric-desc">{{ t('success.case1Desc') }}</div>
          </div>
        </div>

        <div class="metric-banner-item">
          <div class="metric-icon">DATA</div>
          <div class="metric-content">
            <div class="metric-value">{{ t('success.stat2') }}</div>
            <div class="metric-label">{{ t('success.metric2') }}</div>
            <div class="metric-desc">{{ t('success.case2Desc') }}</div>
          </div>
        </div>
      </div>

      <!-- Success Stories Grid -->
      <div class="stories-grid">
        
        <!-- Story 1: TechCorp -->
        <div class="story-card">
          <div class="story-header">
            <div class="company-info">
              <div class="company-badge">{{ t('success.case1') }}</div>
              <h3 class="company-name">TechCorp</h3>
              <div class="industry-tag">
                <span class="industry-icon"></span>
                {{ successStories[0].industry }}
              </div>
            </div>
          </div>

          <div class="story-results">
            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">Deal Size</div>
                <div class="result-value">{{ successStories[0].dealSize }}</div>
              </div>
            </div>

            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">Time Saved</div>
                <div class="result-value">{{ successStories[0].timeSaved }}</div>
              </div>
            </div>

            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">ROI</div>
                <div class="result-value roi">{{ successStories[0].roi }}</div>
              </div>
            </div>
          </div>

          <div class="story-testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">QUOTE</div>
              <p class="testimonial-text">"{{ successStories[0].testimonial }}"</p>
            </div>

            <div class="testimonial-author">
              <div class="author-avatar">{{ successStories[0].authorImage }}</div>
              <div class="author-info">
                <div class="author-name">{{ successStories[0].author }}</div>
                <div class="author-title">{{ successStories[0].authorTitle }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Story 2: HealthCare Plus -->
        <div class="story-card">
          <div class="story-header">
            <div class="company-info">
              <div class="company-badge">{{ t('success.case2') }}</div>
              <h3 class="company-name">HealthCare Plus</h3>
              <div class="industry-tag">
                <span class="industry-icon"></span>
                {{ successStories[1].industry }}
              </div>
            </div>
          </div>

          <div class="story-results">
            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">Deal Size</div>
                <div class="result-value">{{ successStories[1].dealSize }}</div>
              </div>
            </div>

            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">Time Saved</div>
                <div class="result-value">{{ successStories[1].timeSaved }}</div>
              </div>
            </div>

            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">ROI</div>
                <div class="result-value roi">{{ successStories[1].roi }}</div>
              </div>
            </div>
          </div>

          <div class="story-testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">QUOTE</div>
              <p class="testimonial-text">"{{ successStories[1].testimonial }}"</p>
            </div>

            <div class="testimonial-author">
              <div class="author-avatar">{{ successStories[1].authorImage }}</div>
              <div class="author-info">
                <div class="author-name">{{ successStories[1].author }}</div>
                <div class="author-title">{{ successStories[1].authorTitle }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Story 3: FinTech Innovations -->
        <div class="story-card">
          <div class="story-header">
            <div class="company-info">
              <div class="company-badge">{{ t('success.case1') }}</div>
              <h3 class="company-name">FinTech Innovations</h3>
              <div class="industry-tag">
                <span class="industry-icon"></span>
                {{ successStories[2].industry }}
              </div>
            </div>
          </div>

          <div class="story-results">
            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">Deal Size</div>
                <div class="result-value">{{ successStories[2].dealSize }}</div>
              </div>
            </div>

            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">Time Saved</div>
                <div class="result-value">{{ successStories[2].timeSaved }}</div>
              </div>
            </div>

            <div class="result-item">
              <span class="result-icon"></span>
              <div class="result-content">
                <div class="result-label">ROI</div>
                <div class="result-value roi">{{ successStories[2].roi }}</div>
              </div>
            </div>
          </div>

          <div class="story-testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">QUOTE</div>
              <p class="testimonial-text">"{{ successStories[2].testimonial }}"</p>
            </div>

            <div class="testimonial-author">
              <div class="author-avatar">{{ successStories[2].authorImage }}</div>
              <div class="author-info">
                <div class="author-name">{{ successStories[2].author }}</div>
                <div class="author-title">{{ successStories[2].authorTitle }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Call to Action -->
      <div class="stories-cta">
        <h3 class="cta-title">Ready to Scale Your Sales Success?</h3>
        <p class="cta-subtitle">Join 500+ North American sales teams using SalesTouch</p>
        
        <div class="cta-group">
          <a href="#start-free-trial" class="cta-button primary">
            <span class="cta-icon"></span>
            <span class="cta-text">Start 14-Day Free Trial</span>
            <span class="cta-subtext">No credit card required</span>
          </a>
          
          <a href="#view-more-cases" class="cta-button secondary">
            <span class="cta-icon"></span>
            <span class="cta-text">View More Cases</span>
            <span class="cta-subtext">25+ success stories</span>
          </a>
        </div>
      </div>

      <!-- Trust Signals -->
      <div class="trust-signals">
        <div class="trust-item">
          <span class="trust-icon"></span>
          <span class="trust-text">SOC 2 Type II Certified</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon"></span>
          <span class="trust-text">PCI DSS Compliant</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon"></span>
          <span class="trust-text">GDPR & CCPA Compliant</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon"></span>
          <span class="trust-text">#1 in North America</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.success-stories-section {
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 3rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.6;
}

/* Metrics Banner */
.metrics-banner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.metric-banner-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.metric-icon {
  font-size: 2.5rem;
}

.metric-content {
  flex: 1;
}

.metric-value {
  font-size: 2rem;
  font-weight: 800;
  color: #4BC0C0;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.metric-desc {
  font-size: 0.9375rem;
  color: #999;
}

/* Stories Grid */
.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Story Card */
.story-card {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid #f0f0f0;
}

.story-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #4BC0C0;
}

/* Story Header */
.story-header {
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 2rem;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.company-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.company-name {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.industry-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  align-self: flex-start;
}

.industry-icon {
  font-size: 1rem;
}

/* Story Results */
.story-results {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #FFF0F5, #FFE5D9);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 111, 97, 0.1);
}

.result-icon {
  font-size: 1.5rem;
}

.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-label {
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.result-value {
  font-size: 1.25rem;
  color: #333;
  font-weight: 700;
}

.result-value.roi {
  color: #4BC0C0;
  font-size: 1.5rem;
}

/* Story Testimonial */
.story-testimonial {
  background: linear-gradient(135deg, #FFF0F5, #FFE5D9);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 111, 97, 0.1);
}

.testimonial-content {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.testimonial-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  font-style: italic;
  border-left: 4px solid #FF6F61;
  padding-left: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.25rem;
}

.author-title {
  font-size: 0.875rem;
  color: #666;
}

/* Call to Action */
.stories-cta {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cta-title {
  font-size: 2rem;
  color: #FF6F61;
  margin-bottom: 1rem;
  font-weight: 800;
}

.cta-subtitle {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2rem;
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button.primary {
  background: linear-gradient(135deg, #FF6F61, #FF9800);
  color: white;
  border: 2px solid transparent;
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #FF9800, #FF6F61);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 111, 97, 0.3);
  border-color: rgba(255, 111, 97, 0.5);
}

.cta-button.secondary {
  background: white;
  color: #FF6F61;
  border: 2px solid #FF6F61;
}

.cta-button.secondary:hover {
  background: #FFF0F5;
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 111, 97, 0.15);
}

.cta-icon {
  font-size: 1.5rem;
}

.cta-text {
  font-size: 1.125rem;
  font-weight: 700;
}

.cta-subtext {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Trust Signals */
.trust-signals {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-content: center;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.trust-icon {
  font-size: 1.5rem;
}

.trust-text {
  font-size: 0.875rem;
  color: #666;
  font-weight: 600;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .stories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .metrics-banner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .stories-grid {
    grid-template-columns: 1fr;
  }

  .stories-cta {
    padding: 2rem;
  }

  .cta-group {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
  }

  .trust-signals {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .story-card {
    padding: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }
}
</style>
