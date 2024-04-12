import Badge from "@/components/shared/badge";
import Card, { CardProps } from "@/components/shared/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type HelpCardProps = CardProps & {
  firstRow?: boolean;
};

const cards: HelpCardProps[] = [
  {
    title: "Support",
    description:
      "New to it all? Need help? Our support team is available 24/7.",
    descriptionClassName:
      "w-[250px] sm:w-[230px] md:w-[300px] lg:w-[240px] xl:w-[277px] 2xl:w-[355px]",
    iconUri: "/assets/help/card-icons/questions.svg",
    link: "https://support.osmosis.zone/",
    illustration: (
      <Image
        src={"/assets/help/illustrations/support.svg"}
        alt="Support illustration"
        width={157}
        height={136}
        className="absolute right-4 top-6 z-10 sm:right-6 sm:top-10 md:right-13 md:top-10 md:h-[161px] md:w-[185px] lg:right-0.5 lg:top-15 lg:h-[176px] lg:w-[202px] xl:right-1.5 xl:top-11 xl:h-[203px] xl:w-[234px] 2xl:right-[74px]"
      />
    ),
  },
  {
    title: "Blog",
    description:
      "Catch up on the latest developments and explore our lively community.",
    descriptionClassName:
      "w-[250px] sm:w-[228px] md:w-[300px] lg:w-[240px] xl:w-[300px] 2xl:w-[355px]",
    iconUri: "/assets/help/card-icons/blog.svg",
    link: "https://forum.osmosis.zone/c/blog/13",
    illustration: (
      <Image
        src={"/assets/help/illustrations/blog.svg"}
        alt="Support illustration"
        width={114}
        height={153}
        className="absolute right-6 top-6 z-10 sm:right-12 sm:top-2.5 sm:h-[165px] sm:w-[123px] md:right-[66px] md:h-[206px] md:w-[153px] lg:right-7 lg:top-8 xl:right-6 xl:top-5 xl:h-[240px] xl:w-[190px]"
      />
    ),
  },
  {
    title: "X(Twitter)",
    iconUri: "/assets/help/card-icons/x.svg",
    link: "https://twitter.com/osmosiszone",
    badgeDescription: "@osmosiszone",
  },
  {
    title: "Telegram",
    iconUri: "/assets/help/card-icons/telegram.svg",
    link: "https://t.me/osmosis_chat",
    badgeDescription: "osmosis_chat",
  },
  {
    title: "Forum",
    iconUri: "/assets/help/card-icons/forum.svg",
    link: "https://forum.osmosis.zone",
    badgeDescription: "forum.osmosis.zone",
  },
];

export default function HelpSection() {
  return (
    <div className="relative">
      <section className="relative z-10 mt-36 flex flex-col items-center justify-center sm:mt-[112px] md:mt-36 xl:mt-44 2xl:mt-52">
        <div className="flex flex-col items-center justify-center gap-6 self-stretch p-2 sm:p-4 lg:gap-8 2xl:gap-14 2xl:p-6">
          <div className="flex flex-col items-center gap-4">
            <Badge label="Put your assets to work" />
            <h3 className="bg-help-headline text-center font-poppins text-3.5xl font-medium leading-9.5 -tracking-2% md:text-4xl md:leading-10.75 lg:text-5xl lg:leading-13 2xl:text-6.25xl 2xl:leading-17.5">
              Connect with Osmosis.
            </h3>
          </div>
          {/**stack */}
          <div className="flex flex-col justify-center gap-2 self-stretch xl:gap-4">
            {/**row */}
            <div className="flex flex-col justify-center gap-2 self-stretch lg:grid lg:grid-cols-2 xl:gap-4">
              {cards.slice(0, 2).map((props) => (
                <HelpCard key={props.title} {...props} firstRow />
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
      <Image
        src={"/assets/grids/base/grid-3.svg"}
        alt="Grid 3"
        width={358}
        height={1663}
        className="absolute -top-[280px] z-0 h-auto w-full sm:hidden"
      />
      <Image
        src={"/assets/grids/sm/grid-3.svg"}
        alt="Grid 3"
        width={448}
        height={1587}
        className="bottom absolute -top-[280px] z-0 hidden h-auto w-full sm:block md:hidden"
      />
      <Image
        src={"/assets/grids/md/grid-3.svg"}
        alt="Grid 3"
        width={640}
        height={1212}
        className="bottom absolute -top-[280px] z-0 hidden h-auto w-full md:block lg:hidden"
      />
      <Image
        src={"/assets/grids/lg/grid-3.svg"}
        alt="Grid 3"
        width={962}
        height={758}
        className="bottom absolute -top-[150px] z-0 hidden h-auto w-full lg:block xl:hidden"
      />
      <Image
        src={"/assets/grids/xl/grid-3.svg"}
        alt="Grid 3"
        width={1155}
        height={912}
        className="bottom absolute -top-[145px] z-0 hidden h-auto w-full xl:block 2xl:hidden"
      />
      <Image
        src={"/assets/grids/2xl/grid-3.svg"}
        alt="Grid 3"
        width={1155}
        height={912}
        className="bottom absolute -top-[410px] z-0 hidden h-auto w-full 2xl:block"
      />
    </div>
  );
}

function HelpCard(props: HelpCardProps) {
  return (
    <Card
      {...props}
      badgeClassName="bg-ion-900"
      className={cn(
        props.firstRow
          ? "h-[270px] sm:h-60 lg:h-65"
          : "h-30 lg:h-40 2xl:h-[200px]",
      )}
      linkArrowIconUri={
        props.badgeDescription
          ? "/assets/help/card-icons/link-arrow-connected.svg"
          : "/assets/help/card-icons/link-arrow.svg"
      }
      linkArrowClassName={cn("h-8", props.badgeDescription ? "w-10" : "w-8")}
      gradientOverlay={
        props.firstRow ? (
          <div className="bg-help-card-radial absolute inset-0" />
        ) : undefined
      }
    />
  );
}
