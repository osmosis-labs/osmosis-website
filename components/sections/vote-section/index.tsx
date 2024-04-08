import Image from "next/image";
import Link from "next/link";

export default function VoteSection() {
  return (
    <div className="relative">
      <section className="relative z-10 mt-8 flex flex-col items-center justify-center self-stretch p-2 sm:mt-14 sm:p-4 xl:mt-12 2xl:mt-14 2xl:p-6">
        <div className="bg-vote-section-grad border-vote-section relative flex flex-col self-stretch overflow-hidden rounded-3xl bg-osmoverse-850 px-6 pb-80 pt-8 sm:rounded-4xl md:px-8 md:pt-12 lg:p-12 2xl:p-20">
          <div className="relative z-10 flex flex-col justify-center self-stretch md:w-[466px] md:self-start lg:w-[398px] xl:w-[519px]">
            <div className="flex flex-col gap-8 self-stretch lg:self-start 2xl:justify-center">
              <div className="flex flex-col gap-2 self-stretch lg:gap-2.5 2xl:self-start">
                <h2 className="inline-flex flex-col justify-center gap-1 font-poppins text-3.5xl font-medium leading-8.75 -tracking-2% text-neutral-100 md:text-4xl md:leading-9.75 lg:gap-0 lg:text-5xl lg:leading-13 xl:text-5.5xl xl:leading-15.25 2xl:text-6.25xl 2xl:leading-17.5">
                  <span>Have your say in</span>
                  <span className="bg-vote-headline">Osmosis’ future.</span>
                </h2>
                <p className="self-stretch leading-6.25 text-neutral-100 2xl:w-[475px]">
                  Join the global decentralized community of OSMO stakers and
                  vote on the future of the network in the latest governance
                  proposals.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-8 self-stretch lg:gap-6 xl:gap-8 xl:self-start">
                <div className="flex flex-col items-center gap-2 self-stretch md:flex-row xl:gap-3 2xl:gap-4">
                  <Link
                    href={"https://daodao.zone/gov/osmosis/proposals"}
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
                  </Link>
                  <Link
                    href={"https://forum.osmosis.zone/"}
                    className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-osmoverse-760 px-6 py-4 md:flex-1 lg:flex-initial xl:rounded-[14px] xl:py-5 2xl:px-8"
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
                  </Link>
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
          <VoteSectionIllustration />
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

function VoteSectionIllustration() {
  return (
    <>
      <Image
        src={"/assets/vote-section/grid.svg"}
        alt=""
        width={687}
        height={687}
        className="vote-grid absolute -bottom-[152px] -right-[194px] h-[687px] w-[687px] max-w-none md:hidden"
      />
      <Image
        src={"/assets/vote-section/grid-md.svg"}
        alt=""
        width={801}
        height={742}
        className="absolute -bottom-[138px] hidden max-w-none md:-right-[136px] md:block lg:hidden"
      />
      <Image
        src={"/assets/vote-section/grid-lg.svg"}
        alt=""
        width={629}
        height={629}
        className="absolute -bottom-32 -right-25 hidden lg:block lg:h-[629px] lg:w-[629px] xl:-bottom-[200px] xl:h-[741px] xl:w-[741px] 2xl:-bottom-58 2xl:-right-[136px] 2xl:h-[904px] 2xl:w-[904px]"
      />
      <Image
        src={"/assets/vote-section/doge.svg"}
        alt=""
        width={196}
        height={265}
        className="absolute -bottom-6.5 right-[84px] sm:h-[275px] sm:w-[204px] md:-bottom-7 md:right-[154px] md:h-[328px] md:w-[243px] lg:right-[58px] lg:h-[386px] lg:w-[287px] xl:-bottom-7.5 xl:right-[124px] xl:h-[370px] xl:w-[276px] 2xl:-bottom-[38px] 2xl:right-[138px] 2xl:h-[452px] 2xl:w-[336px]"
      />
      <Image
        src={"/assets/vote-section/msg.svg"}
        alt=""
        width={71}
        height={128}
        className="absolute -left-1 bottom-[131px] sm:left-17.5 md:left-[86px] md:h-[180px] md:w-25 lg:bottom-[205px] lg:left-[unset] lg:right-[321px] lg:h-[161px] lg:w-[90px] xl:bottom-[172px] xl:right-[400px] xl:h-[190px] xl:w-26 2xl:bottom-[227px] 2xl:right-[471px] 2xl:h-[231px] 2xl:w-32"
      />
      <Image
        src={"/assets/vote-section/msg-2.svg"}
        alt=""
        width={89}
        height={86}
        className="absolute -left-3 bottom-8 sm:left-[62px] md:-bottom-1.5 md:left-17 md:h-[121px] md:w-[124px] lg:bottom-[58px] lg:left-[unset] lg:right-[334px] lg:h-[108px] lg:w-[110px] xl:bottom-5 xl:right-[410px] xl:h-[127px] xl:w-[130px] 2xl:bottom-8.5 2xl:right-[490px] 2xl:h-[155px] 2xl:w-40"
      />
      <Image
        src={"/assets/vote-section/hole.svg"}
        alt=""
        width={86}
        height={181}
        className="absolute bottom-3.5 right-0 md:-bottom-3.5 md:right-4 md:h-[254px] md:w-[121px] lg:-right-14 lg:bottom-14 lg:h-[226px] lg:w-[181px] xl:-right-12 xl:bottom-5 xl:h-[266px] xl:w-[213px] 2xl:-right-18 2xl:bottom-10 2xl:h-[325px] 2xl:w-65"
      />
    </>
  );
}
