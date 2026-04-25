import { newsContent } from '@/content/news'
import { NewsCard } from '@/components/news/NewsCard'

export function LatestNewsStrip() {
  // Sort articles by publishDate descending and take first 3
  const latestArticles = [...newsContent.articles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3)

  return (
    <section className="w-full bg-[#F0DADA] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-[#1C1C1E] md:text-5xl lg:text-6xl">
            Latest News
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {latestArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
