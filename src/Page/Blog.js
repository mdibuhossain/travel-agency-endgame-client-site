import React from 'react';
import BlogItem from '../components/BlogItem';
import { useDatabase } from '../Hook/useDatabase';

const Blog = () => {
    const { blog, isDataLoading } = useDatabase();
    return (
        <>
            <h1 className="text-5xl text-center mt-8 font-semibold">Blogs</h1>
            {
                isDataLoading ? <div className=" flex justify-center items-center my-10">
                    <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-b-2 border-purple-300"></div>
                </div> :
                    <div className="grid md:grid-cols-3 gap-y-3 md:gap-5 w-9/12 mx-auto my-12">
                        {
                            blog.map(item => <BlogItem key={item._id} blog={item} />)
                        }
                    </div>
            }
        </>
    );
};

export default Blog;