import React, { useState } from 'react';
import Market from '../../assets/unsplash.png';
import search from '../../assets/search.png';
import cancel from '../../assets/cancel.png';
import { useTranslation } from "react-i18next"

type PurchaseData = {
  image: string;
  name: string;
  type: string;
  action: string;
  quantity: string;
  price: string;
  actions?: JSX.Element;
  cancelAction?: JSX.Element;
};

const Purchase = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const { t } = useTranslation(["translation"])

  const data: PurchaseData[] = React.useMemo(
    () => [
      {
        image: Market, 
        name: 'Fractal',
        type: 'Limit',
        action: 'Buy',
        quantity: '4',
        price: '$2200',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Bitcoin',
        type: 'Market',
        action: 'Sell',
        quantity: '2',
        price: '$50000',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Ethereum',
        type: 'Market',
        action: 'Buy',
        quantity: '6',
        price: '$2000',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Litecoin',
        type: 'Limit',
        action: 'Sell',
        quantity: '10',
        price: '$1200',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Ripple',
        type: 'Market',
        action: 'Buy',
        quantity: '8',
        price: '$7000',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Solana',
        type: 'Limit',
        action: 'Buy',
        quantity: '3',
        price: '$1500',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Cardano',
        type: 'Market',
        action: 'Sell',
        quantity: '5',
        price: '$3500',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Polkadot',
        type: 'Limit',
        action: 'Buy',
        quantity: '12',
        price: '$4100',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
      {
        image: Market, 
        name: 'Chainlink',
        type: 'Market',
        action: 'Sell',
        quantity: '9',
        price: '$3000',
        actions: (
          <div className="w-14 h-9 relative">
            <button className="w-full h-full bg-[#3d7bff] rounded-[10px] shadow-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-[#1d63d8] hover:scale-105 hover:shadow-xl">
              <span className="text-[#fefefe] text-sm font-medium">Edit</span>
            </button>
          </div>
        ),
        cancelAction: (
          <div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#fefefe] rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none">
              <img src={cancel} alt="Cancel" className="w-5 h-5" />
              <span className="text-[#eb4335] text-sm font-medium ">Cancel</span>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: '', accessor: 'image' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Side', accessor: 'action' },
      { Header: 'Tokens', accessor: 'quantity' },
      { Header: 'Price', accessor: 'price' },
      { Header: '', accessor: 'actions' },
      { Header: '', accessor: 'cancelAction' },
    ],
    []
  );

  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter(row => 
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg p-4">
      {/* Barra de búsqueda */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[616px] h-12 px-4 py-3 rounded-[10px] border border-[#d2d2d2] flex items-center">
          <img src={search} alt="Search" />
          <input
            type="text"
            placeholder={t("search")}
            className="w-full bg-transparent text-[#8b8b8b] text-base font-normal outline-none pl-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-4 mb-4">
        <button className="w-48 h-9 bg-[#ecf2ff] text-[#1a346b] font-medium border border-[#1a346b] rounded-[10px] hover:bg-[#dce6ff] hover:text-[#0f2452] transition-colors duration-200">
          {t("marketOptions.openOrders")}
        </button>
        <button className="w-48 h-9 bg-[#fefefe] text-[#6e6e6e] font-medium border border-[#d2d2d2] rounded-[10px] hover:bg-[#f3f3f3] hover:text-[#4a4a4a] transition-colors duration-200">
          {t("marketOptions.orderHistory")}
        </button>
      </div>

      {/* Encabezado de la tabla */}
      <div className="w-full bg-[#ecf2ff] rounded-tl-[10px] rounded-tr-[10px] px-[4.8rem] py-4">
        <div className="flex flex-row gap-[2rem]">
          {columns.map((column, index) => (
            <div key={index} className="font-medium text-[#1a1a1a] text-sm">
              {column.Header}
            </div>
          ))}
        </div>
      </div>

      {/* Filas de la tabla */}
      <div className="w-[616px] border-b border-[#d2d2d2] flex flex-col">
        {filteredData.map((row, index) => (
          <div key={index} className="flex justify-between items-center py-2 px-6">
            <img className="w-14 h-14 rounded-[28px]" src={row.image} alt={row.name} />
            <div className="w-[50px] text-center text-[#1a1a1a] text-sm">{row.name}</div>
            <div className="w-[50px] text-center text-[#1a1a1a] text-sm">{row.type}</div>
            <div className="w-[50px] text-center">
              {row.action === 'Buy' ? (
                <div className="w-[41px] h-5 px-2 py-1 bg-[#34a853]/20 rounded-[5px] border border-[#34a853] justify-start items-center gap-2.5 inline-flex">
                  <div className="text-[#34a853] text-sm font-medium ">Buy</div>
                </div>
              ) : row.action === 'Sell' ? (
                <div className="w-[39px] h-5 px-2 py-1 bg-[#eb4335]/20 rounded-[5px] border border-[#eb4335] justify-start items-center gap-2.5 inline-flex">
                  <div className="text-[#eb4335] text-sm font-medium ">Sell</div>
                </div>
              ) : null}
            </div>
            <div className="w-[50px] text-center text-[#1a1a1a] text-sm">{row.quantity}</div>
            <div className="text-center text-[#1a1a1a] text-sm">{row.price}</div>
            <div className="w-[52px]">{row.actions}</div>
            <div>{row.cancelAction}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
