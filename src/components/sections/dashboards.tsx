"use client"

import { motion } from "framer-motion"
import { Monitor, Building2, GraduationCap, UserCheck } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { DASHBOARDS } from "@/lib/constants"

const iconMap: Record<string, React.ReactNode> = {
  Student: <GraduationCap size={28} />,
  Institution: <Building2 size={28} />,
  "Placement Officer": <UserCheck size={28} />,
  Faculty: <Monitor size={28} />,
}

export function DashboardsSection() {
  return (
    <Section className="bg-white">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Dashboards"
          subtitle="Role-specific dashboards with actionable insights for every stakeholder"
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {DASHBOARDS.map((dash) => (
            <StaggerItem key={dash.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 card-shadow border border-border group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-light-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[dash.role]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{dash.title}</h3>
                    <p className="text-xs text-muted">{dash.role} Role</p>
                  </div>
                </div>
                <p className="text-sm text-muted">{dash.description}</p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[65, 82, 73].map((val, i) => (
                    <div key={i} className="bg-light-green rounded-lg p-3 text-center">
                      <div className="text-xs text-muted">{["Progress", "Score", "Ready"][i]}</div>
                      <div className="text-lg font-bold text-primary">{val}%</div>
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
