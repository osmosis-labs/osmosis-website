import Image from "next/image";

export default function TradeSection() {
  return (
    <section className="mt-14 self-stretch p-2 sm:p-4 xl:mt-18 2xl:mt-20 2xl:p-6">
      <div className="bg-trade-section flex self-stretch rounded-3xl border border-solid border-[#403686] bg-[#201B43] px-6 pb-80 pt-12 sm:rounded-4xl md:justify-end md:px-8 md:py-12 lg:p-12 2xl:p-20">
        <div className="flex flex-col justify-center gap-8 self-stretch md:w-[291px] md:self-end lg:w-[367px] 2xl:w-[520px]">
          <div className="flex flex-col gap-4 self-stretch md:self-start">
            <h4 className="inline-flex flex-col gap-1.5 font-h1 text-3.5xl font-medium leading-10 -tracking-[0.64px] text-neutral-100 sm:flex-row md:h-[86px] md:flex-col md:gap-0 md:text-4xl md:leading-[44px] md:-tracking-[0.72px] lg:h-[110px] lg:text-5xl lg:leading-[58px] lg:-tracking-[0.96px] xl:h-[131px] xl:text-[56px] xl:leading-[68px] xl:-tracking-[1.12px] 2xl:h-[147px] 2xl:text-[64px] 2xl:leading-[78px] 2xl:-tracking-[1.28px]">
              <span className="bg-trade-headline">Start trading</span> today.
            </h4>
            <p className="self-stretch leading-[26px] text-neutral-100 md:w-[280px] lg:w-[368px] 2xl:w-[475px]">
              Simply set up your wallet and connect to Osmosis instantly, from
              anywhere. No sign-ups required.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-wosmongton-700 px-6 py-4 md:w-[220px] xl:rounded-[14px] xl:py-5"
          >
            <span className="leading-[26px]">Get Started</span>
            <Image
              src={"/assets/icons/arrow-up-right.svg"}
              alt="Get Started"
              width={24}
              height={24}
              className="2xl:hidden"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
