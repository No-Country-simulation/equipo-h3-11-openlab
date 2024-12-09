import React from 'react';
import BackgroundSvg from '/assets/home/section3-background.svg';
import iPhoneX from '../../assets/home/iPhoneX.png';
import icon1 from '../../assets/home/icon1.png';
import icon2 from '../../assets/home/icon2.png';
import icon3 from '../../assets/home/icon3.png';
import icon4 from '../../assets/home/icon4.png';
import icon5 from '../../assets/home/icon5.png';

const Section3: React.FC = () => {
  const benefits = [
    {
      icon: icon1,
      title: 'Emprender',
      description: 'Conviértete en emprendedor con tu talento especializado',
    },
    {
      icon: icon2,
      title: 'Libertad',
      description: 'Trabaja en lo que amas bajo tus propias reglas',
    },
    {
      icon: icon3,
      title: 'Inclusión',
      description: 'Verdadera inclusión financiera como co-propietario',
    },
    {
      icon: icon4,
      title: 'Token',
      description: 'Token Diversificados Operan como un fondo de inversión',
    },
    {
      icon: icon5,
      title: 'Aprendizaje',
      description: 'Aprende creando proyectos reales, en entornos reales',
    },
  ];

  return (
    <section
      className="w-full h-[80rem] md:h-[55rem] bg-center bg-cover bg-no-repeat pt-44 md:pt-8"
      style={{ backgroundImage: `url(${BackgroundSvg})` }}
    >
      <div className="relative flex flex-wrap w-full max-w-6xl px-12 md:px-32 py-20 mx-auto">
        {/* Columna Izquierda */}
        <div className="w-full lg:w-1/2 flex flex-col text-left md:justify-center space-y-4 pb-12 md:pb-0">
          <div className="text-[#1a1a1a] text-4xl font-bold pb-6">Beneficios</div>
          <div className="space-x-0 space-y-5">
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
        <div className="w-full lg:w-1/2 flex items-center justify-center">
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
