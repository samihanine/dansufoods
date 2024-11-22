/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname:'cdn.sanity.io'
      }
    ],
    deviceSizes: [
      360, 414, 512, 640, 750, 828, 1080, 1200, 1536, 1920, 2048, 3840,
    ],
  },
};

export default nextConfig;
