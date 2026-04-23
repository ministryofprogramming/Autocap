import Link from 'next/link'
import { ArrowLeft, Newspaper } from 'lucide-react'

export default function ArticleNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-gray-100 p-6">
            <Newspaper className="h-12 w-12 text-gray-400" />
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-black text-[#1C1C1E]">Article Not Found</h1>

        <p className="mb-8 text-lg text-gray-600">
          The article you're looking for doesn't exist or has been removed.
        </p>

        <Link
          href="/news"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to News & Media
        </Link>
      </div>
    </div>
  )
}
