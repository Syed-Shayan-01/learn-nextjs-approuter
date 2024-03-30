import AdminAuth from "@/models/adminAuthSchema";
import connectDB from "@/db/connect";
import { NextResponse } from "next/server";


// I created  this api for user logout purpose
export const GET = async (request) => {
    await connectDB();
    try {
        const response = NextResponse.json({
            status: 200,
            message: "Logout Success"
        })
        response.cookies.delete("AdminAuthCookie", {
            httpOnly: true,
            secure: true
        });
        return response;
    } catch (error) {
        return new NextResponse(error, {
            status: 500
        })
    }

}