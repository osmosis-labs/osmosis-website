import { CloseButton } from "@/components/banner/close-button";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Banner() {
  const bannerHidden = cookies().get("bannerHidden")?.value;

  return (
    <div
      className={cn(
        "relative flex h-12.5 items-center justify-center bg-ammelia-600 text-center md:h-10",
        { hidden: bannerHidden && bannerHidden === "true" },
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
      <CloseButton
        action={async () => {
          "use server";
          const cookieStore = cookies();

          cookieStore.set("bannerHidden", "true");
        }}
      />
    </div>
  );
}
