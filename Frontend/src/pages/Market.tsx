import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
//import Content from "../components/Market/Content";
import { MonitorCog } from "lucide-react";

const Market = () => {
  return (
    <>
      <Header />
      <div className="main-content flex-grow relative bg-slate-50">
        {/*<div className="flex flex-row space-x-8"> */}
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <section className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-2/4 h-full bg-blue-300 font-bold text-2xl rounded-xl shadow mx-8 my-16 py-16">
            <MonitorCog className="w-24 h-24 m-8" />
            <span className="m-8">
              Esta página se encuentra en construcción, disculpe las molestias.
            </span>
          </div>
        </section>
      </div>
      {/*</div> */}
      <Footer />
    </>
  );
};

export default Market;
