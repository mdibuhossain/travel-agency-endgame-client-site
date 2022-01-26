import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdDateRange } from 'react-icons/md';
import { MdModeComment } from 'react-icons/md';

const BlogItem = (props) => {
    const { blog } = props;
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis ad voluptatem nihil? Dolor suscipit expedita repellat perferendis, maiores repudiandae possimus perspiciatis, at ipsum incidunt aliquid veritatis officiis alias. Sint a beatae consequuntur magni, sapiente possimus, provident, sequi assumenda inventore et placeat similique consectetur iusto. Corrupti repellat dolor suscipit totam sunt id hic maiores ducimus distinctio, quisquam iste, nihil recusandae laudantium molestiae cum tempora maxime doloribus ullam, ipsam aperiam qui itaque voluptatem nostrum quam. Pariatur exercitationem aspernatur non saepe, soluta distinctio nesciunt et ducimus! Aliquid maxime, harum impedit rerum quasi, molestias fugit ipsum quam saepe cum numquam facere. Atque vero eligendi eum. Ducimus consequuntur doloribus ullam eligendi blanditiis dolorum nulla tempore quod, perferendis alias illo, mollitia repudiandae magnam odio enim quae repellendus at eos accusamus ratione vitae laborum debitis. Tempora eius quos ex blanditiis dolorum, maiores cum alias magni assumenda, repellendus magnam ratione aliquid excepturi natus architecto perferendis sit nesciunt, beatae distinctio velit. Illo eum nobis a accusantium architecto excepturi non dolores porro dicta id, iste quod labore ipsam dolor modi deleniti magnam reiciendis impedit, amet eveniet quia in consectetur? Soluta, accusamus doloremque provident enim quae, non exercitationem illo obcaecati maiores deleniti, nesciunt quibusdam voluptas sequi cumque nemo quisquam reiciendis!"
    return (
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <img class="rounded-t-lg" src={blog.img} alt="" />
                </a>
                <div class="p-6">
                    <p className="text-gray-400">{blog.date}</p>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{blog.title.slice(0, 60)}...</h5>
                    <ReactStars
                        size={20}
                        count={5}
                        value={5}
                        edit={false}
                        isHalf="true"
                    />
                    <p class="text-gray-700 text-base mb-4">
                        {
                            text.slice(0, 150)
                        }
                        ...
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See more</button>
                </div>
            </div>
        </div>
        // <div className="overflow-hidden bg-white">
        //     <img src={blog.img} alt="blog-img" />
        //     <div className="px-3 py-4 flex flex-col">
        //         <div>
        //             <h1 className="text-2xl">{blog.title}</h1>
        //         </div>
        //         <div className="flex">
        //             <div className="mr-5 flex items-center">
        //                 <MdDateRange className="mr-1" /> {blog.date}
        //             </div>
        //             <div className="flex items-start">
        //                 <MdModeComment className="mr-1" />  <span>{blog.comments} comments</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BlogItem;