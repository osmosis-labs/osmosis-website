import Image from "next/image";

export default function VoteSection() {
  return (
    <div className="relative">
      <section className="relative z-10 mt-8 flex flex-col items-center justify-center self-stretch p-2 sm:mt-14 sm:p-4 xl:mt-12 2xl:mt-14 2xl:p-6">
        <div className="bg-vote-section border-vote-section flex flex-col self-stretch rounded-3xl bg-osmoverse-850 px-6 pb-80 pt-8 sm:rounded-4xl md:px-8 md:pt-12 lg:p-12 2xl:p-20">
          <div className="flex flex-col justify-center self-stretch md:w-[466px] md:self-start lg:w-[398px] xl:w-[519px]">
            <div className="flex flex-col gap-8 self-stretch lg:self-start 2xl:justify-center">
              <div className="flex flex-col gap-2 self-stretch lg:gap-2.5 2xl:self-start">
                <div className="flex flex-col justify-center gap-1 lg:gap-0">
                  <h2 className="xl:text-5.5xl 2xl:text-6.25xl leading-8.75 md:leading-9.75 lg:leading-13 xl:leading-15.25 font-poppins text-3.5xl font-medium -tracking-[0.64px] text-neutral-100 md:text-4xl lg:text-5xl lg:-tracking-[0.96px] xl:-tracking-[1.12px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
                    Have your say in
                  </h2>
                  <h2 className="bg-vote-headline xl:text-5.5xl 2xl:text-6.25xl leading-8.75 md:leading-9.75 lg:leading-13 xl:leading-15.25 font-poppins text-3.5xl font-medium -tracking-[0.64px] text-neutral-100 md:text-4xl lg:text-5xl lg:-tracking-[0.96px] xl:-tracking-[1.12px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
                    Osmosis’ future.
                  </h2>
                </div>
                <p className="leading-6.25 self-stretch text-neutral-100 2xl:w-[475px]">
                  Join the global decentralized community of OSMO stakers and
                  vote on the future of the network in the latest governance
                  proposals.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-8 self-stretch lg:gap-6 xl:gap-8 xl:self-start">
                <div className="flex flex-col items-center gap-2 self-stretch md:flex-row xl:gap-3 2xl:gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-wosmongton-700 px-6 py-4 md:flex-1 md:self-start lg:flex-initial xl:rounded-[14px] xl:px-8 xl:py-5"
                  >
                    <span className="leading-6.25 text-neutral-100">
                      Vote now
                    </span>
                    <Image
                      src={"/assets/icons/arrow-up-right.svg"}
                      alt="Vote now"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    type="button"
                    className="bg-osmoverse-760 flex items-center justify-center gap-1 self-stretch rounded-xl px-6 py-4 md:flex-1 lg:flex-initial xl:rounded-[14px] xl:py-5 2xl:px-8"
                  >
                    <span className="leading-6.25 text-neutral-100">
                      Join the discussion
                    </span>
                    <Image
                      src={"/assets/icons/discussion.svg"}
                      alt="Join the discussion"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <div className="flex items-center gap-2 opacity-70">
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full border border-solid border-[#F9F8F725]">
                    <Image
                      src={"/assets/icons/info.svg"}
                      alt="Info"
                      width={15}
                      height={15}
                    />
                  </div>
                  {/** Since whitespace-nowrap would squash the info icon, I've manually set the tracking to be the maximum amount possible to fill the parent
                   * @fabryscript
                   */}
                  <span className="tracking-[0.28px] text-neutral-100 sm:tracking-[0.5px]">
                    1 OSMO minimum stake required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/grids/base/grid-4.svg"}
        alt="Grid 4"
        width={358}
        height={1663}
        className="absolute -bottom-[290px] z-0 h-auto w-full sm:hidden"
      />
      <Image
        src={"/assets/grids/sm/grid-4.svg"}
        alt="Grid 4"
        width={448}
        height={1587}
        className="bottom absolute -bottom-[290px] z-0 hidden h-auto w-full sm:block md:hidden"
      />
      <Image
        src={"/assets/grids/md/grid-4.svg"}
        alt="Grid 4"
        width={640}
        height={1212}
        className="bottom absolute -bottom-[290px] z-0 hidden h-auto w-full md:block lg:hidden"
      />
      <Image
        src={"/assets/grids/lg/grid-4.svg"}
        alt="Grid 4"
        width={962}
        height={758}
        className="bottom absolute -bottom-[295px] z-0 hidden h-auto w-full lg:block xl:hidden"
      />
      <Image
        src={"/assets/grids/xl/grid-4.svg"}
        alt="Grid 4"
        width={1155}
        height={912}
        className="bottom absolute -bottom-[360px] z-0 hidden h-auto w-full xl:block 2xl:hidden"
      />
      <Image
        src={"/assets/grids/2xl/grid-4.svg"}
        alt="Grid 4"
        width={1155}
        height={912}
        className="bottom absolute -bottom-[543px] z-0 hidden h-auto w-full 2xl:block"
      />
    </div>
  );
}
