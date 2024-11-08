import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../../utilities/addToDataBase";
import Cart from "./Cart";
import { SlidersVertical, SquareCheckBig } from "lucide-react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const CartList = () => {
    const allProducts = useLoaderData()

    const [isAscending, setIsAscending] = useState(false)
    const [sortedCartList, setSortedCartList] = useState()
    const [cartList, setCartList] = useState([])
    const [previousPrice, setPreciousPrice] = useState(0)

    useEffect(() => {
        const storedCartList = getStoredCart()
        const storedCartListInt = storedCartList.map(id => parseInt(id));

        const cartProductList = allProducts.filter(product => storedCartList.includes(product.product_id))
        setCartList(cartProductList);

        const totalCost = cartProductList.reduce((previousPrice, cart) => previousPrice + Number(cart.price), 0);
        setPreciousPrice(totalCost)
        console.log()
    }, [])

    const handleDescendingPrice = () => {
        const sort = cartList.sort((a, b) => b.price - a.price)
        console.log(sort)
    }

    const handleOrder = () => {
        if (isAscending) {
            const sort = cartList.sort((a, b) => a.price - b.price)
            setSortedCartList(sort)
            setIsAscending(false)
        }
        else {
            const sort = cartList.sort((a, b) => b.price - a.price)
            setSortedCartList(sort)
            setIsAscending(true)
        }
    }
    const handlePurchase = () => {
        const cartList = getStoredCart()
        if (cartList.length > 0) {
            document.getElementById('my_modal_5').showModal()
        }
    }
    const clearPurchase = () => {
        // handlePurchase()
        localStorage.removeItem('cart-list') 
        setCartList([])
        setPreciousPrice([0])
        toast('Order Placed Successfully!', {
            icon: '👏',
          });
          
    }

    return (
        <div className="">
            <Toaster/>
            {/* section top */}
            <div className="px-10 flex justify-between items-center">
                <h3 className="text-xl font-bold">Cart List</h3>
                <div className="flex items-center gap-20">
                    <h3 className="text-xl font-bold">Total Cost: {previousPrice}</h3>
                    {/* buttons */}
                    <div className="flex items-center my-5 gap-2">
                        <button
                            onClick={handleOrder}
                            className="btn border border-purple-500 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white">Sort with Price <SlidersVertical /></button>
                        <button
                        onClick={handlePurchase}
                            className="btn bg-gradient-to-b from-purple-600 to-pink-700 text-white rounded-full hover:border hover:border-purple-500 hover:text-purple-600 hover:bg-none hover:bg-purple-200">Purchase</button>

                        {/* modal onclick <Purchase> */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box text-center">
                                {/* <SquareCheckBig className="text-green-500 mx-auto" size={100} /> */}
                                <SquareCheckBig className="text-emerald-500 mx-auto" size={150} strokeWidth={3} />
                                <h3 className="font-bold text-emerald-600">Order Confirmed</h3>
                                <h2 className="font-bold text-3xl text-gray-700 mt-5">!! Thank You !!</h2>
                                <p className="py-2 text-sm text-gray-500">..You are precious for us. Your orders will keep us togather. Therefore, everytime you are in need, we will be there for you..</p>
                                <div className="modal-action flex justify-center">
                                    <form method="dialog" className="w-full">
                                        <button className="btn w-full border-emerald-400 hover:bg-emerald-600 hover:text-white text-emerald-600 bg-emerald-100 font-bold text-2xl"
                                        onClick={clearPurchase}>Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

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