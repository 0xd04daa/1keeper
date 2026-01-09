import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MiniChart from "./MiniChart";
import QuickTradeDialog from "./QuickTradeDialog";
import TokenCardMobile from "./TokenCardMobile";
import { ExternalLink, TrendingUp, Shield, AlertCircle } from "lucide-react";

interface Token {
  id: string;
  name: string;
  symbol: string;
  image: string;
  marketCap: string;
  liquidity: string;
  volume24h: string;
  txns24h: {
    buys: number;
    sells: number;
  };
  priceChange24h: number;
  chartData: number[];
  age: string;
  isAudited: boolean;
  riskLevel: "low" | "medium" | "high";
}

const generateMockChartData = (isPositive: boolean): number[] => {
  const data: number[] = [];
  let value = 100;
  for (let i = 0; i < 20; i++) {
    value = value * (1 + (Math.random() - (isPositive ? 0.3 : 0.6)) * 0.1);
    data.push(value);
  }
  return data;
};

const mockTokens: Token[] = [
  {
    id: "1",
    name: "Pippin",
    symbol: "PIPPIN",
    image: "🐶",
    marketCap: "$402M",
    liquidity: "$15M",
    volume24h: "$14.4M",
    txns24h: { buys: 24600, sells: 22600 },
    priceChange24h: 21.23,
    chartData: generateMockChartData(true),
    age: "1y",
    isAudited: false,
    riskLevel: "low",
  },
  {
    id: "2",
    name: "Testicle",
    symbol: "TESTICLE",
    image: "⚫",
    marketCap: "$5.92M",
    liquidity: "$491K",
    volume24h: "$5.39M",
    txns24h: { buys: 16900, sells: 18700 },
    priceChange24h: 167.2,
    chartData: generateMockChartData(true),
    age: "19d",
    isAudited: true,
    riskLevel: "medium",
  },
  {
    id: "3",
    name: "BlueWhale",
    symbol: "BLUE",
    image: "🐋",
    marketCap: "$534K",
    liquidity: "$169K",
    volume24h: "$5.13M",
    txns24h: { buys: 63800, sells: 20000 },
    priceChange24h: 951.9,
    chartData: generateMockChartData(true),
    age: "12d",
    isAudited: false,
    riskLevel: "high",
  },
  {
    id: "4",
    name: "BlackWhale",
    symbol: "BLACK",
    image: "🐋",
    marketCap: "$4.46M",
    liquidity: "$340K",
    volume24h: "$5.07M",
    txns24h: { buys: 25300, sells: 20200 },
    priceChange24h: 76.42,
    chartData: generateMockChartData(true),
    age: "15d",
    isAudited: false,
    riskLevel: "medium",
  },
  {
    id: "5",
    name: "BRAIN",
    symbol: "BRAIN",
    image: "🧠",
    marketCap: "$5.26M",
    liquidity: "$60.8K",
    volume24h: "$4.93M",
    txns24h: { buys: 15800, sells: 14400 },
    priceChange24h: -6.33,
    chartData: generateMockChartData(false),
    age: "22h",
    isAudited: true,
    riskLevel: "low",
  },
  {
    id: "6",
    name: "Fish",
    symbol: "FISH",
    image: "🐟",
    marketCap: "$8.25M",
    liquidity: "$375K",
    volume24h: "$4.67M",
    txns24h: { buys: 11400, sells: 9880 },
    priceChange24h: -26.2,
    chartData: generateMockChartData(false),
    age: "8d",
    isAudited: false,
    riskLevel: "medium",
  },
  {
    id: "7",
    name: "Snowball",
    symbol: "SNOW",
    image: "⛄",
    marketCap: "$2.6M",
    liquidity: "$338K",
    volume24h: "$4.53M",
    txns24h: { buys: 38900, sells: 15200 },
    priceChange24h: 63.94,
    chartData: generateMockChartData(true),
    age: "22d",
    isAudited: false,
    riskLevel: "low",
  },
  {
    id: "8",
    name: "TROLLINA",
    symbol: "TROLL",
    image: "👹",
    marketCap: "$30K",
    liquidity: "$62.6K",
    volume24h: "$4M",
    txns24h: { buys: 26500, sells: 19200 },
    priceChange24h: -3.82,
    chartData: generateMockChartData(false),
    age: "13h",
    isAudited: false,
    riskLevel: "high",
  },
];

