/* eslint-disable react/prop-types */

import { Heart, ShoppingCart } from "lucide-react";
import { addToStoredCart, addToStoredWish } from "../../../utilities/addToDataBase";


const Details = ({ product }) => {
    const { product_id, product_title, brand, price, release_year, features, available, image, description } = product;
    const id = product_id;
    const handleAddToCart = (id) => {
        addToStoredCart(id);
    }
    const handleAddToWishlist = (id) => {
        addToStoredWish(id);
    }

    return (
        <div className="flex flex-col items-center lg:flex-row text-left gap-10 md:p-2">
            <img className="w-full lg:w-[500px] lg:h-full md:max-h-[450px] md:h-9/12 rounded-xl mx-auto md:object-center" src={image} />
            <div className="w-fit">
                <h4 className="text-3xl font-bold">{product_title}</h4>
                <h5 className="text-xl font-semibold text-gray-600">Price: {price}</h5>
                {
                    !available ? <p className="btn btn-xs rounded-full bg-red-100 text-red-600 border border-red-600">Stock Out</p> : <p className="btn btn-xs rounded-full bg-green-200 text-green-800 border border-green-800">In Stock</p>
                }

                <p className="text-gray-600 mt-2">{description}</p>
                <div>

                    {/* infos */}
                    <div className="py-2">
                        <p><span className="font-semibold">Brand:</span> {brand}</p>
                        <p><span className="font-semibold">Released:</span> {release_year}</p>
                    </div>
                    {/* specefication */}
                    <div>
                        <h6 className="font-bold">Specification:</h6>
                        {
                            features.map((feature, i) =>
                                <li key={i}
                                    className="text-left">{feature}
                                </li>)
                        }
                    </div>

                    {/* Order & Rate */}
                    <h6 className="font-bold text-lg mt-5">Rating</h6>
                    <div className="flex justify-between items-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                        </div>
                        {/* btn */}
                        <div className="flex gap-2 ">
                            {/* btn Wishlist */}
                            <button
                                onClick={() => handleAddToWishlist(id)}
                                className="btn btn-sm rounded-full border border-gray-300 text-gray-600 p-1 hover:bg-red-300 hover:text-red-600 hover:border-none" ><Heart className=" hover:fill-red-600" />
                            </button>
                            {/* btn Cart */}
                            <button
                                onClick={() => handleAddToCart(id)}
                                className="btn btn-sm bg-purple-600 text-white rounded-full flex gap-2 h-fit hover:border hover:border-purple-500 hover:bg-purple-300 hover:text-purple-700"> <span>Add to Cart</span> <ShoppingCart />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;