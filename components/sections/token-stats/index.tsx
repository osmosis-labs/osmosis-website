import {
  PriceSkeleton,
  SectionName,
  Skeleton,
} from "@/components/sections/token-stats/skeleton";
import { format } from "@/lib/formatting";
import {
  queryNewAssetsSectionAssets,
  queryTopGainersSectionAssets,
  queryUpcomingAssetsSectionAssets,
} from "@/lib/queries/cms";
import { queryTokenInfo } from "@/lib/queries/numia";
import { NumiaToken } from "@/lib/types/numia";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export interface SectionAsset extends Partial<NumiaToken> {
  name: string;
  denom: string;
  iconUri: string;
  isLoading?: boolean;
  isUpcoming?: boolean;
  releaseDate?: string;
  projectLink?: string;
}

type QueryFn = () => Promise<SectionAsset[]>;

export interface ISection {
  name: string;
  iconUri: string;
  isGrid?: boolean;
  queryAssetsFn: QueryFn;
}

export default async function TokenStatsSection() {
  return (
    <section className="relative z-10 mt-17.5 flex flex-col gap-2 p-2 sm:mt-16 sm:p-4 md:mt-14 md:grid md:grid-cols-2 md:gap-y-2 lg:mt-16 lg:grid-cols-[repeat(2,_minmax(0,1fr)),340px] lg:gap-x-2 xl:mt-[136px] xl:grid-cols-[repeat(2,_minmax(0,1fr)),418px] xl:py-0 2xl:mt-20 2xl:grid-cols-3 2xl:gap-x-6 2xl:px-6">
      <Section
        name="Top Volume"
        queryAssetsFn={queryTopGainersSectionAssets}
        iconUri="/assets/icons/trending.svg"
      />
      <Section
        name="New"
        queryAssetsFn={queryNewAssetsSectionAssets}
        iconUri="/assets/icons/rocket.svg"
      />
      <Section
        name="Upcoming"
        queryAssetsFn={queryUpcomingAssetsSectionAssets}
        iconUri="/assets/icons/star.svg"
        isGrid
      />
    </section>
  );
}

async function Section({ iconUri, name, isGrid, queryAssetsFn }: ISection) {
  return (
    <div
      className={cn("flex flex-col gap-2", {
        "max-lg:col-span-2": isGrid,
      })}
    >
      <div className="flex gap-2 py-3">
        <Image src={iconUri} alt={name} width={24} height={24} />
        <span>{name}</span>
      </div>
      <Suspense fallback={<Skeleton name={name as SectionName} />}>
        <SectionDataContent isGrid={isGrid} queryAssetsFn={queryAssetsFn} />
      </Suspense>
    </div>
  );
}

interface SectionDataContentProps {
  isGrid?: boolean;
  queryAssetsFn: QueryFn;
}

async function SectionDataContent({
  isGrid,
  queryAssetsFn,
}: SectionDataContentProps) {
  const assets = await queryAssetsFn();

  return (
    <div
      className={cn("flex flex-col gap-2", {
        "h-full max-md:max-h-[312px] max-md:overflow-hidden md:grid md:grid-cols-2":
          isGrid,
      })}
    >
      {assets.map((props) => (
        <TokenStatsRow
          key={props.denom}
          {...props}
          isSingle={assets.length === 1}
        />
      ))}
      {isGrid && assets.length < 6 && <StayTunedCard length={assets.length} />}
    </div>
  );
}

