import BuildSection from "@/components/sections/build-section";
import EarnSection from "@/components/sections/earn-section";
import ExploreAssets from "@/components/sections/explore-assets";
import HelpSection from "@/components/sections/help-section";
import HeroSection from "@/components/sections/hero";
import OsmoCTASection from "@/components/sections/osmo-cta";
import StakeSection from "@/components/sections/stake-section";
import StatsWithTweets from "@/components/sections/stats-with-tweets";
import TokenStatsSection from "@/components/sections/token-stats";
import TradeSection from "@/components/sections/trade-section";
import VoteSection from "@/components/sections/vote-section";

export default function Home() {
  return (
    <main className="mb-8 mt-6 flex w-full flex-col sm:mb-5.5 sm:mt-4 md:mb-14 md:mt-5.5 lg:mt-4.5 xl:mt-11 2xl:mb-18 2xl:mt-6.5">
      <HeroSection />
      <TokenStatsSection />
      <ExploreAssets />
      <StatsWithTweets />
      <OsmoCTASection />
      <StakeSection />
      <EarnSection />
      <HelpSection />
      <VoteSection />
      <BuildSection />
      <TradeSection />
    </main>
  );
}
