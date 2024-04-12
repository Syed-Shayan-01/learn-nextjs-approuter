import Image from "@/models/imageSchema";
import connectDB from "@/db/connect";
import { NextResponse } from 'next/server'
export const POST = async (request) => {
    await connectDB();
    try {
        const { imageUrl, ImageCategory } = await request.json();

        if (!imageUrl) return new NextResponse("Image url not access!", { status: 400 });
        if (!ImageCategory) return new NextResponse("Image Catergory is Required!", { status: 400 })
        const newImage = new Image({ imageUrl, ImageCategory });
        await newImage.save();
        return new NextResponse(newImage, { status: 200 });
    } catch (error) {
        return new NextResponse({ error: error.message }, { status: 400 })
    }
}


// create get api and get all the imageurl in mongodb
export const GET = async (request) => {
    await connectDB();
    try {
        const images = await Image.find();

        if (!images || images.length === 0) {
            return new NextResponse("No Image Found", { status: 400 });
        }

        return NextResponse.json({
            status: 200,
            message: "Image Data Successfully Received",
            data: images,
        });
    } catch (error) {
        return new NextResponse({ error: error.message }, { status: 400 });
    }
};
