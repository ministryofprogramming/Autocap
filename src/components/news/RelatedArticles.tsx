import { getRelatedArticles } from '@/content/news'
import { NewsCard } from './NewsCard'

interface RelatedArticlesProps {
  articleId: string
}

export function RelatedArticles({ articleId }: RelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(articleId, 3)

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#1C1C1E]">Related Reading</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
