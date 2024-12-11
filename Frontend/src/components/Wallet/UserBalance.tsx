import userPic from '../../assets/user-pic.png';
import { useState } from 'react';
import copyIcon from '../../assets/copy.png';
import balance from '../../assets/balance.png';
import graphic from '../../assets/graphic.svg';

const UserBalance = () => {
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopy = () => {
    const token = '9x22Vd76DD34E7a9c680xb613D8a';
    navigator.clipboard.writeText(token).then(() => {
      setCopyMessage('¡Copiado!');
      setTimeout(() => setCopyMessage(''), 2000); // Mensaje desaparece después de 2 segundos
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-end items-center gap-8 p-4">
      {/* Caja de Total Value */}
      <div className="flex flex-col justify-between items-start p-6 bg-white rounded-lg shadow-lg w-full md:w-1/2 lg:w-[40%]">
        <div className="flex items-center gap-4 w-full">
          <img
            className="w-16 h-16 rounded-full"
            src={userPic}
            alt="User Avatar"
          />
          <div className="flex flex-col">
            <span className="text-3xl font-semibold text-gray-800">$1,671.78</span>
            <span className="text-gray-600">Total Value</span>
          </div>
        </div>
        <hr className="w-full border-t border-gray-300 my-4" />
        <div className="flex items-center gap-4 w-full">
          <button
            className="flex items-center justify-center bg-gray-50 border border-blue-100 rounded-lg p-2 hover:bg-blue-50"
            onClick={handleCopy}
          >
            <img src={copyIcon} alt="Copy Icon" className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 bg-gray-50 border border-blue-100 rounded-lg px-4 py-2">
            <div className="text-gray-500 font-medium overflow-hidden text-ellipsis">
              9x22Vd76DD34E7a9c680xb613D8a
            </div>
          </div>
        </div>
        {copyMessage && (
          <span className="text-green-500 text-sm mt-2">{copyMessage}</span>
        )}
      </div>

      {/* Caja de Estimated Balance */}
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-[40%]">
        {/* Columna Izquierda */}
        <div className="flex-1 pr-4">
          <div className="mb-4">
            <span className="block text-lg font-medium text-gray-800">Estimated balance</span>
            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-800">0,00000744</span>
                <span className="block text-sm text-gray-600 mt-1">= $0.50120936</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8"
                src={balance}
                alt="Currency Icon"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 text-base font-medium">MATIC</span>
                <span className="text-gray-500 text-sm">ETH</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-blue-600 text-base font-medium">+0.63%</span>
              <span className="text-gray-500 text-sm">$67,671.7</span>
            </div>
          </div>
        </div>
        {/* Columna Derecha */}
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-full max-w-xs object-contain"
            src={graphic}
            alt="Balance Graphic"
          />
        </div>
      </div>
    </div>
  );
};

export default UserBalance;
