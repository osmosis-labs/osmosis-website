/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
  redirects: () => {
    return [
      {
        source: "/brand",
        destination:
          "https://drive.google.com/u/1/uc?id=1rKUX9X7EyJylDlrYT6wBIgziT53CQr7G",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "osmurica.com|osmosis-foundation.com",
          },
        ],
        permanent: false,
        destination:
          "https://docs.google.com/document/d/1kiFYW90ECPtTb31urVHTOcACGIBXXr03-bPN5t7YvrE",
      },
    ];
  },
};

export default nextConfig;
