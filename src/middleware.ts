import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname === '/api/login' || request.nextUrl.pathname === '/api/register'){
        return;
    }
    const authToken = request.cookies.get("session")?.value;
    const logoutUserPaths = request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/signup';
    if(authToken && logoutUserPaths){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    if(!authToken && !logoutUserPaths)
        return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/signup', '/dashboard', '/api/:path*'],
}