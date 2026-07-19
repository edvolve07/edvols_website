"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"

const TIMELINE = [
  { year: "2020", event: "EDVOLS Founded", description: "Started with a vision to transform placement preparation using AI technology." },
  { year: "2021", event: "AI Mock Interview Launch", description: "Launched first AI-powered mock interview platform with real-time evaluation." },
  { year: "2022", event: "5,000+ Students", description: "Crossed 5,000 active students across 50+ institutions in India." },
  { year: "2023", event: "Full Platform Suite", description: "Expanded to complete placement readiness platform with all modules." },
  { year: "2024", event: "AI Memory Engine", description: "Introduced revolutionary AI Memory Engine for personalized learning." },
  { year: "2025", event: "20,000+ Students", description: "Serving 20,000+ students across 200+ institutions nationwide." },
]

export function AboutSection() {
  return (
    <Section id="about" className="bg-white">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About EDVOLS"
          subtitle="We are on a mission to make every student placement-ready through the power of AI"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="bg-light-green rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                To democratize placement preparation by providing every student with access to AI-powered tools that simulate real interview environments, identify skill gaps, and provide personalized learning paths.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-light-green rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted leading-relaxed">
                To become the world&apos;s most trusted AI-powered career readiness platform, empowering millions of students to achieve their dream careers through intelligent, personalized, and accessible technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  )
}
