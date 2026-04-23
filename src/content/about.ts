// About page content
export interface AboutContent {
  hero: {
    headline: string
    subheadline: string
  }
  story: {
    title: string
    paragraphs: string[]
  }
  mission: {
    title: string
    statement: string
    vision: string
  }
  values: Array<{
    id: number
    title: string
    description: string
    icon: string
  }>
  timeline: {
    title: string
    milestones: Array<{
      year: string
      title: string
      description: string
      status: 'completed' | 'current' | 'future'
    }>
  }
  differentiators: {
    title: string
    items: Array<{
      id: number
      title: string
      description: string
    }>
  }
  closing: {
    title: string
    description: string
    ctas: Array<{
      label: string
      href: string
    }>
  }
}

export const aboutContent: AboutContent = {
  hero: {
    headline: "Building Sweden's tire services platform",
    subheadline:
      "We're operators, not financial engineers. AutoCap Group is consolidating the tire workshop industry - but we do it differently. We preserve what makes each workshop special while building the operational scale that creates value for everyone.",
  },
  story: {
    title: 'Our Story',
    paragraphs: [
      "Sweden's tire services market is fragmented. Around 500 independent workshops serve customers across the country. Many are well-run businesses built over decades - but their owners face challenges with procurement, back-office operations, and succession planning.",
      "Consolidation makes sense in this market. But most consolidators follow the same playbook: acquire workshops, rebrand them under a corporate banner, replace local teams, and extract value. They destroy what makes these businesses special - the local brand, customer relationships, and team culture.",
      "AutoCap Group does it differently. We preserve local brands. We keep teams intact. We add value through shared procurement, centralized support services, and operational expertise - not by destroying what workshop owners built. We're operators who understand the business, not financial buyers looking for a quick exit.",
      "Since founding, we've grown to 12 workshops across Stockholm and Västra Götaland, employing ~50 people and generating ~200 MSEK in revenue. Our vision: build Sweden's leading tire services platform where workshops thrive with their identity intact while gaining the benefits of scale.",
    ],
  },
  mission: {
    title: 'Our Mission',
    statement:
      'To build the leading tire services platform in Sweden by preserving local brands, empowering teams, and delivering operational excellence.',
    vision:
      'A future where independent workshops thrive as part of a larger network - keeping their identity while gaining the benefits of scale.',
  },
  values: [
    {
      id: 1,
      title: 'Preserve Local Brands',
      description:
        "We don't rebrand. Your workshop keeps its name, identity, and customer relationships. What you built over the years stays yours.",
      icon: 'Store',
    },
    {
      id: 2,
      title: 'Empower Local Teams',
      description:
        "We don't replace management. Your team stays, and we give them better tools, support, and resources to succeed.",
      icon: 'Users',
    },
    {
      id: 3,
      title: 'Operational Excellence',
      description:
        "We're operators first. We know tire services inside and out - from procurement to customer service to seasonal demand patterns.",
      icon: 'TrendingUp',
    },
    {
      id: 4,
      title: 'Long-Term Thinking',
      description:
        "We're building a business, not flipping assets. Sustainable growth and long-term value creation over quick exits.",
      icon: 'Target',
    },
    {
      id: 5,
      title: 'Transparency and Trust',
      description:
        'Honest conversations, fair deals, and confidential processes. We treat workshop owners with the respect they deserve.',
      icon: 'BadgeCheck',
    },
  ],
  timeline: {
    title: 'Our Journey',
    milestones: [
      {
        year: 'Founding',
        title: 'AutoCap Group Founded',
        description: 'Launched with a vision to consolidate the tire services market differently',
        status: 'completed',
      },
      {
        year: 'First Acquisition',
        title: 'Stockholm Expansion',
        description: 'Acquired first workshops in the Stockholm region',
        status: 'completed',
      },
      {
        year: 'Geographic Growth',
        title: 'Västra Götaland',
        description: 'Expanded to Västra Götaland, establishing regional presence',
        status: 'completed',
      },
      {
        year: 'Today',
        title: '12 Workshops',
        description: '12 workshops, ~50 employees, ~200 MSEK revenue run-rate',
        status: 'current',
      },
      {
        year: '2028 Target',
        title: '50+ Workshops',
        description: 'Ambitious but achievable target for continued growth',
        status: 'future',
      },
    ],
  },
  differentiators: {
    title: 'What Makes Us Different',
    items: [
      {
        id: 1,
        title: 'We Preserve Brands',
        description:
          'Typical consolidators rebrand everything under their corporate banner. We keep your workshop name and identity.',
      },
      {
        id: 2,
        title: 'We Keep Teams',
        description:
          'Typical consolidators replace management. We keep your team and give them better tools and support.',
      },
      {
        id: 3,
        title: "We're Operators",
        description:
          "Typical consolidators are financial buyers. We're operators with deep industry experience.",
      },
      {
        id: 4,
        title: 'We Think Long-Term',
        description:
          'Typical consolidators flip and sell. We build sustainable businesses for the long term.',
      },
    ],
  },
  closing: {
    title: 'Want to learn more?',
    description:
      "Whether you own a workshop, are considering an investment, or have a general enquiry - we'd like to hear from you.",
    ctas: [
      {
        label: 'For Workshop Owners',
        href: '/entrepreneurs',
      },
      {
        label: 'For Investors',
        href: '/investors',
      },
      {
        label: 'General Enquiries',
        href: '/contact',
      },
    ],
  },
}
