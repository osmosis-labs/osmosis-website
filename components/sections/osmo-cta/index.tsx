import Image from "next/image";

export default function OsmoCTASection() {
  return (
    <section className="mt-12 flex flex-col items-center justify-center gap-2.5 self-stretch p-2 sm:mt-14 sm:p-4 md:gap-4 xl:mt-18 xl:gap-6 2xl:mt-20 2xl:gap-4 2xl:p-8 2xl:pb-0">
      {/**setting h-[470px] because there is no definitive copy yet for the subtitle on 2xl */}
      <div className="border-osmo-cta bg-osmo-cta relative flex flex-col self-stretch rounded-3xl px-6 pb-80 pt-8 sm:rounded-[32px] md:px-8 md:py-12 lg:p-12 2xl:h-[470px] 2xl:px-16 2xl:py-14">
        <div className="flex flex-col justify-center gap-6 self-stretch md:gap-8 md:self-end xl:px-6 2xl:gap-10 2xl:px-0 2xl:py-8">
          <div className="flex flex-col justify-center gap-4 self-stretch md:self-start lg:gap-4">
            <h5 className="text-3.5xl inline-flex flex-col gap-2 font-h1 font-medium leading-[35.2px] -tracking-[0.64px] text-neutral-100 sm:flex-row sm:items-center md:flex-col md:items-start md:text-4xl md:leading-[39.6px] md:-tracking-[0.72px] lg:flex-row lg:items-center lg:gap-3 lg:text-5xl lg:leading-[52.8px] lg:-tracking-[0.96px] xl:text-[56px] xl:leading-[61.6px] xl:-tracking-[1.12px] 2xl:gap-1 2xl:text-[64px] 2xl:leading-[70.4px] 2xl:-tracking-[1.28px]">
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
    </section>
  );
}
