"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import React from "react";

export function GetStartedButton() {
  return (
    <button
      onClick={() =>
        sendGTMEvent({
          name: "buttonClicked",
          label: "Get Started (Trade Section)",
        })
      }
      type="button"
      className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-wosmongton-700 px-6 py-4 md:w-[220px] xl:rounded-[14px] xl:py-5"
    >
      <span className="leading-6.5">Get Started</span>
      <Image
        src={"/assets/icons/arrow-up-right.svg"}
        alt="Get Started"
        width={24}
        height={24}
        className="2xl:hidden"
      />
    </button>
  );
}
