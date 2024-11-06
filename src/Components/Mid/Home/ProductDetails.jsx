import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const ProductDetails = () => {

    const { product_id } = useParams();
    const id = parseInt(product_id);
    
    const data = useLoaderData()

    const product = data.find(product => product.product_id === id)
    const {price} = product

    // console.log(data, product, product_id, id)
    return (
        <div className="pb-[150px] mb-[200px] md:pb-60 md:mb-64 lg:pb-80 lg:mb-[400px]">
            <div className="bg-purple-600 px-16 py-5 text-white text-center mt-20 pb-20">
                <div className='mt-10 relative'>
                    <h1 className="w-11/12 font-bold text-3xl md:text-4xl lg:text-5xl mx-auto">Product Details of {product_id}</h1>
                    <p className="w-2/3 py-8 mx-auto">Explore the latest gadgets that will take your experience to the next level. From small devices to the coolest accessories, we have it all.</p>
                    <div className='flex justify-center'>

                        {/* Details */}
                        <div className='md:w-9/12 p-5 text-black bg-gray-100 rounded-3xl border-2 border-black mx-auto mt-5 absolute'>
                            <Details key={product_id} product={product}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;