import { formatPretty } from "@/lib/formatting";
import { queryTokenInfo } from "@/lib/queries/numia";
import { cn } from "@/lib/utils";
import { RatePretty } from "@keplr-wallet/unit";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, Suspense } from "react";

interface IAsset {
  iconUri: string;
  name: string;
  symbol: string;
  ring: number;
  isVoid: boolean;
}

export type TAsset = Partial<IAsset>;

interface CircleProps {
  list: TAsset[];
  className?: string;
}
export default function Circle({ list, className }: CircleProps) {
  return (
    <div className={cn("rounded-full", className)}>
      {list.map((asset, i) => (
        <Element
          key={`list ${i}`}
          {...asset}
          style={{
            top: `calc(
              50% - (
                50% * sin(
                  var(--angle) * var(--index) + var(--offset) * -1
                )
              )
            )`,
            right: `calc(
              50% + (
                50% * cos(
                  var(--angle) * var(--index) + var(--offset) * -1
                )
              )
            )`,
            transform: "translate(50%, -50%)",
            //@ts-ignore
            "--index": i,
          }}
        />
      ))}
    </div>
  );
}

function Element({
  className,
  style,
  iconUri,
  name,
  isVoid,
  symbol,
}: {
  className?: string;
  style?: CSSProperties;
} & TAsset) {
  return (
    <Link
      href={`https://app.osmosis.zone/assets/${symbol}?utm_source=osmosis_landing_page`}
      target="_blank"
      style={style}
      className={cn(
        "group absolute z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center md:h-20 md:w-20 lg:h-[110px] lg:w-24",
        className,
      )}
    >
      <div className="relative z-50 flex items-center gap-1 px-2 py-0.5 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="whitespace-nowrap text-sm leading-5.5 text-neutral-100">
          {name}
        </span>
        <span className="leading-6.25 text-[#8E8B9C]">{symbol}</span>
      </div>
      {iconUri && (
        <Image
          src={iconUri}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="rounded-full md:h-12 md:w-12 lg:h-18 lg:w-18"
        />
      )}
      {!isVoid && (
        <Suspense
          fallback={
            <div className="-mt-1.5 flex h-4 w-max items-center gap-1 rounded-full bg-osmoverse-650 px-1 py-0.5 md:h-5 md:pr-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-osmoverse-310 sm:h-3 sm:w-3" />
              <div className="h-[3px] w-3.5 rounded-full bg-osmoverse-310 sm:w-5 md:w-4.5 lg:h-1 lg:w-6" />
            </div>
          }
        >
          <VariationBadge symbol={symbol!} />
        </Suspense>
      )}
    </Link>
  );
}

async function VariationBadge({ symbol }: { symbol: string }) {
  const data = await queryTokenInfo({ symbol });
  if (data.length === 0) return;

  const { price_24h_change } = data[0];
  const variation = new RatePretty((price_24h_change ?? 0) / 100);
  const isPositive = variation.toDec().isPositive();

  return (
    <div
      className={cn(
        "-mt-1.5 flex h-4 w-max items-center justify-center rounded-full px-1 py-0.5 md:h-5 md:pr-1.5",
        {
          "bg-rust-500": !isPositive,
          "bg-malachite-200": isPositive,
        },
      )}
    >
      {isPositive ? (
        <Image
          src={"/assets/explore-assets/indicator-up.svg"}
          alt="Indicator Up"
          width={12}
          height={12}
        />
      ) : (
        <Image
          src={"/assets/explore-assets/indicator-down.svg"}
          alt="Indicator Down"
          width={12}
          height={12}
        />
      )}
      <span
        className={cn(
          "text-[10px] font-medium leading-[4.6px] -tracking-[0.132px] sm:text-xs",
          {
            "text-[#003F47]": isPositive,
            "text-[#4A2706]": !isPositive,
          },
        )}
      >
        {formatPretty(variation)}
      </span>
    </div>
  );
}
