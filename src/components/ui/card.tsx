import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = false, glass = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-border bg-white card-shadow transition-all duration-300",
        hover && "hover:card-shadow-hover hover:-translate-y-1 cursor-pointer",
        glass && "glass",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>
}
