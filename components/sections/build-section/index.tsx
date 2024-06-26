import Badge from "@/components/shared/badge";
import Card, { CardProps } from "@/components/shared/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BuildCardProps = CardProps & {
  firstRow?: boolean;
};

const cards: BuildCardProps[] = [
  {
    title: "Developers Docs",
    description: "Roll up your sleeves and start building.",
    iconUri: "/assets/build/card-icons/docs.svg",
    link: "https://docs.osmosis.zone/",
    illustration: (
      <Image
        src={"/assets/build/illustrations/docs.svg"}
        alt="Developer docs illustration"
        width={131}
        height={122}
        className="absolute right-4 top-2 z-10 opacity-50 sm:right-6 sm:top-12 sm:opacity-100 md:top-9 md:h-[109px] md:w-[117px] lg:right-4.5 lg:top-[50px] lg:h-[159px] lg:w-[171px] xl:top-10 xl:h-[177px] xl:w-[190px] 2xl:right-7.5 2xl:top-8.5 2xl:h-[191px] 2xl:w-[205px]"
      />
    ),
  },
  {
    title: "Grants",
    description: "Get funding to build something.",
    iconUri: "/assets/build/card-icons/grants.svg",
    link: "https://grants.osmosis.zone/",
    illustration: (
      <Image
        src={"/assets/build/illustrations/grants.svg"}
        alt="Grants illustration"
        width={177}
        height={112}
        className="absolute -right-3 top-8 z-10 opacity-50 sm:right-0 sm:top-16.5 sm:opacity-100 md:h-26 md:w-[165px] lg:top-[78px] lg:h-[153px] lg:w-[228px] xl:top-[70px] xl:h-[168px] xl:w-[246px] 2xl:-right-1.5 2xl:top-15 2xl:h-[191px] 2xl:w-[294px]"
      />
    ),
  },
  {
    title: "Github",
    description: "Osmosis is open-source and audited.",
    iconUri: "/assets/build/card-icons/github.svg",
    link: "https://github.com/osmosis-labs",
    illustration: (
      <Image
        src={"/assets/build/illustrations/github.svg"}
        alt="Github illustration"
        width={188}
        height={91}
        className="absolute right-3 top-8 z-10 opacity-50 sm:right-4 sm:top-16 sm:opacity-100 md:top-17.5 md:h-[81px] md:w-[167px] lg:right-0 lg:top-[102px] lg:h-[117px] lg:w-[226px] xl:top-[92px] xl:h-[136px] xl:w-[264px] 2xl:right-2 2xl:top-[81px] 2xl:h-[159px] 2xl:w-[328px]"
      />
    ),
  },
  {
    title: "Discord",
    description: "Chat with fellow developers and validators.",
    // these widths are temp, waiting for copy adaptation
    descriptionClassName: "lg:w-[240px] xl:w-[300px] 2xl:w-auto",
    iconUri: "/assets/build/card-icons/discord.svg",
    link: "https://discord.com/invite/osmosis",
    illustration: (
      <Image
        src={"/assets/build/illustrations/discord.svg"}
        alt="Discord illustration"
        width={123}
        height={142}
        className="absolute -top-2 right-4 z-10 opacity-50 sm:right-16 sm:top-6 sm:opacity-100 md:right-14 md:top-7.5 md:h-[133px] md:w-[115px] lg:right-13 lg:top-10.5 lg:h-52 lg:w-[180px] xl:top-6 xl:h-[235px] xl:w-[209px] 2xl:right-12 2xl:top-7.5 2xl:h-[231px] 2xl:w-[217px]"
      />
    ),
  },
];

export default function BuildSection() {
  return (
    <section className="relative z-10 mt-28 flex flex-col items-center justify-center gap-8 self-stretch rounded-4xl p-2 sm:mt-30 sm:p-4 md:mt-39 lg:mt-32 xl:mt-44 2xl:mt-[152px] 2xl:gap-14 2xl:p-6">
      <div className="flex flex-col items-center gap-4">
        <Badge label="Developers" />
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="bg-build-headline font-poppins text-3.5xl font-medium leading-8.75 -tracking-2% md:text-4xl md:leading-9.75 lg:text-5xl lg:leading-13 xl:text-5.5xl xl:leading-15.25 2xl:text-6.25xl 2xl:leading-17.5">
            Build the next <br /> disruptive DeFi App.
          </h2>
          <p className="font-light leading-5.5 text-neutral-100 lg:text-xl">
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

function BuildCard(props: BuildCardProps) {
  return (
    <Card
      {...props}
      className={cn("h-auto max-sm:gap-13 sm:h-60 lg:h-[260px]")}
      linkArrowIconUri={"/assets/build/card-icons/link-arrow.svg"}
      linkArrowClassName={"w-8 h-8"}
      gradientOverlay={
        <div className="bg-build-card-radial absolute inset-0 max-sm:scale-y-[-1]" />
      }
    />
  );
}
