
const Error = () => {

    return (
        <div className="h-screen flex justify-center items-center p-40">
            <div className="border-8 border-red-600 bg-red-100 w-full h-full flex flex-col justify-center items-center text-center">
                <h1 className="font-bold text-7xl mx-auto text-red-600">!! ! Error ! !!</h1>
                <h3  className="text-3xl font-semibold text-gray-500 my-2">404 Error Occured</h3>
                <h4>The page you are looking for is not found</h4>
                {/* <button className="btn">Go Back</button> */}

            </div>
        </div>
    );
};

export default Error;