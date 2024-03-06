import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "800"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const metadataBase = process.env.SITE_URL
  ? new URL(`https://${process.env.SITE_URL}`)
  : new URL("https://osmosis.zone");

export const metadata: Metadata = {
  metadataBase,
  title: "Osmosis",
  description:
    "Swap, earn, and build on the leading decentralized Cosmos exchange.",
  openGraph: {
    locale: "en_US",
    type: "website",
    siteName: "Osmosis",
  },
  twitter: {
    site: "@osmosiszone",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="text-white-full"
      style={{
        fontFamily: inter.style.fontFamily,
      }}
    >
      <body
        className={`bg-osmoverse-1000 ${inter.className} ${poppins.className}`}
      >
        <header className="after:bg-gradient-navbar-border relative flex h-[70px] items-center justify-between after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-['']">
          <div></div>
          <span>navbar</span>
          <div></div>
        </header>
        {children}
      </body>
    </html>
  );
}
