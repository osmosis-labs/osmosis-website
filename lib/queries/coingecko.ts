import { COINGECKO_BASE_URL } from "@/lib/shared";
import { Coin } from "@/lib/types/coingecko";

export const queryCoinGeckoCoin = async ({
  name,
}: {
  name: string;
}): Promise<Coin> => {
  const res = await fetch(
    new URL(`/api/v3/coins/${name}`, COINGECKO_BASE_URL),
    {
      method: "GET",
      next: { revalidate: 1000 * 60 * 60 * 24, tags: ["coingecko-coin", name] },
      headers: process.env.COINGECKO_API_KEY
        ? {
            "X-API-KEY": process.env.COINGECKO_API_KEY,
          }
        : undefined,
    },
  );

  return await res.json();
};
