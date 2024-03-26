import Auth from "@/models/authSchema";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import connectDB from "@/db/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { email, password } = await request.json();

    await connectDB();
    try {
        const emailFind = await Auth.findOne({ email });
        if (!emailFind) {
            return new NextResponse("Email is not Exist", { status: 400 });
        }

        const validPass = await bcrypt.compare(password, emailFind.password);
        if (!validPass) {
            return new NextResponse("Password is not correct", { status: 422 });
        }
        const token = jwt.sign({ id: emailFind._id, email }, process.env.JWT_SECRET);

        // set token in cookies
        const response = NextResponse.json({
            success: true,
            message: "User Login Successfuly"
        });
        response.cookies.set("AuthToken", token, {
            httpOnly: true,
        });
        return response;
    } catch (error) {
        return new Response('Error at server', { status: 500 })
    }
}