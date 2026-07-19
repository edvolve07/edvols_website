import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "popular" | "enterprise" | "success" | "warning"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-light-green text-primary",
        variant === "popular" && "bg-secondary text-white",
        variant === "enterprise" && "bg-primary text-white",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800",
        className
      )}
    >
      {children}
    </span>
  )
}
