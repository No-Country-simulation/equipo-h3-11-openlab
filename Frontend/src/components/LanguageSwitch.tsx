import { useState } from "react";
import { useTranslation } from "react-i18next";
import esFlag from "../assets/navbar/es-flag.svg";
import enFlag from "../assets/navbar/en-flag.svg";

const languages = [
  {code: "es", lang: "ES"},
  {code: "en", lang: "EN"}
]

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); // Cambia el idioma en i18next
  };

  const flagSrc = language === "en" ? enFlag : esFlag;

  return (
    <div className="flex items-center gap-2">
      {/* Imagen de la bandera */}
      <img
        src={flagSrc}
        alt={language}
        className="w-6 h-4 object-cover rounded"
      />

      {/* Select para elegir idioma */}
      <select
        value={language}
        onChange={handleLanguageChange}
        className="text-sm bg-blue-500 text-white border border-blue-500 rounded py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {
          languages.map((lng) => {
            return <option value={lng.code} className="text-black">{lng.lang}</option>
          })
        }
      </select>
    </div>
  );
};

export default LanguageSwitch;
