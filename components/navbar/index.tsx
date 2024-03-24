import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { DropwdownMenu } from "@/components/navbar/dropdown-menu";

const links = [
  {
    label: "Earn",
    href: "#",
  },
  {
    label: "Trade",
    href: "#",
  },
  {
    label: "Assets",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="after:bg-gradient-navbar-border relative flex items-center justify-between px-10 py-3 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-['']">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/osmo-logo.svg"}
          alt="Osmosis Logo"
          width={130}
          height={32}
          priority
        />
      </Link>
      <nav
        className={cn(
          "has-[div[data-headlessui-state='open']]:bg-gradient-navbar-menu-open relative flex items-center gap-2 rounded-full border border-[#9084CF40] px-4 py-2",
        )}
      >
        {links.map(({ label, href }) => (
          <Fragment key={label}>
            <Link href={href} className="font-body1 text-body1">
              {label}
            </Link>
            <Image
              src={"/assets/icons/nav-links-divider.svg"}
              alt="Nav Divider"
              className="opacity-25"
              width={4}
              height={4}
            />
          </Fragment>
        ))}
        <DropwdownMenu />
      </nav>
      <Link
        href={"https://app.osmosis.zone"}
        type="button"
        target="_blank"
        className="inline-flex items-center justify-center rounded-xl bg-wosmongton-50 px-4 py-2.5 transition-colors hover:bg-wosmongton-800"
      >
        <span className="font-body1 text-body1">Open the App</span>
      </Link>
    </header>
  );
}
