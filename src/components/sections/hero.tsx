"use client"

import { motion } from "framer-motion"
import { Sparkles, Play, ArrowRight, Award, Brain, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const floatingBadges = [
  { label: "Top Performer", top: "10%", left: "5%", delay: 0 },
  { label: "Aptitude King", top: "15%", right: "8%", delay: 0.5 },
  { label: "Placement Ready", top: "60%", left: "2%", delay: 1 },
  { label: "Interview Star", top: "55%", right: "5%", delay: 1.5 },
]

const scores = [
  { label: "Interview Score", value: 87, color: "#2F7D5B" },
  { label: "Coding Score", value: 92, color: "#123D32" },
  { label: "Resume Score", value: 78, color: "#2F7D5B" },
  { label: "Placement Readiness", value: 84, color: "#123D32" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #123D32 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />

      {mounted && (
        <>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[6%] w-24 h-24 bg-secondary/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[8%] w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-light-green rounded-full px-4 py-1.5 mb-6 border border-primary/10"
            >
              <Sparkles size={16} className="text-secondary" />
              <span className="text-sm font-medium text-primary">AI-Powered Career Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text leading-[1.1]"
            >
              Crack Your Dream{" "}
              <span className="gradient-text">Placement</span>
              <br />
              <span className="text-primary">with AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-lg"
            >
              Practice with AI mock interviews that feel real. Get placement ready before campus recruitment begins.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<Sparkles size={18} />}
                onClick={() => window.location.href = "/individual"}
              >
                Start Practicing
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "/enterprise"}
              >
                For Institutions <ArrowRight size={16} className="ml-1" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={<Play size={18} />}
              >
                See How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              {["200+ Institutions", "20K+ Students", "50% Faster Prep"].map((stat) => (
                <div key={stat} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-secondary" />
                  <span className="text-xs text-muted">{stat}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass rounded-3xl p-6 card-shadow border border-white/20">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[11px] font-medium text-muted">Live AI Interview Session</span>
                </div>

                <div className="bg-light-green rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary">AI Interviewer</span>
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] text-green-600 font-medium">Live</span>
                    </motion.div>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-muted leading-relaxed italic">
                      &quot;Tell me about a time you solved a complex problem under pressure. I&apos;m listening for your approach, communication, and result.&quot;
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="h-full bg-secondary rounded-full"
                      />
                    </div>
                    <span className="text-[10px] text-primary font-medium">Recording...</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {scores.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-white rounded-xl p-3 card-shadow"
                    >
                      <span className="text-[10px] text-muted">{s.label}</span>
                      <div className="text-lg font-bold text-primary mt-0.5">{s.value}%</div>
                      <div className="w-full h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.value}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: s.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                className="absolute bg-white rounded-xl px-3 py-2 card-shadow border border-border flex items-center gap-2"
                style={badge.left ? { left: badge.left, top: badge.top } : { right: badge.right, top: badge.top }}
              >
                <Award size={14} className="text-secondary" />
                <span className="text-[10px] font-medium text-primary">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
