"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";

interface TickerProps {
  denom: string;
  iconUri: string;
}

const tickerAnimationAssets: TickerProps[] = [
  {
    denom: "TIA",
    iconUri: "/assets/icons/tia.svg",
  },
  {
    denom: "DYM",
    iconUri: "/assets/icons/dym.svg",
  },
  {
    denom: "PEPE",
    iconUri: "/assets/icons/pepe.svg",
  },
  {
    denom: "STARS",
    iconUri: "/assets/icons/stars.svg",
  },
  {
    denom: "TIA",
    iconUri: "/assets/icons/tia.svg",
  },
  {
    denom: "DYM",
    iconUri: "/assets/icons/dym.svg",
  },
];

export function Tickers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextTickerW, setNextTickerW] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerAnimationAssets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex h-full items-center justify-between sm:gap-2.5 lg:gap-2 xl:gap-2.5">
      <Bracket />
      <div
        className="ticker-mask max-h-full overflow-hidden transition-all duration-1000"
        style={{
          //@ts-ignore
          width: `${nextTickerW}px`,
        }}
      >
        <div
          key={currentIndex}
          className="animate-ticker mt-1.5 sm:mt-[3px] xl:mt-2 2xl:mt-[5px]"
        >
          <Ticker {...tickerAnimationAssets[currentIndex]} />
          <Ticker
            {...tickerAnimationAssets[
              (currentIndex + 1) % tickerAnimationAssets.length
            ]}
            ref={(el) => setNextTickerW(el?.clientWidth ?? 0)}
          />
        </div>
      </div>
      <Bracket isMirrored />
    </div>
  );
}

export const Ticker = forwardRef<HTMLDivElement, TickerProps>(
  ({ denom, iconUri }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-max items-center gap-2 pb-[1px] pl-[7.5px] pr-[6.5px] sm:p-0 lg:pb-0.5 lg:pl-1 lg:pr-[3px] lg:pt-0.5 xl:p-0 2xl:gap-3",
        )}
      >
        <Image
          src={iconUri}
          alt={`${denom} icon`}
          width={34}
          height={34}
          className="sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-17.5 2xl:w-17.5"
        />
        <span>{denom}</span>
      </div>
    );
  },
);

Ticker.displayName = "Ticker";

export function Bracket({ isMirrored }: { isMirrored?: boolean }) {
  return (
    <Image
      src={"/assets/bracket.svg"}
      alt="Bracket"
      width={6}
      height={48}
      className={cn(
        "h-12 self-stretch sm:h-[46px] lg:h-[58px] lg:w-2 xl:h-[80px] xl:w-2.5 2xl:h-22.5 2xl:w-3",
        { "scale-x-[-1]": isMirrored },
      )}
    />
  );
}
