/**
 * Entrepreneurs Section Content
 * Source: docs/reference/website-copy-deck.docx - Section 4
 */

export interface EntrepreneursContent {
  landing: {
    headline: string
    subheadline: string
    ctaText: string
    ctaLink: string
  }
  benefits: Array<{
    id: number
    title: string
    description: string
  }>
  closingBlock: {
    title: string
    description: string
  }
  process: {
    intro: string
    steps: Array<{
      number: number
      title: string
      description: string
      timeline: string
    }>
    totalTimeline: string
    ctaText: string
    ctaLink: string
  }
  contact: {
    title: string
    subtext: string
    successMessage: string
  }
}

export const entrepreneursContent: EntrepreneursContent = {
  landing: {
    headline: "You built something worth keeping. Let's build on it together.",
    subheadline:
      "If you own a tire service workshop and you're thinking about the next chapter — whether that's retirement, growth, or simply having a stronger partner - we'd like to have a conversation.",
    ctaText: 'Learn why workshop owners choose AutoCap →',
    ctaLink: '/entrepreneurs/why',
  },

  benefits: [
    {
      id: 1,
      title: 'Your name stays on the door',
      description:
        "We don't rebrand your workshop. Your brand — built on years of trust and reputation — is valuable. We preserve it. Customers who've known your business for decades will see the same name, the same quality, the same commitment. We grow what you built, not replace it.",
    },
    {
      id: 2,
      title: 'Your people stay',
      description:
        "The team you've trained, the mechanics and service staff who know your customers — they're essential. We don't clean house. We invest in your people, offering training, better tools, and career growth. Their expertise stays. Your culture stays.",
    },
    {
      id: 3,
      title: 'Stay and grow with us',
      description:
        "Many founders choose to stay on after acquisition — leading their workshop with the backing of a larger group. You gain resources, purchasing power, and modern systems, while keeping the operational freedom that made you successful. Or, if you're ready to step back, we'll ensure a smooth transition that respects what you've built.",
    },
    {
      id: 4,
      title: "You gain what you couldn't build alone",
      description:
        "Joining AutoCap means access to group-wide benefits: centralized purchasing, shared marketing, IT systems, and a network of peer workshop owners. You keep local decision-making, but gain the advantages of scale. It's the best of both worlds.",
    },
    {
      id: 5,
      title: 'Fair value. Clear process.',
      description:
        "We make fair offers based on transparent valuation. Our acquisition process is designed to be clear, respectful, and efficient. From first conversation to signed deal, we move quickly but never rush you. You'll know exactly where you stand at every step.",
    },
  ],

  closingBlock: {
    title: "We're entrepreneurs too",
    description:
      "AutoCap's founders understand what it means to build and run a business. We're not a private equity firm looking for quick returns. We're operators who respect the craft, the relationships, and the years of effort that go into building a successful workshop. We're building something long-term, and we want you to be part of it.",
  },

  process: {
    intro: 'Our acquisition process is designed to be clear, respectful, and efficient.',
    steps: [
      {
        number: 1,
        title: 'First Conversation',
        description:
          "A relaxed, confidential discussion about your business, your goals, and what you're looking for. No pressure, no obligation — just a conversation about what might be possible.",
        timeline: '1-2 weeks',
      },
      {
        number: 2,
        title: 'Indicative Offer',
        description:
          "If there's mutual interest, we'll provide a preliminary valuation and offer based on the information shared. This gives you a clear sense of value before moving forward.",
        timeline: '1-2 weeks',
      },
      {
        number: 3,
        title: 'Letter of Intent',
        description:
          'A non-binding agreement outlining the key terms, timeline, and next steps. This formalizes our intent to move forward while giving both sides clarity and commitment.',
        timeline: '1 week',
      },
      {
        number: 4,
        title: 'Due Diligence',
        description:
          'A detailed but respectful review of your business — financials, operations, legal matters. We move quickly and keep disruption minimal. Everything shared is treated in strict confidence.',
        timeline: '3-5 weeks',
      },
      {
        number: 5,
        title: 'Final Agreement',
        description:
          "We finalize terms, sign the purchase agreement, and prepare for transition. Legal, financial, and operational details are locked in. You'll have full transparency and support throughout.",
        timeline: '1-2 weeks',
      },
      {
        number: 6,
        title: 'Welcome to the Group',
        description:
          'The deal closes, and your workshop joins the AutoCap family. We support you through the transition, ensuring continuity for customers and staff. Then we focus on growth — together.',
        timeline: 'Ongoing',
      },
    ],
    totalTimeline: '8-12 weeks from first conversation to signed deal',
    ctaText: 'Start with Step 1 → Have a confidential conversation with us',
    ctaLink: '/entrepreneurs/contact',
  },

  contact: {
    title: "Let's Talk",
    subtext:
      "This is confidential. We don't share your information with anyone outside our core acquisition team. There's no obligation — just a conversation about what might be possible.",
    successMessage:
      "Thank you. Your enquiry has been received. A member of our team will be in touch within two business days. Everything you've shared is treated in strict confidence.",
  },
}

// Revenue options for contact form
export const revenueOptions = [
  { value: '<5 MSEK', label: 'Less than 5 MSEK' },
  { value: '5-15 MSEK', label: '5-15 MSEK' },
  { value: '15-50 MSEK', label: '15-50 MSEK' },
  { value: '>50 MSEK', label: 'More than 50 MSEK' },
] as const

export type RevenueOption = (typeof revenueOptions)[number]['value']
