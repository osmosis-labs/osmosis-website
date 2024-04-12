"use client";

import React, { PropsWithChildren, forwardRef } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Slot } from "@radix-ui/react-slot";

interface GtagLinkProps {
  eventName: string;
  label: string;
  asChild?: boolean;
}

export const GTagLink = forwardRef<any, PropsWithChildren<GtagLinkProps>>(
  ({ eventName, label, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        onClick={() => sendGTMEvent({ name: eventName, label })}
        ref={ref}
        {...props}
      />
    );
  },
);

GTagLink.displayName = "GTagLink";
