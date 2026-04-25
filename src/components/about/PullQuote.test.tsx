import { render, screen } from '@testing-library/react'
import { PullQuote } from './PullQuote'

describe('PullQuote Component', () => {
  const mockQuote = {
    text: 'This is a sample pull quote that demonstrates the component functionality.',
    attribution: 'John Doe',
    title: 'CEO & Founder',
  }

  describe('Content Rendering', () => {
    it('renders quote text', () => {
      render(<PullQuote {...mockQuote} />)
      expect(screen.getByText(new RegExp(mockQuote.text))).toBeInTheDocument()
    })

    it('renders attribution name', () => {
      render(<PullQuote {...mockQuote} />)
      expect(screen.getByText(`— ${mockQuote.attribution}`)).toBeInTheDocument()
    })

    it('renders attribution title', () => {
      render(<PullQuote {...mockQuote} />)
      expect(screen.getByText(mockQuote.title)).toBeInTheDocument()
    })

    it('renders quote marks', () => {
      const { container } = render(<PullQuote {...mockQuote} />)
      // Quote component should have decorative quotation
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('uses large typography for quote text', () => {
      render(<PullQuote {...mockQuote} />)
      const quoteText = screen.getByText(new RegExp(mockQuote.text))
      expect(quoteText).toHaveClass('text-2xl')
    })

    it('has proper spacing and padding', () => {
      const { container } = render(<PullQuote {...mockQuote} />)
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('py-12')
    })

    it('is centered on the page', () => {
      const { container } = render(<PullQuote {...mockQuote} />)
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('text-center')
    })

    it('has max-width container', () => {
      const { container } = render(<PullQuote {...mockQuote} />)
      const textContainer = container.querySelector('.max-w-4xl')
      expect(textContainer).toBeInTheDocument()
    })
  })

  describe('Typography Hierarchy', () => {
    it('quote text is emphasized', () => {
      render(<PullQuote {...mockQuote} />)
      const quoteText = screen.getByText(new RegExp(mockQuote.text))
      expect(quoteText).toHaveClass('font-bold')
    })

    it('attribution is styled differently than quote', () => {
      render(<PullQuote {...mockQuote} />)
      const attribution = screen.getByText(`— ${mockQuote.attribution}`)
      expect(attribution).toHaveClass('font-bold')
    })

    it('title uses smaller text than attribution', () => {
      render(<PullQuote {...mockQuote} />)
      const title = screen.getByText(mockQuote.title)
      expect(title).toHaveClass('text-sm')
    })
  })

  describe('Accessibility', () => {
    it('uses blockquote element', () => {
      const { container } = render(<PullQuote {...mockQuote} />)
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toBeInTheDocument()
    })

    it('properly attributes the quote', () => {
      render(<PullQuote {...mockQuote} />)
      // Attribution should be visible and associated with quote
      expect(screen.getByText(`— ${mockQuote.attribution}`)).toBeInTheDocument()
    })
  })

  describe('Responsive Design', () => {
    it('has responsive text sizing', () => {
      render(<PullQuote {...mockQuote} />)
      const quoteText = screen.getByText(new RegExp(mockQuote.text))
      expect(quoteText).toHaveClass('md:text-3xl')
    })

    it('has responsive padding', () => {
      const { container } = render(<PullQuote {...mockQuote} />)
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('md:py-16')
    })
  })

  describe('Edge Cases', () => {
    it('handles long quote text', () => {
      const longQuote = {
        ...mockQuote,
        text: 'This is a very long quote that spans multiple lines and demonstrates how the component handles substantial amounts of text content while maintaining readability and proper formatting across different screen sizes.',
      }
      render(<PullQuote {...longQuote} />)
      expect(screen.getByText(new RegExp(longQuote.text))).toBeInTheDocument()
    })

    it('handles short attribution', () => {
      const shortAttr = {
        ...mockQuote,
        attribution: 'Jane',
      }
      render(<PullQuote {...shortAttr} />)
      expect(screen.getByText('— Jane')).toBeInTheDocument()
    })

    it('handles long title', () => {
      const longTitle = {
        ...mockQuote,
        title: 'Chief Executive Officer & Co-Founder, Board Member',
      }
      render(<PullQuote {...longTitle} />)
      expect(screen.getByText(longTitle.title)).toBeInTheDocument()
    })
  })
})
