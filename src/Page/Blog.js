import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogItem from '../components/BlogItem';

const Blog = () => {
    const { blog, setBlog } = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/blog',
            responseType: 'stream'
        })
            .then((response) => {
                setBlog(response.data);
                // console.log(response.data)
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