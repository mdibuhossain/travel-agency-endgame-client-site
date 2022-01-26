import axios from 'axios';
import React from 'react';
import { useAuth } from '../Hook/useAuth';
import { useDatabase } from '../Hook/useDatabase';

const ServiceItem = (props) => {
    const { user } = useAuth();
    const { service } = useDatabase();
    const { title, price, rate, description, img, _id } = props.service;

    const handleAddtoCart = async (id) => {
        const data = await service.find(item => item._id === id);
        console.log(data);
        data.name = user?.displayName;
        data.email = user?.email;
        axios.post('https://heroku-world-trip.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added to cart successfully');
                }
            })
    }

    return (
        <div className="rounded-lg border overflow-hidden bg-white flex flex-col justify-between">
            <div>
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
            <button onClick={() => handleAddtoCart(_id)} className="border-t py-2 hover:bg-blue-300 w-full">Add to cart</button>
        </div>
    );
};

export default ServiceItem;