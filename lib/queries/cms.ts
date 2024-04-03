import { Section } from "@/components/sections/token-stats";
import { LandingPageData } from "@/lib/types/cms";

export async function queryLandingPageCMSData(): Promise<LandingPageData> {
  const url = new URL(
    process.env.LANDING_PAGE_CMS_DATA_ENDPOINT!,
    process.env.GITHUB_RAW_DEFAULT_BASEURL,
  );

  const res = await fetch(url, { method: "GET" });
  return await res.json();
}

export async function queryUpcomingAssets(): Promise<Section> {
  const data = await queryLandingPageCMSData();
  const section = {
    name: "Upcoming",
    iconUri: "/assets/icons/star.svg",
    isGrid: true,
    assets: data.upcomingAssets.map(
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
    ),
  } satisfies Section;

  return section;
}
