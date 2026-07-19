export interface PlanTier {
  id: string
  name: string
  price: number
  priceLabel: string
  period: string
  description: string
  features: string[]
  interviewLevels: number
  reports: string
  support: string
  certificate: boolean
  popular?: boolean
  tagline?: string
}

export interface DurationConfig {
  id: string
  label: string
  duration: number
  period: string
  tiers: PlanTier[]
  isSingleTier?: boolean
}

export interface EnterprisePlan {
  id: string
  name: string
  duration: string
  durationDays: number
  description: string
  modules: string[]
  interviewLevels: number
  dashboardAccess: string
  analyticsAccess: string
  reports: string
  support: string
  features: string[]
  levelDescriptions: { level: number; title: string; items: string[] }[]
  popular?: boolean
  enterprise?: boolean
}

export const LEVEL_DESCRIPTIONS = {
  1: {
    level: 1,
    title: "Interview Foundation",
    items: ["Resume Analysis", "HR Interview", "Technical Questions", "Confidence Score", "AI Feedback"],
  },
  2: {
    level: 2,
    title: "Professional Growth",
    items: ["Cross Questioning", "Adaptive Questions", "Coding Round", "Communication Analysis"],
  },
  3: {
    level: 3,
    title: "Placement Ready",
    items: ["AI Coach", "Company Specific Questions", "Placement Readiness Score", "Advanced Reports"],
  },
  4: {
    level: 4,
    title: "AI Mentorship",
    items: ["Interview History", "Weakness Tracking", "Progress Timeline", "Career Guidance", "Certificates"],
  },
}

export const ENTERPRISE_PLANS: EnterprisePlan[] = [
  {
    id: "starter-institution",
    name: "Starter Institution",
    duration: "1 Month",
    durationDays: 30,
    description: "Perfect for institutions starting their placement preparation journey",
    modules: ["AI Mock Interview", "Aptitude Assessment", "Coding Assessment"],
    interviewLevels: 1,
    dashboardAccess: "Institution Dashboard",
    analyticsAccess: "Basic Analytics",
    reports: "Basic Reports",
    support: "Email Support",
    levelDescriptions: [LEVEL_DESCRIPTIONS[1]],
    features: [
      "Institution Dashboard",
      "Basic Analytics",
      "Basic Reports",
      "Resume ATS Analysis",
      "Resume Based Questions",
      "HR Interview",
      "Technical Interview",
      "AI Evaluation",
      "Voice Analysis",
      "AI Reports",
    ],
  },
  {
    id: "professional-institution",
    name: "Professional Institution",
    duration: "3 Months",
    durationDays: 90,
    description: "Comprehensive placement preparation for medium-sized institutions",
    modules: ["AI Mock Interview", "Aptitude Assessment", "Coding Assessment", "Communication Evaluation"],
    interviewLevels: 2,
    dashboardAccess: "Institution + Faculty Dashboard",
    analyticsAccess: "Advanced Analytics",
    reports: "Advanced Reports",
    support: "Priority Email Support",
    levelDescriptions: [LEVEL_DESCRIPTIONS[1], LEVEL_DESCRIPTIONS[2]],
    features: [
      "Institution Dashboard",
      "Faculty Dashboard",
      "Department Analytics",
      "Advanced Analytics",
      "Advanced Reports",
      "Resume ATS Analysis",
      "Resume Based Questions",
      "HR Interview",
      "Technical Interview",
      "AI Evaluation",
      "Voice Analysis",
      "Video Analysis",
      "AI Reports",
      "Cross Questioning",
    ],
  },
  {
    id: "enterprise-institution",
    name: "Enterprise Institution",
    duration: "6 Months",
    durationDays: 180,
    description: "Full-suite placement platform for large institutions",
    popular: true,
    modules: ["All Modules"],
    interviewLevels: 3,
    dashboardAccess: "All Dashboards",
    analyticsAccess: "Comprehensive Analytics",
    reports: "Comprehensive Reports",
    support: "Chat + Dedicated Account Manager",
    levelDescriptions: [LEVEL_DESCRIPTIONS[1], LEVEL_DESCRIPTIONS[2], LEVEL_DESCRIPTIONS[3]],
    features: [
      "All Dashboards",
      "Department Analytics",
      "Bulk Student Upload",
      "Placement Drive Management",
      "Comprehensive Analytics",
      "Comprehensive Reports",
      "Resume ATS Analysis",
      "Resume Based Questions",
      "HR Interview",
      "Technical Interview",
      "AI Evaluation",
      "Voice Analysis",
      "Video Analysis",
      "AI Reports",
      "Cross Questioning",
      "Adaptive Difficulty",
      "Multi Interview Panel",
      "Real Time AI Coach",
      "Placement Certificate",
    ],
  },
  {
    id: "enterprise-plus",
    name: "Enterprise Plus",
    duration: "1 Year",
    durationDays: 365,
    description: "Premium year-long partnership for maximum placement success",
    enterprise: true,
    modules: ["All Modules"],
    interviewLevels: 4,
    dashboardAccess: "All Dashboards + Custom Reports",
    analyticsAccess: "Enterprise Analytics + AI Insights",
    reports: "Enterprise Reports",
    support: "24/7 Priority + Dedicated Success Manager",
    levelDescriptions: [LEVEL_DESCRIPTIONS[1], LEVEL_DESCRIPTIONS[2], LEVEL_DESCRIPTIONS[3], LEVEL_DESCRIPTIONS[4]],
    features: [
      "All Dashboards",
      "Custom Reports",
      "Department Analytics",
      "Bulk Student Upload",
      "Placement Drive Management",
      "Enterprise Analytics + AI Insights",
      "Enterprise Reports",
      "Resume ATS Analysis",
      "Resume Based Questions",
      "HR Interview",
      "Technical Interview",
      "AI Evaluation",
      "Voice Analysis",
      "Video Analysis",
      "AI Reports",
      "Cross Questioning",
      "Adaptive Difficulty",
      "Multi Interview Panel",
      "Real Time AI Coach",
      "Interview Replay",
      "Placement Certificate",
      "AI Memory Engine",
      "Company Specific Interviews",
    ],
  },
]

