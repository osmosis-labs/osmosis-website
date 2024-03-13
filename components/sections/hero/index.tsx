import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-hero-section relative flex max-w-content items-center justify-between gap-47 overflow-hidden rounded-[48px] p-6">
      <div className="relative z-10 flex flex-col gap-6 px-8">
        <div className="flex flex-col gap-1 pb-7">
          <h1 className="whitespace-nowrap">Discover and trade</h1>
          <h1 className="inline-flex gap-6">
            the next
            <div className="flex items-center gap-3 rounded-lg border-l-2 border-r-2 border-[#4D4965] px-6 py-1">
              <Image
                src={"/assets/icons/tia.svg"}
                alt="TIA icon"
                width={70}
                height={70}
              />
              TIA
            </div>
          </h1>
          <h1 className="inline-flex gap-4">
            on
            <div className="flex items-center gap-2.5">
              <Image
                src={"/assets/icons/osmo-logo-icon.svg"}
                alt="OSMO logo"
                width={80}
                height={80}
              />
              Osmosis.
            </div>
          </h1>
        </div>
        <span className="text-lg font-light text-white-full/60">
          The largest decentralized crypto exchange in Cosmos.
        </span>
      </div>
      <div className="swap-tool-bg relative z-10 max-w-swap-tool-container rounded-3xl border border-white-full/40 px-2.5 py-10">
        <div className="flex flex-col rounded-3xl bg-[#140F34] px-4 pb-3 pt-5.5">
          <div className="relative flex flex-col gap-1">
            <div className="flex items-center justify-between gap-52 rounded-xl bg-[#282750] pb-8 pl-5 pr-4 pt-10">
              <div className="flex items-center gap-3">
                <Image
                  src={"/assets/icons/usdc.svg"}
                  alt="USDC icon"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <span className="text-lg">USDC</span>
                  <span className="whitespace-nowrap text-[#958FC0]">
                    USD Coin
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg">1000</span>
                <span className="whitespace-nowrap text-[#B0AADC]">≈ $995</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#282750] pb-8 pl-5 pr-4 pt-10">
              <div className="flex items-center gap-3">
                <Image
                  src={"/assets/icons/tia.svg"}
                  alt="TIA icon"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <span className="text-lg">TIA</span>
                  <span className="text-[#958FC0]">Celestia</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <div className="h-4 w-32 rounded-full bg-[#565081]" />
                <div className="h-4 w-20 rounded-full bg-[#565081]" />
              </div>
            </div>
            <div className="absolute inset-x-0 left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#140F34] bg-[#282750]">
              <Image
                src={"/assets/icons/arrow-down.svg"}
                alt="Arrow down"
                width={10}
                height={12}
              />
            </div>
          </div>
          <div className="mb-9 mt-7.5 flex flex-col gap-2.5">
            <div className="h-4 w-65 rounded-full bg-[#282750]" />
            <div className="h-4 w-40 rounded-full bg-[#282750]" />
          </div>
          <button className="flex items-center justify-center rounded-2xl bg-wosmongton-700 py-5.5">
            <span className="inline-flex items-center gap-2">
              Start Trading
              <Image
                src={"/assets/icons/arrow-up-right.svg"}
                alt="Start trading"
                width={24}
                height={24}
              />
            </span>
          </button>
        </div>
      </div>
      <Image
        src={"/assets/hero-bg-illustration.svg"}
        alt="Illustration"
        width={959}
        height={629}
        className="absolute bottom-0 right-0"
      />
    </section>
  );
}
