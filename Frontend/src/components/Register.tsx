import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="w-full flex py-8 justify-center items-center bg-white">
      <div className="w-[350px] px-4 py-6 bg-white flex flex-col gap-6 rounded-lg">
        {/* Título y descripción */}
        <div className="self-stretch flex flex-col gap-2">
          <h1 className="text-[#1a1a1a] text-2xl font-semibold">
            Crear cuenta
          </h1>
          <p className="text-[#1a1a1a] text-sm">
            Lorem ipsum dolor sit amet consectetur. Dictum morbi dis ac massa
            libero nec amet fusce molestie.
          </p>
        </div>

        {/* Campos del formulario */}
        <div className="self-stretch flex flex-col gap-4">
          {/* Nombre y Apellido */}
          <div className="w-full h-12 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
          </div>

          {/* Correo electrónico */}
          <div className="w-full h-12 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
          </div>

          {/* Contraseña */}
          <div className="w-full h-12 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <FaLock className="w-5 h-5 text-[#6e6e6e]" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
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
          <p className="text-[#8a8a8a] text-xs">8 caracteres como mínimo</p>

          {/* Repetir Contraseña */}
          <div className="w-full h-12 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <FaLock className="w-5 h-5 text-[#6e6e6e]" />
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Repetir contraseña"
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="focus:outline-none"
            >
              {confirmPasswordVisible ? (
                <AiFillEyeInvisible className="w-5 h-5 text-[#6e6e6e]" />
              ) : (
                <AiFillEye className="w-5 h-5 text-[#6e6e6e]" />
              )}
            </button>
          </div>
        </div>

        {/* Políticas */}
        <p className="text-[#212121] text-xs">
          Al continuar, confirmas tu conformidad con nuestras{" "}
          <a href="#" className="text-[#3d7bff] underline">
            Condiciones de Uso
          </a>{" "}
          y que leíste nuestra{" "}
          <a href="#" className="text-[#3d7bff] underline">
            Declaración de Privacidad y Cookies.
          </a>
        </p>

        {/* Botón de Crear Cuenta */}
        <button className="self-stretch h-12 bg-[#3d7bff] rounded-md shadow flex items-center justify-center">
          <span className="text-white text-sm font-semibold">
            Crear cuenta
          </span>
        </button>

        {/* Link de Iniciar Sesión */}
        <div className="self-stretch flex justify-center items-center">
          <a href="#" className="text-[#3d7bff] text-sm underline">
            ¿Ya tienes una cuenta? Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
