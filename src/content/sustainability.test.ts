import { sustainabilityContent } from './sustainability'

describe('Sustainability Content', () => {
  describe('AC-003: All focus areas match copy deck', () => {
    it('has exactly 4 focus areas', () => {
      expect(sustainabilityContent.whereWeAre.focusAreas).toHaveLength(4)
    })

    it('includes tire recycling focus area', () => {
      const hasRecycling = sustainabilityContent.whereWeAre.focusAreas.some((area) =>
        area.toLowerCase().includes('tire recycling')
      )
      expect(hasRecycling).toBe(true)
    })

    it('includes energy consumption focus area', () => {
      const hasEnergy = sustainabilityContent.whereWeAre.focusAreas.some((area) =>
        area.toLowerCase().includes('energy consumption')
      )
      expect(hasEnergy).toBe(true)
    })

    it('includes logistics focus area', () => {
      const hasLogistics = sustainabilityContent.whereWeAre.focusAreas.some((area) =>
        area.toLowerCase().includes('logistics')
      )
      expect(hasLogistics).toBe(true)
    })

    it('includes environmental impact assessment focus area', () => {
      const hasImpact = sustainabilityContent.whereWeAre.focusAreas.some(
        (area) =>
          area.toLowerCase().includes('environmental impact') ||
          area.toLowerCase().includes('products and chemicals')
      )
      expect(hasImpact).toBe(true)
    })
  })

  describe('AC-004: Future ambitions match copy deck', () => {
    it('mentions 2027 target timeline', () => {
      expect(sustainabilityContent.whereWeAreGoing.description).toContain('2027')
    })

    it('includes carbon footprint benchmarking', () => {
      expect(sustainabilityContent.whereWeAreGoing.description.toLowerCase()).toContain(
        'carbon footprint'
      )
    })

    it('includes waste reduction metrics', () => {
      expect(sustainabilityContent.whereWeAreGoing.description.toLowerCase()).toContain(
        'waste reduction'
      )
    })

    it('includes supplier sustainability assessments', () => {
      expect(sustainabilityContent.whereWeAreGoing.description.toLowerCase()).toContain(
        'supplier sustainability'
      )
    })

    it('has statement about efficiency and responsibility', () => {
      expect(sustainabilityContent.whereWeAreGoing.statement).toBeTruthy()
      expect(sustainabilityContent.whereWeAreGoing.statement.toLowerCase()).toContain(
        'operational efficiency'
      )
      expect(sustainabilityContent.whereWeAreGoing.statement.toLowerCase()).toContain(
        'environmental responsibility'
      )
    })
  })

  describe('AC-005: Governance content matches copy deck', () => {
    it('mentions management team oversight', () => {
      expect(sustainabilityContent.governance.description.toLowerCase()).toContain(
        'management team'
      )
    })

    it('mentions ESG reporting framework', () => {
      expect(sustainabilityContent.governance.description.toLowerCase()).toContain('esg')
    })

    it('has correct contact email', () => {
      expect(sustainabilityContent.governance.contactEmail).toBe('kontakt@autocapgroup.se')
    })
  })

  describe('Metadata', () => {
    it('has page title', () => {
      expect(sustainabilityContent.metadata.title).toBeTruthy()
      expect(sustainabilityContent.metadata.title).toContain('Sustainability')
    })

    it('has meta description', () => {
      expect(sustainabilityContent.metadata.description).toBeTruthy()
      expect(sustainabilityContent.metadata.description.length).toBeGreaterThan(50)
    })
  })
})
