import { Link } from "react-router-dom"
import logo from "../assets/logo-white.svg"
import { Menu } from "lucide-react"
import profile from "../assets/default-profile-img.png"
import ConnectWallet from '../components/ConnectWallet'

const Header = () => {
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
                <ConnectWallet/>
                <div className="flex flex-row items-center border-2 border-transparent border-l-gray-200 p-2 gap-2">
                    <img src={profile} alt="foto de perfil" className="h-16 w-auto object-contain"/>
                    <span>Fabio A.</span>
                </div>
            </div>
        </header>
    )
}

export default Header