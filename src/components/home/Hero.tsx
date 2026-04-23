'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  headline: string
  subheadline: string
  backgroundImage: string
  cta1Text: string
  cta1Link: string
  cta2Text: string
  cta2Link: string
}

export function Hero({
  headline,
  subheadline,
  backgroundImage,
  cta1Text,
  cta1Link,
  cta2Text,
  cta2Link,
}: HeroProps) {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Workshop background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mb-6 text-6xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            {headline}
          </h1>

          {/* Decorative Line */}
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-200 sm:text-2xl md:leading-relaxed">
            {subheadline}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              href={cta1Link}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105"
            >
              {cta1Text}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={cta2Link}
              className="group inline-flex items-center gap-3 rounded-xl border-2 border-white bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              {cta2Text}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
