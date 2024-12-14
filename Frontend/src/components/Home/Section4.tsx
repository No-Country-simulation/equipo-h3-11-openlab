import { useState, useEffect } from "react";
import nosotros from "../../assets/home/nosotros.png";
import nuestra from "../../assets/home/nuestra-mision.png";
import arrow from "../../assets/arrow-right.png";
import ractangle from "../../assets/ractangle.png";
import { useTranslation } from "react-i18next";

const Section4 = () => {
  const { t } = useTranslation(["translation"]);
  const cards = [
    {
      title: t("homeTexts.aboutTitle"),
      description: t("homeTexts.aboutDescription"),
      image: nosotros,
    },
    {
      title: t("homeTexts.missionTitle"),
      description: t("homeTexts.missionDescription"),
      image: nuestra,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar el carrusel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Función para retroceder el carrusel
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Movimiento automático cada 12 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div id="vision" className="container mx-auto px-6 overflow-hidden pt-44">
      {/* Contenedor principal con carrusel */}
      <div
        className="relative flex w-full h-auto min-h-[600px] md:min-h-[700px] transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 px-6 relative"
            style={{ width: "100%" }}
          >
            {/* Imagen */}
            <img
              src={card.image}
              alt={`Imagen ${card.title}`}
              className="w-full md:w-[50%] h-auto rounded-3xl object-cover"
            />
            {/* Texto */}
            <div className="max-w-lg min-h-[300px] md:min-h-[400px] flex flex-col justify-center space-y-6 text-center md:text-left md:pl-14">
              <h2 className="text-[#0f0f30] text-3xl md:text-4xl font-bold">
                {card.title}
              </h2>
              <p className="text-[#1a1a1a] text-base md:text-lg font-normal whitespace-pre-line">
                {card.description}
              </p>
            </div>

            {/* Botón para desplazar */}
            <button
              onClick={nextSlide}
              className="absolute bottom-[6.8rem] right-[33.5rem] w-[5rem] h-[6rem] bg-[#2f00ff] rounded-tr-2xl rounded-br-2xl text-lg font-semibold flex items-center justify-center hover:bg-[#3a23ff] transition"
            >
              <img src={arrow} alt="" />
            </button>
            <button
              onClick={prevSlide}
              className="absolute bottom-24 right-[38.5rem] w-[5rem] h-[7.6rem] rounded-tr-2xl rounded-br-2xl flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100"
            >
              <img src={ractangle} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
