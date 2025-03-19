import TableProducts from '@/components/products/Table'

const ProductsPage = async () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Productos</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <TableProducts />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
