import { Section } from "@/components/sections/token-stats";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { LandingPageData } from "@/lib/types/cms";
import { isAfter, parse } from "date-fns";
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

export const queryMappedUpcomingAssets = async () => {
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
};

export const queryUpcomingAssetsSection = unstable_cache(async () => {
  const section = {
    name: "Upcoming",
    iconUri: "/assets/icons/star.svg",
    isGrid: true,
    assets: (await queryMappedUpcomingAssets())
      .filter((asset) => {
        const releaseDate = parse(
          asset.releaseDate ?? "",
          "MM yyyy",
          new Date(),
        );

        return isAfter(releaseDate, new Date());
      })
      // this slice is temporary
      .slice(0, 4),
  } as Section;

  return section;
}, ["upcoming-assets"]);
