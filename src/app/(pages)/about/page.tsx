"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Section, SectionBackground } from "@/components/ui/section"
import { motion } from "framer-motion"
import { Target, Eye, TrendingUp, Award, Users, Rocket, Heart, Brain } from "lucide-react"

const TIMELINE = [
  { role: "CEO & Founder", initials: "SK", color: "bg-primary" },
  { role: "CTO", initials: "AR", color: "bg-secondary" },
  { role: "Head of AI", initials: "PM", color: "bg-primary" },
  { role: "VP of Sales", initials: "RJ", color: "bg-secondary" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #123D32 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Our Mission is to Make Every Student
                <br />
                <span className="gradient-text">Placement Ready</span>
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                EDVOLS is an AI-powered career readiness platform that helps students prepare for placements through intelligent mock interviews, assessments, and personalized guidance.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <Section className="bg-white">
          <SectionBackground variant="grid" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
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

            <AnimatedSection delay={0.3}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-3">Why EDVOLS?</h2>
              </div>
              <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
                {[
                  { icon: Brain, title: "AI-Powered", desc: "Advanced AI algorithms evaluate every aspect of your interview performance in real-time." },
                  { icon: Award, title: "Industry Recognized", desc: "Trusted by 200+ institutions and 20,000+ students across India." },
                  { icon: Rocket, title: "Proven Results", desc: "Students using EDVOLS see 50% improvement in placement readiness within 3 months." },
                  { icon: Users, title: "Comprehensive Platform", desc: "From mock interviews to resume building — everything in one place." },
                  { icon: TrendingUp, title: "Continuous Learning", desc: "AI Memory Engine tracks progress and adapts to your improvement over time." },
                  { icon: Heart, title: "Student First", desc: "Every feature is designed with the student's success as the top priority." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-white rounded-2xl p-6 card-shadow border border-border h-full">
                      <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center mb-3">
                        <item.icon size={24} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
        </AnimatedSection>
        </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
