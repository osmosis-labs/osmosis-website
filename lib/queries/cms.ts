import { LandingPageData } from "@/lib/types/cms";

const LANDING_PAGE_CMS_DATA_URL = new URL(
  process.env.LANDING_PAGE_CMS_DATA_ENDPOINT!,
  process.env.GITHUB_RAW_DEFAULT_BASEURL,
);

export async function queryLandingPageCMSData(): Promise<LandingPageData> {
  const res = await fetch(LANDING_PAGE_CMS_DATA_URL, {
    method: "GET",
    next: { revalidate: 3600 },
  });

  return await res.json();
}
