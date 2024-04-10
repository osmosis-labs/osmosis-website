import { COINGECKO_BASE_URL } from "@/lib/shared";

export const queryCGMarketCapRank = async ({ name }: { name: string }) => {
  const res = await fetch(
    new URL(`/api/v3/coins/${name}`, COINGECKO_BASE_URL),
    {
      method: "GET",
      next: { revalidate: 1000 * 60 * 60 * 24 },
      headers: process.env.COINGECKO_API_KEY
        ? {
            "X-API-KEY": process.env.COINGECKO_API_KEY,
          }
        : undefined,
    },
  );

  return (await res.json()).market_cap_rank as number | undefined;
};
