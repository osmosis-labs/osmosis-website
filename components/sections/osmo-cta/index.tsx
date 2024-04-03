import BackersSection from "@/components/sections/osmo-cta/backers-section";
import Image from "next/image";

export default function OsmoCTASection() {
  return (
    <div className="relative">
      <section className="relative z-10 mt-12 flex flex-col items-center justify-center gap-2.5 self-stretch p-2 sm:mt-14 sm:p-4 md:gap-4 xl:mt-18 xl:gap-6 2xl:mt-20 2xl:gap-4 2xl:p-8 2xl:pb-0">
        {/**setting h-[470px] because there is no definitive copy yet for the subtitle on 2xl */}
        <div className="bg-gradient-osmo-cta relative flex flex-col self-stretch overflow-hidden rounded-3xl border border-solid border-white-full/10 px-6 pb-80 pt-8 sm:rounded-[32px] md:px-8 md:py-12 lg:p-12 2xl:h-[470px] 2xl:px-16 2xl:py-14">
          <div className="relative z-10 flex flex-col justify-center gap-6 self-stretch md:gap-8 md:self-end xl:px-6 2xl:gap-10 2xl:px-0 2xl:py-8">
            <div className="flex flex-col justify-center gap-4 self-stretch md:self-start lg:gap-4">
              <h5 className="inline-flex flex-col gap-2 font-poppins text-3.5xl font-medium leading-8.75 -tracking-2% text-neutral-100 sm:flex-row sm:items-center md:flex-col md:items-start md:text-4xl md:leading-10 lg:flex-row lg:items-center lg:gap-3 lg:text-5xl lg:leading-[53px] xl:text-5.5xl xl:leading-15.25 2xl:gap-1 2xl:text-6.25xl 2xl:leading-17.5">
                <span>Powered by</span>
                <span className="inline-flex items-center gap-2 lg:gap-3 2xl:p-2 2xl:pr-4">
                  OSMO
                  <Image
                    src={"/assets/icons/osmo-logo-icon.svg"}
                    alt="Osmo icon"
                    width={40}
                    height={40}
                    className="pb-[1px] pl-[2.8px] pr-[1.52px] lg:h-12 lg:w-12 lg:pb-[1.14px] lg:pl-[3.35px] lg:pr-[1.83px] xl:h-14 xl:w-14 xl:pb-[1.33px] xl:pl-[4px] xl:pr-[2.13px] 2xl:h-20 2xl:w-20 2xl:pb-[1.9px] 2xl:pl-[5.58px] 2xl:pr-[3px]"
                  />
                </span>
              </h5>
              {/**subject to change */}
              <p className="leading-6.5 text-neutral-100 lg:max-w-[481px] xl:max-w-[404px] 2xl:max-w-[560px] 2xl:text-xl 2xl:leading-7">
                OSMO is the staking asset on{" "}
                <br className="sm:hidden lg:hidden" /> Osmosis{" "}
                <br className="hidden md:block lg:hidden" />
                that is used to provide <br className="sm:hidden lg:hidden" />
                security, build <br className="hidden md:block lg:hidden" />{" "}
                liquidity, and decide on <br className="sm:hidden lg:hidden" />{" "}
                future direction <br className="hidden md:block lg:hidden" /> of
                the protocol.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-[10px] bg-wosmongton-700 px-8 py-4 md:max-w-65 md:rounded-xl lg:px-8 lg:py-5 xl:rounded-[14px]"
            >
              <span className="leading-6.25 md:text-sm md:leading-5.5 lg:text-base lg:leading-6.25">
                Get OSMO
              </span>
            </button>
          </div>
          <OsmoCTAIllustration />
        </div>
        <div className="flex flex-col gap-6 self-stretch py-4 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:p-4 2xl:p-6">
          {/**row */}
          <div className="flex items-center gap-4 lg:py-4 2xl:p-0">
            <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-ammelia-600 bg-opacity-15 lg:h-14 lg:w-14">
              <Image
                src={"/assets/icons/osmo-small-pink.svg"}
                alt="Osmo pink icon"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm leading-5.5 text-neutral-100 lg:text-base lg:leading-6.25">
                Listed on 14 exchanges, including:
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex h-8 w-[118px] items-center justify-center rounded-md border border-solid border-osmoverse-650 bg-osmoverse-775 lg:w-[124px]">
                  <Image
                    src={"/assets/binance-logo.svg"}
                    alt="Binance logo"
                    width={87}
                    height={17}
                    className="2xl:h-5 2xl:w-25"
                  />
                </div>
                <div className="flex h-8 w-[118px] items-center justify-center rounded-md border border-solid border-osmoverse-650 bg-osmoverse-775">
                  <Image
                    src={"/assets/coinbase-logo.svg"}
                    alt="Coinbase logo"
                    width={91}
                    height={18}
                    className="2xl:h-5 2xl:w-25"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-14 w-[1px] bg-osmoverse-650 max-lg:hidden" />
          {/**row */}
          <div className="flex items-center gap-4 lg:py-4 2xl:p-0">
            <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-ammelia-600 bg-opacity-15 lg:h-14 lg:w-14">
              <Image
                src={"/assets/icons/trophy-pink.svg"}
                alt="Trophy icon"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins text-xl leading-6.5 text-neutral-100 xl:text-2xl xl:leading-7.75">
                117
              </span>
              <span className="font-light leading-6 text-alpha-60">
                rank on{" "}
                <span className="inline-flex text-neutral-100">
                  CoinGecko
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    alt="CoinGecko link"
                    width={20}
                    height={20}
                    className="-translate-y-0.5"
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="h-14 w-[1px] bg-osmoverse-650 max-lg:hidden" />
          {/**row */}
          <div className="flex items-center gap-4 lg:py-4 2xl:p-0">
            <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-ammelia-600 bg-opacity-15 lg:h-14 lg:w-14">
              <Image
                src={"/assets/icons/flame-burning-pink.svg"}
                alt="Flame burning icon"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins text-xl leading-6.5 text-neutral-100 xl:text-2xl xl:leading-7.75">
                1M OSMO
              </span>
              <span className="font-light leading-6 text-alpha-60">burned</span>
            </div>
          </div>
        </div>
        <BackersSection />
      </section>
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
        className="bottom absolute -bottom-[428px] z-0 hidden h-auto w-full 2xl:block"
      />
    </div>
  );
}

function OsmoCTAIllustration() {
  return (
    <>
      <Image
        src={"/assets/osmo-cta/bg-lines.svg"}
        alt=""
        width={573}
        height={503}
        className="absolute -bottom-35 -left-28 h-[503px] w-[573px] max-w-none -scale-x-[1] sm:-bottom-45 sm:h-[560px] sm:w-[637px] md:-bottom-[134px] md:-left-44 md:h-[520px] md:w-[593px] lg:-bottom-[148px] lg:-left-42 lg:h-[568px] lg:w-[650px] xl:-left-19.5 2xl:-bottom-52 2xl:-left-[148px] 2xl:h-[757px] 2xl:w-[864px]"
      />
      <Image
        src={"/assets/osmo-cta/coin.svg"}
        alt=""
        width={294}
        height={294}
        className="absolute bottom-4 left-8.5 -rotate-[4deg] sm:bottom-1 sm:left-16 sm:h-[268px] sm:w-[268px] md:bottom-15 md:left-3.5 md:block md:h-[251px] md:w-[251px] lg:bottom-0 lg:h-[318px] lg:w-[318px] xl:bottom-2 xl:left-28 2xl:bottom-4 2xl:left-24 2xl:h-[418px] 2xl:w-[418px]"
      />
    </>
  );
}
