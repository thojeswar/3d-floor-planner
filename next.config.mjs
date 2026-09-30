/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: '/3d-floor-planner',
};

export default nextConfig;