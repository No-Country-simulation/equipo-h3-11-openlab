const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#fefefe]">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-[10px] shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-[#212121] text-[32px] font-semibold font-['Commissioner']">Crear cuenta</div>
          <div className="text-[#1a1a1a] text-sm font-normal font-['Commissioner'] mt-2">
            Lorem ipsum dolor sit amet consectetur. Dictum morbi dis ac massa libero nec amet fusce molestie.
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              className="w-full h-12 pl-3 pr-4 py-3.5 rounded-[10px] border border-[#6e6e6e] text-sm text-[#8a8a8a] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full h-12 pl-3 pr-4 py-3.5 rounded-[10px] border border-[#6e6e6e] text-sm text-[#8a8a8a] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full h-12 pl-3 pr-4 py-3.5 rounded-[10px] border border-[#6e6e6e] text-sm text-[#8a8a8a] focus:outline-none"
            />
            <div className="text-xs text-[#8a8a8a] mt-2">8 caracteres como mínimo</div>
          </div>

          {/* Repeat Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Repetir contraseña"
              className="w-full h-12 pl-3 pr-4 py-3.5 rounded-[10px] border border-[#6e6e6e] text-sm text-[#8a8a8a] focus:outline-none"
            />
          </div>

          {/* Terms & Privacy */}
          <div className="text-xs text-center text-[#212121]">
            Al continuar, confirmas tu conformidad con nuestras{' '}
            <span className="text-[#3d7bff] underline">Condiciones de Uso</span> y que leíste nuestra{' '}
            <span className="text-[#3d7bff] underline">Declaración de Privacidad y Cookies</span>.
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button className="w-full h-12 px-4 py-3 bg-[#3d7bff] rounded-[10px] text-[#fefefe] font-semibold text-base">
            Crear cuenta
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <span className="text-[#3d7bff] text-sm underline">
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
