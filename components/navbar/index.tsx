import Image from "next/image";
import Link from "next/link";

import NavigationMenu from "@/components/navbar/navigation-menu";
import { GTagLink } from "@/components/shared/gtag-link";

export default function Navbar() {
  return (
    <header className="after:bg-gradient-navbar-border relative flex items-center justify-between bg-osmoverse-850 p-4 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[''] sm:px-24 sm:py-4 md:px-16 md:py-3 lg:px-8 xl:px-16 2xl:px-12">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/osmo-logo.svg"}
          alt="Osmosis Logo"
          width={130}
          height={32}
          priority
        />
      </Link>
      <NavigationMenu className="max-lg:hidden" />
      <GTagLink asChild eventName="buttonClicked" label="Open the App">
        <Link
          href={"https://app.osmosis.zone?utm_source=osmosis_landing_page"}
          target="_blank"
          className="inline-flex items-center justify-center rounded-lg bg-wosmongton-50 px-4 py-2.5 transition-colors hover:bg-wosmongton-800 md:rounded-[10px] md:px-3 md:py-2 lg:rounded-xl lg:px-4 lg:py-2.5 xl:rounded-[10px] 2xl:rounded-xl"
        >
          <span className="text-sm leading-5.5">Open the App</span>
        </Link>
      </GTagLink>
    </header>
  );
}
