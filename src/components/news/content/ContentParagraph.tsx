interface ContentParagraphProps {
  content: string
}

export function ContentParagraph({ content }: ContentParagraphProps) {
  return (
    <p className="mb-6 text-xl leading-relaxed text-gray-700">
      {content}
    </p>
  )
}
