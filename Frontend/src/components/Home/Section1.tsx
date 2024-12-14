import React, { useEffect } from 'react';
import fondo from '/assets/home/section1-vector.svg';
import imagen from '../../assets/home/svg2.svg';
import empezar from '../../assets/home/empezar-buton.svg';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Section1: React.FC = () => {
  const { t } = useTranslation(["translation"]);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Redirigir automáticamente si el usuario está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/userhome");
    }
  }, [isAuthenticated, navigate]);

  // Función para manejar el clic en el botón "Get Started"
  const handleGetStarted = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect({
        appState: { targetUrl: "/userhome" },
      });
    }
  };

  return (
    <section
      className="w-full bg-bottom bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between h-full px-6 md:px-16 lg:px-24 text-left">
        {/* Columna izquierda */}
        <div className="md:w-1/2 space-y-10 md:px-14">
          <h1 className="text-white text-3xl md:text-5xl font-semibold pt-20">
            {t("homeTexts.welcomeMsg")}
          </h1>
          <p className="text-white text-lg font-medium">
            {t("homeTexts.introMsg")}
          </p>
          <button
            onClick={handleGetStarted}
            className="flex items-center justify-center gap-4 w-44 h-14 bg-[#3a23ff] rounded-[10px] shadow-lg text-white text-lg font-semibold hover:bg-[#2a1adf] transition"
          >
            <img src={empezar} alt="Ícono de empezar" className="w-6 h-6" />
            {t("getStarted")}
          </button>
        </div>

        {/* Columna derecha */}
        <div className="md:w-1/2 pb-[1.8rem]">
          <img
            src={imagen}
            alt="Imagen representativa"
            className="w-[28rem]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
