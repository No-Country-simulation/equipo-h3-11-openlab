import { useState } from "react"
import { Heart, Share2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from "@tanstack/react-table"
import dataExample from "../../data/MOCK_DATA.json"


const DataTable = () => {
    const { t } = useTranslation(["translation"]);
    const [data, setData] = useState(dataExample)

    const columns = [
        {
            accessorKey: "company",
        },
        {
            accessorKey: "employees",
        },
        {
            accessorKey: "value",
        },
        {
            accessorKey: "actions",
        },
        {
            accessorKey: "projects",
        },
        {
            accessorKey: "likes",
        },
        {
            accessorKey: "shares",
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
                            <td key={cell.id}>
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

        </div>
        </>
    )
}

export default DataTable