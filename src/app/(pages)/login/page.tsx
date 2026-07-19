"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production: call /api/auth/login
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">Welcome back</h1>
              <p className="text-sm text-muted mt-1">Sign in to your EDVOLS account</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div>
                    <Input
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="flex items-center justify-between mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-xs text-muted">Remember me</span>
                      </label>
                      <a href="#" className="text-xs text-secondary hover:text-primary transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full" type="submit">
                    <Lock size={16} className="mr-2" /> Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-center text-xs text-muted mt-6">
              Don&apos;t have an account? Your credentials were sent via email after purchase.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
