import type { SectionAsset } from "@/components/sections/token-stats";
import EXPLORE_ASSETS from "@/lib/explore-assets";
import {
  queryNewAssetsSectionAssets,
  queryTopGainersSectionAssets,
  queryUpcomingAssetsSectionAssets,
} from "@/lib/queries/cms";
import { queryAllTokens, queryLandingPageMetrics } from "@/lib/queries/numia";
import type { LandingPageMetrics } from "@/lib/types/numia";

export interface HomeData {
  topVolume?: SectionAsset[];
  newAssets?: SectionAsset[];
  upcoming?: SectionAsset[];
  metrics?: LandingPageMetrics;
  /** 24h price change keyed by symbol, for the explore-assets rings. */
  variations: Record<string, number>;
}

/**
 * Production builds fail when a data source is down, so the previously
 * deployed (good) version keeps serving instead of a page with empty
 * sections. Set ALLOW_MISSING_DATA=true to build without API access.
 */
const failOnMissingData =
  import.meta.env.PROD && import.meta.env.ALLOW_MISSING_DATA !== "true";

async function required<T>(
  name: string,
  promise: Promise<T>,
): Promise<T | undefined> {
  try {
    return await promise;
  } catch (e) {
    if (failOnMissingData) {
      throw new Error(`Failed to load "${name}" at build time`, { cause: e });
    }
    console.warn(
      `[home-data] ${name} unavailable: ${e instanceof Error ? e.message : e}`,
    );
    return undefined;
  }
}

async function queryExploreAssetVariations(): Promise<Record<string, number>> {
  const symbols = new Set(
    EXPLORE_ASSETS.filter((a) => a.symbol && !a.isVoid).map((a) => a.symbol!),
  );

  // The bulk list matches /tokens/v2/{symbol} (first entry per symbol), so
  // one request replaces one per ring asset.
  const variations: Record<string, number> = {};
  for (const token of await queryAllTokens()) {
    if (
      symbols.has(token.symbol) &&
      !(token.symbol in variations) &&
      token.price_24h_change !== undefined
    ) {
      variations[token.symbol] = token.price_24h_change;
    }
  }

  if (symbols.size > 0 && Object.keys(variations).length === 0) {
    throw new Error("No token price variations could be loaded");
  }

  return variations;
}

export async function loadHomeData(): Promise<HomeData> {
  const [topVolume, newAssets, upcoming, metrics, variations] =
    await Promise.all([
      required("top volume assets", queryTopGainersSectionAssets()),
      required("new assets", queryNewAssetsSectionAssets()),
      required("upcoming assets", queryUpcomingAssetsSectionAssets()),
      required("landing page metrics", queryLandingPageMetrics()),
      required("explore asset variations", queryExploreAssetVariations()),
    ]);

  return {
    topVolume,
    newAssets,
    upcoming,
    metrics,
    variations: variations ?? {},
  };
}
