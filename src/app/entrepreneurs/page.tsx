import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Handshake } from 'lucide-react'
import { entrepreneursContent } from '@/content/entrepreneurs'
import { TestimonialsSection } from '@/components/entrepreneurs/TestimonialsSection'

export const metadata: Metadata = {
  title: 'For Workshop Owners · AutoCap Group',
  description:
    'Thinking of selling? AutoCap preserves your brand, keeps your team, and offers fair value.',
}

export default function EntrepreneursPage() {
  const { landing } = entrepreneursContent

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#D8E4DC] via-[#C8D5CC] to-[#D8E4DC]">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #1C1C1E 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Icon Badge */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="rounded-2xl bg-white p-4">
              <Handshake className="h-12 w-12 text-[#C8102E] md:h-16 md:w-16" strokeWidth={2} />
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-5xl font-black leading-[1.1] text-[#1C1C1E] md:text-6xl lg:text-7xl xl:text-8xl">
            {landing.headline}
          </h1>

          {/* Decorative Line */}
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed">
            {landing.subheadline}
          </p>

          {/* CTA Button */}
          <Link
            href={landing.ctaLink}
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105"
          >
            {landing.ctaText}
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Trust Indicator */}
          <div className="mt-16 flex items-center justify-center gap-3 text-sm text-gray-600">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-medium">Confidential · No obligation · Free consultation</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  )
}
