import React from 'react';

const Banner = ({ greeting, title, title2nd, img }) => {
    return (
        <>
            <div className="text-center">
                <div className="absolute w-full overflow-hidden top-1/3 text-white">
                    <h1 className="md:text-7xl text-3xl font-bold bg-gray-800 bg-opacity-60 my-2 py-8">{greeting}</h1>
                </div>
            </div>
        </>
    );
};

export default Banner;