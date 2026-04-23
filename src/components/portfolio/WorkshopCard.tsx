'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import type { Workshop } from '@/content/workshops'

interface WorkshopCardProps {
  workshop: Workshop
  index?: number
}

export function WorkshopCard({ workshop, index = 0 }: WorkshopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/portfolio/${workshop.slug}`}
        className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8102E]/20 hover:shadow-xl"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/0 to-[#C8102E]/0 opacity-0 transition-opacity duration-300 group-hover:from-[#C8102E]/5 group-hover:to-transparent group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">
          {/* Workshop Name */}
          <h3 className="mb-3 text-2xl font-bold text-[#1C1C1E] transition-colors group-hover:text-[#C8102E]">
            {workshop.name}
          </h3>

          {/* Location */}
          <div className="mb-6 flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-[#C8102E]" />
            <span className="text-base">
              {workshop.city}, {workshop.region}
            </span>
          </div>

          {/* Year Badge */}
          <div className="mt-auto flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F0EB] px-4 py-2">
              <Calendar className="h-4 w-4 text-[#C8102E]" />
              <span className="text-sm font-semibold text-[#1C1C1E]">
                Since {workshop.yearAcquired}
              </span>
            </div>

            {/* Arrow */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E]/10 transition-all duration-300 group-hover:bg-[#C8102E]">
              <ArrowRight className="h-5 w-5 text-[#C8102E] transition-colors group-hover:text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
