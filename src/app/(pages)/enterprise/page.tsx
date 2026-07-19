"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Check, Building2, GraduationCap, Monitor, Users, X, ChevronRight, ArrowRight, LayoutDashboard, BarChart3, FileText, Headphones, Layers, Target, Sparkles, Mail, Phone, MessageSquare, BookOpen } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ENTERPRISE_PLANS } from "@/lib/plans"

const audienceItems = [
  { label: "Engineering Colleges", icon: Building2 },
  { label: "Universities", icon: GraduationCap },
  { label: "Training Institutes", icon: Monitor },
  { label: "Placement Cells", icon: Users },
]

function EnterpriseInquiryForm({ isOpen, onClose, planName }: { isOpen: boolean; onClose: () => void; planName?: string }) {
  const [form, setForm] = useState({
    institutionName: "",
    contactPerson: "",
    email: "",
    phone: "",
    studentCount: "",
    city: "",
    state: "",
    message: planName ? `Interested in: ${planName}` : "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-lg w-full card-shadow my-8"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-muted text-sm mb-6">
                  Our enterprise team will reach out within 24 hours to schedule a personalized consultation.
                </p>
                <Button variant="primary" onClick={onClose}>Close</Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-light-green rounded-xl flex items-center justify-center">
                      <Building2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">Enterprise Inquiry</h3>
                      <p className="text-xs text-muted">Our team will contact you shortly</p>
                    </div>
                  </div>
                  <button onClick={onClose} className="p-1 hover:bg-light-green rounded-lg transition-colors"><X size={20} /></button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Institution Name" placeholder="e.g. ABC Engineering College" value={form.institutionName} onChange={(e) => setForm({ ...form, institutionName: e.target.value })} required />
                    <Input label="Contact Person" placeholder="Full name" value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Email" type="email" placeholder="principal@institution.edu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    <Input label="Phone" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Input label="No. of Students" type="number" placeholder="e.g. 5000" value={form.studentCount} onChange={(e) => setForm({ ...form, studentCount: e.target.value })} required />
                    <Input label="City" placeholder="e.g. Mumbai" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
                    <Input label="State" placeholder="e.g. Maharashtra" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Message (optional)</label>
                    <textarea className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none resize-none" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <Button variant="primary" className="w-full" type="submit">Submit Inquiry <ChevronRight size={18} /></Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function EnterprisePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const openInquiry = (planName?: string) => {
    setSelectedPlan(planName || "")
    setInquiryOpen(true)
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #123D32 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-light-green rounded-full px-4 py-1.5 mb-6">
                  <Building2 size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-primary">For Institutions</span>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
                >
                  Enterprise Solutions for
                  <br />
                  <span className="gradient-text">Educational Institutions</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-muted mb-8 max-w-2xl mx-auto"
                >
                  Empower your students with AI-powered placement preparation. Comprehensive dashboards, analytics, and tools for institutions, faculty, and placement officers — all under one platform.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Button variant="primary" size="lg" onClick={() => openInquiry()}><Sparkles size={18} className="mr-2" /> Request Demo</Button>
                  <Button variant="outline" size="lg" onClick={() => openInquiry()}><MessageSquare size={18} className="mr-2" /> Talk to Sales</Button>
                  <Button variant="ghost" size="lg" onClick={() => openInquiry()}><BookOpen size={18} className="mr-2" /> Book Consultation</Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
              >
                {audienceItems.map((item) => (
                  <div key={item.label} className="glass rounded-xl p-5 text-center border border-border/50">
                    <item.icon size={24} className="mx-auto mb-2 text-secondary" />
                    <span className="text-xs font-medium text-primary">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <Section id="enterprise-plans">
          <SectionBackground variant="grid" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Subscription Models"
              subtitle="Choose the right plan for your institution. No payment required — talk to our team."
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENTERPRISE_PLANS.map((plan) => (
                <StaggerItem key={plan.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`relative bg-white rounded-3xl border-2 card-shadow transition-all duration-300 flex flex-col ${
                      plan.popular ? "border-secondary shadow-xl shadow-secondary/10 scale-[1.02]" : plan.enterprise ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]" : "border-border hover:border-secondary/30"
                    }`}
                  >
                    {(plan.popular || plan.enterprise) && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        {plan.popular && <Badge variant="popular"><Sparkles size={12} className="mr-1" /> Most Popular</Badge>}
                        {plan.enterprise && <Badge variant="enterprise">Enterprise</Badge>}
                      </div>
                    )}

                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                      <p className="text-sm text-muted mt-1 mb-4">{plan.description}</p>

                      <div className="flex items-center gap-2 mb-6">
                        <div className="inline-flex items-center gap-1.5 bg-light-green rounded-lg px-3 py-1.5">
                          <Layers size={14} className="text-secondary" />
                          <span className="text-xs font-semibold text-primary">{plan.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Layers size={12} className="text-secondary" /></div>
                          <div><span className="text-xs text-muted">Modules</span><p className="text-sm font-medium text-primary">{plan.modules.length === 1 ? "All Modules" : `${plan.modules.length} Modules`}</p></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Target size={12} className="text-secondary" /></div>
                          <div><span className="text-xs text-muted">Interview Levels</span><p className="text-sm font-medium text-primary">{plan.interviewLevels} Levels</p></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><LayoutDashboard size={12} className="text-secondary" /></div>
                          <div><span className="text-xs text-muted">Dashboard</span><p className="text-sm font-medium text-primary">{plan.dashboardAccess}</p></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><BarChart3 size={12} className="text-secondary" /></div>
                          <div><span className="text-xs text-muted">Analytics</span><p className="text-sm font-medium text-primary">{plan.analyticsAccess}</p></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><FileText size={12} className="text-secondary" /></div>
                          <div><span className="text-xs text-muted">Reports</span><p className="text-sm font-medium text-primary">{plan.reports}</p></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Headphones size={12} className="text-secondary" /></div>
                          <div><span className="text-xs text-muted">Support</span><p className="text-sm font-medium text-primary">{plan.support}</p></div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Unlocked Levels</h4>
                        <div className="flex gap-1.5">
                          {plan.levelDescriptions.map((ld) => (
                            <div key={ld.level} className="flex-1 bg-light-green rounded-lg p-2 text-center">
                              <div className="text-[10px] font-bold text-primary">L{ld.level}</div>
                              <div className="text-[9px] text-muted leading-tight">{ld.title.split(" ")[0]}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 space-y-2">
                      <Button variant={plan.popular || plan.enterprise ? "secondary" : "primary"} className="w-full" onClick={() => openInquiry(plan.name)}>
                        Request Demo <ArrowRight size={16} />
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => openInquiry(plan.name)}>
                        Talk to Sales
                      </Button>
                      <button
                        onClick={() => openInquiry(plan.name)}
                        className="w-full text-center text-xs text-muted hover:text-primary transition-colors pt-1"
                      >
                        Book a Consultation &rarr;
                      </button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>

        <Section className="bg-white">
          <SectionBackground variant="grid" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Why Partner with EDVOLS?"
              subtitle="Join 200+ institutions already transforming their placement preparation"
            />
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BarChart3, title: "50% Higher Placements", desc: "Institutions using EDVOLS report 50% improvement in placement rates within 6 months." },
                { icon: Users, title: "Bulk Management", desc: "Onboard thousands of students in minutes. Manage departments, batches, and faculty." },
                { icon: FileText, title: "Real-time Analytics", desc: "Track every student's progress with live dashboards and exportable reports." },
                { icon: Headphones, title: "Dedicated Support", desc: "Get a dedicated account manager and priority support for your institution." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-white rounded-2xl p-6 card-shadow border border-border h-full">
                    <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center mb-4">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>

        <div className="bg-primary py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Institution&apos;s Placements?</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">Schedule a free consultation with our team. No commitment required.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => openInquiry()}><Mail size={18} className="mr-2" /> Request a Demo</Button>
                <Button variant="ghost" size="lg" className="text-white border border-white/20 hover:bg-white/10" onClick={() => openInquiry()}><Phone size={18} className="mr-2" /> Call Sales</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
      <EnterpriseInquiryForm isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} planName={selectedPlan} />
    </>
  )
}
