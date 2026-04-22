'use client'

import { motion } from 'framer-motion'

interface ProcessStepProps {
  step: {
    number: number
    title: string
    description: string
    timeline: string
  }
  index: number
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex min-w-[280px] flex-col rounded-lg bg-white p-6 shadow-sm md:min-w-[320px]"
    >
      {/* Step Number */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C8102E] text-xl font-bold text-white">
        {step.number}
      </div>

      {/* Step Title */}
      <h3 className="mb-3 text-xl font-semibold text-[#1C1C1E]">{step.title}</h3>

      {/* Timeline */}
      <p className="mb-4 text-sm font-medium text-[#C8102E]">{step.timeline}</p>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-700">{step.description}</p>
    </motion.div>
  )
}
