import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/layout/BackToTop'
import { CookieConsent } from '@/components/cookie/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AutoCap Group · The Nordic Tire Services Platform',
  description:
    'AutoCap Group acquires and operates independent tire service centres across Sweden. Preserving local brands. Empowering entrepreneurs. Building scale.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  )
}
