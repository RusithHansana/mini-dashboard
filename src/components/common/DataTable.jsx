const DataTable = ({ columns, data, onRowClick }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map(column => (
                            <th
                                key={column.key}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                        <tr
                            key={row.id}
                            onClick={() => onRowClick?.(row)}
                            className={onRowClick ? "hover:bg-gray-50 cursor-pointer" : ""}
                        >
                            {columns.map(column => (
                                <td
                                    key={column.key}
                                    className="px-6 py-4 whitespace-nowrap"
                                >
                                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable