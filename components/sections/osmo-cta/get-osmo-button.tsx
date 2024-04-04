"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import React from "react";

export function GetOsmoButton() {
  return (
    <button
      onClick={() =>
        sendGTMEvent({
          name: "buttonClicked",
          label: "Get OSMO",
        })
      }
      type="button"
      className="inline-flex w-full items-center justify-center rounded-[10px] bg-wosmongton-700 px-8 py-4 md:max-w-65 md:rounded-xl lg:px-8 lg:py-5 xl:rounded-[14px]"
    >
      <span className="leading-6.25 md:text-sm md:leading-5.5 lg:text-base lg:leading-6.25">
        Get OSMO
      </span>
    </button>
  );
}
