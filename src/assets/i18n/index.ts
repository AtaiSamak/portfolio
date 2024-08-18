import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

import en from './translations/en.json'
import ru from './translations/ru.json'

const resources = {
  en: { translation: en },
  ru: { translation: ru },
}

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
  })
