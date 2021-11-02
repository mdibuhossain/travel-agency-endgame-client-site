import React from 'react';

const BlogItem = (props) => {
    const { blog } = props;
    return (
        <div className="overflow-hidden bg-white">
            <img src={blog.img} alt="blog-img" />
            <div className="px-3 py-4 flex flex-col">
                <div>
                    <h1 className="text-2xl">{blog.title}</h1>
                </div>
                <div className="flex">
                    <div className="mr-5">
                        {blog.date}
                    </div>
                    <div>
                        {blog.comments} <span> comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;