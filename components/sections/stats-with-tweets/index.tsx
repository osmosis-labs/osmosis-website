import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

export default function StatsWithTweets() {
  return (
    <section className="stats-with-tweets-bg relative z-10 mt-14 rounded-3xl pt-2 sm:mt-16 sm:rounded-4xl sm:pt-4 md:mt-24 md:pt-12 lg:mt-20 lg:pt-16 xl:mt-24 xl:pt-20 2xl:mt-36">
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
            <h4 className="font-poppins text-[32px] font-medium leading-[38.4px] tracking-[-0.64px] md:text-4xl md:leading-[43.2px] lg:text-5xl lg:leading-[55.2px] xl:text-[56px] xl:leading-[64.4px] 2xl:leading-[70.4px]">
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
        <div className="md:tweets-mask relative -mx-6 flex h-[555px] overflow-hidden sm:-mx-28 lg:-mx-0 lg:h-[408px]">
          <div className="absolute flex flex-col gap-3 lg:gap-4">
            {Array(2)
              .fill(null)
              .map((_, i) => (
                <div
                  key={`tweets row ${i}`}
                  className={cn(
                    "lg:row-width-xl max-lg:row-width relative flex gap-2 transition-transform lg:gap-4",
                    {
                      "animate-marquee-sm-reverse lg:animate-marquee-reverse":
                        (i + 1) % 2 === 0,
                      "animate-marquee-sm lg:animate-marquee":
                        (i + 1) % 2 !== 0,
                    },
                  )}
                >
                  {Array(8)
                    .fill(null)
                    .map((_, i) => (
                      <Tweet key={`tweet ${i}`} />
                    ))}
                </div>
              ))}
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
        <span className="text-sm leading-[22.4px] text-neutral-100 lg:text-base lg:leading-[25.6px]">
          {title}
        </span>
        <span className="text-2xl font-medium leading-[28.8px] -tracking-[0.24px] text-neutral-100 lg:text-3.5xl lg:leading-[38.4px] lg:-tracking-[0.32px] 2xl:text-5xl 2xl:leading-[57.6px] 2xl:-tracking-[0.48px]">
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

const Tweet = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"#"}
      target="_blank"
      className={cn(
        "flex max-h-[268px] max-w-[309px] flex-1 flex-col gap-3 rounded-2xl bg-[#201B43] px-6 py-8 lg:max-h-[196px] lg:max-w-[472px]",
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
            <span className="font-semibold leading-none text-neutral-100">
              User
            </span>
            <span className="text-sm font-light leading-none text-neutral-100/60">
              @handler · Nov 27, 2021
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
      <p className="line-clamp-6 flex-1 font-light text-neutral-100 lg:line-clamp-3">
        Lorem ipsum dolor sit amet <br className="lg:hidden" /> consectetur
        adipiscing elit Ut et <br className="lg:hidden" /> massa mi. Aliquam in
        hendrerit <br className="lg:hidden" /> urna. Pellentesque sit amet
        sapien <br className="lg:hidden" /> fringilla, mattis ligula{" "}
        <br className="lg:hidden" /> consectetur...
      </p>
    </Link>
  );
};
