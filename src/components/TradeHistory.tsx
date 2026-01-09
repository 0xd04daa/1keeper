import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

interface Trade {
  id: string;
  type: "buy" | "sell";
  token: string;
  amount: string;
  price: string;
  total: string;
  time: string;
  txHash: string;
}

const mockTrades: Trade[] = [
  {
    id: "1",
    type: "buy",
    token: "PEPE",
    amount: "1,234,567",
    price: "$0.00000123",
    total: "0.5 SOL",
    time: "2m ago",
    txHash: "0x123...abc",
  },
  {
    id: "2",
    type: "sell",
    token: "BONK",
    amount: "500,000",
    price: "$0.0000015",
    total: "0.3 SOL",
    time: "5m ago",
    txHash: "0x456...def",
  },
  {
    id: "3",
    type: "buy",
    token: "WIF",
    amount: "250",
    price: "$1.23",
    total: "1.2 SOL",
    time: "12m ago",
    txHash: "0x789...ghi",
  },
  {
    id: "4",
    type: "buy",
    token: "PEPE",
    amount: "2,500,000",
    price: "$0.00000125",
    total: "1.5 SOL",
    time: "18m ago",
    txHash: "0xabc...jkl",
  },
  {
    id: "5",
    type: "sell",
    token: "POPCAT",
    amount: "800",
    price: "$0.56",
    total: "1.8 SOL",
    time: "25m ago",
    txHash: "0xdef...mno",
  },
];

const TradeHistory = () => {
  return (
    <Card className="p-4 bg-card border-border">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Recent Trades</h3>
          <TabsList className="bg-secondary">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="buy" className="data-[state=active]:text-success">
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="data-[state=active]:text-destructive">
              Sell
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="space-y-2">
            {mockTrades.map((trade) => (
              <TradeRow key={trade.id} trade={trade} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="buy" className="mt-0">
          <div className="space-y-2">
            {mockTrades
              .filter((t) => t.type === "buy")
              .map((trade) => (
                <TradeRow key={trade.id} trade={trade} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="sell" className="mt-0">
          <div className="space-y-2">
            {mockTrades
              .filter((t) => t.type === "sell")
              .map((trade) => (
                <TradeRow key={trade.id} trade={trade} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

const TradeRow = ({ trade }: { trade: Trade }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
      <div className="flex items-center gap-3 flex-1">
        <div
          className={`px-2 py-1 rounded text-xs font-semibold ${
            trade.type === "buy"
              ? "bg-success/20 text-success"
              : "bg-destructive/20 text-destructive"
          }`}
        >
          {trade.type.toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-sm">{trade.token}</div>
          <div className="text-xs text-muted-foreground">{trade.amount}</div>
        </div>
      </div>

      <div className="text-right flex-1">
        <div className="text-sm font-semibold">{trade.price}</div>
        <div className="text-xs text-muted-foreground">{trade.total}</div>
      </div>

      <div className="text-right flex-1">
        <div className="text-xs text-muted-foreground">{trade.time}</div>
        <a
          href={`https://solscan.io/tx/${trade.txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline flex items-center justify-end gap-1"
        >
          {trade.txHash}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default TradeHistory;
