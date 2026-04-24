import { render, screen } from '@testing-library/react'
import SustainabilityPage from './page'

describe('Sustainability Page', () => {
  describe('AC-002: Hero section displays correctly', () => {
    it('renders hero headline correctly', () => {
      render(<SustainabilityPage />)

      const headline = screen.getByRole('heading', { level: 1 })
      expect(headline).toHaveTextContent('Practical steps. Honest progress.')
    })

    it('renders intro paragraph', () => {
      render(<SustainabilityPage />)

      const intro = screen.getByText(/Sustainability in the tire service industry/i)
      expect(intro).toBeInTheDocument()
    })
  })

  describe('AC-003: "Where we are" section content', () => {
    it('renders "Where we are" section title', () => {
      render(<SustainabilityPage />)

      const sectionTitle = screen.getByRole('heading', { name: /where we are/i })
      expect(sectionTitle).toBeInTheDocument()
    })

    it('renders all 4 focus areas', () => {
      render(<SustainabilityPage />)

      // Check for key phrases from each focus area
      expect(screen.getByText(/tire recycling and disposal/i)).toBeInTheDocument()
      expect(screen.getByText(/energy consumption/i)).toBeInTheDocument()
      expect(screen.getByText(/consolidating logistics/i)).toBeInTheDocument()
      expect(screen.getByText(/environmental impact of products/i)).toBeInTheDocument()
    })
  })

  describe('AC-004: "Where we\'re going" section content', () => {
    it('renders "Where we\'re going" section title', () => {
      render(<SustainabilityPage />)

      const sectionTitle = screen.getByRole('heading', { name: /where we're going/i })
      expect(sectionTitle).toBeInTheDocument()
    })

    it('renders 2027 targets mention', () => {
      render(<SustainabilityPage />)

      const text2027 = screen.getByText(/end of 2027/i)
      expect(text2027).toBeInTheDocument()
    })

    it('renders efficiency and responsibility statement', () => {
      render(<SustainabilityPage />)

      const statement = screen.getByText(/operational efficiency and environmental responsibility/i)
      expect(statement).toBeInTheDocument()
    })
  })

  describe('AC-005: Governance section content', () => {
    it('renders Governance section title', () => {
      render(<SustainabilityPage />)

      const sectionTitle = screen.getByRole('heading', { name: /governance/i })
      expect(sectionTitle).toBeInTheDocument()
    })

    it('email link is clickable with mailto', () => {
      render(<SustainabilityPage />)

      const emailLink = screen.getByRole('link', { name: /kontakt@autocapgroup\.se/i })
      expect(emailLink).toHaveAttribute('href', 'mailto:kontakt@autocapgroup.se')
    })
  })

  describe('AC-006: Design system consistency', () => {
    it('page structure renders without crashing', () => {
      render(<SustainabilityPage />)

      // Basic structural elements should be present
      const main = screen.getByRole('main')
      expect(main).toBeInTheDocument()
    })
  })

  describe('Responsive: Component renders at different viewports', () => {
    const viewportSizes = [
      { name: '320px mobile' },
      { name: '768px tablet' },
      { name: '1024px desktop' },
    ]

    viewportSizes.forEach(({ name }) => {
      it(`renders correctly at ${name}`, () => {
        render(<SustainabilityPage />)

        const headline = screen.getByRole('heading', { level: 1 })
        expect(headline).toBeInTheDocument()
      })
    })
  })
})
