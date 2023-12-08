const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  output: 'standalone',
  experimental: {
    appDocumentPreloading: false,
    esmExternals: true,
    outputFileTracingExcludes: {
      "*": [
        "@swc/core",
        'esbuild',
        'uglify-js',
        'watchpack',
        'webassemblyjs',
        'sharp'
      ]
    }
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "loremflickr.com" }],
  },
  headers: () => [
    {
      source: "/product",
      headers: [
        {
          key: "x-custom-header",
          value: "my custom header value",
        },
      ],
    }, {
      source: "/product/:path",
      headers: [
        {
          key: "x-custom-:path",
          value: "this is the :path",
        },
      ],
    }
  ],
  rewrites: () => ({
    beforeFiles: [
      {
        source: "/shouldBeRewritten",
        destination: "/",
      },
      {
        source: "/shouldBeRewritten/:path",
        destination: "/:path",
      },
      {
        source: "/externalRewrite",
        destination: "https://google.com",
      },
      {
        source: "/externalRewriteLocal",
        destination: "https://d3ftyhzhpsmdwh.cloudfront.net",
      },
      {
        source: "/externalRewriteSsr",
        destination: "https://vdfyg7as4gotycai26sfhz2zme0dhyha.lambda-url.eu-west-1.on.aws/ssr"
      }
    ],
    afterFiles: [
      {
        source: "/shouldBeRewrittenAfterFiles",
        destination: "/",
      },
      {
        source: "/shouldBeRewrittenWithPath/:path",
        destination: "https://www.github.com/:path",
      }
    ],
    fallback: [
      {
        source: "/shouldBeRewrittenFallback",
        destination: "/",
      },
    ],
  }),
  redirects: () => [
    {
      source: "/shouldBeRedirected",
      destination: "/",
      permanent: true,
    },
    {
      source: "/shouldBeRedirectedWithQuery",
      destination: "/",
      permanent: false,
      has: [
        {
          type: "query",
          key: "a",
          value: "a",
        },
      ],
    },
    {
      source: "/externalRedirect",
      destination: "https://google.com",
      permanent: false,
    },
    {
      source: "/externalRedirectWithPath/:path",
      destination: "https://google.com/:path",
      permanent: false,
    },
  ],
};

module.exports = million.next(
  nextConfig, { auto: { rsc: true } }
);
