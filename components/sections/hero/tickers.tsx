"use client";

import { useTickers } from "@/lib/store/useTickers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";

export interface TickerProps {
  denom: string;
  name: string;
  iconUri: string;
}

export const tickerAnimationAssets: TickerProps[] = [
  {
    name: "Bitcoin",
    denom: "BTC",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg",
  },
  {
    name: "Cosmos Hub",
    denom: "ATOM",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
  },
  {
    name: "Celestia",
    denom: "TIA",
    iconUri: "/assets/icons/tia.svg",
  },
  {
    name: "Ethereum",
    denom: "ETH",
    iconUri: "/assets/icons/eth.svg",
  },
  {
    name: "dYdX",
    denom: "DYDX",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg",
  },
  {
    name: "Akash",
    denom: "AKT",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg",
  },
  {
    name: "Saga",
    denom: "SAGA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg",
  },
  {
    name: "Stargaze",
    denom: "STARS",
    iconUri: "/assets/icons/stars.svg",
  },
  {
    name: "Axelar",
    denom: "AXL",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg",
  },
  {
    name: "Dymension",
    denom: "DYM",
    iconUri: "/assets/icons/dym.svg",
  },
  {
    name: "Injective",
    denom: "INJ",
    iconUri: "/assets/icons/inj.svg",
  },
  {
    name: "Fetchhub",
    denom: "FET",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg",
  },
  {
    name: "Stride",
    denom: "STRD",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg",
  },
  {
    name: "Sei",
    denom: "SEI",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg",
  },
  {
    name: "Kujira",
    denom: "KUJI",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg",
  },
  {
    name: "Solana",
    denom: "SOL",
    iconUri: "/assets/icons/sol.svg",
  },
];

export function Tickers() {
  const { currentIndex, setCurrentIndex } = useTickers();
  const [nextTickerWidth, setNextTickerWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => ({
        ...prev,
        currentIndex: (prev.currentIndex + 1) % tickerAnimationAssets.length,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, [setCurrentIndex]);

  return (
    <div className="relative flex h-full items-center justify-between sm:gap-2.5 lg:gap-2 xl:gap-2.5">
      <Bracket />
      <div
        className="ticker-mask max-h-full overflow-hidden transition-all duration-500"
        style={{
          width: `${nextTickerWidth}px`,
        }}
      >
        <div
          key={currentIndex}
          className="animate-ticker mt-1.5 flex flex-col gap-4 sm:mt-[3px] xl:mt-2 2xl:mt-[5px]"
        >
          <Ticker {...tickerAnimationAssets[currentIndex]} />
          <Ticker
            {...tickerAnimationAssets[
              (currentIndex + 1) % tickerAnimationAssets.length
            ]}
            ref={(el) => setNextTickerWidth(el?.clientWidth ?? 0)}
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
          className="rounded-full sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-17.5 2xl:w-17.5"
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
