
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ title, value, trend, icon, className }: StatCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          {icon && <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">{icon}</div>}
        </div>
        
        <div className="mt-4">
          <div className="text-2xl font-bold">{value}</div>
          
          {trend !== undefined && (
            <div className="mt-1 flex items-center text-xs">
              {trend > 0 ? (
                <>
                  <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">{`+${trend}%`}</span>
                </>
              ) : trend < 0 ? (
                <>
                  <TrendingDown className="mr-1 h-3 w-3 text-rose-500" />
                  <span className="text-rose-500">{`${trend}%`}</span>
                </>
              ) : (
                <span className="text-muted-foreground">0%</span>
              )}
              <span className="ml-1 text-muted-foreground">vs período anterior</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
