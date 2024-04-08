"use client";

import { GTagLink } from "@/components/shared/gtag-link";
import React from "react";

export function ExploreAssetsButton() {
  return (
    <GTagLink asChild eventName="buttonClicked" label="Explore Assets">
      <button
        type="button"
        className="flex max-w-[164px] items-center justify-center rounded-[10px] bg-wosmongton-700 px-8 py-4 md:rounded-xl lg:max-w-[178px] lg:py-5 xl:rounded-[14px]"
      >
        <span className="text-sm leading-5.5 text-neutral-100 lg:text-base lg:leading-6.25">
          Explore Assets
        </span>
      </button>
    </GTagLink>
  );
}
