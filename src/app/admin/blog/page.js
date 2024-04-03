'use client'
import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
function AdminBlogForm() {
    const [title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const editor = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { title, content, Description };
            const response = await axios.post('/api/admin/Blog', data);
            if (response.status === 200) {
                Toastify({
                    text: "Blogs Successfuly Created",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    stopOnFocus: true,
                    duration: 2000,
                    style: {
                        background: "linear-gradient(to left, #f9f2d0, #eab308)",
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        width: "20rem"
                    },
                }).showToast();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>

                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Description</label><br />
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" value={Description} onChange={(e) => setDescription(e.target.value)} placeholder="(Optional)" />
                            </div>

                            <div className="mb-8">
                                <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br />
                                <JoditEditor ref={editor}
                                    value={content}
                                    onChange={newContent => { setContent(newContent) }}
                                />
                            </div>

                            <div className="flex p-1">
                                <button type="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default AdminBlogForm;
