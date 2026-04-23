import Image from 'next/image'

interface ContentImageProps {
  src: string
  alt: string
  caption?: string
  credit?: string
}

export function ContentImage({ src, alt, caption, credit }: ContentImageProps) {
  return (
    <figure className="my-12">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-3 text-center text-sm text-gray-600">
          {caption}
          {credit && <span className="block italic">Photo: {credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}
