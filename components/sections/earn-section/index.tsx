import Badge from "@/components/shared/badge";
import Card, { CardProps } from "@/components/shared/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type EarnCardProps = CardProps & {
  firstRow?: boolean;
};

const cards: EarnCardProps[] = [
  {
    title: "Liquidity Pools",
    description:
      "Capital efficient pools with granular control, low-slippage, and over $72M supply side revenue for liquidity providers.",
    iconUri: "/assets/earn/card-icons/pool-gray.svg",
    illustration: (
      <Image
        src={"/assets/earn/illustrations/pool.svg"}
        alt="Liquidity pools illustration"
        width={135}
        height={135}
        className="absolute right-15 top-12 z-10 md:right-14 md:top-7.5 md:h-[141px] md:w-[141px] lg:right-11 lg:h-[127px] lg:w-[127px] xl:top-0 xl:h-41 xl:w-42 2xl:right-10.5 2xl:top-16 2xl:h-[198px] 2xl:w-[198px]"
      />
    ),
    badgeDescription: "100+ Chains",
  },
  {
    title: "Perpetuals",
    description: "Trade at up to 30x leverage or earn by providing liquidity.",
    descriptionClassName: "lg:w-[229px] 2xl:w-full",
    iconUri: "/assets/earn/card-icons/perps-gray.svg",
    illustration: (
      <Image
        src={"/assets/earn/illustrations/perps.svg"}
        alt="Perpetuals illustration"
        width={170}
        height={100}
        className="absolute right-10 top-[84px] z-10 md:top-[62px] lg:right-9 lg:top-16 lg:h-[89px] lg:w-[151px] xl:top-11 xl:h-[115px] xl:w-[195px] 2xl:right-6 2xl:top-30 2xl:h-[151px] 2xl:w-64"
      />
    ),
    link: "https://www.levana.finance/",
    badgeDescription: (
      <p className="inline-flex items-center gap-1 text-sm font-light leading-5.25 text-neutral-100">
        Powered by
        <span className="inline-flex items-center gap-1 px-0.5">
          <Image
            src={"/assets/earn/card-links/levana.svg"}
            alt="Levana icon"
            width={24}
            height={24}
          />
          <span className="font-normal">Levana</span>
        </span>
      </p>
    ),
  },
  {
    title: "Margin Trading",
    description:
      "Lend and borrow assets on the largest lending and margin trading platform in Cosmos.",
    descriptionClassName: "lg:w-[258px] 2xl:w-full",
    iconUri: "/assets/earn/card-icons/margin-gray.svg",
    illustration: (
      <Image
        src={"/assets/earn/illustrations/margin.svg"}
        alt="Margin Trading illustration"
        width={175}
        height={175}
        className="absolute right-10 top-8 z-10 md:right-9 md:top-6 md:h-[186px] md:w-[186px] lg:right-3 lg:top-9 lg:h-[157px] lg:w-[157px] xl:top-1 xl:h-[193px] xl:w-[193px] 2xl:right-1 2xl:top-24 2xl:h-[250px] 2xl:w-[250px]"
      />
    ),
    link: "https://osmosis.marsprotocol.io/",
    badgeDescription: (
      <p className="inline-flex items-center gap-1 text-sm font-light leading-5.25 text-neutral-100">
        Powered by
        <span className="inline-flex items-center gap-1 px-0.5">
          <Image
            src={"/assets/earn/card-links/mars.svg"}
            alt="Mars icon"
            width={24}
            height={24}
          />
          <span className="font-normal">Mars</span>
        </span>
      </p>
    ),
  },
  {
    title: "Liquid Staking",
    description: "Dead simple staking, no staking lock-ups.",
    iconUri: "/assets/earn/card-icons/liquid-gray.svg",
    link: "https://app.stride.zone/?chain=OSMO",
    illustration: (
      <Image
        src={"/assets/earn/illustrations/liquid.svg"}
        alt="Liquid Staking illustration"
        width={235}
        height={196}
        className="absolute right-0 top-9 z-10 md:top-10.5 lg:right-4 lg:top-6 lg:h-[198px] lg:w-[237px] xl:right-4.5 xl:top-1 xl:h-[238px] xl:w-[285px] 2xl:right-0 2xl:top-8 2xl:h-[300px] 2xl:w-[368px]"
      />
    ),
    badgeDescription: (
      <p className="inline-flex items-center gap-1 text-sm font-light leading-5.25 text-neutral-100">
        Powered by
        <Image
          src={"/assets/earn/card-links/staking-apps.svg"}
          alt="Staking Apps icon"
          width={91}
          height={24}
        />
      </p>
    ),
  },
  {
    title: "More Possibilities",
    description: "Explore a growing ecosystem of apps on Osmosis",
    descriptionClassName: "lg:w-[298px] 2xl:w-[355px]",
    iconUri: "/assets/earn/card-icons/apps-gray.svg",
    illustration: (
      <Image
        src={"/assets/earn/illustrations/apps.svg"}
        alt="More Possibilities illustration"
        width={506}
        height={325}
        className="absolute -left-[70px] bottom-[82px] z-10 h-[325px] w-[506px] max-w-max sm:left-2 md:bottom-9 md:left-[216px] md:h-[304px] md:w-[473px] lg:bottom-10.5 lg:left-12.5 lg:h-[317px] lg:w-[493px] xl:bottom-[50px] xl:left-18 xl:h-[375px] xl:w-[584px] 2xl:-bottom-[218px] 2xl:left-[113px] 2xl:h-[721px] 2xl:w-[721px]"
      />
    ),
    badgeDescription: "Explore Apps",
  },
];

