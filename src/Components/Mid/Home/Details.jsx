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
        <div className="flex gap-10 text-left">
            <div>
                <img className="w-full h-fit" src={image} />
                <h4 className="text-4xl font-bold">{product_title}</h4>
                <h5>Price: {price}</h5>
                <div>
                    {
                        !available ? <p>Stock Out</p> : <p>In Stock</p>
                    }
                </div>
            </div>
            <div>
                <p>{description}</p>
                <p>Brand: {brand}</p>
                <p>Released: {release_year}</p>
                <h6>Specification:</h6>
                {
                    features.map((feature, i) =>
                        <li key={i}
                            className="text-left">{feature}
                        </li>)
                }
                {/* Rating */}
                <h6>Rating</h6>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-600" />
                </div>
                <div className="flex gap-2 ">
                    {/* btn Cart */}
                    <button
                        onClick={() => handleAddToCart(id)}
                        className="btn btn-sm bg-purple-600 text-white rounded-full flex gap-2 h-fit hover:border hover:border-purple-500 hover:bg-purple-300 hover:text-purple-700"> <span>Add to Cart</span> <ShoppingCart />
                    </button>
                    {/* btn Wishlist */}
                    <button
                        onClick={() => handleAddToWishlist(id)}
                        className="btn btn-sm rounded-full border border-gray-300 text-gray-600 p-1 hover:bg-red-300 hover:text-red-600 hover:border-none" ><Heart className=" hover:fill-red-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;