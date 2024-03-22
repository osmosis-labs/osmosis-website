import Image from "next/image";

export default function StakeSection() {
  return (
    <section className="mt-28 flex flex-col items-center justify-center gap-8 self-stretch px-2 py-4 sm:mt-20 sm:p-4 md:mt-[136px] lg:mt-28 xl:mt-[170px] 2xl:mt-52 2xl:p-6">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex items-center justify-center rounded-full bg-[#37D56D40] px-3 py-1 backdrop-blur-xl">
          <span className="text-sm leading-[22px] text-[#37D56D] lg:text-base lg:leading-[25px]">
            Secure the network
          </span>
        </div>
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
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-2 xl:gap-4">
        <StakeIllustration />
      </div>
    </section>
  );
}

function StakeIllustration() {
  return (
    <div className="relative">
      <Image
        src={"/assets/stake-illustrations/stake-illustration.svg"}
        alt="Stake Illustration"
        className="sm:hidden"
        width={342}
        height={463}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-sm.svg"}
        alt="Stake Illustration"
        className="hidden sm:block md:hidden"
        width={416}
        height={463}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-md.svg"}
        alt="Stake Illustration"
        className="hidden md:block lg:hidden"
        width={608}
        height={472}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-lg.svg"}
        alt="Stake Illustration"
        className="hidden lg:block xl:hidden"
        width={455}
        height={707}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-xl.svg"}
        alt="Stake Illustration"
        className="hidden xl:block 2xl:hidden"
        width={597}
        height={707}
      />
      <Image
        src={"/assets/stake-illustrations/stake-illustration-2xl.svg"}
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
        className="absolute -right-2 top-0 sm:-top-4 sm:right-0 sm:h-[102px] sm:w-[102px] md:right-14 md:top-0 md:h-[105px] md:w-[105px] lg:hidden xl:-right-1 xl:-top-4 xl:block xl:h-[137px] xl:w-[137px] 2xl:right-0 2xl:top-2 2xl:h-[167px] 2xl:w-[167px]"
      />
    </div>
  );
}
