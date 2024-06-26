import { queryAssetList } from "@/lib/queries/asset-list";
import {
  LandingPageMetrics,
  NumiaToken,
  OsmoAPR,
  SupplyMetrics,
} from "@/lib/types/numia";
import { unstable_cache } from "next/cache";

interface QueryTokenInfoProps {
  symbol: string;
}

const numiaRequestInit: RequestInit = {
  headers: process.env.NUMIA_API_KEY
    ? {
        Authorization: `Bearer ${process.env.NUMIA_API_KEY}`,
      }
    : undefined,
  method: "GET",
};

export const queryTokenInfo = async ({
  symbol,
}: QueryTokenInfoProps): Promise<NumiaToken[]> => {
  const url = new URL(`/tokens/v2/${symbol}`, process.env.NUMIA_BASE_URL);
  const res = await fetch(url, {
    ...numiaRequestInit,
    next: { revalidate: 3600, tags: ["token-info", symbol] },
  });

  return await res.json();
};

const OSMO_APR_DATA_URL = new URL("/apr", process.env.NUMIA_BASE_URL);

export const queryOsmoAPR = async (): Promise<OsmoAPR[]> => {
  const res = await fetch(OSMO_APR_DATA_URL, {
    ...numiaRequestInit,
    next: { revalidate: 3600 * 6 },
  });

  return await res.json();
};

export const queryLandingPageMetrics =
  async (): Promise<LandingPageMetrics> => {
    const res = await fetch(
      new URL("/landing_page_metrics", process.env.NUMIA_BASE_URL),
      {
        ...numiaRequestInit,
        next: { revalidate: 3600 },
      },
    );

    return await res.json();
  };

export const querySupplyMetrics = async (): Promise<SupplyMetrics> => {
  const res = await fetch(
    new URL(`/supply/v1/metrics`, process.env.NUMIA_BASE_URL),
    {
      ...numiaRequestInit,
      next: { revalidate: 1000 * 60 * 60 * 24 },
    },
  );

  return await res.json();
};

export const queryAllTokens = async (): Promise<NumiaToken[]> => {
  const res = await fetch(
    new URL("/tokens/v2/all", process.env.NUMIA_BASE_URL),
    {
      ...numiaRequestInit,
      /**
       * The main purpose of this endpoint is to get
       * the price_24h_change for top gainers,
       * so I think that we can get along with a 24h cache.
       */
      next: { revalidate: 1000 * 60 * 60 * 24 },
    },
  );

  return await res.json();
};

type NumiaTokenWithLogo = NumiaToken & { logoURIs: string };

export const queryValidTokens = unstable_cache(
  async (): Promise<NumiaTokenWithLogo[]> => {
    const assets = await queryAllTokens();
    const assetList = await queryAssetList();

    const aggregatedAndFiltered: (NumiaTokenWithLogo | undefined)[] = assets
      .map((asset) => {
        const assetInfoAsset = assetList.assets.find(
          ({ coinMinimalDenom, verified, disabled, unstable, categories }) =>
            coinMinimalDenom === asset.denom &&
            verified &&
            !disabled &&
            !unstable &&
            !categories.includes("stablecoin"),
        );

        if (!assetInfoAsset) return;

        return {
          ...asset,
          logoURIs:
            assetInfoAsset.logoURIs.svg ?? assetInfoAsset.logoURIs.png ?? "",
        };
      })
      .filter(Boolean);

    return aggregatedAndFiltered as NumiaTokenWithLogo[];
  },
  ["query-valid-tokens"],
  { revalidate: 3600 },
);
