import Favio from '../../assets/user-pic.png';
import { FC } from 'react';

interface UserProps {
  token: string; // Se espera que el token no sea nulo
  userName: string;
  userEmail: string;
}

const User: FC<UserProps> = ({ token, userName, userEmail }) => {

  return (
    <div className="flex flex-row items-center justify-evenly m-12 p-6 border-transparent rounded-xl bg-white shadow">
      <div className="flex flex-row items-center gap-4 border-2 border-transparent border-r-slate-200 pr-8">
        <img
          className="w-24 h-24 rounded-full"
          src={Favio}
          alt="user"
        />
        <div className="flex flex-col items-start">
          <p className="mx-4 text-lg font-bold">{userName}</p>
          <p className="mx-4 text-base">{userEmail}</p>
          <p className="mx-4 text-sm">Token: {token ? token : "No se pudo obtener el token."}</p> {/* Muestra el token */}
        </div>
      </div>
      <div className="ml-2">
        <p className="mx-8">
          Soy un emprendedor apasionado por la innovación y la tecnología. 
        </p>
        <p className="mx-8">
          Actualmente, soy fundador/a y CEO de DAMBEDEV, donde trabajamos
        </p>
        <p className="mx-8">  
          para ofrecer soluciones innovadoras y transversales que integren web e IoT.
        </p>
        <p className="mx-8">
          Además de liderar DAMBEDEV, disfruto de participar dentro
        </p>
        <p className="mx-8">
          de las simulaciones laborales y hackathones de No Country Tech, compartiendo
        </p>
        <p className="mx-8">
          conocimientos y experiencias con personas de distintos países de habla hispana.
        </p>
      </div>
    </div>
  );
};

export default User;
