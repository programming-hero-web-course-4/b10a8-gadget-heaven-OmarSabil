
const StatsBanner = () => {
    return (
        <div>
            <div className="bg-purple-600 px-16 py-10 text-white text-center mt-20">
                <h4 className="w-11/12 font-bold text-2xl md:text-3xl mx-auto">Statistics</h4>
                <p className="w-2/3 py-5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From small devices to the coolest accessories, we have it all.</p>
            </div>
            <h5 className="font-bold text-xl ml-32 mt-5">Statistics</h5>
            <h1 className="font-bold text-6xl text-center text-red-700 bg-red-50 my-20 shadow-2xl w-fit mx-auto p-5 rounded-xl border-2 border-red-300">No Data To Show Statistics</h1>
        </div>
    );
};

export default StatsBanner;