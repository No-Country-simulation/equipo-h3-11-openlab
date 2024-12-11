import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { MonitorCog } from "lucide-react";

const Settings = () => {
  return (
    <>
      <Header />
      <div className="main-content flex-grow relative">
        <Sidebar />
        <section className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-2/4 h-full bg-blue-300 font-bold text-2xl rounded-xl shadow mx-8 my-16 py-16">
            <MonitorCog className="w-24 h-24 m-8" />
            <span className="m-8">
              Esta página se encuentra en construcción, disculpe las molestias.
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
