import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food Taste", value: 85, color: "hsl(var(--warning))" },
  { name: "Hygiene", value: 85, color: "hsl(var(--primary))" },
  { name: "Packaging", value: 92, color: "hsl(var(--info))" },
];

export const RatingChart = () => {
  return (
    <div className="h-48 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {data.map((item, index) => (
            <Pie
              key={item.name}
              data={[{ value: item.value }, { value: 100 - item.value }]}
              cx="50%"
              cy="50%"
              innerRadius={30 + index * 20}
              outerRadius={50 + index * 20}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              <Cell fill={item.color} />
              <Cell fill="hsl(var(--muted))" />
            </Pie>
          ))}
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-warning">85%</div>
          <div className="text-xs text-muted-foreground">Food Taste</div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-0 left-0 space-y-1">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <div className="text-xs">
              <div className="font-medium">{item.value}%</div>
              <div className="text-muted-foreground">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};