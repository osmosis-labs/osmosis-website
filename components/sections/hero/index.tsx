import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="lg:bg-hero-section bg-hero-section-mobile flex flex-col items-center justify-between overflow-hidden rounded-3xl px-3 py-9 max-lg:gap-6 lg:flex-row lg:py-3 xl:rounded-[32px] 2xl:p-4 3xl:rounded-[48px] 3xl:p-6">
      <div className="relative z-10 flex flex-col gap-4 px-4 lg:gap-8 lg:px-6 xl:px-4 2xl:gap-4 3xl:gap-2 3xl:px-8">
        <h1 className="inline-flex flex-col gap-1 whitespace-nowrap font-h1 text-2xl leading-none tracking-tight lg:text-[40px] xl:text-[64px] 3xl:pb-7 3xl:text-[72px] 3xl:leading-[110%]">
          <span>Discover and trade</span>
          <span className="inline-flex items-center gap-3">
            the next
            <span className="flex items-center gap-2 px-2 xl:px-2.5 2xl:px-3.5">
              <Image
                src={"/assets/bracket.svg"}
                alt="Bracket"
                width={6}
                height={44}
                className="lg:h-12.5 lg:w-[5px] xl:h-16 xl:w-2 3xl:h-[90px] 3xl:w-2.5"
              />
              <span className="flex items-center gap-3">
                <Image
                  src={"/assets/icons/tia.svg"}
                  alt="TIA icon"
                  width={40}
                  height={40}
                  className="xl:h-14 xl:w-14 2xl:h-17.5 2xl:w-17.5"
                />
                TIA
              </span>
              <Image
                src={"/assets/bracket.svg"}
                alt="Bracket"
                width={6}
                height={44}
                className="scale-x-[-1] lg:h-12.5 lg:w-[5px] xl:h-16 xl:w-2 3xl:h-[90px] 3xl:w-2.5"
              />
            </span>
          </span>
          <span className="inline-flex items-center gap-1">
            on
            <span className="flex items-center gap-1 2xl:gap-2.5">
              <Image
                src={"/assets/icons/osmo-logo-icon.svg"}
                alt="OSMO logo"
                width={40}
                height={40}
                className="xl:h-12.5 xl:w-12.5 2xl:h-20 2xl:w-20"
              />
              Osmosis.
            </span>
          </span>
        </h1>
        <span className="font-light leading-[140%] text-white-full/60 2xl:text-xl">
          The largest decentralized crypto <br className="xl:hidden" /> exchange
          in Cosmos.
        </span>
      </div>
      <div className="swap-tool-bg relative w-80 rounded-3xl border border-solid border-white-full/40 p-[7px] xsm:w-full xl:max-w-[388px] xl:py-8 2xl:max-w-[440px] 2xl:py-9 3xl:max-w-swap-tool-container 3xl:px-2.5 3xl:py-10">
        <div className="flex flex-col gap-6 rounded-3xl bg-[#140F34] p-3 xl:pb-2.5 xl:pt-4 2xl:pb-2.5 2xl:pt-5 3xl:pb-3 3xl:pt-5.5">
          <div className="relative flex flex-col gap-0.5 xl:gap-[3px] 2xl:gap-1">
            <div className="flex h-20 w-full items-center justify-between rounded-2xl bg-[#282750] pl-4.5 pr-4.5 xl:h-[110px] xl:pr-3.5 2xl:pl-5 2xl:pr-4 3xl:h-30 3xl:pr-4.5">
              <div className="flex items-center gap-2.5 2xl:gap-3">
                <Image
                  src={"/assets/icons/usdc.svg"}
                  alt="USDC icon"
                  width={38}
                  height={38}
                  className="2xl:h-11 2xl:w-11 3xl:h-12 3xl:w-12"
                />
                <div className="flex flex-col">
                  <span className="xl:text-lg">USDC</span>
                  <span className="whitespace-nowrap text-[13px] text-[#958FC0] xl:text-sm 3xl:text-base">
                    USD Coin
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="xl:text-lg">1000</span>
                <span className="whitespace-nowrap text-[13px] text-[#958FC0] xl:text-sm 3xl:text-base">
                  ≈ $995
                </span>
              </div>
            </div>
            <div className="flex h-20 w-full items-center justify-between rounded-2xl bg-[#282750] pl-4.5 pr-4.5 xl:h-[110px] xl:pr-3.5 2xl:pl-5 2xl:pr-4 3xl:h-30 3xl:pr-4.5">
              <div className="flex items-center gap-3">
                <Image
                  src={"/assets/icons/tia.svg"}
                  alt="TIA icon"
                  width={38}
                  height={38}
                  className="2xl:h-11 2xl:w-11 3xl:h-12 3xl:w-12"
                />
                <div className="flex flex-col">
                  <span className="xl:text-lg">TIA</span>
                  <span className="whitespace-nowrap text-[13px] text-[#958FC0] xl:text-sm 3xl:text-base">
                    Celestia
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 2xl:gap-1.5">
                <div className="h-2 w-20 rounded-full bg-[#565081] xl:h-3.5 xl:w-26 2xl:h-4 2xl:w-28 3xl:h-4.5 3xl:w-32" />
                <div className="h-2 w-12 rounded-full bg-[#565081] xl:h-3.5 xl:w-16 2xl:h-4 2xl:w-18 3xl:h-4.5 3xl:w-20" />
              </div>
            </div>
            <div className="absolute inset-x-0 left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#140F34] bg-[#282750] xl:h-9 xl:w-9 xl:border-[3.2px] 2xl:h-10 2xl:w-10 2xl:border-[3.65px] 3xl:h-11 3xl:w-11 3xl:border-4">
              <Image
                src={"/assets/icons/arrow-down.svg"}
                alt="Arrow down"
                width={6}
                height={8}
                className="xl:h-2.5 xl:w-2 2xl:h-3 2xl:w-2.5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-1.5 xl:mb-1 xl:mt-0.5 xl:gap-2 2xl:mb-1.5 2xl:mt-1.5 2xl:gap-2.5 3xl:mt-2.5">
            <div className="h-2.5 w-41 rounded-full bg-[#282750] xl:h-3 xl:w-52 2xl:h-4 2xl:w-60 3xl:w-65" />
            <div className="h-2.5 w-24 rounded-full bg-[#282750] xl:h-3 xl:w-32 2xl:h-4 2xl:w-36 3xl:w-39" />
          </div>
          <button className="flex min-h-14 items-center justify-center rounded-xl bg-wosmongton-700 py-2 lg:rounded-[14px] xl:rounded-xl 2xl:min-h-16 2xl:rounded-2xl 2xl:py-2.5 3xl:min-h-17.5">
            <span className="inline-flex items-center gap-2 text-sm 3xl:text-base">
              Start Trading
              <Image
                src={"/assets/icons/arrow-up-right.svg"}
                alt="Start trading"
                width={20}
                height={20}
                className="2xl:h-5.5 2xl:w-5.5 3xl:h-6 3xl:w-6"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
