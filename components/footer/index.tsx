import Image from "next/image";
import Link from "next/link";

interface Section {
  title: string;
  links: { label: string; href: string; isNew?: boolean }[];
}

const sections: Section[] = [
  {
    title: "Governance",
    links: [
      {
        label: "Trade",
        href: "#",
      },
      {
        label: "Assets",
        href: "#",
      },
      {
        label: "Earn",
        href: "#",
      },
      {
        label: "Staking",
        href: "#",
      },
      {
        label: "Pools",
        href: "#",
      },
      {
        label: "Apps",
        href: "#",
      },
    ],
  },
  {
    title: "Token",
    links: [
      {
        label: "OSMO",
        href: "#",
      },
      {
        label: "CoinGecko",
        href: "#",
      },
      {
        label: "CoinMarketCap",
        href: "#",
      },
      {
        label: "Governance",
        href: "#",
      },
      {
        label: "Vote",
        href: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "X (Twitter)",
        href: "#",
      },
      {
        label: "Telegram",
        href: "#",
      },
      {
        label: "Discord",
        href: "#",
      },
      {
        label: "Forum",
        href: "#",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Docs",
        href: "#",
      },
      {
        label: "GitHub",
        href: "#",
      },
      {
        label: "Grants",
        href: "#",
      },
    ],
  },
  {
    title: "Team",
    links: [
      {
        label: "Contact",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
        isNew: true,
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

export default function Footer() {
  return (
    <footer className="mb-7 self-stretch px-2 sm:mb-8 sm:px-4 md:mb-17.5 lg:mb-16 xl:mb-[38px] 2xl:mb-[54px] 2xl:px-6">
      <div className="flex flex-col gap-2 self-stretch lg:gap-4 2xl:gap-6">
        {/**divider */}
        <div className="flex items-center gap-2.5 py-6">
          <div className="h-[1px] flex-1 bg-osmoverse-750" />
          <Image
            src={"/assets/icons/star-divider.svg"}
            alt="Divider"
            width={21}
            height={21}
          />
          <div className="h-[1px] flex-1 bg-osmoverse-750" />
        </div>
        <div className="relative grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:max-w-[764px] lg:grid-cols-5 lg:gap-x-4 2xl:max-w-[1020px] 2xl:gap-x-20">
          {sections.map(({ links, title }) => (
            <div key={title} className="flex flex-col gap-2.5">
              <span className="whitespace-nowrap text-sm font-light leading-[21px] text-[#F9F8F799]">
                {title}
              </span>
              <div className="flex flex-col gap-0.5">
                {links.map(({ label, href, isNew }) => (
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
                        {isNew && (
                          <div className="flex items-center justify-center rounded-full bg-wosmongton-700 px-1.5 py-0.5">
                            <span className="text-[10px] leading-4 text-neutral-100 lg:text-xs lg:leading-[19px]">
                              NEW
                            </span>
                          </div>
                        )}
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
        <div className="flex items-center gap-2.5 py-6">
          <div className="h-[1px] flex-1 bg-osmoverse-750" />
          <Image
            src={"/assets/icons/star-divider.svg"}
            alt="Divider"
            width={21}
            height={21}
          />
          <div className="h-[1px] flex-1 bg-osmoverse-750" />
        </div>
        <div className="flex flex-col gap-8 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex items-center justify-between sm:w-[351px] lg:w-auto lg:gap-8">
            <Image
              src={"/assets/icons/osmo-logo.svg"}
              alt="Osmosis Logo"
              width={167}
              height={40}
            />
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
          <span className="text-sm leading-[22px] text-[#F9F8F799]">
            © Osmosis 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
