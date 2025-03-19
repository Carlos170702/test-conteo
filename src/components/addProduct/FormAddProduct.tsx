'use client'

import useAddProductForm from '@/hooks/useAddProductForm';

const FormAddProduct = () => {
    const { register, handleSubmit, formState: { errors }, saving, saved, onSubmit } = useAddProductForm();

    return (
        <div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">Código</label>
                        <input
                            type="number"
                            id="code"
                            className={`w-full px-3 py-2 border ${errors.code ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Ej: 1001"
                            disabled={saving}
                            {...register('code')}
                        />
                        {errors.code && <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Nombre del producto"
                            disabled={saving}
                            {...register('name')}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                        <textarea
                            id="description"
                            rows={3}
                            className={`w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Descripción detallada del producto"
                            disabled={saving}
                            {...register('description')}
                        ></textarea>
                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
                        <input
                            type="number"
                            id="quantity"
                            className={`w-full px-3 py-2 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="0"
                            min="0"
                            disabled={saving}
                            {...register('quantity')}
                        />
                        {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="creationDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Creación</label>
                        <input
                            type="date"
                            id="creationDate"
                            className={`w-full px-3 py-2 border ${errors.creationDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            disabled={saving}
                            {...register('creationDate')}
                        />
                        {errors.creationDate && <p className="mt-1 text-sm text-red-600">{errors.creationDate.message}</p>}
                    </div>
                </div>

                {saved && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">¡Éxito! </strong>
                        <span className="block sm:inline">El producto ha sido guardado correctamente.</span>
                    </div>
                )}

                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                        disabled={saving}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
                        disabled={saving}
                    >
                        {saving ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Guardando...
                            </>
                        ) : 'Guardar Producto'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormAddProduct
