import { formatPretty } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import { RatePretty } from "@keplr-wallet/unit";
import Image from "next/image";
import { CSSProperties } from "react";

interface IAsset {
  iconUri: string;
  name: string;
  variation: RatePretty;
  important: boolean;
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
  variation,
}: {
  className?: string;
  style?: CSSProperties;
} & TAsset) {
  const isPositive = (variation ?? new RatePretty(0)).toDec().isPositive();
  return (
    <div
      style={style}
      className={cn(
        "absolute z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center md:h-20 md:w-20 lg:h-[110px] lg:w-24",
        className,
      )}
    >
      {iconUri && (
        <Image
          src={iconUri}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="md:h-12 md:w-12 lg:h-18 lg:w-18"
        />
      )}
      {variation && (
        <div
          className={cn(
            "-mt-1.5 flex h-4 w-max items-center justify-center rounded-full p-1 md:h-5",
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
              "text-xxs font-medium leading-[4.6px] -tracking-[0.132px] sm:text-xs",
              {
                "text-[#003F47]": isPositive,
                "text-[#4A2706]": !isPositive,
              },
            )}
          >
            {formatPretty(variation)}
          </span>
        </div>
      )}
    </div>
  );
}
