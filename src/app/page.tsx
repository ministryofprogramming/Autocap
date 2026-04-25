import { Hero } from '@/components/home/Hero'
import { KpiTicker } from '@/components/home/KpiTicker'
import { AudienceCards } from '@/components/home/AudienceCards'
import { LatestNewsStrip } from '@/components/home/LatestNewsStrip'
import { CeoQuote } from '@/components/home/CeoQuote'
import { FooterCta } from '@/components/home/FooterCta'
import { homepageContent, audienceCards } from '@/content/homepage'

export default function HomePage() {
  return (
    <>
      <Hero {...homepageContent.hero} />
      <KpiTicker kpis={homepageContent.kpis} />
      <AudienceCards cards={audienceCards} />
      <LatestNewsStrip />
      <CeoQuote {...homepageContent.ceoQuote} />
      <FooterCta {...homepageContent.footerCta} />
    </>
  )
}
