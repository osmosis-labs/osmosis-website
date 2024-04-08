import { SectionAsset } from "@/components/sections/token-stats";
import { queryAssetList } from "@/lib/queries/asset-list";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { LandingPageData } from "@/lib/types/cms";
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
        //   const releaseDate = new Date(asset.releaseDate!).getTime();

        //   return releaseDate > new Date().getTime();
        // })
        // this slice is temporary
        .slice(0, 4)
    );
  }, ["upcoming-assets-section-assets"]);

export const queryNewestAssets = async () => {
  const assetList = await queryAssetList();
  const assets = assetList.assets;

  return assets
    .filter((asset) => !!asset.listingDate && asset.verified && !asset.disabled)
    .sort((a, b) =>
      Date.parse(a.listingDate!) > Date.parse(b.listingDate!) ? -1 : 1,
    )
    .slice(0, 4);
};

export const queryNewestAssetsSectionAssets = async (): Promise<
  SectionAsset[]
> => {
  const newestAssets = await queryNewestAssets();

  return newestAssets.map(({ symbol, logoURIs, name }) => ({
    denom: symbol,
    iconUri: logoURIs.svg ?? logoURIs.png ?? "",
    name,
  }));
};
