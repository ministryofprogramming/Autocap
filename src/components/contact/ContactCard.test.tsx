import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactCard } from './ContactCard'

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode
    href: string
    className?: string
  }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('ContactCard', () => {
  const mockCardData = {
    title: 'For Investors',
    description: 'Learn about our investment case',
    ctaText: 'Investor Relations →',
    ctaLink: '/investors/contact',
    bgColor: 'bg-blue-100',
  }

  describe('AC-002: Specialized Contact Cards Display', () => {
    it('renders card with title, description, and CTA', () => {
      render(<ContactCard {...mockCardData} />)

      expect(screen.getByText('For Investors')).toBeInTheDocument()
      expect(screen.getByText('Learn about our investment case')).toBeInTheDocument()
      expect(screen.getByText('Investor Relations →')).toBeInTheDocument()
    })

    it('applies correct background color class', () => {
      render(<ContactCard {...mockCardData} />)
      const link = screen.getByRole('link')
      // Verify the link has the expected bg class
      expect(link).toHaveAttribute('class')
      const classes = link.getAttribute('class') || ''
      expect(classes).toContain('bg-blue-100')
    })
  })

  describe('AC-003: Navigation to Investor Contact Page', () => {
    it('has correct href for investor contact link', () => {
      render(<ContactCard {...mockCardData} />)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/investors/contact')
    })
  })

  describe('AC-004: Navigation to Entrepreneur Contact Page', () => {
    it('has correct href for entrepreneur contact link', () => {
      const entrepreneurCard = {
        ...mockCardData,
        title: 'For Workshop Owners',
        ctaLink: '/entrepreneurs/contact',
      }
      render(<ContactCard {...entrepreneurCard} />)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/entrepreneurs/contact')
    })
  })

  it('is clickable as a whole card', async () => {
    const user = userEvent.setup()
    render(<ContactCard {...mockCardData} />)

    const card = screen.getByRole('link')
    expect(card).toBeInTheDocument()

    // Simulate click
    await user.click(card)
    // Navigation would happen via Next.js Link (mocked above)
  })
})
