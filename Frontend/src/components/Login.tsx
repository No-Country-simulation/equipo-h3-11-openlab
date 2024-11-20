import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="w-full flex py-8 justify-center items-center bg-white">
      <div className="w-[350px] px-3 py-4 bg-white flex flex-col justify-start items-end gap-6 rounded-lg shadow-lg">
        {/* Título y descripción */}
        <div className="self-stretch flex flex-col gap-2">
          <h1 className="text-[#1a1a1a] text-2xl font-semibold">Iniciar sesión</h1>
          <p className="text-[#1a1a1a] text-xs">
            Lorem ipsum dolor sit amet consectetur. Dictum morbi dis ac massa libero nec amet.
          </p>
        </div>

        {/* Campos de entrada */}
        <div className="self-stretch flex flex-col gap-3">
          {/* Campo Correo */}
          <div className="w-full h-10 pl-2 pr-3 py-2.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <FaEnvelope className="w-5 h-5 text-[#6e6e6e]" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full text-xs text-[#6e6e6e] outline-none bg-transparent"
            />
          </div>

          {/* Campo Contraseña */}
          <div className="w-full h-10 pl-2 pr-3 py-2.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <FaLock className="w-5 h-5 text-[#6e6e6e]" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full text-xs text-[#6e6e6e] outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="focus:outline-none"
            >
              {passwordVisible ? (
                <AiFillEyeInvisible className="w-5 h-5 text-[#6e6e6e]" />
              ) : (
                <AiFillEye className="w-5 h-5 text-[#6e6e6e]" />
              )}
            </button>
          </div>

          <a href="#" className="text-[#3d7bff] text-xs underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón de iniciar sesión */}
        <button className="self-stretch h-10 bg-[#3d7bff] rounded-md shadow flex items-center justify-center">
          <span className="text-white text-sm font-semibold">Iniciar sesión</span>
        </button>

        {/* Opciones de inicio de sesión con Google y Facebook */}
        <div className="self-stretch flex flex-col gap-2">
          <button className="w-full h-10 border border-[#6e6e6e] rounded-lg flex items-center justify-center gap-2">
            <img
              src={googleIcon}
              alt="Google Icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-[#1a1a1a] text-xs">Continuar con Google</span>
          </button>

          <button className="w-full h-10 border border-[#6e6e6e] rounded-lg flex items-center justify-center gap-2">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-[#1a1a1a] text-xs">Continuar con Facebook</span>
          </button>
        </div>

        {/* Link para crear cuenta */}
        <div className="self-stretch flex justify-center items-center">
          <a href="#" className="text-[#3d7bff] text-xs underline">
            ¿Aún no tienes cuenta? Crear una ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
