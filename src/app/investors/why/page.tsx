import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { Breadcrumb } from '@/components/entrepreneurs/Breadcrumb'
import { InvestmentPillar } from '@/components/investors/InvestmentPillar'
import { investorsContent } from '@/content/investors'

export const metadata: Metadata = {
  title: 'Investment Case · AutoCap Group',
  description:
    'Discover the AutoCap investment opportunity: market consolidation, recurring revenue, and operational scale.',
}

export default function InvestorsWhyPage() {
  const { pillars, closingBlock } = investorsContent

  return (
    <main className="min-h-screen">
      {/* Page Title */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C9D8E8] via-[#B8C7D7] to-[#C9D8E8] px-6 py-20 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Investors', href: '/investors' },
              { label: 'The Investment Case' },
            ]}
          />
          <div className="mt-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
              <TrendingUp className="h-5 w-5 text-[#C8102E]" />
              <span className="text-sm font-semibold text-[#C8102E]">4 Investment Pillars</span>
            </div>

            <h1 className="mb-6 text-5xl font-black text-[#1C1C1E] md:text-6xl lg:text-7xl">
              The Investment Case
            </h1>

            <div className="mx-auto mb-6 h-1 w-24 bg-[#C8102E]" />

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700 md:text-2xl">
              A proven playbook in an overlooked sector.{' '}
              <span className="font-bold text-[#C8102E]">
                Built for sustainable, long-term value creation.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 4 Investment Pillars */}
      {pillars.map((pillar, index) => (
        <InvestmentPillar key={pillar.id} pillar={pillar} index={index} />
      ))}

      {/* Closing Block */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1C1E] via-[#2C2C2E] to-[#1C1C1E] px-6 py-20 md:px-8 md:py-28">
        {/* Decorative Glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E] opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-[#C8102E]" />
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            {closingBlock.title}
          </h2>

          <div className="mx-auto mb-8 h-1 w-24 bg-[#C8102E]" />

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            {closingBlock.description}
          </p>

          {/* CTA */}
          <Link
            href="/investors/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105"
          >
            Interested in learning more? Contact our investor relations team
          </Link>
        </div>
      </section>
    </main>
  )
}
