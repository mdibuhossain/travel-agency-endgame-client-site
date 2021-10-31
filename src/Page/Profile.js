import React from 'react';
import { useAuth } from '../Hook/useAuth';

const Profile = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="relative fullPage">
            <div className="text-center flex justify-center items-center flex-col absolute left-0 right-0 top-0 bottom-0">
                <img className="w-40 rounded-full mx-auto" src={user.photoURL} alt="profile" />
                <div>
                    <h1 className="text-4xl font-bold my-3">{user.displayName}</h1>
                    <button onClick={logOut} className="bg-red-600 text-white rounded-full px-3 py-2">Sign out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;