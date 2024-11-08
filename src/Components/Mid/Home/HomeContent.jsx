import { useLoaderData } from 'react-router-dom';
import HomeBanner from './HomeBanner'
import Gadget from './Gadget';
import { useState } from 'react';

const HomeContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    // const [filteredProducts, setFilteredProducts] = useState()

    const gadgets = useLoaderData();

    const filteredProducts = selectedCategory === 'all' ? gadgets : gadgets.filter(product=> product.category === selectedCategory)
    console.log(filteredProducts)

    // console.log(gadgets)
    return (
        <div className='px-5 lg:px-14'>
            <HomeBanner></HomeBanner>
            <h3 className='text-3xl font-bold w-fit mx-auto mb-10'>Explore Cutting-Edge Gadgets</h3>
            <section className='flex gap-5'>
                <div>
                <div className='flex flex-col w-fit gap-3 p-4 border border-purple-400 bg-gray-100 rounded-2xl h-fit sticky top-0'>
                    <button onClick={() => setSelectedCategory('all')} className='btn btn-xs  md:btn-sm w-full border border-purple-500 text-purple-600 bg-purple-50 hover:text-white hover:bg-purple-600 hover:border-purple-600 rounded-full'>All</button>
                    <button onClick={() => setSelectedCategory('Smartphone')} className='btn btn-xs  md:btn-sm w-full border border-purple-500 text-purple-600 bg-purple-50 hover:text-white hover:bg-purple-600 hover:border-purple-600 rounded-full'>Smartphone</button>
                    <button onClick={() => setSelectedCategory('Laptop')} className='btn btn-xs  md:btn-sm w-full border border-purple-500 text-purple-600 bg-purple-50 hover:text-white hover:bg-purple-600 hover:border-purple-600 rounded-full'>Laptop</button>
                    <button onClick={() => setSelectedCategory('TV')} className='btn btn-xs  md:btn-sm w-full border border-purple-500 text-purple-600 bg-purple-50 hover:text-white hover:bg-purple-600 hover:border-purple-600 rounded-full'>Smart TV</button>
                    <button onClick={() => setSelectedCategory('Smart Watch')} className='btn btn-xs  md:btn-sm w-full border border-purple-500 text-purple-600 bg-purple-50 hover:text-white hover:bg-purple-600 hover:border-purple-600 rounded-full'>Smart Watch</button>
                    <button onClick={() => setSelectedCategory('Accessories')} className='btn btn-xs  md:btn-sm w-full border border-purple-500 text-purple-600 bg-purple-50 hover:text-white hover:bg-purple-600 hover:border-purple-600 rounded-full'>Accessories</button>
                </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                   {
                    filteredProducts.length>0 ? (filteredProducts.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)) :  <h1>No Products Available</h1>
                   }
                </div>
            </section>
        </div>
    );
};

export default HomeContent;