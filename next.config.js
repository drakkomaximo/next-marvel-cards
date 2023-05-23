/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    images: {
      loader: 'default',
      domains: ['i.annihil.us'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      formats: ['image/webp'],
    },
};

module.exports = nextConfig;
