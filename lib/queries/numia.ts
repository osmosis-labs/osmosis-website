import { NUMIA_BASE_URL } from "@/lib/shared";
import { LandingPageMetrics, NumiaToken, OsmoAPR } from "@/lib/types/numia";

interface QueryTokenInfoProps {
  symbol: string;
}

export const queryTokenInfo = async ({
  symbol,
}: QueryTokenInfoProps): Promise<NumiaToken> => {
  const url = new URL(`/tokens/v2/${symbol}`, NUMIA_BASE_URL);
  const res = await fetch(url, { method: "GET", next: { revalidate: 3600 } });

  return await res.json();
};

const OSMO_APR_DATA_URL = new URL("/apr", NUMIA_BASE_URL);

export const queryOsmoAPR = async (): Promise<OsmoAPR[]> => {
  const res = await fetch(OSMO_APR_DATA_URL, {
    method: "GET",
    next: { revalidate: 3600 * 6 },
  });

  return await res.json();
};

export const queryLandingPageStats = async (): Promise<LandingPageMetrics> => {
  const res = await fetch(new URL("/landing_page_metrics", NUMIA_BASE_URL), {
    method: "GET",
    next: { revalidate: 3600 },
  });

  return await res.json();
};
