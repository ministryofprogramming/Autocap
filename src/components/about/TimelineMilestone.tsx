'use client'

import { Calendar, CheckCircle2, Radio, Target } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TimelineMilestoneProps {
  milestone: {
    year: string
    title: string
    description: string
    status: 'completed' | 'current' | 'future'
  }
  index?: number
  alignment?: 'left' | 'right'
}

export function TimelineMilestone({ milestone, alignment }: TimelineMilestoneProps) {
  const { year, title, description, status } = milestone

  // Icon configuration based on status
  const getBadgeIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2.5} data-lucide="check-circle-2" />
      case 'current':
        return <Radio className="h-6 w-6 text-white" strokeWidth={2.5} data-lucide="radio" />
      case 'future':
        return <Target className="h-6 w-6 text-gray-500" strokeWidth={2} data-lucide="target" />
      default:
        return <Calendar className="h-6 w-6 text-gray-400" />
    }
  }

  // Badge styling based on status
  const getBadgeClasses = () => {
    const baseClasses = 'relative flex h-16 w-16 flex-shrink-0 items-center justify-center'

    switch (status) {
      case 'completed':
        return cn(
          baseClasses,
          'milestone-badge',
          'completed'
        )
      case 'current':
        return cn(
          baseClasses,
          'milestone-badge',
          'current'
        )
      case 'future':
        return cn(
          baseClasses,
          'milestone-badge',
          'future',
          'border-dashed'
        )
      default:
        return baseClasses
    }
  }

  // Card styling based on status
  const getCardClasses = () => {
    const baseClasses = 'milestone-card rounded-2xl border p-6 transition-all duration-300 md:p-8'

    switch (status) {
      case 'completed':
        return cn(
          baseClasses,
          'border-gray-200 bg-white hover:-translate-y-1 hover:border-[#C8102E]/20 hover:shadow-lg'
        )
      case 'current':
        return cn(
          baseClasses,
          'border-[#C8102E]/30 bg-white hover:-translate-y-1 hover:border-[#C8102E]/50 hover:shadow-xl'
        )
      case 'future':
        return cn(
          baseClasses,
          'border-gray-300 border-dashed bg-white opacity-60'
        )
      default:
        return cn(baseClasses, 'border-gray-200 bg-white')
    }
  }

  // Wrapper alignment classes
  const getWrapperClasses = () => {
    if (!alignment) return 'relative'

    return cn(
      'relative flex',
      alignment === 'left' ? 'justify-start' : 'justify-end'
    )
  }

  return (
    <div className={getWrapperClasses()}>
      {/* Milestone Badge */}
      <div className={getBadgeClasses()} data-testid="milestone-badge">
        {/* COMPLETED STATE: 48px solid gradient circle (centered) */}
        {status === 'completed' && (
          <div className="absolute left-1/2 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#C8102E] to-[#A00D25]" />
        )}

        {/* CURRENT STATE: 48px solid gradient circle (centered) */}
        {status === 'current' && (
          <div className="absolute left-1/2 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#C8102E] to-[#A00D25]" />
        )}

        {/* FUTURE STATE: 48px dashed border circle (centered) */}
        {status === 'future' && (
          <div className="absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-400 bg-white" />
        )}

        {/* Icon Layer (always on top) - pulse animation only on current milestone icon */}
        <div className={cn('relative z-20', status === 'current' && 'animate-pulse')}>
          {getBadgeIcon()}
        </div>
      </div>

      {/* Milestone Card */}
      <div className={getCardClasses()}>
        {/* Year Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EDE4D8] px-4 py-2">
          <Calendar className="h-4 w-4 text-[#C8102E]" />
          <span className="text-sm font-semibold text-[#1C1C1E]">{year}</span>
        </div>

        {/* Title */}
        <h4 className="mb-3 text-xl font-bold text-[#1C1C1E] md:text-2xl">{title}</h4>

        {/* Description */}
        {description && (
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
