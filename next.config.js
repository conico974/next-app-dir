/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDocumentPreloading: false,
    appDir: true,
    esmExternals: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'loremflickr.com' }],
  },
  rewrites: () => ({
    beforeFiles: [
      {
        source: '/shouldBeRewritten',
        destination: '/',
      },
      {
        source: '/shouldBeRewritten/:path',
        destination: '/:path',
      },
    ],
  }),
  redirects: () => [
    {
      source: '/shouldBeRedirected',
      destination: '/',
      permanent: true,
    },
    {
      source: '/shouldBeRedirectedWithQuery',
      destination: '/',
      permanent: false,
      has: [
        {
          type: 'query',
          key: 'a',
          value: 'a',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
