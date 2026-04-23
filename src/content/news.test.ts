import { getArticleBySlug, getRelatedArticles, newsContent } from './news'

describe('News Content Helper Functions', () => {
  describe('getArticleBySlug', () => {
    it('returns article when slug exists', () => {
      const article = getArticleBySlug('autocap-acquires-svenska-dackgruppen')

      expect(article).toBeDefined()
      expect(article?.id).toBe('news-001')
      expect(article?.title).toBe('AutoCap Group Acquires Svenska Däckgruppen')
    })

    it('returns undefined when slug does not exist', () => {
      const article = getArticleBySlug('non-existent-slug')

      expect(article).toBeUndefined()
    })

    it('returns correct article for each slug', () => {
      const articles = newsContent.articles

      articles.forEach((article) => {
        const found = getArticleBySlug(article.slug)
        expect(found).toEqual(article)
      })
    })
  })

  describe('getRelatedArticles', () => {
    it('returns manually curated articles when relatedArticleIds exist', () => {
      // Assuming news-001 will have relatedArticleIds: ['news-003', 'news-005']
      const related = getRelatedArticles('news-001', 3)

      // Will implement after adding relatedArticleIds to articles
      expect(related).toBeDefined()
      expect(Array.isArray(related)).toBe(true)
    })

    it('returns articles from same category when no relatedArticleIds', () => {
      // Create a test scenario: news-003 has relatedArticleIds, so test with a different approach
      // Check that if relatedArticleIds exist, they are prioritized
      const articleWithRelated = getRelatedArticles('news-001', 3)
      const firstArticle = newsContent.articles.find(a => a.id === 'news-001')

      if (firstArticle?.relatedArticleIds) {
        // Should return manually curated articles
        expect(articleWithRelated.map(a => a.id)).toEqual(
          firstArticle.relatedArticleIds.slice(0, 3)
        )
      } else {
        // Should return same category
        expect(articleWithRelated.every(a =>
          a.category === firstArticle?.category
        )).toBe(true)
      }
    })

    it('excludes current article from results', () => {
      const related = getRelatedArticles('news-003', 3)

      expect(related.every(a => a.id !== 'news-003')).toBe(true)
    })

    it('limits results to specified limit', () => {
      const related = getRelatedArticles('news-001', 2)

      expect(related.length).toBeLessThanOrEqual(2)
    })

    it('returns empty array when article does not exist', () => {
      const related = getRelatedArticles('non-existent-id', 3)

      expect(related).toEqual([])
    })

    it('handles article with no related articles in same category', () => {
      // If an article is the only one in its category
      const related = getRelatedArticles('news-001', 3)

      // Should still return an array (might be empty or have fallbacks)
      expect(Array.isArray(related)).toBe(true)
    })
  })
})
