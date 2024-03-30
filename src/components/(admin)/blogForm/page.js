'use client';
import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

function AdminBlogForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [Content, setContent] = useState('');
    const [action, setAction] = useState('Save and Publish');
    const editor = useRef(null);
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>

                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Description</label><br />
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="(Optional)" />
                            </div>

                            <div className="mb-8">
                                <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br />
                                <JoditEditor ref={editor}
                                    value={Content}
                                    onChange={newContent => { setContent(newContent) }}
                                />
                            </div>

                            <div className="flex p-1">
                                <select className="border-2 border-gray-300 border-r p-2" name="action" value={action} onChange={(e) => setAction(e.target.value)}>
                                    <option>Save and Publish</option>
                                    <option>Save Draft</option>
                                </select>
                                <button type="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBlogForm;
