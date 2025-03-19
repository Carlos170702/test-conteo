import React from 'react'

const Filters = () => {
    return (
        <div className="mb-4 p-4 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-sm font-medium text-gray-700">Filtrar por:</h3>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center gap-1 transition-colors">
                        Código <span className="text-gray-500">↑↓</span>
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center gap-1 transition-colors">
                        Nombre <span className="text-gray-500">↑↓</span>
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center gap-1 transition-colors">
                        Cantidad <span className="text-gray-500">↑↓</span>
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center gap-1 transition-colors">
                        Fecha de Creación <span className="text-gray-500">↑↓</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
