export default function Loading() {
    return (
        <div className="p-6">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-24 w-full bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
