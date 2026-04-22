/**
 * Workshop Location Data
 *
 * Source: docs/reference/data-map.csv
 * Last updated: 2026
 */

export interface Workshop {
  name: string
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
    name: "Däckpoint i Mölndal",
    city: "Mölndal",
    region: "Västra Götaland",
    latitude: 57.6557,
    longitude: 12.0138,
    status: "acquired",
    yearAcquired: 2025,
    localWebsite: "https://dackpoint.se",
    description: "Full-service tire workshop. AutoCap's founding acquisition."
  },
  {
    name: "Tumba Gummiverkstad (Däckgruppen Tumba)",
    city: "Tumba",
    region: "Stockholm",
    latitude: 59.1989,
    longitude: 17.8319,
    status: "acquired",
    yearAcquired: 2025,
    localWebsite: "https://dackpartner.se/botkyrka/tumba-gummiverkstad",
    description: "Established tire service centre south of Stockholm. Now operating under the Däckgruppen brand."
  },
  {
    name: "Verksta'n i Öxnered",
    city: "Öxnered",
    region: "Västra Götaland",
    latitude: 58.3748,
    longitude: 12.3221,
    status: "acquired",
    yearAcquired: 2025,
    localWebsite: "https://verkstanioxnered.se",
    description: "Tire and auto service workshop near Vänersborg. Strategically located along key transport routes."
  },
  {
    name: "Däckgruppen Bromma",
    city: "Bromma",
    region: "Stockholm",
    latitude: 59.3477,
    longitude: 17.9396,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/bromma",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Ulvsundavägen 154."
  },
  {
    name: "Däckgruppen Brunna",
    city: "Kungsängen",
    region: "Stockholm",
    latitude: 59.4819,
    longitude: 17.7441,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/brunna",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Energivägen 13."
  },
  {
    name: "Däckgruppen Sollentuna",
    city: "Sollentuna",
    region: "Stockholm",
    latitude: 59.4342,
    longitude: 17.9470,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/sollentuna",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Bisslingevägen 4."
  },
  {
    name: "Däckgruppen Solna",
    city: "Solna",
    region: "Stockholm",
    latitude: 59.3653,
    longitude: 18.0050,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/solna",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Gårdsvägen 4."
  },
  {
    name: "Däckgruppen Tyresö",
    city: "Tyresö",
    region: "Stockholm",
    latitude: 59.2445,
    longitude: 18.2267,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/tyreso",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Energivägen 3."
  },
  {
    name: "Däckgruppen Täby",
    city: "Täby",
    region: "Stockholm",
    latitude: 59.4436,
    longitude: 18.0688,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/taby",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Enhagsvägen 11."
  },
  {
    name: "Däckgruppen Vasastan",
    city: "Stockholm",
    region: "Stockholm",
    latitude: 59.3459,
    longitude: 18.0530,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://dackgruppen.se/vasastan",
    description: "Part of the Svenska Däckgruppen acquisition. Located at Surbrunnsgatan 50."
  },
  {
    name: "Mölndals Däckservice",
    city: "Mölndal",
    region: "Västra Götaland",
    latitude: 57.6557,
    longitude: 12.0138,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://molndalsdackservice.se",
    description: "Tire service specialist at Kråketorpsgatan 16. Co-located with Mölndals Bilverkstad."
  },
  {
    name: "Mölndals Bilverkstad (Mekonomen)",
    city: "Mölndal",
    region: "Västra Götaland",
    latitude: 57.6557,
    longitude: 12.0138,
    status: "acquired",
    yearAcquired: 2026,
    localWebsite: "https://mekonomen.se/butik-bilverkstad/molndal/kraketorpsgatan",
    description: "General vehicle service under the Mekonomen brand. Co-located with Mölndals Däckservice."
  }
]

// Helper functions
export const getWorkshopsByRegion = (region: string) =>
  workshops.filter(w => w.region === region)

export const getWorkshopsByYear = (year: number) =>
  workshops.filter(w => w.yearAcquired === year)

export const getTotalWorkshops = () => workshops.length

export const getRegions = () =>
  [...new Set(workshops.map(w => w.region))]
