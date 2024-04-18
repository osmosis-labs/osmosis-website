/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "pbs.twimg.com",
        protocol: "https",
      },
    ],
  },
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
