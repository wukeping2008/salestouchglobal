import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zh from './locales/zh'
import fr from './locales/fr'
import de from './locales/de'
import es from './locales/es'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Default to English
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    fr,
    de,
    es
  }
})

export default i18n
