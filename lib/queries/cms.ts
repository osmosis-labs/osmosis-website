import type { SectionAsset } from "@/components/sections/token-stats";
import { queryAssetList } from "@/lib/queries/asset-list";
import { fetchJson } from "@/lib/queries/fetch-json";
import { queryValidTokens } from "@/lib/queries/numia";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import type { LandingPageData } from "@/lib/types/cms";

const LANDING_PAGE_CMS_DATA_URL = new URL(
  "/osmosis-labs/assetlists/main/upcoming/upcoming_assets.json",
  GITHUB_RAW_DEFAULT_BASEURL,
);

export const queryLandingPageCMSData = (): Promise<LandingPageData> =>
  fetchJson(LANDING_PAGE_CMS_DATA_URL);

/**
 * Checks if an upcoming asset has a specific enough launch date to be shown.
 * Returns true for dates with day, month, or quarter (e.g., "March 2024", "Q2 2024", "March 22, 2024").
 * Returns false for vague dates like "soon", "H1 2024" (half year), or just "2024" (year only).
 *
 * This matches the filter logic in osmosis-frontend to ensure data consistency.
 */
function hasSpecificLaunchDate(dateText: string | undefined): boolean {
  if (!dateText) return false;

  const lowerDate = dateText.toLowerCase().trim();

  // Explicit filler values
  if (lowerDate === "soon" || lowerDate === "tbd" || lowerDate === "tba") {
    return false;
  }

  // Half-year format (H1, H2)
  if (/^h[12]\s*\d{4}$/i.test(lowerDate)) {
    return false;
  }

  // Year only (just "2024", "2025", etc.)
  if (/^\d{4}$/.test(lowerDate)) {
    return false;
  }

  // Check for month names (full or abbreviated) - these are specific enough
  const hasMonth =
    /(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(
      lowerDate,
    );
  if (hasMonth) return true;

  // Check for quarter (Q1, Q2, Q3, Q4) - these are specific enough
  const hasQuarter = /q[1-4]\s*\d{4}/i.test(lowerDate);
  if (hasQuarter) return true;

  // Default to false for any other format
  return false;
}

export const queryMappedUpcomingAssets = async () => {
  const data = await queryLandingPageCMSData();

  // Filter to only include assets with specific launch dates
  // (matches osmosis-frontend filter logic)
  const qualifyingUpcomingAssets = data.upcomingAssets.filter((asset) =>
    hasSpecificLaunchDate(asset.estimatedLaunchDateUtc),
  );

  return qualifyingUpcomingAssets.map(
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
};

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
        !asset.preview &&
        !asset.categories.includes("meme"),
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
    hidePrice: true,
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
