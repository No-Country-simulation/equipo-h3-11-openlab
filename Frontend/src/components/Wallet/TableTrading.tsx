import React from 'react';
import { useTable, Column, TableInstance, Cell } from 'react-table';
import puntitos from '../../assets/puntitos.png'; // Icono de los tres puntitos
import btcIcon from '../../assets/bitcoin.png';  // Bitcoin
import ethIcon from '../../assets/ethereum.png'; // Ethereum
import tetherIcon from '../../assets/thetherus.png'; // TetherUS
import bnbIcon from '../../assets/bnb.png'; // BNB
import solanaIcon from '../../assets/puiconsBit/solana.png'; // Solama
import usdcIcon from '../../assets/usd-coin.png'; // USD Coin
import rippleIcon from '../../assets/ripple.png'; // Ripple

type CoinData = {
  name: string;
  price: string;
  change: string;
  value: string;
  amount: string;
  icon: string; // o el tipo adecuado si usas un objeto de imagen
  actions?: JSX.Element; // Para las acciones como botones
};

const TableTrading = () => {
  // Datos con valores en la columna Amount
  const data: CoinData[] = React.useMemo(
    () => [
      { name: 'Bitcoin', price: '$67,671.7', change: '+1.5%', value: '$12,345', amount: '5.46', icon: btcIcon },
      { name: 'Ethereum', price: '$4,000', change: '-0.8%', value: '$1,234', amount: '3.12', icon: ethIcon },
      { name: 'TetherUS', price: '$0.5', change: '+3.7%', value: '$3,234', amount: '4.08', icon: tetherIcon },
      { name: 'BNB', price: '$27,671.7', change: '-0.5%', value: '$0,592', amount: '0.22', icon: bnbIcon },
      { name: 'Solama', price: '$37,671.7', change: '+2.2%', value: '$2,501', amount: '1.89', icon: solanaIcon },
      { name: 'USD Coin', price: '$17,671.7', change: '-0.8%', value: '$1,543', amount: '14.11', icon: usdcIcon },
      { name: 'Ripple', price: '$0.5', change: '+10.6%', value: '$0,612', amount: '7.82', icon: rippleIcon },
    ],
    []
  );

  const columns: Column<CoinData>[] = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Price /24h Change', accessor: 'price' },
      { Header: 'Value', accessor: 'value' },
      { Header: 'Amount', accessor: 'amount' },
      { Header: '', accessor: 'actions' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }: TableInstance<CoinData> = useTable({
    columns,
    data,
  });

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-5/6 ml-auto pl-[1.25rem] pr-[1rem]">
      <table {...getTableProps()} className="w-full text-sm text-left font-semibold text-gray-800">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="py-4 px-14 text-center font-medium text-gray-900">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white">
                {row.cells.map((cell: Cell<CoinData>) => {
                  if (cell.column.id === 'actions') {
                    return (
                      <td {...cell.getCellProps()} className="py-4 px-6 text-center align-middle">
                        <div className="flex justify-center gap-2">
                          <button className="w-[63px] h-9 bg-[#3d7bff] rounded-[10px] shadow text-white font-medium hover:bg-blue-600 focus:outline-none">
                            Swap
                          </button>
                          <button className="w-[60px] h-9 bg-[#3a23ff] rounded-[10px] shadow text-white font-medium hover:bg-indigo-600 focus:outline-none">
                            Send
                          </button>
                          <button className="w-[30px] h-9 bg-white rounded-[10px] text-white flex justify-center items-center hover:bg-gray-400 focus:outline-none">
                            <img src={puntitos} alt="..." className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    );
                  }
                  if (cell.column.id === 'name') {
                    const coinIcon = row.original.icon; // Obtén el icono de la moneda
                    return (
                      <td {...cell.getCellProps()} className="py-4 px-6 text-left align-middle flex items-center gap-2">
                        <img src={coinIcon} alt={row.original.name} className="w-6 h-6" />
                        {cell.render('Cell')}
                      </td>
                    );
                  }

                  // Aquí puedes asegurar que el tipo de `cell.render('Cell')` sea un número o string para aplicar correctamente el estilo
                  return (
                    <td {...cell.getCellProps()} className="py-4 px-6 text-center align-middle">
                      {cell.column.id === 'price' ? (
                        <>
                          {cell.render('Cell')}
                          <span className="ml-2">
                            {parseFloat(row.original.change) >= 0 ? (
                              <div className="h-5 px-2 py-1 bg-[#34a853]/20 rounded-[5px] border border-[#34a853] justify-start items-center gap-2.5 inline-flex">
                                <div className="text-[#34a853] text-sm font-medium">
                                  {row.original.change}
                                </div>
                              </div>
                            ) : (
                              <div className="h-5 px-2 py-1 bg-[#eb4335]/20 rounded-[5px] border border-[#da0000] justify-start items-center gap-2.5 inline-flex">
                                <div className="text-[#da0000] text-sm font-medium">
                                  {row.original.change}
                                </div>
                              </div>
                            )}
                          </span>
                        </>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTrading;
