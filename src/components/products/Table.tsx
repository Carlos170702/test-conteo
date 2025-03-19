'use client';
import { Product } from '@/models';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { CiSearch } from 'react-icons/ci';

const TableProducts = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{
        key: keyof Product | null;
        direction: 'asc' | 'desc' | null;
    }>({ key: null, direction: null });

    useEffect(() => {
        const getProducts = async () => {
            const cookieValue = await getCookie('products');
            const productsFromCookie = JSON.parse(cookieValue?.toString() || '[]') as Product[];
            setFilteredProducts(productsFromCookie);
        };
        getProducts();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            const cookieValue = await getCookie('products');
            const productsFromCookie = JSON.parse(cookieValue?.toString() || '[]') as Product[];

            let filtered = [...productsFromCookie];

            if (searchTerm) {
                filtered = filtered.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            if (sortConfig.key && sortConfig.direction) {
                filtered.sort((a, b) => {
                    const key = sortConfig.key as keyof Product;
                    if (key === 'creationDate') {
                        return sortConfig.direction === 'asc'
                            ? new Date(a[key]).getTime() - new Date(b[key]).getTime()
                            : new Date(b[key]).getTime() - new Date(a[key]).getTime();
                    }

                    return sortConfig.direction === 'asc'
                        ? String(a[key]).localeCompare(String(b[key]))
                        : String(b[key]).localeCompare(String(a[key]));
                });
            }

            setFilteredProducts(filtered);
        };
        getProducts();
    }, [searchTerm, sortConfig]);

    const handleSort = (key: keyof Product) => {
        let direction: 'asc' | 'desc' = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });
    };

    const handleDeleteProduct = async (code: string) => {
        const cookieValue = await getCookie('products');
        const productsFromCookie = JSON.parse(cookieValue?.toString() || '[]') as Product[];
        const updatedProducts = productsFromCookie.filter(product => product.code !== code);
        await setCookie('products', JSON.stringify(updatedProducts));
        setFilteredProducts(updatedProducts);
    };

    return (
        <>
            <div className="mb-4 p-4 border-b border-gray-200">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 relative">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiSearch size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar por nombre, código o descripción..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-3 py-2.5 w-full text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-sm font-medium text-gray-700">Ordenar por:</h3>
                        <div className="flex flex-wrap gap-2">
                            {['code', 'name', 'quantity', 'creationDate'].map((key) => (
                                <button
                                    key={key}
                                    onClick={() => handleSort(key as keyof Product)}
                                    className={`px-3 py-1 text-xs ${sortConfig.key === key ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                                        } hover:bg-gray-200 rounded-md flex items-center gap-1 transition-colors`}
                                >
                                    {key === 'creationDate' ? 'Fecha de Creación' : key.charAt(0).toUpperCase() + key.slice(1)}
                                    <span className="text-gray-500">
                                        {sortConfig.key === key && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Creación</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{product.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(product.creationDate).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button 
                                        onClick={() => handleDeleteProduct(product.code)}
                                        className="text-red-600 hover:text-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md p-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                                No hay productos disponibles
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default TableProducts    
