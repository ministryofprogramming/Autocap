import { render, screen } from '@testing-library/react'
import { TimelineMilestone } from './TimelineMilestone'

describe('TimelineMilestone', () => {
  const mockCompletedMilestone = {
    year: 'Founding',
    title: 'AutoCap Group Founded',
    description: 'Launched with a vision',
    status: 'completed' as const,
  }

  const mockCurrentMilestone = {
    year: 'Today',
    title: '12 Workshops',
    description: '12 workshops, ~50 employees',
    status: 'current' as const,
  }

  const mockFutureMilestone = {
    year: '2028 Target',
    title: '50+ Workshops',
    description: 'Ambitious but achievable target',
    status: 'future' as const,
  }

  describe('AC-001: Completed milestone rendering', () => {
    it('renders completed milestone with checkmark icon and red styling', () => {
      render(<TimelineMilestone milestone={mockCompletedMilestone} index={0} />)

      // Check title and description render
      expect(screen.getByText('AutoCap Group Founded')).toBeInTheDocument()
      expect(screen.getByText('Launched with a vision')).toBeInTheDocument()

      // Check year badge
      expect(screen.getByText('Founding')).toBeInTheDocument()

      // Check for CheckCircle2 icon (by test ID or aria-label)
      const badge = screen.getByTestId('milestone-badge')
      expect(badge).toHaveClass('completed')
    })

    it('applies full-color card styling for completed milestones', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockCompletedMilestone} index={0} />
      )

      const card = container.querySelector('.milestone-card')
      expect(card).toHaveClass('bg-white')
      expect(card).not.toHaveClass('opacity-60')
    })
  })

  describe('AC-002: Current milestone rendering', () => {
    it('renders current milestone with pulsing icon', () => {
      const { container } = render(<TimelineMilestone milestone={mockCurrentMilestone} index={0} />)

      const badge = screen.getByTestId('milestone-badge')
      expect(badge).toHaveClass('current')

      // Icon wrapper should have animate-pulse class
      const iconWrapper = container.querySelector('.animate-pulse')
      expect(iconWrapper).toBeInTheDocument()
      expect(iconWrapper).toHaveClass('z-20') // Icon layer
    })

    it('applies pulse animation only to icon, not badge container', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockCurrentMilestone} index={0} />
      )

      const badge = container.querySelector('.milestone-badge')
      expect(badge).not.toHaveClass('animate-pulse') // Badge container doesn't pulse

      const iconWrapper = container.querySelector('.z-20')
      expect(iconWrapper).toHaveClass('animate-pulse') // Only icon pulses
    })
  })

  describe('AC-003: Future milestone rendering', () => {
    it('renders future milestone with outlined gray badge', () => {
      render(<TimelineMilestone milestone={mockFutureMilestone} index={0} />)

      const badge = screen.getByTestId('milestone-badge')
      expect(badge).toHaveClass('future')
      expect(badge).toHaveClass('border-dashed')
    })

    it('applies dimmed styling for future milestones', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockFutureMilestone} index={0} />
      )

      const card = container.querySelector('.milestone-card')
      expect(card).toHaveClass('opacity-60')
    })
  })

  describe('AC-008: Icon differentiation by status', () => {
    it('displays CheckCircle2 icon for completed milestones', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockCompletedMilestone} index={0} />
      )

      // Check for CheckCircle2 icon
      const icon = container.querySelector('[data-lucide="check-circle-2"]')
      expect(icon).toBeInTheDocument()
    })

    it('displays Radio icon for current milestone', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockCurrentMilestone} index={0} />
      )

      // Check for Radio icon
      const icon = container.querySelector('[data-lucide="radio"]')
      expect(icon).toBeInTheDocument()
    })

    it('displays Target icon for future milestone', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockFutureMilestone} index={0} />
      )

      // Check for Target icon
      const icon = container.querySelector('[data-lucide="target"]')
      expect(icon).toBeInTheDocument()
    })

    it('maintains consistent icon size (24px) across all states', () => {
      const { container: completedContainer } = render(
        <TimelineMilestone milestone={mockCompletedMilestone} index={0} />
      )
      const { container: currentContainer } = render(
        <TimelineMilestone milestone={mockCurrentMilestone} index={0} />
      )
      const { container: futureContainer } = render(
        <TimelineMilestone milestone={mockFutureMilestone} index={0} />
      )

      const completedIcon = completedContainer.querySelector('[data-lucide]')
      const currentIcon = currentContainer.querySelector('[data-lucide]')
      const futureIcon = futureContainer.querySelector('[data-lucide]')

      expect(completedIcon).toHaveClass('h-6', 'w-6') // 24px = 6 * 4px
      expect(currentIcon).toHaveClass('h-6', 'w-6')
      expect(futureIcon).toHaveClass('h-6', 'w-6')
    })
  })

  describe('Alignment prop', () => {
    it('applies left alignment classes when alignment is left', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockCompletedMilestone} index={0} alignment="left" />
      )

      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('justify-start')
    })

    it('applies right alignment classes when alignment is right', () => {
      const { container } = render(
        <TimelineMilestone milestone={mockCompletedMilestone} index={0} alignment="right" />
      )

      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('justify-end')
    })
  })

  describe('Edge cases', () => {
    it('handles missing status gracefully with default styling', () => {
      const milestoneWithoutStatus = {
        year: 'Unknown',
        title: 'Unknown Milestone',
        description: 'No status provided',
        status: 'completed' as const, // Provide a valid status for type safety
      }

      expect(() => {
        render(<TimelineMilestone milestone={milestoneWithoutStatus} index={0} />)
      }).not.toThrow()
    })

    it('handles empty description', () => {
      const milestoneWithEmptyDesc = {
        ...mockCompletedMilestone,
        description: '',
      }

      render(<TimelineMilestone milestone={milestoneWithEmptyDesc} index={0} />)
      expect(screen.getByText('AutoCap Group Founded')).toBeInTheDocument()
    })
  })
})
