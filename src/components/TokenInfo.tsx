import { Card } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TokenInfo = () => {
  const tokenData = {
    name: "Pepe",
    symbol: "PEPE",
    address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    marketCap: "$423.5M",
    liquidity: "$12.3M",
    holders: "125,432",
    volume24h: "$45.2M",
    fdv: "$589.2M",
    supply: "420.69T",
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenData.address);
    toast.success("Address copied to clipboard!");
  };

  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Token Info</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={copyAddress}
            className="border-border hover:bg-secondary"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border hover:bg-secondary"
            asChild
          >
            <a
              href={`https://etherscan.io/token/${tokenData.address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-sm text-muted-foreground">Market Cap</span>
          <span className="text-sm font-semibold text-foreground">{tokenData.marketCap}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-sm text-muted-foreground">FDV</span>
          <span className="text-sm font-semibold text-foreground">{tokenData.fdv}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-sm text-muted-foreground">24h Volume</span>
          <span className="text-sm font-semibold text-foreground">{tokenData.volume24h}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-sm text-muted-foreground">Liquidity</span>
          <span className="text-sm font-semibold text-foreground">{tokenData.liquidity}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-sm text-muted-foreground">Holders</span>
          <span className="text-sm font-semibold text-foreground">{tokenData.holders}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-muted-foreground">Total Supply</span>
          <span className="text-sm font-semibold text-foreground">{tokenData.supply}</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-secondary/30 rounded-lg">
        <p className="text-xs text-muted-foreground mb-1">Contract Address</p>
        <p className="text-xs font-mono text-foreground break-all">{tokenData.address}</p>
      </div>
    </Card>
  );
};

export default TokenInfo;
