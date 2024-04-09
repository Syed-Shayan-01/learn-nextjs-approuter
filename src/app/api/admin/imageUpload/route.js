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
