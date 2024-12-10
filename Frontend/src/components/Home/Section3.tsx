import React from 'react';
import BackgroundSvg from '/assets/home/section3-background.svg';
import iPhoneX from '../../assets/home/iPhoneX.png';
import icon1 from '../../assets/home/icon1.png';
import icon2 from '../../assets/home/icon2.png';
import icon3 from '../../assets/home/icon3.png';
import icon4 from '../../assets/home/icon4.png';
import icon5 from '../../assets/home/icon5.png';
import { useTranslation } from "react-i18next"

const Section3: React.FC = () => {
  const { t } = useTranslation(["translation"]);
  const benefits = [
    {
      icon: icon1,
      title: t("homeTexts.benefit1Title"),
      description: t("homeTexts.benefit1Description"),
    },
    {
      icon: icon2,
      title: t("homeTexts.benefit2Title"),
      description: t("homeTexts.benefit2Description"),
    },
    {
      icon: icon3,
      title: t("homeTexts.benefit3Title"),
      description: t("homeTexts.benefit3Description"),
    },
    {
      icon: icon4,
      title: t("homeTexts.benefit4Title"),
      description: t("homeTexts.benefit4Description"),
    },
    {
      icon: icon5,
      title: t("homeTexts.benefit5Title"),
      description: t("homeTexts.benefit5Description"),
    },
  ];

  return (
    <section
      className="w-full h-[80rem] md:h-[55rem] bg-center bg-cover bg-no-repeat pt-44 md:pt-8"
      style={{ backgroundImage: `url(${BackgroundSvg})` }}
    >
      <div className="relative flex flex-wrap w-full max-w-6xl px-12 md:px-32 py-20 mx-auto">
        {/* Columna Izquierda */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          <div className="text-[#1a1a1a] text-5xl font-semibold">
            {t("homeTexts.benefits")}
          </div>
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-6"
              >
                {/* Ícono */}
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-8 h-8"
                />

                {/* Contenido */}
                <div className="flex flex-col">
                  <div className="text-[#1a1a1a] text-lg font-bold pb-2">
                    {benefit.title}
                  </div>
                  <div className="text-[#1a1a1a] text-md leading-snug max-w-[18rem]">
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="w-full lg:w-1/2 flex items-center pt-12 md:pt-0 justify-center">
          <img
            src={iPhoneX}
            alt="iPhone"
            className="max-w-full max-h-[38rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
