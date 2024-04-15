"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { tickerAnimationAssets } from "@/components/sections/hero/tickers";
import { useTickers } from "@/lib/store/useTickers";

export default function StartTradingLink() {
  const { currentIndex } = useTickers();

  const { denom } = useMemo(
    () =>
      tickerAnimationAssets[(currentIndex + 1) % tickerAnimationAssets.length],
    [currentIndex],
  );

  const link = useMemo(
    () =>
      `https://app.osmosis.zone/?from=USDC&to=${denom}&utm_source=osmosis_landing_page&utm_campaign=swap`,
    [denom],
  );

  return (
    <Link
      href={link}
      target="_blank"
      className="flex h-14 w-full items-center justify-center gap-1 rounded-xl bg-wosmongton-700 xl:h-16"
    >
      <p className="text-sm text-neutral-100 lg:text-base">Start Trading</p>
      <Image
        src={"/assets/icons/arrow-up-right.svg"}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5"
        priority
      />
    </Link>
  );
}
