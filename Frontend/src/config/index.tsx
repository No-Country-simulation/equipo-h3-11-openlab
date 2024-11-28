import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, sepolia } from "@reown/appkit/networks";

// Project ID obtenido desde Reown Cloud
export const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

if (!projectId) {
  throw new Error("El Project ID no está definido");
}

// Redes soportadas
export const networks = [mainnet, sepolia];

// Metadatos opcionales de la aplicación
export const metadata = {
  name: "Prueba_OpenLab",
  description: "My Website description",
  url: "https://openlab-steel.vercel.app/",
  icons: ["https://openlab-steel.vercel.app/favicon.ico"],
};

// Configurar el adaptador Ethers5
export const ethers5Adapter = new Ethers5Adapter();
