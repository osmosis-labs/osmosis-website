"use client";

import DiamondGradient from "@/components/navbar/diamond-gradient";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

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
    icon: "/assets/icons/x.svg",
    href: "#",
  },
  {
    name: "Reddit",
    icon: "/assets/icons/reddit.svg",
    href: "#",
  },
  {
    name: "Telegram",
    icon: "/assets/icons/telegram.svg",
    href: "#",
  },
];

export function DropwdownMenu() {
  return (
    <Menu>
      <Menu.Button className="inline-flex items-center">
        <span className="font-body1 text-body1">More</span>
        <Image
          src={"/assets/icons/arrow-drop-down.svg"}
          alt="Arrow dropdown"
          width={20}
          height={20}
        />
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
                    <DropdownMenuLink key={label} href={href} label={label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2.5">
            <div className="h-[1px] flex-1 bg-osmoverse-750" />
            <Image
              src={"/assets/icons/star-divider.svg"}
              alt="Divider"
              width={14}
              height={14}
            />
            <div className="h-[1px] flex-1 bg-osmoverse-750" />
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
                    alt={`${name} social link`}
                    width={20}
                    height={20}
                    className="max-h-5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

interface DropdownMenuLinkProps {
  label: string;
  href: string;
}

function DropdownMenuLink({ href, label }: DropdownMenuLinkProps) {
  return (
    <Menu.Item>
      <Link href={href} className="group flex items-center gap-1">
        <div className="flex flex-col gap-1">
          <span className="body1 whitespace-nowrap">{label}</span>
          <div className="h-[1px] w-0 bg-[#F7F7F7] transition-all group-hover:w-[calc(100%_+_16px)]" />
        </div>
        <Image
          src={"/assets/icons/arrow-up-right.svg"}
          alt={`${label} Link`}
          width={16}
          height={16}
          className="mb-1 h-auto w-auto"
        />
      </Link>
    </Menu.Item>
  );
}