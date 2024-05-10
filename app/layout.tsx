import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavigationMenu from "@/components/navbar/navigation-menu";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@/patched/next-third-parties/gtm";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500"],
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
    title: "Osmosis",
    description:
      "Swap, earn, and build on the leading decentralized Cosmos exchange.",
  },
  twitter: {
    site: "@osmosiszone",
    title: "Osmosis",
    description:
      "Swap, earn, and build on the leading decentralized Cosmos exchange.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const bannerHidden = cookies().get("bannerHidden")?.value;
  const nonce = headers().get("x-nonce");

  console.log("nonce: ", nonce);

  return (
    <html
      lang="en"
      className="text-white-full"
      style={{
        fontFamily: inter.style.fontFamily,
      }}
    >
      <GoogleTagManager nonce={nonce} gtmId={process.env.GTAG_ID ?? ""} />
      <body
        className={`bg-osmoverse-850 ${inter.variable} ${poppins.variable} container max-sm:px-4 sm:max-w-[448px] md:max-w-screen-sm lg:max-w-[960px] xl:max-w-[1152px] 2xl:max-w-[1440px]`}
      >
        <div className="fixed left-0 top-0 z-[999] flex w-screen max-w-none flex-col">
          {/* {!bannerHidden && <Banner />} */}
          <Navbar />
        </div>
        {children}
        <Footer />
        <div className="fixed inset-x-0 bottom-8 z-[999] flex w-full justify-center lg:hidden">
          <NavigationMenu />
        </div>
      </body>
    </html>
  );
}
