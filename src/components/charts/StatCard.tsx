
import { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
}

export function StatCard({ title, value, trend, icon, className, loading = false }: StatCardProps) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="stat-card-title">{title}</p>
          {loading ? (
            <div className="h-8 w-20 bg-muted animate-pulse rounded" />
          ) : (
            <p className="stat-card-value">{value}</p>
          )}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      
      {trend !== undefined && !loading && (
        <div className="mt-2">
          {trend > 0 ? (
            <span className="trend-up">
              <ArrowUp className="mr-1 h-4 w-4" />
              {Math.abs(trend)}%
            </span>
          ) : trend < 0 ? (
            <span className="trend-down">
              <ArrowDown className="mr-1 h-4 w-4" />
              {Math.abs(trend)}%
            </span>
          ) : (
            <span className="text-muted-foreground text-sm">Sem alteração</span>
          )}
        </div>
      )}
    </div>
  );
}
