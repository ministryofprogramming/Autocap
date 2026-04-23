import { render, screen } from '@testing-library/react'
import { ContentQuote } from './ContentQuote'

describe('ContentQuote', () => {
  it('renders quote content', () => {
    render(<ContentQuote content="This is a test quote." />)

    expect(screen.getByText(/This is a test quote/)).toBeInTheDocument()
  })

  it('uses blockquote element for semantic HTML', () => {
    const { container } = render(<ContentQuote content="Test quote" />)

    const blockquote = container.querySelector('blockquote')
    expect(blockquote).toBeInTheDocument()
  })

  it('renders attribution when provided', () => {
    render(
      <ContentQuote content="Test quote" attribution="John Doe" />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders role when provided', () => {
    render(
      <ContentQuote
        content="Test quote"
        attribution="Jane Smith"
        role="CEO, AutoCap Group"
      />
    )

    expect(screen.getByText('CEO, AutoCap Group')).toBeInTheDocument()
  })

  it('renders attribution without role', () => {
    render(<ContentQuote content="Test" attribution="Author Name" />)

    expect(screen.getByText('Author Name')).toBeInTheDocument()
  })

  it('renders quote without attribution', () => {
    render(<ContentQuote content="Anonymous quote" />)

    expect(screen.getByText(/Anonymous quote/)).toBeInTheDocument()
    const attribution = screen.queryByRole('heading', { level: 4 })
    expect(attribution).not.toBeInTheDocument()
  })

  it('applies Linen White gradient background', () => {
    const { container } = render(<ContentQuote content="Test" />)

    const wrapper = container.querySelector('[class*="bg-gradient"]')
    expect(wrapper).toBeInTheDocument()
  })

  it('applies vertical margin', () => {
    const { container } = render(<ContentQuote content="Test" />)

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('my-12')
  })

  it('applies rounded corners and padding', () => {
    const { container } = render(<ContentQuote content="Test" />)

    const wrapper = container.querySelector('[class*="rounded"]')
    expect(wrapper).toHaveClass('rounded-xl')
    expect(wrapper).toHaveClass('p-8')
  })
})
