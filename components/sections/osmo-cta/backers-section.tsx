import { cn } from "@/lib/utils";
import Image from "next/image";

const backers = [
  {
    imageUri: "/assets/backers/Paradigm.svg",
    name: "Paradigm",
  },
  {
    imageUri: "/assets/backers/BainCapital.svg",
    name: "BainCapital",
  },
  {
    imageUri: "/assets/backers/RibbitCapital.svg",
    name: "RibbitCapital",
  },
  {
    imageUri: "/assets/backers/ElectricCapital.svg",
    name: "ElectricCapital",
  },
  {
    imageUri: "/assets/backers/Grayscale.svg",
    name: "Grayscale",
  },
  {
    imageUri: "/assets/backers/Maven11.svg",
    name: "Maven11",
  },
  {
    imageUri: "/assets/backers/Anagram.svg",
    name: "Anagram",
  },
  {
    imageUri: "/assets/backers/EtherealVentures.svg",
    name: "EtherealVentures",
  },
  {
    imageUri: "/assets/backers/RobotoVentures.webp",
    name: "RobotoVentures",
  },
  {
    imageUri: "/assets/backers/Nascent.svg",
    name: "Nascent",
  },
  {
    imageUri: "/assets/backers/FigmentCapital.svg",
    name: "FigmentCapital",
  },
  {
    imageUri: "/assets/backers/BCAP.svg",
    name: "BCAP",
  },
  {
    imageUri: "/assets/backers/Anatoly.webp",
    isTextSm: true,
    isPortrait: true,
    name: "Anatoly Yakovenko",
  },
  {
    imageUri: "/assets/backers/Naval.webp",
    isPortrait: true,
    name: "Naval",
  },
  {
    imageUri: "/assets/backers/Ethan.webp",
    isTextSm: true,
    isPortrait: true,
    name: "Ethan Buchman",
  },
  {
    imageUri: "/assets/backers/Eric.webp",
    isPortrait: true,
    name: "Eric Schmidt",
  },
  {
    imageUri: "/assets/backers/Hasu.webp",
    isPortrait: true,
    name: "Hasu",
  },
  {
    imageUri: "/assets/backers/Raj.webp",
    isTextSm: true,
    isPortrait: true,
    name: "Raj Gokal",
  },
];

export default function BackersSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 self-stretch xl:py-3">
      <span className="leading-6.25 text-alpha-60">Backers include</span>
      <div className="flex flex-col-reverse items-center justify-center">
        <input
          type="checkbox"
          className="check peer hidden"
          id="backersButton"
        />
        <label
          htmlFor="backersButton"
          className="peer-[.check]:peer-checked:is-checked flex cursor-pointer items-center p-4 md:hidden"
        >
          <span className="is-checked-hide relative leading-6.25 text-alpha-60">
            Show All
          </span>
          <span className="is-checked-show relative hidden leading-6.25 text-alpha-60">
            Hide All
          </span>
          <Image
            src={"/assets/icons/show-all-caret-down.svg"}
            alt="Arrow dropdown"
            width={24}
            height={24}
            className="is-checked-arrow-rotation transition-[rotate]"
          />
        </label>
        <div className="flex h-[184px] flex-col gap-2 overflow-hidden transition-[height] peer-checked:h-full md:h-full md:flex-row md:flex-wrap md:content-center md:items-center md:justify-center md:gap-3 md:self-stretch">
          {backers.map(({ imageUri, name, isPortrait, isTextSm }) => {
            return (
              <div
                key={name}
                className="relative flex h-14 w-[342px] items-center justify-center self-stretch rounded-lg border border-solid border-osmoverse-650 bg-osmoverse-775 sm:w-[416px] md:w-max"
              >
                {isPortrait ? (
                  <div className="flex h-auto w-full items-center justify-center gap-2.5 md:px-6">
                    <Image
                      src={imageUri}
                      className="h-auto w-auto"
                      width={42}
                      height={34}
                      alt={name}
                    />
                    <span
                      className={cn("text-neutral-100", {
                        "text-sm leading-5.5": isTextSm,
                        "text-base leading-6.25": !isTextSm,
                      })}
                    >
                      {name}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={imageUri}
                    className="relative inset-[0%] h-full min-h-1 w-auto min-w-1"
                    width={140}
                    height={56}
                    alt={name}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
