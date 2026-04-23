import { Info, Star } from 'lucide-react'

interface ContentCalloutProps {
  variant: 'info' | 'highlight'
  content: string
}

export function ContentCallout({ variant, content }: ContentCalloutProps) {
  const variantStyles = {
    info: {
      bg: 'bg-[#D8E4DC]',
      border: 'border-[#A8C8B0]',
      icon: Info,
    },
    highlight: {
      bg: 'bg-[#F0DADA]',
      border: 'border-[#E8C0C0]',
      icon: Star,
    },
  }

  const { bg, border, icon: Icon } = variantStyles[variant]

  return (
    <div
      className={`my-8 flex items-start gap-4 rounded-lg border-l-4 ${border} ${bg} p-6 text-[#1C1C1E]`}
    >
      <Icon className="h-6 w-6 flex-shrink-0" />
      <p className="text-lg leading-relaxed">{content}</p>
    </div>
  )
}
