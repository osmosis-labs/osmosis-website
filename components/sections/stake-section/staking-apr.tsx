import { format } from "@/lib/formatting";
import { queryOsmoAPR } from "@/lib/queries/numia";
import React from "react";

export default async function StakingApr() {
  const stakingApr = (await queryOsmoAPR())[0].apr;

  return (
    <span className="text-malachite-200">
      {format("rate", stakingApr, { maximumFractionDigits: 2 })} APR.
    </span>
  );
}
