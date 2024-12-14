import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../assets/logo-white.svg";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import twitter from "../assets/footer/twitter.svg";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGoogleDrive } from 'react-icons/fa';
import anibal from "../assets/team/anibal.png";
import antonio from "../assets/team/antonio.png";
import damian from "../assets/team/damian.jpg";
import jose from "../assets/team/jose.png";
import matias from "../assets/team/matias.png";
import paula from "../assets/team/paula.jpg";
import ricardo from "../assets/team/ricardo.png";
import icon from "../assets/team/icon.png";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation(["translation"]);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Jose Contreras',
      role: 'Team Leader',
      linkedin: 'https://www.linkedin.com/in/joselbcontreras/',
      avatar: jose,
    },
    {
      name: 'Damian Berrojalvis',
      role: 'Project Manager',
      linkedin: 'https://www.linkedin.com/in/dambedev/',
      avatar: damian,
    },
    {
      name: 'Paula Sancho',
      role: 'Diseño UX/UI',
      linkedin: 'https://www.linkedin.com/in/paulasancho90/',
      avatar: paula,
    },
    {
      name: 'Ricardo David Minhot',
      role: 'QA Tester',
      linkedin: 'https://www.linkedin.com/in/ricardo-david-minhot/',
      avatar: ricardo,
    },
    {
      name: 'Antonio Villacrés',
      role: 'Frontend',
      linkedin: 'https://www.linkedin.com/in/antonio-v-5671a390/',
      avatar: antonio,
    },
    {
      name: 'Matias Acevedo',
      role: 'Developer',
      linkedin: 'https://www.linkedin.com/in/matias-nicolas-acevedo/',
      avatar: matias,
    },
    {
      name: 'Anibal Elbaum',
      role: 'Backend',
      linkedin: 'https://www.linkedin.com/in/inganibalelbaum',
      avatar: anibal,
    },
    {
      name: 'Documentación',
      role: 'Google Drive',
      linkedin: 'https://drive.google.com/drive/folders/13yeH4MPuHxq88Pp0mWi62MMnvH0YEAiy',
      avatar: icon,
    }
  ];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto px-2 md:px-20 py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Sección de logo y enlaces */}
          <div className="flex flex-row md:flex-col items-start space-y-4 md:space-y-10 pt-6">
            <Link to="/" className="flex justify-start">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <div className="flex flex-row ml-5 md:ml-0 space-x-8">
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
          </div>

          {/* Sección de íconos sociales y suscripción */}
          <div className="flex flex-col items-end space-y-2 mx-auto md:mx-0">
            {/* Íconos sociales alineados a la derecha */}
            <div
              className={`flex items-center space-x-5 mb-[-2rem] md:mb-0 z-20 ${
                location.pathname !== "/" ? "mt-6" : ""
              }  md:justify-start justify-end  `}
            >
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

            {/* Sección de suscripción */}
            {location.pathname === "/" && (
              <div className="flex flex-col items-start py-0 bg-white mt-4 md:mt-0">
                <div className="text-center text-[#1a346b] md:ml-0 text-lg font-semibold mb-4">
                  Suscríbete a nuestro Boletín
                </div>
                <div className="flex items-center gap-6 md:ml-0 justify-between w-full max-w-[400px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-[250px] h-10 px-4 border border-gray-300 rounded-md shadow-md"
                  />
                  <button className="h-10 px-6 bg-[#3a23ff] text-white rounded-md">
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-300"></div>

      <div className="mx-auto px-6 md:px-20 py-6 space-y-2">
        {/* Sección de derechos de autor y política de privacidad */}
        <div className="flex justify-between items-center w-full">
          <div
            className="text-[#1a346b] text-sm font-medium cursor-pointer hover:underline"
            onClick={toggleModal}
          >
            {t("privacyPolicy.title")}
          </div>
          <div
            className="text-[#1a346b] text-sm font-medium cursor-pointer hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            💗 equipo-h3-11-openlab | No Country 🌎
          </div>
          <div className="text-right text-[#1a346b] text-sm font-medium">
            © 2024 Openlab SAS
          </div>
        </div>
      </div>

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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white m-4 md:m-0 p-4 md:p-8 rounded-lg shadow-lg max-w-3xl max-h-[96vh] overflow-y-auto">
            <h2 className="text-black text-base text-center font-semibold mb-4">
            💗 equipo-h3-11-openlab | No Country 🌎
            </h2>
            <div className="grid grid-cols-2 gap-4 ">
              {teamMembers.map((member) => (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:scale-105 transition-transform duration-300"
                >
                  <div key={member.name} className="flex flex-col md:flex-row text-[#8163b0] bg-[#fceade] items-center p-2 border border-[#ea526f] rounded-lg">
                    <img
                      src={member.avatar || 'https://via.placeholder.com/150'}
                      alt={`${member.name}'s avatar`}
                      className="w-10 h-10 rounded-full md:mr-4"
                    />
                    <div className="flex flex-col items-center md:items-start">
                      <p className="font-semibold text-xs md:text-base text-center">{member.name}</p>
                      <div className="flex items-center mt-1">
                        <p className="text-xs md:text-sm text-black font-semibold ">{member.role}&nbsp; </p>
                        <div className='text-blue-500'>
                          {member.role === 'Google Drive' ? <FaGoogleDrive /> : <FaLinkedin />}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-[#25ced1] text-white rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
