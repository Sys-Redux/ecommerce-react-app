function ProductItem({ product }) {

    const getCategoryStyle = (category) => {
        switch(category) {
            case 'gpu':
                return {
                    card: 'bg-gradient-to-br from-green-900 to-green-800 border-green-400',
                    title: 'text-green-300',
                    price: 'text-green-400',
                };
            case 'chassis':
                return {
                    card: 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-400',
                    title: 'text-gray-300',
                    price: 'text-gray-400',
                };
            case 'motherboard':
                return {
                    card: 'bg-gradient-to-br from-blue-900 to-blue-800 border-blue-400',
                    title: 'text-blue-300',
                    price: 'text-blue-400',
                };
            case 'processor':
                return {
                    card: 'bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-400',
                    title: 'text-zinc-300',
                    price: 'text-zinc-400',
                };
        }
    };

    const styles = getCategoryStyle(product.category);

    return (
        <div className={`${styles.card} border-2 rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105`}>
            <div className='aspect-square w-full overflow-hidden bg-white'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-contain hover:scale-105 transition-transform duration-300'
                />
            </div>
            <div className='p-4 sm:p-6'>
                <h3 className={`text-lg sm:text-xl font-semibold ${styles.title} mb-2`}>
                    {product.name}
                </h3>
                <p className='text-gray-300 mb-4 text-sm sm:text-base'>
                    {product.description}
                </p>
                <div className='flex justify-between items-center'>
                    <span className={`text-xl sm:text-2xl font-bold ${styles.price}`}>
                        ${product.price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem