"use client";

import setBannerHidden from "@/lib/actions/setBannerHidden";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useOptimistic } from "react";

export function Banner() {
  const [hidden, setOptimisticHidden] = useOptimistic<boolean, boolean>(
    false,
    (_, action) => action,
  );

  if (hidden) return;

  return (
    <div
      className={cn(
        "relative flex h-12.5 items-center justify-center bg-ammelia-600 text-center md:h-10",
      )}
    >
      <p className="inline-flex items-center text-sm leading-5.5 text-neutral-100">
        Introducing the New Osmosis.zone.
        <Link
          href={"https://tally.so/r/mK6pPk"}
          target="_blank"
          className="ml-1.5 hidden md:flex"
        >
          <span className="inline-flex items-center gap-0.5">
            Tell us what you think
            <Image
              src={"/assets/icons/arrow-up-right.svg"}
              alt="Tell us what you think"
              width={16}
              height={16}
            />
          </span>
        </Link>
      </p>
      <form
        action={async () => {
          setOptimisticHidden(true);
          await setBannerHidden();
        }}
        className="absolute right-4 flex items-center justify-center sm:right-24 md:right-16 lg:right-8 xl:right-16 2xl:right-12"
      >
        <button type="submit">
          <Image
            src={"/assets/icons/banner-close.svg"}
            alt="Close banner"
            width={40}
            height={40}
          />
        </button>
      </form>
    </div>
  );
}
