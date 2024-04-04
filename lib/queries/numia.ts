import { NumiaToken, OsmoAPR } from "@/lib/types/numia";

interface QueryTokenInfoProps {
  symbol: string;
}

export const queryTokenInfo = async ({
  symbol,
}: QueryTokenInfoProps): Promise<NumiaToken> => {
  const url = new URL(`/tokens/v2/${symbol}`, process.env.NUMIA_BASE_URL);
  const res = await fetch(url, { method: "GET", next: { revalidate: 3600 } });

  return await res.json();
};

const OSMO_APR_DATA_URL = new URL(
  process.env.OSMO_APR_DATA_ENDPOINT!,
  process.env.NUMIA_BASE_URL,
);

export const queryOsmoAPR = async (): Promise<OsmoAPR[]> => {
  const res = await fetch(OSMO_APR_DATA_URL, {
    method: "GET",
    next: { revalidate: 3600 * 6 },
  });

  return await res.json();
};
