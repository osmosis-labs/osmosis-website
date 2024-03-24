import Image from "next/image";
import Link from "next/link";

import NavigationMenu from "@/components/navbar/navigation-menu";

export default function Navbar() {
  return (
    <header className="after:bg-gradient-navbar-border relative flex items-center justify-between py-4 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[''] md:py-3">
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
      <Link
        href={"https://app.osmosis.zone"}
        type="button"
        target="_blank"
        className="inline-flex items-center justify-center rounded-lg bg-wosmongton-50 px-4 py-2.5 transition-colors hover:bg-wosmongton-800 md:rounded-[10px] md:px-3 md:py-2 lg:rounded-xl lg:px-4 lg:py-2.5 xl:rounded-[10px] 2xl:rounded-xl"
      >
        <span className="text-sm leading-[22px]">Open the App</span>
      </Link>
    </header>
  );
}
