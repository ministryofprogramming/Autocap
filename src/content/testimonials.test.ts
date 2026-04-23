import { testimonialsContent } from './testimonials'

describe('Testimonials Content', () => {
  describe('AC-005: Martin - Däckpoint i Mölndal Testimonial', () => {
    it('has correct Martin/Däckpoint testimonial content', () => {
      const martin = testimonialsContent.testimonials.find((t) => t.id === 'martin-dackpoint')

      expect(martin).toBeDefined()
      expect(martin?.workshopName).toBe('Däckpoint i Mölndal')
      expect(martin?.city).toBe('Mölndal')
      expect(martin?.ownerName).toBe('Martin')
      expect(martin?.keyFact).toBe(
        "Däckpoint i Mölndal · AutoCap's founding acquisition · October 2025",
      )
      expect(martin?.quote).toBe(
        "I'd been running Däckpoint for years and I knew the business inside out. What I didn't have was a plan for the future. When I met David and Nicklas, it felt different from other conversations I'd had. They understood the business, they respected what I'd built, and they were honest about what they wanted to do. My name is still on the door, my team is still here, and I still run the workshop — but now I have backup.",
      )
      expect(martin?.acquisitionDate).toBe('October 2025')
      expect(martin?.order).toBe(1)
    })
  })

  describe('AC-006: Verksta\'n i Öxnered Testimonial', () => {
    it('has correct Verksta\'n testimonial content', () => {
      const verkstan = testimonialsContent.testimonials.find(
        (t) => t.id === 'verkstan-oxnered',
      )

      expect(verkstan).toBeDefined()
      expect(verkstan?.workshopName).toBe("Verksta'n i Öxnered")
      expect(verkstan?.city).toBe('Öxnered')
      expect(verkstan?.ownerName).toBe('Workshop Owner')
      expect(verkstan?.keyFact).toBe(
        "Verksta'n i Öxnered · Expanding AutoCap's reach to Västra Götaland · December 2025",
      )
      expect(verkstan?.quote).toBe(
        "Running a workshop in a smaller town means you do everything yourself — tires, admin, marketing, supplier negotiations. When AutoCap approached us, I was sceptical at first. But they didn't want to change what we do. They wanted to take the things off my plate that weren't my strength, so I could focus on what I'm good at. Three months in, I can already see the difference.",
      )
      expect(verkstan?.acquisitionDate).toBe('December 2025')
      expect(verkstan?.order).toBe(2)
    })
  })

  describe('AC-007: Svenska Däckgruppen Testimonial', () => {
    it('has correct Svenska Däckgruppen testimonial content', () => {
      const svenska = testimonialsContent.testimonials.find(
        (t) => t.id === 'svenska-dackgruppen',
      )

      expect(svenska).toBeDefined()
      expect(svenska?.workshopName).toBe('Svenska Däckgruppen')
      expect(svenska?.city).toBe('Stockholm')
      expect(svenska?.ownerName).toBe('Workshop Owner')
      expect(svenska?.keyFact).toBe(
        "7 workshops across Stockholm · AutoCap's largest acquisition · January 2026",
      )
      expect(svenska?.quote).toBe(
        "When we hit difficulties, it was AutoCap who stepped in. They helped us navigate the reconstruction — not as distant observers, but hands-on, with real commitment. They understood the business, they believed in what we'd built, and they put in the work to make sure we came through it. When the reconstruction was complete, joining the group was the natural next step. Our seven workshops now operate under the Däckgruppen name with the stability and backing we needed. That kind of trust isn't something you negotiate — it's something you earn. They earned it.",
      )
      expect(svenska?.acquisitionDate).toBe('January 2026')
      expect(svenska?.order).toBe(3)
    })
  })

  describe('AC-017: Content Authenticity', () => {
    it('testimonials match copy deck content exactly', () => {
      const { testimonials } = testimonialsContent

      // Should have exactly 3 testimonials
      expect(testimonials).toHaveLength(3)

      // All testimonials should have required fields
      testimonials.forEach((testimonial) => {
        expect(testimonial.id).toBeDefined()
        expect(testimonial.workshopName).toBeDefined()
        expect(testimonial.city).toBeDefined()
        expect(testimonial.ownerName).toBeDefined()
        expect(testimonial.quote).toBeDefined()
        expect(testimonial.keyFact).toBeDefined()
        expect(testimonial.acquisitionDate).toBeDefined()
        expect(testimonial.order).toBeDefined()
      })

      // Testimonials should be ordered correctly
      expect(testimonials[0].order).toBe(1)
      expect(testimonials[1].order).toBe(2)
      expect(testimonials[2].order).toBe(3)
    })
  })
})
