import { render, screen } from '@testing-library/react'
import { RelatedArticles } from './RelatedArticles'

// Mock the getRelatedArticles helper
jest.mock('@/content/news', () => ({
  getRelatedArticles: jest.fn(),
}))

// Mock NewsCard component
jest.mock('./NewsCard', () => ({
  NewsCard: ({ article }: { article: { id: string; title: string } }) => (
    <div data-testid={`news-card-${article.id}`}>{article.title}</div>
  ),
}))

import { getRelatedArticles } from '@/content/news'

const mockGetRelatedArticles = getRelatedArticles as jest.MockedFunction<typeof getRelatedArticles>

describe('RelatedArticles', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('displays section header', () => {
    const mockArticles = [
      {
        id: 'news-002',
        title: 'Article 2',
        excerpt: 'Excerpt 2',
        publishDate: '2026-01-10',
        author: 'Author 2',
        category: 'Company News' as const,
        slug: 'article-2',
        readTimeMinutes: 5,
        order: 2,
      },
    ]

    mockGetRelatedArticles.mockReturnValue(mockArticles)

    render(<RelatedArticles articleId="news-001" />)

    expect(screen.getByText('Related Reading')).toBeInTheDocument()
  })

  it('renders related articles using NewsCard', () => {
    const mockArticles = [
      {
        id: 'news-002',
        title: 'Article 2',
        excerpt: 'Excerpt 2',
        publishDate: '2026-01-10',
        author: 'Author 2',
        category: 'Company News' as const,
        slug: 'article-2',
        readTimeMinutes: 5,
        order: 2,
      },
      {
        id: 'news-003',
        title: 'Article 3',
        excerpt: 'Excerpt 3',
        publishDate: '2026-01-05',
        author: 'Author 3',
        category: 'Press Release' as const,
        slug: 'article-3',
        readTimeMinutes: 4,
        order: 3,
      },
    ]

    mockGetRelatedArticles.mockReturnValue(mockArticles)

    render(<RelatedArticles articleId="news-001" />)

    expect(screen.getByTestId('news-card-news-002')).toBeInTheDocument()
    expect(screen.getByTestId('news-card-news-003')).toBeInTheDocument()
    expect(screen.getByText('Article 2')).toBeInTheDocument()
    expect(screen.getByText('Article 3')).toBeInTheDocument()
  })

  it('calls getRelatedArticles with correct article ID and limit', () => {
    mockGetRelatedArticles.mockReturnValue([])

    render(<RelatedArticles articleId="news-001" />)

    expect(mockGetRelatedArticles).toHaveBeenCalledWith('news-001', 3)
  })

  it('does not render when no related articles', () => {
    mockGetRelatedArticles.mockReturnValue([])

    const { container } = render(<RelatedArticles articleId="news-001" />)

    // Section should not be rendered when no articles
    const section = container.querySelector('section')
    expect(section).not.toBeInTheDocument()
  })

  it('applies responsive grid layout', () => {
    const mockArticles = [
      {
        id: 'news-002',
        title: 'Article 2',
        excerpt: 'Excerpt 2',
        publishDate: '2026-01-10',
        author: 'Author 2',
        category: 'Company News' as const,
        slug: 'article-2',
        readTimeMinutes: 5,
        order: 2,
      },
    ]

    mockGetRelatedArticles.mockReturnValue(mockArticles)

    const { container } = render(<RelatedArticles articleId="news-001" />)

    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toHaveClass('grid-cols-1')
    expect(grid).toHaveClass('md:grid-cols-2')
    expect(grid).toHaveClass('lg:grid-cols-3')
  })

  it('applies section spacing', () => {
    const mockArticles = [
      {
        id: 'news-002',
        title: 'Article 2',
        excerpt: 'Excerpt 2',
        publishDate: '2026-01-10',
        author: 'Author 2',
        category: 'Company News' as const,
        slug: 'article-2',
        readTimeMinutes: 5,
        order: 2,
      },
    ]

    mockGetRelatedArticles.mockReturnValue(mockArticles)

    const { container } = render(<RelatedArticles articleId="news-001" />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('py-16')
  })

  it('applies max-width container', () => {
    const mockArticles = [
      {
        id: 'news-002',
        title: 'Article 2',
        excerpt: 'Excerpt 2',
        publishDate: '2026-01-10',
        author: 'Author 2',
        category: 'Company News' as const,
        slug: 'article-2',
        readTimeMinutes: 5,
        order: 2,
      },
    ]

    mockGetRelatedArticles.mockReturnValue(mockArticles)

    const { container } = render(<RelatedArticles articleId="news-001" />)

    const contentContainer = container.querySelector('[class*="max-w"]')
    expect(contentContainer).toHaveClass('max-w-7xl')
  })
})
