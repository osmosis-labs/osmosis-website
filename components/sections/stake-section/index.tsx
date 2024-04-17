import StakingApr from "@/components/sections/stake-section/staking-apr";
import Badge from "@/components/shared/badge";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function StakeSection() {
  return (
    <section className="relative z-10 mt-28 flex flex-col items-center justify-center gap-8 self-stretch px-2 py-4 sm:mt-20 sm:p-4 md:mt-[136px] lg:mt-28 xl:mt-[170px] 2xl:mt-52 2xl:p-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <Badge label="Secure the network" />
        <div className="flex flex-col items-center justify-center gap-2 self-stretch lg:gap-4">
          <h2 className="bg-stake-heading text-center font-poppins text-3.5xl font-medium leading-9.5 -tracking-2% md:text-4xl md:leading-10.75 lg:text-5xl lg:leading-13 xl:text-5.5xl xl:leading-15.25 2xl:text-6.25xl 2xl:leading-17.5">
            Stake to earn <br className="sm:hidden" />
            rewards.
          </h2>
          <p className="self-stretch text-center font-light leading-5.5 text-neutral-100 lg:text-xl lg:leading-7">
            Lock up your OSMO and earn passive <br className="sm:hidden" />
            staking <br className="hidden sm:block" />{" "}
            <span className="inline-flex items-center gap-1">
              rewards with up to{" "}
              <Suspense
                fallback={
                  <span className="relative min-h-5.5 min-w-22.5 after:absolute after:inset-0 after:h-5.5 after:w-22.5 after:rounded-lg after:bg-gradient-to-t after:from-[#25AF55] after:to-malachite-200 lg:after:h-7 lg:after:w-28"></span>
                }
              >
                <StakingApr />
              </Suspense>
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 lg:grid lg:grid-cols-[486px,434px] lg:gap-2 xl:grid-cols-[523px,581px] xl:gap-4 2xl:grid-cols-[664px,712px]">
        <div className="flex flex-col justify-center gap-2 self-stretch md:grid md:grid-cols-2 xl:gap-4">
          {/**card */}
          <Link
            href={
              "https://medium.com/osmosis-community-updates/osmosis-superfluid-staking-faq-a7b49797cb72"
            }
            target="_blank"
            className="flex flex-col gap-6 self-stretch rounded-2xl border border-solid border-osmoverse-650 bg-osmoverse-775 px-4 py-6 lg:gap-8 lg:p-6 xl:rounded-3xl 2xl:gap-10"
          >
            <Image
              src={"/assets/icons/stake/osmo-blue.svg"}
              alt="Osmo blue icon"
              width={24}
              height={24}
            />
            <div className="flex flex-col gap-2">
              <h3 className="self-stretch font-poppins text-xl leading-6.5 text-neutral-100">
                Superfluid staking
              </h3>
              <p className="font-light leading-6.25 text-alpha-60">
                Access an innovative feature that allows you to earn trading
                fees and stake{" "}
                <span className="font-medium">at the same time.</span>
              </p>
            </div>
          </Link>
          {/**card */}
          <Link
            href={
              "https://forum.osmosis.zone/t/osmosis-taker-fees-real-yield-for-stakers-real-revenue-for-osmosis/638"
            }
            target="_blank"
            className="flex flex-col gap-6 self-stretch rounded-2xl border border-solid border-osmoverse-650 bg-osmoverse-775 px-4 py-6 lg:gap-8 lg:p-6 xl:rounded-3xl 2xl:gap-10"
          >
            <Image
              src={"/assets/icons/stake/plant-blue.svg"}
              alt="Plant blue icon"
              width={24}
              height={24}
            />
            <div className="flex flex-col gap-2">
              <h3 className="self-stretch font-poppins text-xl leading-6.5 text-neutral-100">
                Real yields
              </h3>
              <p className="font-light leading-6.25 text-alpha-60">
                Every trade on Osmosis generates fees that stakers receive for
                securing the protocol.
              </p>
            </div>
          </Link>
        </div>
        <StakeIllustration />
      </div>
    </section>
  );
}

function StakeIllustration() {
  const common = { alt: "Stake Illustration", quality: 100 };

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/assets/stake-illustrations/stake-illustration.webp",
    width: 342,
    height: 463,
  });

  const {
    props: { srcSet: sm },
  } = getImageProps({
    ...common,
    src: "/assets/stake-illustrations/stake-illustration-sm.webp",
    width: 416,
    height: 463,
  });

  const {
    props: { srcSet: md },
  } = getImageProps({
    ...common,
    src: "/assets/stake-illustrations/stake-illustration-md.webp",
    width: 608,
    height: 472,
  });

  const {
    props: { srcSet: lg },
  } = getImageProps({
    ...common,
    src: "/assets/stake-illustrations/stake-illustration-lg.webp",
    width: 455,
    height: 707,
  });

  const {
    props: { srcSet: xl },
  } = getImageProps({
    ...common,
    src: "/assets/stake-illustrations/stake-illustration-xl.webp",
    width: 597,
    height: 707,
  });

  const {
    props: { srcSet: xxl },
  } = getImageProps({
    ...common,
    src: "/assets/stake-illustrations/stake-illustration-2xl.webp",
    width: 712,
    height: 707,
  });

  return (
    <div className="relative max-sm:max-w-[342px] max-sm:self-center">
      <picture>
        <source media="(min-width: 1536px)" srcSet={xxl} />
        <source media="(min-width: 1280px)" srcSet={xl} />
        <source media="(min-width: 1024px)" srcSet={lg} />
        <source media="(min-width: 768px)" srcSet={md} />
        <source media="(min-width: 640px)" srcSet={sm} />
        <source media="(min-width: 0px)" srcSet={mobile} />
        <img
          {...rest}
          style={{ width: "100%", height: "auto" }}
          alt=""
          aria-hidden
        />
      </picture>
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
