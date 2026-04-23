import { render } from '@testing-library/react'
import { testimonialsContent } from '@/content/testimonials'
import { TestimonialsSection } from './TestimonialsSection'

describe('TestimonialsSection', () => {
  describe('AC-003: Testimonial Grid Layout', () => {
    it('renders testimonials in responsive grid layout', () => {
      const { container } = render(<TestimonialsSection />)

      // Should have grid container
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()

      // Should have gap spacing
      expect(grid?.className).toMatch(/gap-/)

      // Should render all testimonials
      const articles = container.querySelectorAll('article')
      expect(articles).toHaveLength(testimonialsContent.testimonials.length)
    })
  })

  describe('AC-014: Responsive Design - Mobile', () => {
    it('renders single column layout on mobile', () => {
      const { container } = render(<TestimonialsSection />)

      const grid = container.querySelector('.grid')
      // Should have grid class
      expect(grid?.className).toContain('grid')
      // Should have responsive classes (not base columns)
      expect(grid?.className).toContain('md:grid-cols-2')
      expect(grid?.className).toContain('lg:grid-cols-3')
      // Mobile is default (single column), no explicit grid-cols-1 needed
    })
  })

  describe('AC-015: Responsive Design - Tablet', () => {
    it('renders two column layout on tablet', () => {
      const { container } = render(<TestimonialsSection />)

      const grid = container.querySelector('.grid')
      // Should have md:grid-cols-2
      expect(grid?.className).toContain('md:grid-cols-2')
    })
  })

  describe('AC-016: Responsive Design - Desktop', () => {
    it('renders three column layout on desktop', () => {
      const { container } = render(<TestimonialsSection />)

      const grid = container.querySelector('.grid')
      // Should have lg:grid-cols-3
      expect(grid?.className).toContain('lg:grid-cols-3')

      // Should have max-width constraint
      const containerElement = container.querySelector('[class*="max-w-"]')
      expect(containerElement).toBeInTheDocument()
    })
  })
})
