/* import { useState } from "react"
import { Rewind, FastForward, StepBack, StepForward, Heart, Share2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { FilterFn, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table"
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils"
import classNames from "classnames"
import SearchBar from "../SearchBar"
import InitiativesFilters from "./Filters"
import { exampleData } from "../../data/exampleData.ts"
import fluctuation from "../../assets/price-fluctuation.png";

declare module '@tanstack/react-table' {
    //add fuzzy filter to the filterFns
    interface FilterFns {
      fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
      itemRank: RankingInfo
    }
  }

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    addMeta({itemRank})

    return itemRank.passed
}

const DataTable = () => {
    const { t } = useTranslation(["translation"]);
    const [data, setData] = useState(exampleData)
    const [searchFilter, setSearchFilter] = useState("")
    console.log(searchFilter);
    

    const columns = [
        {
            accessorKey: "name",
            header: () => <span>{t("initiativesOptions.name")}</span>
        },
        {
            accessorKey: "priceFluctation",
            header: () => <span>{t("initiativesOptions.priceFluctuation")}</span>,
            cell: () => {
                return (
                    <div>
                        <img src={fluctuation} />
                    </div>
                )
            }
        },
        {
            accessorKey: "collaborators",
            header: () => <span>{t("initiativesOptions.collaborators")}</span>,
            cell: (info: any) => <span className="bg-sky-200 rounded-3xl py-1 px-6">{info.getValue()}</span>
        },
        {
            accessorKey: "marketPrices",
            header: () => <span>{t("initiativesOptions.buySellPrice")}</span>,
            cell: (info: any) => <span className="text-green-600 font-semibold">{info.getValue()}</span>
        },
        {
            accessorKey: "tokens",
            header: () => <span>Tokens</span>
        },
        {
            accessorKey: "missions",
            header: () => <span>{t("initiativesOptions.missions")}</span>
        },
        {
            accessorKey: "likes",
            header: () => <span>{t("initiativesOptions.likes")}</span>
        },
        {
            accessorKey: "shares",
            header: () => <span>{t("initiativesOptions.shares")}</span>
        },
        {
            accessorKey: "actions",
            header: () => <span>{t("initiativesOptions.actions")}</span>,
            cell: () => {
                return (
                    <div className="flex flex-row no-wrap space-x-2">
                        <button className="bg-blue-500 rounded-xl text-white px-1 py-2 font-semibold">{t("initiativesOptions.buy")}</button>
                        <button className="bg-indigo-700 rounded-xl text-white px-1 py-2 font-semibold">{t("initiativesOptions.join")}</button>
                        <button><Heart /></button>
                        <button><Share2 /></button>
                    </div>
                )
            }
        }
    ]

    const getStateTable = () => {
        const totalRows = table.getFilteredRowModel().rows.length
        const pageSize = table.getState().pagination.pageSize
        const pageIndex = table.getState().pagination.pageIndex
        const rowsPerPage = table.getRowModel().rows.length

        const firstIndex = (pageSize * pageIndex) + 1
        const lastIndex = (pageSize * pageIndex) + rowsPerPage

        return {totalRows, firstIndex, lastIndex}
    }

    const table = useReactTable({
        data,
        columns,
        state: {
            searchFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: fuzzyFilter
    })

    return (
        <>
        <SearchBar
            onChange={(value: any) => setSearchFilter(String(value))} 
            value={searchFilter ?? ""}
        />
        <InitiativesFilters />
        <table className="table-auto w-full bg-white border-collapse">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} className="border border-transparent bg-blue-200">
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder ? null : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="border-b border-gray-300">
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="py-4 px-8">
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <button
                    className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300
                    disabled:bg-white disabled:text-gray-300"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}>
                    {<Rewind />}
                </button>
                <button
                    className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300
                    disabled:bg-white disabled:text-gray-300"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    {<StepBack />}
                </button>
                
                {table.getPageOptions().map((value, key) => (
                    <button key={key}
                    className={classNames({
                        "text-gray-600 bg-gray-200 font-bold py-0.5 px-2 border rounded border-gray-300": true,
                        "bg-gray-600 text-white": value === table.getState().pagination.pageIndex
                    })}
                    onClick={() => table.setPageIndex(value)}>
                        {value + 1}
                    </button>
                ))}
                
                <button
                    className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300
                    disabled:bg-white disabled:text-gray-300"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}>
                    {<StepForward />}
                </button>
                <button
                    className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300
                    disabled:bg-white disabled:text-gray-300"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}>
                    {<FastForward />}
                </button>
            </div>
            <div className="text-gray-600 font-semibold">
                {t("initiativesOptions.showing")}  {getStateTable().firstIndex}&nbsp;
                {t("initiativesOptions.to")}  {getStateTable().lastIndex}&nbsp;
                {t("initiativesOptions.ofTotal")} {getStateTable().totalRows}&nbsp;
                {t("initiativesOptions.rows")} 
            </div>
            <select
                className="text-gray-600 border border-gray-300 rounded outline-blue-500"
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}>
                <option value="10">10 {t("initiativesOptions.rows")}</option>
                <option value="25">25 {t("initiativesOptions.rows")}</option>
                <option value="50">50 {t("initiativesOptions.rows")}</option>
            </select>
        </div>
        </>
    )
}

export default DataTable */