import { NavLink } from "react-router-dom";

const DashboardBanner = () => {
    return (
        <div>
            <div className="bg-purple-600 px-16 py-10 text-white text-center mt-20">
                <h4 className="w-11/12 font-bold text-4xl mx-auto">Dashboard</h4>
                <p className="w-2/3 py-5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From small devices to the coolest accessories, we have it all.</p>
                {/* btn */}
                <div className="flex justify-center gap-3 mt-5">

                    <NavLink to="/dashboard/cart"><button className="btn font-bold rounded-full bg-white text-purple-600 md:w-[120px]">Cart</button></NavLink>
                    <NavLink to="/dashboard/wish"><button className="btn font-bold rounded-full bg-white text-purple-600 md:w-[120px]">Wishlist</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default DashboardBanner;