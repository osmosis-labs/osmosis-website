import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface Card {
  title: string;
  description: string;
  descriptionClassName?: string;
  iconUri: string;
  illustration: ReactElement;
  link?: string;
}

const cards: Card[] = [
  {
    title: "Developers Docs",
    description: "Roll up your sleeves and start building.",
    iconUri: "/assets/build/card-icons/docs.svg",
    link: "#",
    illustration: (
      <Image
        src={"/assets/build/illustrations/docs.svg"}
        alt="Developer docs illustration"
        width={131}
        height={122}
        // md:top-xx is temp, waiting for copy adaptations
        className="absolute right-[25px] top-12 z-10 md:top-9 md:h-[109px] md:w-[117px] lg:right-4.5 lg:top-[50px] lg:h-[159px] lg:w-[171px] xl:top-10 xl:h-[177px] xl:w-[190px] 2xl:right-7.5 2xl:top-8.5 2xl:h-[191px] 2xl:w-[205px]"
      />
    ),
  },
  {
    title: "Grants",
    description: "Get funding to build something.",
    iconUri: "/assets/build/card-icons/grants.svg",
    link: "#",
    illustration: (
      <Image
        src={"/assets/build/illustrations/grants.svg"}
        alt="Grants illustration"
        width={177}
        height={112}
        className="absolute right-0 top-16.5 z-10 md:h-26 md:w-[165px] lg:top-[78px] lg:h-[153px] lg:w-[228px] xl:top-[70px] xl:h-[168px] xl:w-[246px] 2xl:-right-1.5 2xl:top-15 2xl:h-[191px] 2xl:w-[294px]"
      />
    ),
  },
  {
    title: "Github",
    description: "Osmosis is open-source and audited.",
    iconUri: "/assets/build/card-icons/github.svg",
    link: "#",
    illustration: (
      <Image
        src={"/assets/build/illustrations/github.svg"}
        alt="Github illustration"
        width={188}
        height={91}
        className="absolute right-4 top-16 z-10 md:top-17.5 md:h-[81px] md:w-[167px] lg:right-0 lg:top-[102px] lg:h-[117px] lg:w-[226px] xl:top-[92px] xl:h-[136px] xl:w-[264px] 2xl:right-2 2xl:top-[81px] 2xl:h-[159px] 2xl:w-[328px]"
      />
    ),
  },
  {
    title: "Discord",
    description: "Chat with fellow developers and validators.",
    // these widths are temp, waiting for copy adaptation
    descriptionClassName: "lg:w-[240px] xl:w-[300px] 2xl:w-auto",
    iconUri: "/assets/build/card-icons/discord.svg",
    link: "#",
    illustration: (
      <Image
        src={"/assets/build/illustrations/discord.svg"}
        alt="Discord illustration"
        width={123}
        height={142}
        className="absolute right-[62px] top-6 z-10 md:right-14 md:top-7.5 md:h-[133px] md:w-[115px] lg:right-13 lg:top-10.5 lg:h-52 lg:w-[180px] xl:top-6 xl:h-[235px] xl:w-[209px] 2xl:right-12 2xl:top-7.5 2xl:h-[231px] 2xl:w-[217px]"
      />
    ),
  },
];

export default function BuildSection() {
  return (
    <section className="relative z-10 mt-28 flex flex-col items-center justify-center gap-8 self-stretch rounded-4xl p-2 sm:mt-30 sm:p-4 md:mt-39 lg:mt-32 xl:mt-44 2xl:mt-[152px] 2xl:gap-14 2xl:p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex max-w-max items-center justify-center rounded-full bg-malachite-alpha-200 px-3 py-1 backdrop-blur-xl">
          <span className="leading-5.5 lg:leading-6.25 text-sm text-malachite-200 lg:text-base">
            Developers
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="bg-build-headline xl:text-5.5xl 2xl:text-6.25xl leading-8.75 md:leading-9.75 lg:leading-13 xl:leading-15.25 2xl:leading-17.5 font-poppins text-3.5xl font-medium -tracking-[0.64px] md:text-4xl md:-tracking-[0.72px] lg:text-5xl lg:-tracking-[0.96px] xl:-tracking-[1.12px] 2xl:-tracking-[1.28px]">
            Build the next <br /> disruptive DeFi App.
          </h2>
          <p className="leading-5.5 font-light text-neutral-100 lg:text-xl">
            Osmosis empowers developers to <br className="md:hidden" />
            innovate.
          </p>
        </div>
      </div>
      {/**stack */}
      <div className="flex flex-col items-center gap-2 self-stretch xl:gap-4">
        {/**row */}
        <div className="flex flex-col items-center gap-2 self-stretch md:grid md:grid-cols-2 xl:gap-4">
          {cards.slice(0, 2).map((props) => (
            <BuildCard key={props.title} {...props} />
          ))}
        </div>
        {/**row */}
        <div className="flex flex-col items-center gap-2 self-stretch md:grid md:grid-cols-2 xl:gap-4">
          {cards.slice(2, 4).map((props) => (
            <BuildCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildCard({
  description,
  iconUri,
  illustration,
  title,
  link,
  descriptionClassName,
}: Card) {
  return (
    <div className="relative flex h-60 flex-grow flex-col justify-between self-stretch overflow-hidden rounded-2xl border border-solid border-osmoverse-650 bg-osmoverse-775 p-4 lg:h-[260px] xl:rounded-3xl 2xl:p-6">
      {illustration}
      <div className="bg-build-card-radial absolute inset-0" />
      <div className="relative z-20 flex items-center justify-between">
        <Image src={iconUri} alt={`${title} icon`} width={24} height={24} />
        {link && (
          <Link href={link}>
            <Image
              src={"/assets/build/card-icons/link-arrow.svg"}
              alt="Link"
              width={32}
              height={32}
            />
          </Link>
        )}
      </div>
      <div className="relative z-20 flex flex-col gap-2">
        <h5 className="leading-6.5 font-poppins text-xl font-medium text-neutral-100 2xl:text-2xl 2xl:leading-[31px]">
          {title}
        </h5>
        <p
          className={cn(
            "leading-6.25 self-stretch text-alpha-60",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
