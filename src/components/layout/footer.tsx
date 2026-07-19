"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EDVOLS</span>
            </div>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              AI-powered career readiness and placement platform helping students achieve their dream careers through intelligent mock interviews, assessments, and personalized guidance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {["AI Mock Interview", "Aptitude Assessment", "Coding Assessment", "Communication Evaluation", "AI Resume Builder"].map((item) => (
                <li key={item}>
                  <a href="#modules" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "FAQ", "Contact", "Privacy Policy", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a href={item === "About" ? "/about" : item === "FAQ" ? "/faq" : item === "Contact" ? "/contact" : "#"} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} EDVOLS. All rights reserved.
          </p>
          <p className="text-sm text-white/40 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> for education
          </p>
        </div>
      </div>
    </footer>
  )
}
