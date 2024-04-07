import { access, rmdir, unlink, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import Image from '@/models/imageSchema';
import connectDB from '@/db/connect';

cloudinary.config({
    cloud_name: 'disalrbow',
    api_key: '954531178124367',
    api_secret: '1Q4mDQGxsBIm8eGkxs5MorgAY8Q'
});

export const POST = async (request) => {
    await connectDB();
    try {
        const file = await request.formData();
        const data = await file.get('image');

        if (!data) {
            return NextResponse.json("No Image Selected", { status: 400 });
        }

        const byteData = await data.arrayBuffer();
        const base64Data = Buffer.from(byteData);
        const path = `./public/uploads/${data.name}`;

        await writeFile(path, base64Data);

        // Check if file exists in the specified path
        const fileExists = await exists(path);

        if (!fileExists) {
            return NextResponse.json({
                message: "Failed to save image to local folder",
                success: false,
                status: 500
            });
        }

        // If image is successfully saved locally, upload it to Cloudinary
        cloudinary.uploader.upload(path, async function (error, result) {
            if (error) {
                return NextResponse.json({
                    message: "Failed to upload image to Cloudinary",
                    success: false,
                    status: 500
                });
            }

            const image = new Image({
                image: result.url
            })
            const imageSave = await image.save();
            if (!imageSave) {
                return NextResponse.json({ message: "Image url not save in Mongodb", status: 400 })
            }
            // After successful upload to Cloudinary, delete the image from local directory
            await unlink(path);
            console.log("Image deleted from local directory.");
        });

        return NextResponse.json({
            message: "Image uploaded successfully",
            success: true,
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ message: error, status: 500 });
    }
};

// Function to check if a file exists
const exists = async (path) => {
    try {
        await access(path);
        return true;
    } catch (error) {
        return false;
    }
};
