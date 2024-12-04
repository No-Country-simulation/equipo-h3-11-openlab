import { useTranslation } from "react-i18next"

const InitiativesFilters = () => {
    const { t } = useTranslation(["translation"]);
    return (
        <div className="flex flex-row justify-start items-center text-slate-500 font-semibold py-4 gap-4">
            <button className="border border-slate-400 rounded-xl w-32 h-8">
                {t("initiativesOptions.all")}
            </button>
            <button className="border border-slate-400 rounded-xl w-32 h-8">
                {t("initiatives")}
            </button>
            <button className="border border-slate-400 rounded-xl w-32 h-8">
                {t("initiativesOptions.newInitiatives")}
            </button>
            <button className="border border-slate-400 rounded-xl w-32 h-8">
                {t("initiativesOptions.favorites")}
            </button>
        </div>
    )
}

export default InitiativesFilters