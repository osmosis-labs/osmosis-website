import { SectionAsset } from "@/components/sections/token-stats";
import { queryAssetList } from "@/lib/queries/asset-list";
import { queryValidTokens } from "@/lib/queries/numia";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { LandingPageData } from "@/lib/types/cms";
import { unstable_cache } from "next/cache";

const LANDING_PAGE_CMS_DATA_URL = new URL(
  "/osmosis-labs/assetlists/main/upcoming/upcoming_assets.json",
  GITHUB_RAW_DEFAULT_BASEURL,
);

export async function queryLandingPageCMSData(): Promise<LandingPageData> {
  const res = await fetch(LANDING_PAGE_CMS_DATA_URL, {
    method: "GET",
    next: { revalidate: 3600 },
  });

  return await res.json();
}

export const queryMappedUpcomingAssets = unstable_cache(
  async () => {
    const data = await queryLandingPageCMSData();

    return data.upcomingAssets.map(
      ({
        assetName,
        estimatedLaunchDateUtc,
        logoURL,
        showLaunchDate,
        symbol,
        socials,
        images,
      }) => {
        return {
          denom: symbol,
          iconUri: images[0].svg ?? images[0].png ?? logoURL ?? "",
          name: assetName,
          releaseDate: showLaunchDate ? estimatedLaunchDateUtc : undefined,
          isUpcoming: true,
          projectLink: socials?.website ?? socials?.twitter ?? undefined,
        };
      },
    );
  },
  ["mapped-upcoming-assets"],
  { revalidate: 3600 },
);

export const queryUpcomingAssetsSectionAssets = async (): Promise<
  SectionAsset[]
> => (await queryMappedUpcomingAssets()).slice(0, 6);

export const queryNewAssets = async () => {
  const assetList = await queryAssetList();
  const assets = assetList.assets;

  return assets
    .filter(
      (asset) =>
        !!asset.listingDate &&
        asset.verified &&
        !asset.disabled &&
        !asset.preview,
    )
    .sort((a, b) =>
      Date.parse(a.listingDate!) > Date.parse(b.listingDate!) ? -1 : 1,
    )
    .slice(0, 4);
};

export const queryNewAssetsSectionAssets = async (): Promise<
  SectionAsset[]
> => {
  const newAssets = await queryNewAssets();

  return newAssets.map(({ symbol, logoURIs, name }) => ({
    denom: symbol,
    iconUri: logoURIs.svg ?? logoURIs.png ?? "",
    name,
  }));
};

export const queryTopGainersSectionAssets = async (): Promise<
  SectionAsset[]
> => {
  const aggregatedAndFiltered = await queryValidTokens();

  const topGainers = aggregatedAndFiltered
    .sort((a, b) => (a.volume_24h! > b.volume_24h! ? -1 : 1))
    .slice(0, 4);

  return topGainers.map(({ symbol, name, logoURIs, ...rest }) => ({
    ...rest,
    denom: symbol,
    iconUri: logoURIs,
    name,
  }));
};
