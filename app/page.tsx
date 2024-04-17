import BuildSection from "@/components/sections/build-section";
import EarnSection from "@/components/sections/earn-section";
import ExploreAssets from "@/components/sections/explore-assets";
import HelpSection from "@/components/sections/help-section";
import HeroSection from "@/components/sections/hero";
import StatsWithTweets from "@/components/sections/stats-with-tweets";
import TokenStatsSection from "@/components/sections/token-stats";
import TradeSection from "@/components/sections/trade-section";
import VoteSection from "@/components/sections/vote-section";

export default function Home() {
  return (
    <main className="mb-8 mt-[147px] flex w-full flex-col sm:mb-5.5 sm:mt-[140px] md:mb-14 md:mt-[124px] xl:mt-[151px] 2xl:mb-18 2xl:mt-[132px]">
      <HeroSection />
      <TokenStatsSection />
      <ExploreAssets />
      <StatsWithTweets />
      {/* <OsmoCTASection />
      <StakeSection /> */}
      <EarnSection />
      <HelpSection />
      <VoteSection />
      <BuildSection />
      <TradeSection />
    </main>
  );
}
