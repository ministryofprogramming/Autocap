'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface BenefitSectionProps {
  benefit: {
    id: number
    title: string
    description: string
  }
  index: number
}

export function BenefitSection({ benefit, index }: BenefitSectionProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })

  // Alternate background colors: even = Birch, odd = Linen White
  const bgColor = index % 2 === 0 ? 'bg-[#D8E4DC]' : 'bg-[#F5F0EB]'

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${bgColor} py-16 md:py-20`}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h3 className="mb-6 text-2xl font-semibold text-[#1C1C1E] md:text-3xl">
          {benefit.title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-700">{benefit.description}</p>
      </div>
    </motion.section>
  )
}
