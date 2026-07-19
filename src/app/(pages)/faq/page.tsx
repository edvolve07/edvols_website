"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Section, SectionBackground } from "@/components/ui/section"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, MessageCircle, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQ_CATEGORIES = [
  {
    category: "Pricing & Plans",
    items: [
      { q: "What payment methods do you accept?", a: "We accept UPI, Debit Cards, Credit Cards, and Net Banking through Razorpay and Stripe gateways." },
      { q: "Can I upgrade my plan mid-subscription?", a: "Yes! You can upgrade anytime. You only pay the difference and your expiry date extends accordingly. No data loss." },
      { q: "Is there a refund policy?", a: "Yes, we offer a 7-day money-back guarantee on all plans. Contact our support team within 7 days of purchase for a full refund." },
      { q: "Do you offer student discounts?", a: "We periodically offer discounts during placement seasons. Subscribe to our newsletter to stay updated." },
    ],
  },
  {
    category: "AI Interviews",
    items: [
      { q: "How does the AI interview work?", a: "Our AI conducts realistic interviews by asking questions based on your resume, role, and industry. It evaluates responses using voice analysis, video analysis, and content evaluation in real-time." },
      { q: "Are the interviews specific to companies?", a: "Yes! With our advanced plans, you can practice company-specific interviews for top tech companies, finance firms, and more." },
      { q: "How is my performance scored?", a: "The AI evaluates multiple dimensions: technical accuracy, communication clarity, confidence level, body language, and response structure. Each interview generates a detailed report." },
    ],
  },
  {
    category: "Certificates & Reports",
    items: [
      { q: "Do I get a certificate after completing the plan?", a: "Placement Ready and Career Master plans include a placement certificate. Other plans can be upgraded to access certificate features." },
      { q: "Can I share my reports with recruiters?", a: "Absolutely! Your performance reports and certificates can be downloaded as PDFs and shared directly with recruiters or on LinkedIn." },
    ],
  },
  {
    category: "Institution Plans",
    items: [
      { q: "How do institution plans work?", a: "Institution plans provide bulk access for your students. You get dashboards for faculty and placement officers, analytics, and management tools. Contact our sales team for a demo." },
      { q: "Can we onboard all students at once?", a: "Yes! Enterprise plans support bulk student upload via CSV. Each student gets individual accounts with credentials sent via email." },
      { q: "Is there a minimum student count?", a: "There is no minimum. We tailor the plan based on your institution's size and requirements." },
    ],
  },
  {
    category: "Account & Support",
    items: [
      { q: "I didn't receive my login credentials", a: "Check your spam folder. If you still can't find them, contact support@edvols.com and we'll resend them immediately." },
      { q: "Can I use EDVOLS on mobile?", a: "Yes! EDVOLS is fully responsive and works on desktop, tablet, and mobile browsers." },
      { q: "How do I contact support?", a: "Email us at support@edvols.com or call +91 98765 43210. We're available Mon-Sat, 9 AM - 6 PM." },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{ cat: number; idx: number } | null>(null)
  const [search, setSearch] = useState("")

  const filtered = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0)

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
              <p className="text-muted max-w-lg mx-auto mb-8">Everything you need to know about EDVOLS</p>
              <div className="relative max-w-md mx-auto">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {filtered.map((cat, catIdx) => (
              <AnimatedSection key={cat.category} delay={catIdx * 0.05}>
                <h2 className="text-xl font-bold text-primary mb-4">{cat.category}</h2>
                <div className="space-y-2">
                  {cat.items.map((item, idx) => {
                    const isOpen = openIndex?.cat === catIdx && openIndex?.idx === idx
                    return (
                      <motion.div
                        key={item.q}
                        className="bg-white rounded-2xl border border-border card-shadow overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : { cat: catIdx, idx })}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="text-sm font-medium text-primary pr-4">{item.q}</span>
                          <ChevronDown
                            size={18}
                            className={cn(
                              "text-muted flex-shrink-0 transition-transform duration-200",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-16 text-center bg-light-green rounded-3xl p-8">
              <MessageCircle size={32} className="mx-auto mb-3 text-secondary" />
              <h3 className="text-xl font-bold text-primary mb-2">Still have questions?</h3>
              <p className="text-sm text-muted mb-6">We&apos;re here to help. Reach out to our support team.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:support@edvols.com" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                  <Mail size={16} /> support@edvols.com
                </a>
                <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                  <Phone size={16} /> +91 98765 43210
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
