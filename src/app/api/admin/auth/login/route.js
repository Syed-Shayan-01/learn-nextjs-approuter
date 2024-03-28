import connectDB from '@/db/connect';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import AdminAuth from '@/models/adminAuthSchema';
export const POST = async (request) => {
    const { email, password } = await request.json();
    await connectDB();
    try {
        const emailFind = await AdminAuth.findOne({ email });
        if (!emailFind) {
            return new NextResponse("Email is Not Exist", { status: 400 });
        };
        const validPass = await bcrypt.compare(password, emailFind.password);
        if (!validPass) {
            return new NextResponse("Password is not correct", { status: 422 });
        };
        const token = jwt.sign({ id: emailFind._id, email, isAdmin: emailFind.isAdmin }, process.env.JWT_SECRET);

        const response = NextResponse.json({
            success: true,
            message: "Admin Login Success"
        });
        response.cookies.set('AdminAuthCookie', token, { httpOnly: true, secure: true });
        return response
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
}
