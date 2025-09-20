function ProductItem({ product }) {

    return (
        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {product.name}
            </h3>
            <p className='text-gray-600 mb-4'>
                {product.description}
            </p>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-bold text-green-600'>
                    ${product.price}
                </span>
            </div>
        </div>
    )
}

export default ProductItem