export const INDIVIDUAL_DURATIONS: DurationConfig[] = [
  {
    id: "1-month",
    label: "1 Month",
    duration: 30,
    period: "/month",
    tiers: [
      {
        id: "1-month-basic",
        name: "Basic",
        price: 199,
        priceLabel: "₹199",
        period: "/month",
        description: "Quick start with essential interview practice",
        tagline: "Start your interview journey",
        features: [
          "Resume Builder",
          "ATS Resume Analysis",
          "Resume Based Questions",
          "HR Interview",
          "Basic Technical Questions",
          "AI Feedback Report",
        ],
        interviewLevels: 1,
        reports: "Basic Report",
        support: "Email Support",
        certificate: false,
      },
      {
        id: "1-month-intermediate",
        name: "Intermediate",
        price: 399,
        priceLabel: "₹399",
        period: "/month",
        description: "Add coding, aptitude and communication evaluation",
        tagline: "Everything in Basic, plus:",
        features: [
          "Everything in Basic",
          "Technical Interview",
          "Coding Assessment",
          "Aptitude Assessment",
          "Communication Evaluation",
          "Performance Reports",
        ],
        interviewLevels: 1,
        reports: "Performance Report",
        support: "Email Support",
        certificate: false,
      },
      {
        id: "1-month-advanced",
        name: "Advanced",
        price: 549,
        priceLabel: "₹549",
        period: "/month",
        description: "Full access with cross questioning and AI coach",
        popular: true,
        tagline: "Everything in Intermediate, plus:",
        features: [
          "Everything in Intermediate",
          "Cross Questioning",
          "Adaptive Interview",
          "Multi Interviewer Panel",
          "AI Memory Engine",
          "Advanced Analytics",
        ],
        interviewLevels: 2,
        reports: "Advanced Analytics",
        support: "Priority Email",
        certificate: false,
      },
    ],
  },
  {
    id: "3-month",
    label: "3 Months",
    duration: 90,
    period: "/quarter",
    tiers: [
      {
        id: "3-month-basic",
        name: "Basic",
        price: 499,
        priceLabel: "₹499",
        period: "/quarter",
        description: "Extended practice with progress tracking",
        tagline: "More interviews, better results",
        features: [
          "Resume Builder",
          "ATS Resume Analysis",
          "Resume Based Questions",
          "HR Interview",
          "Technical Interview",
          "AI Feedback",
          "Progress Tracking",
          "Historical Reports",
        ],
        interviewLevels: 1,
        reports: "Historical Reports",
        support: "Email Support",
        certificate: false,
      },
      // {
      //   id: "3-month-intermediate",
      //   name: "Intermediate",
      //   price: 2499,
      //   priceLabel: "₹2,499",
      //   period: "/quarter",
      //   description: "Coding, communication and adaptive questions",
      //   tagline: "Everything in Basic, plus:",
      //   features: [
      //     "Everything in Basic",
      //     "Coding Assessment",
      //     "Communication Evaluation",
      //     "Adaptive Questions",
      //     "Interview Reports",
      //   ],
      //   interviewLevels: 2,
      //   reports: "Interview Reports",
      //   support: "Priority Email",
      //   certificate: false,
      // },
      {
        id: "3-month-advanced",
        name: "Advanced",
        price: 849,
        priceLabel: "₹849",
        period: "/quarter",
        description: "Full preparation with AI Memory Engine",
        popular: true,
        tagline: "Everything in Intermediate, plus:",
        features: [
          "Everything in Intermediate",
          "AI Memory Engine",
          "Cross Questioning",
          "Mock Company Interviews",
          "Placement Readiness Report",
        ],
        interviewLevels: 2,
        reports: "Placement Readiness Report",
        support: "Chat Support",
        certificate: false,
      },
    ],
  },
  {
    id: "6-month",
    label: "6 Months",
    duration: 180,
    period: "/half-year",
    isSingleTier: true,
    tiers: [
      {
        id: "6-month-placement-ready",
        name: "Placement Ready",
        price: 799,
        priceLabel: "₹799",
        period: "/half-year",
        description: "The complete experience. Everything unlocked for your success.",
        tagline: "Everything Unlocked",
        features: [
          "Level 1 — Interview Foundation",
          "Level 2 — Professional Growth",
          "Level 3 — Placement Ready",
          "Real Time AI Coach",
          "Unlimited Progress Tracking",
          "Company Specific Practice",
          "Advanced Reports",
          "Placement Certificate",
        ],
        interviewLevels: 3,
        reports: "Advanced Reports",
        support: "Chat + Priority Support",
        certificate: true,
        popular: true,
      },
    ],
  },
  {
    id: "1-year",
    label: "1 Year",
    duration: 365,
    period: "/year",
    isSingleTier: true,
    tiers: [
      {
        id: "1-year-career-master",
        name: "Career Master",
        price: 1199,
        priceLabel: "₹1,199",
        period: "/year",
        description: "Everything in Placement Ready plus AI Mentor and all future updates.",
        tagline: "Everything Included",
        features: [
          "Everything in 6 Month Plan",
          "AI Mentor",
          "Future Feature Updates",
          "Premium Support",
          "Recruiter Ready Profile",
          "Priority Access",
          "Company Specific Interview Library",
          "All Future AI Features",
        ],
        interviewLevels: 4,
        reports: "Enterprise Reports",
        support: "24/7 Priority Support",
        certificate: true,
        popular: true,
      },
    ],
  },
]

