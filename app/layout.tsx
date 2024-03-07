import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import osmosisLogo from "@/assets/icons/osmo-logo.svg";

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
        className={`bg-osmoverse-900 ${inter.className} ${poppins.className}`}
      >
        <header className="after:bg-gradient-navbar-border relative flex items-center justify-between px-10 py-3 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-['']">
          <Image src={osmosisLogo} alt="Osmosis Logo" width={130} height={32} />
          <span>navbar</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-wosmongton-50 px-4 py-2.5 transition-colors hover:bg-wosmongton-800"
          >
            <span className="font-body1 text-body1">Open the App</span>
          </button>
        </header>
        {children}
        <footer className="mb-11">
          <div className="mx-auto flex h-[345px] w-full max-w-content items-center justify-center bg-osmoverse-900">
            footer
          </div>
        </footer>
      </body>
    </html>
  );
}
