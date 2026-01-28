<script setup lang="ts">
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import InteractiveExperience from './components/InteractiveExperience.vue'
import SuccessStories from './components/SuccessStories.vue'
import './assets/premium.css'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const isLangMenuOpen = ref(false)

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' }
]

const changeLanguage = (code: string) => {
  locale.value = code
  isLangMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar glass">
    <div class="premium-container nav-content">
      <div class="logo">SalesTouch<span>.io</span></div>
      <div class="nav-links">
        <div class="lang-switcher">
          <button @click="isLangMenuOpen = !isLangMenuOpen" class="lang-toggle">
            {{ languages.find(l => l.code === locale)?.name }} ▾
          </button>
          <div v-if="isLangMenuOpen" class="lang-dropdown glass">
            <button 
              v-for="lang in languages" 
              :key="lang.code" 
              @click="changeLanguage(lang.code)"
              :class="{ active: locale === lang.code }"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>
        <a href="#" class="nav-link">{{ $t('nav.product') }}</a>
        <a href="#" class="nav-link">{{ $t('nav.features') }}</a>
        <a href="#" class="cta-mini">{{ $t('nav.tryFree') }}</a>
      </div>
    </div>
  </nav>

  <main>
    <Hero />
    <SuccessStories />
    <InteractiveExperience />
    <Features />
  </main>

  <footer class="footer">
    <div class="premium-container footer-content">
      <div class="footer-brand">
        <div class="logo">SalesTouch<span>.io</span></div>
        <p>The Global Standard for AI Sales Coaching.</p>
      </div>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Security</a>
        <a href="#">GDPR Compliance</a>
      </div>
      <div class="footer-copy">
        &copy; 2026 SalesTouch. All rights reserved. Built for Global Teams.
      </div>
    </div>
  </footer>
</template>

<style>
.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  max-width: 1200px;
  z-index: 100;
  padding: 0.75rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
}

.logo span {
  color: #88d3ce;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #fff;
}

.cta-mini {
  background: var(--primary-gradient);
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.lang-switcher {
  position: relative;
}

.lang-toggle {
  background: transparent;
  border: 1px solid var(--glass-border);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  min-width: 100px;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  z-index: 101;
}

.lang-dropdown button {
  background: transparent;
  border: none;
  color: var(--text-muted);
  padding: 0.6rem 1rem;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9rem;
}

.lang-dropdown button:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
}

.lang-dropdown button.active {
  color: #88d3ce;
  background: rgba(136, 211, 206, 0.1);
}

/* Footer Styles */
.footer {
  padding: 4rem 0;
  border-top: 1px solid var(--glass-border);
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

.footer-brand p {
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #fff;
}

.footer-copy {
  font-size: 0.8rem;
  color: #555;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
