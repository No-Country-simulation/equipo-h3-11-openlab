
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[442px] h-auto bg-white px-6 py-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[#1a1a1a] text-3xl font-semibold">Iniciar sesión</h1>
          <p className="text-[#1a1a1a] text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur. Dictum morbi dis ac massa libero nec amet fusce molestie.
          </p>
        </div>

        {/* Formulario de Login */}
        <form className="space-y-6">
          {/* Correo electrónico */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#6e6e6e] mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="h-12 px-4 py-3.5 rounded-[10px] border border-[#6e6e6e] text-sm"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-[#6e6e6e] mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="h-12 px-4 py-3.5 rounded-[10px] border border-[#6e6e6e] text-sm"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          {/* Olvidaste tu contraseña */}
          <div className="flex justify-end">
            <a href="#" className="text-[#3d7bff] text-sm underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón de Iniciar sesión */}
          <button
            type="submit"
            className="w-full h-12 bg-[#3d7bff] text-white rounded-[10px] text-base font-semibold"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Continuar con Google y Facebook */}
        <div className="mt-6 space-y-4">
          <button className="w-full h-12 px-4 py-3 rounded-2xl border border-[#6e6e6e] text-sm flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-[#d9d9d9] rounded-full"></div>
            <span className="text-[#1a1a1a]">Continuar con Google</span>
          </button>
          <button className="w-full h-12 px-4 py-3 rounded-2xl border border-[#6e6e6e] text-sm flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-[#d9d9d9] rounded-full"></div>
            <span className="text-[#1a1a1a]">Continuar con Facebook</span>
          </button>
        </div>

        {/* Enlace de Crear cuenta */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            ¿Aún no tienes cuenta?{" "}
            <a href="#" className="text-[#3d7bff] underline">
              Crear una ahora
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
