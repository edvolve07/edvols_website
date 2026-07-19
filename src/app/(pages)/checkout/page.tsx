"use client"

import { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, ChevronLeft, Check, Building2, GraduationCap, Monitor,
  Shield, Lock, Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { INDIVIDUAL_DURATIONS, getIndividualPlan } from "@/lib/plans"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const planId = searchParams.get("plan") || ""
  const durationId = searchParams.get("duration") || "6-month"

  const tier = getIndividualPlan(durationId, planId)
  const duration = INDIVIDUAL_DURATIONS.find((d) => d.id === durationId)

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    referralCode: "",
    couponCode: "",
  })

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { num: 1, label: "Select Plan" },
            { num: 2, label: "Details" },
            { num: 3, label: "Payment" },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s.num ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
                }`}
              >
                {step > s.num ? <Check size={16} /> : s.num}
              </div>
              <span className={`text-sm font-medium hidden sm:inline ${step >= s.num ? "text-primary" : "text-gray-400"}`}>
                {s.label}
              </span>
              {s.num < 3 && <ChevronRight size={16} className="text-gray-300" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-sm text-muted">Plan</span>
                          <p className="text-lg font-bold text-primary">{tier?.name} - {duration?.label}</p>
                        </div>
                        {tier?.popular && <Badge variant="popular"><Sparkles size={12} className="mr-1" /> Popular</Badge>}
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm"><span className="text-muted">Duration</span><span className="font-medium text-primary">{duration?.label} ({duration?.duration} days)</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted">Interview Levels</span><span className="font-medium text-primary">Level {tier?.interviewLevels}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted">Support</span><span className="font-medium text-primary">{tier?.support}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted">Certificate</span><span className="font-medium text-primary">{tier?.certificate ? "Included" : "Not included"}</span></div>
                      </div>
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted">Total</span>
                          <span className="text-3xl font-bold text-primary">{tier?.priceLabel}</span>
                        </div>
                        <p className="text-xs text-muted mt-1">+ GST as applicable</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Button variant="primary" size="lg" className="mt-6 w-full" onClick={() => setStep(2)}>
                    Continue to Details <ChevronRight size={18} />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold text-primary mb-6">Your Details</h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <Input
                      label="Phone Number"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                      label="College Name"
                      placeholder="Your College"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    />
                    <Input
                      label="Referral Code (optional)"
                      placeholder="Enter referral code"
                      value={formData.referralCode}
                      onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                    />
                    <Input
                      label="Coupon Code (optional)"
                      placeholder="Enter coupon code"
                      value={formData.couponCode}
                      onChange={(e) => setFormData({ ...formData, couponCode: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                      <ChevronLeft size={18} /> Back
                    </Button>
                    <Button variant="primary" size="lg" className="flex-1" onClick={() => setStep(3)}>
                      Continue to Payment <ChevronRight size={18} />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold text-primary mb-6">Payment</h2>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted">Select Payment Method</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "UPI", icon: "📱" },
                        { label: "Debit Card", icon: "💳" },
                        { label: "Credit Card", icon: "💳" },
                        { label: "Net Banking", icon: "🏦" },
                      ].map((method) => (
                        <button
                          key={method.label}
                          className="p-4 rounded-xl border-2 border-border hover:border-primary/30 text-center transition-all bg-white"
                        >
                          <span className="text-2xl block mb-1">{method.icon}</span>
                          <span className="text-xs font-medium">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted mb-6">
                    <Lock size={14} />
                    <span>Secured by Razorpay &amp; Stripe. Your payment info is encrypted.</span>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                      <ChevronLeft size={18} /> Back
                    </Button>
                    <Button variant="primary" size="lg" className="flex-1" onClick={() => router.push("/success")}>
                      <Lock size={18} /> Pay {tier?.priceLabel} Securely
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent>
                <h3 className="font-bold text-primary mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Plan</span>
                    <span className="font-medium text-primary">{tier?.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Duration</span>
                    <span className="font-medium text-primary">{duration?.label} ({duration?.duration} days)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Interview Levels</span>
                    <span className="font-medium text-primary">Level {tier?.interviewLevels}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Support</span>
                    <span className="font-medium text-primary">{tier?.support}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">Total</span>
                    <span className="text-2xl font-bold text-primary">{tier?.priceLabel}</span>
                  </div>
                  <p className="text-xs text-muted mt-1">+ GST as applicable</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <Shield size={14} className="text-secondary" />
                  <span>Secure checkout · Money-back guarantee</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 flex items-center justify-center"><div className="animate-spin w-8 h-8 rounded-full border-2 border-primary border-t-transparent" /></div>}>
      <CheckoutContent />
    </Suspense>
  )
}
