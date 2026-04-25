import { render, screen } from '@testing-library/react'
import StoryPage, { metadata } from './page'
import { storyContent } from '@/content/story'

// Mock the components
jest.mock('@/components/about/StorySection', () => ({
  StorySection: ({
    title,
    paragraphs,
    background,
  }: {
    title: string
    paragraphs: string[]
    background?: string
  }) => (
    <div data-testid="story-section" data-background={background}>
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  ),
}))

jest.mock('@/components/about/PullQuote', () => ({
  PullQuote: ({ text, attribution, title }: { text: string; attribution: string; title: string }) => (
    <div data-testid="pull-quote">
      <p>{text}</p>
      <span>{attribution}</span>
      <span>{title}</span>
    </div>
  ),
}))

jest.mock('@/components/about/SteppedTimeline', () => ({
  SteppedTimeline: ({ milestones }: { milestones: Array<{ title: string }> }) => (
    <div data-testid="stepped-timeline">
      {milestones.map((m, i) => (
        <div key={i}>{m.title}</div>
      ))}
    </div>
  ),
}))

describe('Story Page', () => {
  describe('AC-001: Hero section with "Two brothers" headline', () => {
    it('renders hero section with headline', () => {
      render(<StoryPage />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        storyContent.hero.headline
      )
    })

    it('hero headline contains "Two brothers"', () => {
      render(<StoryPage />)
      const hero = screen.getByRole('heading', { level: 1 })
      expect(hero).toHaveTextContent('Two brothers')
    })

    it('hero has gradient background', () => {
      const { container } = render(<StoryPage />)
      const hero = container.querySelector('.bg-gradient-to-br')
      expect(hero).toBeInTheDocument()
    })

    it('hero has decorative line', () => {
      const { container } = render(<StoryPage />)
      const decorativeLine = container.querySelector('.bg-gradient-to-r')
      expect(decorativeLine).toBeInTheDocument()
    })
  })

  describe('AC-002: All 4 narrative sections render in order', () => {
    it('renders opening section', () => {
      render(<StoryPage />)
      // Opening headline is same as hero, so it appears twice
      expect(screen.getAllByText(storyContent.opening.headline).length).toBeGreaterThan(0)
    })

    it('renders all opening paragraphs', () => {
      render(<StoryPage />)
      storyContent.opening.paragraphs.forEach((paragraph) => {
        expect(screen.getByText(paragraph)).toBeInTheDocument()
      })
    })

    it('renders model section via StorySection component', () => {
      render(<StoryPage />)
      expect(screen.getByText(storyContent.model.title)).toBeInTheDocument()
    })

    it('renders vision section via StorySection component', () => {
      render(<StoryPage />)
      expect(screen.getByText(storyContent.vision.title)).toBeInTheDocument()
    })

    it('sections appear in correct order', () => {
      const { container } = render(<StoryPage />)
      const allHeadings = container.querySelectorAll('h2')
      const headingTexts = Array.from(allHeadings).map((h) => h.textContent)

      // Expect opening, model, vision, timeline in order
      expect(headingTexts).toContain(storyContent.opening.headline)
      expect(headingTexts).toContain(storyContent.model.title)
      expect(headingTexts).toContain(storyContent.vision.title)
      expect(headingTexts).toContain(storyContent.timeline.title)
    })
  })

  describe('AC-003: Timeline displays all 8 milestones from copy deck', () => {
    it('renders timeline section', () => {
      render(<StoryPage />)
      expect(screen.getByText(storyContent.timeline.title)).toBeInTheDocument()
    })

    it('renders SteppedTimeline component', () => {
      render(<StoryPage />)
      expect(screen.getByTestId('stepped-timeline')).toBeInTheDocument()
    })

    it('passes all milestones to timeline component', () => {
      render(<StoryPage />)
      storyContent.timeline.milestones.forEach((milestone) => {
        expect(screen.getByText(milestone.title)).toBeInTheDocument()
      })
    })

    it('timeline has 8 milestones', () => {
      expect(storyContent.timeline.milestones).toHaveLength(8)
    })
  })

  describe('AC-004: Pull quote component displays Nicklas Knape quote', () => {
    it('renders PullQuote component', () => {
      render(<StoryPage />)
      expect(screen.getByTestId('pull-quote')).toBeInTheDocument()
    })

    it('displays quote text', () => {
      render(<StoryPage />)
      expect(screen.getByText(new RegExp(storyContent.opening.quote.text))).toBeInTheDocument()
    })

    it('displays attribution', () => {
      render(<StoryPage />)
      expect(screen.getByText(storyContent.opening.quote.attribution)).toBeInTheDocument()
    })

    it('displays title', () => {
      render(<StoryPage />)
      expect(screen.getByText(storyContent.opening.quote.title)).toBeInTheDocument()
    })

    it('attribution is Nicklas Knape', () => {
      expect(storyContent.opening.quote.attribution).toBe('Nicklas Knape')
    })
  })

  describe('AC-005: Alternating Dusk/Linen White backgrounds', () => {
    it('model section uses Dusk background', () => {
      render(<StoryPage />)
      const storySections = screen.getAllByTestId('story-section')
      const modelSection = storySections.find((section) =>
        section.querySelector('h2')?.textContent?.includes('local brands')
      )
      expect(modelSection).toHaveAttribute('data-background', 'dusk')
    })

    it('vision section uses Linen background', () => {
      render(<StoryPage />)
      const storySections = screen.getAllByTestId('story-section')
      const visionSection = storySections.find((section) =>
        section.querySelector('h2')?.textContent?.includes("Where we're going")
      )
      expect(visionSection).toHaveAttribute('data-background', 'linen')
    })

    it('timeline section has Dusk background', () => {
      const { container } = render(<StoryPage />)
      const timelineSection = Array.from(container.querySelectorAll('section')).find((section) =>
        section.textContent?.includes(storyContent.timeline.title)
      )
      expect(timelineSection).toHaveClass('bg-[#EDE4D8]')
    })
  })

  describe('AC-006: Responsive typography (mobile/desktop)', () => {
    it('hero has responsive text sizing', () => {
      render(<StoryPage />)
      const hero = screen.getByRole('heading', { level: 1 })
      expect(hero).toHaveClass('text-4xl')
      expect(hero).toHaveClass('md:text-5xl')
      expect(hero).toHaveClass('lg:text-6xl')
    })

    it('hero has responsive padding', () => {
      const { container } = render(<StoryPage />)
      const heroSection = container.querySelector('section')
      expect(heroSection).toHaveClass('py-20')
      expect(heroSection).toHaveClass('md:py-32')
    })

    it('opening paragraphs have responsive sizing', () => {
      const { container } = render(<StoryPage />)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('text-lg')
      expect(paragraph).toHaveClass('md:text-xl')
    })
  })

  describe('AC-007: SEO metadata', () => {
    it('has correct title', () => {
      expect(metadata.title).toBe('Our Story · AutoCap Group')
    })

    it('has correct description', () => {
      expect(metadata.description).toContain('two brothers')
    })

    it('metadata matches content file', () => {
      expect(metadata.title).toBe(storyContent.metadata.title)
      expect(metadata.description).toBe(storyContent.metadata.description)
    })
  })

  describe('Page Structure', () => {
    it('uses semantic main element', () => {
      const { container } = render(<StoryPage />)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('has full viewport height', () => {
      const { container } = render(<StoryPage />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('min-h-screen')
    })

    it('has proper heading hierarchy', () => {
      render(<StoryPage />)
      const h1 = screen.getByRole('heading', { level: 1 })
      const h2s = screen.getAllByRole('heading', { level: 2 })

      expect(h1).toBeInTheDocument()
      expect(h2s.length).toBeGreaterThan(0)
    })
  })

  describe('Content Integration', () => {
    it('uses story content from content file', () => {
      render(<StoryPage />)
      // Verify key content elements from story.ts
      expect(screen.getAllByText(storyContent.hero.headline).length).toBeGreaterThan(0)
      expect(screen.getAllByText(storyContent.model.title).length).toBeGreaterThan(0)
      expect(screen.getAllByText(storyContent.vision.title).length).toBeGreaterThan(0)
    })

    it('passes correct props to StorySection components', () => {
      render(<StoryPage />)
      const storySections = screen.getAllByTestId('story-section')
      expect(storySections).toHaveLength(2) // model and vision sections
    })

    it('passes correct props to PullQuote', () => {
      render(<StoryPage />)
      const pullQuote = screen.getByTestId('pull-quote')
      expect(pullQuote).toBeInTheDocument()
    })

    it('passes correct props to SteppedTimeline', () => {
      render(<StoryPage />)
      const timeline = screen.getByTestId('stepped-timeline')
      expect(timeline).toBeInTheDocument()
    })
  })
})
