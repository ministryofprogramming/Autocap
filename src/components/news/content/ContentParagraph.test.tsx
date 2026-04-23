import { render, screen } from '@testing-library/react'
import { ContentParagraph } from './ContentParagraph'

describe('ContentParagraph', () => {
  it('renders paragraph text', () => {
    render(<ContentParagraph content="This is a test paragraph." />)

    expect(screen.getByText('This is a test paragraph.')).toBeInTheDocument()
  })

  it('applies correct typography classes', () => {
    const { container } = render(<ContentParagraph content="Test content" />)

    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass('text-xl')
    expect(paragraph).toHaveClass('leading-relaxed')
    expect(paragraph).toHaveClass('text-gray-700')
  })

  it('applies bottom margin', () => {
    const { container } = render(<ContentParagraph content="Test content" />)

    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass('mb-6')
  })

  it('handles long content', () => {
    const longContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10)
    render(<ContentParagraph content={longContent} />)

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('handles empty content gracefully', () => {
    render(<ContentParagraph content="" />)

    const paragraph = screen.queryByRole('paragraph')
    expect(paragraph).toBeInTheDocument()
  })
})
