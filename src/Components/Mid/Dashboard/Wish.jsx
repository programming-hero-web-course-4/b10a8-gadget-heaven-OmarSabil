import { X } from "lucide-react";

const Wish = (wish) => {
    const { image, product_title, description } = wish.wish;

    return (
        <div className="flex justify-between items-start h-[100px] p-2 border rounded-xl bg-white shadow-lg">
            <div className="flex justify-between items-center w-11/12 h-full">
            <img className="w-[120px] h-full object-cover rounded-lg" src={image} />
            <div className="w-[800px]">
                <h5 className="font-bold text-lg">{product_title}</h5>
                <p className="text-sm text-gray-500 mb-1">{description}</p>
            </div>
            </div>
            <button className="btn btn-sm rounded-full p-1 aspect-square bg-red-100 border border-red-200 hover:bg-red-600 group">
            <X className="text-red-600 group-hover:text-white" size={18}/>
            </button>
        </div>
    );
};

export default Wish;