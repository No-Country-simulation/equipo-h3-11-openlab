import React from 'react';
import { useTranslation } from "react-i18next"

const Section2: React.FC = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <section className="flex flex-col items-center justify-center space-y-12 px-3 md:px-6 py-12 md:py-24 bg-white">
      {/* Título */}
      <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-semibold text-center">
        {t("homeTexts.startNow")}
      </h2>

      {/* Descripción */}
      <p className="text-[#1a1a1a] text-lg font-normal text-center w-full max-w-2xl">
        {t("homeTexts.subtitle1")} <br />
        {t("homeTexts.subtitle2")}
      </p>

      {/* Contenedor de las Cards con Líneas */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl space-x-0 md:space-x-1 pt-0 md:pt-8 relative">
        {/* Línea vertical para móvil */}
        <div className="absolute hidden md:hidden h-full w-[2px] bg-[#e0e0e0] left-[50%] -translate-x-[50%] top-[50px]"></div>

        {/* Cards con Líneas */}
        {[
          {
            title: t("homeTexts.card1Title"),
            description:
            t("homeTexts.card1Description"),
          },
          {
            title: t("homeTexts.card2Title"),
            description:
            t("homeTexts.card2Description"),
          },
          {
            title: t("homeTexts.card3Title"),
            description:
            t("homeTexts.card3Description"),
          },
          {
            title: t("homeTexts.card4Title"),
            description:
            t("homeTexts.card4Description"),
          },
        ].map((card, index, array) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div className="flex flex-col md:flex-col items-center bg-white p-2 md:pt-6 rounded-lg relative">
              <div className="flex flex-row md:flex-col items-center max-w-[22rem] md:max-w-[13rem] text-left md:text-center min-h-[8rem] md:min-h-[16rem]">
                {/* Icono circular */}
                <div className="flex items-center justify-center w-[78px] h-[78px] relative md:mb-4">
                  <div className="absolute inset-0 bg-[#6193ff]/40 rounded-full"></div>
                  <div className="absolute inset-2 bg-[#6193ff] rounded-full"></div>
                  <div className="absolute inset-4 bg-[#3a23ff] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col pl-4 md:pl-0 md:mt-2">
                  <h3 className="text-[#1a1a1a] text-lg font-bold whitespace-nowrap">
                    {card.title}
                  </h3>
                  <p className="text-[#1a1a1a] text-md md:text-sm font-semibold max-w-[15rem] pt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Líneas separadoras */}
            {index < array.length - 1 && (
              <>
                {/* Línea horizontal para escritorio */}
                <div className="hidden md:block w-28 h-0 border-t border-[#e0e0e0] -mt-[150px]"></div>

                {/* Línea vertical para móvil */}
                <div className="block md:hidden w-[2px] h-12 bg-[#e0e0e0] mx-auto relative left-[-130px]"></div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Section2;
