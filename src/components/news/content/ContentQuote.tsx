import { Quote } from 'lucide-react'

interface ContentQuoteProps {
  content: string
  attribution?: string
  role?: string
}

export function ContentQuote({ content, attribution, role }: ContentQuoteProps) {
  return (
    <div className="my-12 rounded-xl bg-gradient-to-br from-[#F5F0EB] to-[#EDE8E3] p-8">
      <div className="flex items-start gap-4">
        <Quote className="h-8 w-8 flex-shrink-0 text-[#C8102E]" />
        <div>
          <blockquote className="text-2xl font-bold leading-relaxed text-[#1C1C1E]">
            "{content}"
          </blockquote>
          {attribution && (
            <div className="mt-4">
              <p className="font-semibold text-[#1C1C1E]">{attribution}</p>
              {role && <p className="text-sm text-gray-600">{role}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
