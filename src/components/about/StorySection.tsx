interface StorySectionProps {
  title: string
  paragraphs: string[]
  background?: 'dusk' | 'linen'
}

export function StorySection({
  title,
  paragraphs,
  background = 'linen',
}: StorySectionProps) {
  const bgColor = background === 'dusk' ? 'bg-[#EDE4D8]' : 'bg-[#F5F0EB]'

  return (
    <section className={`w-full ${bgColor} py-16 md:py-24`}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black text-[#1C1C1E] md:mb-12 md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
