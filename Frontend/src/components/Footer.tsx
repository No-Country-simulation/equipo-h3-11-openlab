import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-white.svg";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import twitter from "../assets/footer/twitter.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation(["translation"]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto px-2 md:px-20 py-6 space-y-5">
        {/* Sección de logo */}
        <div className="flex justify-center md:justify-start pb-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Sección de enlaces y redes sociales */}
        <div className="flex flex-row justify-between items-center md:items-start gap-8 md:gap-12 w-full px-4 md:px-0">
          {/* Enlaces */}
          <div className="flex flex-row gap-8 md:gap-12 text-left">
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              {t("vision")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              {t("initiatives")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              {t("blog")}
            </a>
          </div>

          {/* Íconos sociales */}
          <div className="flex items-center space-x-5 md:justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <img src={facebook} alt="facebook-icon" className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <img src={instagram} alt="instagram-icon" className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <img src={twitter} alt="twitter-icon" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea de separación */}
      <div className="w-full border-t border-gray-300"></div>

      {/* Sección de términos y derechos */}
      <div className="mx-auto px-6 md:px-20 py-6 space-y-2">
        <div className="flex justify-between items-center w-full">
          {/* Privacy Policy */}
          <div
            className="text-[#1a346b] text-sm font-medium cursor-pointer hover:underline"
            onClick={toggleModal}
          >
            {t("privacyPolicy.title")}
          </div>
          {/* Derechos */}
          <div className="text-right text-[#1a346b] text-sm font-medium">
            © 2024 Openlab SAS
          </div>
        </div>
      </div>

      {/* Modal de términos */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">{t("privacyPolicy.title")}</h2>
            <p className="text-gray-700">
              {t("privacyPolicy.content")}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>

  );
};

export default Footer;
