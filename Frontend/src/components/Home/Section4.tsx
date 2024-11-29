import { useState, useEffect } from "react";
import nosotros from '../../assets/home/nosotros.png';
import nuestra from '../../assets/home/nuestra-mision.png';

const Section4 = () => {
  const cards = [
    {
      title: "Nosotros",
      description:
        "Nosotros somos los visionarios locos, los rebeldes, los innovadores, los que no se conforman con el mundo como es. Pensadores revolucionarios que creen en un solo movimiento para todos, en un mundo sin fronteras. \n\nSabemos que la libertad no es algo con lo que se nace, sino algo por lo que tienes que luchar. Abogamos por un movimiento que represente los intereses y el bienestar de la sociedad. No creemos que sea tiempo de aprender a jugar el juego, sino de cambiar sus reglas.",
      image: nosotros,
    },
    {
      title: "Nuestra Misión",
      description:
        "Acelerar la innovación al tiempo que democratizamos el acceso a la educación y el trabajo, permitiendo a la humanidad operar como una sola organización sin límites imaginados.",
      image: nuestra,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 6000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="container mx-auto px-6">
      {/* Contenedor principal con tamaño fijo */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full h-full flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
            style={{ display: index === currentIndex ? "flex" : "none" }} // Evita que los elementos ocupen espacio
          >
            {/* Imagen */}
            <img
              src={card.image}
              alt={`Imagen ${card.title}`}
              className="w-[50%] h-[70%] rounded-3xl object-cover"
            />
            {/* Texto */}
            <div className="max-w-lg space-y-4">
              <h2 className="text-[#0f0f30] text-[32px] font-semibold">
                {card.title}
              </h2>
              <p className="text-[#1a1a1a] text-lg font-normal">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
