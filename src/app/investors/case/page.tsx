import type { Metadata } from 'next'
import { TrendingUp } from 'lucide-react'
import { investorsCaseContent } from '@/content/investors-case'
import { InvestmentPillar } from '@/components/investors/InvestmentPillar'
import { GrowthTimeline } from '@/components/investors/GrowthTimeline'

export const metadata: Metadata = {
  title: investorsCaseContent.metadata.title,
  description: investorsCaseContent.metadata.description,
}

export default function InvestorsCasePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-[#C9D8E8] via-[#B9C8D8] to-[#C9D8E8]">
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

        <div className="relative flex min-h-[85vh] items-center justify-center px-6 py-24 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            {/* Icon Badge */}
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="rounded-2xl bg-white p-4">
                <TrendingUp className="h-12 w-12 text-[#C8102E] md:h-16 md:w-16" strokeWidth={2} />
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-8 text-5xl font-black leading-[1.1] text-[#1C1C1E] md:text-6xl lg:text-7xl xl:text-8xl">
              {investorsCaseContent.hero.title}
            </h1>

            {/* Decorative Line */}
            <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

            {/* Subtitle */}
            {investorsCaseContent.hero.subtitle && (
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed">
                {investorsCaseContent.hero.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-12 text-center text-4xl font-black text-[#1C1C1E] md:text-5xl lg:text-6xl">
            {investorsCaseContent.marketOpportunity.title}
          </h2>

          <div className="mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          <div className="space-y-6">
            {investorsCaseContent.marketOpportunity.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy - Six Pillars Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C9D8E8] via-[#B9C8D8] to-[#C9D8E8] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="mb-12 text-center text-4xl font-black text-[#1C1C1E] md:text-5xl lg:text-6xl">
            {investorsCaseContent.strategy.title}
          </h2>

          <div className="mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {investorsCaseContent.strategy.pillars.map((pillar) => (
              <InvestmentPillar key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Growth Milestones Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-12 text-center text-4xl font-black text-[#1C1C1E] md:text-5xl lg:text-6xl">
            {investorsCaseContent.milestones.title}
          </h2>

          <div className="mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          {/* Timeline */}
          <GrowthTimeline milestones={investorsCaseContent.milestones.items} />

          {/* Disclaimer */}
          <div className="mt-12 rounded-2xl bg-gray-100 p-6 md:p-8">
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              <span className="font-bold">Note:</span> {investorsCaseContent.milestones.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
