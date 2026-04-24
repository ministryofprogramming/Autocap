/**
 * Investors Case Page Content
 * Source: docs/reference/website-copy-deck.docx v1.1 - Page 16
 */

import {
  Target,
  Package,
  Zap,
  BarChart3,
  Network,
  Star,
  type LucideIcon,
} from 'lucide-react'

export interface InvestmentPillar {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface GrowthMilestone {
  period: string
  description: string
  status: 'completed' | 'target'
}

export const investorsCaseContent = {
  hero: {
    title: 'Investment Case',
    subtitle: 'Market opportunity, strategy, and growth roadmap',
  },

  marketOpportunity: {
    title: 'Market Opportunity',
    paragraphs: [
      'The Swedish tire service market is valued at approximately SEK 15–20 billion annually, spanning passenger vehicles, commercial fleets, and specialty segments. The market is served by roughly 2,000 independent workshops - the vast majority owner-operated, single-location businesses with no succession plan.',
      'Consolidation has begun. International players backed by private equity capital are acquiring workshops across the Nordics. But the market remains highly fragmented, and the majority of independent operators have yet to find a partner.',
      'For a disciplined acquirer with industry knowledge and operational capability, the opportunity is significant: proven cash flows, attractive entry multiples, and meaningful value creation through procurement consolidation, operational improvement, and geographic density.',
    ],
  },

  strategy: {
    title: 'The AutoCap Strategy — Six pillars of value creation',
    pillars: [
      {
        id: 'strategic-acquisitions',
        icon: Target,
        title: 'Strategic Acquisitions',
        description:
          'We target well-run, profitable workshops with strong local reputations and owners open to partnership.',
      },
      {
        id: 'procurement-consolidation',
        icon: Package,
        title: 'Procurement Consolidation',
        description:
          'Group purchasing power across tires, consumables, and equipment. Direct margin improvement that compounds.',
      },
      {
        id: 'operational-efficiency',
        icon: Zap,
        title: 'Operational Efficiency',
        description:
          'Centralised finance, HR, compliance, and administration. Scalable operating model.',
      },
      {
        id: 'data-analytics',
        icon: BarChart3,
        title: 'Data & Analytics',
        description:
          'Structured reporting, common KPIs, inventory optimisation, and demand forecasting.',
      },
      {
        id: 'cross-sell-partnerships',
        icon: Network,
        title: 'Cross-Sell & Partnerships',
        description:
          'Adjacent services: wheel alignment, fleet contracts, seasonal storage, supplier partnerships.',
      },
      {
        id: 'customer-experience',
        icon: Star,
        title: 'Customer Experience',
        description:
          'Local brand preservation + group-level quality standards. Consistent service delivery.',
      },
    ] as InvestmentPillar[],
  },

  milestones: {
    title: 'Growth Milestones',
    items: [
      {
        period: 'H2 2025',
        description: 'Platform established. Three founding acquisitions completed.',
        status: 'completed',
      },
      {
        period: 'Q1 2026',
        description:
          'Largest acquisition completed (7-unit Stockholm group). Portfolio reaches 12 workshops.',
        status: 'completed',
      },
      {
        period: '2026',
        description: 'Scaling phase. Targeting 20+ workshops. Operational playbook standardised.',
        status: 'target',
      },
      {
        period: '2027',
        description: "Geographic expansion. Target: 35+ workshops across Sweden's major regions.",
        status: 'target',
      },
      {
        period: '2028',
        description: 'Platform maturity. ~50 workshops, revenues approaching SEK 1 billion.',
        status: 'target',
      },
    ] as GrowthMilestone[],
    disclaimer:
      'No EBITDA figures, acquisition multiples, or detailed financial projections are published. Revenue targets are directional only. Qualified investors receive detailed information through direct dialogue.',
  },

  metadata: {
    title: 'Investment Case · AutoCap Group',
    description:
      'Market opportunity, value creation strategy, and growth roadmap. The Swedish tire service consolidation opportunity for institutional investors.',
  },
} as const
