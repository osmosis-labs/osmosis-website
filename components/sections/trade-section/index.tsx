import Image from "next/image";
import Link from "next/link";

export default function TradeSection() {
  return (
    <section className="mt-14 self-stretch p-2 sm:p-4 xl:mt-18 2xl:mt-20 2xl:p-6">
      <div className="bg-gradient-trade relative flex self-stretch overflow-hidden rounded-3xl border border-solid border-[#403686] bg-osmoverse-775 px-6 pb-80 pt-12 sm:rounded-4xl md:justify-end md:px-8 md:py-12 lg:p-12 2xl:p-20">
        <div className="flex flex-col justify-center gap-8 self-stretch md:w-[291px] md:self-end lg:w-[367px] 2xl:w-[520px]">
          <div className="flex flex-col gap-4 self-stretch md:self-start">
            <h4 className="inline-flex flex-col gap-1.5 font-poppins text-3.5xl font-medium leading-10 -tracking-2% text-neutral-100 sm:flex-row md:h-[86px] md:flex-col md:gap-0 md:text-4xl md:leading-11 lg:h-[110px] lg:text-5xl lg:leading-14.5 xl:h-[131px] xl:text-5.5xl xl:leading-17 2xl:h-[147px] 2xl:text-6.25xl 2xl:leading-[78px]">
              <span className="bg-trade-headline">Start trading</span> today.
            </h4>
            <p className="self-stretch leading-6.5 text-neutral-100 md:w-[280px] lg:w-[368px] 2xl:w-[475px]">
              Simply set up your wallet and connect to Osmosis instantly, from
              anywhere. No sign-ups required.
            </p>
          </div>
          <Link
            href={"https://app.osmosis.zone/"}
            type="button"
            className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-wosmongton-700 px-6 py-4 md:w-[220px] xl:rounded-[14px] xl:py-5"
          >
            <span className="leading-6.5">Get Started</span>
            <Image
              src={"/assets/icons/arrow-up-right.svg"}
              alt="Get Started"
              width={24}
              height={24}
              className="2xl:hidden"
            />
          </Link>
        </div>
        <DoggoIllustration />
      </div>
    </section>
  );
}

export function DoggoIllustration() {
  return (
    <>
      <Image
        src={"/assets/trade-section/coins.svg"}
        alt=""
        width={296}
        height={89}
        className="absolute -bottom-7 sm:bottom-0 sm:left-12 md:-bottom-8 md:-left-[5px] md:h-[78px] md:w-[258px] lg:-bottom-11 lg:left-15 lg:h-[106px] lg:w-[351px] xl:-bottom-[50px] xl:left-[125px] xl:h-[126px] xl:w-[414px] 2xl:-bottom-[56px] 2xl:left-[91px] 2xl:h-[152px] 2xl:w-[500px]"
      />
      <Image
        src={"/assets/trade-section/doggo.svg"}
        alt=""
        width={224}
        height={220}
        className="absolute bottom-4.5 left-11 sm:bottom-14 sm:left-16 md:bottom-4 md:left-3 md:h-[190px] md:w-[194px] lg:left-22.5 lg:h-[258px] lg:w-[264px] xl:bottom-[30px] xl:left-[150px] xl:h-[305px] xl:w-[311px] 2xl:left-[120px] 2xl:h-[370px] 2xl:w-[376px]"
      />
      <Image
        src={"/assets/trade-section/coin.svg"}
        alt=""
        width={109}
        height={96}
        className="absolute bottom-[118px] left-[248px] sm:bottom-[140px] sm:left-[268px] md:bottom-[84px] md:left-[188px] md:h-[83px] md:w-[94px] lg:bottom-[115px] lg:left-[330px] lg:h-[113px] lg:w-[128px] xl:bottom-[144px] xl:left-[433px] xl:h-[134px] xl:w-[151px] 2xl:bottom-[123px] 2xl:left-[470px] 2xl:h-[176px] 2xl:w-[200px]"
      />
      <Image
        src={"/assets/trade-section/coin-purple.svg"}
        alt=""
        width={172}
        height={172}
        className="absolute -left-10 bottom-30 -rotate-[13.35deg] sm:-left-4.5 sm:bottom-[150px] md:-left-[45px] md:bottom-[116px] md:h-[153px] md:w-[153px] md:-rotate-[26.7deg] lg:-left-6.5 lg:bottom-[112px] lg:h-[208px] lg:w-[208px] xl:bottom-[152px] xl:left-5.5 xl:h-[245px] xl:w-[245px] 2xl:-left-8.5 2xl:bottom-[180px] 2xl:h-[296px] 2xl:w-[296px]"
      />
    </>
  );
}
