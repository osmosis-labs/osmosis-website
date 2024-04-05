import { DEFAULT_VS_CURRENCY, formatPretty } from "@/lib/formatting";
import {
  queryNewestAssetsSection,
  queryUpcomingAssetsSection,
} from "@/lib/queries/cms";
import { cn } from "@/lib/utils";
import { Dec, PricePretty, RatePretty } from "@keplr-wallet/unit";
import Image from "next/image";

export interface SectionAsset {
  name: string;
  denom: string;
  iconUri: string;
  isLoading?: boolean;
  price?: PricePretty;
  variation?: RatePretty;
  isUpcoming?: boolean;
  releaseDate?: string;
  isAirdrop?: boolean;
}

export interface Section {
  name: string;
  iconUri: string;
  assets: SectionAsset[];
  isGrid?: boolean;
}
const mockSections: Section[] = [
  {
    name: "Top Gainers",
    iconUri: "/assets/icons/trending.svg",
    assets: [
      {
        name: "Celestia",
        isLoading: true,
        denom: "TIA",
        iconUri: "/assets/icons/tia.svg",
        price: new PricePretty(DEFAULT_VS_CURRENCY, new Dec(2.123)),
        variation: new RatePretty(new Dec(0.01)),
      },
      {
        name: "Very looooong name",
        denom: "VLN",
        iconUri: "/assets/icons/dym.svg",
        price: new PricePretty(DEFAULT_VS_CURRENCY, new Dec(0.69)),
        variation: new RatePretty(new Dec(0.025)),
      },
      {
        name: "Dymension",
        denom: "DYM",
        iconUri: "/assets/icons/dym.svg",
        price: new PricePretty(DEFAULT_VS_CURRENCY, new Dec(1.2)),
        variation: new RatePretty(new Dec(-0.04)),
      },
      {
        name: "Pepe",
        denom: "PEPE",
        iconUri: "/assets/icons/pepe.svg",
        price: new PricePretty(DEFAULT_VS_CURRENCY, new Dec(5)),
        variation: new RatePretty(new Dec(0.08)),
      },
    ],
  },
];

export default async function TokenStatsSection() {
  const upcomingAssetsSection = await queryUpcomingAssetsSection();
  const newestAssetsSection = await queryNewestAssetsSection();
  const sections = [
    ...mockSections,
    newestAssetsSection,
    upcomingAssetsSection,
  ];

  return (
    <section className="relative z-10 mt-17.5 flex flex-col gap-2 p-2 sm:mt-16 sm:p-4 md:mt-14 md:grid md:grid-cols-2 md:gap-y-2 lg:mt-16 lg:grid-cols-[repeat(2,_minmax(0,1fr)),340px] lg:gap-x-2 xl:mt-[136px] xl:grid-cols-[repeat(2,_minmax(0,1fr)),418px] xl:py-0 2xl:mt-20 2xl:grid-cols-3 2xl:gap-x-6 2xl:px-6">
      {sections.map(({ iconUri, name, isGrid, assets }) => {
        return (
          <div
            key={name}
            className={cn("flex flex-col gap-2", {
              "max-lg:col-span-2": isGrid,
            })}
          >
            <div className="flex gap-2 py-3">
              <Image src={iconUri} alt={name} width={24} height={24} />
              <span>{name}</span>
            </div>
            <div
              className={cn("flex flex-col gap-2", {
                "h-full md:grid md:grid-cols-2": isGrid,
              })}
            >
              {assets.map((props) => (
                <TokenStatsRow key={props.denom} {...props} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function TokenStatsRow({
  isLoading,
  denom,
  iconUri,
  name,
  price,
  variation,
  isUpcoming,
  releaseDate,
  isAirdrop,
}: SectionAsset) {
  const isPositive = variation && variation.toDec().isPositive();

  return (
    <div
      className={cn(
        "flex min-h-18 w-full items-center justify-between rounded-xl px-3 xl:min-h-22.5 2xl:px-4",
        {
          "bg-osmoverse-775": !isUpcoming,
          "border-token-stats-upcoming bg-osmoverse-850 py-2.5 md:min-h-30 md:flex-col md:items-start md:p-3 lg:min-h-[154px] xl:min-h-[187px] xl:p-4":
            isUpcoming,
        },
      )}
    >
      <div className="flex items-center gap-2 xl:gap-3">
        {isLoading ? (
          <div className="h-8 w-8 rounded-full bg-osmoverse-650 md:h-10 md:w-10 xl:h-12 xl:w-12" />
        ) : (
          <Image
            src={iconUri}
            alt={`${denom} image`}
            width={32}
            height={32}
            className="rounded-full bg-osmoverse-650 md:h-10 md:w-10 xl:h-12 xl:w-12"
          />
        )}
        {isLoading ? (
          <div className="flex flex-col gap-1">
            <div className="h-2.5 w-25 rounded-full bg-osmoverse-650" />
            <div className="h-2.5 w-12 rounded-full bg-osmoverse-650" />
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 2xl:gap-1">
            <span className="text-sm leading-none max-xl:hidden xl:text-base">
              {name}
            </span>
            <span className="text-sm leading-none xl:hidden">
              {name.slice(0, 10)}
              {name.length > 10 && "..."}
            </span>
            <span className="text-sm leading-none opacity-55 xl:text-base">
              {denom}
            </span>
          </div>
        )}
      </div>
      {isLoading ? (
        <div className="flex flex-col items-end justify-center gap-1">
          <div className="h-2.5 w-14 rounded-full bg-osmoverse-650" />
          <div className="h-2.5 w-9 rounded-full bg-osmoverse-650" />
        </div>
      ) : (
        <>
          {price && variation && (
            <div className="flex flex-col items-end justify-center gap-1.5">
              <span className="leading-none 2xl:text-lg">
                {formatPretty(price)}
              </span>
              <span
                className={cn("inline-flex gap-1.5 leading-none", {
                  "text-malachite-200": isPositive,
                  "text-[#FA825D]": !isPositive,
                })}
              >
                {isPositive ? (
                  <Image
                    src={"/assets/icons/variation-indicator-up.svg"}
                    alt="Indicator Up"
                    width={10}
                    height={9}
                    className="translate-y-0.5 self-baseline"
                  />
                ) : (
                  <Image
                    src={"/assets/icons/variation-indicator-down.svg"}
                    alt="Indicator Down"
                    width={10}
                    height={9}
                    className="-translate-y-0.5 self-end"
                  />
                )}
                {formatPretty(variation)}
              </span>
            </div>
          )}
          {isUpcoming && (
            <div
              className={cn(
                "flex flex-col items-end max-md:gap-1 md:w-full md:flex-row md:items-center md:justify-between",
                { "!justify-end": !releaseDate },
              )}
            >
              {releaseDate && (
                <span className="text-sm leading-none opacity-55">
                  {releaseDate}
                </span>
              )}
              {isAirdrop && (
                <div className="flex min-h-5 items-center gap-0.5 rounded-xl bg-ion-300 pl-1.5 pr-2">
                  <Image
                    src={"/assets/icons/giftbox.svg"}
                    alt="Airdrop icon"
                    width={14}
                    height={14}
                  />
                  <span className="text-xs leading-none text-ion-900 xl:text-sm">
                    Airdrop
                  </span>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
