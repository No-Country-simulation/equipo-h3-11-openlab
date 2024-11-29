import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import home_icon from "../assets/icons/lateral-navbar/home-icon.svg"
import initiatives_icon from "../assets/icons/lateral-navbar/initiatives-icon.svg"
import wallet_icon from "../assets/icons/lateral-navbar/wallet-icon.svg"
import market_icon from "../assets/icons/lateral-navbar/market-icon.svg"
import settings_icon from "../assets/icons/lateral-navbar/settings-icon.svg"
import logout_icon from "../assets/icons/lateral-navbar/logout-icon.svg"

const LateralNavbar = () => {
    const { t } = useTranslation(["translation"])
    return (
        <nav className="absolute top-0 left-0 w-1/12 h-4/5 border-2 border-transparent border-r-gray-200">
            <div className="flex flex-col gap-4 p-8">
                <div className="flex flex-row gap-2">
                    <img src={home_icon} />
                    <Link to="/">{t("home")}</Link>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={initiatives_icon} />
                    <Link to="/">{t("initiatives")}</Link>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={wallet_icon} />
                    <Link to="/wallet">{t("wallet")}</Link>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={market_icon} />
                    <Link to="/">{t("market")}</Link>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={settings_icon} />
                    <Link to="/">{t("settings")}</Link>
                </div>
            </div>
            <div className="p-8">
                <div className="flex flex-row gap-2">
                    <img src={logout_icon} />
                    <Link to="/">{t("logout")}</Link>
                </div>
            </div>
        </nav>
    )
}

export default LateralNavbar