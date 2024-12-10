import React, { createContext, useContext, useState, useEffect } from "react";
import {
  useAppKitAccount,
  useAppKitProvider,
  useAppKitNetwork,
} from "@reown/appkit/react";
import { ethers } from "ethers";

// Definir la interfaz para el contexto
interface WalletContextType {
  signer: ethers.Signer | null;
  walletAddress: string;
}

// Crear el contexto de la wallet con el tipo WalletContextType
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Proveedor del contexto de la wallet
export const WalletProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { address, isConnected } = useAppKitAccount(); // Obtener la dirección de la wallet y el estado de conexión
  const { walletProvider } = useAppKitProvider("eip155"); // Obtener el proveedor de la wallet
  const { chainId } = useAppKitNetwork(); // Obtener la red actual
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [walletAddress, setWalletAddress] = useState<string>("");

  useEffect(() => {
    if (isConnected && walletProvider && address) {
      const provider = new ethers.providers.Web3Provider(
        walletProvider,
        chainId
      );
      const walletSigner = provider.getSigner(address);
      setSigner(walletSigner); // Guardamos el signer en el estado
      setWalletAddress(address); // Guardamos la dirección de la wallet
    }
  }, [isConnected, walletProvider, address, chainId]);

  return (
    <WalletContext.Provider value={{ signer, walletAddress }}>
      {children}
    </WalletContext.Provider>
  );
};

// Hook para consumir el WalletContext
export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet debe ser utilizado dentro de WalletProvider");
  }
  return context;
};
