
import { 
  AreaChart as RechartsAreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AreaChartProps {
  title: string;
  description?: string;
  data: Array<any>;
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  height?: number;
  valueFormatter?: (value: number) => string;
  loading?: boolean;
}

export function AreaChart({
  title,
  description,
  data,
  dataKey,
  xAxisKey = "name",
  color = "#2563EB",
  height = 300,
  valueFormatter = (value: number) => `${value}`,
  loading = false,
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
          <ResponsiveContainer width="100%" height={height}>
            <RechartsAreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                fillOpacity={1}
                fill={`url(#color-${dataKey})`}
              />
            </RechartsAreaChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
