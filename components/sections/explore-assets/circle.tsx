import { format } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import Image from "@/components/shared/image";
import type { CSSProperties } from "react";

interface IAsset {
  iconUri: string;
  name: string;
  symbol: string;
  ring: number;
  isVoid: boolean;
  display: string;
}

export type TAsset = Partial<IAsset>;

interface CircleProps {
  list: TAsset[];
  className?: string;
  /** 24h price change keyed by symbol. */
  variations: Record<string, number>;
}
export default function Circle({ list, className, variations }: CircleProps) {
  return (
    <div className={cn("rounded-full", className)}>
      {list.map((asset, i) => (
        <Element
          key={`list ${i}`}
          {...asset}
          variation={asset.symbol ? variations[asset.symbol] : undefined}
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
  display,
  variation,
}: {
  className?: string;
  style?: CSSProperties;
  variation?: number;
} & TAsset) {
  return (
    <a
      href={`https://app.osmosis.zone/assets/${symbol}?utm_source=osmosis_landing_page&utm_campaign=assets-${symbol}`}
      target="_blank"
      style={style}
      className={cn(
        "group absolute flex h-10 w-10 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center opacity-[var(--ring-asset-opacity)] transition-all ease-out hover:z-50 hover:scale-105 hover:opacity-100 md:h-20 md:w-20 lg:h-[110px] lg:w-24",
        className,
      )}
    >
      <div className="relative flex items-center justify-center rounded-[30px] bg-[#090524] px-2 py-0.5 opacity-0 transition-opacity group-hover:opacity-100">
        <p className="inline-flex items-center gap-1 whitespace-nowrap text-sm leading-5.5 text-neutral-100">
          <span>{name}</span>
          <span className="text-[#8E8B9C]">{display || symbol}</span>
        </p>
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
      {!isVoid && variation !== undefined && (
        <VariationBadge variation={variation} />
      )}
    </a>
  );
}

function VariationBadge({ variation }: { variation: number }) {
  const isPositive = variation > 0;

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
        {format("rate", variation, { maximumFractionDigits: 2 })}
      </span>
    </div>
  );
}
