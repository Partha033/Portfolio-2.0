/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ skip TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip eslint errors during build
  },
};

export default nextConfig;