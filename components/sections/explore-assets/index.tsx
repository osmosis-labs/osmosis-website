import Circle, { TAsset } from "@/components/sections/explore-assets/circle";
import { RatePretty } from "@keplr-wallet/unit";
import Image from "next/image";

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
    iconUri: "/assets/icons/dym.svg",
    name: "Dymension",
    variation: new RatePretty(3),
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
    iconUri: "/assets/icons/pepe.svg",
    name: "PEPE",
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

export default function ExploreAssets() {
  const importantAssets = assets.filter((asset) => asset.important === true);
  const otherAssets = assets.filter((asset) => asset.important === false);

  return (
    <section className="relative mt-16 flex flex-col items-center justify-center gap-3.5 sm:mt-20 sm:gap-8 md:mt-28 md:justify-end md:self-stretch lg:mt-8 lg:w-[960px] xl:mt-28 xl:h-[986px] xl:w-[1152px] xl:overflow-hidden 2xl:mt-42 2xl:h-[1044px] 2xl:w-[1440px] 2xl:overflow-visible 2xl:px-6">
      <Heart assetsLists={[otherAssets, importantAssets]} />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 2xl:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="bg-explore-assets-headline w-[290px] font-poppins text-3.5xl font-medium leading-[38px] -tracking-[0.64px] sm:w-[390px] md:w-[420px] md:text-4xl md:leading-[41px] md:-tracking-[0.72px] lg:w-[594px] lg:text-5xl lg:leading-[55px] lg:-tracking-[0.96px] xl:w-[660px] xl:text-[56px] xl:leading-[64px] xl:-tracking-[1.12px] 2xl:w-[768px] 2xl:text-[64px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
            The best opportunities are on Osmosis.
          </h3>
          <span className="max-w-[223px] font-light leading-[25px] text-alpha-60 md:max-w-none md:leading-[22px] lg:text-xl">
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

function Heart({ assetsLists }: { assetsLists: TAsset[][] }) {
  const voidAssets = Array(28).fill({
    iconUri: "/assets/explore-assets/void-asset.svg",
  }) as TAsset[];

  return (
    <div className="relative">
      <div className="relative z-10 flex h-[380px] w-[360px] items-center justify-center sm:h-[442px] sm:w-[440px] md:h-[388px] md:w-[628px] lg:h-[610px] lg:w-[956px] xl:flex xl:h-[700px] xl:w-[1054px] 2xl:h-[662px]">
        <Circle
          className="external-circle absolute flex h-[300px] w-[300px] items-center justify-center sm:top-10 sm:h-[376px] sm:w-[376px] md:h-[620px] md:w-[560px] lg:h-[790px] lg:w-[790px] xl:h-[760px] xl:w-[760px]"
          list={assetsLists[0]}
        />
        <Circle
          className="internal-circle absolute flex h-[170px] w-[170px] items-center justify-center sm:top-[130px] sm:h-[204px] sm:w-[204px] md:h-[382px] md:w-[382px] lg:h-[520px] lg:w-[520px]"
          list={assetsLists[1]}
        />
        <Circle
          className="void-circle absolute hidden items-center justify-center xl:flex xl:h-[978px] xl:w-[978px]"
          list={voidAssets}
        />
        <div className="void-assets-mask absolute z-10 hidden h-[calc(100%+200px)] w-screen xl:block" />
      </div>
      <div className="heart-gradient absolute-center absolute flex h-12.5 w-11 before:h-[360px] before:w-[360px] before:sm:h-[440px] before:sm:w-[440px] md:top-[calc(100%-56px)] md:h-16 md:w-16 before:md:h-[620px] before:md:w-[620px] lg:h-[93px] lg:w-[93px] before:lg:h-[800px] before:lg:w-[800px] xl:z-10 2xl:before:h-[950px] 2xl:before:w-[1000px]">
        <Image
          src={"/assets/icons/osmo-logo-icon.svg"}
          width={45}
          alt="OSMO icon"
          height={50}
          className="relative h-auto w-auto pb-[1.5px] md:pl-[4.45px] md:pr-[2.44px] lg:pb-[2.2px] lg:pl-[6.5px] lg:pr-[3.55px]"
        />
      </div>
    </div>
  );
}
