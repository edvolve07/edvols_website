"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        dark && "bg-primary text-white",
        className
      )}
    >
      {children}
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  center = true,
  light = false,
}: {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl mb-16", center && "mx-auto text-center")}
    >
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight", light ? "text-white" : "text-text")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg md:text-xl leading-relaxed max-w-2xl", center && "mx-auto", light ? "text-white/70" : "text-muted")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export function SectionBackground({ variant = "grid" }: { variant?: "grid" | "dots" | "gradient" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === "gradient" && (
        <div className="absolute inset-0 hero-gradient" />
      )}
      {variant === "grid" && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #123D32 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      )}
    </div>
  )
}
