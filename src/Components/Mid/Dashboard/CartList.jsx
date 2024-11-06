import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../../utilities/addToDataBase";
import Cart from "./Cart";
import { SlidersVertical } from "lucide-react";

const CartList = () => {
    const allProducts = useLoaderData()
    const [cartList, setCartList] = useState([])

    useEffect(() => {
        const storedCartList = getStoredCart()
        const storedCartListInt = storedCartList.map(id => parseInt(id));

        const cartProductList = allProducts.filter(product => storedCartList.includes(product.product_id))

        setCartList(cartProductList);
    }, [])
    console.log(cartList)
    return (
        <div className="">
            {/* section top */}
            <div className="px-10 flex justify-between items-center">
                <h3 className="text-xl font-bold">Cart List</h3>
                <div className="flex items-center gap-20">
                    <h3 className="text-xl font-bold">Total Cost: {0}</h3>
                    <div className="flex items-center my-5 gap-2">
                        <button className="btn border border-purple-500 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white">Sort with Price <SlidersVertical/></button>
                        <button className="btn bg-gradient-to-b from-purple-600 to-pink-700 text-white rounded-full hover:border hover:border-purple-500 hover:text-purple-600 hover:bg-none hover:bg-purple-200">Purchase</button>
                    </div>
                </div>
            </div>
            {/* section content */}
            <div className="flex flex-col-reverse gap-5 py-5 px-20">
                {
                    cartList.map(cart => <Cart key={cart.product_id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default CartList;