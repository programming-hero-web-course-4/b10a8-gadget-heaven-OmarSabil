import { useLoaderData } from 'react-router-dom';
import HomeBanner from './HomeBanner'
import Gadget from './Gadget';
import { useState } from 'react';

const HomeContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [filteredProducts, setFilteredProducts] = useState()

    const gadgets = useLoaderData();

    const filterProducts = () => {

    }

    // console.log(gadgets)
    return (
        <div className='px-14'>
            <HomeBanner></HomeBanner>
            <h3 className='text-3xl font-bold w-fit mx-auto mb-10'>Explore Cutting-Edge Gadgets</h3>
            <div className='flex gap-5'>
                <div className='flex sticky md:static flex-col w-fit gap-2 p-2 border border-black rounded-2xl h-fit'>
                    <button className='btn btn-xs  md:btn-sm w-full border border-black rounded-full'>Smartphone</button>
                    <button className='btn btn-xs  md:btn-sm w-full border border-black rounded-full'>Laptop</button>
                    <button className='btn btn-xs  md:btn-sm w-full border border-black rounded-full'>Smart TV</button>
                    <button className='btn btn-xs  md:btn-sm w-full border border-black rounded-full'>Smart Watch</button>
                    <button className='btn btn-xs  md:btn-sm w-full border border-black rounded-full'>Accessories</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeContent;