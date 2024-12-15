import { useWallet } from "../context/WalletContext";
import { useAppKit } from "@reown/appkit/react";
import { useTranslation } from "react-i18next";

export default function ConnectWallet() {
  const { walletAddress } = useWallet();
  const { open } = useAppKit();
  const { t } = useTranslation(["translation"]);

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        onClick={() => open({ view: "Networks" })}
        className="h-8 px-4 py-3 rounded-xl border border-[#6e6e6e] text-sm flex items-center justify-center space-x-2"
      >
        {t("walletOptions.network")}
      </button>
      {walletAddress ? (
        <div className="h-8 bg-gray-200 text-gray-800 rounded-xl text-sm font-semibold px-2">
          {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
        </div>
      ) : (
        <button
          onClick={() => open()}
          className="h-8 bg-[#3a23ff] text-white rounded-xl text-base font-semibold px-2"
        >
          {t("walletOptions.connect")}
        </button>
      )}
    </div>
  );
}
