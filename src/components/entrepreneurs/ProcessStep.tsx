'use client'

import { motion } from 'framer-motion'
import { MessageCircle, FileText, FileSignature, Search, FileCheck, PartyPopper } from 'lucide-react'

interface ProcessStepProps {
  step: {
    number: number
    title: string
    description: string
    timeline: string
  }
  index: number
}

// Map step numbers to icons
const iconMap = {
  1: MessageCircle,
  2: FileText,
  3: FileSignature,
  4: Search,
  5: FileCheck,
  6: PartyPopper,
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  const Icon = iconMap[step.number as keyof typeof iconMap]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex min-w-[300px] flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:min-w-[340px]"
    >
      {/* Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8102E]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        {/* Icon Badge */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5F0EB] to-[#EDE8E3] shadow-md">
          <Icon className="h-8 w-8 text-[#C8102E]" strokeWidth={2} />
        </div>

        {/* Step Number */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E] shadow-md">
            <span className="text-xl font-bold text-white">{step.number}</span>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#C8102E] to-transparent" />
        </div>

        {/* Step Title */}
        <h3 className="mb-3 text-2xl font-bold text-[#1C1C1E]">{step.title}</h3>

        {/* Timeline Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C8102E]/10 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-[#C8102E]" />
          <span className="text-sm font-semibold text-[#C8102E]">{step.timeline}</span>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  )
}
