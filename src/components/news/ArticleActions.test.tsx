import { render, screen, fireEvent } from '@testing-library/react'
import { ArticleActions } from './ArticleActions'

// Mock window.print
global.print = jest.fn()

describe('ArticleActions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('displays Back to News link', () => {
    render(<ArticleActions />)

    const link = screen.getByRole('link', { name: /back to news/i })
    expect(link).toBeInTheDocument()
  })

  it('Back to News link navigates to /news', () => {
    render(<ArticleActions />)

    const link = screen.getByRole('link', { name: /back to news/i })
    expect(link).toHaveAttribute('href', '/news')
  })

  it('displays ArrowLeft icon', () => {
    const { container } = render(<ArticleActions />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('displays Print button', () => {
    render(<ArticleActions />)

    const button = screen.getByRole('button', { name: /print/i })
    expect(button).toBeInTheDocument()
  })

  it('triggers window.print when Print button is clicked', () => {
    render(<ArticleActions />)

    const button = screen.getByRole('button', { name: /print/i })
    fireEvent.click(button)

    expect(global.print).toHaveBeenCalledTimes(1)
  })

  it('applies AutoCap Red color to Back to News link', () => {
    render(<ArticleActions />)

    const link = screen.getByRole('link', { name: /back to news/i })
    expect(link).toHaveClass('text-[#C8102E]')
  })

  it('darkens Back to News link on hover', () => {
    render(<ArticleActions />)

    const link = screen.getByRole('link', { name: /back to news/i })
    expect(link).toHaveClass('hover:text-[#A00D24]')
  })

  it('applies flex layout with gap', () => {
    const { container } = render(<ArticleActions />)

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('flex')
    expect(wrapper).toHaveClass('gap-4')
  })

  it('applies vertical margin', () => {
    const { container } = render(<ArticleActions />)

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('my-8')
  })
})
