import { useAppKit } from "@reown/appkit/react";

export default function ConnectWallet() {
  const { open } = useAppKit(); // Pasamos appKit manualmente

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[442px] h-auto bg-white px-6 py-10 rounded-xl shadow-lg space-y-16">
        <button
          onClick={() => open()}
          className="w-full h-12 bg-[#3d7bff] text-white rounded-[10px] text-base font-semibold"
        >
          Conectar Wallet
        </button>
        <button
          onClick={() => open({ view: "Networks" })}
          className="w-full h-12 px-4 py-3 rounded-2xl border border-[#6e6e6e] text-sm flex items-center justify-center space-x-2"
        >
          Seleccionar Red
        </button>
      </div>
    </div>
  );
}
