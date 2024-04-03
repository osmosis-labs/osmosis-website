import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface DividerProps {
  imageW?: number;
  imageH?: number;
  className?: string;
}

export default function Divider({
  imageH = 21,
  imageW = 21,
  className,
}: DividerProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="h-[1px] flex-1 bg-osmoverse-750" />
      <Image
        src={"/assets/icons/star-divider.svg"}
        alt="Divider"
        width={imageH}
        height={imageW}
      />
      <div className="h-[1px] flex-1 bg-osmoverse-750" />
    </div>
  );
}