const TokenTable = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [isTradeDialogOpen, setIsTradeDialogOpen] = useState(false);

  const handleBuyClick = (token: Token) => {
    setSelectedToken(token);
    setIsTradeDialogOpen(true);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-success";
      case "medium":
        return "text-primary";
      case "high":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="w-full">
      {/* Timeframe Filter */}
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="flex gap-2">
          {["5m", "1h", "6h", "24h"].map((tf) => (
            <Button
              key={tf}
              variant={selectedTimeframe === tf ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTimeframe(tf)}
              className={
                selectedTimeframe === tf
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary"
              }
            >
              {tf}
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-semibold text-muted-foreground border-b border-border">
          <div className="col-span-3">交易对/信息</div>
          <div className="col-span-2 text-center">市值</div>
          <div className="col-span-2 text-center">流动性</div>
          <div className="col-span-2 text-center">交易量</div>
          <div className="col-span-1 text-center">交易数</div>
          <div className="col-span-1 text-center">审计</div>
          <div className="col-span-1 text-right">操作</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {mockTokens.map((token) => (
            <div
              key={token.id}
              className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              {/* Token Info */}
              <div className="col-span-3 flex items-center gap-3">
                <div className="text-2xl">{token.image}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{token.symbol}</span>
                    <Badge variant="outline" className="text-xs">
                      {token.age}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{token.name}</div>
                  <div
                    className={`text-sm font-semibold ${
                      token.priceChange24h >= 0 ? "text-success" : "text-destructive"
                    }`}
                  >
                    {token.priceChange24h >= 0 ? "+" : ""}
                    {token.priceChange24h.toFixed(2)}%
                  </div>
                </div>
                {/* Mini Chart */}
                <div className="w-24 h-12">
                  <MiniChart
                    data={token.chartData}
                    isPositive={token.priceChange24h >= 0}
                  />
                </div>
              </div>

              {/* Market Cap */}
              <div className="col-span-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground">
                    {token.marketCap}
                  </div>
                </div>
              </div>

              {/* Liquidity */}
              <div className="col-span-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground">
                    {token.liquidity}
                  </div>
                </div>
              </div>

              {/* Volume 24h */}
              <div className="col-span-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground">
                    {token.volume24h}
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div className="col-span-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-success">
                    {(token.txns24h.buys / 1000).toFixed(1)}K
                  </div>
                  <div className="text-xs text-destructive">
                    {(token.txns24h.sells / 1000).toFixed(1)}K
                  </div>
                </div>
              </div>

              {/* Audit Status */}
              <div className="col-span-1 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1">
                  {token.isAudited ? (
                    <Shield className="w-4 h-4 text-success" />
                  ) : (
                    <AlertCircle className={`w-4 h-4 ${getRiskColor(token.riskLevel)}`} />
                  )}
                  <span className={`text-xs ${getRiskColor(token.riskLevel)}`}>
                    {token.isAudited ? "已审" : "未审"}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="col-span-1 flex items-center justify-end">
                <Button
                  size="sm"
                  onClick={() => handleBuyClick(token)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  购买
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {mockTokens.map((token) => (
          <TokenCardMobile key={token.id} token={token} onBuyClick={handleBuyClick} />
        ))}
      </div>

      {/* Quick Trade Dialog */}
      {selectedToken && (
        <QuickTradeDialog
          open={isTradeDialogOpen}
          onOpenChange={setIsTradeDialogOpen}
          token={{
            symbol: selectedToken.symbol,
            name: selectedToken.name,
            image: selectedToken.image,
            marketCap: selectedToken.marketCap,
            priceChange24h: selectedToken.priceChange24h,
          }}
        />
      )}
    </div>
  );
};

export default TokenTable;
