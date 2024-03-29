import Image from "next/image";

const airdrops = Array<{ uri: string; name: string }>(22).fill({
  uri: "/assets/icons/pepe.svg",
  name: "Pepe",
});

export default function StakeSection() {
  return (
    <section className="mt-28 flex flex-col items-center justify-center gap-8 self-stretch px-2 py-4 sm:mt-20 sm:p-4 md:mt-[136px] lg:mt-28 xl:mt-[170px] 2xl:mt-52 2xl:p-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex max-w-max items-center justify-center rounded-full bg-[#37D56D40] px-3 py-1 backdrop-blur-xl">
          <span className="text-sm leading-[22px] text-[#37D56D] lg:text-base lg:leading-[25px]">
            Secure the network
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 self-stretch lg:gap-4">
          <h4 className="bg-stake-heading text-center font-h1 text-3.5xl font-medium leading-[38px] -tracking-[0.64px] md:text-4xl md:leading-[43px] md:-tracking-[0.72px] lg:text-5xl lg:leading-[52px] lg:-tracking-[0.96px] xl:text-[56px] xl:leading-[61px] xl:-tracking-[1.12px] 2xl:text-[64px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
            Stake to earn <br className="sm:hidden" />
            rewards.
          </h4>
          <p className="self-stretch text-center font-light leading-[22px] text-neutral-100 lg:text-xl lg:leading-7">
            Lock up your OSMO and earn passive <br className="sm:hidden" />
            staking <br className="hidden sm:block" /> rewards with up to{" "}
            <span className="text-[#37D56D]">10.86% APR.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 lg:grid lg:grid-cols-[486px,434px] lg:gap-2 xl:grid-cols-[523px,581px] xl:gap-4 2xl:grid-cols-[664px,712px]">
        <div className="flex flex-col justify-center gap-2 self-stretch md:grid md:grid-cols-2 xl:gap-4">
          {/**card */}
          <div className="flex flex-col gap-6 self-stretch rounded-2xl border border-solid border-[#3C356D] bg-[#201B43] px-4 py-6 lg:gap-8 lg:p-6 xl:rounded-3xl 2xl:gap-10">
            <Image
              src={"/assets/icons/stake/osmo-blue.svg"}
              alt="Osmo blue icon"
              width={24}
              height={24}
            />
            <div className="flex flex-col gap-2">
              <span className="self-stretch font-h1 text-xl leading-[26px] text-neutral-100">
                Superfluid staking
              </span>
              <p className="font-light leading-[25px] text-[#F9F8F799]">
                Access an innovative feature that allows you to earn trading
                fees and stake{" "}
                <span className="font-medium">at the same time.</span>
              </p>
            </div>
          </div>
          {/**card */}
          <div className="flex flex-col gap-6 self-stretch rounded-2xl border border-solid border-[#3C356D] bg-[#201B43] px-4 py-6 lg:gap-8 lg:p-6 xl:rounded-3xl 2xl:gap-10">
            <Image
              src={"/assets/icons/stake/plant-blue.svg"}
              alt="Plant blue icon"
              width={24}
              height={24}
            />
            <div className="flex flex-col gap-2">
              <span className="self-stretch font-h1 text-xl leading-[26px] text-neutral-100">
                Organic yields
              </span>
              <p className="font-light leading-[25px] text-[#F9F8F799]">
                Every trade on Osmosis generates fees that stakers receive for
                securing the protocol.
              </p>
            </div>
          </div>
          {/**card */}
          <div className="flex flex-col gap-6 self-stretch overflow-hidden rounded-2xl border border-solid border-[#3C356D] bg-[#201B43] px-4 py-6 md:col-span-2 lg:gap-0 lg:p-6 xl:rounded-3xl 2xl:justify-between 2xl:gap-4">
            <Image
              src={"/assets/icons/stake/giftbox-blue.svg"}
              alt="Giftbox blue icon"
              width={24}
              height={24}
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 self-stretch py-3 md:flex-row md:items-center md:gap-8 lg:justify-between lg:gap-0">
                <div className="flex flex-col gap-2 md:w-[242px] 2xl:w-[300px]">
                  <span className="self-stretch font-h1 text-xl leading-[26px] text-neutral-100">
                    Airdrop exposure
                  </span>
                  <p className="font-light leading-[25px] text-[#F9F8F799]">
                    OSMO stakers have received
                    <br className="hidden md:block 2xl:hidden" /> up to{" "}
                    <br className="hidden 2xl:block" /> over X airdrops to date.
                  </p>
                </div>
                <div className="hidden h-18 w-[1px] bg-[#3C356D] md:block" />
                <div className="flex gap-3 max-md:items-center md:flex-col md:gap-1 md:px-4 lg:w-[187px] 2xl:w-auto">
                  <span className="bg-stake-heading font-h1 text-3.5xl leading-[35px] -tracking-[0.64px] 2xl:text-5xl 2xl:leading-[52px] 2xl:-tracking-[0.96px]">
                    $65M
                  </span>
                  <p className="font-light leading-[25px] text-[#F9F8F799]">
                    Airdropped to <br className="hidden md:block 2xl:hidden" />{" "}
                    OSMO stakers
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 2xl:gap-4">
                <div className="flex flex-col gap-6">
                  {/**row */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      <div className="before:bg-gradient-pulse-green relative h-5 w-5 before:absolute before:left-1/2 before:top-1/2 before:h-[90px] before:w-[90px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-[20px] before:content-['']">
                        <Image
                          src={"/assets/pulse-green.svg"}
                          alt="Upcoming Airdrops"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="font-light text-neutral-100">
                        Upcoming Airdrops*
                      </span>
                    </div>
                    <div className="tweets-mask relative flex h-[48px]">
                      <div className="upcoming-airdrops-row-width absolute flex animate-upcoming-airdrops-marquee items-center gap-2">
                        {airdrops.map(({ name, uri }, i) => {
                          return (
                            <Image
                              key={`${name} icon ${i}`}
                              alt={`${name} icon`}
                              src={uri}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/**row */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src={"/assets/pulse-blue.svg"}
                        alt="Past Airdrops"
                        width={20}
                        height={20}
                      />
                      <span className="font-light text-neutral-100">
                        Past Airdrops
                      </span>
                    </div>
                    <div className="tweets-mask relative flex h-[48px]">
                      <div className="upcoming-airdrops-row-width absolute flex animate-upcoming-airdrops-marquee-reverse items-center gap-2">
                        {airdrops.map(({ name, uri }, i) => {
                          return (
                            <Image
                              key={`${name} icon ${i}`}
                              alt={`${name} icon`}
                              src={uri}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center self-stretch px-2 opacity-55">
                  <span className="text-sm leading-[22px] text-[#F9F8F799]">
                    * Upcoming airdrops are not guaranteed.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StakeIllustration />
      </div>
    </section>
  );
}

function StakeIllustration() {
  return (
    <div className="relative max-sm:max-w-[342px] max-sm:self-center">
      <Image
        src={"/assets/stake-illustrations/stake-illustration.webp"}
        alt="Stake Illustration"
        className="sm:hidden"
        width={342}
        height={463}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-sm.webp"}
        alt="Stake Illustration"
        className="hidden sm:block md:hidden"
        width={416}
        height={463}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-md.webp"}
        alt="Stake Illustration"
        className="hidden md:block lg:hidden"
        width={608}
        height={472}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-lg.webp"}
        alt="Stake Illustration"
        className="absolute hidden h-[707px] min-w-[455px] lg:block xl:hidden"
        width={455}
        height={707}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-xl.webp"}
        alt="Stake Illustration"
        className="absolute hidden h-[707px] min-w-[597px] xl:block 2xl:hidden"
        width={597}
        height={707}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-2xl.webp"}
        alt="Stake Illustration"
        className="hidden 2xl:block"
        width={712}
        height={707}
      />
      <Image
        src={"/assets/stake-illustrations/blob.svg"}
        alt="Blob"
        width={94}
        height={94}
        className="absolute -right-3 -top-3 sm:-top-4 sm:right-0 sm:h-[102px] sm:w-[102px] md:-top-4 md:right-14 md:h-[105px] md:w-[105px] lg:hidden xl:-right-4.5 xl:-top-4 xl:block xl:h-[137px] xl:w-[137px] 2xl:-top-2.5 2xl:right-0 2xl:h-[167px] 2xl:w-[167px]"
      />
    </div>
  );
}
