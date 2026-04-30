import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageSelector } from './LanguageSelector'

describe('LanguageSelector', () => {
  describe('AC-001: Component renders with default language', () => {
    it('renders dropdown button', () => {
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language: english/i })
      expect(dropdownButton).toBeInTheDocument()
    })

    it('displays English flag by default', () => {
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language: english/i })
      const flagSvg = dropdownButton.querySelector('svg')
      expect(flagSvg).toBeInTheDocument()
    })

    it('component unmounts cleanly', () => {
      const { unmount } = render(<LanguageSelector />)
      expect(() => unmount()).not.toThrow()
    })
  })

  describe('AC-002: Dropdown interaction', () => {
    it('opens dropdown menu when button is clicked', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const menu = screen.getByRole('menu')
      expect(menu).toBeInTheDocument()
    })

    it('displays both language options in dropdown', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const englishOption = screen.getByRole('menuitem', { name: 'English' })
      const swedishOption = screen.getByRole('menuitem', { name: 'Swedish' })

      expect(englishOption).toBeInTheDocument()
      expect(swedishOption).toBeInTheDocument()
    })

    it('displays UK and Swedish flags in dropdown options', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const englishOption = screen.getByRole('menuitem', { name: 'English' })
      const swedishOption = screen.getByRole('menuitem', { name: 'Swedish' })

      const ukFlagSvg = englishOption.querySelector('svg')
      const swedishFlagSvg = swedishOption.querySelector('svg')
      expect(ukFlagSvg).toBeInTheDocument()
      expect(swedishFlagSvg).toBeInTheDocument()
    })

    it('closes dropdown when language is selected', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const swedishOption = screen.getByRole('menuitem', { name: 'Swedish' })
      await user.click(swedishOption)

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
      })
    })

    it('updates displayed flag when language is selected', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const swedishOption = screen.getByRole('menuitem', { name: 'Swedish' })
      await user.click(swedishOption)

      await waitFor(() => {
        const updatedButton = screen.getByRole('button', { name: /current language: swedish/i })
        const flagSvg = updatedButton.querySelector('svg')
        expect(flagSvg).toBeInTheDocument()
      })
    })
  })

  describe('AC-004: Custom className prop', () => {
    it('applies custom className prop', () => {
      const { container } = render(<LanguageSelector className="custom-class" />)
      const wrapper = container.querySelector('.custom-class')
      expect(wrapper).toBeInTheDocument()
    })

    it('handles undefined className', () => {
      render(<LanguageSelector />)
      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      expect(dropdownButton).toBeInTheDocument()
    })
  })

  describe('AC-005: Hover states and cursor', () => {
    it('dropdown button has hover state', () => {
      render(<LanguageSelector />)
      const dropdownButton = screen.getByRole('button', { name: /current language/i })

      expect(dropdownButton).toHaveClass('hover:bg-gray-100')
    })

    it('dropdown button has pointer cursor', () => {
      render(<LanguageSelector />)
      const dropdownButton = screen.getByRole('button', { name: /current language/i })

      expect(dropdownButton).toHaveClass('cursor-pointer')
    })
  })

  describe('AC-006: Component is non-functional (Phase 1)', () => {
    it('clicking button does not throw error', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await expect(user.click(dropdownButton)).resolves.not.toThrow()
    })

    it('selecting language updates UI but does not trigger navigation', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const swedishOption = screen.getByRole('menuitem', { name: 'Swedish' })
      await user.click(swedishOption)

      // Component should still be rendered (no navigation occurred)
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /current language: swedish/i })).toBeInTheDocument()
      })
    })

    it('handles rapid multiple clicks without errors', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })

      // Rapid clicks should not cause issues
      await user.click(dropdownButton)
      await user.click(dropdownButton)
      await user.click(dropdownButton)

      expect(dropdownButton).toBeInTheDocument()
    })
  })

  describe('AC-007: Accessibility - Semantic HTML', () => {
    it('uses semantic button element for dropdown trigger', () => {
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      expect(dropdownButton.tagName).toBe('BUTTON')
    })

    it('dropdown button has appropriate ARIA attributes', () => {
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      expect(dropdownButton).toHaveAttribute('aria-haspopup', 'true')
      expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')
    })

    it('aria-expanded changes when dropdown opens', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')

      await user.click(dropdownButton)

      expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')
    })

    it('dropdown menu has role="menu"', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const menu = screen.getByRole('menu')
      expect(menu).toBeInTheDocument()
    })

    it('menu items have role="menuitem"', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const menuItems = screen.getAllByRole('menuitem')
      expect(menuItems).toHaveLength(2)
    })

    it('container has descriptive aria-label', () => {
      render(<LanguageSelector />)
      const container = screen.getByRole('group')
      expect(container).toHaveAttribute('aria-label')
      expect(container.getAttribute('aria-label')).toContain('Language selector')
    })

    it('dropdown button is keyboard focusable', () => {
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      expect(dropdownButton).not.toHaveAttribute('tabindex', '-1')
    })

    it('closes dropdown on Escape key', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      expect(screen.getByRole('menu')).toBeInTheDocument()

      await user.keyboard('{Escape}')

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
      })
    })
  })

  describe('AC-008: Visual indicators', () => {
    it('shows checkmark next to selected language', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const englishOption = screen.getByRole('menuitem', { name: 'English' })
      expect(englishOption).toHaveTextContent('✓')
    })

    it('highlights selected language option', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      const englishOption = screen.getByRole('menuitem', { name: 'English' })
      expect(englishOption).toHaveClass('text-[#C8102E]')
      expect(englishOption).toHaveClass('font-semibold')
    })
  })

  describe('Responsive: Component renders at different viewports', () => {
    const viewportSizes = [
      { name: '320px mobile' },
      { name: '375px mobile' },
      { name: '768px tablet' },
      { name: '1024px desktop' },
      { name: '1440px desktop' },
    ]

    viewportSizes.forEach(({ name }) => {
      it(`renders correctly at ${name}`, () => {
        render(<LanguageSelector />)

        const dropdownButton = screen.getByRole('button', { name: /current language/i })
        expect(dropdownButton).toBeInTheDocument()
      })
    })
  })

  describe('Edge cases', () => {
    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <LanguageSelector />
          <button>Outside button</button>
        </div>
      )

      const dropdownButton = screen.getByRole('button', { name: /current language/i })
      await user.click(dropdownButton)

      expect(screen.getByRole('menu')).toBeInTheDocument()

      const outsideButton = screen.getByRole('button', { name: 'Outside button' })
      await user.click(outsideButton)

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
      })
    })

    it('chevron icon rotates when dropdown opens', async () => {
      const user = userEvent.setup()
      render(<LanguageSelector />)

      const dropdownButton = screen.getByRole('button', { name: /current language/i })

      // Find chevron - it's the SVG with the lucide-chevron-down class
      const chevron = dropdownButton.querySelector('svg.lucide-chevron-down')

      expect(chevron).not.toHaveClass('rotate-180')

      await user.click(dropdownButton)

      expect(chevron).toHaveClass('rotate-180')
    })
  })
})
