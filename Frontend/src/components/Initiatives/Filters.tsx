import { useTranslation } from "react-i18next"

const InitiativesFilters = () => {
    const { t } = useTranslation(["translation"]);
    return (
        <div className="flex flex-row justify-start items-center text-slate-500 font-semibold py-4 gap-4">
            <button className="border border-slate-400 rounded-xl w-40 h-10">
                {t("initiativesOptions.all")}
            </button>
            <button className="border border-blue-900 bg-blue-200 text-blue-950 rounded-xl w-40 h-10">
                {t("initiatives")}
            </button>
            <button className="border border-slate-400 rounded-xl w-40 h-10">
                {t("initiativesOptions.newInitiatives")}
            </button>
            <button className="border border-slate-400 rounded-xl w-40 h-10">
                {t("initiativesOptions.favorites")}
            </button>
        </div>
    )
}

export default InitiativesFilters