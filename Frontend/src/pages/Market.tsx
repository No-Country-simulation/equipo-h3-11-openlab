import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { useTranslation } from "react-i18next"
import SearchBar from '../components/SearchBar'
import DataTable from '../components/Market/DataTable'
import OrderbookInteraction from '../components/OrderbookInteraction'

const Market = () => {
    const { t } = useTranslation(["translation"]);
    const [searchFilter, setSearchFilter] = useState("")
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative bg-slate-50">
                <div className="flex flex-row space-x-8">
                    <div className="basis-1/6">
                        <Sidebar />
                    </div>
                    <div className="basis-5/6">
                    <header className="flex flex-col justify-start items-end w-full pr-16">
                        <div className="flex flex-row justify-between w-full py-8">
                            <h1 className="text-3xl font-bold">{t("marketOptions.pageTitle")}</h1>
                        </div>
                    </header>
                    <div className="flex flex-row justify-between pr-12">
                        <section>
                            <div className="w-full p-8 bg-white rounded-2xl shadow">
                                <SearchBar
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
                                <DataTable />
                            </div>
                        </section>
                        <section>
                            <div className="w-full p-8 bg-white rounded-2xl shadow">
                                <OrderbookInteraction />
                            </div>
                        </section>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Market