import { queryAssetList } from "@/lib/queries/asset-list";
import { fetchJson } from "@/lib/queries/fetch-json";
import type { LandingPageMetrics, NumiaToken } from "@/lib/types/numia";

const NUMIA_BASE_URL = import.meta.env.NUMIA_BASE_URL;
const NUMIA_API_KEY = import.meta.env.NUMIA_API_KEY;

const numiaUrl = (path: string) => {
  if (!NUMIA_BASE_URL) throw new Error("NUMIA_BASE_URL is not set");
  return new URL(path, NUMIA_BASE_URL);
};

const numiaRequestInit: RequestInit = {
  headers: NUMIA_API_KEY
    ? { Authorization: `Bearer ${NUMIA_API_KEY}` }
    : undefined,
};

export const queryLandingPageMetrics =
  async (): Promise<LandingPageMetrics> => {
    const metrics = await fetchJson<LandingPageMetrics | { message: string }>(
      numiaUrl("/landing_page_metrics"),
      numiaRequestInit,
    );
    if ("message" in metrics) {
      throw new Error(`Numia landing_page_metrics: ${metrics.message}`);
    }
    return metrics;
  };

let allTokens: Promise<NumiaToken[]> | undefined;

/** Fetched once per build; feeds both top volume and the price badges. */
export const queryAllTokens = (): Promise<NumiaToken[]> =>
  (allTokens ??= fetchJson(numiaUrl("/tokens/v2/all"), numiaRequestInit));

type NumiaTokenWithLogo = NumiaToken & { logoURIs: string };

export const queryValidTokens = async (): Promise<NumiaTokenWithLogo[]> => {
  const [assets, assetList] = await Promise.all([
    queryAllTokens(),
    queryAssetList(),
  ]);

  return assets.flatMap((asset) => {
    const assetInfoAsset = assetList.assets.find(
      ({ coinMinimalDenom, verified, disabled, unstable, categories }) =>
        coinMinimalDenom === asset.denom &&
        verified &&
        !disabled &&
        !unstable &&
        !categories.includes("stablecoin"),
    );

    if (!assetInfoAsset) return [];

    return [
      {
        ...asset,
        logoURIs:
          assetInfoAsset.logoURIs.svg ?? assetInfoAsset.logoURIs.png ?? "",
      },
    ];
  });
};
