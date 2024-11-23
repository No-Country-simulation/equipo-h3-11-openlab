import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      welcome: "Welcome",
      vision: "Vision",
      initiatives: "Initiatives",
      blog: "Blog",
      login: "Login",
      getStarted: "Get Started",
    },
  },
  ES: {
    translation: {
      welcome: "Bienvenido",
      vision: "Visión",
      initiatives: "Iniciativas",
      blog: "Blog",
      login: "Entrar",
      getStarted: "Empezar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ES", // Idioma por defecto
  fallbackLng: "EN", // Idioma alternativo
  interpolation: {
    escapeValue: false, // React ya maneja la protección contra XSS
  },
});

export default i18n;
