import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddBlog = () => {
    let editorState = EditorState.createEmpty();
    const [currentDescription, setCurrentDescription] = useState(editorState);
    const onEditorStateChange = (editorState) => {
        setCurrentDescription(editorState);
    }
    const editorStyle = {
        border: '1px solid #d6cdcd',
        padding: '5px',
        borderRadius: '2px',
        resize: 'vertical',
        height: '300px',
        width: '100%',
    };
    console.log(draftToHtml(convertToRaw(currentDescription.getCurrentContent())));
    return (
        <div className='rounded-lg shadow-lg bg-white w-11/12 m-auto p-10 my-10'>
            <label htmlFor='postTitle'>*Title</label>
            <input type="text" id='postTitle' className="border rounded-sm p-2 w-full mb-5 hover:border-blue-400" required />
            <Editor
                editorState={currentDescription}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                editorStyle={editorStyle}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
};

export default AddBlog;