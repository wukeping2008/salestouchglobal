<template>
  <section class="social-proof">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('social.title') }}</h2>
        <p class="section-subtitle">{{ t('social.subtitle') }}</p>
      </div>

      <div class="stats-grid">
        <div v-for="i in 4" :key="i" class="stat-card">
          <div class="stat-value">{{ t(`social.stat${i}.value`) }}</div>
          <div class="stat-label">{{ t(`social.stat${i}.label`) }}</div>
        </div>
      </div>

      <div class="testimonials">
        <div v-for="i in 2" :key="i" class="testimonial-card">
          <div class="quote-mark">"</div>
          <p class="quote-text">{{ t(`social.quote${i}.text`) }}</p>
          <div class="author-info">
            <div class="author-avatar">
              <img
                :src="`/images/testimonial-${i}.jpg`"
                :alt="t(`social.quote${i}.name`)"
                loading="lazy"
                width="72"
                height="72"
              />
            </div>
            <div class="author-details">
              <div class="author-name">{{ t(`social.quote${i}.name`) }}</div>
              <div class="author-meta">
                {{ t(`social.quote${i}.role`) }} • {{ t(`social.quote${i}.company`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.social-proof {
  background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
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
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
}

.stat-value {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1rem;
  color: #94a3b8;
  font-weight: 500;
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.testimonial-card {
  position: relative;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.2);
}

.quote-mark {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: 5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
  line-height: 1;
}

.quote-text {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid rgba(102, 126, 234, 0.4);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.author-details {
  flex: 1;
}

.author-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.25rem;
}

.author-meta {
  font-size: 0.875rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .social-proof {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-value {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }

  .testimonials {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonial-card {
    padding: 2rem;
  }

  .quote-mark {
    font-size: 4rem;
    top: 1rem;
    left: 1.5rem;
  }

  .quote-text {
    font-size: 1rem;
  }

  .author-avatar {
    width: 60px;
    height: 60px;
  }

  .author-name {
    font-size: 1rem;
  }
}
</style>