export default function EarnSection() {
  return (
    <section className="bg-earn-section relative z-10 mt-14 flex flex-col rounded-3xl pt-4 sm:rounded-4xl md:mt-16 md:pt-12 lg:rounded-3xl lg:pt-4 xl:mt-18 xl:rounded-4xl xl:pt-8">
      <div className="flex flex-col gap-6 px-2 py-4 sm:p-4 lg:gap-8 2xl:items-start 2xl:gap-14 2xl:p-6">
        <div className="flex flex-col gap-4 2xl:gap-6">
          <Badge label="Put your assets to work" />
          <h2 className="bg-earn-headline font-poppins text-3.5xl font-medium leading-9.5 -tracking-2% md:text-4xl md:leading-11 lg:text-5xl lg:leading-14.5 xl:text-5.5xl xl:leading-17 2xl:text-6.25xl 2xl:leading-20">
            Unlock your <br /> earning potential.
          </h2>
        </div>
        {/**cards stack */}
        <div className="flex flex-col items-center justify-center gap-2 self-stretch xl:gap-4">
          {/**first row */}
          <div className="flex flex-col items-center justify-center gap-2 self-stretch lg:grid lg:grid-cols-3 xl:gap-4">
            {cards.slice(0, 3).map((cardProps) => (
              <EarnCard key={cardProps.title} {...cardProps} firstRow />
            ))}
          </div>
          {/**second row */}
          <div className="flex flex-col items-center justify-center gap-2 self-stretch lg:grid lg:grid-cols-2 xl:gap-4">
            {cards.slice(3, 5).map((cardProps) => (
              <EarnCard key={cardProps.title} {...cardProps} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EarnCard(props: EarnCardProps) {
  return (
    <Card
      {...props}
      badgeClassName="bg-[#87087C]"
      className={cn(
        props.firstRow
          ? "h-[330px] md:h-[280px] lg:h-[330px] 2xl:h-[440px]"
          : "h-[330px] md:h-[280px] lg:h-[284px] 2xl:h-[330px]",
      )}
      linkArrowIconUri={"/assets/earn/card-icons/link-arrow.svg"}
      gradientOverlay={<div className="bg-earn-card-radial absolute inset-0" />}
    />
  );
}
