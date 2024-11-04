import bannerImg from '../Home/banner.jpg'

const HomeBanner = () => {
    return (
        <div className="">
            <div className="bg-purple-600 rounded-2xl p-16 h-[700px] text-white">
                <div className='mt-20'>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mx-auto">Upgrade Your Tech, & Accessorize with Gadget Heaven Accessories</h1>
                    <p className="max-w-[800px] w-full py-8 mx-auto">Explore the latest gadgets that will take your experience to the next level. From small devices to the coolest accessories, we have it all.</p>
                    <button className="btn border-none text-purple-500 rounded-full">Shop Now</button>
                    <div className='w-[900px] p-5 bg-gray-100 bg-opacity-15 rounded-3xl border-2 border-white mx-auto mt-10'>
                        <img src={bannerImg} className='w-fit rounded-2xl mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;