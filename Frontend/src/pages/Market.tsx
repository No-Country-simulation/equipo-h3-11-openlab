import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Purchase from "../components/Market/Purchase";
import SaleOrder from "../components/Market/SaleOrder";
import { useTranslation } from "react-i18next"

const Market = () => {
  const { t } = useTranslation(["translation"])
  return (
    <>
      <Header />
      <div className="main-content flex-grow flex relative bg-slate-50">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6">
          <div className="flex-1 flex flex-col p-8">
            {/* Título agregado */}
            <div className="p-4 text-[#1a1a1a] text-[2rem] font-semibold ">
              {t("marketOptions.pageTitle")}
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full basis-4/6">
                <Purchase />
              </div>
              <div className="w-full basis-2/6">
                <SaleOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Market;
