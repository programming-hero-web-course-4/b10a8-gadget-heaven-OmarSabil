import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../../utilities/addToDataBase";
import Wish from "./Wish";


const WishList = () => {
    const allProducts = useLoaderData()
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        const storedWishList = getStoredWishList()
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const wishProductList = allProducts.filter(product => storedWishList.includes(product.product_id))

        setWishList(wishProductList);
    }, [])
    return (
        <div>
            <h3 className="text-xl font-bold px-10 py-[30px] flex justify-between items-center">Wish List</h3>
            <div className="flex flex-col-reverse gap-5 py-5 px-20">
                {
                    wishList.map(wish => <Wish key={wish.product_id} wish={wish}></Wish>)
                }
            </div>
        </div>
    );
};

export default WishList;