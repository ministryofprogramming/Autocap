import { storyContent } from './story'

describe('Story Content', () => {
  describe('Content Structure', () => {
    it('has metadata with title and description', () => {
      expect(storyContent.metadata).toBeDefined()
      expect(storyContent.metadata.title).toBe('Our Story · AutoCap Group')
      expect(storyContent.metadata.description).toContain('two brothers')
    })

    it('has hero section with headline', () => {
      expect(storyContent.hero).toBeDefined()
      expect(storyContent.hero.headline).toContain('Two brothers')
    })

    it('has opening section with headline, paragraphs, and quote', () => {
      expect(storyContent.opening).toBeDefined()
      expect(storyContent.opening.headline).toBeTruthy()
      expect(storyContent.opening.paragraphs).toHaveLength(4)
      expect(storyContent.opening.quote).toBeDefined()
    })

    it('has model section with title and paragraphs', () => {
      expect(storyContent.model).toBeDefined()
      expect(storyContent.model.title).toContain('local brands, central strength')
      expect(storyContent.model.paragraphs).toHaveLength(3)
    })

    it('has vision section with title and paragraphs', () => {
      expect(storyContent.vision).toBeDefined()
      expect(storyContent.vision.title).toContain("Where we're going")
      expect(storyContent.vision.paragraphs).toHaveLength(3)
    })

    it('has timeline section with title and milestones', () => {
      expect(storyContent.timeline).toBeDefined()
      expect(storyContent.timeline.title).toBeTruthy()
      expect(storyContent.timeline.milestones).toHaveLength(8)
    })
  })

  describe('Opening Section - Copy Deck Compliance', () => {
    it('mentions David and Nicklas Knape', () => {
      const openingText = storyContent.opening.paragraphs.join(' ')
      expect(openingText).toContain('David and Nicklas Knape')
    })

    it('mentions 2,000 independent workshops', () => {
      const openingText = storyContent.opening.paragraphs.join(' ')
      expect(openingText).toContain('2,000 independent')
    })

    it('has Nicklas Knape quote', () => {
      expect(storyContent.opening.quote.attribution).toBe('Nicklas Knape')
      expect(storyContent.opening.quote.title).toBe('COO & Head of M&A')
      expect(storyContent.opening.quote.text).toContain("didn't want to build another chain")
    })
  })

  describe('Model Section - Copy Deck Compliance', () => {
    it('mentions workshop names staying the same', () => {
      const modelText = storyContent.model.paragraphs.join(' ')
      expect(modelText).toContain('Tumba Gummiverkstad is still Tumba Gummiverkstad')
      expect(modelText).toContain('Däckpoint i Mölndal is still Däckpoint i Mölndal')
    })

    it('explains consolidated procurement', () => {
      const modelText = storyContent.model.paragraphs.join(' ')
      expect(modelText).toContain('consolidated procurement')
    })

    it('clarifies acquisition model', () => {
      const modelText = storyContent.model.paragraphs.join(' ')
      expect(modelText).toContain('not a franchise model')
      expect(modelText).toContain('acquires the business outright')
    })
  })

  describe('Vision Section - Copy Deck Compliance', () => {
    it('mentions 50 workshops target', () => {
      const visionText = storyContent.vision.paragraphs.join(' ')
      expect(visionText).toContain('50 workshops')
    })

    it('mentions SEK 1 billion revenue target', () => {
      const visionText = storyContent.vision.paragraphs.join(' ')
      expect(visionText).toContain('SEK 1 billion')
    })

    it('mentions 2028 timeframe', () => {
      const visionText = storyContent.vision.paragraphs.join(' ')
      expect(visionText).toContain('2028')
    })
  })

  describe('Timeline - Copy Deck Compliance', () => {
    it('starts with 2024 founding', () => {
      const founding = storyContent.timeline.milestones[0]
      expect(founding.year).toBe('2024')
      expect(founding.title).toBe('Founded')
      expect(founding.status).toBe('completed')
    })

    it('includes first acquisition (Däckpoint i Mölndal)', () => {
      const firstAcq = storyContent.timeline.milestones.find((m) =>
        m.description.includes('Däckpoint i Mölndal')
      )
      expect(firstAcq).toBeDefined()
      expect(firstAcq?.year).toBe('Oct 2025')
    })

    it('includes largest acquisition (Svenska Däckgruppen)', () => {
      const largestAcq = storyContent.timeline.milestones.find((m) =>
        m.description.includes('Svenska Däckgruppen')
      )
      expect(largestAcq).toBeDefined()
      expect(largestAcq?.description).toContain('7 units')
    })

    it('ends with 2028 platform maturity', () => {
      const maturity = storyContent.timeline.milestones[7]
      expect(maturity.year).toBe('2028')
      expect(maturity.title).toBe('Platform maturity')
      expect(maturity.status).toBe('future')
    })

    it('has correct status assignments', () => {
      const completed = storyContent.timeline.milestones.filter((m) => m.status === 'completed')
      const current = storyContent.timeline.milestones.filter((m) => m.status === 'current')
      const future = storyContent.timeline.milestones.filter((m) => m.status === 'future')

      expect(completed.length).toBeGreaterThan(0)
      expect(current.length).toBeGreaterThan(0)
      expect(future.length).toBeGreaterThan(0)
    })
  })

  describe('Quote Structure', () => {
    it('has all required quote fields', () => {
      const { quote } = storyContent.opening
      expect(quote.text).toBeTruthy()
      expect(quote.attribution).toBeTruthy()
      expect(quote.title).toBeTruthy()
    })

    it('quote text is substantial', () => {
      expect(storyContent.opening.quote.text.length).toBeGreaterThan(50)
    })
  })

  describe('Timeline Milestone Structure', () => {
    it('all milestones have required fields', () => {
      storyContent.timeline.milestones.forEach((milestone) => {
        expect(milestone.year).toBeTruthy()
        expect(milestone.title).toBeTruthy()
        expect(milestone.description).toBeTruthy()
        expect(milestone.status).toMatch(/completed|current|future/)
      })
    })
  })
})
