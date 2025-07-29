import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "01", lastWeek: 400, last6Days: 300 },
  { day: "02", lastWeek: 350, last6Days: 450 },
  { day: "03", lastWeek: 380, last6Days: 420 },
  { day: "04", lastWeek: 320, last6Days: 380 },
  { day: "05", lastWeek: 450, last6Days: 520 },
  { day: "06", lastWeek: 420, last6Days: 480 },
  { day: "07", lastWeek: 380, last6Days: 440 },
  { day: "08", lastWeek: 400, last6Days: 380 },
  { day: "09", lastWeek: 350, last6Days: 420 },
  { day: "10", lastWeek: 380, last6Days: 360 },
  { day: "11", lastWeek: 450, last6Days: 500 },
  { day: "12", lastWeek: 420, last6Days: 480 },
];

export const RevenueChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
          <Bar 
            dataKey="last6Days" 
            fill="hsl(var(--primary))" 
            name="Last 6 days"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
          <Bar 
            dataKey="lastWeek" 
            fill="hsl(var(--muted))" 
            name="Last Week"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};