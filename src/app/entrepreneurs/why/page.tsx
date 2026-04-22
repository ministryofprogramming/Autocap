import type { Metadata } from 'next'
import Link from 'next/link'
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
      <section className="bg-[#D8E4DC] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Entrepreneurs', href: '/entrepreneurs' },
              { label: 'Why AutoCap' },
            ]}
          />
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#1C1C1E] md:text-5xl">Why AutoCap</h1>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              If you&apos;re considering selling your workshop, you&apos;ve likely heard from chains
              that want to rebrand everything under their banner. We&apos;re different.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Benefits */}
      {benefits.map((benefit, index) => (
        <BenefitSection key={benefit.id} benefit={benefit} index={index} />
      ))}

      {/* Closing Block */}
      <section className="bg-[#1C1C1E] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            {closingBlock.title}
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-gray-300">{closingBlock.description}</p>

          {/* CTA */}
          <Link
            href="/entrepreneurs/contact"
            className="inline-block rounded-md bg-[#C8102E] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#A00D25] hover:shadow-lg"
          >
            Ready to explore? → Start a confidential conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
