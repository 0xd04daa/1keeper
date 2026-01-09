import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface MiniChartProps {
  data: number[];
  isPositive: boolean;
}

const MiniChart = ({ data, isPositive }: MiniChartProps) => {
  const chartData = data.map((value, index) => ({
    index,
    value,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id={`gradient-${isPositive ? 'green' : 'red'}`} x1="0" y1="0" x2="0" y2="1">
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
        <Area
          type="monotone"
          dataKey="value"
          stroke={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"}
          fill={`url(#gradient-${isPositive ? 'green' : 'red'})`}
          strokeWidth={1.5}
          dot={false}
          animationDuration={0}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
