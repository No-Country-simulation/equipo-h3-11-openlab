import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Purchase from "../components/Market/Purchase";
import SaleOrder from "../components/Market/SaleOrder";

const Market = () => {
  return (
    <>
      <Header />
      <div className="main-content flex-grow flex relative">
        <Sidebar />
        <div className="flex-1 flex flex-col pl-[19rem] ">
          {/* Título agregado */}
          <div className="pt-4 text-[#1a1a1a] text-[2rem] font-semibold ">
            Purchase and Sale Orders
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5">
              <Purchase />
            </div>
            <div className="w-full md:w-2/5 pr-10">
              <SaleOrder />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Market;
