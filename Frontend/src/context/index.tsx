import { ReactNode } from "react";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ethers5Adapter, metadata, projectId } from "../config";
import { mainnet, sepolia } from "@reown/appkit/networks";

// Verificación del Project ID
if (!projectId) {
  throw new Error("El Project ID no está definido");
}

// Crear el QueryClient
const queryClient = new QueryClient();

// Crear la instancia de AppKit
export const appKitModal = createAppKit({
  adapters: [ethers5Adapter],
  projectId,
  networks: [mainnet, sepolia],
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: [],
  },
  themeMode: "light",
});

// Proveedor de contexto
export function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
