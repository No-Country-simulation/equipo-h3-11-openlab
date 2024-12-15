import ethIcon from '../../assets/ethereum.png'; // Ethereum
import icon from "../../assets/team/icon.png";
import arrowUp from "../../assets/arrow-up.png";

const SaleOrder = () => {
  return (
    <div className="w-11/12 max-w-md h-auto bg-white rounded-xl shadow-md flex flex-col justify-end items-center mx-auto">
      <div className="w-full h-full flex flex-col justify-start items-start p-4 gap-4">

        {/* Título con "Buy" y "Sell" */}
        <div className="flex justify-start items-center gap-4">
          <div className="text-gray-500 text-lg font-medium hover:text-indigo-500 hover:underline cursor-pointer">
            Buy
          </div>
          <div className="text-gray-500 text-lg font-medium hover:text-indigo-500 hover:underline cursor-pointer">
            Sell
          </div>
        </div>

        {/* Resumen de orden */}
        <div className="w-full flex justify-between items-end border-b border-gray-200 pb-2">
          { }
        </div>

        {/* Detalles de la orden de compra/venta */}
        <div className="w-full flex flex-col gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={ethIcon} alt="ether-icon" />
                <select className="text-gray-800 bg-blue-50 font-medium text-base p-1">
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="text-gray-500 text-lg font-semibold">0.00</div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 w-9 h-9">
                <img src={icon} alt="icon" />
                <div className="text-gray-800 font-medium text-base pl-1">OPC</div>
              </div>
              <div className="text-gray-500 text-lg font-semibold">0.00</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-50 rounded-lg p-4 justify-center items-center flex-1">
              <div className="gap-6 flex">
                <div className='items-center justify-center pt-4'>
                  <div className="text-sm text-gray-500">Sell OPC at rate</div>
                  <div className="text-base font-medium text-gray-800">15,756003538</div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-xs text-gray-500 underline">Use market</div>
                  <div className="text-xs text-gray-800">ETH</div>
                  <div className="text-xs text-gray-500">= $3624,24</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 w-1/3 flex flex-col justify-center">
              <div className="text-sm text-gray-500">Expiry</div>
              <select className="text-base font-medium text-gray-600 bg-blue-50 rounded-md p-1">
                <option value="Never">Never</option>
                <option value="10 minutes">10 minutes</option>
                <option value="1 hour">1 hour</option>
                <option value="1 day">1 day</option>
                <option value="3 days">3 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="w-full bg-indigo-500 text-white text-center rounded-lg py-2 mt-4 cursor-pointer transition duration-300 hover:bg-indigo-600 hover:shadow-lg">
          Place limit order
        </div>
      </div>

      {/* Nuevo elemento: Limit Order Summary */}
      <div className="w-full max-w-md h-auto flex flex-col justify-start items-center gap-2 mt-4">
        <div className="p-2.5 flex justify-center items-center gap-2.5">
          <div className="text-blue-500 text-md font-normal">Limit Order Summary</div>
          <img src={arrowUp} alt="arrow-up" />
        </div>
        <div className="w-full px-8 py-4  flex justify-between items-center">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="text-blue-600 text-sm font-normal">Sell Order</div>
            <div className="text-blue-600 text-sm font-normal">To Buy</div>
            <div className="text-blue-600 text-sm font-normal">Buy OPC at Rate</div>
            <div className="text-blue-600 text-sm font-normal">Expiry</div>
            <div className="text-blue-600 text-sm font-normal">Platform Fee</div>
          </div>
          <div className="w-1/3 flex flex-col gap-4 text-right">
            <div className="text-gray-800 text-sm font-normal">- ETH</div>
            <div className="text-gray-800 text-sm font-normal">- OPC</div>
            <div className="text-gray-800 text-sm font-normal">15,751469285 SOL</div>
            <div className="text-gray-800 text-sm font-normal">7 days</div>
            <div className="text-gray-800 text-sm font-normal">0.05%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleOrder;
