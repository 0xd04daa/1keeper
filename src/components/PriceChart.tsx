import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const generateChartData = () => {
  const data = [];
  let price = 0.00000123;
  for (let i = 0; i < 100; i++) {
    price = price * (1 + (Math.random() - 0.48) * 0.05);
    data.push({
      time: `${i}m`,
      price: price,
    });
  }
  return data;
};

const chartData = generateChartData();

const PriceChart = () => {
  const [timeframe, setTimeframe] = useState("1H");
  const currentPrice = chartData[chartData.length - 1].price;
  const startPrice = chartData[0].price;
  const priceChange = ((currentPrice - startPrice) / startPrice) * 100;
  const isPositive = priceChange >= 0;

  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            ${currentPrice.toFixed(8)}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-sm font-semibold ${isPositive ? "text-success" : "text-destructive"}`}>
              {isPositive ? "+" : ""}{priceChange.toFixed(2)}%
            </span>
            <span className="text-xs text-muted-foreground">Last 24h</span>
          </div>
        </div>
        <div className="flex gap-1">
          {["5M", "15M", "1H", "4H", "1D", "1W"].map((tf) => (
            <Button
              key={tf}
              variant={timeframe === tf ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe(tf)}
              className={
                timeframe === tf
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary"
              }
            >
              {tf}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"}
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              tickFormatter={(value) => value.toFixed(8)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value: number) => [`$${value.toFixed(8)}`, "Price"]}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"}
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PriceChart;
