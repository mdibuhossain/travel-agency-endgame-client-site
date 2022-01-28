import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import { useAuth } from '../Hook/useAuth';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentOrder, setCurrentOrder] = useState(order);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://travel-pagla.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const tmpData = data.filter(item => user?.email === item?.email);
                setOrder(tmpData);
                setCurrentOrder(tmpData);
                setIsLoading(false)
            })
    }, [currentOrder])
    const handleDeleteMyOrder = (id) => {
        const confDelete = window.confirm('Do you really want to delete?');
        console.log(confDelete);
        if (confDelete) {
            const url = `https://travel-pagla.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Successfully deleted');
                        const remService = order.filter(item => item._id !== id);
                        setCurrentOrder(remService);
                    }
                })
        }
    }
    return (
        <div>
            <PageTitle title="Dashboard" />
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold">My order - {order.length}</h1>
            </div>
            <div className="flex justify-center items-center flex-col my-8">
                {
                    isLoading ? <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400"></div>
                    </div>
                        :
                        currentOrder.map(item => {
                            return (
                                (user.email === item.email) &&
                                <div key={item._id} className="my-3">
                                    <div key={item._id} className="flex justify-center items-center bg-white py-3 px-4 rounded">
                                        <h1 className="font-semibold">{item.title} :: ${item.price}</h1>
                                        <button onClick={() => handleDeleteMyOrder(item._id)} className="bg-red-400 py-1 px-3 mx-3 rounded text-gray-50 font-bold">X</button>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>

        </div>
    );
};

export default MyOrder;