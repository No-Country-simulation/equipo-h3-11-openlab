import { useTranslation } from "react-i18next"
import { Search } from "lucide-react"


const SearchBar = () => {
    const { t } = useTranslation(["translation"]);

    return (
        <div className="relative w-full h-10">
            <div className="absolute left-4 p-2 flex items-center justify-center text-slate-400">
                <Search />
            </div>
            <input type="text" placeholder={t("search")} className="w-full h-full border border-2 border-gray-200 rounded-xl px-12 py-4" />
        </div>
    )
}

export default SearchBar
