import BackersSection from "@/components/sections/osmo-cta/backers-section";
import Image from "next/image";

export default function OsmoCTASection() {
  return (
    <section className="mt-12 flex flex-col items-center justify-center gap-2.5 self-stretch p-2 sm:mt-14 sm:p-4 md:gap-4 xl:mt-18 xl:gap-6 2xl:mt-20 2xl:gap-4 2xl:p-8 2xl:pb-0">
      {/**setting h-[470px] because there is no definitive copy yet for the subtitle on 2xl */}
      <div className="border-osmo-cta bg-osmo-cta relative flex flex-col self-stretch rounded-3xl px-6 pb-80 pt-8 sm:rounded-[32px] md:px-8 md:py-12 lg:p-12 2xl:h-[470px] 2xl:px-16 2xl:py-14">
        <div className="flex flex-col justify-center gap-6 self-stretch md:gap-8 md:self-end xl:px-6 2xl:gap-10 2xl:px-0 2xl:py-8">
          <div className="flex flex-col justify-center gap-4 self-stretch md:self-start lg:gap-4">
            <h5 className="inline-flex flex-col gap-2 font-h1 text-3.5xl font-medium leading-[35.2px] -tracking-[0.64px] text-neutral-100 sm:flex-row sm:items-center md:flex-col md:items-start md:text-4xl md:leading-[39.6px] md:-tracking-[0.72px] lg:flex-row lg:items-center lg:gap-3 lg:text-5xl lg:leading-[52.8px] lg:-tracking-[0.96px] xl:text-[56px] xl:leading-[61.6px] xl:-tracking-[1.12px] 2xl:gap-1 2xl:text-[64px] 2xl:leading-[70.4px] 2xl:-tracking-[1.28px]">
              <span>Powered by</span>
              <span className="inline-flex items-center gap-2 lg:gap-3 2xl:p-2 2xl:pr-4">
                OSMO
                <Image
                  src={"/assets/icons/osmo-logo-icon.svg"}
                  alt="Osmo icon"
                  width={40}
                  height={40}
                  className="lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20"
                />
              </span>
            </h5>
            {/**subject to change */}
            <p className="leading-[26px] text-neutral-100 lg:max-w-[481px] xl:max-w-[404px] 2xl:max-w-[560px] 2xl:text-xl 2xl:leading-7">
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
            <span className="leading-[25.6px] md:text-sm md:leading-[22.4px] lg:text-base lg:leading-[25.6px]">
              Get OSMO
            </span>
          </button>
        </div>
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
            <span className="text-sm leading-[22px] text-neutral-100 lg:text-base lg:leading-[25px]">
              Listed on 14 exchanges, including:
            </span>
            <div className="flex items-center gap-1.5">
              <div className="flex h-8 w-[118px] items-center justify-center rounded-md border border-solid border-[#3C356D] bg-[#201B43] lg:w-[124px]">
                <Image
                  src={"/assets/binance-logo.svg"}
                  alt="Binance logo"
                  width={87}
                  height={17}
                  className="2xl:h-5 2xl:w-25"
                />
              </div>
              <div className="flex h-8 w-[118px] items-center justify-center rounded-md border border-solid border-[#3C356D] bg-[#201B43]">
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
        <div className="h-14 w-[1px] bg-[#3C356D] max-lg:hidden" />
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
            <span className="font-h1 text-xl leading-[26px] text-neutral-100 xl:text-2xl xl:leading-[31px]">
              117
            </span>
            <span className="font-light leading-6 text-[#F9F8F760]">
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
        <div className="h-14 w-[1px] bg-[#3C356D] max-lg:hidden" />
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
            <span className="font-h1 text-xl leading-[26px] text-neutral-100 xl:text-2xl xl:leading-[31px]">
              1M OSMO
            </span>
            <span className="font-light leading-6 text-[#F9F8F760]">
              burned
            </span>
          </div>
        </div>
      </div>
      <BackersSection />
    </section>
  );
}