export const COMPARISON_FEATURES: {
  category: string
  items: { name: string; tiers: Record<string, boolean> }[]
}[] = [
  {
    category: "Interview Skills",
    items: [
      { name: "HR Interview", tiers: { "1-month-basic": true, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": true, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Technical Interview", tiers: { "1-month-basic": false, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": true, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Coding Assessment", tiers: { "1-month-basic": false, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Aptitude Assessment", tiers: { "1-month-basic": false, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Communication Evaluation", tiers: { "1-month-basic": false, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Cross Questioning", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Adaptive Interview", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Company Specific Practice", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
    ],
  },
  {
    category: "Resume & Reports",
    items: [
      { name: "Resume Builder", tiers: { "1-month-basic": true, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": true, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "ATS Resume Analysis", tiers: { "1-month-basic": true, "1-month-intermediate": true, "1-month-advanced": true, "3-month-basic": true, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "AI Feedback Report", tiers: { "1-month-basic": true, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": true, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": false } },
      { name: "Performance Reports", tiers: { "1-month-basic": false, "1-month-intermediate": true, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": false } },
      { name: "Advanced Analytics", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Placement Readiness Report", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Historical Reports", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": true, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": false } },
      { name: "Enterprise Reports", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": true } },
    ],
  },
  {
    category: "AI & Coaching",
    items: [
      { name: "AI Memory Engine", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": true, "6-month-placement-ready": false, "1-year-career-master": true } },
      { name: "Multi Interviewer Panel", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": true, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Real Time AI Coach", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "AI Mentor", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": true } },
      { name: "Progress Tracking", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": true, "3-month-intermediate": true, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
    ],
  },
  {
    category: "Career & Certificate",
    items: [
      { name: "Mock Company Interviews", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": true, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Company Specific Library", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": true } },
      { name: "Recruiter Ready Profile", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": true } },
      { name: "Placement Certificate", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": true, "1-year-career-master": true } },
      { name: "Future Feature Updates", tiers: { "1-month-basic": false, "1-month-intermediate": false, "1-month-advanced": false, "3-month-basic": false, "3-month-intermediate": false, "3-month-advanced": false, "6-month-placement-ready": false, "1-year-career-master": true } },
    ],
  },
]

export function getIndividualPlan(durationId: string, tierId: string): PlanTier | null {
  const duration = INDIVIDUAL_DURATIONS.find((d) => d.id === durationId)
  if (!duration) return null
  return duration.tiers.find((t) => t.id === tierId) || null
}

export function getEnterprisePlan(planId: string): EnterprisePlan | null {
  return ENTERPRISE_PLANS.find((p) => p.id === planId) || null
}
