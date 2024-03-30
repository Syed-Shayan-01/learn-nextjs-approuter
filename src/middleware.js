import { NextResponse } from 'next/server'

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    const isLoggedIn = !!request.cookies.get("AdminAuthCookie")?.value;

    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/admin/auth/', request.nextUrl));
    }
}

export const config = {
    matcher: [
        '/admin/dashboard/',
    ],
}
