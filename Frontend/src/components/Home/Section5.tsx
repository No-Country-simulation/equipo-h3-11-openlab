import fondo from '/assets/home/section5-fondo4.svg';
import icon from '../../assets/home/icon-section5.png';
import { useTranslation } from "react-i18next"

const Section5 = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div
      className="flex flex-col items-center justify-center p-4 w-full bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Asegura que el fondo se adapte al tamaño del contenedor
      }}
    >
      {/* Título */}
      <div className="w-[782px] text-center text-white text-[40px] font-semibold">
        {t("homeTexts.section5Title")}
      </div>

      {/* Espaciado */}
      <div className="h-8"></div>

      {/* Descripción */}
      <div className="w-[868px] text-center text-white text-lg font-normal">
        {t("homeTexts.section5Description")}
      </div>

      {/* Espaciado */}
      <div className="h-12"></div>

      {/* Botón */}
      <button className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-[#3A23FF] bg-white rounded-md shadow-md transition-all duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105">
        {/* Ícono */}
        <img
          src={icon}
          alt="icono"
          className="w-5 h-5 transition-all duration-300 ease-in-out transform hover:scale-110"
        />
        {t("homeTexts.more")}
      </button>

    </div>
  );
};

export default Section5;
