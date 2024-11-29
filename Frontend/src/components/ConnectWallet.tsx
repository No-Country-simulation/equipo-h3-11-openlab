import { useAppKit } from "@reown/appkit/react";
import { useTranslation } from "react-i18next";

export default function ConnectWallet() {
  const { open } = useAppKit(); // Pasamos appKit manualmente
  const { t } = useTranslation(["translation"]);

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        onClick={() => open({ view: "Networks" })}
        className="h-8 px-4 py-3 rounded-xl border border-[#6e6e6e] text-sm flex items-center justify-center space-x-2"
      >
        {t("walletOptions.network")}
      </button>
      <button
        onClick={() => open()}
        className="h-8 bg-[#3a23ff] text-white rounded-xl text-base font-semibold px-2"
      >
        {t("walletOptions.connect")}
      </button>
    </div>
  );
}
