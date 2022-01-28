import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ReactStars from "react-rating-stars-component";
import { useAuth } from '../Hook/useAuth';

const AddBlog = () => {
    const { auth } = useAuth();
    let [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [currentDescription, setCurrentDescription] = useState('');
    const [newRate, setNewRate] = useState(0);
    const [title, setTitle] = useState('');
    const [cost, setCost] = useState(0);
    const [date, setDate] = useState(null);
    const [bannerImage, setBannerImage] = useState('');
    const [categories, setCategories] = useState([]);
    const [location, setLocation] = useState('');
    const [brief, setBrief] = useState('');
    // const [mainEditorContent, setMainEditorContent] = useState('');
    const onEditorStateChange = (e) => {
        setEditorState(e);
        setCurrentDescription(draftToHtml(convertToRaw(e.getCurrentContent())));
    }
    const editorStyle = {
        border: '1px solid #d6cdcd',
        padding: '5px',
        borderRadius: '2px',
        resize: 'vertical',
        height: '300px',
        width: '100%',
    };
    const handleDate = (e) => {
        const dt = new Date(e.target.value);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // console.log(dt.toLocaleDateString('en-GB', options).split(' '));
        setDate(dt.toLocaleDateString('en-GB', options).split(' '));
    }
    const ratingSettings = {
        size: 40,
        count: 5,
        isHalf: true,
        value: newRate,
        onChange: (newValue) => {
            setNewRate(newValue);
            console.log(`Example 3: new value is ${newValue}`);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog_post = { title, date, image: bannerImage, rating: newRate, cost, summary: brief, description: currentDescription, status: 'pending', email: auth?.currentUser?.email, uid: auth?.currentUser?.uid, displayName: auth?.currentUser?.displayName, location, categories }
        fetch('http://localhost:5000/blogs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog_post)
        }).then(data => console.log(data))
        // console.log(blog_post);
        // const contentBlock = htmlToDraft(currentDescription);
        // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        // const _editorState = EditorState.createWithContent(contentState);
        // setMainEditorContent(_editorState);
        // console.log(_editorState);
    }
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white w-11/12 m-auto p-10 my-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor='travel_date'>*Date</label>
                        <input type="date" name="" id="travel_date" onChange={handleDate} className="border rounded-sm p-2 mb-5 hover:border-blue-400" />
                        <label htmlFor='postTitle'>*Title</label>
                        <input type="text" id='postTitle' onChange={(e) => setTitle(e.target.value)} className="border rounded-sm p-2 w-full mb-5 hover:border-blue-400" />
                        <label htmlFor='bannerImage'>*Banner image</label>
                        <input type="text" id='bannerImage' placeholder="URL" onChange={(e) => setBannerImage(e.target.value)} className="border rounded-sm p-2 w-full mb-5 hover:border-blue-400" />
                        <label htmlFor='postTitle'>*Rating</label>
                        <ReactStars {...ratingSettings} />
                        <label htmlFor='postTitle'>*Categories (separate by comma)</label>
                        <input type="text" id='bannerImage' placeholder="Categories" onChange={(e) => setCategories(e.target.value.split(','))} className="border rounded-sm p-2 w-full mb-5 hover:border-blue-400" />
                        <label htmlFor='postTitle'>*Location</label>
                        <input type="text" id='bannerImage' placeholder="Location" onChange={(e) => setLocation(e.target.value.split(','))} className="border rounded-sm p-2 w-full mb-5 hover:border-blue-400" />
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            editorStyle={editorStyle}
                            onEditorStateChange={onEditorStateChange}
                            placeholder="Your story"
                        />
                        <label className='mt-5' htmlFor='travelCost'>*Brief</label>
                        <textarea onChange={(e) => setBrief(e.target.value)} placeholder='Summary' className="border rounded-sm p-2 hover:border-blue-400 h-48" />
                        <label className='mt-5' htmlFor='travelCost'>*Total cost</label>
                        <input type="number" placeholder='$' id='travelCost' onChange={(e) => setCost(e.target.value)} className="border rounded-sm p-2 w-full hover:border-blue-400" />
                    </div>
                    <button type='submit' className="px-5 py-2 mt-5 rounded-md bg-blue-600 text-gray-100 font-semibold hover:bg-blue-700">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddBlog;