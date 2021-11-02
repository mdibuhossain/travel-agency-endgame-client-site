import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { MdModeComment } from 'react-icons/md';

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
                    <div className="mr-5 flex items-center">
                        <MdDateRange className="mr-1" /> {blog.date}
                    </div>
                    <div className="flex items-start">
                        <MdModeComment className="mr-1" />  <span>{blog.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;