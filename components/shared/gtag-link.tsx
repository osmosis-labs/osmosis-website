"use client";

import React, { PropsWithChildren, forwardRef } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";

interface GtagLinkProps {
  eventName: string;
  label: string;
  asChild?: boolean;
  link?: typeof Link;
  href?: string;
}

export const GTagLink = forwardRef<any, PropsWithChildren<GtagLinkProps>>(
  ({ eventName, label, asChild, link, href, ...props }, ref) => {
    const Comp = asChild ? Slot : link ? link : "button";

    return (
      <Comp
        href={href ?? "#"}
        onClick={() => sendGTMEvent({ name: eventName, label })}
        ref={ref}
        {...props}
      ></Comp>
    );
  },
);

GTagLink.displayName = "GTagLink";
