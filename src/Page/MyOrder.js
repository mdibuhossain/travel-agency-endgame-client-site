import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import { useAuth } from '../Hook/useAuth';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
    })
    const { user } = useAuth();
    const handleDeleteMyOrder = (id) => {
        const confDelete = window.confirm('Do you really want to delete?');
        console.log(confDelete);
        if (confDelete) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Successfully deleted');
                        const remService = order.filter(item => item._id !== id);
                        setOrder(remService);
                    }
                })
        }
    }
    return (
        <div>
            <PageTitle title="Dashboard" />
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold">My order</h1>
            </div>

            {
                <div className="flex justify-center items-center flex-col my-8">
                    {
                        order.map(item => {
                            return (
                                (user.displayName === item.name) &&
                                <div key={item._id} className="my-3">
                                    <div key={item._id} className="flex justify-center items-center bg-white py-3 px-4 rounded">
                                        <h1 className="font-semibold">{item.title} :: ${item.price}</h1>
                                        <button onClick={() => handleDeleteMyOrder(item._id)} className="bg-red-400 py-1 px-3 mx-3 rounded">X</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
    );
};

export default MyOrder;