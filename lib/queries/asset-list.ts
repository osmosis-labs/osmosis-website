import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { AssetList } from "@/lib/types/asset-list";

const ASSET_LIST_CMS_DATA_URL = new URL(
  "/osmosis-labs/assetlists/main/osmosis-1/osmosis-1.assetlist.json",
  GITHUB_RAW_DEFAULT_BASEURL,
);

export const queryAssetList = async (): Promise<AssetList> => {
  const res = await fetch(ASSET_LIST_CMS_DATA_URL, {
    method: "GET",
    next: { revalidate: 86_400 },
  });

  return await res.json();
};
