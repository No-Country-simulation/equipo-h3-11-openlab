import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";

const Footer = () => {

  return (
    <footer className="w-full bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col justify-start items-start space-y-6">
        {/* Sección de logo y enlaces */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link to="/">
              <img
                src={logo} // Asegúrate de importar tu logo
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Enlaces de Visión, Iniciativas, Blog */}
          <div className="flex flex-col md:flex-row gap-8">
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              Visión
            </a>
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              Iniciativas
            </a>
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Íconos sociales */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Línea de separación */}
        <div className="w-full border-t border-gray-300 pt-6"></div>
        
      </div>
    </footer>
  );
};

export default Footer;
