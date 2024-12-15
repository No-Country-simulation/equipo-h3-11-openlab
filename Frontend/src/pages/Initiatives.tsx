import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import InitiativesHeader from "../components/Initiatives/Header";
import InitiativesContent from "../components/Initiatives/Content";

const Initiatives = () => {
  return (
    <>
      <Header />
      <div className="main-content flex-grow relative bg-slate-50">
        <div className="flex flex-row space-x-8 w-full">
          <div className="basis-1/6 min-w-[240px]">
            <Sidebar />
          </div>
          <div className="basis-5/6 flex flex-col">
            <InitiativesHeader />
            <div className="overflow-auto flex-grow">
              <InitiativesContent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Initiatives;
