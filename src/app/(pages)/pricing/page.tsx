"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Building2, GraduationCap, ArrowRight, ChevronRight } from "lucide-react"

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #123D32 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-light-green rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-medium text-primary">Choose Your Path</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Who are you?
              </h1>
              <p className="text-lg text-muted max-w-xl mx-auto mb-12">
                Select the option that best describes you. We have tailored solutions for both institutions and individual learners.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 card-shadow border-2 border-border hover:border-secondary/40 transition-all cursor-pointer group"
                  onClick={() => window.location.href = "/enterprise"}
                >
                  <div className="w-20 h-20 bg-light-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Building2 size={40} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">Institution</h2>
                  <p className="text-muted text-sm mb-6">
                    For Colleges, Universities, Training Institutes, and Placement Cells
                  </p>
                  <div className="space-y-2 mb-8">
                    {["Institution-wide dashboards", "Faculty & placement officer tools", "Bulk student management", "Department analytics"].map((f) => (
                      <div key={f} className="flex items-center justify-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" size="lg" className="w-full group">
                    Explore Enterprise <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 card-shadow border-2 border-border hover:border-secondary/40 transition-all cursor-pointer group"
                  onClick={() => window.location.href = "/individual"}
                >
                  <div className="w-20 h-20 bg-light-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <GraduationCap size={40} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">Student</h2>
                  <p className="text-muted text-sm mb-6">
                    Individual Learners looking for instant purchase and self-service
                  </p>
                  <div className="space-y-2 mb-8">
                    {["Instant purchase & access", "Flexible duration options", "Basic to Advanced tiers", "Self-service subscription"].map((f) => (
                      <div key={f} className="flex items-center justify-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="secondary" size="lg" className="w-full group">
                    View Plans <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
