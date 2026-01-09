import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TrendingToken {
  rank: number;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: string;
  marketCap: string;
}

const trendingTokens: TrendingToken[] = [
  { rank: 1, symbol: "BONK", name: "Bonk", price: 0.0000015, change24h: 45.2, volume: "$23.5M", marketCap: "$156M" },
  { rank: 2, symbol: "WIF", name: "dogwifhat", price: 1.23, change24h: 32.8, volume: "$18.2M", marketCap: "$245M" },
  { rank: 3, symbol: "PEPE", name: "Pepe", price: 0.00000123, change24h: 28.5, volume: "$45.2M", marketCap: "$423M" },
  { rank: 4, symbol: "MYRO", name: "Myro", price: 0.089, change24h: -12.3, volume: "$8.5M", marketCap: "$89M" },
  { rank: 5, symbol: "POPCAT", name: "Popcat", price: 0.56, change24h: 18.7, volume: "$12.3M", marketCap: "$178M" },
];

const TrendingTokens = () => {
  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Trending Tokens
        </h3>
      </div>

      <div className="space-y-2">
        {trendingTokens.map((token) => (
          <div
            key={token.rank}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors border border-transparent hover:border-border"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-muted-foreground w-6">{token.rank}</span>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{token.symbol[0]}</span>
              </div>
              <div>
                <div className="font-semibold text-sm">{token.symbol}</div>
                <div className="text-xs text-muted-foreground">{token.name}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold">${token.price < 0.01 ? token.price.toFixed(8) : token.price.toFixed(4)}</div>
              <div className="flex items-center gap-1">
                {token.change24h >= 0 ? (
                  <TrendingUp className="w-3 h-3 text-success" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-destructive" />
                )}
                <span
                  className={`text-xs font-semibold ${
                    token.change24h >= 0 ? "text-success" : "text-destructive"
                  }`}
                >
                  {token.change24h >= 0 ? "+" : ""}{token.change24h.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-center">
          <a
            href="#"
            className="text-sm text-primary hover:underline font-semibold"
          >
            View All Trending →
          </a>
        </div>
      </div>
    </Card>
  );
};

export default TrendingTokens;
