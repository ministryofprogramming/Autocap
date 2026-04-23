interface ContentListProps {
  style: 'bullet' | 'numbered'
  items: string[]
}

export function ContentList({ style, items }: ContentListProps) {
  const ListTag = style === 'bullet' ? 'ul' : 'ol'
  const listStyleClass = style === 'bullet' ? 'list-disc' : 'list-decimal'

  return (
    <ListTag className={`my-6 space-y-3 pl-6 text-lg text-gray-700 ${listStyleClass}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  )
}
