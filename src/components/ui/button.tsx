"use client"

import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"
  size?: "sm" | "md" | "lg" | "xl"
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, loading, icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",

          variant === "primary" && "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-sm hover:shadow-md",
          variant === "secondary" && "bg-secondary text-white hover:bg-primary focus-visible:ring-secondary shadow-sm hover:shadow-md",
          variant === "outline" && "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
          variant === "ghost" && "text-primary hover:bg-light-green focus-visible:ring-primary",
          variant === "danger" && "bg-danger text-white hover:bg-red-600 focus-visible:ring-red-500 shadow-sm",

          size === "sm" && "h-9 px-3 text-sm rounded-lg",
          size === "md" && "h-10 px-4 text-sm rounded-xl",
          size === "lg" && "h-12 px-6 text-base rounded-xl",
          size === "xl" && "h-14 px-8 text-lg rounded-xl",

          className
        )}
        {...props}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
