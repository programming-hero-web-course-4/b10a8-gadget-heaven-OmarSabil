import { OctagonX } from "lucide-react";

const Cart = (cart) => {
    const { image, product_title, description, price } = cart.cart;

    return (
        <div className="flex justify-between items-center h-[120px] p-3 border rounded-xl bg-white shadow-lg">
            <img className="w-[150px] h-full object-cover rounded-lg" src={image} />
            <div className="w-[800px]">
                <h5 className="font-bold text-lg">{product_title}</h5>
                <p className="text-sm text-gray-500 mb-1">{description}</p>
                <h6 className="font-semibold text-sm">Price: {price}</h6>
            </div>
            <button className="btn rounded-full p-3 bg-white border-none">
            <OctagonX className="text-red-600" />
            </button>
        </div>
    );
};

export default Cart;