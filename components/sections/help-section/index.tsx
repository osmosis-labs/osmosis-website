import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface Card {
  title: string;
  description?: string;
  descriptionClassName?: string;
  iconUri: string;
  link?: string;
  illustration?: ReactElement;
  badgeDescription?: string;
}

const cards: Card[] = [
  {
    title: "Support",
    description: "Capital efficient pools with low-slippage.",
    descriptionClassName: "lg:w-[230px]",
    iconUri: "/assets/help/card-icons/questions.svg",
    link: "#",
    illustration: (
      <Image
        src={"/assets/help/illustrations/support.svg"}
        alt="Support illustration"
        width={157}
        height={136}
        className="absolute right-1.5 top-7.5 sm:right-11 md:right-13 md:top-10 md:h-[161px] md:w-[185px] lg:-right-10 lg:top-11 lg:h-[203px] lg:w-[234px] xl:right-1.5 2xl:right-[74px]"
      />
    ),
  },
  {
    title: "Blog",
    description: "Catch up on the latest developments",
    iconUri: "/assets/help/card-icons/blog.svg",
    link: "#",
    illustration: (
      <Image
        src={"/assets/help/illustrations/blog.svg"}
        alt="Support illustration"
        width={123}
        height={164}
        className="absolute right-12 top-3 md:right-[66px] md:h-[206px] md:w-[153px] lg:right-6 lg:top-5 lg:h-64 lg:w-[190px]"
      />
    ),
  },
  {
    title: "X(Twitter)",
    iconUri: "/assets/help/card-icons/x.svg",
    link: "#",
    badgeDescription: "@osmosiszone",
  },
  {
    title: "Telegram",
    iconUri: "/assets/help/card-icons/telegram.svg",
    link: "#",
    badgeDescription: "osmosis_chat",
  },
  {
    title: "Forum",
    iconUri: "/assets/help/card-icons/forum.svg",
    link: "#",
    badgeDescription: "forum.osmosis.zone",
  },
];

export default function HelpSection() {
  return (
    <section className="mt-36 flex flex-col items-center justify-center sm:mt-[112px] md:mt-36 xl:mt-44 2xl:mt-52">
      <div className="flex flex-col items-center justify-center gap-6 self-stretch p-2 sm:p-4 lg:gap-8 2xl:gap-14 2xl:p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex max-w-max items-center justify-center rounded-full bg-[#37D56D40] px-3 py-1 backdrop-blur-xl">
            <span className="text-sm leading-[22px] text-[#37D56D] lg:text-base lg:leading-[25px]">
              Meet the community
            </span>
          </div>
          <h3 className="bg-help-headline text-center font-h1 text-3.5xl font-medium leading-[38px] -tracking-[0.64px] md:text-4xl md:leading-[43px] md:-tracking-[0.72px] lg:text-5xl lg:leading-[52px] lg:-tracking-[0.96px] 2xl:text-[64px] 2xl:leading-[70px] 2xl:-tracking-[1.28px]">
            Connect with Osmosis.
          </h3>
        </div>
        {/**stack */}
        <div className="flex flex-col justify-center gap-2 self-stretch xl:gap-4">
          {/**row */}
          <div className="flex flex-col justify-center gap-2 self-stretch lg:grid lg:grid-cols-2 xl:gap-4">
            {cards.slice(0, 2).map((props) => (
              <HelpCard key={props.title} {...props} firstRow showGradient />
            ))}
          </div>
          {/**row */}
          <div className="flex flex-col justify-center gap-2 self-stretch lg:grid lg:grid-cols-3 xl:gap-4">
            {cards.slice(2, 5).map((props) => (
              <HelpCard key={props.title} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface HelpCardProps extends Card {
  firstRow?: boolean;
  showGradient?: boolean;
}

function HelpCard({
  firstRow,
  showGradient,
  iconUri,
  title,
  badgeDescription,
  description,
  descriptionClassName,
  illustration,
  link,
}: HelpCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-grow flex-col justify-between self-stretch overflow-hidden rounded-2xl border border-solid border-[#3C356D] bg-[#201B43] p-4 xl:rounded-3xl 2xl:p-6",
        {
          "h-60 lg:h-65": firstRow,
          "h-30 lg:h-40 2xl:h-[200px]": !firstRow,
        },
      )}
    >
      {illustration}
      {showGradient && <div className="bg-help-card-radial absolute inset-0" />}
      <div className="relative z-20 flex items-center justify-between self-stretch">
        <Image src={iconUri} alt={`${title} icon`} width={24} height={24} />
        <div className="flex items-center">
          {badgeDescription && (
            <div className="flex items-center justify-center gap-1 rounded-lg bg-ion-900 px-3 py-1">
              <p className="inline-flex items-center gap-1 text-sm font-light leading-[21px] text-neutral-100">
                {badgeDescription}
              </p>
            </div>
          )}
          {link && (
            <Link href={link} className="-ml-0.5">
              <Image
                src={
                  badgeDescription
                    ? "/assets/help/card-icons/link-arrow-connected.svg"
                    : "/assets/help/card-icons/link-arrow.svg"
                }
                alt={`${title} link`}
                width={badgeDescription ? 40 : 32}
                height={32}
              />
            </Link>
          )}
        </div>
      </div>
      <div className="relative z-20 flex flex-col gap-2">
        <h5 className="font-h1 text-xl font-medium leading-[26px] text-neutral-100 2xl:text-2xl 2xl:leading-[31px]">
          {title}
        </h5>
        <p
          className={cn(
            "max-w-[448px] self-stretch leading-[25px] text-[#F9F8F760]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
