import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList.jsx'

function App() {
  const [products] = useState([
    { id: 1, name: 'Nvidia A100', price: 19999.99, description: 'The most powerful GPU for AI and HPC workloads.' },
    {id: 2, name: 'Rosewill 4U Server Chassis', price: 389.98, description: 'A sturdy and spacious server chassis for your computing needs.'},
    {id: 3, name: 'ASRock Rack Server Motherboard BERGAMOD8-2L2T', price: 759.00, description: 'A reliable motherboard designed for server applications.'},
    {id: 4, name: 'AMD EPYC 9005 Series Processor', price: 699.99, description: 'A high-performance processor for data centers and enterprise applications.'},
  ])


  return (
    <>
      <div className='min-h-screen bg-zinc-800 py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-8 text-4xl font-bold text-center text-stone-300'>
            E-Commerce Store
          </h1>
          <ProductList products={products} />
        </div>
      </div>
    </>
  )
}

export default App
