import { LandingPageData } from "@/lib/types/cms";

export async function queryLandingPageCMSData(): Promise<LandingPageData> {
  const url = new URL(
    process.env.LANDING_PAGE_CMS_DATA_ENDPOINT!,
    process.env.GITHUB_RAW_DEFAULT_BASEURL,
  );

  const res = await fetch(url, { method: "GET" });
  return await res.json();
}
