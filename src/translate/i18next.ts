import i18next from 'i18next'
import Backend from 'i18next-http-backend' // it finds the file public/locales/{lang}/translation.json
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    fallbackNS:'common'
    // debug: true, // should be false on production
    // interpolation: {
      // escapeValue: false, // to avoid cross-site scripting
    // },
    // defaultNS: 'ns1',
    // fallbackNS: 'fallback',
    // resources: {
    //   en: {
    //     ns1: en,
    //   },
    //   swahili: {
    //     ns1: swahili,
    //   },
    // },
    // backend: {
    //   loadPath: '/locales/swahili/translation.json', // Path to your translation files
    // },
  })

export default i18next
