import React from 'react';

const Section2: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-12 px-6 py-24 bg-white">
      {/* Título */}
      <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-bold text-center">
        ¡Comienza ahora!
      </h2>

      {/* Descripción */}
      <p className="text-[#1a1a1a] text-lg font-semibold text-center w-full max-w-2xl">
        Ayuda a diseñar, construir y promover a las startups del futuro: <br />
        abiertas, descentralizadas y transparentes.
      </p>

      {/* Contenedor de las Cards con Líneas */}
      <div className="flex items-center w-full max-w-4xl">
        {/* Cards con Líneas */}
        {[
          {
            title: 'Inscríbete',
            description:
              'Da clic a empezar y regístrate con tu cuenta de Google, Facebook o correo electrónico.',
          },
          {
            title: 'Explora las iniciativas',
            description: 'Explora las iniciativas en la sección de iniciativas.',
          },
          {
            title: 'Únete',
            description:
              'Únete a alguna iniciativa que se alinee con tus intereses y habilidades.',
          },
          {
            title: 'Recibe invitación',
            description:
              'Recibe una invitación a la plataforma de colaboración para proponer ideas, cumplir misiones y ganar tokens.',
          },
        ].map((card, index, array) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div className="flex flex-col items-center justify-self-start bg-white p-0 pt-6 rounded-lg min-h-[350px] max-w-[200px]">
              <div className="flex items-center justify-center w-[78px] h-[78px] relative mb-4">
                <div className="absolute inset-0 bg-[#6193ff]/40 rounded-full"></div>
                <div className="absolute inset-2 bg-[#6193ff] rounded-full"></div>
                <div className="absolute inset-4 bg-[#3a23ff] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="text-center ">
                <h3 className="text-[#1a1a1a] text-xl font-medium ">{card.title}</h3>
                <p className="text-[#1a1a1a] text-base font-normal max-w-[30rem]">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Línea separadora entre Cards */}
            {index < array.length - 1 && (
              <div className="w-52 h-[0px] border border-[#e0e0e0] -mt-[225px]"></div>
            )}

          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Section2;
