import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let cookies = request.cookies.get("AuthToken");
    if (!cookies) {
        return NextResponse.rewrite(new URL('/user/login', request.url))
    }
}

export const config = {
    matcher: [
        '/user/gallery:path*', '/user/videopage:path*'
    ],
}