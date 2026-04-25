/**
 * Our Story Page Content
 * Source: docs/reference/website-copy-deck.docx v1.1 - Section 2.1
 */

export interface StoryContent {
  metadata: {
    title: string
    description: string
  }
  hero: {
    headline: string
  }
  opening: {
    headline: string
    paragraphs: string[]
    quote: {
      text: string
      attribution: string
      title: string
    }
  }
  model: {
    title: string
    paragraphs: string[]
  }
  vision: {
    title: string
    paragraphs: string[]
  }
  timeline: {
    title: string
    milestones: Array<{
      year: string
      title: string
      description: string
      status: 'completed' | 'current' | 'future'
    }>
  }
}

export const storyContent: StoryContent = {
  metadata: {
    title: 'Our Story · AutoCap Group',
    description:
      'How two brothers saw an opportunity to build a different kind of tire service group in Sweden.',
  },

  hero: {
    headline: 'Two brothers. One industry. A clear opportunity.',
  },

  opening: {
    headline: 'Two brothers. One industry. A clear opportunity.',
    paragraphs: [
      'AutoCap Group was founded by David and Nicklas Knape - one with a background in company building, finance and tech, the other with over fifteen years inside the Nordic tire and automotive aftermarket.',
      "The insight was straightforward. Sweden has roughly 2,000 independent tire service workshops. Most are well-run, profitable, and deeply rooted in their local communities. But they operate alone - without purchasing power, shared systems, or a plan for succession when the owner is ready to step back.",
      "At the same time, the industry is consolidating. International players backed by institutional capital are entering the market, acquiring workshops and folding them into corporate structures. For many independent owners, the choice has become binary: sell to a large chain and lose your identity, or keep going alone and hope for the best.",
      'We saw a third option.',
    ],
    quote: {
      text: "We didn't want to build another chain. We wanted to build a group where every workshop keeps its name, its people, and its customers - but gains the backing to compete with anyone.",
      attribution: 'Nicklas Knape',
      title: 'COO & Head of M&A',
    },
  },

  model: {
    title: 'The model: local brands, central strength',
    paragraphs: [
      'AutoCap acquires workshops and keeps them operating under their own names. Tumba Gummiverkstad is still Tumba Gummiverkstad. Däckpoint i Mölndal is still Däckpoint i Mölndal. The customers see the same faces, the same service, the same sign above the door.',
      'Behind the scenes, AutoCap provides what no independent workshop can build alone: consolidated procurement that lowers cost, shared financial and HR administration, and a network of peers who learn from each other. A workshop owner in Vänersborg can share operational insights with a colleague in Täby - not as competitors, but as partners in the same group.',
      'This is not a franchise model. AutoCap acquires the business outright, and the entrepreneur typically stays - as a manager, a co-investor, or both. The knowledge stays. The relationships stay. The ambition grows.',
    ],
  },

  vision: {
    title: "Where we're going",
    paragraphs: [
      "AutoCap Group's ambition is to build one of the leading independent tire service platforms in the Nordics. We are targeting approximately 50 workshops and consolidated revenues approaching SEK 1 billion by 2028, with a geographic footprint covering Sweden's major population centres and transport corridors.",
      'Our growth is deliberate. We acquire workshops that meet clear quality criteria - strong local reputation, solid financials, and an owner who cares about what happens next. We do not chase volume for its own sake.',
      'The long-term trajectory is clear: operational maturity, geographic density, and a platform that is attractive to institutional capital - on our terms and our timeline.',
    ],
  },

  timeline: {
    title: 'Our Journey',
    milestones: [
      {
        year: '2024',
        title: 'Founded',
        description: 'AutoCap Group Sweden AB is established in Stockholm.',
        status: 'completed',
      },
      {
        year: 'Oct 2025',
        title: 'First acquisition',
        description: 'Däckpoint i Mölndal becomes the first workshop to join the group.',
        status: 'completed',
      },
      {
        year: 'Oct 2025',
        title: 'Second acquisition',
        description: 'Tumba Gummiverkstad joins - rebranding to Däckgruppen Tumba.',
        status: 'completed',
      },
      {
        year: 'Dec 2025',
        title: 'Third acquisition',
        description: "Verksta'n i Öxnered expands the group's reach to Västra Götaland.",
        status: 'completed',
      },
      {
        year: 'Jan 2026',
        title: 'Largest acquisition to date',
        description:
          'Svenska Däckgruppen (7 units in Stockholm) joins after successful reconstruction.',
        status: 'completed',
      },
      {
        year: 'Mar 2026',
        title: 'Continued expansion',
        description: 'Mölndals Däckservice and Mölndals Bilverkstad acquired.',
        status: 'current',
      },
      {
        year: '2026–2027',
        title: 'Scaling phase',
        description: 'Targeting 25+ workshops across Sweden.',
        status: 'future',
      },
      {
        year: '2028',
        title: 'Platform maturity',
        description: 'Target: ~50 workshops, revenues approaching SEK 1 billion.',
        status: 'future',
      },
    ],
  },
} as const
