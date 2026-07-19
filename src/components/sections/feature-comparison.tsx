"use client"

import { Check, Lock, Minus } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Badge } from "@/components/ui/badge"
import { FEATURES_LIST, FEATURES_LOCKED, PLANS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function FeatureComparison() {
  const plans = ["1-month", "3-month", "6-month", "1-year"] as const

  return (
    <Section id="features" className="bg-white">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Feature Unlock Comparison"
          subtitle="Compare features across plans and choose what works best for your preparation journey"
        />

        <AnimatedSection>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left pb-6 pr-8">
                    <span className="text-sm font-semibold text-muted">Features</span>
                  </th>
                  {PLANS.map((plan) => (
                    <th key={plan.id} className="pb-6 px-4 text-center min-w-[140px]">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-bold text-primary">{plan.name}</span>
                        <span className="text-2xl font-bold text-primary">{plan.priceLabel}</span>
                        {plan.popular && <Badge variant="popular">Most Popular</Badge>}
                        {plan.enterprise && <Badge variant="enterprise">Enterprise</Badge>}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES_LIST.map((feature, i) => (
                  <tr key={feature} className={cn(i % 2 === 0 && "bg-light-green/30 rounded-2xl")}>
                    <td className="py-4 pr-8">
                      <span className="text-sm font-medium text-text">{feature}</span>
                    </td>
                    {plans.map((planId) => {
                      const plan = FEATURES_LOCKED[planId as keyof typeof FEATURES_LOCKED]
                      const isAvailable = plan[feature as keyof typeof plan]
                      return (
                        <td key={planId} className="py-4 px-4 text-center">
                          {isAvailable ? (
                            <div className="flex items-center justify-center">
                              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                                <Check size={16} className="text-secondary" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <Lock size={14} className="text-gray-300" />
                              </div>
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  )
}
