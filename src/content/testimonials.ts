export interface Testimonial {
  id: string
  workshopName: string
  city: string
  ownerName: string
  quote: string
  keyFact: string
  ownerPhotoUrl?: string
  acquisitionDate: string
  order: number
}

export interface TestimonialsContent {
  testimonials: Testimonial[]
}

export const testimonialsContent: TestimonialsContent = {
  testimonials: [
    {
      id: 'martin-dackpoint',
      workshopName: 'Däckpoint i Mölndal',
      city: 'Mölndal',
      ownerName: 'Martin',
      quote:
        "I'd been running Däckpoint for years and I knew the business inside out. What I didn't have was a plan for the future. When I met David and Nicklas, it felt different from other conversations I'd had. They understood the business, they respected what I'd built, and they were honest about what they wanted to do. My name is still on the door, my team is still here, and I still run the workshop — but now I have backup.",
      keyFact: "Däckpoint i Mölndal · AutoCap's founding acquisition · October 2025",
      ownerPhotoUrl: undefined,
      acquisitionDate: 'October 2025',
      order: 1,
    },
    {
      id: 'verkstan-oxnered',
      workshopName: "Verksta'n i Öxnered",
      city: 'Öxnered',
      ownerName: 'Workshop Owner',
      quote:
        "Running a workshop in a smaller town means you do everything yourself — tires, admin, marketing, supplier negotiations. When AutoCap approached us, I was sceptical at first. But they didn't want to change what we do. They wanted to take the things off my plate that weren't my strength, so I could focus on what I'm good at. Three months in, I can already see the difference.",
      keyFact: "Verksta'n i Öxnered · Expanding AutoCap's reach to Västra Götaland · December 2025",
      ownerPhotoUrl: undefined,
      acquisitionDate: 'December 2025',
      order: 2,
    },
    {
      id: 'svenska-dackgruppen',
      workshopName: 'Svenska Däckgruppen',
      city: 'Stockholm',
      ownerName: 'Workshop Owner',
      quote:
        "When we hit difficulties, it was AutoCap who stepped in. They helped us navigate the reconstruction — not as distant observers, but hands-on, with real commitment. They understood the business, they believed in what we'd built, and they put in the work to make sure we came through it. When the reconstruction was complete, joining the group was the natural next step. Our seven workshops now operate under the Däckgruppen name with the stability and backing we needed. That kind of trust isn't something you negotiate — it's something you earn. They earned it.",
      keyFact: "7 workshops across Stockholm · AutoCap's largest acquisition · January 2026",
      ownerPhotoUrl: undefined,
      acquisitionDate: 'January 2026',
      order: 3,
    },
  ],
}
