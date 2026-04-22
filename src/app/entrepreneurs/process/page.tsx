import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/entrepreneurs/Breadcrumb'
import { ProcessTimeline } from '@/components/entrepreneurs/ProcessTimeline'
import { entrepreneursContent } from '@/content/entrepreneurs'

export const metadata: Metadata = {
  title: 'How It Works · AutoCap Group',
  description: 'Our clear, respectful acquisition process from first conversation to completion.',
}

export default function ProcessPage() {
  const { process } = entrepreneursContent

  return (
    <main className="min-h-screen bg-[#F5F0EB]">
      {/* Page Title */}
      <section className="bg-[#D8E4DC] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Entrepreneurs', href: '/entrepreneurs' },
              { label: 'How It Works' },
            ]}
          />
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#1C1C1E] md:text-5xl">How It Works</h1>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">{process.intro}</p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ProcessTimeline steps={process.steps} />

          {/* Total Timeline */}
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-[#C8102E]">{process.totalTimeline}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1C1C1E] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to take the first step?
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-gray-300">
            Every acquisition begins with a simple, confidential conversation. No pressure, no
            obligation — just an honest discussion about your business and what you&apos;re looking
            for.
          </p>

          {/* CTA Button */}
          <Link
            href={process.ctaLink}
            className="inline-block rounded-md bg-[#C8102E] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#A00D25] hover:shadow-lg"
          >
            {process.ctaText}
          </Link>
        </div>
      </section>
    </main>
  )
}
