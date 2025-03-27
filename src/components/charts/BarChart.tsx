
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BarChartProps {
  title: string;
  description?: string;
  data: Array<any>;
  dataKey: string;
  categories: string[];
  index: string;
  colors?: string[];
  height?: number;
  valueFormatter?: (value: number) => string;
  loading?: boolean;
}

export function BarChart({
  title,
  description,
  data,
  dataKey,
  categories,
  index,
  colors = ["#2563EB", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
  height = 300,
  valueFormatter = (value: number) => `${value}`,
  loading = false,
}: BarChartProps) {
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
          <ResponsiveContainer width="100%" height={height}>
            <RechartsBarChart
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
                dataKey={index}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
                tickFormatter={valueFormatter}
              />
              <Tooltip
                formatter={valueFormatter}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              />
              {categories.map((category, i) => (
                <Bar
                  key={`${category}-${i}`}
                  dataKey={category}
                  fill={colors[i % colors.length]}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </RechartsBarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
