import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Afternoon", value: 40, orders: 1890 },
  { name: "Evening", value: 32, orders: 1200 },
  { name: "Morning", value: 28, orders: 980 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--chart-2))", 
  "hsl(var(--chart-3))"
];

export const OrderTimeChart = () => {
  return (
    <div className="relative">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-xl font-bold">{data[0].orders}</div>
          <div className="text-sm text-muted-foreground">orders</div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-2 mt-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};