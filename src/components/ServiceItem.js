import React from 'react';

const ServiceItem = (props) => {
    const { title, price, rate, description, img } = props.service;
    return (
        <div className="rounded-lg border overflow-hidden">
            <img className="w-full" src={img} alt="servicePic" />
            <div className="p-5">
                <div className="flex justify-between my-2">
                    <h3 className="text-2xl truncate text-gray-600 font-bold">{title}</h3>
                    <h3 className="text-2xl text-gray-400 font-bold">${price}</h3>
                </div>
                <div className="text-gray-500">
                    <p className="my-2 font-semibold">{rate}</p>
                    <p className="overflow-ellipsis">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;