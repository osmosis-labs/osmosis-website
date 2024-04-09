"use client";

import Image from "next/image";

export function CloseButton({ action }: { action: () => void }) {
  return (
    <form
      action={action}
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
  );
}
