import { render, screen } from '@testing-library/react'
import EntrepreneursPage from './page'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} className={className} />
  },
}))

describe('Entrepreneurs Page', () => {
  describe('AC-001: Section Layout and Background', () => {
    it('renders testimonials section with Linen White background', () => {
      const { container } = render(<EntrepreneursPage />)

      // Find section with Linen White background
      const section = Array.from(container.querySelectorAll('section')).find((s) =>
        s.className.includes('bg-[#F5F0EB]'),
      )

      expect(section).toBeInTheDocument()
      expect(section?.className).toContain('bg-[#F5F0EB]')
    })
  })

  describe('AC-002: Section Header', () => {
    it('displays section header with decorative line', () => {
      render(<EntrepreneursPage />)

      // Should have "What Workshop Owners Say" heading
      expect(screen.getByText('What Workshop Owners Say')).toBeInTheDocument()

      // Heading should be h2
      const heading = screen.getByRole('heading', { name: 'What Workshop Owners Say' })
      expect(heading.tagName).toBe('H2')
      expect(heading.className).toContain('text-4xl')
      expect(heading.className).toContain('font-black')
      expect(heading.className).toContain('text-[#1C1C1E]')
    })
  })
})
