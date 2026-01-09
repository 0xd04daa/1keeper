import Navbar from "@/components/Navbar";
import PriceChart from "@/components/PriceChart";
import TradingPanel from "@/components/TradingPanel";
import TokenInfo from "@/components/TokenInfo";
import TrendingTokens from "@/components/TrendingTokens";
import TradeHistory from "@/components/TradeHistory";

const Trading = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Main Trading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Sidebar - Trending Tokens */}
          <div className="lg:col-span-3 space-y-6">
            <TrendingTokens />
          </div>

          {/* Center - Chart & Trade History */}
          <div className="lg:col-span-6 space-y-6">
            <PriceChart />
            <TradeHistory />
          </div>

          {/* Right Sidebar - Trading Panel & Token Info */}
          <div className="lg:col-span-3 space-y-6">
            <TradingPanel />
            <TokenInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
