
import { 
  AreaChart as RechartsAreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AreaChartProps {
  title: string;
  description?: string;
  data: Array<any>;
  dataKey?: string;
  categories?: string[];
  index?: string;
  xAxisKey?: string;
  color?: string;
  colors?: string[];
  height?: number;
  valueFormatter?: (value: number, category?: string) => string;
  loading?: boolean;
  className?: string;
}

export function AreaChart({
  title,
  description,
  data,
  dataKey,
  categories = [],
  index = "name",
  xAxisKey = "name",
  color = "#2563EB",
  colors = ["#2563EB", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
  height = 300,
  valueFormatter = (value: number) => `${value}`,
  loading = false,
  className,
}: AreaChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-[300px]">
            <div className="h-32 w-32 rounded-full border-4 border-muted border-t-primary animate-spin" />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={height} className={className}>
            <RechartsAreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey={xAxisKey}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
                tickFormatter={(value) => valueFormatter(value)}
              />
              <Tooltip
                formatter={(value, name) => [valueFormatter(Number(value)), name]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              />
              {dataKey ? (
                <Area
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  fillOpacity={1}
                  fill={`url(#color-${dataKey})`}
                />
              ) : (
                categories.map((category, index) => (
                  <Area
                    key={`area-${category}`}
                    type="monotone"
                    dataKey={category}
                    stroke={colors[index % colors.length]}
                    fill={colors[index % colors.length]}
                    fillOpacity={0.2}
                  />
                ))
              )}
              <Legend />
            </RechartsAreaChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
