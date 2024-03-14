import { DEFAULT_VS_CURRENCY, formatPretty } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import { Dec, PricePretty, RatePretty } from "@keplr-wallet/unit";
import { format } from "date-fns/format";
import Image from "next/image";

export default function TokenStatsSection() {
  return (
    <section className="mt-20 flex flex-col gap-2 px-3">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 py-3">
          <Image
            src="/assets/icons/trending.svg"
            alt="Top Gainers"
            width={24}
            height={24}
          />
          <span>Top Gainers</span>
        </div>
        <div className="flex flex-col gap-2">
          <TokenStatsRow
            isLoading
            tokenDenom="TIA"
            tokenName="Celestia"
            tokenImgSrc="/assets/icons/tia.svg"
          />
          <TokenStatsRow
            tokenDenom="TIA"
            tokenName="Celestia"
            tokenImgSrc="/assets/icons/tia.svg"
            price={new PricePretty(DEFAULT_VS_CURRENCY, new Dec(2.123))}
            variation={new RatePretty(new Dec(0.025))}
          />
          <TokenStatsRow
            tokenDenom="TIA"
            tokenName="Celestia"
            tokenImgSrc="/assets/icons/tia.svg"
            isAirdrop
            airdropDate={format(new Date(), "dd MMM yyyy")}
          />
        </div>
      </div>
    </section>
  );
}

interface TokenStatsRowProps {
  tokenName: string;
  tokenDenom: string;
  tokenImgSrc: string;
  price?: PricePretty;
  variation?: RatePretty;
  isLoading?: boolean;
  isAirdrop?: boolean;
  airdropDate?: string;
}

function TokenStatsRow({
  isLoading,
  tokenDenom,
  tokenImgSrc,
  tokenName,
  price,
  variation,
  isAirdrop,
  airdropDate,
}: TokenStatsRowProps) {
  const isPositive = variation && variation.toDec().isPositive();

  return (
    <div
      className={cn("flex min-h-18 w-full justify-between rounded-xl px-3", {
        "bg-[#201B43]": !isAirdrop,
        "border border-[#565081] bg-[#140F34]": isAirdrop,
      })}
    >
      <div className="flex items-center gap-2">
        {isLoading ? (
          <div className="h-8 w-8 rounded-full bg-[#3C356D]" />
        ) : (
          <Image
            src={tokenImgSrc}
            alt={`${tokenDenom} image`}
            width={32}
            height={32}
          />
        )}
        {isLoading ? (
          <div className="flex flex-col gap-1">
            <div className="h-2.5 w-24 rounded-full bg-[#3C356D]" />
            <div className="h-2.5 w-12 rounded-full bg-[#3C356D]" />
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            <span className="text-sm leading-none">
              {tokenName.slice(0, 10)}
              {tokenName.length > 10 && "..."}
            </span>
            <span className="text-sm leading-none opacity-55">
              {tokenDenom}
            </span>
          </div>
        )}
      </div>
      {isLoading ? (
        <div className="flex flex-col items-end justify-center gap-1">
          <div className="h-2.5 w-14 rounded-full bg-[#3C356D]" />
          <div className="h-2.5 w-9 rounded-full bg-[#3C356D]" />
        </div>
      ) : (
        <>
          {price && variation && (
            <div className="flex flex-col items-end justify-center gap-1.5">
              <span className="text-sm leading-none">
                {formatPretty(price)}
              </span>
              <span
                className={cn("text-sm leading-none", {
                  "text-[#37D56D]": isPositive,
                  "text-[#FA825D]": !isPositive,
                })}
              >{`${isPositive ? "↗" : "↘️"} ${formatPretty(variation)}`}</span>
            </div>
          )}
          {isAirdrop && (
            <div className="flex flex-col items-end justify-center gap-1.5">
              <span className="text-sm leading-none opacity-55">
                {airdropDate}
              </span>
              <div className="flex min-h-5.5 items-center gap-0.5 rounded-xl bg-[#87DDF8] pl-1.5 pr-2">
                <Image
                  src={"/assets/icons/giftbox.svg"}
                  alt="Airdrop icon"
                  width={14}
                  height={14}
                />
                <span className="text-sm leading-none text-[#02345E]">
                  Airdrop
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
