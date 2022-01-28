import React, { useEffect, useState } from 'react';
import { useAuth } from '../Hook/useAuth';

const MakeAdmin = () => {
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setFetchedUsers(data))
    }, [fetchedUsers])
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/makeadmin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => { console.log(data) })
    }
    return (
        <div className='flex flex-col lg:w-4/12 md:w-6/12 w-11/12 mx-auto mt-10 bg-white p-5 rounded-lg'>
            <h1 className="text-center font-semibold text-xl mb-5">Admin role</h1>
            {
                fetchedUsers.map(item => (
                    <div key={item._id} class="grid grid-cols-1 sm:grid-cols-2 m-2">
                        <div className='flex items-center'>
                            <div className='mr-2 w-12 hidden sm:block'>
                                <img
                                    src={item.photoURL || '/assets/img/avator.png'}
                                    className="rounded-full w-full"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <h5 class="text-sm font-medium leading-tight mr-2">{item.email}</h5>
                                <p class="text-xs text-gray-500">{item.displayName} {user.email === item.email && '(Yourself)'}</p>
                            </div>
                        </div>
                        <div className="sm:grid sm:justify-self-end content-center">
                            {
                                item.role === 'admin' ?
                                    <button className="bg-gray-300 rounded-md px-2 py-1 font-semibold text-gray-50 text-xs cursor-default">Admin</button>
                                    :
                                    <button onClick={() => handleMakeAdmin(item._id)} className="bg-green-500 hover:bg-green-600 rounded-md px-2 py-1 font-semibold text-gray-800 hover:text-gray-200 text-xs">Make Admin</button>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MakeAdmin;