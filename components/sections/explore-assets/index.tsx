import { formatPretty } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import { Dec, RatePretty } from "@keplr-wallet/unit";
import Image from "next/image";
import { CSSProperties } from "react";

interface IAsset {
  iconUri: string;
  name: string;
  variation: RatePretty;
  important: boolean;
}

type TAsset = Partial<IAsset>;

const assets: TAsset[] = [
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
];

function roundAssets(assets: TAsset[]) {
  const copy = [...assets];
  if (copy.length % 2 === 0) return copy;
  copy.splice(-(copy.length / 4), 0, { name: "void" });
  return copy;
}

export default function ExploreAssets() {
  const otherAssets = assets.filter((asset) => asset.important === false);
  const importantAssets = assets.filter((asset) => asset.important === true);

  return (
    <section className="relative mt-16 flex flex-col items-center justify-center gap-3.5 sm:mt-20 sm:gap-8 md:mt-28 md:h-[590px] md:w-[640px] md:justify-end md:self-stretch lg:mt-8 lg:h-[878px] lg:w-[960px] xl:mt-28 xl:h-[986px] xl:w-[1152px] xl:overflow-hidden 2xl:mt-42 2xl:h-[1044px] 2xl:w-[1440px] 2xl:overflow-visible 2xl:px-6">
      <Heart
        assetsLists={[
          {
            list: otherAssets,
            radius: [150, 188, 280, 395, 380, 380],
          },
          {
            list: importantAssets,
            radius: [85, 102, 191, 260, 260, 260],
          },
        ]}
      />
      {/* <div className="relative flex h-[360px] w-[360px] items-center justify-center">
        <Circle className="absolute" elements={otherAssets} radius={150} />
        <Circle className="absolute" elements={importantAssets} radius={85} />
      </div> */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 2xl:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="bg-explore-assets-headline w-[290px] font-h1 text-3.5xl font-medium leading-[38px] -tracking-[0.64px] sm:w-[390px] md:w-[420px] md:text-4xl md:leading-[41px] md:-tracking-[0.72px] lg:w-[594px] lg:text-5xl lg:leading-[55px] lg:-tracking-[0.96px] xl:w-[660px] xl:text-[56px] xl:leading-[64px] xl:-tracking-[1.12px] 2xl:w-[768px] 2xl:text-[64px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
            The best opportunities are on Osmosis.
          </h3>
          <span className="max-w-[223px] font-light leading-[25px] text-[#F9F8F799] md:max-w-none md:leading-[22px] lg:text-xl">
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
      <Image
        src={"/assets/explore-assets/ion.svg"}
        alt="Ion"
        width={105}
        height={105}
        className="absolute right-0 top-0 hidden sm:block md:-top-9 lg:right-12 lg:top-8 lg:h-[140px] lg:w-[140px] xl:right-9 xl:top-11 xl:h-[180px] xl:w-[180px] 2xl:right-[140px] 2xl:top-[90px]"
      />
    </section>
  );
}

function Heart({
  assetsLists,
}: {
  assetsLists: { list: TAsset[]; radius: number[] }[];
}) {
  const voidAssets = Array(28).fill({
    iconUri: "/assets/explore-assets/void-asset.svg",
  }) as TAsset[];

  return (
    <>
      {/* <div className="relative flex h-[360px] w-[360px] items-center justify-center sm:h-[440px] sm:w-[440px] md:h-[368px] md:w-[640px] lg:h-[610px] lg:w-[956px] xl:h-[700px] xl:w-[1054px] 2xl:h-[662px]">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={list}
            radius={radius[0]}
          />
        ))}
      </div> */}
      <div className="relative flex h-[360px] w-[360px] items-center justify-center sm:hidden">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={roundAssets(list)}
            radius={radius[0]}
          />
        ))}
      </div>
      {/**sm */}
      <div className="relative hidden h-[440px] w-[440px] items-center justify-center sm:flex md:hidden">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={roundAssets(list)}
            radius={radius[1]}
          />
        ))}
      </div>
      {/**md */}
      <div className="absolute top-[93px] hidden h-[388px] w-[640px] items-center justify-center md:flex lg:hidden">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={list}
            radius={radius[2]}
            isSemi
          />
        ))}
      </div>
      {/**lg */}
      <div className="absolute top-[203px] hidden h-[610px] w-[956px] items-center justify-center lg:flex xl:hidden">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={list}
            radius={radius[3]}
            isSemi
          />
        ))}
      </div>
      {/**xl */}
      <div className="absolute top-[233px] hidden h-[700px] w-[1054px] items-center justify-center xl:flex 2xl:hidden">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute z-20"
            elements={list}
            radius={radius[4]}
            isSemi
          />
        ))}
        <Circle className="absolute" elements={voidAssets} radius={500} />
        <div className="void-assets-mask absolute z-10 h-[calc(100%+200px)] w-screen" />
      </div>
      {/**2xl */}
      <div className="absolute hidden h-[960px] w-[1100px] items-center justify-center 2xl:flex">
        {assetsLists.map(({ list, radius }, i) => (
          <Circle
            key={`heart list ${i}`}
            className="absolute"
            elements={list}
            radius={radius[5]}
            isSemi
          />
        ))}
        <Circle className="absolute" elements={voidAssets} radius={496} />
        <div className="void-assets-mask absolute z-10 h-[calc(100%+200px)] w-screen" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[353px] w-[362px] -translate-x-1/2 -translate-y-1/2 sm:h-[440px] sm:w-[440px] md:h-[620px] md:w-[620px] lg:h-[800px] lg:w-[800px] xl:z-10 2xl:h-[950px] 2xl:w-[1000px]">
        <Image
          src={"/assets/explore-assets/heart-bg-gradient.svg"}
          alt="Heart bg"
          width={1000}
          height={950}
          className="-translate-y-[calc(50%-40px)] sm:-translate-y-[calc(50%-72px)] md:-translate-y-16 lg:-translate-y-0"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-12.5 w-11 -translate-x-1/2 -translate-y-1/2 md:h-16 md:w-16 lg:h-[93px] lg:w-[93px] xl:z-10">
        <Image
          src={"/assets/icons/osmo-logo-icon.svg"}
          alt="OSMO icon"
          width={45}
          height={50}
          className="h-auto w-auto -translate-y-[calc(100%+72px)] pb-[1.5px] md:-translate-y-6 md:pl-[4.45px] md:pr-[2.44px] lg:translate-y-8 lg:pb-[2.2px] lg:pl-[6.5px] lg:pr-[3.55px] 2xl:translate-y-14"
        />
      </div>
    </>
  );
}

