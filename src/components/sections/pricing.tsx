"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap, Sparkles, ArrowRight } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  return (
    <Section id="pricing">
      <SectionBackground variant="gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Choose Your Path"
          subtitle="Tailored solutions for institutions and individual learners"
        />

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-8 card-shadow border-2 border-border hover:border-secondary/30 transition-all cursor-pointer group overflow-hidden"
              onClick={() => window.location.href = "/enterprise"}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-light-green rounded-bl-[100px] -z-0" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-light-green rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Building2 size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">For Institutions</h3>
                <p className="text-sm text-muted mb-2">Colleges, Universities, Training Institutes &amp; Placement Cells</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Bulk Upload", "Dashboards", "Analytics", "Reports"].map((t) => (
                    <span key={t} className="text-[10px] bg-light-green text-primary font-medium px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all">
                  Explore Enterprise <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-8 card-shadow border-2 border-secondary/30 hover:border-secondary transition-all cursor-pointer group overflow-hidden"
              onClick={() => window.location.href = "/individual"}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -z-0" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">For Students</h3>
                <p className="text-sm text-muted mb-2">Individual Learners &middot; Instant Self-Service Purchase</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Flexible Plans", "Instant Access", "Self-Service", "Certificates"].map((t) => (
                    <span key={t} className="text-[10px] bg-secondary/10 text-secondary font-medium px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <Button variant="secondary" className="group-hover:scale-105 transition-all">
                  View Plans <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  )
}
