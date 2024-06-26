import { GTagLink } from "@/components/shared/gtag-link";
import { Tickers } from "@/components/sections/hero/tickers";
import Image, { getImageProps } from "next/image";
import { SwapToolTicker } from "@/components/sections/hero/swap-tool-ticker";
import StartTradingLink from "@/components/sections/hero/start-trading-link";

export default function HeroSection() {
  const common = {
    alt: "",
    quality: 100,
    className:
      "absolute z-10 h-auto w-full rounded-3xl lg:rounded-[32px] 2xl:rounded-[48px] max-h-[571px] sm:max-h-none object-cover",
    priority: true,
  };

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/assets/hero/bg.webp",
    width: 358,
    height: 596,
  });

  const {
    props: { srcSet: sm },
  } = getImageProps({
    ...common,
    src: "/assets/hero/bg-sm.webp",
    width: 448,
    height: 661,
  });

  const {
    props: { srcSet: md },
  } = getImageProps({
    ...common,
    src: "/assets/hero/bg-md.webp",
    width: 640,
    height: 613,
  });

  const {
    props: { srcSet: lg },
  } = getImageProps({
    ...common,
    src: "/assets/hero/bg-lg.webp",
    width: 1920,
    height: 766,
  });

  return (
    <div className="relative rounded-3xl lg:rounded-[32px] 2xl:rounded-[48px]">
      <picture>
        <source media="(min-width: 1024px)" srcSet={lg} />
        <source media="(min-width: 768px)" srcSet={md} />
        <source media="(min-width: 640px)" srcSet={sm} />
        <source media="(min-width: 0px)" srcSet={mobile} />
        <img {...rest} style={{ width: "100%", height: "auto" }} alt="" />
      </picture>
      <section className="relative z-10 flex p-2 sm:px-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-8">
        <div className="flex w-full flex-col sm:gap-6 sm:py-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:py-0">
          <div className="flex flex-col gap-4 px-2 max-sm:py-4 sm:gap-3 sm:px-6 md:flex-row md:items-center md:justify-between md:px-4 lg:flex-col lg:items-start lg:gap-6 lg:px-6 xl:gap-8 xl:px-4 2xl:gap-2 2xl:px-8">
            <h1 className="inline-flex flex-col font-poppins text-[34px] font-medium leading-[34px] -tracking-[0.03em] text-neutral-100 sm:gap-1 sm:text-[40px] sm:leading-10 lg:gap-2 lg:text-5xl lg:leading-[48px] xl:text-6.25xl xl:leading-16 2xl:gap-1 2xl:text-7xl 2xl:leading-20">
              <span>Discover and</span>
              <span className="inline-flex items-center gap-3 whitespace-nowrap sm:gap-5.5">
                trade
                {/**base gap is compensated in the widths of the brackets */}
                <div className="relative h-12 sm:h-[46px] lg:h-[58px] xl:h-20 2xl:h-22.5">
                  <Tickers />
                </div>
              </span>
              <span className="inline-flex items-center gap-1 2xl:gap-4">
                on
                <div className="flex items-center gap-1 2xl:gap-2.5">
                  <Image
                    src={"/assets/icons/osmo-logo-icon.svg"}
                    alt="OSMO icon"
                    width={34}
                    height={34}
                    className="pb-[1px] pl-[2.37px] pr-[1.3px] sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
                    priority
                  />
                  <span>Osmosis.</span>
                </div>
              </span>
            </h1>
            <p className="font-light leading-5.5 text-[#F9F8F7] text-opacity-60 md:max-w-[185px] lg:max-w-none 2xl:mt-13 2xl:text-xl">
              The premier decentralized crypto exchange. Powered by Cosmos.
            </p>
          </div>
          <div className="border-swap-tool flex items-center rounded-3xl bg-slate-900 bg-opacity-10 px-2 py-6 backdrop-blur-[20px] sm:w-[376px] sm:self-center xl:w-[452px] xl:px-4 2xl:w-[512px] 2xl:rounded-4xl 2xl:px-4 2xl:py-10 2xl:backdrop-blur-xl">
            <div className="flex w-full flex-col gap-6 rounded-[20px] bg-osmoverse-850 p-3 sm:rounded-2xl sm:p-3.5 xl:gap-8 2xl:gap-10 2xl:rounded-3xl">
              <div className="relative flex flex-col gap-[3px]">
                <div className="flex h-18 items-center justify-between rounded-xl bg-osmoverse-760 px-3 xl:h-24 xl:px-4 2xl:h-30 2xl:rounded-2xl 2xl:px-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/assets/icons/usdc.svg"}
                      alt="USDC icon"
                      width={40}
                      height={40}
                      className="xl:h-12 xl:w-12"
                      priority
                    />
                    <div className="flex flex-col">
                      <span className="text-neutral-100 xl:text-xl">USDC</span>
                      <span className="text-xs text-osmoverse-310 xl:text-sm 2xl:text-base">
                        USD Coin
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="leading-5.5 text-neutral-100 xl:text-xl xl:leading-7">
                      1000
                    </span>
                    <span className="relative text-xs font-light leading-[18px] text-[#B0AADC] xl:text-sm xl:leading-5.25 2xl:text-base 2xl:leading-6">
                      <span className="font-[sans-serif]">&asymp;</span> $1000
                    </span>
                  </div>
                </div>
                <div className="flex h-18 items-center justify-between rounded-xl bg-osmoverse-760 px-3 xl:h-24 xl:px-4 2xl:h-30 2xl:rounded-2xl 2xl:px-6">
                  <SwapToolTicker />
                  <div className="flex flex-col items-end gap-1">
                    <div className="h-2.5 w-17.5 rounded-full bg-[#736CA3] 2xl:h-3 2xl:w-24" />
                    <div className="h-2.5 w-10.5 rounded-full bg-[#565081] 2xl:h-3 2xl:w-14" />
                  </div>
                </div>
                <Image
                  src={"/assets/swap-arrow-down.svg"}
                  alt="Arrow down"
                  // 38px/46px for w/h compensates the design's outline stroke width
                  width={38}
                  height={38}
                  className="absolute inset-x-0 left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 2xl:h-[46px] 2xl:w-[46px]"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-2.5 w-30 rounded-full bg-osmoverse-650 2xl:h-3 2xl:w-[150px]" />
                <div className="h-2.5 w-18 rounded-full bg-osmoverse-650 2xl:h-3 2xl:w-22.5" />
              </div>
              <GTagLink asChild eventName="buttonClicked" label="Start Trading">
                <StartTradingLink />
              </GTagLink>
            </div>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/grids/base/grid-1.svg"}
        alt="Grid 1"
        width={358}
        height={1663}
        className="absolute top-[490px] z-0 h-auto w-full sm:hidden"
        priority
      />
      <Image
        src={"/assets/grids/sm/grid-1.svg"}
        alt="Grid 1"
        width={448}
        height={1587}
        className="bottom absolute top-[630px] z-0 hidden h-auto w-full sm:block md:hidden"
        priority
      />
      <Image
        src={"/assets/grids/md/grid-1.svg"}
        alt="Grid 1"
        width={640}
        height={1212}
        className="bottom absolute top-[540px] z-0 hidden h-auto w-full md:block lg:hidden"
        priority
      />
      <Image
        src={"/assets/grids/lg/grid-1.svg"}
        alt="Grid 1"
        width={962}
        height={758}
        className="bottom absolute top-[380px] z-0 hidden h-auto w-full lg:block xl:hidden"
        priority
      />
      <Image
        src={"/assets/grids/xl/grid-1.svg"}
        alt="Grid 1"
        width={1155}
        height={912}
        className="bottom absolute top-[485px] z-0 hidden h-auto w-full xl:block 2xl:hidden"
        priority
      />
      <Image
        src={"/assets/grids/2xl/grid-1.svg"}
        alt="Grid 1"
        width={1155}
        height={912}
        className="bottom absolute top-[410px] z-0 hidden h-auto w-full 2xl:block"
        priority
      />
    </div>
  );
}
