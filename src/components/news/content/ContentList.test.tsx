import { render, screen } from '@testing-library/react'
import { ContentList } from './ContentList'

describe('ContentList', () => {
  const testItems = [
    'First list item',
    'Second list item',
    'Third list item',
  ]

  describe('Bullet lists', () => {
    it('renders as unordered list', () => {
      const { container } = render(<ContentList style="bullet" items={testItems} />)

      const ul = container.querySelector('ul')
      expect(ul).toBeInTheDocument()
    })

    it('renders all list items', () => {
      render(<ContentList style="bullet" items={testItems} />)

      testItems.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })

    it('applies custom bullet styling', () => {
      const { container } = render(<ContentList style="bullet" items={testItems} />)

      const ul = container.querySelector('ul')
      expect(ul).toHaveClass('list-disc')
    })
  })

  describe('Numbered lists', () => {
    it('renders as ordered list', () => {
      const { container } = render(<ContentList style="numbered" items={testItems} />)

      const ol = container.querySelector('ol')
      expect(ol).toBeInTheDocument()
    })

    it('renders all list items', () => {
      render(<ContentList style="numbered" items={testItems} />)

      testItems.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })

    it('applies numbered list styling', () => {
      const { container } = render(<ContentList style="numbered" items={testItems} />)

      const ol = container.querySelector('ol')
      expect(ol).toHaveClass('list-decimal')
    })
  })

  describe('Common styling', () => {
    it('applies vertical margin', () => {
      const { container } = render(<ContentList style="bullet" items={testItems} />)

      const list = container.querySelector('ul')
      expect(list).toHaveClass('my-6')
    })

    it('applies spacing between items', () => {
      const { container } = render(<ContentList style="bullet" items={testItems} />)

      const list = container.querySelector('ul')
      expect(list).toHaveClass('space-y-3')
    })

    it('applies text styling', () => {
      const { container } = render(<ContentList style="bullet" items={testItems} />)

      const list = container.querySelector('ul')
      expect(list).toHaveClass('text-lg')
      expect(list).toHaveClass('text-gray-700')
    })

    it('applies left padding', () => {
      const { container } = render(<ContentList style="bullet" items={testItems} />)

      const list = container.querySelector('ul')
      expect(list).toHaveClass('pl-6')
    })
  })

  it('handles empty items array', () => {
    const { container } = render(<ContentList style="bullet" items={[]} />)

    const list = container.querySelector('ul')
    expect(list).toBeInTheDocument()
    expect(list?.children.length).toBe(0)
  })

  it('handles single item', () => {
    render(<ContentList style="bullet" items={['Single item']} />)

    expect(screen.getByText('Single item')).toBeInTheDocument()
  })
})
