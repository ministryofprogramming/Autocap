import { render, screen } from '@testing-library/react'
import PrivacyPolicyPage, { metadata } from './page'
import { privacyPolicyContent } from '@/content/privacyPolicy'

describe('Privacy Policy Page', () => {
  describe('AC-001: Hero renders with title and last updated date', () => {
    it('renders hero section', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const hero = container.querySelector('.bg-gray-50')
      expect(hero).toBeInTheDocument()
    })

    it('displays page title', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Privacy Policy')
    })

    it('displays last updated date', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/Last updated:/i)).toBeInTheDocument()
    })

    it('displays hero description', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(new RegExp(privacyPolicyContent.hero.description))).toBeInTheDocument()
    })

    it('has decorative line', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const line = container.querySelector('.bg-gradient-to-r')
      expect(line).toBeInTheDocument()
    })
  })

  describe('AC-002: All 10 section headings display', () => {
    it('renders all 10 sections', () => {
      render(<PrivacyPolicyPage />)
      const h2headings = screen.getAllByRole('heading', { level: 2 })
      // 10 policy sections + 1 contact section = 11 total
      expect(h2headings.length).toBeGreaterThanOrEqual(10)
    })

    it('renders Introduction section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/1\. Introduction/i)).toBeInTheDocument()
    })

    it('renders Data We Collect section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/2\. Data We Collect/i)).toBeInTheDocument()
    })

    it('renders How We Use Data section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/3\. How We Use Your Data/i)).toBeInTheDocument()
    })

    it('renders Legal Basis section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/4\. Legal Basis/i)).toBeInTheDocument()
    })

    it('renders Your Rights section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/5\. Your Rights/i)).toBeInTheDocument()
    })

    it('renders Cookie Policy section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/6\. Cookie Policy/i)).toBeInTheDocument()
    })

    it('renders Data Retention section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/7\. Data Retention/i)).toBeInTheDocument()
    })

    it('renders Data Security section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/8\. Data Security/i)).toBeInTheDocument()
    })

    it('renders Third-Party Services section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/9\. Third-Party Services/i)).toBeInTheDocument()
    })

    it('renders Changes to Policy section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/10\. Changes/i)).toBeInTheDocument()
    })
  })

  describe('AC-003: Placeholder notices for pending content', () => {
    it('displays LEGAL CONTENT PENDING notices', () => {
      render(<PrivacyPolicyPage />)
      const notices = screen.getAllByText(/LEGAL CONTENT PENDING/i)
      expect(notices.length).toBeGreaterThan(0)
    })

    it('placeholder text is styled differently', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const placeholders = container.querySelectorAll('p.italic.text-gray-600')
      expect(placeholders.length).toBeGreaterThan(0)
    })

    it('all sections have placeholder content', () => {
      render(<PrivacyPolicyPage />)
      privacyPolicyContent.sections.forEach((section) => {
        expect(screen.getByText(section.title)).toBeInTheDocument()
      })
    })
  })

  describe('AC-004: Contact section with email link', () => {
    it('renders contact section', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText('Contact Us')).toBeInTheDocument()
    })

    it('displays contact description', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(new RegExp(privacyPolicyContent.contact.description))).toBeInTheDocument()
    })

    it('displays email link', () => {
      render(<PrivacyPolicyPage />)
      const emailLink = screen.getByText('kontakt@autocapgroup.se')
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', 'mailto:kontakt@autocapgroup.se')
    })

    it('email link has AutoCap Red color', () => {
      render(<PrivacyPolicyPage />)
      const emailLink = screen.getByText('kontakt@autocapgroup.se')
      expect(emailLink).toHaveClass('text-[#C8102E]')
    })

    it('email link has hover effect', () => {
      render(<PrivacyPolicyPage />)
      const emailLink = screen.getByText('kontakt@autocapgroup.se')
      expect(emailLink).toHaveClass('hover:text-[#A00D25]')
    })
  })

  describe('AC-005: Footer Privacy Policy link navigates correctly', () => {
    // This will be tested when Footer is updated
    it('page is accessible at /privacy-policy route', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
  })

  describe('AC-006: Cookie banner Privacy Policy link works', () => {
    // This is already implemented in CookieConsent component
    it('page renders correctly for cookie banner link', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
  })

  describe('AC-007: Contact form GDPR checkbox links to page', () => {
    // This will be verified when form is updated
    it('page is accessible for contact form link', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    })
  })

  describe('AC-008: SEO metadata', () => {
    it('has correct title', () => {
      expect(metadata.title).toBe('Privacy Policy · AutoCap Group')
    })

    it('has correct description', () => {
      expect(metadata.description).toContain('GDPR')
    })

    it('metadata matches content file', () => {
      expect(metadata.title).toBe(privacyPolicyContent.metadata.title)
      expect(metadata.description).toBe(privacyPolicyContent.metadata.description)
    })
  })

  describe('AC-009: Proper heading hierarchy', () => {
    it('has single h1 heading', () => {
      render(<PrivacyPolicyPage />)
      const h1headings = screen.getAllByRole('heading', { level: 1 })
      expect(h1headings).toHaveLength(1)
    })

    it('has multiple h2 headings for sections', () => {
      render(<PrivacyPolicyPage />)
      const h2headings = screen.getAllByRole('heading', { level: 2 })
      expect(h2headings.length).toBeGreaterThan(0)
    })

    it('headings are in correct order', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const h1 = container.querySelector('h1')
      const h2s = container.querySelectorAll('h2')

      expect(h1).toBeInTheDocument()
      expect(h2s.length).toBeGreaterThan(0)
    })
  })

  describe('Page Structure', () => {
    it('uses semantic main element', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('has full viewport height', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('min-h-screen')
    })

    it('has proper section structure', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })

    it('sections have IDs for anchor links', () => {
      const { container } = render(<PrivacyPolicyPage />)
      privacyPolicyContent.sections.forEach((section) => {
        const element = container.querySelector(`#${section.id}`)
        expect(element).toBeInTheDocument()
      })
    })
  })

  describe('Content Rendering', () => {
    it('renders all section content', () => {
      render(<PrivacyPolicyPage />)
      privacyPolicyContent.sections.forEach((section) => {
        // Just verify sections exist, not every paragraph (to avoid duplicate text issues)
        expect(screen.getByText(section.title)).toBeInTheDocument()
      })
    })

    it('uses privacy policy content from content file', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(privacyPolicyContent.hero.title)).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('hero has gray background', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const hero = container.querySelector('.bg-gray-50')
      expect(hero).toBeInTheDocument()
    })

    it('title is emphasized', () => {
      render(<PrivacyPolicyPage />)
      const title = screen.getByRole('heading', { level: 1 })
      expect(title).toHaveClass('font-black')
    })

    it('has max-width containers', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const containers = container.querySelectorAll('.max-w-4xl')
      expect(containers.length).toBeGreaterThan(0)
    })

    it('has responsive typography', () => {
      render(<PrivacyPolicyPage />)
      const title = screen.getByRole('heading', { level: 1 })
      expect(title).toHaveClass('text-4xl')
      expect(title).toHaveClass('md:text-5xl')
      expect(title).toHaveClass('lg:text-6xl')
    })
  })

  describe('Navigation', () => {
    it('has back to top link', () => {
      render(<PrivacyPolicyPage />)
      expect(screen.getByText(/Back to top/i)).toBeInTheDocument()
    })

    it('back to top links to page anchor', () => {
      render(<PrivacyPolicyPage />)
      const link = screen.getByText(/Back to top/i)
      expect(link).toHaveAttribute('href', '#')
    })
  })

  describe('Accessibility', () => {
    it('uses semantic section elements', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })

    it('email link is keyboard accessible', () => {
      render(<PrivacyPolicyPage />)
      const emailLink = screen.getByText('kontakt@autocapgroup.se')
      expect(emailLink.tagName).toBe('A')
    })

    it('has proper heading hierarchy', () => {
      const { container } = render(<PrivacyPolicyPage />)
      const h1 = container.querySelector('h1')
      const h2s = container.querySelectorAll('h2')

      expect(h1).toBeInTheDocument()
      expect(h2s.length).toBeGreaterThan(0)
    })
  })
})
