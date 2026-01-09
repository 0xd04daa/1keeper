import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Copy } from "lucide-react";
import { toast } from "sonner";

interface QuickTradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  token: {
    symbol: string;
    name: string;
    image: string;
    marketCap: string;
    priceChange24h: number;
  };
}

const QuickTradeDialog = ({ open, onOpenChange, token }: QuickTradeDialogProps) => {
  const [amount, setAmount] = useState("");
  const [slippage, setSlippage] = useState([1]);

  const handleTrade = (type: "buy" | "sell") => {
    toast.success(`${type === "buy" ? "买入" : "卖出"} ${token.symbol} 成功!`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-2xl">{token.image}</span>
            <div>
              <div className="text-lg font-bold">{token.symbol}</div>
              <div className="text-sm text-muted-foreground font-normal">{token.name}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Token Stats */}
          <div className="bg-secondary/30 rounded-lg p-3 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">市值</div>
              <div className="text-sm font-semibold">{token.marketCap}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">24h 变化</div>
              <div
                className={`text-sm font-semibold ${
                  token.priceChange24h >= 0 ? "text-success" : "text-destructive"
                }`}
              >
                {token.priceChange24h >= 0 ? "+" : ""}
                {token.priceChange24h.toFixed(2)}%
              </div>
            </div>
          </div>

          {/* Trading Tabs */}
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="buy"
                className="data-[state=active]:bg-success data-[state=active]:text-white"
              >
                买入
              </TabsTrigger>
              <TabsTrigger
                value="sell"
                className="data-[state=active]:bg-destructive data-[state=active]:text-white"
              >
                卖出
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>金额 (SOL)</Label>
                  <span className="text-xs text-muted-foreground">余额: 10.5 SOL</span>
                </div>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-input border-border text-lg"
                />
                <div className="grid grid-cols-4 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("0.5")}
                    className="border-border hover:bg-secondary"
                  >
                    0.5
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("1")}
                    className="border-border hover:bg-secondary"
                  >
                    1.0
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("5")}
                    className="border-border hover:bg-secondary"
                  >
                    5.0
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("10.5")}
                    className="border-border hover:bg-secondary"
                  >
                    Max
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>滑点容忍度</Label>
                  <span className="text-sm text-primary font-semibold">{slippage[0]}%</span>
                </div>
                <Slider value={slippage} onValueChange={setSlippage} max={20} step={0.5} />
              </div>

              <div className="bg-secondary/30 rounded-lg p-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">预计获得</span>
                  <span className="font-semibold">~123,456 {token.symbol}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">价格影响</span>
                  <span className="text-success">0.12%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">手续费</span>
                  <span>0.003 SOL</span>
                </div>
              </div>

              <Button
                onClick={() => handleTrade("buy")}
                className="w-full bg-success hover:bg-success/90 text-white font-semibold"
                size="lg"
              >
                买入 {token.symbol}
              </Button>
            </TabsContent>

            <TabsContent value="sell" className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>金额 ({token.symbol})</Label>
                  <span className="text-xs text-muted-foreground">
                    余额: 1,000,000 {token.symbol}
                  </span>
                </div>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-input border-border text-lg"
                />
                <div className="grid grid-cols-4 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("25000")}
                    className="border-border hover:bg-secondary"
                  >
                    25%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("50000")}
                    className="border-border hover:bg-secondary"
                  >
                    50%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("75000")}
                    className="border-border hover:bg-secondary"
                  >
                    75%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount("100000")}
                    className="border-border hover:bg-secondary"
                  >
                    Max
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>滑点容忍度</Label>
                  <span className="text-sm text-primary font-semibold">{slippage[0]}%</span>
                </div>
                <Slider value={slippage} onValueChange={setSlippage} max={20} step={0.5} />
              </div>

              <div className="bg-secondary/30 rounded-lg p-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">预计获得</span>
                  <span className="font-semibold">~0.5 SOL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">价格影响</span>
                  <span className="text-success">0.12%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">手续费</span>
                  <span>0.003 SOL</span>
                </div>
              </div>

              <Button
                onClick={() => handleTrade("sell")}
                className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold"
                size="lg"
              >
                卖出 {token.symbol}
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickTradeDialog;
