"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, Mail, ArrowRight, Download, User, Calendar, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function SuccessContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "Advanced"
  const duration = searchParams.get("duration") || "6 Month"

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-secondary" />
          </motion.div>

          <h1 className="text-3xl font-bold text-primary mb-2">Payment Successful!</h1>
          <p className="text-muted mb-2">Your EDVOLS account has been created.</p>
          <p className="text-sm text-muted mb-8">
            <span className="font-medium text-primary">{plan}</span> &middot; {duration} Plan
          </p>

          <Card className="text-left mb-8">
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-light-green rounded-xl">
                  <Mail size={20} className="text-secondary" />
                  <div className="text-sm">
                    <p className="font-medium text-primary">Check Your Email</p>
                    <p className="text-muted text-xs">Login credentials sent to your registered email</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="text-muted text-xs flex items-center gap-1"><User size={10} /> Username</span>
                    <p className="font-medium text-primary font-mono text-xs mt-0.5">edvols_student_001</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="text-muted text-xs flex items-center gap-1"><CreditCard size={10} /> Plan</span>
                    <p className="font-medium text-primary text-xs mt-0.5">{plan} - {duration}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="text-muted text-xs flex items-center gap-1"><Calendar size={10} /> Start Date</span>
                    <p className="font-medium text-primary text-xs mt-0.5">Jul 19, 2026</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="text-muted text-xs flex items-center gap-1"><Calendar size={10} /> Expiry Date</span>
                    <p className="font-medium text-primary text-xs mt-0.5">
                      {duration.includes("1 Month") ? "Aug 18, 2026" :
                       duration.includes("3 Month") ? "Oct 17, 2026" :
                       duration.includes("6 Month") ? "Jan 15, 2027" :
                       "Jul 19, 2027"}
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="w-full" icon={<Download size={16} />}>
                  Download Invoice
                </Button>
              </div>
            </CardContent>
          </Card>

          <Button variant="primary" size="lg" className="w-full" icon={<ArrowRight size={18} />} onClick={() => window.location.href = "/login"}>
            Go to Login
          </Button>
        </motion.div>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 rounded-full border-2 border-primary border-t-transparent" /></div>}>
      <SuccessContent />
    </Suspense>
  )
}
