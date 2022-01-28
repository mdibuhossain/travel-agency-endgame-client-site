import React, { useEffect, useState } from 'react';
import { useAuth } from '../Hook/useAuth';

const MakeAdmin = () => {
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setFetchedUsers(data))
    }, [])
    return (
        <div className='flex flex-col lg:w-4/12 md:w-6/12 w-11/12 mx-auto mt-10 bg-white p-5 rounded-lg'>
            {
                fetchedUsers.map(item => (
                    <div key={item._id} class="flex items-center justify-between m-2">
                        <div className='flex items-center'>
                            <div className='mr-2'>
                                <img
                                    src={item.photoURL || '/assets/img/avator.png'}
                                    class="rounded-full w-12"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="flex flex-col justify-start">
                                <h5 class="text-sm font-medium leading-tight mr-2">{item.email}</h5>
                                <p class="text-xs text-gray-500">{item.displayName} {user.email === item.email && '(Yourself)'}</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-green-500 hover:bg-green-600 rounded-md px-2 py-1 font-semibold text-gray-800 hover:text-gray-200 text-xs">Make Admin</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MakeAdmin;