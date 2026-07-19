"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, BarChart3, Code2, MessageSquare, FileText, X, Check } from "lucide-react"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { MODULES } from "@/lib/constants"

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={28} />,
  BarChart3: <BarChart3 size={28} />,
  Code2: <Code2 size={28} />,
  MessageSquare: <MessageSquare size={28} />,
  FileText: <FileText size={28} />,
}

export function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState<typeof MODULES[0] | null>(null)

  return (
    <Section id="modules">
      <SectionBackground variant="gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Platform Modules"
          subtitle="Comprehensive AI-powered tools designed to make you placement ready"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((mod) => (
            <StaggerItem key={mod.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 card-shadow border border-border h-full group cursor-pointer"
                onClick={() => setSelectedModule(mod)}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: mod.color + "12" }}
                >
                  <div style={{ color: mod.color }}>
                    {iconMap[mod.icon]}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{mod.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {mod.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mod.features.slice(0, 2).map((f) => (
                    <span key={f} className="text-xs bg-light-green text-primary px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                  <span className="text-xs text-secondary font-medium">+{mod.features.length - 2} more</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-lg w-full card-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: selectedModule.color + "12" }}
                  >
                    <div style={{ color: selectedModule.color }}>
                      {iconMap[selectedModule.icon]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{selectedModule.title}</h3>
                    <p className="text-sm text-muted">Module Overview</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="p-2 hover:bg-light-green rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-muted mb-6">{selectedModule.description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Key Features</h4>
                {selectedModule.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-secondary flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Button variant="primary" className="w-full mt-6" onClick={() => { setSelectedModule(null); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }) }}>
                Explore Pricing
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
