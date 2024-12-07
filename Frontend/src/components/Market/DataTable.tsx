import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FilterFn, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table"
//import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils"
//import classNames from "classnames"
import { EllipsisVertical } from 'lucide-react'
import orderExample from "../../data/ExampleOrders.json"
import tokenImg from "../../assets/token-img.jpeg";


const DataTable = () => {
    const { t } = useTranslation(["translation"]);
    const [data, setData] = useState(orderExample)

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

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
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
    )
}

export default DataTable