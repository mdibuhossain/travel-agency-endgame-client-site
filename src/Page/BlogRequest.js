import { Dialog } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

const BlogRequest = () => {
    const [blogList, setBlogList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogList(data)
                setCurrentList(data)
            })
    }, [blogList])
    const handleAllowBlog = (id, status) => {
        fetch(`http://localhost:5000/blogs/allow/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        }).then(data => console.log(data))
    }
    const handleDeleteBlog = (id) => {
        fetch(`http://localhost:5000/blogs/delete/${id}`, {
            method: "DELETE"
        }).then(data => console.log(data))
        const tmpList = blogList.filter(item => item._id !== id);
        setCurrentList(tmpList);
    }
    return (
        <div>
            <p className='text-xl font-semibold text-center my-10'>Blog request</p>
            <div className='flex flex-col items-center'>
                {
                    currentList.map(item => (
                        <div key={item._id} className='border-t-2 border-b-2 py-2 my-2 px-5'>
                            <p className="font-semibold">{item.title}</p>
                            <p>by: <span className="text-blue-400">{item.email}</span> <span className="text-xs text-gray-400">({item.displayName})</span></p>
                            <div className="flex items-center">
                                <div>
                                    {
                                        (item.status === 'pending') ?
                                            <button onClick={() => handleAllowBlog(item._id, 'allow')} className='border-1 text-xs bg-blue-500 text-gray-50 font-semibold my-1 px-3 py-1 rounded-lg hover:bg-blue-600 hover:shadow-sm'>Allow</button> :
                                            <button onClick={() => handleAllowBlog(item._id, 'pending')} className='border-1 text-xs bg-gray-300 text-gray-50 font-semibold my-1 px-3 py-1 rounded-lg'>Allowed</button>

                                    }
                                </div>
                                <button onClick={() => handleDeleteBlog(item._id)} className='ml-2 text-xs border-1 bg-red-500 text-gray-50 font-semibold my-1 px-3 py-1 rounded-lg hover:bg-red-600 hover:shadow-sm'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogRequest;