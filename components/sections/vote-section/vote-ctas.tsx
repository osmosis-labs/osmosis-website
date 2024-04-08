"use client";

import { GTagLink } from "@/components/shared/gtag-link";
import Image from "next/image";
import React from "react";

export function VoteCtas() {
  return (
    <div className="flex flex-col items-center gap-2 self-stretch md:flex-row xl:gap-3 2xl:gap-4">
      <GTagLink asChild eventName="buttonClicked" label="Vote now">
        <button
          type="button"
          className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-wosmongton-700 px-6 py-4 md:flex-1 md:self-start lg:flex-initial xl:rounded-[14px] xl:px-8 xl:py-5"
        >
          <span className="leading-6.25 text-neutral-100">Vote now</span>
          <Image
            src={"/assets/icons/arrow-up-right.svg"}
            alt="Vote now"
            width={24}
            height={24}
          />
        </button>
      </GTagLink>
      <GTagLink asChild eventName="buttonClicked" label="Join the discussion">
        <button
          type="button"
          className="flex items-center justify-center gap-1 self-stretch rounded-xl bg-osmoverse-760 px-6 py-4 md:flex-1 lg:flex-initial xl:rounded-[14px] xl:py-5 2xl:px-8"
        >
          <span className="leading-6.25 text-neutral-100">
            Join the discussion
          </span>
          <Image
            src={"/assets/icons/discussion.svg"}
            alt="Join the discussion"
            width={24}
            height={24}
          />
        </button>
      </GTagLink>
    </div>
  );
}
