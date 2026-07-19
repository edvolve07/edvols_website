"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, CheckCircle2, Circle } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { INTERVIEW_LEVELS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function InterviewJourney() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1)

  return (
    <Section className="bg-white">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="AI Mock Interview Journey"
          subtitle="Progress through four levels of interview mastery, from foundation to AI-powered mentorship"
        />

        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {INTERVIEW_LEVELS.map((level, index) => {
              const isExpanded = expandedLevel === level.level

              return (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-4 last:mb-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all cursor-pointer",
                          isExpanded
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "bg-light-green text-primary"
                        )}
                        onClick={() => setExpandedLevel(isExpanded ? null : level.level)}
                      >
                        {level.level}
                      </motion.div>
                      {index < INTERVIEW_LEVELS.length - 1 && (
                        <div className="w-0.5 h-8 bg-border" />
                      )}
                    </div>

                    <div className="flex-1 pb-4">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setExpandedLevel(isExpanded ? null : level.level)}
                      >
                        <div>
                          <h3 className="text-lg font-bold text-primary">{level.title}</h3>
                          <p className="text-sm text-muted">{level.subtitle}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={20} className="text-muted" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {level.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                  <CheckCircle2 size={14} className="text-secondary flex-shrink-0" />
                                  <span className="text-sm text-text">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </Section>
  )
}
