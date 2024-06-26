import Divider from "@/components/shared/divider";
import Image from "next/image";
import Link from "next/link";

interface Section {
  title: string;
  links: { label: string; href: string }[];
}

const sections: Section[] = [
  {
    title: "Platform",
    links: [
      {
        label: "Trade",
        href: "https://app.osmosis.zone?utm_source=osmosis_landing_page&utm_campaign=swap",
      },
      {
        label: "Assets",
        href: "https://app.osmosis.zone/assets?utm_source=osmosis_landing_page&utm_campaign=assets",
      },
      {
        label: "Earn",
        href: "https://app.osmosis.zone/earn?utm_source=osmosis_landing_page&utm_campaign=earn",
      },
      {
        label: "Staking",
        href: "https://app.osmosis.zone/stake?utm_source=osmosis_landing_page&utm_campaign=stake",
      },
      {
        label: "Pools",
        href: "https://app.osmosis.zone/pools?utm_source=osmosis_landing_page&utm_campaign=pools",
      },
      {
        label: "Apps",
        href: "https://app.osmosis.zone/apps?utm_source=osmosis_landing_page&utm_campaign=apps",
      },
    ],
  },
  {
    title: "Token",
    links: [
      {
        label: "OSMO",
        href: "https://app.osmosis.zone/assets/OSMO?utm_source=osmosis_landing_page&utm_campaign=assets-osmo",
      },
      {
        label: "CoinGecko",
        href: "https://www.coingecko.com/en/coins/osmosis",
      },
      {
        label: "CoinMarketCap",
        href: "https://coinmarketcap.com/currencies/osmosis/",
      },
      {
        label: "Governance",
        href: "https://support.osmosis.zone/tutorials/governance",
      },
      {
        label: "Vote",
        href: "https://daodao.zone/gov/osmosis/proposals",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "X (Twitter)",
        href: "https://twitter.com/osmosiszone",
      },
      {
        label: "Telegram",
        href: "https://t.me/osmosis_chat",
      },
      {
        label: "Discord",
        href: "https://discord.com/invite/osmosis",
      },
      {
        label: "Forum",
        href: "https://forum.osmosis.zone/",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Docs",
        href: "https://docs.osmosis.zone/",
      },
      {
        label: "GitHub",
        href: "https://github.com/osmosis-labs",
      },
      {
        label: "Grants",
        href: "https://grants.osmosis.zone/",
      },
    ],
  },
  {
    title: "Team",
    links: [
      {
        label: "Contact",
        href: "https://support.osmosis.zone/",
      },
      {
        label: "Blog",
        href: "https://forum.osmosis.zone/c/blog/13",
      },
      {
        label: "Careers",
        href: "https://boards.greenhouse.io/osmosisdex",
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

export default function Footer() {
  return (
    <footer className="mb-7 self-stretch px-2 sm:mb-8 sm:px-4 md:mb-17.5 lg:mb-16 xl:mb-[38px] 2xl:mb-[54px] 2xl:px-6">
      <div className="flex flex-col gap-2 self-stretch lg:gap-4 2xl:gap-6">
        {/**divider */}
        <Divider className="py-6" />
        <div className="relative grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:max-w-[764px] lg:grid-cols-5 lg:gap-x-4 2xl:max-w-[1020px] 2xl:gap-x-20">
          {sections.map(({ links, title }) => (
            <div key={title} className="flex flex-col gap-2.5">
              <span className="whitespace-nowrap text-sm font-light leading-5.25 text-alpha-60">
                {title}
              </span>
              <div className="flex flex-col gap-0.5">
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-center gap-1 p-0.5 lg:gap-0.5"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 lg:gap-0.5">
                        <span className="whitespace-nowrap font-light">
                          {label}
                        </span>
                      </div>
                      <div className="h-[1px] w-0 bg-neutral-100 transition-all group-hover:w-[calc(100%_+_16px)]" />
                    </div>
                    <Image
                      src={"/assets/icons/arrow-up-right.svg"}
                      alt={`${label} Link`}
                      width={16}
                      height={16}
                      className="mb-1 w-0 transition-all group-hover:h-4 group-hover:w-4"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Image
            src={"/assets/footer-ion.svg"}
            alt="Footer ion"
            width={170}
            height={150}
            className="absolute -bottom-2.5 right-4.5 sm:bottom-4 sm:right-0 md:bottom-6.5 md:right-[54px] lg:-bottom-[136px] lg:right-6.5 lg:h-[158px] lg:w-[180px] xl:-right-[285px] xl:bottom-10 xl:h-[174px] xl:w-[198px] 2xl:-right-[338px] 2xl:-top-5 2xl:bottom-0 2xl:h-52 2xl:w-[236px]"
          />
        </div>
        {/**divider */}
        <Divider className="py-6" />
        <div className="flex flex-col gap-8 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex items-center justify-between sm:w-[351px] lg:w-auto lg:gap-8">
            <Link href={"/"}>
              <Image
                src={"/assets/icons/osmo-logo.svg"}
                alt="Osmosis Logo"
                width={167}
                height={40}
              />
            </Link>
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
          <span className="text-sm leading-5.5 text-alpha-60">
            © Osmosis 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
