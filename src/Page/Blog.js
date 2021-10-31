import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogItem from '../components/BlogItem';

const Blog = () => {
    const { blog, setBlog } = useState([]);
    const { isLoading, setLoading } = useState(true);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/blog',
            responseType: 'stream'
        })
            .then((response) => {
                if (response) {
                    setBlog(response?.data);
                    setLoading(false);
                }
                // console.log(response.data);
            })
            .catch(()=>{
                setBlog([]);
                setLoading(true);
            })
    }, [])
    return (
        <div>
            {/* {
                blog.map(item => <BlogItem key={item._id} blog={item} />)
            } */}
        </div>
    );
};

export default Blog;