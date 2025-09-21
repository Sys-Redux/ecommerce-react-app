function CategorySearch({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div className='mb-8'>
            <h2 className='text-xl font-semibold text-stone-300 mb-4'>Search by Category</h2>
            <div className='flex flex-wrap gap-3'>
                <button
                    onClick={() => onCategoryChange('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === 'all'
                            ? 'bg-stone-500 text-white shadow-lg'
                            : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                >
                    All Products
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                            selectedCategory === category
                                ? 'bg-stone-500 text-white shadow-lg'
                                : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategorySearch