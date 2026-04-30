/**
 * Workshop Location Data
 *
 * Source: docs/reference/data-map.csv
 * Last updated: 2026-04-22
 */

export interface Workshop {
  id: number
  name: string
  slug: string
  city: string
  region: string
  latitude: number
  longitude: number
  status: 'acquired' | 'pending' | 'target'
  yearAcquired: number
  localWebsite: string
  description: string
}

export const workshops: Workshop[] = [
  {
    id: 1,
    name: "Däckpoint i Mölndal",
    slug: "dackpoint-molndal",
    city: "Mölndal",
    region: "Västra Götaland",
    latitude: 57.6557,
    longitude: 12.0138,
    status: "acquired",
    yearAcquired: 2025,
    localWebsite: "https://dackpoint.se",
    description: "Full-service tire workshop located in Mölndal's industrial area, serving both consumer and commercial customers. Known for fast turnaround and personal service. Joined AutoCap Group as the platform's founding acquisition in October 2025."
  },
  {
    id: 2,
    name: "Tumba Gummiverkstad",
    slug: "tumba-gummiverkstad",
    city: "Tumba",
    region: "Stockholm",
    latitude: 59.1989,
    longitude: 17.8319,
    status: "acquired",
    yearAcquired: 2025,
    localWebsite: "https://dackpartner.se/botkyrka/tumba-gummiverkstad",
    description: "Established tire service centre in Tumba, south of Stockholm. Loyal customer base built over decades of reliable service. Now operating under the Däckgruppen brand as part of AutoCap Group since October 2025."
  },
  {
    id: 3,
    name: "Verksta'n i Öxnered",
    slug: "verkstan-oxnered",
    city: "Öxnered",
    region: "Västra Götaland",
    latitude: 58.3748,
    longitude: 12.3221,
    status: "acquired",
    yearAcquired: 2025,
    localWebsite: "https://verkstanioxnered.se",
    description: "Tire and auto service workshop in Öxnered, near Vänersborg. Strategically located along key transport routes in Västra Götaland. Part of AutoCap Group since December 2025."
  },
  {
    id: 4,
    name: "Däckgruppen Bromma",
    slug: "dackgruppen-bromma",
    city: "Bromma",
    region: "Stockholm",
    latitude: 59.3477,
    longitude: 17.9396,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/bromma",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Ulvsundavägen 154, Bromma."
  },
  {
    id: 5,
    name: "Däckgruppen Brunna",
    slug: "dackgruppen-brunna",
    city: "Kungsängen",
    region: "Stockholm",
    latitude: 59.4819,
    longitude: 17.7441,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/brunna",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Energivägen 13, Kungsängen."
  },
  {
    id: 6,
    name: "Däckgruppen Sollentuna",
    slug: "dackgruppen-sollentuna",
    city: "Sollentuna",
    region: "Stockholm",
    latitude: 59.4342,
    longitude: 17.9470,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/sollentuna",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Bisslingevägen 4, Sollentuna."
  },
  {
    id: 7,
    name: "Däckgruppen Solna",
    slug: "dackgruppen-solna",
    city: "Solna",
    region: "Stockholm",
    latitude: 59.3653,
    longitude: 18.0050,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/solna",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Gårdsvägen 4, Solna."
  },
  {
    id: 8,
    name: "Däckgruppen Tyresö",
    slug: "dackgruppen-tyreso",
    city: "Tyresö",
    region: "Stockholm",
    latitude: 59.2445,
    longitude: 18.2267,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/tyreso",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Energivägen 3, Tyresö."
  },
  {
    id: 9,
    name: "Däckgruppen Täby",
    slug: "dackgruppen-taby",
    city: "Täby",
    region: "Stockholm",
    latitude: 59.4436,
    longitude: 18.0688,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/taby",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Enhagsvägen 11, Täby."
  },
  {
    id: 10,
    name: "Däckgruppen Vasastan",
    slug: "dackgruppen-vasastan",
    city: "Stockholm",
    region: "Stockholm",
    latitude: 59.3459,
    longitude: 18.0530,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/vasastan",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Surbrunnsgatan 50, Stockholm."
  },
  {
    id: 11,
    name: "Mölndals Däckservice",
    slug: "molndals-dackservice",
    city: "Mölndal",
    region: "Västra Götaland",
    latitude: 57.6557,
    longitude: 12.0138,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://molndalsdackservice.se",
    description: "Tire service specialist at Kråketorpsgatan 16, Mölndal. Co-located with Mölndals Bilverkstad."
  },
  {
    id: 12,
    name: "Mölndals Bilverkstad",
    slug: "molndals-bilverkstad",
    city: "Mölndal",
    region: "Västra Götaland",
    latitude: 57.6557,
    longitude: 12.0138,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://mekonomen.se/butik-bilverkstad/molndal/kraketorpsgatan",
    description: "General vehicle service under the Mekonomen brand. Co-located with Mölndals Däckservice at Kråketorpsgatan 16, Mölndal."
  }
]

// Helper functions
export const getWorkshopsByRegion = (region: string) =>
  workshops.filter(w => w.region === region)

export const getWorkshopsByYear = (year: number) =>
  workshops.filter(w => w.yearAcquired === year)

export const getWorkshopBySlug = (slug: string) =>
  workshops.find(w => w.slug === slug)

export const getTotalWorkshops = () => workshops.length

export const getRegions = () =>
  [...new Set(workshops.map(w => w.region))]

/**
 * Get unique cities from all workshops, sorted alphabetically
 */
export const getCities = (): string[] => {
  return [...new Set(workshops.map(w => w.city))].sort()
}
