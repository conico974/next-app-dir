import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('middleware', request);
  // console.log('next url', request.nextUrl);
  if (request.nextUrl.pathname.startsWith('/monitoring')) {
    const orgId = request.nextUrl.searchParams.get('o');
    const projectId = request.nextUrl.searchParams.get('p');
    return NextResponse.rewrite(new URL(`https://o${orgId}.ingest.sentry.io/api/${projectId}/envelope/?hsts=0`));
  }

  if (request.nextUrl.pathname.startsWith('/middlewareRewritesExternal2')) {
    return NextResponse.rewrite(new URL('https://d3ftyhzhpsmdwh.cloudfront.net/'));
  }

  if (request.nextUrl.pathname.startsWith('/middlewareRewritesExternal')) {
    return NextResponse.rewrite(new URL('https://rpwktd3vxykgihuemkfxfqhxue0wrrah.lambda-url.eu-west-1.on.aws/'));
  }

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

  if (request.nextUrl.pathname.startsWith('/isr')) {
    return NextResponse.next({
      headers: {
        'Cache-Control': 's-maxage=99, stale-while-revalidate=999',

      }
    })
  }

  const headers = new Headers(request.headers);
  headers.set('x-hello-middleware', 'hello');
  const response = NextResponse.next({
    request: {
      headers: headers,
    },
    headers: {
      'x-hello-middleware-res': 'world',
    },
  });

  response.cookies.set('hello', 'world');

  // console.log('middleware response', response);

  return response;
}
