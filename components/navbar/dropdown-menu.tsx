"use client";

import DiamondGradient from "@/components/navbar/diamond-gradient";
import Divider from "@/components/shared/divider";
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
        href: "https://support.osmosis.zone/tutorials/governance",
      },
      {
        label: "Analytics",
        href: "https://www.datalenses.zone/chain/osmosis/overview",
      },
    ],
  },
  {
    name: "Developers",
    links: [
      {
        label: "Documentation",
        href: "https://docs.osmosis.zone/",
      },
      {
        label: "Contribute",
        href: "https://docs.osmosis.zone/osmosis-core/contributing/",
      },
    ],
  },
  {
    name: "Resources",
    links: [
      {
        label: "Brand Kit",
        href: "https://drive.google.com/u/1/uc?id=1rKUX9X7EyJylDlrYT6wBIgziT53CQr7G",
      },
      {
        label: "Developer Docs",
        href: "https://docs.osmosis.zone/",
      },
    ],
  },
  {
    name: "Need Help?",
    links: [
      {
        label: "Support Lab",
        href: "https://support.osmosis.zone/",
      },
    ],
  },
];

const socials = [
  {
    name: "X",
    icon: "/assets/icons/x.svg",
    href: "https://twitter.com/osmosiszone",
  },
  {
    name: "Reddit",
    icon: "/assets/icons/reddit.svg",
    href: "https://www.reddit.com/r/OsmosisLab/",
  },
  {
    name: "Telegram",
    icon: "/assets/icons/telegram.svg",
    href: "https://t.me/osmosis_chat",
  },
];

export function DropdownMenu() {
  return (
    <Menu>
      <Menu.Button className="inline-flex items-center">
        <span>More</span>
        <Image
          src={"/assets/icons/arrow-drop-down.svg"}
          alt="Arrow dropdown"
          width={20}
          height={20}
          className="max-lg:rotate-180"
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
        <div className="absolute inset-x-0 flex min-w-max -translate-x-2.5 justify-center max-lg:bottom-16 lg:top-16 lg:-translate-x-6">
          <Menu.Items className="relative flex w-[331px] origin-top flex-col gap-6 overflow-hidden rounded-2xl border border-osmoverse-750 bg-[#160F38] p-8">
            <DiamondGradient
              colors={["#FF8642", "#EB26EB", "#492CE1"]}
              height={450}
              width={350}
              paddingLeft={50}
              paddingTop={50}
              className="absolute bottom-56 right-36 rotate-[25deg]"
            />
            <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-6">
              {menuLinks.map(({ name, links }) => (
                <div key={name} className="col-span-1 flex flex-col gap-2.5">
                  <span className="text-sm font-light leading-5.25 text-alpha-60">
                    {name}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {links.map(({ label, href }) => (
                      <DropdownMenuLink key={label} href={href} label={label} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Divider imageH={14} imageW={14} className="py-1" />
            <div className="flex w-full items-center justify-between">
              <span className="text-sm leading-5.25 text-alpha-60">
                Connect with us
              </span>
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
        </div>
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
      <Link href={href} className="group flex items-center gap-0.5">
        <div className="flex flex-col gap-0.5 p-0.5">
          <span className="whitespace-nowrap font-light leading-6">
            {label}
          </span>
          <div className="h-[1px] w-0 bg-[#F7F7F7] transition-all group-hover:w-[calc(100%_+_16px)]" />
        </div>
        <Image
          src={"/assets/icons/arrow-up-right.svg"}
          alt={`${label} Link`}
          width={16}
          height={16}
          className="mb-1 w-0 transition-all group-hover:h-4 group-hover:w-4"
        />
      </Link>
    </Menu.Item>
  );
}
