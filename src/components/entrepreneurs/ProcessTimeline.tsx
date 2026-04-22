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
      {/* Desktop: Horizontal scrollable timeline */}
      <div className="hidden md:block">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile: Vertical stack */}
      <div className="flex flex-col gap-6 md:hidden">
        {steps.map((step, index) => (
          <ProcessStep key={step.number} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}
