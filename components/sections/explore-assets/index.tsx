import { formatPretty } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import { RatePretty } from "@keplr-wallet/unit";
import Image from "next/image";
import { CSSProperties } from "react";

interface Asset {
  iconUri: string;
  name: string;
  variation: RatePretty;
  important: boolean;
}

const assets: Asset[] = [
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: true,
  },
  {
    iconUri: "/assets/icons/dym.svg",
    name: "Dymension",
    variation: new RatePretty(3),
    important: true,
  },
  {
    iconUri: "/assets/icons/pepe.svg",
    name: "PEPE",
    variation: new RatePretty(-9),
    important: true,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: true,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: true,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: true,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: true,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/dym.svg",
    name: "Dymension",
    variation: new RatePretty(3),
    important: false,
  },
  {
    iconUri: "/assets/icons/pepe.svg",
    name: "PEPE",
    variation: new RatePretty(-9),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/dym.svg",
    name: "Dymension",
    variation: new RatePretty(3),
    important: false,
  },
  {
    iconUri: "/assets/icons/pepe.svg",
    name: "PEPE",
    variation: new RatePretty(-9),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
  {
    iconUri: "/assets/icons/tia.svg",
    name: "Celestia",
    variation: new RatePretty(1.28),
    important: false,
  },
];

export default function ExploreAssets() {
  const importantAssets = assets.filter((asset) => asset.important === true);
  const otherAssets = assets.filter((asset) => asset.important === false);

  return (
    <section className="mt-16 flex flex-col items-center justify-center gap-8 sm:mt-20 md:mt-28 md:gap-4 md:self-stretch lg:mt-8 xl:mt-28 2xl:mt-42 2xl:gap-8 2xl:px-6">
      <Heart
        assetsLists={[
          {
            list: otherAssets,
            radius: 150,
          },
          {
            list: importantAssets,
            radius: 85,
          },
        ]}
      />
      {/* <div className="relative flex h-[360px] w-[360px] items-center justify-center">
        <Circle className="absolute" elements={otherAssets} radius={150} />
        <Circle className="absolute" elements={importantAssets} radius={85} />
      </div> */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 2xl:px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="bg-explore-assets-headline w-[290px] text-center font-h1 text-3.5xl font-medium leading-[38px] -tracking-[0.64px] sm:w-[390px] md:w-[420px] md:text-4xl md:leading-[41px] md:-tracking-[0.72px] lg:w-[594px] lg:text-5xl lg:leading-[55px] lg:-tracking-[0.96px] xl:w-[660px] xl:text-[56px] xl:leading-[64px] xl:-tracking-[1.12px] 2xl:w-[768px] 2xl:text-[64px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
            The best opportunities are on Osmosis.
          </h3>
          <span className="font-light leading-[25px] text-[#F9F8F799] md:leading-[22px] lg:text-xl">
            Discover and trade 190+ assets and counting.
          </span>
        </div>
        <button
          type="button"
          className="flex max-w-[164px] items-center justify-center rounded-[10px] bg-wosmongton-700 px-8 py-4 md:rounded-xl lg:max-w-[178px] lg:py-5 xl:rounded-[14px]"
        >
          <span className="text-sm leading-[22px] text-neutral-100 lg:text-base lg:leading-[25px]">
            Explore Assets
          </span>
        </button>
      </div>
    </section>
  );
}

function Heart({
  assetsLists,
}: {
  assetsLists: { list: Asset[]; radius: number }[];
}) {
  return (
    <>
      <div className="relative flex h-[360px] w-[360px] items-center justify-center sm:h-[440px] sm:w-[440px] md:h-[368px] md:w-[640px] lg:h-[610px] lg:w-[956px] xl:h-[700px] xl:w-[1054px] 2xl:h-[662px]">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={list}
            radius={radius}
          />
        ))}
      </div>
    </>
  );
}

function Circle({
  elements,
  radius,
  className,
}: {
  elements: Asset[];
  radius: number;
  voidLastElement?: boolean;
  className?: string;
}) {
  const numberOfElements = elements.length;
  const diameter = radius * 2;
  const angle = 360 / numberOfElements;

  return (
    <div
      className={cn("relative rounded-full", className)}
      style={{ width: `${diameter}px`, height: `${diameter}px` }}
    >
      {elements.map((element, i) => (
        <Element
          key={`element ${i}`}
          {...element}
          style={{
            top: `${radius - radius * Math.sin(angle * i * (Math.PI / 180))}px`,
            right: `${radius - radius * Math.cos(angle * i * (Math.PI / 180))}px`,
            // display: voidLastElement && i === numberOfElements / 4 ? "none" : undefined,
          }}
        />
      ))}
    </div>
  );
}

function Element({
  className,
  style,
  iconUri,
  name,
  variation,
}: {
  className?: string;
  style?: CSSProperties;
} & Asset) {
  const isPositive = variation.toDec().isPositive();

  return (
    <div
      style={style}
      className={cn(
        "absolute flex h-10 w-10 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center",
        className,
      )}
    >
      <Image src={iconUri} alt={`${name} logo`} width={40} height={40} />
      <div
        className={cn(
          "-mt-1.5 flex h-4 w-[51px] items-center justify-center rounded-full p-1",
          {
            "bg-rust-500": !isPositive,
            "bg-[#37D56D]": isPositive,
          },
        )}
      >
        {isPositive ? (
          <Image
            src={"/assets/explore-assets/indicator-up.svg"}
            alt="Indicator Up"
            width={12}
            height={12}
          />
        ) : (
          <Image
            src={"/assets/explore-assets/indicator-down.svg"}
            alt="Indicator Down"
            width={12}
            height={12}
          />
        )}
        <span
          className={cn(
            "text-[10px] font-medium leading-[4.6px] -tracking-[0.132px]",
            {
              "text-[#003F47]": isPositive,
              "text-[#4A2706]": !isPositive,
            },
          )}
        >
          {formatPretty(variation)}
        </span>
      </div>
    </div>
  );
}
