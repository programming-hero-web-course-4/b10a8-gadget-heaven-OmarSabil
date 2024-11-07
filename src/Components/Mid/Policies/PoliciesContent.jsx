import { useLoaderData } from "react-router-dom";
import PoliciesBanner from "./PoliciesBanner";
import Policy from "./Policy";

const PoliciesContent = () => {

    const loadPolicies = useLoaderData()

    return (
        <div className="w-screen bg-gray-100 pb-5">
            <PoliciesBanner></PoliciesBanner>
            <h2 className="text-center text-rose-700 text-4xl font-bold  mt-20">Terms, Conditions & Policies</h2>
            <hr className="mx-72 mt-2 mb-10 border-rose-300" />
            {
                loadPolicies.map(policy=><Policy key={policy.id} policy={policy}></Policy>
                )
            }
        </div>
    );
};

export default PoliciesContent;