function Circle({
  elements,
  radius,
  className,
  isSemi,
}: {
  elements: TAsset[];
  radius: number;
  isSemi?: boolean;
  className?: string;
}) {
  const numberOfElements = elements.length;
  const diameter = radius * 2;
  const angle = (isSemi ? 180 : 360) / numberOfElements;

  return (
    <div
      className={cn("relative rounded-full", className)}
      style={{ width: `${diameter}px`, height: `${diameter}px` }}
    >
      {elements.map((element, i) => (
        <Element
          key={`element ${i}`}
          {...element}
          style={
            isSemi
              ? {
                  top: `${radius - radius * Math.sin((angle + angle / numberOfElements + 0.12) * i * (Math.PI / 180))}px`,
                  right: `${radius - radius * Math.cos((angle + angle / numberOfElements + 0.12) * i * (Math.PI / 180))}px`,
                }
              : {
                  top: `${radius - radius * Math.sin(angle * i * (Math.PI / 180))}px`,
                  right: `${radius - radius * Math.cos(angle * i * (Math.PI / 180))}px`,
                }
          }
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
} & TAsset) {
  const isPositive = variation && variation.toDec().isPositive();
  return (
    <div
      style={style}
      className={cn(
        "absolute z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center md:h-20 md:w-20 lg:h-[110px] lg:w-24",
        className,
      )}
    >
      {iconUri && (
        <Image
          src={iconUri}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="md:h-12 md:w-12 lg:h-18 lg:w-18"
        />
      )}
      {variation && (
        <div
          className={cn(
            "-mt-1.5 flex h-4 items-center justify-center rounded-full p-1 sm:w-[60px] md:h-5",
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
              "text-[10px] font-medium leading-[4.6px] -tracking-[0.132px] sm:text-xs",
              {
                "text-[#003F47]": isPositive,
                "text-[#4A2706]": !isPositive,
              },
            )}
          >
            {formatPretty(variation)}
          </span>
        </div>
      )}
    </div>
  );
}
