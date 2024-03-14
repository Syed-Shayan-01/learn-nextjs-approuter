import Auth from "@/models/authSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/db/connect";
export const POST = async (request) => {

    try {
        const { name, email, password } = await request.json();

        await connectDB();
        const emailFind = await Auth.findOne({ email });
        if (emailFind) {
            return new NextResponse("Email is already Exist", { status: 400 });
        }
        if (password.length <= 6) {
            return new NextResponse("Password must be more than 6 characters", { status: 422 });
        }
        const newPassword = await bcrypt.hash(password, 12);
        const newUser = new Auth({
            name,
            email,
            password: newPassword,
        });
        await newUser.save();
        //   console.log('New User',newUser);
        return new NextResponse("User has been created", { status: 201 });
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}