//import { useState } from 'react'
import { useTranslation } from "react-i18next"
//import SearchBar from '../../components/SearchBar'
//import DataTable from './DataTable'
import OrderbookInteraction from '../../components/OrderbookInteraction'


function Content() {
    const { t } = useTranslation(["translation"]);
    //const [searchFilter, setSearchFilter] = useState("")
    return (
        <>
            <header className="flex flex-col justify-start items-end w-full pr-16">
                <div className="flex flex-row justify-between w-full py-8">
                    <h1 className="text-3xl font-bold">{t("marketOptions.pageTitle")}</h1>
                </div>
            </header>
            <div className="flex flex-row justify-between pr-12">
                <section>
                    <div className="w-full p-8 bg-white rounded-2xl shadow">
                        {/*  <SearchBar
                        onChange={(value: any) => setSearchFilter(String(value))} 
                        value={searchFilter ?? ""}/>
                        <div className="flex flex-row justify-start items-center text-slate-500 font-semibold py-4 gap-4">
                            <button className="border border-blue-900 bg-blue-200 text-blue-950 rounded-xl w-40 h-10">
                                {t("marketOptions.openOrders")}
                            </button>
                            <button className="border border-slate-400 rounded-xl w-40 h-10">
                                {t("marketOptions.orderHistory")}
                            </button>
                        </div>
                        <DataTable /> */}
                    </div>
                </section>
                <section>
                    <div className="w-full p-8 bg-white rounded-2xl shadow">
                        <OrderbookInteraction />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Content