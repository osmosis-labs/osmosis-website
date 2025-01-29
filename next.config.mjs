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
    ];
  },
};

export default nextConfig;
