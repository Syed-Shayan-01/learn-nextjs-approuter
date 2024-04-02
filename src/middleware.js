import { NextResponse } from 'next/server'

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const cookies = request.cookies.get("AdminAuthCookie");
    const isAdminPath = path === '/admin/auth' ;

    if (cookies && isAdminPath) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
    }
    if (!cookies && !isAdminPath) {
        return NextResponse.redirect(new URL('/admin/auth', request.nextUrl));
    }
}

export const config = {
    matcher: [
        '/admin/dashboard/',
        '/admin/auth/',
        '/admin/blog/',
    ],
}
