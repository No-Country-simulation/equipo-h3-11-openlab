import Favio from '../../assets/default-profile-img.png';
import Line65 from '../../assets/navbar/line.png';
import { FC } from 'react';

interface UserProps {
  token: string; // Se espera que el token no sea nulo
  userName: string;
  userEmail: string;
}

const User: FC<UserProps> = ({ token, userName, userEmail }) => {
  if (!token) {
    return <p>No se pudo obtener el token.</p>;
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-row items-center">
        <img
          className="w-20 h-20 rounded-full"
          src={Favio}
          alt="user"
        />
        <div className="flex flex-col items-start">
          <p className="mx-4 text-[24px]">{userName}</p>
          <p className="mx-4 text-[16px]">{userEmail}</p>
          <p className="mx-4 text-[16px]">Token: {token}</p> {/* Muestra el token */}
        </div>
      </div>
      <div className="ml-2">
        <img className="mx-8" src={Line65} alt="Line65" />
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
