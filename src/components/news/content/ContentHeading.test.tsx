import { render, screen } from '@testing-library/react'
import { ContentHeading } from './ContentHeading'

describe('ContentHeading', () => {
  describe('Level 2 headings', () => {
    it('renders as h2 element', () => {
      render(<ContentHeading level={2} content="Section Heading" />)

      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Section Heading')
    })

    it('applies h2 specific styling', () => {
      render(<ContentHeading level={2} content="Test Heading" />)

      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass('text-3xl')
      expect(heading).toHaveClass('font-bold')
      expect(heading).toHaveClass('mt-16')
      expect(heading).toHaveClass('mb-6')
    })

    it('includes id attribute when provided', () => {
      render(<ContentHeading level={2} content="Test" id="test-section" />)

      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveAttribute('id', 'test-section')
    })
  })

  describe('Level 3 headings', () => {
    it('renders as h3 element', () => {
      render(<ContentHeading level={3} content="Subsection Heading" />)

      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Subsection Heading')
    })

    it('applies h3 specific styling', () => {
      render(<ContentHeading level={3} content="Test Heading" />)

      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toHaveClass('text-2xl')
      expect(heading).toHaveClass('font-bold')
      expect(heading).toHaveClass('mt-12')
      expect(heading).toHaveClass('mb-4')
    })
  })

  it('applies Nordic Black color', () => {
    render(<ContentHeading level={2} content="Test" />)

    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass('text-[#1C1C1E]')
  })

  it('works without id attribute', () => {
    render(<ContentHeading level={2} content="No ID Heading" />)

    const heading = screen.getByRole('heading')
    expect(heading).not.toHaveAttribute('id')
  })
})
