import FormAddProduct from "@/components/addProduct/FormAddProduct";
const AddProductPage = async () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Añadir Producto</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <FormAddProduct />
            </div>
        </div>
    )
}

export default AddProductPage