export function TokenStatsRow({
  isLoading,
  denom,
  iconUri,
  name,
  isUpcoming,
  releaseDate,
  projectLink,
  isSingle,
  ...rest
}: SectionAsset & { isSingle?: boolean }) {
  return (
    <Link
      href={
        projectLink ||
        `https://app.osmosis.zone/assets/${denom}?utm_source=osmosis_landing_page&utm_campaign=assets-${denom}`
      }
      target="_blank"
      className={cn(
        "group flex min-h-18 w-full items-center justify-between rounded-xl bg-osmoverse-775 px-3 transition-colors hover:bg-wosmongton-50 xl:min-h-22.5 2xl:px-4",
        {
          "lg:flex-col-reverse lg:items-start lg:p-3 2xl:p-4": isUpcoming,
          "pointer-events-none": !projectLink && isUpcoming,
          "col-span-2": isSingle,
        },
      )}
    >
      <div className="flex items-center gap-2 xl:gap-3">
        {isLoading ? (
          <div className="h-8 w-8 rounded-full bg-osmoverse-650 md:h-10 md:w-10 xl:h-12 xl:w-12" />
        ) : (
          <>
            <Image
              src={iconUri}
              alt={`${denom} image`}
              width={64}
              height={64}
              className="h-8 w-8 rounded-full md:h-10 md:w-10 xl:h-12 xl:w-12"
              quality={100}
            />
          </>
        )}
        {isLoading ? (
          <div className="flex flex-col gap-1">
            <div className="h-2.5 w-25 rounded-full bg-osmoverse-650" />
            <div className="h-2.5 w-12 rounded-full bg-osmoverse-650" />
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 2xl:gap-1">
            <div className="relative flex items-center">
              <span className="max-w-[200px] text-sm leading-none max-2xl:line-clamp-1 md:max-w-[130px] xl:max-w-[150px] xl:text-base xl:leading-[27px] 2xl:max-w-none">
                {name}
              </span>
              <div
                className={cn(
                  "absolute -right-8 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white-full/15 opacity-0 transition-opacity",
                  { "group-hover:opacity-100": !isUpcoming },
                )}
              >
                <Image
                  src={"/assets/icons/arrow-up-right.svg"}
                  alt={`Visit ${denom} asset page`}
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </div>
            </div>
            <span className="text-sm leading-none opacity-55 xl:text-base">
              {denom}
            </span>
          </div>
        )}
      </div>
      {isLoading ? (
        <div
          className={cn("flex flex-col items-end justify-center gap-1", {
            "items-start": isUpcoming,
          })}
        >
          <div className="h-2.5 w-14 rounded-full bg-osmoverse-650" />
          <div className="h-2.5 w-9 rounded-full bg-osmoverse-650" />
        </div>
      ) : (
        <>
          {!isUpcoming && (
            <Suspense fallback={<PriceSkeleton isUpcoming={isUpcoming} />}>
              <TokenPriceStats symbol={denom} {...rest} />
            </Suspense>
          )}
          {isUpcoming && (
            <div className={cn("flex flex-col max-lg:gap-1")}>
              <span className="leading-6.25 text-alpha-60">
                {releaseDate || "Coming Soon"}
              </span>
            </div>
          )}
        </>
      )}
    </Link>
  );
}

interface StayTunedCardProps {
  length: number;
}

function StayTunedCard({ length }: StayTunedCardProps) {
  return (
    <div
      className={cn(
        "group relative flex min-h-18 w-full flex-col items-center overflow-hidden rounded-xl border border-osmoverse-650 bg-osmoverse-850 p-5 max-lg:justify-center xl:min-h-22.5",
        {
          "justify-center": length >= 2,
          "col-span-2": length % 2 === 0 || length <= 1,
        },
      )}
    >
      <div
        className={cn("relative z-10 flex flex-col items-center gap-2", {
          "max-lg:justify-center md:h-[204px] lg:mt-6 lg:h-auto xl:mt-9":
            length === 0,
        })}
      >
        <div className="flex flex-col text-center">
          <span
            className={cn("text-[#B0AADC]", {
              hidden: length !== 0,
            })}
          >
            No upcoming asset launches.
          </span>
          <span className="text-[#B0AADC]">Stay tuned for more.</span>
        </div>
        <Link
          href={"https://twitter.com/osmosiszone"}
          target="_blank"
          className="inline-flex items-center gap-1.5 leading-6.25 text-neutral-100"
        >
          Follow @osmosis
          <Image
            alt="Open @osmosis twitter link"
            src={"/assets/icons/arrow-up-right.svg"}
            width={20}
            height={20}
            className="mb-0.5"
          />
        </Link>
      </div>
      <Image
        src={"/assets/upcoming-coins-graphic.svg"}
        alt=""
        aria-hidden
        width={306}
        height={162}
        className={cn(
          "absolute -bottom-14 h-[162px] w-[306px] max-w-none opacity-25 max-md:hidden lg:opacity-50 xl:opacity-100",
          {
            hidden: length >= 2,
            "-bottom-21.5 h-[216px] w-[408px]": length <= 2,
            "lg:-bottom-4 xl:bottom-8": length === 0,
          },
        )}
      />
    </div>
  );
}

async function TokenPriceStats({
  symbol,
  ...rest
}: { symbol: string } & Partial<SectionAsset>) {
  let { price, price_24h_change: variation = 0 } = rest;

  if (price === undefined) {
    const infos = await queryTokenInfo({ symbol });
    if (infos.length === 0) return;

    price = infos[0].price;
    variation = infos[0].price_24h_change ?? 0;
  }

  const isPositive = variation > 0;

  return (
    <>
      {price && variation && (
        <div className="flex flex-col items-end justify-center gap-1.5">
          <span className="leading-none 2xl:text-lg">
            {format("price", price)}
          </span>
          <span
            className={cn("inline-flex items-center leading-none", {
              "text-malachite-200": isPositive,
              "text-[#FA825D]": !isPositive,
            })}
          >
            {isPositive ? (
              <Image
                src={"/assets/icons/variation-indicator-up.svg"}
                alt="Indicator Up"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={"/assets/icons/variation-indicator-down.svg"}
                alt="Indicator Down"
                width={20}
                height={20}
              />
            )}
            {format("rate", variation, { maximumFractionDigits: 2 })}
          </span>
        </div>
      )}
    </>
  );
}
