/* import { useState } from "react"
import { useTranslation } from "react-i18next"
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from "@tanstack/react-table"
//import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils"
import classNames from "classnames"
import { EllipsisVertical, Rewind, FastForward, StepBack, StepForward } from 'lucide-react'
import { exampleOrders } from "../../data/exampleOrders.ts"
import tokenImg from "../../assets/token-img.jpeg";


function DataTable() {
    const { t } = useTranslation(["translation"]);
    const [data, setData] = useState(exampleOrders)

    const columns = [
        {
            accessorKey: "tokenImg",
            header: () => <span></span>,
            cell: () => {
                return (
                    <div className="w-20 h-20">
                        <img src={tokenImg} className="rounded-full" />
                    </div>
                )
            }
        },
        {
            accessorKey: "name",
            header: () => <span>{t("initiativesOptions.name")}</span>
        },
        {
            accessorKey: "type",
            header: () => <span>{t("marketOptions.type")}</span>
        },
        {
            accessorKey: "side",
            header: () => <span>{t("marketOptions.side")}</span>
        },
        {
            accessorKey: "tokens",
            header: () => <span>Tokens</span>
        },
        {
            accessorKey: "price",
            header: () => <span>{t("marketOptions.price")}</span>
        },
        {
            accessorKey: "status",
            header: () => <span>{t("marketOptions.status")}</span>
        },
        {
            accessorKey: "actions",
            header: () => <span></span>,
            cell: (info: any) => {
                return (
                    <div>
                        <button><EllipsisVertical /></button>
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
        initialState: {
            pagination: {
                pageSize: 5
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <>
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
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map(row => (
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
                    ))
                ) : (
                    <tr>
                        <td className="h-24 text-center">
                            No results.
                        </td>
                    </tr>
                )}
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
                <option value="5">5 {t("initiativesOptions.rows")}</option>
                <option value="10">10 {t("initiativesOptions.rows")}</option>
                <option value="25">25 {t("initiativesOptions.rows")}</option>
            </select>
        </div>
        </>
    )
}

export default DataTable
 */