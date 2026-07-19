"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustedBy } from "@/components/sections/trusted-by"
import { AboutSection } from "@/components/sections/about"
import { ModulesSection } from "@/components/sections/modules"
import { FeatureComparison } from "@/components/sections/feature-comparison"
import { InterviewJourney } from "@/components/sections/interview-journey"
import { PersonalizedLearning } from "@/components/sections/personalized-learning"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { DashboardsSection } from "@/components/sections/dashboards"
import { ReportsSection } from "@/components/sections/reports"
import { BenefitsSection } from "@/components/sections/benefits"
import { PricingSection } from "@/components/sections/pricing"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
        <AboutSection />
        <ModulesSection />
        <InterviewJourney />
        <FeatureComparison />
        <PersonalizedLearning />
        <DashboardsSection />
        <ReportsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
