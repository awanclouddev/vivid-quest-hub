import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "01", last6Days: 2000, lastWeek: 2200 },
  { day: "02", last6Days: 2100, lastWeek: 2000 },
  { day: "03", last6Days: 2300, lastWeek: 2150 },
  { day: "04", last6Days: 2250, lastWeek: 2300 },
  { day: "05", last6Days: 2400, lastWeek: 2100 },
  { day: "06", last6Days: 2650, lastWeek: 2400 },
];

export const OrderTrendChart = () => {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis hide />
          <Legend 
            wrapperStyle={{ fontSize: "12px" }}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="last6Days"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", strokeWidth: 0, r: 4 }}
            name="Last 6 days"
          />
          <Line
            type="monotone"
            dataKey="lastWeek"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--muted-foreground))", strokeWidth: 0, r: 3 }}
            name="Last Week"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};