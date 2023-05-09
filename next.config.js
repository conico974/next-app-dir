/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDocumentPreloading: false,
    appDir: true,
    esmExternals: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "loremflickr.com" }],
  },
};

module.exports = nextConfig;
