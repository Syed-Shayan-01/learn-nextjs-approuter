import connectDB from '@/db/connect';
import Blog from '@/models/BlogSchema';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const { title, content, Description } = await request.json();
    await connectDB();

    try {
        if (content.length < 100) {
            return new NextResponse('Content Must be greater than 40 characters', { status: 400 });
        }
        const blog = new Blog({
            title,
            content,
            Description,
        });
        await blog.save();
        return new NextResponse(blog, { status: 200 });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }

};


export const GET = async (request) => {
    await connectDB();
    try {
        const title = await Blog.find();
        return new NextResponse(title, { status: 200 })
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
