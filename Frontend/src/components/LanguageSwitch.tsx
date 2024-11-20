import { useState } from "react";
import esFlag from "../assets/navbar/es-flag.svg";
import enFlag from "../assets/navbar/en-flag.svg";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const flagSrc = language === "EN" ? enFlag : esFlag;

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
        <option value="EN" className="text-black">EN</option>
        <option value="ES" className="text-black">ES</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
