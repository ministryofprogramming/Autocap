import type { Metadata } from 'next'
import Link from 'next/link'
import { entrepreneursContent } from '@/content/entrepreneurs'

export const metadata: Metadata = {
  title: 'For Workshop Owners · AutoCap Group',
  description:
    'Thinking of selling? AutoCap preserves your brand, keeps your team, and offers fair value.',
}

export default function EntrepreneursPage() {
  const { landing } = entrepreneursContent

  return (
    <main className="min-h-screen bg-[#D8E4DC]">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-6 py-20 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-[#1C1C1E] md:text-5xl lg:text-6xl">
            {landing.headline}
          </h1>

          {/* Subheadline */}
          <p className="mb-12 text-lg leading-relaxed text-gray-700 md:text-xl">
            {landing.subheadline}
          </p>

          {/* CTA Button */}
          <Link
            href={landing.ctaLink}
            className="inline-block rounded-md bg-[#C8102E] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#A00D25] hover:shadow-lg"
          >
            {landing.ctaText}
          </Link>
        </div>
      </section>
    </main>
  )
}
