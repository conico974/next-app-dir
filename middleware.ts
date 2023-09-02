import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware', request);
  console.log('next url', request.nextUrl);
  if (request.nextUrl.pathname.startsWith('/middlewareRewrite')) {
    // console.log('middlewareRewrite');
    return NextResponse.rewrite(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/middlewareRedirect')) {
    return NextResponse.redirect(
      new URL('/dashboard', `https://${request.headers.get('host')}`)
    );
  }

  if (request.nextUrl.pathname.startsWith('/middlewareResponse')) {
    return new NextResponse('Hello World', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const headers = new Headers(request.headers);
  headers.set('x-hello-middleware', 'hello');
  const response = NextResponse.next({
    request: {
      headers: headers,
    },
    headers: {
      'x-hello-middleware-res': 'world',
    }
  });

  response.cookies.set('hello', 'world');

  console.log('middleware response', response);

  return response;
}
