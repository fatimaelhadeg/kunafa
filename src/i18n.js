import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import arTranslations from "./locales/ar.json";
import frTranslations from "./locales/fr.json";
import enTranslations from "./locales/en.json";

// get saved language from localStorage or default to 'fr'
const savedLanguage = localStorage.getItem('i18nextLng') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
      ar: { translation: arTranslations },
    },
    lng: savedLanguage,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

export default i18n;
