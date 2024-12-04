import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lng: "es", // Idioma por defecto
  fallbackLng: "en", // Idioma alternativo
  interpolation: {
    escapeValue: false, // React ya maneja la protección contra XSS
  },
  returnObjects: true,
});

export default i18n;
