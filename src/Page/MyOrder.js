import React from 'react';
import { useAuth } from '../Hook/useAuth';
import { useDatabase } from '../Hook/useDatabase';

const MyOrder = () => {
    const { service, setService, isDataLoading, order, setOrder } = useDatabase();
    const { user } = useAuth();
    const handleDeleteService = (id) => {
        const confDelete = window.confirm('Do you really want to delete?');
        console.log(confDelete);
        if (confDelete) {
            const url = `https://damp-chamber-98224.herokuapp.com/order/${id}`;
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
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold">My order</h1>
            </div>

            {
                isDataLoading ? <div className=" flex justify-center items-center my-10">
                    <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-b-2 border-purple-300"></div>
                </div> :
                    <div className="flex justify-center items-center flex-col my-8">
                        {
                            order.map(item => {
                                return (
                                    (user.displayName === item.name) &&
                                    <div key={item._id} className="my-3">
                                        <div key={item._id} className="flex justify-center items-center bg-white py-3 px-4 rounded">
                                            <h1 className="font-semibold">{item.title} :: ${item.price}</h1>
                                            <button onClick={() => handleDeleteService(item._id)} className="bg-red-400 py-1 px-3 mx-3 rounded">X</button>
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