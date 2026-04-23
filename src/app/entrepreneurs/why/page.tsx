import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Breadcrumb } from '@/components/entrepreneurs/Breadcrumb'
import { BenefitSection } from '@/components/entrepreneurs/BenefitSection'
import { entrepreneursContent } from '@/content/entrepreneurs'

export const metadata: Metadata = {
  title: 'Why AutoCap · For Workshop Owners',
  description: 'Discover what makes AutoCap different from selling to a chain.',
}

export default function WhyAutoCapPage() {
  const { benefits, closingBlock } = entrepreneursContent

  return (
    <main className="min-h-screen">
      {/* Page Title */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#D8E4DC] via-[#C8D5CC] to-[#D8E4DC] px-6 py-20 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Entrepreneurs', href: '/entrepreneurs' },
              { label: 'Why AutoCap' },
            ]}
          />
          <div className="mt-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
              <Sparkles className="h-5 w-5 text-[#C8102E]" />
              <span className="text-sm font-semibold text-[#C8102E]">5 Key Differences</span>
            </div>

            <h1 className="mb-6 text-5xl font-black text-[#1C1C1E] md:text-6xl lg:text-7xl">
              Why AutoCap
            </h1>

            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700 md:text-2xl">
              If you&apos;re considering selling your workshop, you&apos;ve likely heard from
              chains that want to rebrand everything under their banner.{' '}
              <span className="font-bold text-[#C8102E]">We&apos;re different.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5 Benefits */}
      {benefits.map((benefit, index) => (
        <BenefitSection key={benefit.id} benefit={benefit} index={index} />
      ))}

      {/* Closing Block */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1C1E] via-[#2C2C2E] to-[#1C1C1E] px-6 py-20 md:px-8 md:py-28">
        {/* Decorative Glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E] opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-[#C8102E]" />
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            {closingBlock.title}
          </h2>

          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            {closingBlock.description}
          </p>

          {/* CTA */}
          <Link
            href="/entrepreneurs/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-[#C8102E]/40 transition-all duration-300 hover:scale-105 hover:shadow-[#C8102E]/60"
          >
            Ready to explore? Start a confidential conversation
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
