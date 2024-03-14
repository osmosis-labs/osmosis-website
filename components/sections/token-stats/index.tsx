import { DEFAULT_VS_CURRENCY, formatPretty } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import { Dec, PricePretty, RatePretty } from "@keplr-wallet/unit";
import { format } from "date-fns/format";
import Image from "next/image";

interface SectionAsset {
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

interface Section {
  name: string;
  iconUri: string;
  assets: SectionAsset[];
  isGrid?: boolean;
}

const sections: Section[] = [
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
  {
    name: "Newest",
    iconUri: "/assets/icons/rocket.svg",
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
  {
    name: "Upcoming",
    iconUri: "/assets/icons/star.svg",
    isGrid: true,
    assets: [
      {
        name: "Dymension",
        denom: "DYM",
        iconUri: "/assets/icons/dym.svg",
        isUpcoming: true,
        releaseDate: format(new Date(), "dd MMM yyyy"),
        isAirdrop: true,
      },
      {
        name: "Dymension",
        denom: "DYM",
        iconUri: "/assets/icons/dym.svg",
        isUpcoming: true,
        releaseDate: format(new Date(), "dd MMM yyyy"),
        isAirdrop: true,
      },
      {
        name: "Dymension",
        denom: "DYM",
        iconUri: "/assets/icons/dym.svg",
        isUpcoming: true,
        releaseDate: format(new Date(), "dd MMM yyyy"),
        isAirdrop: true,
      },
      {
        name: "Dymension",
        denom: "DYM",
        iconUri: "/assets/icons/dym.svg",
        isUpcoming: true,
        releaseDate: format(new Date(), "dd MMM yyyy"),
      },
    ],
  },
];

export default function TokenStatsSection() {
  return (
    <section className="lg:mt-17 mt-14 flex flex-col gap-2 px-3 lg:grid lg:grid-cols-3 xl:mt-16 2xl:gap-4 2xl:px-4 3xl:mt-20 3xl:gap-6 3xl:px-6">
      {sections.map(({ iconUri, name, isGrid, assets }) => {
        return (
          <div key={name} className="flex flex-col gap-2">
            <div className="flex gap-2 py-3">
              <Image src={iconUri} alt={name} width={24} height={24} />
              <span>{name}</span>
            </div>
            <div
              className={cn("flex flex-col gap-2", {
                "h-full 2xl:grid 2xl:grid-cols-2": isGrid,
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
        "xl:min-h-22.5 flex min-h-18 w-full justify-between rounded-xl px-3 2xl:px-4",
        {
          "bg-[#201B43]": !isUpcoming,
          "border border-[#565081] bg-[#140F34] 2xl:flex-col 2xl:py-4":
            isUpcoming,
        },
      )}
    >
      <div className="flex items-center gap-2 xl:gap-3">
        {isLoading ? (
          <div className="h-8 w-8 rounded-full bg-[#3C356D]" />
        ) : (
          <Image
            src={iconUri}
            alt={`${denom} image`}
            width={32}
            height={32}
            className="xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"
          />
        )}
        {isLoading ? (
          <div className="flex flex-col gap-1">
            <div className="h-2.5 w-24 rounded-full bg-[#3C356D]" />
            <div className="h-2.5 w-12 rounded-full bg-[#3C356D]" />
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
            <span className="text-sm leading-none opacity-55 2xl:text-base">
              {denom}
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
              <span className="leading-none 2xl:text-lg">
                {formatPretty(price)}
              </span>
              <span
                className={cn("leading-none", {
                  "text-[#37D56D]": isPositive,
                  "text-[#FA825D]": !isPositive,
                })}
              >{`${isPositive ? "↗" : "↘️"} ${formatPretty(variation)}`}</span>
            </div>
          )}
          {isUpcoming && (
            <div className="flex flex-col items-end justify-center gap-1.5 2xl:items-start">
              <span className="text-sm leading-none opacity-55">
                {releaseDate}
              </span>
              {isAirdrop && (
                <div className="flex min-h-5.5 items-center gap-0.5 rounded-xl bg-ion-300 pl-1.5 pr-2">
                  <Image
                    src={"/assets/icons/giftbox.svg"}
                    alt="Airdrop icon"
                    width={14}
                    height={14}
                  />
                  <span className="text-sm leading-none text-ion-700">
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
