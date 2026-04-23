import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GeneralContactForm } from './GeneralContactForm'

describe('GeneralContactForm', () => {
  const mockSuccessMessage = "Thank you! We'll get back to you soon."

  beforeEach(() => {
    // Clear console.log mock before each test
    jest.spyOn(console, 'log').mockImplementation()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('AC-005: General Inquiry Form Display', () => {
    it('renders all required form fields with asterisks', () => {
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/agree.*privacy policy/i)).toBeInTheDocument()

      // Verify asterisks are present (look for required indicators)
      const labels = screen.getAllByText('*')
      expect(labels.length).toBeGreaterThanOrEqual(4) // All required fields
    })

    it('has submit button with correct text', () => {
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })
  })

  describe('AC-006: Required Fields Validation', () => {
    it('shows error when submitting with empty name', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        const errors = screen.getAllByText(/this field is required/i)
        expect(errors.length).toBeGreaterThan(0)
      })
    })

    it('shows errors for all empty required fields', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        const errors = screen.getAllByText(/this field is required/i)
        expect(errors.length).toBeGreaterThanOrEqual(3) // name, email, subject, message
      })
    })
  })

  describe('AC-007: Email Format Validation', () => {
    it('shows error for invalid email format', async () => {
      const user = userEvent.setup()
      const { container } = render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      // Fill all required fields except email is invalid
      await user.type(screen.getByLabelText(/^name/i), 'John Doe')
      const emailInput = screen.getByLabelText(/email/i)
      await user.clear(emailInput)
      await user.type(emailInput, 'invalid-email')
      await user.type(screen.getByLabelText(/subject/i), 'Test')
      await user.type(screen.getByLabelText(/message/i), 'Test message')
      await user.click(screen.getByLabelText(/agree.*privacy policy/i))

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      // Check for email validation error
      await waitFor(() => {
        const errorElements = container.querySelectorAll('.text-red-600')
        const hasEmailError = Array.from(errorElements).some(el =>
          el.textContent?.toLowerCase().includes('email')
        )
        expect(hasEmailError).toBe(true)
      })
    })

    it('accepts valid email format', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/subject/i)
      const messageInput = screen.getByLabelText(/message/i)
      const gdprCheckbox = screen.getByLabelText(/agree.*privacy policy/i)

      await user.type(nameInput, 'John Doe')
      await user.type(emailInput, 'john@example.com')
      await user.type(subjectInput, 'Test Subject')
      await user.type(messageInput, 'Test message content')
      await user.click(gdprCheckbox)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument()
      })
    })
  })

  describe('AC-008: GDPR Consent Validation', () => {
    it('shows error when GDPR consent not checked', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/subject/i)
      const messageInput = screen.getByLabelText(/message/i)

      await user.type(nameInput, 'John Doe')
      await user.type(emailInput, 'john@example.com')
      await user.type(subjectInput, 'Test')
      await user.type(messageInput, 'Test message')

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/you must agree to the privacy policy/i)).toBeInTheDocument()
      })
    })
  })

  describe('AC-009: Form Submission Success', () => {
    it('logs form data to console on successful submission', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log')
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/subject/i)
      const messageInput = screen.getByLabelText(/message/i)
      const gdprCheckbox = screen.getByLabelText(/agree.*privacy policy/i)

      await user.type(nameInput, 'John Doe')
      await user.type(emailInput, 'john@example.com')
      await user.type(subjectInput, 'Partnership')
      await user.type(messageInput, 'Interested in partnership')
      await user.click(gdprCheckbox)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(consoleLogSpy).toHaveBeenCalledWith(
          expect.stringContaining('General Contact Enquiry'),
          expect.objectContaining({
            data: expect.objectContaining({
              name: 'John Doe',
              email: 'john@example.com',
              subject: 'Partnership',
              message: 'Interested in partnership',
            }),
          }),
        )
      })
    })

    it('shows loading state during submission', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/subject/i)
      const messageInput = screen.getByLabelText(/message/i)
      const gdprCheckbox = screen.getByLabelText(/agree.*privacy policy/i)

      await user.type(nameInput, 'John Doe')
      await user.type(emailInput, 'john@example.com')
      await user.type(subjectInput, 'Test')
      await user.type(messageInput, 'Test message')
      await user.click(gdprCheckbox)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      // Should briefly show "Sending..."
      expect(screen.getByText(/sending/i)).toBeInTheDocument()
    })

    it('shows success message after submission', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      await user.type(screen.getByLabelText(/^name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/subject/i), 'Test')
      await user.type(screen.getByLabelText(/message/i), 'Test message')
      await user.click(screen.getByLabelText(/agree.*privacy policy/i))

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(
        () => {
          expect(screen.getByText(/thank you/i)).toBeInTheDocument()
          expect(screen.getByText(mockSuccessMessage)).toBeInTheDocument()
        },
        { timeout: 5000 },
      )
    })
  })

  describe('AC-010: Return to Form', () => {
    it('returns to empty form when "send another message" clicked', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      // Fill and submit form
      await user.type(screen.getByLabelText(/^name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/subject/i), 'Test')
      await user.type(screen.getByLabelText(/message/i), 'Test message')
      await user.click(screen.getByLabelText(/agree.*privacy policy/i))
      await user.click(screen.getByRole('button', { name: /send message/i }))

      // Wait for success message
      await waitFor(
        () => {
          expect(screen.getByText(/thank you/i)).toBeInTheDocument()
        },
        { timeout: 5000 },
      )

      // Click "send another message"
      const sendAnotherButton = screen.getByText(/send another message/i)
      await user.click(sendAnotherButton)

      // Form should be visible again with empty fields
      await waitFor(() => {
        expect(screen.getByLabelText(/^name/i)).toHaveValue('')
        expect(screen.getByLabelText(/email/i)).toHaveValue('')
        expect(screen.getByLabelText(/subject/i)).toHaveValue('')
        expect(screen.getByLabelText(/message/i)).toHaveValue('')
      })
    })
  })

  describe('AC-016: Keyboard Navigation', () => {
    it('allows tab navigation through form fields', async () => {
      const user = userEvent.setup()
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/subject/i)
      const messageInput = screen.getByLabelText(/message/i)
      const gdprCheckbox = screen.getByLabelText(/agree.*privacy policy/i)
      const submitButton = screen.getByRole('button', { name: /send message/i })

      nameInput.focus()
      expect(nameInput).toHaveFocus()

      await user.tab()
      expect(emailInput).toHaveFocus()

      await user.tab()
      expect(subjectInput).toHaveFocus()

      await user.tab()
      expect(messageInput).toHaveFocus()

      await user.tab()
      expect(gdprCheckbox).toHaveFocus()

      await user.tab()
      expect(submitButton).toHaveFocus()
    })
  })

  describe('AC-017: Screen Reader Support', () => {
    it('associates labels with form inputs', () => {
      render(<GeneralContactForm successMessage={mockSuccessMessage} />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/subject/i)
      const messageInput = screen.getByLabelText(/message/i)

      expect(nameInput).toHaveAttribute('id')
      expect(emailInput).toHaveAttribute('id')
      expect(subjectInput).toHaveAttribute('id')
      expect(messageInput).toHaveAttribute('id')
    })
  })
})
