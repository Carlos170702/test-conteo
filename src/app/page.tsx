
export default function Home() {
  return (
    <div className='p-6 flex flex-col items-center justify-center min-h-[80vh] text-center'>
      <h1 className='text-3xl font-bold text-blue-600 mb-4'>¡Bienvenido al Panel de Administración!</h1>
      <div className='max-w-2xl bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>¿Qué puedes hacer aquí?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='bg-blue-50 p-4 rounded-md border border-blue-100'>
            <h3 className='text-lg font-medium text-blue-700 mb-2'>Gestionar Productos</h3>
            <p className='text-gray-600'>Visualiza, edita y administra todos tus productos desde la sección &quot;Productos&quot;.</p>
          </div>
          <div className='bg-green-50 p-4 rounded-md border border-green-100'>
            <h3 className='text-lg font-medium text-green-700 mb-2'>Añadir Nuevos Productos</h3>
            <p className='text-gray-600'>Crea y configura nuevos productos utilizando la sección &quot;Add Product&quot;.</p>
          </div>
        </div>
        <div className='mt-8 text-gray-700'>
          <p>Selecciona una opción del menú lateral para comenzar a trabajar.</p>
        </div>
      </div>
    </div>
  );
}
