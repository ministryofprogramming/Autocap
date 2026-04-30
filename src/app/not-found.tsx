import Link from 'next/link'
import { AlertCircle, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        {/* Icon with Ember background */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-[#F0DADA] p-6">
            <AlertCircle className="h-12 w-12 text-[#C8102E]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-4xl font-black text-[#1C1C1E] md:text-5xl">Wrong turn.</h1>

        {/* Decorative line */}
        <div className="mx-auto mb-6 h-1 w-24 bg-[#C8102E]" />

        {/* Message */}
        <p className="mb-8 max-w-md text-lg text-gray-600 md:text-xl">
          The page you&apos;re looking for doesn&apos;t exist — but our workshops do.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105"
        >
          Back to homepage
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
