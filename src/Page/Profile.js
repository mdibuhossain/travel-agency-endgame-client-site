import React from 'react';
import PageTitle from '../components/PageTitle';
import { useAuth } from '../Hook/useAuth';

const Profile = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="relative fullPage">
            <PageTitle title="Profile" />
            <div className="text-center flex justify-center items-center flex-col absolute left-0 right-0 top-0 bottom-0">
                <dir className="relative">
                    <img className="w-40 rounded-full mx-auto" src={user.photoURL} alt="profile" />
                    <div class="flex space-x-2 justify-center absolute right-0 bottom-4">
                        <div>
                            <label htmlFor='avatarSelect' class="flex rounded-full bg-gray-500 text-white leading-normal uppercase shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                    class="w-5 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                </svg>
                                <input accept="image/*" type="file" id="avatarSelect" className="hidden" />
                            </label>
                        </div>
                    </div>
                </dir>
                <div>
                    <h1 className="text-4xl font-bold my-3">{user.displayName}</h1>
                    <button onClick={logOut} className="bg-red-600 text-white rounded-full px-3 py-2">Sign out</button>
                </div>
            </div >
        </div >
    );
};

export default Profile;