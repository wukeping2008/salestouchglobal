<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { trackLanguageSwitch, trackCTAClick } from './analytics'
import HeroSection from './components/sections/HeroSection.vue'
import ProblemStatement from './components/sections/ProblemStatement.vue'
import PlatformOverview from './components/sections/PlatformOverview.vue'
import MaxShowcase from './components/sections/MaxShowcase.vue'
import WorkflowJourney from './components/sections/WorkflowJourney.vue'
import UseCases from './components/sections/UseCases.vue'
import SocialProof from './components/sections/SocialProof.vue'
import CTASection from './components/sections/CTASection.vue'
import FooterSection from './components/sections/FooterSection.vue'
import AnimatedSection from './components/shared/AnimatedSection.vue'

const { t, locale } = useI18n()

const isLangMenuOpen = ref(false)

const languages: { code: string; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
]

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) || languages[0]
})

const changeLanguage = (code: string) => {
  const previousLang = locale.value
  locale.value = code
  isLangMenuOpen.value = false
  trackLanguageSwitch(previousLang, code)
}
</script>

<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo">
          <span class="logo-main">SalesTouch</span>
          <span class="logo-suffix">.io</span>
        </a>

        <div class="nav-actions">
          <!-- Language Switcher -->
          <div class="lang-switcher">
            <button @click="isLangMenuOpen = !isLangMenuOpen" class="lang-toggle">
              <span class="lang-flag">{{ currentLanguage.flag }}</span>
              <span class="lang-name">{{ currentLanguage.name }}</span>
              <span class="lang-arrow">▾</span>
            </button>
            <div v-if="isLangMenuOpen" class="lang-dropdown">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code)"
                :class="{ active: locale === lang.code }"
                class="lang-option"
              >
                <span class="lang-flag">{{ lang.flag }}</span>
                <span>{{ lang.name }}</span>
              </button>
            </div>
          </div>

          <!-- CTA Button -->
          <a
            href="https://touch.long-arena.com/registerEmail?utm_source=salestouchio&utm_medium=landing&utm_campaign=nav_cta"
            target="_blank"
            rel="noopener"
            class="nav-cta"
            @click="trackCTAClick('nav_cta', 'navbar')"
          >
            {{ t('nav.ctaText') }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <HeroSection />
      <AnimatedSection section-name="problem_statement">
        <ProblemStatement />
      </AnimatedSection>
      <AnimatedSection section-name="platform_overview">
        <PlatformOverview />
      </AnimatedSection>
      <AnimatedSection section-name="max_showcase">
        <MaxShowcase />
      </AnimatedSection>
      <AnimatedSection section-name="workflow_journey">
        <WorkflowJourney />
      </AnimatedSection>
      <AnimatedSection section-name="use_cases">
        <UseCases />
      </AnimatedSection>
      <AnimatedSection section-name="social_proof">
        <SocialProof />
      </AnimatedSection>
      <AnimatedSection section-name="cta_section">
        <CTASection />
      </AnimatedSection>
    </main>

    <!-- Footer -->
    <AnimatedSection :threshold="0.1">
      <FooterSection />
    </AnimatedSection>
  </div>
</template>

<style>
/* ═══════════════════════════════════════════
   CSS Custom Properties (Design Tokens)
   ═══════════════════════════════════════════ */
:root {
  /* Colors */
  --color-bg-primary: #0f0f1e;
  --color-bg-secondary: #1a1a2e;
  --color-bg-tertiary: #0a0a14;
  --color-text-primary: #e2e8f0;
  --color-text-secondary: #9ca3af;
  --color-text-muted: #64748b;
  --color-accent-start: #667eea;
  --color-accent-end: #764ba2;
  --color-accent-light: #a5b4fc;

  /* Gradients */
  --gradient-accent: linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end));
  --gradient-text: linear-gradient(to right, #ffffff 0%, var(--color-accent-light) 100%);

  /* Glass morphism */
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-bg-hover: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(10px);

  /* Shadows */
  --shadow-sm: 0 4px 15px rgba(102, 126, 234, 0.3);
  --shadow-md: 0 8px 32px rgba(102, 126, 234, 0.2);
  --shadow-lg: 0 16px 48px rgba(102, 126, 234, 0.3);

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-pill: 50px;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* ═══════════════════════════════════════════
   Global Reset & Base
   ═══════════════════════════════════════════ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 80px;
}

/* ═══════════════════════════════════════════
   Navbar
   ═══════════════════════════════════════════ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(15, 15, 30, 0.85);
  border-bottom: 1px solid var(--glass-border);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.logo-main {
  color: var(--color-text-primary);
}

.logo-suffix {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Language Switcher */
.lang-switcher {
  position: relative;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: 0.9rem;
}

.lang-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.lang-flag {
  font-size: 1.2rem;
}

.lang-arrow {
  font-size: 0.7rem;
  opacity: 0.6;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0.5rem;
  min-width: 160px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.lang-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  color: #cbd5e0;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  font-size: 0.95rem;
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
}

.lang-option.active {
  background: rgba(102, 126, 234, 0.15);
  color: var(--color-accent-start);
}

/* Nav CTA Button */
.nav-cta {
  background: var(--gradient-accent);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

/* ═══════════════════════════════════════════
   Mobile Responsive
   ═══════════════════════════════════════════ */
@media (max-width: 768px) {
  .navbar {
    padding: 0.875rem 1.5rem;
  }

  .nav-container {
    flex-wrap: wrap;
  }

  .logo {
    font-size: 1.3rem;
  }

  .nav-actions {
    gap: 1rem;
  }

  .lang-toggle {
    padding: 0.4rem 0.75rem;
    font-size: 0.85rem;
  }

  .lang-name {
    display: none;
  }

  .nav-cta {
    padding: 0.5rem 1.25rem;
    font-size: 0.85rem;
  }

  main {
    padding-top: 70px;
  }
}

/* ═══════════════════════════════════════════
   Respect user motion preferences
   ═══════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
