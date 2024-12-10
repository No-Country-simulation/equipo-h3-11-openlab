import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n"; // Importar configuración de i18n
import { Auth0Provider } from "@auth0/auth0-react";
import { ContextProvider } from "./context/index.tsx";
import { WalletProvider } from "./context/WalletContext.tsx";

// Variables de entorno
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
      }}
    >
      <ContextProvider>
        <WalletProvider>
          <App />
        </WalletProvider>
      </ContextProvider>
    </Auth0Provider>
  </StrictMode>
);
