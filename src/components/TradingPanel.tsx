import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import TokenSearch from "./TokenSearch";

const TradingPanel = () => {
  const [amount, setAmount] = useState("");
  const [slippage, setSlippage] = useState([1]);

  const handleTrade = (type: "buy" | "sell") => {
    console.log(`${type} trade:`, amount);
  };

  return (
    <Card className="p-4 bg-card border-border">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="buy" className="data-[state=active]:bg-success data-[state=active]:text-white">
            Buy
          </TabsTrigger>
          <TabsTrigger value="sell" className="data-[state=active]:bg-destructive data-[state=active]:text-white">
            Sell
          </TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="space-y-4">
          <div className="space-y-2">
            <Label>Select Token</Label>
            <TokenSearch />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Amount (SOL)</Label>
              <span className="text-xs text-muted-foreground">Balance: 10.5 SOL</span>
            </div>
            <Input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-input border-border"
            />
            <div className="grid grid-cols-4 gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAmount("0.1")}
                className="border-border hover:bg-secondary"
              >
                0.1
              </Button>
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
                onClick={() => setAmount("10.5")}
                className="border-border hover:bg-secondary"
              >
                Max
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Slippage Tolerance</Label>
              <span className="text-sm text-primary font-semibold">{slippage[0]}%</span>
            </div>
            <Slider
              value={slippage}
              onValueChange={setSlippage}
              max={20}
              step={0.5}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>20%</span>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">You will receive</span>
              <span className="font-semibold">~1,234,567 PEPE</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price Impact</span>
              <span className="text-success">0.12%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fee</span>
              <span>0.003 SOL</span>
            </div>
          </div>

          <Button
            onClick={() => handleTrade("buy")}
            className="w-full bg-success hover:bg-success/90 text-white font-semibold"
            size="lg"
          >
            Buy PEPE
          </Button>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4">
          <div className="space-y-2">
            <Label>Select Token</Label>
            <TokenSearch />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Amount (PEPE)</Label>
              <span className="text-xs text-muted-foreground">Balance: 1M PEPE</span>
            </div>
            <Input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-input border-border"
            />
            <div className="grid grid-cols-4 gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAmount("250000")}
                className="border-border hover:bg-secondary"
              >
                25%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAmount("500000")}
                className="border-border hover:bg-secondary"
              >
                50%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAmount("750000")}
                className="border-border hover:bg-secondary"
              >
                75%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAmount("1000000")}
                className="border-border hover:bg-secondary"
              >
                Max
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Slippage Tolerance</Label>
              <span className="text-sm text-primary font-semibold">{slippage[0]}%</span>
            </div>
            <Slider
              value={slippage}
              onValueChange={setSlippage}
              max={20}
              step={0.5}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>20%</span>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">You will receive</span>
              <span className="font-semibold">~0.5 SOL</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price Impact</span>
              <span className="text-success">0.12%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fee</span>
              <span>0.003 SOL</span>
            </div>
          </div>

          <Button
            onClick={() => handleTrade("sell")}
            className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold"
            size="lg"
          >
            Sell PEPE
          </Button>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default TradingPanel;
