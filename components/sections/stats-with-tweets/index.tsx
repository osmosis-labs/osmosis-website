import Divider from "@/components/shared/divider";
import { queryLandingPageMetrics } from "@/lib/queries/numia";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import tweets from "@/lib/tweets";
import BackersSection from "@/components/sections/osmo-cta/backers-section";

interface StatCard {
  title: string;
  value: string;
  iconUri: string;
  bottleUri: string;
  bgClass: string;
  link?: string;
}

export default async function StatsWithTweets() {
  const metrics = await queryLandingPageMetrics();
  const metricFormatter = Intl.NumberFormat("en-US", {
    notation: "standard",
    maximumFractionDigits: 0,
    currency: "USD",
    style: "currency",
  });

  const stats: StatCard[] = [
    {
      title: "All Time Volume",
      value: `${metricFormatter.format(metrics.cumulative_volume.value)}`,
      iconUri: "/assets/icons/rocket-gray.svg",
      bottleUri: "/assets/bottle-blue.svg",
      bgClass: "trend-card-bg-1",
      link: "https://www.datalenses.zone/chain/osmosis/overview",
    },
    {
      title: "Assets on the Platform",
      value: `${metricFormatter.format(metrics.assets_in_chain.value)}`,
      iconUri: "/assets/icons/checkmark-gray.svg",
      bottleUri: "/assets/bottle-red.svg",
      bgClass: "trend-card-bg-2",
      link: "https://www.mintscan.io/osmosis/assets/",
    },
    {
      title: "24h trading volume",
      value: `${metricFormatter.format(metrics.volume_24h.value)}`,
      iconUri: "/assets/icons/trending-gray.svg",
      bottleUri: "/assets/bottle-super.svg",
      bgClass: "trend-card-bg-3",
      link: "https://www.datalenses.zone/chain/osmosis/overview",
    },
  ];

  const upperHalf = tweets.slice(0, 13);
  const lowerHalf = tweets.slice(13, 27);

  return (
    <section className="stats-with-tweets-bg relative z-10 mt-14 rounded-3xl pt-2 sm:mt-16 sm:rounded-4xl sm:pt-4 md:mt-24 md:pt-12 lg:mt-20 lg:pt-16 xl:mt-24 xl:pt-20 2xl:mt-25">
      <div className="relative z-10 flex flex-col gap-8 p-2 sm:p-4 2xl:gap-16">
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex flex-col gap-2 md:flex-row">
            <Image
              src={"/assets/shield.svg"}
              alt="Gradient Shield"
              width={40}
              height={40}
              className="md:h-15 md:w-15"
            />
            <h2 className="font-poppins text-3.5xl font-medium leading-9.5 tracking-[-0.64px] md:text-4xl md:leading-10.75 lg:text-5xl lg:leading-13.75 xl:text-5.5xl xl:leading-16 2xl:leading-17.5">
              <span className="trusted-heading-bg">Trusted</span> by 1+ million{" "}
              <br /> users and counting.
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-2 2xl:gap-4">
            {stats.map((props) => (
              <StatCard key={props.title} {...props} />
            ))}
          </div>
        </div>
        <Divider className="py-6" />
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-3 text-center">
            <span className="font-poppins text-2xl text-neutral-50">
              Don't just take it from us...
            </span>
            <p className="text-xl font-light text-alpha-60">
              Real users show real love for Osmosis.
            </p>
          </div>
          <div className="md:horizontal-mask relative -mx-6 flex h-[555px] w-full overflow-hidden sm:-mx-28 lg:-mx-0 lg:h-[408px]">
            <div className="absolute flex flex-col gap-3 lg:gap-4">
              <div className="tweets-row-marquee-animation tweets-upper-half relative flex gap-2 transition-transform lg:gap-4">
                {upperHalf.concat(upperHalf).map((tweet, i) => (
                  <Tweet key={tweet.tweetLink} {...tweet} />
                ))}
              </div>
              <div className="tweets-row-marquee-animation-reverse tweets-bottom-half relative flex gap-2 transition-transform lg:gap-4">
                {lowerHalf.concat(lowerHalf).map((tweet, i) => (
                  <Tweet key={tweet.tweetLink} {...tweet} />
                ))}
              </div>
            </div>
          </div>
          <span className="text-center text-sm leading-5.5 text-[#9084CFB2] xl:max-w-[640px]">
            These tweets highlight positive feedback from our community of users
            and influencers.
          </span>
          <BackersSection />
        </div>
      </div>
      <Image
        src={"/assets/grids/base/grid-2.svg"}
        alt="Grid 2"
        width={358}
        height={1663}
        className="absolute -bottom-[380px] z-0 h-auto w-full sm:hidden"
      />
      <Image
        src={"/assets/grids/sm/grid-2.svg"}
        alt="Grid 2"
        width={448}
        height={1587}
        className="bottom absolute -bottom-[180px] z-0 hidden h-auto w-full sm:block md:hidden"
      />
      <Image
        src={"/assets/grids/md/grid-2.svg"}
        alt="Grid 2"
        width={640}
        height={1212}
        className="bottom absolute -bottom-[340px] z-0 hidden h-auto w-full md:block lg:hidden"
      />
      <Image
        src={"/assets/grids/lg/grid-2.svg"}
        alt="Grid 2"
        width={962}
        height={758}
        className="bottom absolute -bottom-[340px] z-0 hidden h-auto w-full lg:block xl:hidden"
      />
      <Image
        src={"/assets/grids/xl/grid-2.svg"}
        alt="Grid 2"
        width={1155}
        height={912}
        className="bottom absolute -bottom-[346px] z-0 hidden h-auto w-full xl:block 2xl:hidden"
      />
      <Image
        src={"/assets/grids/2xl/grid-2.svg"}
        alt="Grid 2"
        width={1155}
        height={912}
        className="bottom absolute -bottom-[380px] z-0 hidden h-auto w-full 2xl:block"
      />
    </section>
  );
}

