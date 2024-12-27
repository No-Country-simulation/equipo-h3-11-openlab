import buscar from "../../assets/buscar.png";


const PaymenteMethods = () => {

  return (
    <div className="mt-10 content-center flex justify-center items-center   ">
      <div className="shadow-2xl w-[822px] h-[330px] ">
        <div className="flex items-center  justify-between px-5">
            <div>
                <h1 className="text-[24px] font-semibold">Payment Methods</h1>
            </div>
            <div>
                <button className="text-white bg-blue-500 rounded-lg px-8 py-1 mt-3">Add a payment method</button>
            </div>
        </div>
        <div className="content-center flex justify-center items-center mt-20">
            <img src={buscar} alt="buscar" /> <br/>
            
        </div>
        <div className="flex justify-center items-center">
            <p>You have not added any payment methods</p>
        </div>
      </div>
    </div>
  );
};
export default PaymenteMethods;