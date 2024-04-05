import { ISection, SectionAsset } from "@/components/sections/token-stats";
import { DEFAULT_VS_CURRENCY } from "@/lib/formatting";
import { queryAssetList } from "@/lib/queries/asset-list";
import { queryTokenInfo } from "@/lib/queries/numia";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { Asset } from "@/lib/types/asset-list";
import { LandingPageData } from "@/lib/types/cms";
import { PricePretty, RatePretty } from "@keplr-wallet/unit";
import { unstable_cache } from "next/cache";

const LANDING_PAGE_CMS_DATA_URL = new URL(
  "/osmosis-labs/fe-content/main/cms/landing-page/landing-page.json",
  GITHUB_RAW_DEFAULT_BASEURL,
);

export async function queryLandingPageCMSData(): Promise<LandingPageData> {
  const res = await fetch(LANDING_PAGE_CMS_DATA_URL, {
    method: "GET",
    next: { revalidate: 3600 },
  });

  return await res.json();
}

export const queryMappedUpcomingAssets = unstable_cache(async () => {
  const data = await queryLandingPageCMSData();

  return data.upcomingAssets.map(
    ({
      assetName,
      estimatedLaunchDate,
      logoURL,
      osmosisAirdrop,
      showLaunchDate,
      symbol,
    }) => ({
      denom: symbol,
      iconUri: logoURL,
      name: assetName,
      isAirdrop: osmosisAirdrop,
      releaseDate: showLaunchDate ? estimatedLaunchDate : undefined,
      isUpcoming: true,
    }),
  );
}, ["mapped-upcoming-assets"]);

export const queryUpcomingAssetsSectionAssets =
  unstable_cache(async (): Promise<SectionAsset[]> => {
    return (
      (await queryMappedUpcomingAssets())
        // temp disabled as there currently are no upcoming assets on the cms
        // .filter((asset) => {
        //   const releaseDate = parse(
        //     asset.releaseDate ?? "",
        //     "MM yyyy",
        //     new Date(),
        //   );

        //   return isAfter(releaseDate, new Date());
        // })
        // this slice is temporary
        .slice(0, 4)
    );
  }, ["upcoming-assets-section-assets"]);

export const queryNewestAssets = unstable_cache(async () => {
  const assetList = await queryAssetList();
  const assets = assetList.assets;

  return assets
    .filter((asset) => !!asset.listingDate && asset.verified && !asset.disabled)
    .sort((a, b) =>
      Date.parse(a.listingDate!) > Date.parse(b.listingDate!) ? -1 : 1,
    )
    .slice(0, 4);
}, ["query-newest-assets"]);

export const aggregateAssetsPrices = async (
  listAssets: Asset[],
): Promise<SectionAsset[]> => {
  const aggregated: SectionAsset[] = [];

  for await (const asset of listAssets) {
    const priceData = await queryTokenInfo({ symbol: asset.symbol });

    aggregated.push({
      denom: asset.symbol,
      iconUri: asset.logoURIs.svg ?? asset.logoURIs.png ?? "",
      name: asset.name,
      price:
        priceData.length > 0
          ? new PricePretty(DEFAULT_VS_CURRENCY, priceData[0].price!)
          : undefined,
      variation:
        priceData.length > 0
          ? new RatePretty(priceData[0].price_24h_change! / 100)
          : undefined,
    });
  }

  return aggregated;
};

export const queryNewestAssetsSection = async (): Promise<ISection> => {
  const newestAssets = await queryNewestAssets();
  const aggregatedAssets = await aggregateAssetsPrices(newestAssets);

  return {
    name: "Newest",
    iconUri: "/assets/icons/rocket.svg",
    assets: aggregatedAssets,
  };
};