const StatCard = ({
  bottleUri,
  iconUri,
  title,
  value,
  bgClass,
  link,
}: StatCard) => {
  return (
    <Link
      href={link ?? ""}
      target="_blank"
      className={cn(
        "outline-stat-card relative flex flex-col gap-8 rounded-2xl p-4 lg:gap-16 xl:rounded-3xl 2xl:p-6",
        bgClass,
      )}
    >
      <Image src={iconUri} alt={title} width={24} height={24} />
      <div className="flex flex-col gap-1 2xl:gap-3">
        <span className="text-sm leading-5.5 text-neutral-100 lg:text-base lg:leading-6.5">
          {title}
        </span>
        <span className="text-2xl font-medium leading-[29px] -tracking-[0.01em] text-neutral-100 lg:text-3.5xl lg:leading-9.5 2xl:text-5xl 2xl:leading-[58px]">
          {value}
        </span>
      </div>
      <Image
        src={bottleUri}
        alt="Vial"
        width={100}
        height={100}
        className="absolute -top-5 right-0 lg:-top-9 lg:h-30 lg:w-30"
      />
    </Link>
  );
};

const Tweet = ({
  className,
  username,
  userhandle,
  date,
  meatDetails,
  tweetLink,
  profilePicture,
}: { className?: string } & Partial<(typeof tweets)[0]>) => {
  return (
    <Link
      href={tweetLink ?? "#"}
      rel="external"
      target="_blank"
      className={cn(
        "flex h-[268px] w-[309px] flex-col gap-3 rounded-2xl bg-osmoverse-775 px-6 py-8 lg:h-[196px] lg:w-[472px]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={profilePicture!}
            alt={`@${userhandle} avatar`}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="font-semibold leading-4 text-neutral-100">
              {username}
            </span>
            <span className="text-sm font-light text-neutral-100/60">
              {userhandle} ·{" "}
              {Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(date!))}
            </span>
          </div>
        </div>
        <Image
          src={"/assets/icons/x.svg"}
          alt="X logo"
          width={24}
          height={24}
        />
      </div>
      <p className="tweet-paragraph-mask-gradient relative line-clamp-6 flex-1 whitespace-break-spaces font-light text-neutral-100 lg:line-clamp-3">
        {meatDetails}
      </p>
    </Link>
  );
};
