import { Link } from "react-router-dom"
import logo from "../assets/logo-white.svg"
import profile from "../assets/user-pic.png"
import ConnectWallet from '../components/ConnectWallet'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <header className="flex flex-row justify-between items-center border-2 border-transparent border-b-gray-200 p-4">
            <div className="flex flex-row text-lg font-bold">
                <Link to="/">
                    {" "}
                    {/* Enlace que redirige al home */}
                    <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-auto object-contain" // Ajusta el tamaño según sea necesario
                    />
                </Link>
            </div>
            
            <div className="flex flex-row gap-4">
                <ConnectWallet />
                {isAuthenticated && user ? (
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row items-center border-2 border-transparent border-l-gray-200 p-2 gap-2">
                        <img
                            src={profile}
                            alt="foto de perfil"
                            className="h-16 w-16 rounded-full object-cover"
                        />
                        <span>{user.name || "Usuario"}</span>
                    </div>
                </div>
            ) : (
                <p>Inicia sesión para ver más detalles</p>
            )}
            </div>
        </header>
    )
}

export default Header