import { Link } from "react-router-dom"
import logo from "../assets/logo-white.svg"
import line from "../assets/navbar/line.png"
import profile from "../assets/react.svg"

const Header = () => {
    return (
        <header>
            <div className="text-lg font-bold">
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
            <div>
                <img src={line} alt="linea-separador" />
                <img src={profile} alt="foto de perfil"/>
                <span>Favio A.</span>
            </div>
        </header>
    )
}

export default Header