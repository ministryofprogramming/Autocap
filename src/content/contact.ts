/**
 * Main Contact Page Content
 */

export interface ContactCardData {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  bgColor: string
}

export interface CompanyContactInfo {
  email: string
  address?: string
  businessHours?: string
}

export interface ContactContent {
  hero: {
    title: string
    description: string
  }
  specializedCards: ContactCardData[]
  generalInquiry: {
    title: string
    successMessage: string
  }
  companyInfo: CompanyContactInfo
}

export const contactContent: ContactContent = {
  hero: {
    title: 'Get in Touch',
    description:
      "Whether you're an investor, a workshop owner, or have a general inquiry, we'd love to hear from you.",
  },
  specializedCards: [
    {
      title: 'For Investors',
      description:
        'Interested in the AutoCap opportunity? Learn about our investment case and growth strategy.',
      ctaText: 'Investor Relations →',
      ctaLink: '/investors/contact',
      bgColor: 'bg-[#D8E4DC]', // Investor green
    },
    {
      title: 'For Workshop Owners',
      description:
        "Thinking about the next chapter for your tire workshop? Let's have a confidential conversation.",
      ctaText: 'Start a Conversation →',
      ctaLink: '/entrepreneurs/contact',
      bgColor: 'bg-[#C9D8E8]', // Entrepreneur blue
    },
  ],
  generalInquiry: {
    title: 'General Inquiry',
    successMessage:
      "Thank you for your message. We'll get back to you within 2 business days.",
  },
  companyInfo: {
    email: 'hello@autocap.group',
    address: 'Stockholm, Sweden',
    businessHours: 'Monday - Friday, 9:00 - 17:00 CET',
  },
}
