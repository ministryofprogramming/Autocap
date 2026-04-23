import { render, screen } from '@testing-library/react'
import { ContentCallout } from './ContentCallout'

describe('ContentCallout', () => {
  it('renders callout content', () => {
    render(<ContentCallout variant="info" content="This is important information." />)

    expect(screen.getByText('This is important information.')).toBeInTheDocument()
  })

  describe('Info variant', () => {
    it('applies Sage Green background', () => {
      const { container } = render(<ContentCallout variant="info" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('bg-[#D8E4DC]')
    })

    it('applies dark text color', () => {
      const { container } = render(<ContentCallout variant="info" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('text-[#1C1C1E]')
    })
  })

  describe('Highlight variant', () => {
    it('applies Ember background', () => {
      const { container } = render(<ContentCallout variant="highlight" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('bg-[#F0DADA]')
    })

    it('applies dark text color', () => {
      const { container} = render(<ContentCallout variant="highlight" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('text-[#1C1C1E]')
    })
  })

  describe('Common styling', () => {
    it('applies vertical margin', () => {
      const { container } = render(<ContentCallout variant="info" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('my-8')
    })

    it('applies padding', () => {
      const { container } = render(<ContentCallout variant="info" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('p-6')
    })

    it('applies rounded corners', () => {
      const { container } = render(<ContentCallout variant="info" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('rounded-lg')
    })

    it('applies border', () => {
      const { container } = render(<ContentCallout variant="info" content="Test" />)

      const callout = container.firstChild
      expect(callout).toHaveClass('border-l-4')
    })
  })

  it('handles long content', () => {
    const longContent = 'This is a very long callout message. '.repeat(5)
    render(<ContentCallout variant="info" content={longContent} />)

    expect(screen.getByText(/This is a very long callout message/)).toBeInTheDocument()
  })
})
