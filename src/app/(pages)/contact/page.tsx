"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Mail, Phone, MapPin, Clock, Send, Check, ChevronRight, MessageCircle, ExternalLink, Globe, MessageSquareShare, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

const CONTACT_INFO = [
  { icon: Mail, label: "Support Email", value: "support@edvols.com", href: "mailto:support@edvols.com", sub: "We respond within 24 hours" },
  { icon: Mail, label: "Sales Email", value: "sales@edvols.com", href: "mailto:sales@edvols.com", sub: "For enterprise inquiries" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210", sub: "Mon - Sat, 9 AM - 6 PM" },
  { icon: MapPin, label: "Office", value: "Bengaluru, Karnataka, India", sub: "INDIA" },
  { icon: Clock, label: "Business Hours", value: "Monday - Saturday", sub: "9:00 AM - 6:00 PM IST" },
]

const SOCIAL_LINKS = [
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: MessageSquareShare, label: "LinkedIn", href: "#" },
  { icon: Globe, label: "YouTube", href: "#" },
  { icon: ExternalLink, label: "Twitter", href: "#" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-light-green rounded-full px-4 py-1.5 mb-4">
                <MessageCircle size={14} className="text-secondary" />
                <span className="text-sm font-medium text-primary">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
              <p className="text-lg text-muted max-w-xl mx-auto">
                Have questions about our platform, pricing, or enterprise plans? We&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                {CONTACT_INFO.map((item) => (
                  <Card key={item.label}>
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="w-10 h-10 bg-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-primary">{item.value}</p>
                        )}
                        <p className="text-[10px] text-muted mt-0.5">{item.sub}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="bg-light-green rounded-2xl p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((link) => (
                      <a key={link.label} href={link.href} className="w-9 h-9 bg-white rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all card-shadow">
                        <link.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={32} className="text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                      <p className="text-muted text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                      <Button variant="primary" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input label="Your Name" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                        <Input label="Email Address" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input label="Phone Number" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        <Input label="Subject" placeholder="How can we help?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Message</label>
                        <textarea className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none resize-none" rows={5} placeholder="Tell us more about your inquiry..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                      </div>
                      <Button variant="primary" size="lg" type="submit" className="w-full">
                        <Send size={18} className="mr-2" /> Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="bg-white rounded-3xl border border-border card-shadow overflow-hidden">
              <div className="aspect-[21/9] bg-light-green flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-secondary" />
                  <p className="text-sm font-medium text-primary">EDVOLS Headquarters</p>
                  <p className="text-xs text-muted">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 p-8 bg-primary rounded-3xl text-center">
              <HelpCircle size={32} className="mx-auto mb-3 text-white/60" />
              <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-white/60 text-sm mb-6">Check our FAQ page for quick answers</p>
              <Button variant="secondary" onClick={() => window.location.href = "/faq"}>
                Visit FAQ <ExternalLink size={16} className="ml-1" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
