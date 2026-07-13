/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All images are served locally from /public/images.
    // If you later load images from an external CMS or photo host,
    // add the domain here under `remotePatterns`.
    unoptimized: false,
  },
};

module.exports = nextConfig;
