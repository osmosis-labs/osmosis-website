import { fetchJson } from "@/lib/queries/fetch-json";
import { GITHUB_RAW_DEFAULT_BASEURL } from "@/lib/shared";
import type { AssetList } from "@/lib/types/asset-list";

const ASSET_LIST_CMS_DATA_URL = new URL(
  "/osmosis-labs/assetlists/main/osmosis-1/generated/frontend/assetlist.json",
  GITHUB_RAW_DEFAULT_BASEURL,
);

let assetList: Promise<AssetList> | undefined;

/** Fetched once per build; several sections read from it. */
export const queryAssetList = (): Promise<AssetList> =>
  (assetList ??= fetchJson<AssetList>(ASSET_LIST_CMS_DATA_URL));
