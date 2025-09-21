import { useState, useMemo } from 'react'
import './App.css'
import ProductList from './components/ProductList.jsx'
import CategorySearch from './components/CategorySearch.jsx'

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Nvidia A100',
      price: 19999.99,
      description: 'The most powerful GPU for AI and HPC workloads.',
      category: 'gpu',
      image: '/public/assets/gpu.jpg'
    },
    {
      id: 2,
      name: 'Rosewill 4U Server Chassis',
      price: 389.98,
      description: 'A sturdy and spacious server chassis for your computing needs.',
      category: 'chassis',
      image: '/public/assets/chassis.jpg'
    },
    {
      id: 3,
      name: 'ASRock Rack Server Motherboard BERGAMOD8-2L2T',
      price: 759.00,
      description: 'A reliable motherboard designed for server applications.',
      category: 'motherboard',
      image: '/public/assets/mobo.png'
    },
    {
      id: 4,
      name: 'AMD EPYC 9005 Series Processor',
      price: 699.99,
      description: 'A high-performance processor for data centers and enterprise applications.',
      category: 'processor',
      image: '/public/assets/cpu.png'
    },
  ])

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories from products
  // useMemo to avoid recalculating on every render
  const categories = useMemo(() => {
    return [...new Set(products.map(product => product.category))]
  }, [products]);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory)
  }, [products, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }



  return (
    <>
      <div className='min-h-screen bg-zinc-800 py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-8 text-4xl font-bold text-center text-stone-300'>
            E-Commerce Store
          </h1>
          <CategorySearch
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </>
  )
}

export default App
