import { SectionAsset, TokenStatsRow } from "@/components/sections/token-stats";
import { cn } from "@/lib/utils";
import React from "react";

export type SectionName = "Top Gainers" | "Newest" | "Upcoming";

export function Skeleton({ name }: { name: SectionName }) {
  return (
    <div
      className={cn("flex flex-col gap-2", {
        "h-full md:grid md:grid-cols-2": name === "Upcoming",
      })}
    >
      {Array<SectionAsset>(4)
        .fill({
          denom: "",
          iconUri: "",
          name: "",
          isLoading: true,
          isUpcoming: name === "Upcoming",
        })
        .map((props) => (
          <TokenStatsRow key={props.denom} {...props} />
        ))}
    </div>
  );
}
