import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Media · AutoCap Group',
  description: 'Press releases, acquisition announcements, and updates from AutoCap Group.',
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
