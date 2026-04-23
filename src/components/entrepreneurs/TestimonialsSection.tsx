import { testimonialsContent } from '@/content/testimonials'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialsSection() {
  return (
    <section className="bg-[#F5F0EB] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <h2 className="mb-6 text-center text-4xl font-black text-[#1C1C1E] md:text-5xl">
          What Workshop Owners Say
        </h2>

        {/* Decorative Line */}
        <div className="mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsContent.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
