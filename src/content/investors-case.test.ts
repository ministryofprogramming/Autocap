import { investorsCaseContent } from './investors-case'

describe('Investors Case Content', () => {
  describe('AC-002: Market opportunity paragraphs match copy deck', () => {
    it('has exactly 3 paragraphs', () => {
      expect(investorsCaseContent.marketOpportunity.paragraphs).toHaveLength(3)
    })

    it('mentions market size SEK 15-20 billion', () => {
      const firstParagraph = investorsCaseContent.marketOpportunity.paragraphs[0]
      expect(firstParagraph).toContain('SEK 15–20 billion')
    })

    it('mentions 2000 independent workshops', () => {
      const firstParagraph = investorsCaseContent.marketOpportunity.paragraphs[0]
      expect(firstParagraph).toContain('2,000 independent workshops')
    })

    it('mentions consolidation opportunity', () => {
      const secondParagraph = investorsCaseContent.marketOpportunity.paragraphs[1]
      expect(secondParagraph.toLowerCase()).toContain('consolidation')
    })

    it('mentions value creation opportunities', () => {
      const thirdParagraph = investorsCaseContent.marketOpportunity.paragraphs[2]
      expect(thirdParagraph.toLowerCase()).toContain('value creation')
      expect(thirdParagraph.toLowerCase()).toContain('procurement consolidation')
    })
  })

  describe('AC-004: All 6 pillars defined', () => {
    it('has exactly 6 pillars', () => {
      expect(investorsCaseContent.strategy.pillars).toHaveLength(6)
    })

    it('includes Strategic Acquisitions pillar', () => {
      const pillar = investorsCaseContent.strategy.pillars.find(
        (p) => p.id === 'strategic-acquisitions'
      )
      expect(pillar).toBeDefined()
      expect(pillar?.title).toBe('Strategic Acquisitions')
    })

    it('includes Procurement Consolidation pillar', () => {
      const pillar = investorsCaseContent.strategy.pillars.find(
        (p) => p.id === 'procurement-consolidation'
      )
      expect(pillar).toBeDefined()
      expect(pillar?.title).toBe('Procurement Consolidation')
    })

    it('includes Operational Efficiency pillar', () => {
      const pillar = investorsCaseContent.strategy.pillars.find(
        (p) => p.id === 'operational-efficiency'
      )
      expect(pillar).toBeDefined()
      expect(pillar?.title).toBe('Operational Efficiency')
    })

    it('includes Data & Analytics pillar', () => {
      const pillar = investorsCaseContent.strategy.pillars.find((p) => p.id === 'data-analytics')
      expect(pillar).toBeDefined()
      expect(pillar?.title).toBe('Data & Analytics')
    })

    it('includes Cross-Sell & Partnerships pillar', () => {
      const pillar = investorsCaseContent.strategy.pillars.find(
        (p) => p.id === 'cross-sell-partnerships'
      )
      expect(pillar).toBeDefined()
      expect(pillar?.title).toBe('Cross-Sell & Partnerships')
    })

    it('includes Customer Experience pillar', () => {
      const pillar = investorsCaseContent.strategy.pillars.find(
        (p) => p.id === 'customer-experience'
      )
      expect(pillar).toBeDefined()
      expect(pillar?.title).toBe('Customer Experience')
    })

    it('all pillars have icons', () => {
      investorsCaseContent.strategy.pillars.forEach((pillar) => {
        expect(pillar.icon).toBeDefined()
        // lucide-react icons are objects (React components)
        expect(typeof pillar.icon).toBe('object')
      })
    })
  })

  describe('AC-005: All 5 milestones defined', () => {
    it('has exactly 5 milestones', () => {
      expect(investorsCaseContent.milestones.items).toHaveLength(5)
    })

    it('H2 2025 milestone is marked as completed', () => {
      const milestone = investorsCaseContent.milestones.items.find((m) => m.period === 'H2 2025')
      expect(milestone).toBeDefined()
      expect(milestone?.status).toBe('completed')
    })

    it('Q1 2026 milestone is marked as completed', () => {
      const milestone = investorsCaseContent.milestones.items.find((m) => m.period === 'Q1 2026')
      expect(milestone).toBeDefined()
      expect(milestone?.status).toBe('completed')
    })

    it('2026 milestone is marked as target', () => {
      const milestone = investorsCaseContent.milestones.items.find((m) => m.period === '2026')
      expect(milestone).toBeDefined()
      expect(milestone?.status).toBe('target')
    })

    it('2027 milestone is marked as target', () => {
      const milestone = investorsCaseContent.milestones.items.find((m) => m.period === '2027')
      expect(milestone).toBeDefined()
      expect(milestone?.status).toBe('target')
    })

    it('2028 milestone is marked as target', () => {
      const milestone = investorsCaseContent.milestones.items.find((m) => m.period === '2028')
      expect(milestone).toBeDefined()
      expect(milestone?.status).toBe('target')
    })

    it('2028 milestone mentions SEK 1 billion revenue', () => {
      const milestone = investorsCaseContent.milestones.items.find((m) => m.period === '2028')
      expect(milestone?.description).toContain('SEK 1 billion')
    })
  })

  describe('AC-006: Disclaimer text matches copy deck', () => {
    it('has disclaimer text', () => {
      expect(investorsCaseContent.milestones.disclaimer).toBeTruthy()
      expect(investorsCaseContent.milestones.disclaimer.length).toBeGreaterThan(50)
    })

    it('mentions no EBITDA or multiples published', () => {
      expect(investorsCaseContent.milestones.disclaimer.toLowerCase()).toContain('ebitda')
      expect(investorsCaseContent.milestones.disclaimer.toLowerCase()).toContain('multiples')
    })

    it('mentions qualified investors receive detailed info', () => {
      expect(investorsCaseContent.milestones.disclaimer.toLowerCase()).toContain(
        'qualified investors'
      )
      expect(investorsCaseContent.milestones.disclaimer.toLowerCase()).toContain('direct dialogue')
    })
  })

  describe('Metadata', () => {
    it('has page title', () => {
      expect(investorsCaseContent.metadata.title).toBeTruthy()
      expect(investorsCaseContent.metadata.title).toContain('Investment Case')
    })

    it('has meta description', () => {
      expect(investorsCaseContent.metadata.description).toBeTruthy()
      expect(investorsCaseContent.metadata.description.length).toBeGreaterThan(50)
    })
  })
})
