import { render, screen } from '@testing-library/react'
import InvestorsCasePage, { metadata } from './page'
import { investorsCaseContent } from '@/content/investors-case'

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  TrendingUp: () => <div data-testid="trending-up-icon" />,
  Target: () => <div data-testid="target-icon" />,
  Package: () => <div data-testid="package-icon" />,
  Zap: () => <div data-testid="zap-icon" />,
  BarChart3: () => <div data-testid="barchart3-icon" />,
  Network: () => <div data-testid="network-icon" />,
  Star: () => <div data-testid="star-icon" />,
  CheckCircle2: () => <div data-testid="check-circle-icon" />,
  Circle: () => <div data-testid="circle-icon" />,
}))

describe('Investors Case Page', () => {
  describe('AC-001: Hero section displays title and subtitle', () => {
    it('renders hero title from content', () => {
      render(<InvestorsCasePage />)
      const title = screen.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent(investorsCaseContent.hero.title)
    })

    it('renders hero subtitle from content', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText(investorsCaseContent.hero.subtitle!)).toBeInTheDocument()
    })

    it('renders TrendingUp icon in hero', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument()
    })

    it('has fjord gradient background in hero', () => {
      const { container } = render(<InvestorsCasePage />)
      const heroSection = container.querySelector('section')
      expect(heroSection).toHaveClass('bg-gradient-to-br', 'from-[#C9D8E8]')
    })
  })

  describe('AC-002: Market opportunity section with 3 paragraphs', () => {
    it('renders market opportunity heading', () => {
      render(<InvestorsCasePage />)
      expect(
        screen.getByRole('heading', { name: investorsCaseContent.marketOpportunity.title })
      ).toBeInTheDocument()
    })

    it('renders all 3 market opportunity paragraphs', () => {
      render(<InvestorsCasePage />)
      investorsCaseContent.marketOpportunity.paragraphs.forEach((paragraph) => {
        expect(screen.getByText(paragraph)).toBeInTheDocument()
      })
    })

    it('has exactly 3 paragraphs in market opportunity section', () => {
      const { container } = render(<InvestorsCasePage />)
      const paragraphs = container.querySelectorAll('p')
      const marketParagraphs = Array.from(paragraphs).filter((p) =>
        investorsCaseContent.marketOpportunity.paragraphs.some((text) =>
          p.textContent?.includes(text)
        )
      )
      expect(marketParagraphs).toHaveLength(3)
    })
  })

  describe('AC-003: Strategy section title', () => {
    it('renders strategy section heading', () => {
      render(<InvestorsCasePage />)
      expect(
        screen.getByRole('heading', { name: investorsCaseContent.strategy.title })
      ).toBeInTheDocument()
    })

    it('strategy section has correct wording', () => {
      render(<InvestorsCasePage />)
      expect(
        screen.getByText('The AutoCap Strategy — Six pillars of value creation')
      ).toBeInTheDocument()
    })
  })

  describe('AC-004: All 6 pillars rendered in grid', () => {
    it('renders all 6 pillar titles', () => {
      render(<InvestorsCasePage />)
      investorsCaseContent.strategy.pillars.forEach((pillar) => {
        expect(screen.getByText(pillar.title)).toBeInTheDocument()
      })
    })

    it('renders all 6 pillar descriptions', () => {
      render(<InvestorsCasePage />)
      investorsCaseContent.strategy.pillars.forEach((pillar) => {
        expect(screen.getByText(pillar.description)).toBeInTheDocument()
      })
    })

    it('renders Strategic Acquisitions pillar', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Strategic Acquisitions')).toBeInTheDocument()
    })

    it('renders Procurement Consolidation pillar', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Procurement Consolidation')).toBeInTheDocument()
    })

    it('renders Operational Efficiency pillar', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Operational Efficiency')).toBeInTheDocument()
    })

    it('renders Data & Analytics pillar', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Data & Analytics')).toBeInTheDocument()
    })

    it('renders Cross-Sell & Partnerships pillar', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Cross-Sell & Partnerships')).toBeInTheDocument()
    })

    it('renders Customer Experience pillar', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Customer Experience')).toBeInTheDocument()
    })
  })

  describe('AC-005: All 5 milestones rendered in timeline', () => {
    it('renders milestones section heading', () => {
      render(<InvestorsCasePage />)
      expect(
        screen.getByRole('heading', { name: investorsCaseContent.milestones.title })
      ).toBeInTheDocument()
    })

    it('renders all 5 milestone periods', () => {
      render(<InvestorsCasePage />)
      investorsCaseContent.milestones.items.forEach((milestone) => {
        expect(screen.getByText(milestone.period)).toBeInTheDocument()
      })
    })

    it('renders all 5 milestone descriptions', () => {
      render(<InvestorsCasePage />)
      investorsCaseContent.milestones.items.forEach((milestone) => {
        expect(screen.getByText(milestone.description)).toBeInTheDocument()
      })
    })

    it('renders H2 2025 milestone', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('H2 2025')).toBeInTheDocument()
      expect(
        screen.getByText('Platform established. Three founding acquisitions completed.')
      ).toBeInTheDocument()
    })

    it('renders Q1 2026 milestone', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Q1 2026')).toBeInTheDocument()
    })

    it('renders 2026 milestone', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('2026')).toBeInTheDocument()
    })

    it('renders 2027 milestone', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('2027')).toBeInTheDocument()
    })

    it('renders 2028 milestone', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('2028')).toBeInTheDocument()
    })
  })

  describe('AC-006: Disclaimer text below milestones', () => {
    it('renders disclaimer text', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText(/No EBITDA figures/)).toBeInTheDocument()
    })

    it('renders complete disclaimer from content', () => {
      render(<InvestorsCasePage />)
      const disclaimerElements = screen.getAllByText((content, element) => {
        return (
          element?.textContent?.includes(investorsCaseContent.milestones.disclaimer) || false
        )
      })
      expect(disclaimerElements.length).toBeGreaterThan(0)
    })

    it('disclaimer is styled with Note: prefix', () => {
      render(<InvestorsCasePage />)
      expect(screen.getByText('Note:')).toBeInTheDocument()
    })

    it('disclaimer is in a rounded gray box', () => {
      const { container } = render(<InvestorsCasePage />)
      const disclaimer = container.querySelector('.bg-gray-100')
      expect(disclaimer).toBeInTheDocument()
      expect(disclaimer).toHaveClass('rounded-2xl')
    })
  })

  describe('AC-007: Page metadata', () => {
    it('has correct page title', () => {
      expect(metadata.title).toBe(investorsCaseContent.metadata.title)
    })

    it('has correct page description', () => {
      expect(metadata.description).toBe(investorsCaseContent.metadata.description)
    })

    it('page title includes "Investment Case"', () => {
      expect(metadata.title).toContain('Investment Case')
    })

    it('page title includes "AutoCap Group"', () => {
      expect(metadata.title).toContain('AutoCap Group')
    })
  })

  describe('AC-008: Responsive design', () => {
    it('has responsive text sizing for hero title', () => {
      render(<InvestorsCasePage />)
      const heroTitle = screen.getByRole('heading', { level: 1 })
      expect(heroTitle).toHaveClass('text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl')
    })

    it('uses responsive grid for pillars', () => {
      const { container } = render(<InvestorsCasePage />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2')
    })

    it('has responsive padding for sections', () => {
      const { container } = render(<InvestorsCasePage />)
      const sections = container.querySelectorAll('section')
      // Skip hero section (first), check content sections
      const contentSections = Array.from(sections).slice(1)
      contentSections.forEach((section) => {
        expect(section.className).toMatch(/py-\d+/)
        expect(section.className).toMatch(/md:py-\d+/)
      })
    })

    it('has responsive max-width containers', () => {
      const { container } = render(<InvestorsCasePage />)
      const containers = container.querySelectorAll('.max-w-4xl, .max-w-5xl, .max-w-6xl')
      expect(containers.length).toBeGreaterThan(0)
    })
  })

  describe('Visual Design', () => {
    it('uses black headlines (font-black)', () => {
      const { container } = render(<InvestorsCasePage />)
      const headings = container.querySelectorAll('h1, h2')
      headings.forEach((heading) => {
        expect(heading).toHaveClass('font-black')
      })
    })

    it('has decorative red lines between sections', () => {
      const { container } = render(<InvestorsCasePage />)
      const decorativeLines = container.querySelectorAll('.bg-gradient-to-r')
      expect(decorativeLines.length).toBeGreaterThan(0)
    })

    it('alternates between fjord and white backgrounds', () => {
      const { container } = render(<InvestorsCasePage />)
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })
  })
})
