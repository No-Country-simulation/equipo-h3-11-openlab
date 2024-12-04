import { useTranslation } from "react-i18next"
import { CirclePlus } from "lucide-react"

const InitiativesHeader = () => {
    const { t } = useTranslation(["translation"]);
    return (
        <header className="flex flex-col justify-start items-end w-full pr-16">
            <div className="flex flex-row justify-between w-full py-8">
                <h1 className="text-3xl font-bold">{t("initiatives")}</h1>
                <button className="self-stretch h-10 bg-[#3d7bff] rounded-md shadow flex items-center justify-center">
                    <span className="flex flex-row gap-2 px-8 py-2 text-white text-sm font-semibold"><CirclePlus />{t("initiativesOptions.create")}</span>
                </button>
            </div>
        </header>
    )
}

export default InitiativesHeader