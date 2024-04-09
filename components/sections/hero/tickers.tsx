"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [currentElement, setCurrentElement] = useState<{
    element: React.JSX.Element;
    index: number;
  }>({
    element: <Ticker {...tickerAnimationAssets[0]} />,
    index: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement((prev) => ({
        element: (
          <Ticker
            {...tickerAnimationAssets[
              (prev.index + 1) % tickerAnimationAssets.length
            ]}
          />
        ),
        index: prev.index + 1,
      }));
      console.log("Tick", currentElement.index);
    }, 1000 * 2);
    return () => clearInterval(interval);
  }, [currentElement.index]);

  return (
    <div className="flex flex-col gap-1 transition-transform sm:mt-[3px] xl:mt-2 2xl:mt-[5px]">
      {currentElement.element}
    </div>
  );
}

export function Ticker({ denom, iconUri }: TickerProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut((p) => !p);
      console.log(`${denom} IN/OUT Tick`);
    }, 1000 * 1);

    return () => {
      clearInterval(interval);
    };
  }, [denom, iconUri]);

  return (
    <div
      className={cn(
        "flex translate-y-0 items-center gap-2 pb-[1px] pl-[7.5px] pr-[6.5px] opacity-100 transition-all sm:p-0 lg:pb-0.5 lg:pl-1 lg:pr-[3px] lg:pt-0.5 xl:p-0 2xl:gap-3",
        {
          "-translate-y-4 opacity-0": fadeOut,
        },
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
}
