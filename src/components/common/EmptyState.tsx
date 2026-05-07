import { PackageOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export function EmptyState({
  title = "데이터가 없습니다",
  description = "표시할 항목이 없습니다.",
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 py-16 text-center", className)}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        {icon ?? <PackageOpen className="h-8 w-8 text-muted-foreground" />}
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  )
}
