'use client'

import { ProcessStep } from './ProcessStep'

interface ProcessTimelineProps {
  steps: Array<{
    number: number
    title: string
    description: string
    timeline: string
  }>
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop: Horizontal scrollable timeline with connecting line */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-[4.5rem] z-0 hidden h-1 xl:block">
            <div className="mx-auto flex h-full max-w-[calc(340px*6+24px*5)]">
              {steps.map((_, index) => (
                <div key={index} className="flex flex-1 items-center">
                  <div className="h-full w-full bg-gradient-to-r from-[#C8102E] to-[#C8102E]/40" />
                  {index < steps.length - 1 && <div className="w-6" />}
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="relative z-10 flex gap-6 overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical stack with connecting line */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 top-16 bottom-16 z-0 w-1 bg-gradient-to-b from-[#C8102E] via-[#C8102E]/60 to-[#C8102E]" />

          {/* Steps */}
          <div className="relative z-10 flex flex-col gap-8">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
