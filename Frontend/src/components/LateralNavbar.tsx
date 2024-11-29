import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const LateralNavbar = () => {
    const { t } = useTranslation(["translation"])
    return (
        <nav className="absolute top-0 left-0 relative">
            <div className="flex flex-col gap-4 p-8">
                <Link to="/">{t("home")}</Link>
                <Link to="/">{t("initiatives")}</Link>
                <Link to="/">{t("wallet")}</Link>
                <Link to="/">{t("market")}</Link>
                <Link to="/">{t("settings")}</Link>
            </div>
            <div className="p-8">
                <Link to="/">{t("logout")}</Link>
            </div>
        </nav>
    )
}

export default LateralNavbar