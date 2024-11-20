import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import LanguageSwitch from "./LanguageSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      {/* Primera sección: Íconos sociales y selector de idioma */}
      <div className="flex justify-between items-center px-6 py-2 text-sm">
        {/* Íconos sociales */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaTwitter />
          </a>
        </div>

       {/* Switch de idioma */}
       <LanguageSwitch /> {/* Aquí se integra el componente */}
      </div>

      {/* Línea separadora */}
      <div className="w-full h-[1px] bg-white opacity-20"></div>

      {/* Segunda sección: Menú de navegación */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/"> {/* Enlace que redirige al home */}
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
          className={`${isMenuOpen ? "block" : "hidden"
            } absolute top-20 left-0 w-full bg-blue-500 md:static md:block`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end md:w-auto">
            {/* Opciones del Menú */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-sm font-semibold">
              <a
                href="#vision"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                Visión
              </a>
              <a
                href="#iniciativas"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                Iniciativas
              </a>
              <a
                href="#blog"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                Blog
              </a>
              <a
                href="#entrar"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                Entrar
              </a>
              <a
                href="#empezar"
                className="block px-4 py-2 md:py-0 md:px-0 hover:bg-blue-600 md:hover:bg-transparent"
              >
                Empezar
              </a>
            </div>

            {/* Botón Iniciar Sesión */}
            <div className="ml-6">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 w-full md:w-auto">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
