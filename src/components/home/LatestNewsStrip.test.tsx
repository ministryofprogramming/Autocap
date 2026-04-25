import { render, screen } from '@testing-library/react'
import { LatestNewsStrip } from './LatestNewsStrip'
import type { NewsArticle } from '@/content/news'

// Mock the NewsCard component
jest.mock('@/components/news/NewsCard', () => ({
  NewsCard: ({ article }: { article: NewsArticle }) => (
    <div data-testid="news-card">
      <h3>{article.title}</h3>
      <p>{article.publishDate}</p>
    </div>
  ),
}))

// Mock news content
jest.mock('@/content/news', () => ({
  newsContent: {
    articles: [
      {
        id: '1',
        title: 'Most Recent Article',
        publishDate: '2026-03-01',
        excerpt: 'Recent excerpt',
        slug: 'most-recent',
      },
      {
        id: '2',
        title: 'Second Recent Article',
        publishDate: '2026-02-15',
        excerpt: 'Second excerpt',
        slug: 'second-recent',
      },
      {
        id: '3',
        title: 'Third Recent Article',
        publishDate: '2026-02-01',
        excerpt: 'Third excerpt',
        slug: 'third-recent',
      },
      {
        id: '4',
        title: 'Older Article',
        publishDate: '2026-01-15',
        excerpt: 'Older excerpt',
        slug: 'older',
      },
      {
        id: '5',
        title: 'Oldest Article',
        publishDate: '2026-01-01',
        excerpt: 'Oldest excerpt',
        slug: 'oldest',
      },
    ],
  },
}))

describe('LatestNewsStrip', () => {
  describe('AC-001: Displays exactly 3 most recent articles sorted by date', () => {
    it('renders exactly 3 articles', () => {
      render(<LatestNewsStrip />)
      const newsCards = screen.getAllByTestId('news-card')
      expect(newsCards).toHaveLength(3)
    })

    it('displays articles sorted by publishDate descending', () => {
      render(<LatestNewsStrip />)
      const newsCards = screen.getAllByTestId('news-card')

      // First card should be most recent
      expect(newsCards[0]).toHaveTextContent('Most Recent Article')
      expect(newsCards[0]).toHaveTextContent('2026-03-01')

      // Second card should be second most recent
      expect(newsCards[1]).toHaveTextContent('Second Recent Article')
      expect(newsCards[1]).toHaveTextContent('2026-02-15')

      // Third card should be third most recent
      expect(newsCards[2]).toHaveTextContent('Third Recent Article')
      expect(newsCards[2]).toHaveTextContent('2026-02-01')
    })

    it('does not display older articles', () => {
      render(<LatestNewsStrip />)
      expect(screen.queryByText('Older Article')).not.toBeInTheDocument()
      expect(screen.queryByText('Oldest Article')).not.toBeInTheDocument()
    })
  })

  describe('AC-002: Uses Ember background color', () => {
    it('has Ember background (#F0DADA)', () => {
      const { container } = render(<LatestNewsStrip />)
      const section = container.firstChild
      expect(section).toHaveClass('bg-[#F0DADA]')
    })
  })

  describe('AC-003: Renders "Latest News" section heading', () => {
    it('displays "Latest News" heading', () => {
      render(<LatestNewsStrip />)
      expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
    })

    it('heading is h2 level', () => {
      render(<LatestNewsStrip />)
      const heading = screen.getByRole('heading', { name: /Latest News/i })
      expect(heading.tagName).toBe('H2')
    })

    it('heading has proper styling', () => {
      render(<LatestNewsStrip />)
      const heading = screen.getByRole('heading', { name: /Latest News/i })
      expect(heading).toHaveClass('font-black')
    })
  })

  describe('AC-004: Responsive grid layout (1/3 columns)', () => {
    it('has grid layout', () => {
      const { container } = render(<LatestNewsStrip />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })

    it('has 1 column on mobile, 3 columns on desktop', () => {
      const { container } = render(<LatestNewsStrip />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('grid-cols-1')
      expect(grid).toHaveClass('lg:grid-cols-3')
    })

    it('has appropriate gap spacing', () => {
      const { container } = render(<LatestNewsStrip />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('gap-6')
    })
  })

  describe('AC-005: Reuses tested NewsCard component', () => {
    it('imports and uses NewsCard component', () => {
      render(<LatestNewsStrip />)
      const newsCards = screen.getAllByTestId('news-card')
      expect(newsCards.length).toBeGreaterThan(0)
    })

    it('passes article data to NewsCard', () => {
      render(<LatestNewsStrip />)
      expect(screen.getByText('Most Recent Article')).toBeInTheDocument()
      expect(screen.getByText('Second Recent Article')).toBeInTheDocument()
      expect(screen.getByText('Third Recent Article')).toBeInTheDocument()
    })
  })

  describe('AC-006: Integrates seamlessly into homepage flow', () => {
    it('has full-width section', () => {
      const { container } = render(<LatestNewsStrip />)
      const section = container.firstChild
      expect(section).toHaveClass('w-full')
    })

    it('has appropriate vertical padding', () => {
      const { container } = render(<LatestNewsStrip />)
      const section = container.firstChild
      expect(section).toHaveClass('py-20')
    })

    it('has max-width container for content', () => {
      const { container } = render(<LatestNewsStrip />)
      const contentContainer = container.querySelector('.max-w-7xl')
      expect(contentContainer).toBeInTheDocument()
    })

    it('has horizontal padding for mobile', () => {
      const { container } = render(<LatestNewsStrip />)
      const contentContainer = container.querySelector('.max-w-7xl')
      expect(contentContainer).toHaveClass('px-6')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty articles array gracefully', () => {
      jest.resetModules()
      jest.doMock('@/content/news', () => ({
        newsContent: { articles: [] },
      }))

      const { container } = render(<LatestNewsStrip />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has semantic section element', () => {
      const { container } = render(<LatestNewsStrip />)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })

    it('has proper heading hierarchy', () => {
      render(<LatestNewsStrip />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
    })
  })
})
