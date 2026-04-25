import { Quote } from 'lucide-react'

interface PullQuoteProps {
  text: string
  attribution: string
  title: string
}

export function PullQuote({ text, attribution, title }: PullQuoteProps) {
  return (
    <div className="mx-auto max-w-5xl py-12 text-center md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Quote Icon */}
        <div className="mb-6 inline-flex items-center justify-center">
          <Quote className="h-12 w-12 text-[#C8102E]" strokeWidth={1.5} />
        </div>

        {/* Quote Text */}
        <blockquote>
          <p className="mb-8 text-2xl font-bold italic leading-relaxed text-[#1C1C1E] md:text-3xl md:leading-relaxed">
            {'"'}
            {text}
            {'"'}
          </p>

          {/* Attribution */}
          <footer className="text-lg text-gray-700">
            <cite className="not-italic">
              <span className="block font-bold text-[#1C1C1E]">
                {'—'} {attribution}
              </span>
              <span className="mt-1 block text-sm text-gray-600">{title}</span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}
