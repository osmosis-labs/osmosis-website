import HeroSection from "@/components/sections/hero";
import OsmoCTASection from "@/components/sections/osmo-cta";
import StakeSection from "@/components/sections/stake-section";
import StatsWithTweets from "@/components/sections/stats-with-tweets";
import TokenStatsSection from "@/components/sections/token-stats";

export default function Home() {
  return (
    <main className="mb-8 mt-6 flex w-full flex-col sm:mb-5.5 sm:mt-4 md:mb-14 md:mt-5.5 lg:mt-4.5 xl:mb-18 xl:mt-11 2xl:mb-20 2xl:mt-6.5">
      <HeroSection />
      <TokenStatsSection />
      {/* <section className="mt-47 flex h-[875px] w-[1440px] max-w-content items-center justify-center bg-osmoverse-800">
        explore-assets.tsx
      </section>
    */}
      <StatsWithTweets />
      <OsmoCTASection />
      <StakeSection />
      {/*
      <section className="mt-42 flex h-[1018px] w-full items-center justify-center bg-osmoverse-800">
        earn-section.tsx
      </section>
      <section className="mt-35 flex h-[559px] w-[1440px] items-center justify-center bg-osmoverse-800">
        vote-section.tsx
      </section>
      <section className="mt-65 flex h-[500px] w-[1440px] items-center justify-center bg-osmoverse-800">
        contacts-section.tsx
      </section>
      <section className="mt-30 flex h-[890px] w-[1440px] items-center justify-center bg-osmoverse-800">
        help-section.tsx
      </section>
      <section className="mt-28 flex h-[466px] w-[1440px] items-center justify-center bg-osmoverse-800">
        trade-section.tsx
      </section> */}
    </main>
  );
}
