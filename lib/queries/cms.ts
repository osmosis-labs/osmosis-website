import { SectionAsset } from "@/components/sections/token-stats";
import {
  queryAssetFromAssetList,
  queryAssetList,
} from "@/lib/queries/asset-list";
import { queryValidTokens } from "@/lib/queries/numia";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { LandingPageData, PastAirdrop } from "@/lib/types/cms";
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
        estimatedLaunchDate,
        logoURL,
        osmosisAirdrop,
        showLaunchDate,
        symbol,
        socials,
        images,
        airdropInfoUrl,
      }) => {
        return {
          denom: symbol,
          iconUri: images[0].svg ?? images[0].png ?? logoURL ?? "",
          name: assetName,
          isAirdrop: osmosisAirdrop,
          releaseDate: showLaunchDate ? estimatedLaunchDate : undefined,
          isUpcoming: true,
          projectLink: socials?.website ?? socials?.twitter ?? undefined,
          airdropInfoUrl,
        };
      },
    );
  },
  ["mapped-upcoming-assets"],
  { revalidate: 3600 },
);

export const queryUpcomingAssetsSectionAssets = unstable_cache(
  async (): Promise<SectionAsset[]> => {
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
  },
  ["upcoming-assets-section-assets"],
  { revalidate: 3600 },
);

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
    .sort((a, b) => (a.price_24h_change! > b.price_24h_change! ? -1 : 1))
    .slice(0, 4);

  return topGainers.map(({ symbol, name, logoURIs }) => ({
    denom: symbol,
    iconUri: logoURIs,
    name,
  }));
};

export interface AirdropAsset {
  name: string;
  symbol: string;
  logoUri: string;
  link?: string;
}

export const queryAirdrops = async (): Promise<{
  past?: AirdropAsset[];
  upcoming?: AirdropAsset[];
}> => {
  const pastAirdropsRes = await fetch(
    new URL(
      "/osmosis-labs/fe-content/main/cms/landing-page/landing-page.json",
      GITHUB_RAW_DEFAULT_BASEURL,
    ),
    {
      method: "GET",
      next: { revalidate: 86_400 },
    },
  );

  const upcomingAirdrops = (
    await queryLandingPageCMSData()
  ).upcomingAssets.filter((asset) => asset.osmosisAirdrop);

  const mappedUpcomingAirdrops: AirdropAsset[] = [];

  for await (const upcomingAsset of upcomingAirdrops) {
    mappedUpcomingAirdrops.push({
      name: upcomingAsset.assetName,
      logoUri:
        upcomingAsset.images[0].svg ??
        upcomingAsset.images[0].png ??
        upcomingAsset.logoURL ??
        "",
      symbol: upcomingAsset.symbol,
    });
  }

  const { pastAirdrops }: { pastAirdrops: PastAirdrop[] } =
    await pastAirdropsRes.json();

  const mappedPastAirdrops: AirdropAsset[] = [];

  for await (const { denom } of pastAirdrops) {
    const asset = await queryAssetFromAssetList({ denom });

    if (asset) {
      mappedPastAirdrops.push({
        name: asset.name,
        logoUri: asset.logoURIs.svg ?? asset.logoURIs.png ?? "",
        symbol: asset.symbol,
      });
    }
  }

  return {
    past: mappedPastAirdrops,
    upcoming: mappedUpcomingAirdrops,
  };
};
