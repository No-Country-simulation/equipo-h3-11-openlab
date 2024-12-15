import { useState } from "react";
import logo from "../assets/logo-blue.svg";
import facebook from "../assets/navbar/facebook.svg";
import instagram from "../assets/navbar/instagram.svg";
import twitter from "../assets/navbar/twitter.svg";
import line from "../assets/navbar/line.png";
import LanguageSwitch from "./LanguageSwitch";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { t } = useTranslation(["translation"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { targetUrl: "/userhome" },
    });
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleProfileRedirect = () => {
    if (isAuthenticated) {
      navigate("/userhome");
    }
  };

  return (
    <nav className="bg-[#6193FF] text-white">
      {/* Primera sección: Íconos sociales y selector de idioma */}
      <div className="flex justify-between items-center px-2 md:px-20 py-2 text-sm">
        {/* Íconos sociales */}
        <div className="flex items-center space-x-4">
          <img src={line} alt="linea-separador" />
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <img src={facebook} alt="facebook-icon" className="h-4 w-4" />
          </a>
          <img src={line} alt="linea-separador" />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <img src={instagram} alt="instagram-logo" className="h-4 w-4" />
          </a>
          <img src={line} alt="linea-separador" />
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <img src={twitter} alt="twitter-icon" className="h-4 w-4" />
          </a>
          <img src={line} alt="linea-separador" />
        </div>

        <div className="flex items-center space-x-2">
          {/* Switch de idioma */}
          <img src={line} alt="linea-separador" />
          <LanguageSwitch /> {/* Aquí se integra el componente */}
          <img src={line} alt="linea-separador" />
        </div>
      </div>

      {/* Línea separadora */}
      <div className="w-full h-[1px] bg-white opacity-20"></div>

      {/* Segunda sección: Menú de navegación */}
      <div className="flex justify-between items-center px-4 md:px-20 py-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">
            {" "}
            {/* Enlace que redirige al home */}
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain" // Ajusta el tamaño según sea necesario
            />
          </Link>
        </div>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[7rem] left-0 w-full py-6 bg-[#6193FF] md:static md:block z-20`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-end md:w-auto">
            {/* Opciones del Menú */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-12 text-sm font-semibold">
              <a
                href="#vision"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                {t("vision")}
              </a>
              <a
                href="#iniciativas"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                {t("initiatives")}
              </a>
              <a
                href="#blog"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                {t("blog")}
              </a>
              <button
                onClick={isAuthenticated ? handleProfileRedirect : handleLogin}
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                {isAuthenticated ? t("profile") : t("login")}
              </button>
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
                >
                  {t("logout")}
                </button>
              )}
            </div>

            {/* Botón Iniciar Sesión */}
            <div className="px-6 md:px-0 md:ml-10">
              <Link
                to="/login"
                className="bg-white text-[#3a23ff] text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 w-full md:w-auto block text-center"
              >
                {t("signIn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
