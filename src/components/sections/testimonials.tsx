"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader, SectionBackground } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CSE, Tier 2 College",
    quote: "EDVOLS completely changed how I prepare for placements. The AI feedback after every mock interview helped me fix mistakes I didn't even know I was making. Landed a 12 LPA offer.",
    score: "12 LPA",
    color: "bg-primary",
  },
  {
    name: "Arun Kumar",
    role: "ECE Final Year",
    quote: "The personalized practice sessions made all the difference. EDVOLS knew exactly where I was weak and kept pushing me there until I improved. It's like having a personal placement coach 24/7.",
    score: "9 LPA",
    color: "bg-secondary",
  },
  {
    name: "Neha Patel",
    role: "IT Graduate",
    quote: "What I love most is the confidence tracking. Seeing my scores go up interview after interview kept me motivated. I felt truly prepared when I walked into the actual interview.",
    score: "15 LPA",
    color: "bg-primary",
  },
  {
    name: "Rahul Verma",
    role: "ME, Tier 3 College",
    quote: "Coming from a Tier 3 college, I never thought I'd crack a top company. EDVOLS leveled the playing field. The AI doesn't care where you study — it just makes you better.",
    score: "8 LPA",
    color: "bg-secondary",
  },
]

export function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            title="Real Students, Real Results"
            subtitle="Hear from students who cracked their dream placements with EDVOLS"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-light-green rounded-2xl p-6 card-shadow border border-border"
            >
              <Quote size={20} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${t.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                  <p className="text-[11px] text-muted">{t.role}</p>
                </div>
                <div className="ml-auto bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {t.score}
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
