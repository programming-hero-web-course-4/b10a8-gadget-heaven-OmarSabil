
const Gadget = ({ gadget }) => {

    const { product_title, image, price } = gadget;
    return (
        <div className="p-5 rounded-2xl border shadow-lg mb-14">
            <img className="w-full h-[220px] object-cover rounded-xl" src={image} />
            <div className="pt-2">
                <h4 className="font-bold text-xl py-2">{product_title}</h4>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm">Price: {price}</p>
                    <button className="btn btn-sm rounded-lg bg-purple-500 text-white hover:text-purple-600 hover:border-purple-600 hover:border-2 hover:bg-white">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;