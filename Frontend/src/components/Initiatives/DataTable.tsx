import { useState } from "react"
import { Heart, Share2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from "@tanstack/react-table"
import classNames from "classnames"
import dataExample from "../../data/ExampleData.json"


const DataTable = () => {
    const { t } = useTranslation(["translation"]);
    const [data, setData] = useState(dataExample)

    const columns = [
        {
            accessorKey: "name",
            header: () => <span>{t("initiativesOptions.name")}</span>
        },
        {
            accessorKey: "priceFluctation",
            header: () => <span>{t("initiativesOptions.priceFluctuation")}</span>
        },
        {
            accessorKey: "collaborators",
            header: () => <span>{t("initiativesOptions.collaborators")}</span>,
            cell: info => <span className="bg-sky-200 rounded-3xl py-1 px-6">{info.getValue()}</span>
        },
        {
            accessorKey: "marketPrices",
            header: () => <span>{t("initiativesOptions.buySellPrice")}</span>,
            cell: info => <span className="text-green-600 font-semibold">{info.getValue()}</span>
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
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <>
        <table className="table-fixed w-full bg-white border-collapse">
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
                    {"<<"}
                </button>
                <button
                    className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300
                    disabled:bg-white disabled:text-gray-300"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    {"<"}
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
                    {">"}
                </button>
                <button
                    className="text-gray-600 bg-gray-200 py-0.5 px-1 border rounded border-gray-300
                    disabled:bg-white disabled:text-gray-300"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}>
                    {">>"}
                </button>
            </div>
            <div className="text-gray-600 font-semibold">
                Mostrando de {Number(table.getRowModel().rows[0].id) + 1}&nbsp;
                a {Number(table.getRowModel().rows[table.getRowModel().rows.length - 1].id) + 1}&nbsp;
                del total de {dataExample.length} registros 
            </div>
            <select
                className="text-gray-600 border border-gray-300 rounded outline-blue-500"
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}>
                <option value="10">10 filas</option>
                <option value="25">25 filas</option>
                <option value="50">50 filas</option>
            </select>
        </div>
        </>
    )
}

export default DataTable