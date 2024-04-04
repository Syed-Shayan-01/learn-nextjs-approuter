"use client"
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
const ImageUpload = () => {
    //     const [file, setFile] = useState(null);

    //     const handleChange = (e) => {
    //         setFile(e.target.files[0]);
    //     };

    //     const handleSubmit = async () => {
    //         if (!file) return; // Prevent submitting if no file selected

    //         const formData = new FormData();
    //         formData.append('image', file);

    //         try {
    //             const res = await fetch('/api/admin/cloudinary', {
    //                 method: 'POST',
    //                 body: formData,
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data' // Set Content-Type header
    //                 }
    //             });

    //             if (!res.ok) {
    //                 throw new Error('Upload failed');
    //             }

    //             const data = await res.json();
    //             console.log('Uploaded:', data);
    //         } catch (error) {
    //             console.error('Upload failed:', error.message);
    //         }
    //     };
    return (
        <div>
            <h1>Image Upload</h1>
            <CldImage
                width="960"
                height="600"
                src="<Public ID>"
                sizes="100vw"
                alt="Description of my image"
            />
        </div>
    );
};

export default ImageUpload;