import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import { Asset, AssetList } from "@/lib/types/asset-list";
import { unstable_cache } from "next/cache";

const ASSET_LIST_CMS_DATA_URL = new URL(
  "/osmosis-labs/assetlists/main/osmosis-1/generated/frontend/assetlist.json",
  GITHUB_RAW_DEFAULT_BASEURL,
);

export const queryAssetList = async (): Promise<AssetList> => {
  const res = await fetch(ASSET_LIST_CMS_DATA_URL, {
    method: "GET",
    next: { revalidate: 86_400 },
  });

  return await res.json();
};

// As this is an expensive operation, I think it's a good idea to cache it
export const queryAssetFromAssetList = unstable_cache(
  async ({ symbol }: { symbol: string }): Promise<Asset | undefined> => {
    const { assets } = await queryAssetList();

    return assets.filter((asset) => asset.symbol === symbol)[0];
  },
  ["query-asset-from-asset-list"],
  {
    revalidate: 86_400,
  },
);
