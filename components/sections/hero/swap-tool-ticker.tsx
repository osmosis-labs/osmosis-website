"use client";

import { useMemo } from "react";

import Image from "next/image";
import { tickerAnimationAssets } from "@/components/sections/hero/tickers";
import { useTickers } from "@/lib/store/useTickers";

export function SwapToolTicker() {
  const { currentIndex } = useTickers();

  const { denom, iconUri, name } = useMemo(
    () => tickerAnimationAssets[currentIndex % tickerAnimationAssets.length],
    [currentIndex],
  );

  const {
    denom: nextDenom,
    iconUri: nextIconUri,
    name: nextName,
  } = useMemo(
    () =>
      tickerAnimationAssets[(currentIndex + 1) % tickerAnimationAssets.length],
    [currentIndex],
  );

  return (
    <>
      <div
        key={denom}
        className="animate-swap-tool-ticker-fade-out flex items-center gap-2"
      >
        <Image
          src={iconUri}
          alt={`${denom} icon`}
          width={40}
          height={40}
          className="xl:h-12 xl:w-12"
          priority
        />
        <div className="flex flex-col">
          <span className="text-neutral-100 xl:text-xl">{name}</span>
          <span className="text-xs text-osmoverse-310 xl:text-sm 2xl:text-base">
            {denom}
          </span>
        </div>
      </div>
      {/**next */}
      <div
        key={nextDenom}
        className="animate-swap-tool-ticker-fade-in absolute flex items-center gap-2"
      >
        <Image
          src={nextIconUri}
          alt={`${nextDenom} icon`}
          width={40}
          height={40}
          className="xl:h-12 xl:w-12"
          priority
        />
        <div className="flex flex-col">
          <span className="text-neutral-100 xl:text-xl">{nextName}</span>
          <span className="text-xs text-osmoverse-310 xl:text-sm 2xl:text-base">
            {nextDenom}
          </span>
        </div>
      </div>
    </>
  );
}
