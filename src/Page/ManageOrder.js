import React from 'react';
import { useDatabase } from '../Hook/useDatabase';

const ManageOrder = () => {
    const { service, setService, isDataLoading, order, setOrder } = useDatabase();

    const handleDeleteOrder = (id) => {
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
                        alert('Successfully deleted :)');
                        const remOrder = order.filter(item => item._id !== id);
                        setOrder(remOrder);
                    }
                })
        }
    }
    return (
        <div>
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold">Manage order</h1>
                <h4 className="text-2xl mt-2">Total order: {order.length}</h4>
            </div>

            {
                isDataLoading ? <div className=" flex justify-center items-center my-10">
                    <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-b-2 border-purple-300"></div>
                </div> :
                    <div className="flex justify-center items-center flex-col my-8">
                        {
                            order.map(item => {
                                return (
                                    <div key={item._id} className="my-3">
                                        <div key={item._id} className="flex justify-center items-center bg-white py-3 px-4 rounded">
                                            <h1 className="font-semibold">{item.title} :: ${item.price}</h1>
                                            <button onClick={() => handleDeleteOrder(item._id)} className="bg-red-400 py-1 px-3 mx-3 rounded">X</button>
                                        </div>
                                        {
                                            item.name &&
                                            <span>Added by: {item.name}</span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
            }

        </div>
    );
};

export default ManageOrder;