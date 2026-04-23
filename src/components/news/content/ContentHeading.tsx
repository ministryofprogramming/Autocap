interface ContentHeadingProps {
  level: 2 | 3
  content: string
  id?: string
}

export function ContentHeading({ level, content, id }: ContentHeadingProps) {
  const Tag = `h${level}` as 'h2' | 'h3'

  const classes =
    level === 2
      ? 'mt-16 mb-6 text-3xl font-bold text-[#1C1C1E]'
      : 'mt-12 mb-4 text-2xl font-bold text-[#1C1C1E]'

  return (
    <Tag id={id} className={classes}>
      {content}
    </Tag>
  )
}
