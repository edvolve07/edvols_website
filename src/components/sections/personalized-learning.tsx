"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { ArrowDown, TrendingUp, FileText, MessageSquare, BarChart3, Target, Brain, Code, Sparkles, Award } from "lucide-react"

const steps = [
  { num: 1, label: "Interview 1", desc: "Your first AI mock interview" },
  { num: 2, label: "Interview 2", desc: "Adapted to your weak areas" },
  { num: 3, label: "Interview 3", desc: "Improved and more confident" },
  { num: 4, label: "Placement Ready", desc: "Crack your dream placement", final: true },
]

const insights = [
  { icon: Target, label: "Previous Weak Topics", desc: "Focuses on your weakest subjects first", color: "#123D32" },
  { icon: FileText, label: "Resume Improvements", desc: "Tracks every resume update and ATS score", color: "#2F7D5B" },
  { icon: TrendingUp, label: "Communication Growth", desc: "Measures clarity, confidence, and fluency", color: "#123D32" },
  { icon: MessageSquare, label: "Confidence Trend", desc: "See your confidence rise with each session", color: "#2F7D5B" },
  { icon: Code, label: "Coding Progress", desc: "Tracks problem-solving speed and accuracy", color: "#123D32" },
  { icon: Brain, label: "Placement Readiness Score", desc: "Your personal readiness meter always updated", color: "#2F7D5B" },
]

const stagger = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export function PersonalizedLearning() {
  return (
    <Section>
      <SectionBackground variant="gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            title="Personalized AI Learning"
            subtitle="Every interview you take helps EDVOLS understand you better — so the next one is always smarter"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 mb-16">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col md:flex-row items-center">
                <motion.div
                  {...stagger}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex items-center justify-center w-36 h-36 rounded-2xl border-2 transition-all ${
                    step.final
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                      : "bg-white border-border card-shadow"
                  }`}
                >
                  <div className="text-center">
                    <div className={`text-lg font-bold ${step.final ? "text-white" : "text-primary"}`}>
                      {step.label}
                    </div>
                    <div className={`text-[10px] mt-1 max-w-[100px] mx-auto leading-tight ${step.final ? "text-white/70" : "text-muted"}`}>
                      {step.desc}
                    </div>
                    {step.final && (
                      <Sparkles size={16} className="mx-auto mt-1 text-yellow-300" />
                    )}
                  </div>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    {...stagger}
                    transition={{ duration: 0.3, delay: i * 0.15 + 0.1 }}
                    className="flex items-center justify-center py-2 md:px-2"
                  >
                    <ArrowDown size={20} className="text-muted md:hidden" />
                    <ArrowDown size={20} className="text-muted hidden md:block -rotate-90" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-primary">What EDVOLS tracks for you</h3>
            <p className="text-muted text-sm mt-1 max-w-lg mx-auto">Every interview adds to your personal learning profile</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {insights.map((item, i) => (
              <motion.div
                key={item.label}
                {...stagger}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 card-shadow border border-border group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color + "12" }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h4 className="font-bold text-primary text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <motion.div
          {...stagger}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-primary text-white rounded-2xl px-8 py-4 shadow-lg shadow-primary/20">
            <Award size={24} />
            <div className="text-left">
              <div className="font-semibold">Your Personal AI Coach is Ready</div>
              <div className="text-sm text-white/60">100+ interviews analyzed · Getting smarter with every session</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
