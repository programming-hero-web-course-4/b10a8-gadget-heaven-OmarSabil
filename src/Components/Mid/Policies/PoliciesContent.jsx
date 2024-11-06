import { useLoaderData } from "react-router-dom";
import PoliciesBanner from "./PoliciesBanner";
import Policy from "./Policy";
import { useEffect } from "react";

const PoliciesContent = () => {

    const loadPolicies = useLoaderData()
    console.log(loadPolicies)

    return (
        <div>
            <PoliciesBanner></PoliciesBanner>
            Terms & Conditions & Company Policies
            <Policy></Policy>
        </div>
    );
};

export default PoliciesContent;