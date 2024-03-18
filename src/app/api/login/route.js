import Auth from "@/models/authSchema";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import connectDB from "@/db/connect";
import { setCookie } from "cookies-next";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    // get email or password in json
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
        const token = jwt.sign({ id: emailFind._id }, process.env.JWT_SECRET);
        return new NextResponse(token, { status: 200 });

    } catch (error) {
        return new Response('Error at server', { status: 500 })
    }
}