import Image from "@/models/imageSchema";
import connectDB from "@/db/connect";
import { NextResponse } from 'next/server'
export const POST = async (request) => {
    await connectDB();
    try {
        const { imageUrl } = await request.json();

        if (!imageUrl) return new NextResponse("Image url not access!", { status: 400 });

        const newImage = new Image({ imageUrl });
        await newImage.save();
        return new NextResponse(imageUrl, { status: 200 });
    } catch (error) {
        return new NextResponse({ error: error.message }, { status: 400 })
    }
}


// create get api and get all the imageurl in mongodb

export const GET = async (request) => {
    await connectDB();
    try {
        const images = await Image.find();
        if (!images) {
            return new NextResponse("No Image Found", { status: 400 })
        }
        return NextResponse.json({
            status: 200,
            message: "Image Data Successfuly Received",
            data: blogs,
        })
    } catch (error) {
        return new NextResponse({ error: error.message }, { status: 400 })
    }
}