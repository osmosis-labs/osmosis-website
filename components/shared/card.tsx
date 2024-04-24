"use client";

import React, { PropsWithChildren, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { GTagLink } from "@/components/shared/gtag-link";

export interface CardProps {
  title: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  iconUri: string;
  link?: string;
  linkArrowIconUri?: string;
  linkArrowClassName?: string;
  illustration?: ReactElement;
  badgeDescription?: string | ReactElement;
  badgeClassName?: string;
  gradientOverlay?: ReactElement;
  infoWrapperClassName?: string;
  iconClassName?: string;
  textExpandable?: boolean;
}

export default function Card({
  iconUri,
  title,
  badgeDescription,
  badgeClassName,
  description,
  descriptionClassName,
  illustration,
  link,
  className,
  gradientOverlay,
  linkArrowIconUri,
  linkArrowClassName,
  infoWrapperClassName,
  iconClassName,
  textExpandable,
}: CardProps) {
  return (
    <GTagLink asChild eventName="cardClicked" label={title}>
      <Link
        href={link ?? "#"}
        className={cn(
          "relative flex flex-grow flex-col justify-between self-stretch overflow-hidden rounded-2xl border border-solid border-osmoverse-650 bg-osmoverse-775 p-4 xl:rounded-3xl 2xl:p-6",
          {
            "has-[label[:hover]]:pointer-events-none": textExpandable,
          },
          // {
          //   "pointer-events-none": isHover,
          // },
          className,
        )}
      >
        {illustration}
        {gradientOverlay}
        <div className="relative z-20 flex items-center justify-between self-stretch">
          <Image
            src={iconUri}
            alt={`${title} icon`}
            className={cn(iconClassName)}
            width={24}
            height={24}
          />
          <div className="flex items-center">
            {badgeDescription && (
              <div
                className={cn(
                  "flex items-center justify-center gap-1 rounded-lg bg-[#87087C] px-3 py-1",
                  badgeClassName,
                )}
              >
                {badgeDescription}
              </div>
            )}
            {link && linkArrowIconUri && (
              <Image
                src={linkArrowIconUri}
                alt={`${title} link`}
                width={40}
                height={32}
                className={cn("-ml-0.5", linkArrowClassName)}
              />
            )}
          </div>
        </div>
        <div
          className={cn(
            "relative z-20 flex flex-col gap-2",
            infoWrapperClassName,
          )}
        >
          <h3 className="font-poppins text-xl font-medium leading-6.5 text-neutral-100 2xl:text-2xl 2xl:leading-7.75">
            {title}
          </h3>
          {textExpandable && (
            <>
              <input type="checkbox" id="descToggle" className="peer hidden" />
              <label
                htmlFor="descToggle"
                className="pointer-events-auto absolute bottom-0 right-0 z-50 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#41366A] transition-transform peer-[:checked]:rotate-45 sm:hidden"
              >
                <Image
                  src={"/assets/icons/cross.svg"}
                  alt="Open/Close description"
                  width={12}
                  height={12}
                />
              </label>
            </>
          )}
          <p
            className={cn(
              "line-clamp-2 max-w-[448px] self-stretch leading-6.25 text-alpha-60 peer-[:checked]:line-clamp-none sm:line-clamp-none",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        </div>
      </Link>
    </GTagLink>
  );
}

function LinkOrDiv({
  isLink,
  children,
  ...props
}: PropsWithChildren<{ isLink: boolean; className: string; href?: string }>) {
  const Component = isLink ? Link : "div";

  return (
    <Component href={props.href ?? "#"} {...props}>
      {children}
    </Component>
  );
}
