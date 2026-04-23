import { contactContent } from './contact'

describe('Contact Content', () => {
  it('has valid structure matching ContactContent interface', () => {
    expect(contactContent).toBeDefined()
    expect(contactContent.hero).toBeDefined()
    expect(contactContent.hero.title).toBe('Get in Touch')
    expect(contactContent.hero.description).toBeDefined()

    expect(contactContent.specializedCards).toHaveLength(2)

    const investorCard = contactContent.specializedCards[0]
    expect(investorCard.title).toContain('Investors')
    expect(investorCard.description).toBeDefined()
    expect(investorCard.ctaText).toBeDefined()
    expect(investorCard.ctaLink).toBe('/investors/contact')
    expect(investorCard.bgColor).toBeDefined()

    const entrepreneurCard = contactContent.specializedCards[1]
    expect(entrepreneurCard.title).toContain('Workshop Owners')
    expect(entrepreneurCard.description).toBeDefined()
    expect(entrepreneurCard.ctaText).toBeDefined()
    expect(entrepreneurCard.ctaLink).toBe('/entrepreneurs/contact')
    expect(entrepreneurCard.bgColor).toBeDefined()

    expect(contactContent.generalInquiry).toBeDefined()
    expect(contactContent.generalInquiry.title).toBe('General Inquiry')
    expect(contactContent.generalInquiry.successMessage).toBeDefined()

    expect(contactContent.companyInfo).toBeDefined()
    expect(contactContent.companyInfo.email).toBeDefined()
  })
})
