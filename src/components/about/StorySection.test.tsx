import { render, screen } from '@testing-library/react'
import { StorySection } from './StorySection'

describe('StorySection Component', () => {
  const mockSection = {
    title: 'The model: local brands, central strength',
    paragraphs: [
      'AutoCap acquires workshops and keeps them operating under their own names.',
      'Behind the scenes, AutoCap provides what no independent workshop can build alone.',
      'This is not a franchise model. AutoCap acquires the business outright.',
    ],
  }

  describe('Content Rendering', () => {
    it('renders section title', () => {
      render(<StorySection {...mockSection} />)
      expect(screen.getByText(mockSection.title)).toBeInTheDocument()
    })

    it('renders all paragraphs', () => {
      render(<StorySection {...mockSection} />)
      mockSection.paragraphs.forEach((paragraph) => {
        expect(screen.getByText(paragraph)).toBeInTheDocument()
      })
    })

    it('renders correct number of paragraphs', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs).toHaveLength(mockSection.paragraphs.length)
    })
  })

  describe('Styling', () => {
    it('title uses large typography', () => {
      render(<StorySection {...mockSection} />)
      const title = screen.getByText(mockSection.title)
      expect(title).toHaveClass('text-3xl')
    })

    it('title is emphasized', () => {
      render(<StorySection {...mockSection} />)
      const title = screen.getByText(mockSection.title)
      expect(title).toHaveClass('font-black')
    })

    it('paragraphs have readable typography', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('text-lg')
      expect(paragraph).toHaveClass('leading-relaxed')
    })

    it('has proper spacing between paragraphs', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const paragraphContainer = container.querySelector('.space-y-6')
      expect(paragraphContainer).toBeInTheDocument()
    })

    it('has max-width container', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const contentContainer = container.querySelector('.max-w-4xl')
      expect(contentContainer).toBeInTheDocument()
    })

    it('has vertical padding', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const section = container.firstChild
      expect(section).toHaveClass('py-16')
    })
  })

  describe('Background Colors', () => {
    it('uses Linen White background by default', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const section = container.firstChild
      expect(section).toHaveClass('bg-[#F5F0EB]')
    })

    it('uses Linen White when explicitly specified', () => {
      const { container } = render(<StorySection {...mockSection} background="linen" />)
      const section = container.firstChild
      expect(section).toHaveClass('bg-[#F5F0EB]')
    })

    it('uses Dusk background when specified', () => {
      const { container } = render(<StorySection {...mockSection} background="dusk" />)
      const section = container.firstChild
      expect(section).toHaveClass('bg-[#EDE4D8]')
    })
  })

  describe('Responsive Design', () => {
    it('has responsive title sizing', () => {
      render(<StorySection {...mockSection} />)
      const title = screen.getByText(mockSection.title)
      expect(title).toHaveClass('md:text-4xl')
      expect(title).toHaveClass('lg:text-5xl')
    })

    it('has responsive paragraph sizing', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('md:text-xl')
    })

    it('has responsive padding', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const section = container.firstChild
      expect(section).toHaveClass('md:py-24')
    })

    it('has responsive title margin', () => {
      render(<StorySection {...mockSection} />)
      const title = screen.getByText(mockSection.title)
      expect(title).toHaveClass('md:mb-12')
    })
  })

  describe('Edge Cases', () => {
    it('handles single paragraph', () => {
      const singleParagraph = {
        title: 'Short section',
        paragraphs: ['Single paragraph content.'],
      }
      render(<StorySection {...singleParagraph} />)
      expect(screen.getByText('Single paragraph content.')).toBeInTheDocument()
    })

    it('handles long title', () => {
      const longTitle = {
        title: 'This is a very long section title that demonstrates how the component handles substantial heading text',
        paragraphs: mockSection.paragraphs,
      }
      render(<StorySection {...longTitle} />)
      expect(screen.getByText(longTitle.title)).toBeInTheDocument()
    })

    it('handles many paragraphs', () => {
      const manyParagraphs = {
        title: 'Multiple paragraphs',
        paragraphs: Array(10).fill('Lorem ipsum paragraph text.'),
      }
      const { container } = render(<StorySection {...manyParagraphs} />)
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs).toHaveLength(10)
    })
  })

  describe('Accessibility', () => {
    it('uses semantic section element', () => {
      const { container } = render(<StorySection {...mockSection} />)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })

    it('uses h2 heading', () => {
      render(<StorySection {...mockSection} />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
    })

    it('heading has accessible text', () => {
      render(<StorySection {...mockSection} />)
      const heading = screen.getByRole('heading', { name: mockSection.title })
      expect(heading).toBeInTheDocument()
    })
  })
})
