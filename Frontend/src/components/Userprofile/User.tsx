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
          <p className="mx-4 text-[24px]">{userName}</p>
          <p className="mx-4 text-[16px]">{userEmail}</p>
          <p className="mx-4 text-[16px]">Token: {token ? token : "No se pudo obtener el token."}</p> {/* Muestra el token */}
        </div>
      </div>
      <div className="ml-2">
        <p className="mx-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          doloremque rerum quaerat? <br />
          Eos, veritatis! Officia ducimus, ea porro reprehenderit similique
          nemo quam asperiores <br />
          fugiat odio sint distinctio, sed ipsa provident!
        </p>
      </div>
    </div>
  );
};

export default User;
