"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Sparkles, GraduationCap, ChevronRight, Clock, Target, Award, Headphones, FileText, ArrowRight, Layers, Zap, Brain, BarChart3, BookOpen, Star } from "lucide-react"
import { INDIVIDUAL_DURATIONS, COMPARISON_FEATURES } from "@/lib/plans"

function FeatureCheck({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
      <Check size={13} className="text-secondary" />
    </div>
  ) : (
    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
      <X size={11} className="text-gray-300" />
    </div>
  )
}

export default function IndividualPage() {
  const [activeDuration, setActiveDuration] = useState(INDIVIDUAL_DURATIONS[2].id)
  const [showComparison, setShowComparison] = useState(false)
  const currentDuration = INDIVIDUAL_DURATIONS.find((d) => d.id === activeDuration) || INDIVIDUAL_DURATIONS[2]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #123D32 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-light-green rounded-full px-4 py-1.5 mb-6">
                <GraduationCap size={16} className="text-secondary" />
                <span className="text-sm font-medium text-primary">For Individual Students</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Choose Your Preparation
                <br />
                <span className="gradient-text">Journey</span>
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                Select a duration and tier that matches your goals. The longer you stay, the more you unlock.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <Section id="individual-pricing">
          <SectionBackground variant="gradient" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-2 mb-12 bg-white rounded-2xl p-1.5 card-shadow border border-border max-w-xl mx-auto">
                {INDIVIDUAL_DURATIONS.map((dur) => (
                  <button
                    key={dur.id}
                    onClick={() => setActiveDuration(dur.id)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeDuration === dur.id ? "bg-primary text-white shadow-sm" : "text-muted hover:text-primary"
                    }`}
                  >
                    {dur.label}
                    {dur.isSingleTier && <span className="ml-1 text-[10px] opacity-70">✦</span>}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                key={activeDuration}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`grid gap-6 ${currentDuration.tiers.length === 1 ? "md:grid-cols-1 max-w-lg mx-auto" : currentDuration.tiers.length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" : "md:grid-cols-3"}`}
              >
                {currentDuration.tiers.map((tier, index) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`relative bg-white rounded-3xl border-2 card-shadow transition-all duration-300 flex flex-col ${
                      tier.popular ? "border-secondary shadow-xl shadow-secondary/10 scale-[1.03] z-10" : "border-border hover:border-secondary/30"
                    }`}
                  >
                    {tier.popular && !currentDuration.isSingleTier && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge variant="popular"><Sparkles size={12} className="mr-1" /> Most Popular</Badge>
                      </div>
                    )}

                    {currentDuration.isSingleTier && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge variant="popular"><Zap size={12} className="mr-1" /> Best Value</Badge>
                      </div>
                    )}

                    <div className="p-6 flex-1">
                      {currentDuration.isSingleTier && (
                        <div className="text-center mb-3">
                          <div className="inline-flex items-center gap-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                            <Star size={12} /> Premium Plan
                          </div>
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary">{tier.name}</h3>
                        {currentDuration.isSingleTier && (
                          <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Award size={18} className="text-secondary" />
                          </div>
                        )}
                      </div>

                      {tier.tagline && (
                        <p className="text-xs text-secondary font-medium mb-1">{tier.tagline}</p>
                      )}
                      <p className="text-sm text-muted mb-4">{tier.description}</p>

                      <div className="mb-5">
                        <span className="text-4xl font-bold text-primary">{tier.priceLabel}</span>
                        <span className="text-sm text-muted ml-1">{tier.period}</span>
                        {currentDuration.isSingleTier && (
                          <div className="mt-1">
                            <span className="text-xs text-secondary font-medium">
                              {activeDuration === "6-month" ? "₹999/mo" : "₹833/mo"}
                            </span>
                            <span className="text-xs text-muted ml-1">effective</span>
                          </div>
                        )}
                      </div>

                      <Button
                        variant={tier.popular ? "secondary" : "primary"}
                        className="w-full"
                        onClick={() => window.location.href = `/checkout?plan=${tier.id}&duration=${currentDuration.id}`}
                      >
                        Buy Now <ChevronRight size={18} />
                      </Button>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted flex items-center gap-1.5"><Clock size={14} /> Duration</span>
                          <span className="font-medium text-primary">{currentDuration.label}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted flex items-center gap-1.5"><Target size={14} /> Interview Levels</span>
                          <span className="font-medium text-primary">{tier.interviewLevels === 1 ? "Level 1" : tier.interviewLevels === 2 ? "Levels 1-2" : tier.interviewLevels === 3 ? "Levels 1-3" : "All Levels"}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted flex items-center gap-1.5"><Headphones size={14} /> Support</span>
                          <span className="font-medium text-primary text-xs text-right">{tier.support}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted flex items-center gap-1.5"><FileText size={14} /> Reports</span>
                          <span className="font-medium text-primary text-xs text-right">{tier.reports}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted flex items-center gap-1.5"><Award size={14} /> Certificate</span>
                          <span className="font-medium text-primary">{tier.certificate ? "✓ Included" : "—"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border p-6">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">What&apos;s Included</h4>
                      <div className="space-y-2.5">
                        {tier.features.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <Check size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-text leading-tight">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                >
                  <BarChart3 size={16} />
                  {showComparison ? "Hide Feature Comparison" : "Compare All Features Side by Side"}
                  <ChevronRight size={14} className={`transition-transform ${showComparison ? "rotate-90" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {showComparison && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-8"
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr>
                            <th className="text-left pb-4 pr-6 sticky left-0 bg-background z-10"><span className="text-xs font-semibold text-muted uppercase">Feature</span></th>
                            {(["1-month", "3-month", "6-month", "1-year"] as const).map((durId) => {
                              const dur = INDIVIDUAL_DURATIONS.find((d) => d.id === durId)
                              return dur?.tiers.map((t) => (
                                <th key={t.id} className="pb-4 px-3 text-center min-w-[100px]">
                                  <div className="text-xs font-semibold text-primary">{dur.label}</div>
                                  <div className="text-[10px] text-muted">{t.name}</div>
                                </th>
                              ))
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {COMPARISON_FEATURES.map((group) => (
                            <>
                              <tr key={group.category}>
                                <td colSpan={9} className="pt-5 pb-2">
                                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{group.category}</span>
                                </td>
                              </tr>
                              {group.items.map((item, i) => (
                                <tr key={item.name} className={i % 2 === 0 ? "bg-light-green/20" : ""}>
                                  <td className="py-2.5 pr-6 text-sm text-text sticky left-0 bg-inherit z-10">{item.name}</td>
                                  {(["1-month", "3-month", "6-month", "1-year"] as const).map((durId) => {
                                    const dur = INDIVIDUAL_DURATIONS.find((d) => d.id === durId)
                                    return dur?.tiers.map((t) => (
                                      <td key={t.id} className="py-2.5 px-3 text-center">
                                        <FeatureCheck enabled={item.tiers[t.id] || false} />
                                      </td>
                                    ))
                                  })}
                                </tr>
                              ))}
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>
          </div>
        </Section>

        <Section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Understanding Your Interview Levels</h2>
              <p className="text-muted max-w-xl mx-auto">Each level builds on the previous one. Your subscription determines how far you can go.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { level: "Level 1", title: "Interview Foundation", items: ["Resume Analysis", "HR Interview", "Technical Questions", "Confidence Score", "AI Feedback"], color: "bg-primary" },
                { level: "Level 2", title: "Professional Growth", items: ["Cross Questioning", "Adaptive Questions", "Coding Round", "Communication Analysis"], color: "bg-secondary" },
                { level: "Level 3", title: "Placement Ready", items: ["AI Coach", "Company Specific", "Readiness Score", "Advanced Reports"], color: "bg-primary" },
                { level: "Level 4", title: "AI Mentorship", items: ["Interview History", "Weakness Tracking", "Career Guidance", "Certificates"], color: "bg-secondary" },
              ].map((lvl) => (
                <div key={lvl.level} className="bg-white rounded-2xl p-5 card-shadow border border-border">
                  <div className={`${lvl.color} text-white text-[10px] font-bold px-2 py-1 rounded-md inline-block mb-3`}>{lvl.level}</div>
                  <h3 className="font-bold text-primary text-sm mb-2">{lvl.title}</h3>
                  <div className="space-y-1.5">
                    {lvl.items.map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <Check size={10} className="text-secondary flex-shrink-0" />
                        <span className="text-xs text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <div className="bg-gradient-to-r from-primary to-primary-dark py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Placement Journey Today</h2>
              <p className="text-white/70 mb-8">Join 20,000+ students already preparing with EDVOLS.</p>
              <Button variant="secondary" size="xl" onClick={() => setActiveDuration("6-month")}>
                <Zap size={20} className="mr-2" /> Get the 6 Month Plan — Best Value
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
