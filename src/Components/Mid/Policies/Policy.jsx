/* eslint-disable react/prop-types */

const Policy = ({ policy }) => {
    const { title, description, conditions } = policy;
    // console.log(policies[0].conditions)


    return (
        <div className="border-2 border-rose-300 bg-rose-50 max-w-[1000px] w-11/12 rounded-xl mx-auto my-5 p-10 pb-14">
            <h3 className="font-bold text-3xl w-fit mx-auto text-rose-700">{title}</h3>
            <p className="text-gray-500 w-fit mx-auto mt-2 mb-5 text-center">{description}</p>
            <div className="max-w-[1000px] w-11/12 mx-auto">
                {
                    conditions.map((condition, i) =>
                        <li
                        key={i}
                        className="pl-10">{condition}</li>)
                }
            </div>
        </div>
    );
};

export default Policy;