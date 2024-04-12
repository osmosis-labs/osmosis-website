import { queryOsmoAPR } from "@/lib/queries/numia";
import { RatePretty } from "@keplr-wallet/unit";
import React from "react";

export default async function StakingApr() {
  const stakingApr = new RatePretty((await queryOsmoAPR())[0].apr / 100)
    .maxDecimals(2)
    .toString();

  return <span className="text-malachite-200">{stakingApr} APR.</span>;
}
