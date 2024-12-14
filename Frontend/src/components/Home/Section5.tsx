import { useEffect } from 'react';
import fondo from '/assets/home/section5-fondo4.svg';
import icon from '../../assets/home/icon-section5.png';
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Section5 = () => {
  const { t } = useTranslation(["translation"]);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Redirigir automáticamente si el usuario está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/userhome");  // O la página a la que desees redirigir después de la autenticación
    }
  }, [isAuthenticated, navigate]);

  // Función para manejar el clic en el botón "Más Información"
  const handleMoreInfo = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect({
        appState: { targetUrl: "/userhome" },  // Ajusta la URL según sea necesario
      });
    } else {
      navigate("/userhome");  // Redirigir si ya está autenticado
    }
  };

  return (
    <div
      id="iniciativas"
      className="flex flex-col items-center justify-center w-full bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="h-[120vh] md:h-[120vh] flex flex-col items-center justify-center w-full">
        <div className="max-w-[90%] md:w-[782px] text-center text-white text-[28px] md:text-[40px] font-semibold">
          {t("homeTexts.section5Title")}
        </div>
        <div className="h-8"></div>
        <div className="max-w-[90%] md:w-[868px] text-center text-white text-md md:text-lg font-normal">
          {t("homeTexts.section5Description")}
        </div>
        <div className="h-12"></div>

        {/* Botón con lógica de autenticación */}
        <button
          onClick={handleMoreInfo}
          className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-[#3A23FF] bg-white rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
        >
          <img
            src={icon}
            alt="icono"
            className="w-5 h-5 transition-all duration-300 ease-in-out transform hover:scale-110"
          />
          {t("homeTexts.more")}
        </button>
      </div>
    </div>
  );
};

export default Section5;
