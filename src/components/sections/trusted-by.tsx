"use client"

import { motion } from "framer-motion"

const TRUSTED_ENTITIES = [
  "Engineering Colleges",
  "Universities",
  "Training Institutes",
  "Placement Cells",
  "Coaching Institutes",
  "Engineering Colleges",
  "Universities",
  "Training Institutes",
  "Placement Cells",
  "Coaching Institutes",
]

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted mb-8"
        >
          TRUSTED BY EDUCATIONAL INSTITUTIONS NATIONWIDE
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-slide-scroll">
            {TRUSTED_ENTITIES.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-light-green rounded-xl flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary rounded" />
                </div>
                <span className="text-lg font-semibold text-primary whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
