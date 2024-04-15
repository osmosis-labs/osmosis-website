import Circle, { TAsset } from "@/components/sections/explore-assets/circle";
import { GTagLink } from "@/components/shared/gtag-link";
import EXPLORE_ASSETS from "@/lib/explore-assets";
import Image from "next/image";
import Link from "next/link";

const firstRingAssets = EXPLORE_ASSETS.filter((asset) => asset.ring === 1);
const secondRingAssets = EXPLORE_ASSETS.filter((asset) => asset.ring === 2);
const thirdRingAssets = EXPLORE_ASSETS.filter((asset) => asset.ring === 3);

export default function ExploreAssets() {
  return (
    <section className="relative mt-16 flex flex-col items-center justify-center gap-3.5 sm:mt-20 sm:gap-8 md:mt-[114px] md:justify-end md:gap-4 md:self-stretch lg:mt-8 lg:w-[960px] xl:mt-28 xl:w-[1152px] xl:gap-4 2xl:mt-42 2xl:h-[1000px] 2xl:w-[1440px] 2xl:justify-start 2xl:gap-0 2xl:px-6">
      <Heart
        assetsLists={[firstRingAssets, secondRingAssets, thirdRingAssets]}
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 2xl:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="bg-explore-assets-headline w-[290px] font-poppins text-3.5xl font-medium leading-9.5 -tracking-2% sm:w-[390px] md:w-[420px] md:text-4xl md:leading-[41px] lg:w-[594px] lg:text-5xl lg:leading-13.75 xl:w-[660px] xl:text-5.5xl xl:leading-16 2xl:w-[768px] 2xl:text-6.25xl 2xl:leading-17.5">
            The best opportunities are on Osmosis.
          </h2>
          <span className="max-w-[223px] font-light leading-6.25 text-alpha-60 md:max-w-none md:leading-5.5 lg:text-xl">
            Discover and trade 190+ assets and counting.
          </span>
        </div>
        <GTagLink asChild eventName="buttonClicked" label="Explore Assets">
          <Link
            href="https://app.osmosis.zone/assets?utm_source=osmosis_landing_page&utm_campaign=assets"
            target="_blank"
            className="flex max-w-[164px] items-center justify-center rounded-[10px] bg-wosmongton-700 px-8 py-4 md:rounded-xl lg:max-w-[178px] lg:py-5 xl:rounded-[14px]"
          >
            <span className="text-sm leading-5.5 text-neutral-100 lg:text-base lg:leading-6.25">
              Explore Assets
            </span>
          </Link>
        </GTagLink>
      </div>
      <Image
        src={"/assets/explore-assets/ion.svg"}
        alt="Ion"
        width={105}
        height={105}
        className="absolute right-0 top-0 z-10 hidden sm:block md:-right-3 md:top-1 lg:right-12 lg:top-7 lg:h-[140px] lg:w-[140px] xl:right-9 xl:top-11 xl:h-[180px] xl:w-[180px] 2xl:right-[140px] 2xl:top-[70px]"
      />
    </section>
  );
}

function Heart({ assetsLists }: { assetsLists: TAsset[][] }) {
  return (
    <div className="relative">
      <div className="relative z-10 flex h-[380px] w-[360px] items-center justify-center sm:h-[442px] sm:w-[440px] md:h-[420px] md:w-[628px] lg:h-[611px] lg:w-[956px] xl:flex xl:h-[700px] xl:w-[1100px] 2xl:h-[674px]">
        <Circle
          className="third-ring absolute top-20 hidden items-center justify-center xl:flex xl:h-[1100px] xl:w-[985px] 2xl:top-12 2xl:h-[1160px] 2xl:w-[1000px]"
          list={assetsLists[2]}
        />
        <Circle
          className="second-ring absolute z-20 flex h-[300px] w-[300px] items-center justify-center sm:top-10 sm:h-[376px] sm:w-[376px] md:h-[604px] md:w-[580px] lg:top-[110px] lg:h-[790px] lg:w-[768px] xl:top-[200px] xl:h-[780px] xl:w-[760px] 2xl:top-[170px]"
          list={assetsLists[1]}
        />
        <Circle
          className="first-ring absolute z-20 flex h-[170px] w-[170px] items-center justify-center sm:top-[130px] sm:h-[204px] sm:w-[204px] md:h-[340px] md:w-[390px] lg:top-[230px] lg:h-[420px] lg:w-[480px] xl:top-[320px] xl:h-[435px] xl:w-[490px] 2xl:top-[290px] 2xl:h-[425px] 2xl:w-[500px]"
          list={assetsLists[0]}
        />
      </div>
      <Image
        src={"/assets/explore-assets/heart-bg-gradient.svg"}
        alt=""
        width={363}
        height={353}
        className="absolute-center pointer-events-none absolute !top-[calc(50%-20px)] h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] md:!top-[calc(100%-120px)] md:h-[620px] md:w-[620px] lg:!left-[calc(50%+12px)] lg:!top-[calc(100%-160px)] lg:h-[800px] lg:w-[800px] xl:z-10 2xl:!top-[calc(100%-175px)] 2xl:z-0 2xl:h-[950px] 2xl:w-[1000px]"
      />
      <div className="absolute-center absolute flex h-12.5 w-11 md:top-[calc(100%-98px)] md:h-[68px] md:w-[68px] lg:top-[calc(100%-124px)] lg:h-[93px] lg:w-[93px] xl:z-10 2xl:top-[calc(100%-136px)] 2xl:h-[98px] 2xl:w-[98px]">
        <Image
          src={"/assets/icons/osmo-logo-icon.svg"}
          width={45}
          alt="OSMO icon"
          height={50}
          className="h-auto w-auto pb-[1.5px] md:p-0 md:pl-[4.45px] md:pr-[2.44px] lg:pb-[2.2px] lg:pl-[6.5px] lg:pr-[3.55px]"
        />
      </div>
    </div>
  );
}
