import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "EDVOLS - AI Powered Career Readiness & Placement Platform",
  description: "One unified AI platform helping students become placement ready through Mock Interviews, Coding Assessment, Aptitude, Communication Evaluation and Resume Building.",
  keywords: ["AI interview", "placement preparation", "mock interview", "career readiness", "aptitude test", "coding assessment", "resume builder"],
  openGraph: {
    title: "EDVOLS - AI Powered Career Readiness & Placement Platform",
    description: "Get placement ready with AI-powered mock interviews, coding assessments, and personalized feedback.",
    type: "website",
    locale: "en_IN",
    siteName: "EDVOLS",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDVOLS - AI Powered Career Readiness",
    description: "Get placement ready with AI-powered mock interviews and assessments.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "EDVOLS",
              applicationCategory: "EducationalApplication",
              description: "AI Powered Career Readiness & Placement Platform",
              offers: {
                "@type": "Offer",
                price: "999",
                priceCurrency: "INR",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
