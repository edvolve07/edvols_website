"use client"

import { motion } from "framer-motion"
import { GraduationCap, Monitor, Building2, UserCheck, Check } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { BENEFITS } from "@/lib/constants"

const benefitItems = [
  { title: "Students", icon: GraduationCap, items: BENEFITS.students, color: "#2F7D5B" },
  { title: "Faculty", icon: Monitor, items: BENEFITS.faculty, color: "#123D32" },
  { title: "Institutions", icon: Building2, items: BENEFITS.institutions, color: "#2F7D5B" },
  { title: "Placement Officers", icon: UserCheck, items: BENEFITS.placementOfficers, color: "#123D32" },
]

export function BenefitsSection() {
  return (
    <Section className="bg-white">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Benefits for Everyone"
          subtitle="Designed to serve students, faculty, institutions, and placement officers alike"
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {benefitItems.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 card-shadow border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: benefit.color + "12" }}
                  >
                    <benefit.icon size={24} style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                </div>
                <div className="space-y-3">
                  {benefit.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  )
}
