import type { InvestmentPillar as PillarType } from '@/content/investors-case'

interface InvestmentPillarProps {
  pillar: PillarType
}

export function InvestmentPillar({ pillar }: InvestmentPillarProps) {
  const Icon = pillar.icon

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg md:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8102E]/10">
        <Icon className="h-6 w-6 text-[#C8102E]" strokeWidth={2.5} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#1C1C1E] md:text-2xl">{pillar.title}</h3>
      <p className="text-base leading-relaxed text-gray-700 md:text-lg">{pillar.description}</p>
    </div>
  )
}
