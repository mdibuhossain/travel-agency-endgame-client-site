import React from 'react';
import BlogItem from '../components/BlogItem';
import { useDatabase } from '../Hook/useDatabase';

const Blog = () => {
    const { blog } = useDatabase();
    return (
        <>
            <h1 className="text-5xl text-center mt-8 font-semibold">Blogs</h1>
            <div className="grid grid-cols-3 gap-5 w-9/12 mx-auto my-12">
                {
                    blog.map(item => <BlogItem key={item._id} blog={item} />)
                }
            </div>
        </>
    );
};

export default Blog;