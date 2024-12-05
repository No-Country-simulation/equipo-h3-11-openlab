import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n"; // Importar configuración de i18n

import { ContextProvider } from "./context/index.tsx";
import { WalletProvider } from "./context/WalletContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <WalletProvider>
        <App />
      </WalletProvider>
    </ContextProvider>
  </StrictMode>
);
