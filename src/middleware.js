import { NextResponse } from 'next/server'

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    const isDashboardPage = path === "/admin/dashboard/";
    const isAuthPage = path === "/admin/auth/";
    const isLoggedIn = !!request.cookies.get("AdminAuthCookie")?.value;

    if (!isLoggedIn && isDashboardPage) {
        return NextResponse.redirect(new URL('/admin/auth/', request.nextUrl));
    }

    if (isLoggedIn && isAuthPage) {
        return NextResponse.redirect(new URL('/admin/dashboard/', request.nextUrl));
    }
}

export const config = {
    matcher: [
        '/admin/dashboard/',
        '/admin/auth/'
    ],
}
