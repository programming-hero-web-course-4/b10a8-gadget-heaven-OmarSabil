import { useLoaderData } from 'react-router-dom';
import HomeBanner from './HomeBanner'
import Gadget from './Gadget';

const HomeContent = () => {

    const gadgets = useLoaderData();

    console.log(gadgets)
    return (
        <div className='px-14'>
            <HomeBanner></HomeBanner>
            <h3 className='text-3xl font-bold w-fit mx-auto mb-10'>Explore Cutting-Edge Gadgets</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default HomeContent;