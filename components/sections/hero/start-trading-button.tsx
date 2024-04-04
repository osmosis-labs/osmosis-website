"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import React from "react";

export function StartTradingButton() {
  return (
    <button
      onClick={() =>
        sendGTMEvent({
          name: "buttonClicked",
          label: "Start Trading",
        })
      }
      type="button"
      className="flex h-14 w-full items-center justify-center gap-1 rounded-xl bg-wosmongton-700 xl:h-16"
    >
      <p className="text-sm text-neutral-100 lg:text-base">Start Trading</p>
      <Image
        src={"/assets/icons/arrow-up-right.svg"}
        alt="Start Trading"
        width={20}
        height={20}
        className="h-5 w-5"
      />
    </button>
  );
}
