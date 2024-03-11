import React from "react";
import { cn } from "@/lib/utils";

export default function DiamondGradient({
  colors,
  height,
  width,
  paddingLeft,
  paddingTop,
  className,
}: {
  colors: string[];
  width: number;
  height: number;
  paddingLeft: number;
  paddingTop: number;
  className?: string;
}) {
  const renderDivs = (
    remainingCount: number,
    colors: string[],
    height: number,
    width: number,
  ) => {
    if (remainingCount === 0) return;

    const newHeight = height - paddingLeft * remainingCount;
    const newWidth = width - paddingTop * remainingCount;

    return (
      <div
        style={{
          backgroundColor: colors[colors.length - remainingCount],
          width,
          height,
        }}
        className="flex items-center justify-center"
      >
        {renderDivs(remainingCount - 1, colors, newHeight, newWidth)}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "pointer-events-none flex opacity-30 blur-[60px]",
        className,
      )}
    >
      {renderDivs(colors.length, colors, height, width)}
    </div>
  );
}
