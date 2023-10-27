/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  experimental: {
    // appDocumentPreloading: false,
    esmExternals: true,
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

module.exports = nextConfig;
