import bannerImg from '../../../assets/banner.jpg'

const HomeBanner = () => {
    return (
        <div className='pt-5'>
            <div className="bg-purple-600 rounded-2xl p-16 pb-[150px] mb-[200px] md:pb-60 md:mb-64 lg:pb-80 lg:mb-[400px] text-white w-fit mx-10 text-center">
                <div className='mt-10 lg:mt-20 relative'>
                    <h1 className="w-11/12 font-bold text-3xl md:text-4xl lg:text-5xl mx-auto">Upgrade Your Tech, & Accessorize with Gadget Heaven Accessories</h1>
                    <p className="w-2/3 py-8 mx-auto">Explore the latest gadgets that will take your experience to the next level. From small devices to the coolest accessories, we have it all.</p>
                    <button className="btn border-none text-purple-500 rounded-full">Shop Now</button>
                    <div className='flex justify-center'>
                        <div className='md:w-9/12 p-5 bg-gray-100 bg-opacity-15 rounded-3xl border-2 border-white mx-auto mt-10 absolute'>
                            <img src={bannerImg} className=' rounded-2xl mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;