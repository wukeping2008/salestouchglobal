import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import es from './locales/es.json'

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
