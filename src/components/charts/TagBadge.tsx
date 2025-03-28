
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TagVariant = "default" | "success" | "warning" | "danger" | "info";

interface TagBadgeProps {
  text: string;
  variant?: TagVariant;
  className?: string;
}

export function TagBadge({ text, variant = "default", className }: TagBadgeProps) {
  return (
    <Badge 
      className={cn(
        "px-2 py-1 text-xs font-medium",
        variant === "success" && "bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-300 hover:bg-green-500/30",
        variant === "warning" && "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-300 hover:bg-yellow-500/30",
        variant === "danger" && "bg-red-500/20 text-red-700 dark:bg-red-500/30 dark:text-red-300 hover:bg-red-500/30",
        variant === "info" && "bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-300 hover:bg-blue-500/30",
        className
      )}
    >
      {text}
    </Badge>
  );
}
