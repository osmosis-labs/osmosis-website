import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "@/components/navbar/dropdown-menu";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Earn",
    href: "https://app.osmosis.zone/earn?utm_source=osmosis_landing_page",
  },
  {
    label: "Trade",
    href: "https://app.osmosis.zone?utm_source=osmosis_landing_page",
  },
  {
    label: "Assets",
    href: "https://app.osmosis.zone/assets?utm_source=osmosis_landing_page",
  },
];

export default function NavigationMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "has-[div[data-headlessui-state='open']]:bg-gradient-navbar-menu-open z-50 flex items-center gap-2 rounded-full border border-[#9084CF40] px-8 py-4 backdrop-blur-xl lg:px-4 lg:py-2",
        className,
      )}
    >
      {links.map(({ label, href }) => (
        <Fragment key={label}>
          <Link href={href}>{label}</Link>
          <Image
            src={"/assets/icons/nav-links-divider.svg"}
            alt="Nav Divider"
            className="opacity-25"
            width={4}
            height={4}
          />
        </Fragment>
      ))}
      <DropdownMenu />
    </nav>
  );
}
