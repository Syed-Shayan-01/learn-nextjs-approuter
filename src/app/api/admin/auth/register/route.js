import connectDB from "@/db/connect";
import AdminAuth from "@/models/adminAuthSchema";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST = async (request) => {
    const { name, email, password, isAdmin } = await request.json();

    await connectDB();

    try {
        const emailFind = await AdminAuth.findOne({ email });
        if (emailFind) {
            return new NextResponse("Email is already Exist", { status: 400 });
        }
        if (!isAdmin) {
            return new NextResponse("You are not admin", { status: 400 });
        }
        if (password.length <= 6) {
            return new NextResponse("Password must be more than 6 characters", { status: 422 });
        }
        const newPassword = await bcrypt.hash(password, 12);

        const newUser = new AdminAuth({
            name,
            email,
            password: newPassword,
            isAdmin
        });
        const response = await newUser.save();
        return new NextResponse(response, { status: 201, success: true })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}