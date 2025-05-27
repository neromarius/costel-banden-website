import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const adminRoute = /^\/(ro|en|fr|nl)?\/?admin(\/.*)?$/;
  let response = NextResponse.next();
  if (adminRoute.test(pathname)) {
    const authCookie = request.cookies.get('admin_auth');
    // Debug: adaugă header cu valoarea cookie-ului
    response.headers.set('x-debug-admin-auth', authCookie ? authCookie.value : 'none');
    if (!authCookie || authCookie.value !== 'ok') {
      const loginUrl = new URL('/admin-login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  return response;
}

export const config = {
  matcher: [
    '/admin',
    '/admin/(.*)',
    '/ro/admin',
    '/ro/admin/(.*)',
    '/en/admin',
    '/en/admin/(.*)',
    '/fr/admin',
    '/fr/admin/(.*)',
    '/nl/admin',
    '/nl/admin/(.*)'
  ],
};
