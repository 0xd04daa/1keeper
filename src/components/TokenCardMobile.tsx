import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MiniChart from "./MiniChart";
import { Shield, AlertCircle } from "lucide-react";

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

interface TokenCardMobileProps {
  token: Token;
  onBuyClick: (token: Token) => void;
}

const TokenCardMobile = ({ token, onBuyClick }: TokenCardMobileProps) => {
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
    <Card className="p-4 bg-card border-border hover:bg-secondary/30 transition-colors">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{token.image}</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg text-foreground">{token.symbol}</span>
                <Badge variant="outline" className="text-xs">
                  {token.age}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">{token.name}</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {token.isAudited ? (
              <Shield className="w-5 h-5 text-success" />
            ) : (
              <AlertCircle className={`w-5 h-5 ${getRiskColor(token.riskLevel)}`} />
            )}
            <span className={`text-xs ${getRiskColor(token.riskLevel)}`}>
              {token.isAudited ? "已审" : "未审"}
            </span>
          </div>
        </div>

        {/* Chart and Price Change */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-16">
            <MiniChart data={token.chartData} isPositive={token.priceChange24h >= 0} />
          </div>
          <div
            className={`text-2xl font-bold ${
              token.priceChange24h >= 0 ? "text-success" : "text-destructive"
            }`}
          >
            {token.priceChange24h >= 0 ? "+" : ""}
            {token.priceChange24h.toFixed(2)}%
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div>
            <div className="text-muted-foreground text-xs">市值</div>
            <div className="font-semibold text-foreground">{token.marketCap}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs">流动性</div>
            <div className="font-semibold text-foreground">{token.liquidity}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs">交易量</div>
            <div className="font-semibold text-foreground">{token.volume24h}</div>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-muted-foreground text-xs">买入: </span>
              <span className="text-success font-semibold">
                {(token.txns24h.buys / 1000).toFixed(1)}K
              </span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">卖出: </span>
              <span className="text-destructive font-semibold">
                {(token.txns24h.sells / 1000).toFixed(1)}K
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onBuyClick(token)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          购买 {token.symbol}
        </Button>
      </div>
    </Card>
  );
};

export default TokenCardMobile;
