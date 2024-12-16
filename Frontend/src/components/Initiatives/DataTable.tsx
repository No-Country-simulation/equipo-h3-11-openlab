import { useState, useMemo } from "react";
import {
  Rewind,
  FastForward,
  StepBack,
  StepForward,
  Heart,
  Share2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  FilterFn,
} from "@tanstack/react-table";
import { rankItem, RankingInfo } from "@tanstack/match-sorter-utils";
import classNames from "classnames";
//import { exampleData } from "../../data/exampleData";
import { useExampleData } from "../../context/ExampleDataContext";
import fluctuation from "../../assets/price-fluctuation.png";
import OrderbookInteraction from "../OrderbookInteraction";

// Definición del tipo de datos
export interface DataRow {
  name: string;
  priceFluctation: string;
  collaborators: number;
  marketPrices: string;
  tokens: string;
  missions: string;
  likes: number;
  shares: number;
  actions?: string;
  init: string;
  token1: string;
  token2: string;
  orderbook: string;
}

interface DataTableProps {
  searchFilter: string;
  activeFilter: string;
}

// Extensión del módulo para incluir la función fuzzy
declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

// Filtro para búsquedas difusas
const fuzzyFilter: FilterFn<DataRow> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId) as string, value);
  addMeta({ itemRank });
  return itemRank.passed;
};

const DataTable: React.FC<DataTableProps> = ({
  searchFilter,
  activeFilter,
}) => {
  const { t } = useTranslation(["translation"]);
  const { data } = useExampleData(); // Usamos el contexto para obtener los datos

  // Estado para almacenar la fila seleccionada
  const [selectedRow, setSelectedRow] = useState<DataRow | null>(null);

  // Función para abrir el modal con la fila seleccionada
  const openModal = (row: DataRow) => setSelectedRow(row);

  // Función para cerrar el modal
  const closeModal = () => setSelectedRow(null);

  // Filtrado de datos según el filtro
  const filteredData = useMemo(
    () => applyFilters(data, searchFilter, activeFilter),
    [searchFilter, activeFilter]
  );

  // Definición de columnas con tipado estricto
  const columns: ColumnDef<DataRow>[] = [
    {
      accessorKey: "name",
      header: () => <span>{t("initiativesOptions.name")}</span>,
    },
    {
      accessorKey: "priceFluctation",
      header: () => <span>{t("initiativesOptions.priceFluctuation")}</span>,
      cell: () => (
        <div>
          <img src={fluctuation} alt="Price Fluctuation" />
        </div>
      ),
    },
    {
      accessorKey: "collaborators",
      header: () => <span>{t("initiativesOptions.collaborators")}</span>,
      cell: ({ getValue }) => {
        const value = getValue() as number;
        return (
          <span className="bg-sky-200 rounded-3xl py-1 px-6">{value}</span>
        );
      },
    },
    {
      accessorKey: "marketPrices",
      header: () => <span>{t("initiativesOptions.buySellPrice")}</span>,
      cell: ({ getValue }) => {
        const value = getValue() as string; // Cambié el tipo a string
        return <span className="text-green-600 font-semibold">{value}</span>;
      },
    },
    {
      accessorKey: "tokens",
      header: () => <span>Tokens</span>,
    },
    {
      accessorKey: "missions",
      header: () => <span>{t("initiativesOptions.missions")}</span>,
    },
    {
      accessorKey: "likes",
      header: () => <span>{t("initiativesOptions.likes")}</span>,
    },
    {
      accessorKey: "shares",
      header: () => <span>{t("initiativesOptions.shares")}</span>,
    },
    {
      accessorKey: "actions",
      header: () => <span>{t("initiativesOptions.actions")}</span>,
      cell: ({ row }) => (
        <div className="flex flex-row space-x-2">
          <button
            onClick={() => openModal(row.original)} // Pasa los datos de la fila
            className="bg-blue-500 rounded-xl text-white px-1 py-2 font-semibold"
          >
            {t("initiativesOptions.buy")}
          </button>
          <button className="bg-indigo-700 rounded-xl text-white px-1 py-2 font-semibold">
            {t("initiativesOptions.join")}
          </button>
          <button>
            <Heart />
          </button>
          <button>
            <Share2 />
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      globalFilter: searchFilter, // Estado del filtro global
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter, // Filtro global
    filterFns: {
      fuzzy: fuzzyFilter, // Declarar la función de filtro aquí
    },
  });

  const stateTable = {
    totalRows: table.getFilteredRowModel().rows.length,
    firstIndex:
      table.getState().pagination.pageIndex *
        table.getState().pagination.pageSize +
      1,
    lastIndex:
      table.getState().pagination.pageIndex *
        table.getState().pagination.pageSize +
      table.getRowModel().rows.length,
  };

  return (
    <>
      <div className="overflow-auto max-h-[calc(100vh-200px)] rounded-xl mb-8">
        <table className="table-auto w-full bg-white border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="bg-blue-200"
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-300">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-4 px-8">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {selectedRow && (
            <OrderbookInteraction
              isOpen={!!selectedRow} // Verifica si hay datos seleccionados
              onClose={closeModal}
              rowData={selectedRow} // Pasa la fila seleccionada como prop
            />
          )}
        </table>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300 disabled:bg-white disabled:text-gray-300"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <Rewind />
            </button>
            <button
              className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300 disabled:bg-white disabled:text-gray-300"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <StepBack />
            </button>
            {table.getPageOptions().map((value) => (
              <button
                key={value}
                className={classNames(
                  "text-gray-600 bg-gray-200 font-bold py-0.5 px-2 border rounded border-gray-300",
                  {
                    "bg-gray-600 text-white":
                      value === table.getState().pagination.pageIndex,
                  }
                )}
                onClick={() => table.setPageIndex(value)}
              >
                {value + 1}
              </button>
            ))}
            <button
              className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300 disabled:bg-white disabled:text-gray-300"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <StepForward />
            </button>
            <button
              className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300 disabled:bg-white disabled:text-gray-300"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <FastForward />
            </button>
          </div>
          <div className="text-gray-600 font-semibold">
            {t("initiativesOptions.showing")} {stateTable.firstIndex}{" "}
            {t("initiativesOptions.to")} {stateTable.lastIndex}{" "}
            {t("initiativesOptions.ofTotal")} {stateTable.totalRows}{" "}
            {t("initiativesOptions.rows")}
          </div>
          <select
            className="text-gray-600 border border-gray-300 rounded outline-blue-500"
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            <option value="10">10 {t("initiativesOptions.rows")}</option>
            <option value="25">25 {t("initiativesOptions.rows")}</option>
            <option value="50">50 {t("initiativesOptions.rows")}</option>
          </select>
        </div>
        {/* Modal de interacción */}
      </div>
    </>
  );
};

// Función para aplicar filtros adicionales (como el filtro por categoría)
const applyFilters = (data: DataRow[], search: string, filter: string) => {
  const currentDate = new Date();

  return data.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // Filtro por iniciativas activas
    const isActive = filter === "active" ? item.collaborators > 30 : true;

    // Filtro por iniciativas nuevas (últimos 30 días)
    const isNew =
      filter === "new"
        ? new Date(item.init) >=
          new Date(currentDate.setDate(currentDate.getDate() - 5))
        : true;

    // Filtro por iniciativas populares (mayoría de likes)
    const isPopular = filter === "popular" ? item.likes >= 1000 : true;

    const matchesFilter = isActive && isNew && isPopular;

    return matchesSearch && matchesFilter;
  });
};

export default DataTable;
