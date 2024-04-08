import Divider from "@/components/shared/divider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import tweets from "@/lib/tweets";

interface StatCard {
  title: string;
  value: string;
  iconUri: string;
  bottleUri: string;
  bgClass: string;
}

const stats: StatCard[] = [
  {
    title: "All Time Volume",
    value: "$3,200,492.53",
    iconUri: "/assets/icons/rocket-gray.svg",
    bottleUri: "/assets/bottle-blue.svg",
    bgClass: "trend-card-bg-1",
  },
  {
    title: "Asset on the Platform",
    value: "$3,200,492.53",
    iconUri: "/assets/icons/checkmark-gray.svg",
    bottleUri: "/assets/bottle-red.svg",
    bgClass: "trend-card-bg-2",
  },
  {
    title: "24h Trading Volume",
    value: "$5,800,492.53",
    iconUri: "/assets/icons/trending-gray.svg",
    bottleUri: "/assets/bottle-super.svg",
    bgClass: "trend-card-bg-3",
  },
];

const upperHalf = tweets.slice(0, 13);
const lowerHalf = tweets.slice(13, 27);

export default function StatsWithTweets() {
  return (
    <section className="stats-with-tweets-bg relative z-10 mt-14 rounded-3xl pt-2 sm:mt-16 sm:rounded-4xl sm:pt-4 md:mt-24 md:pt-12 lg:mt-20 lg:pt-16 xl:mt-24 xl:pt-20 2xl:mt-25">
      <div className="flex flex-col gap-8 p-2 sm:p-4 2xl:gap-16">
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex flex-col gap-2 md:flex-row">
            <Image
              src={"/assets/shield.svg"}
              alt="Gradient Shield"
              width={40}
              height={40}
              className="md:h-15 md:w-15"
            />
            <h4 className="font-poppins text-3.5xl font-medium leading-9.5 tracking-[-0.64px] md:text-4xl md:leading-10.75 lg:text-5xl lg:leading-13.75 xl:text-5.5xl xl:leading-16 2xl:leading-17.5">
              <span className="trusted-heading-bg">Trusted</span> by 1+ million{" "}
              <br /> users and counting.
            </h4>
          </div>
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-2 2xl:gap-4">
            {stats.map((props) => (
              <StatCard key={props.title} {...props} />
            ))}
          </div>
        </div>
        <Divider className="py-6" />
        <div className="md:tweets-mask relative -mx-6 flex h-[555px] overflow-hidden sm:-mx-28 lg:-mx-0 lg:h-[408px]">
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
      </div>
    </section>
  );
}

const StatCard = ({ bottleUri, iconUri, title, value, bgClass }: StatCard) => {
  return (
    <div
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
    </div>
  );
};

const Tweet = ({
  className,
  username,
  userhandle,
  date,
  meatDetails,
  tweetLink,
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
            src={"/assets/icons/pepe.svg"}
            alt="@handle avatar"
            width={48}
            height={48}
          />
          <div className="flex flex-col gap-1">
            <span className="font-semibold leading-4 text-neutral-100">
              {username}
            </span>
            <span className="text-sm font-light text-neutral-100/60">
              {userhandle} · {date}
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
