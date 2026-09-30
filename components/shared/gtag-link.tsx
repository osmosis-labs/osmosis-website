import type { PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";

interface GtagLinkProps {
  eventName: string;
  label: string;
  asChild?: boolean;
}

/**
 * Tags its child with GTM event data. A single delegated click listener in
 * the layout pushes the event, so this renders to static HTML with no JS.
 */
export function GTagLink({
  eventName,
  label,
  asChild,
  ...props
}: PropsWithChildren<GtagLinkProps>) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp data-gtag-event={eventName} data-gtag-label={label} {...props} />
  );
}
