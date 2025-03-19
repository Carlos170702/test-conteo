export default function Loading() {
    return (
        <div className="p-6">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex flex-wrap gap-4">
                        <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {[...Array(5)].map((_, index) => (
                                    <th key={index} scope="col" className="px-6 py-3">
                                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[...Array(3)].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
