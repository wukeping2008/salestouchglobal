<script setup lang="ts">
import { ref, computed } from 'vue'
import Hero from './components/Hero.vue'
import AssistantModules from './components/AssistantModules.vue'
import Features from './components/Features.vue'
import Roles from './components/Roles.vue'
import Scenarios from './components/Scenarios.vue'
import InteractiveExperience from './components/InteractiveExperience.vue'
import SuccessStories from './components/SuccessStories.vue'
import './assets/premium.css'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isLangMenuOpen = ref(false)

const languages: { code: string; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' }
]

const currentLanguageName = computed(() => {
  return languages.find((lang) => lang.code === locale.value)?.name || 'English'
})

const changeLanguage = (code: string) => {
  locale.value = code
  isLangMenuOpen.value = false
}
</script>

<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar glass">
      <div class="premium-container nav-content">
        <div class="logo">SalesTouch<span>.io</span></div>
        
        <div class="nav-actions">
          <div class="lang-switcher">
            <button @click="isLangMenuOpen = !isLangMenuOpen" class="lang-toggle">
              {{ currentLanguageName }} ▾
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
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <Hero />

      <AssistantModules />

      <Features />

      <Roles />

      <Scenarios />

      <!-- Interactive Experience -->
      <InteractiveExperience />

      <SuccessStories />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="premium-container footer-content">
        <div class="footer-brand">
          <div class="logo">SalesTouch<span>.io</span></div>
          <p>{{ $t('footer.tagline') }}</p>
        </div>
        <div class="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#security">Security</a>
          <a href="#compliance">{{ $t('footer.compliance') }}</a>
        </div>
        <div class="footer-copy">
          {{ $t('footer.copy') }}
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: #fff;
  min-height: 100vh;
  padding-top: 80px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 0 2rem;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
}

.logo span {
  color: #88d3ce;
}

.nav-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}


.lang-switcher {
  position: relative;
}

.lang-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
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
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.lang-dropdown button {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.6rem 1rem;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.lang-dropdown button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.lang-dropdown button.active {
  color: #88d3ce;
  background: rgba(136, 211, 206, 0.1);
}


/* Main Content */
main {
  flex: 1;
  padding: 2rem 0;
}

/* Footer Styles */
.footer {
  padding: 4rem 0;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-brand {
  text-align: center;
}

.footer-brand .logo {
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: #8892b0;
  margin: 0;
  font-size: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: #8892b0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #88d3ce;
}

.footer-copy {
  color: #64748b;
  font-size: 0.8rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-content {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
}
</style>
