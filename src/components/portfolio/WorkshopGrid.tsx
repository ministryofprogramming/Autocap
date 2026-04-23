import { Building2 } from 'lucide-react'
import { WorkshopCard } from './WorkshopCard'
import type { Workshop } from '@/content/workshops'

interface WorkshopGridProps {
  workshops: Workshop[]
}

export function WorkshopGrid({ workshops }: WorkshopGridProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E4E2DE] via-[#D8D6D2] to-[#E4E2DE] py-20 md:py-28">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #1C1C1E 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <Building2 className="h-6 w-6 text-[#C8102E]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1C1C1E] md:text-4xl">All Workshops</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#C8102E] to-transparent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
