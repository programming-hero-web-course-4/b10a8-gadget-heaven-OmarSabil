import { Outlet } from "react-router-dom";
import DashboardBanner from "./DashboardBanner";

const DashboardContent = () => {
    return (
        <div>
            <DashboardBanner></DashboardBanner>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardContent;