import million from "million/compiler";

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
};

const millionConfig = {
  auto: {
    rsc: true,
  },
};

export default million.next(nextConfig, millionConfig);
