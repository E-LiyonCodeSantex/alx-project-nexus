import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dzlpsd12b/image/upload/**',
      },
    ],
  },
  // other config options if needed
};

export default nextConfig;
