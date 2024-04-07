// import { NextResponse } from 'next/server';
// import { v2 as cloudinary } from 'cloudinary';
// import Image from '@/models/imageSchema';
// import connectDB from '@/db/connect';

// cloudinary.config({
//     cloud_name: 'disalrbow',
//     api_key: '954531178124367',
//     api_secret: '1Q4mDQGxsBIm8eGkxs5MorgAY8Q'
// });

// export const POST = async (request) => {
//     await connectDB();
//     try {
//         const data = await request.formData();
//         const file = await data.get('image');
//         if (!file) {
//             return NextResponse.json("No Image Selected", { status: 400 });
//         }

//         cloudinary.uploader.upload(file.name, async function (error, result) {
//             if (error) {
//                 return NextResponse.json({
//                     message: "Failed to upload image to Cloudinary",
//                     success: false,
//                     status: 500
//                 });
//             }

//             const image = new Image({
//                 image: result.url
//             })
//             const imageSave = await image.save();
//             if (!imageSave) {
//                 return NextResponse.json({ message: "Image url not save in Mongodb", status: 400 })
//             }

//         });

//         return NextResponse.json({
//             message: "Image uploaded successfully",
//             success: true,
//             status: 200
//         });
//     } catch (error) {
//         return NextResponse.json({ message: error, status: 500 });
//     }
// };


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
    await connectDB(); // MongoDB connection
    try {
        const data = await request.formData();
        const file = data.get('image');

        if (!file) {
            return NextResponse.json("No Image Selected", { status: 400 });
        }

        const fileBuffer = Buffer.from(await file.arrayBuffer());

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(fileBuffer);

        console.log(result); // Log Cloudinary upload result

        const image = new Image({
            image: result.url
        });

        // Save image to MongoDB
        const imageSave = await image.save();
        if (!imageSave) {
            return NextResponse.json({ message: "Image url not save in Mongodb", status: 400 })
        }

        return NextResponse.json({
            message: "Image uploaded successfully",
            success: true,
            status: 200
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to upload image", status: 500 });
    }
};
