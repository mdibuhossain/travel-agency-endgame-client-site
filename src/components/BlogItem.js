import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdDateRange } from 'react-icons/md';
import { MdModeComment } from 'react-icons/md';
import htmlToDraft from 'html-to-draftjs';

const BlogItem = (props) => {
    const { blog } = props;
    const description = htmlToDraft(blog.description);
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
                <a href="#!">
                    <img className="rounded-t-lg w-full" src={blog.image} alt="" />
                </a>
                <div className="p-6 w-full">
                    <p className="text-gray-400 w-auto">{blog.date[0]} {blog.date[1]}, {blog.date[2]}</p>
                    <h5 className="text-gray-900 text-xl font-medium mb-2 w-full">{blog.title.slice(0, 60)}{blog.title.length > 60 && '...'}</h5>
                    <ReactStars
                        size={20}
                        count={5}
                        value={blog.rating}
                        edit={false}
                        isHalf="true"
                    />
                    <div className="text-gray-700 text-base mb-4 blog_brief"
                        dangerouslySetInnerHTML={{
                            __html: blog?.description.slice(0, 150) + '...'
                        }}
                    >
                    </div>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See more</button>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;