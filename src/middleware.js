import { NextResponse } from 'next/server'

export function middleware(request) {
  
  const token = request.cookies.get('next-auth.session-token')?.value ||
                request.cookies.get('__Secure-next-auth.session-token')?.value;

  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/booking/') || pathname.startsWith('/my-bookings')) {
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/booking/:path*', 
    '/my-bookings/:path*'
  ],
}