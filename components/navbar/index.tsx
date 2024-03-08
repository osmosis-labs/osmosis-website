"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

import arrowDropdown from "@/assets/icons/arrow-drop-down.svg";
import arrowUpRight from "@/assets/icons/arrow-up-right.svg";
import navDivider from "@/assets/icons/nav-links-divider.svg";
import osmosisLogo from "@/assets/icons/osmo-logo.svg";
import reddit from "@/assets/icons/reddit.svg";
import starDivider from "@/assets/icons/star-divider.svg";
import telegram from "@/assets/icons/telegram.svg";
import x from "@/assets/icons/x.svg";
import { cn } from "@/lib/utils";

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

const menuLinks = [
  {
    name: "Network",
    links: [
      {
        label: "Governance",
        href: "#",
      },
      {
        label: "Analytics",
        href: "#",
      },
    ],
  },
  {
    name: "Governance",
    links: [
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Foundation",
        href: "#",
      },
    ],
  },
  {
    name: "Resources",
    links: [
      {
        label: "Brand Kit",
        href: "#",
      },
      {
        label: "Developer Docs",
        href: "#",
      },
    ],
  },
  {
    name: "Need Help?",
    links: [
      {
        label: "Support Lab",
        href: "#",
      },
    ],
  },
];

const socials = [
  {
    name: "X",
    icon: x,
    href: "#",
  },
  {
    name: "Reddit",
    icon: reddit,
    href: "#",
  },
  {
    name: "Telegram",
    icon: telegram,
    href: "#",
  },
];

export default function Navbar() {
  const [_, setIsOpen] = useState(false);
  return (
    <header className="after:bg-gradient-navbar-border relative flex items-center justify-between px-10 py-3 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-['']">
      <Link href={"/"}>
        <Image src={osmosisLogo} alt="Osmosis Logo" width={130} height={32} />
      </Link>
      <nav
        className={cn(
          "relative flex items-center gap-2 rounded-full border border-[#9084CF40] px-4 py-2",
          // {
          //   "after:bg-gradient-navbar-menu-open after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-4 after:h-[30px] after:w-full after:content-['']":
          //     isOpen,
          // },
        )}
      >
        {links.map(({ label, href }) => (
          <Fragment key={label}>
            <Link href={href} className="font-body1 text-body1">
              {label}
            </Link>
            <Image
              src={navDivider}
              alt="Nav Divider"
              className="h-1 w-1 opacity-25"
            />
          </Fragment>
        ))}
        <Menu>
          <Menu.Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center"
          >
            <span className="font-body1 text-body1">More</span>
            <Image src={arrowDropdown} alt="Nav Divider" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -right-[30px] top-12 z-50 flex w-[342px] origin-top flex-col gap-6 overflow-hidden rounded-2xl border border-osmoverse-750 bg-[#160F38] p-8">
              <DiamondGradient
                colors={["#FF8642", "#EB26EB", "#492CE1"]}
                height={450}
                width={350}
                paddingLeft={50}
                paddingTop={50}
                className="absolute bottom-56 right-36 rotate-[25deg]"
              />
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {menuLinks.map(({ name, links }) => (
                  <div key={name} className="col-span-1 flex flex-col gap-2.5">
                    <span className="body2 opacity-60">{name}</span>
                    <div className="flex flex-col gap-4">
                      {links.map(({ label, href }) => (
                        <DropdownMenuLink
                          key={label}
                          href={href}
                          label={label}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-2.5">
                <div className="bg-osmoverse-830 h-[1px] flex-1" />
                <Image src={starDivider} alt="Divider" width={14} height={14} />
                <div className="bg-osmoverse-830 h-[1px] flex-1" />
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="body2 opacity-60">Connect with us</span>
                <div className="flex items-center gap-1">
                  {socials.map(({ icon, name, href }) => (
                    <Link
                      href={href}
                      key={name}
                      className="rounded-full p-1.5 transition-colors hover:bg-wosmongton-50"
                    >
                      <Image
                        src={icon}
                        alt="Reddit icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
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

function DiamondGradient({
  colors,
  height,
  width,
  paddingLeft,
  paddingTop,
  className,
}: {
  colors: string[];
  width: number;
  height: number;
  paddingLeft: number;
  paddingTop: number;
  className?: string;
}) {
  const renderDivs = (
    remainingCount: number,
    colors: string[],
    height: number,
    width: number,
  ) => {
    if (remainingCount === 0) return;

    const newHeight = height - paddingLeft * remainingCount;
    const newWidth = width - paddingTop * remainingCount;

    return (
      <div
        style={{
          backgroundColor: colors[colors.length - remainingCount],
          width,
          height,
        }}
        className="flex items-center justify-center"
      >
        {renderDivs(remainingCount - 1, colors, newHeight, newWidth)}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "pointer-events-none flex opacity-30 blur-[60px]",
        className,
      )}
    >
      {renderDivs(colors.length, colors, height, width)}
    </div>
  );
}

function DropdownMenuLink({ href, label }: { label: string; href: string }) {
  return (
    <Menu.Item>
      <Link href={href} className="group flex gap-1">
        <div className="flex flex-col gap-1">
          <span className="body1 whitespace-nowrap">
            {label}
          </span>
          <div className="h-[1px] w-0 bg-[#F7F7F7] transition-all group-hover:w-[calc(100%_+_16px)]" />
        </div>
        <Image
          src={arrowUpRight}
          alt="Governance Link"
          width={16}
          height={16}
        />
      </Link>
    </Menu.Item>
  );
}
