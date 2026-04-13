/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;
