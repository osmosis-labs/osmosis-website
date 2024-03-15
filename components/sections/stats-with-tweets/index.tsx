import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <section className="stats-with-tweets-bg mt-18 flex rounded-3xl py-8 lg:mt-21.5 lg:py-14 xl:mt-14 xl:rounded-4xl xl:py-20 2xl:mt-20 3xl:mt-25">
      <div className="flex flex-1 flex-col gap-8 p-3 2xl:gap-16 2xl:p-4 3xl:px-6 3xl:py-4">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 lg:flex-row">
            <Image
              src={"/assets/shield.svg"}
              alt="Gradient Shield"
              width={60}
              height={60}
            />
            <h4 className="text-xl-i leading-[110%] lg:text-2xl xl:text-3xl 2xl:text-3.5xl 3xl:text-h2">
              Trusted by 1+ million <br /> Users and Counting.
            </h4>
          </div>
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-2 2xl:gap-4">
            {stats.map((props) => (
              <StatCard key={props.title} {...props} />
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
        "relative flex flex-col gap-8 rounded-2xl p-4 lg:gap-16 2xl:rounded-3xl 2xl:p-6",
        bgClass,
      )}
    >
      <Image src={iconUri} alt={title} width={24} height={24} />
      <div className="flex flex-col gap-1 2xl:gap-3">
        <span className="text-xs leading-[120%] text-neutral-100 lg:text-base">
          {title}
        </span>
        <span className="text-xl leading-[120%] text-neutral-100 xl:text-xl-i 3xl:text-3xl">
          {value}
        </span>
      </div>
      <Image
        src={bottleUri}
        alt="Vial"
        width={120}
        height={120}
        className="absolute -top-6 right-0 lg:-top-4 lg:h-22.5 lg:w-22.5 xl:-top-9 xl:h-30 xl:w-30"
      />
    </div>
  );
};
