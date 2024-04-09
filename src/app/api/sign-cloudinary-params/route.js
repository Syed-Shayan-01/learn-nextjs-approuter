import { NextResponse } from 'next/server';

import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    const body = await request.json();

    const { paramsToSign } = body;

    const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET);

    return NextResponse.json({ signature });
}


// export async function GET(request) {
//     try {
//         const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`;
//         return NextResponse.json({ imageUrl }, { status: 200 });
//     } catch (error) {
//         console.error('Failed to fetch image from Cloudinary:', error);
//         res.status(500).json({ message: 'Failed to fetch image from Cloudinary.' });
//     }
// }