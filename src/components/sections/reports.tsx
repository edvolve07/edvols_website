"use client"

import { motion } from "framer-motion"
import { User, Building2, Code2, MessageSquare, Briefcase, Target, FileText, BarChart3 } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { REPORTS } from "@/lib/constants"

const iconMap: Record<string, React.ReactNode> = {
  User: <User size={24} />,
  Building2: <Building2 size={24} />,
  Code2: <Code2 size={24} />,
  MessageSquare: <MessageSquare size={24} />,
  Briefcase: <Briefcase size={24} />,
  Target: <Target size={24} />,
  FileText: <FileText size={24} />,
  BarChart3: <BarChart3 size={24} />,
}

export function ReportsSection() {
  return (
    <Section>
      <SectionBackground variant="gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Reports & Analytics"
          subtitle="Comprehensive reports with actionable insights for students, faculty, and institutions"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REPORTS.map((report) => (
            <StaggerItem key={report.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-5 card-shadow border border-border group"
              >
                <div className="w-10 h-10 bg-light-green rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-primary">{iconMap[report.icon]}</span>
                </div>
                <h3 className="font-semibold text-primary text-sm">{report.title}</h3>
                <p className="text-xs text-muted mt-1">{report.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  )
}
