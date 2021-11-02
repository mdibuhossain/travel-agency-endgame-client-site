import React from 'react';

const Banner = ({ greeting, title, title2nd, img }) => {
    return (
        <>
            <div className="text-center">
                <div className="absolute left-0 right-0 top-1/2 mx-auto md:ml-auto text-white">
                    <h1 className="md:text-7xl font-bold bg-gray-800 rounded-lg bg-opacity-50 my-2 py-8">{greeting}</h1>
                </div>
            </div>
        </>
    );
};

export default Banner;