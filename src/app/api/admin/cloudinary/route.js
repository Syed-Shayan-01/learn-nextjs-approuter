// pages/api/upload.js
import multer from 'multer';
import { NextResponse } from 'next/server';
import path from 'path';

// Set up multer disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname); // Rename the file with current timestamp
    }
});

// Initialize multer instance with disk storage
const upload = multer({ storage: storage });


// Define the API method for image upload
export const POST = async (request) => {
    return new Promise((resolve, reject) => {
        upload.single('image')(request, (err) => {
            if (err) {
                // A Multer error occurred when uploading
                reject({ error: 'Multer error', status: 400 });
            } else {
                // Upload successful
                const { originalname, path, mimetype, size } = request.file;
                resolve({ originalname, path, mimetype, size, status: 200 });
            }
        });
    });
};
