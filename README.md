# AutoCap Group Website

Official website for AutoCap Group Sweden AB - The Nordic Tire Services Platform.

## About AutoCap Group

AutoCap Group is consolidating Sweden's independent tire service industry by acquiring and operating local tire workshops while preserving their brands, teams, and customer relationships. Currently operating 12 service centres across Sweden with ambitions to reach 50 workshops by 2028.

## Tech Stack

This is a modern Next.js website built with:

- **Framework:** Next.js 15.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Maps:** Mapbox GL
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint + Prettier
- **Git Hooks:** Husky + lint-staged

## Project Structure

```
/src
├── app/              # Next.js App Router pages
├── components/       # React components (atomic design)
│   ├── ui/          # Reusable UI components (atoms, molecules, organisms)
│   ├── layout/      # Header, Footer, Navigation
│   ├── home/        # Homepage components
│   ├── entrepreneurs/ # Entrepreneurs section
│   ├── investors/   # Investors section
│   └── ...
├── content/         # Content data (text, images, structured data)
├── hooks/           # Custom React hooks
├── lib/             # Utilities, constants, helpers
└── types/           # TypeScript type definitions

/public
├── images/          # Static images
├── logos/           # AutoCap logos
└── ...

/docs
├── reference/       # Project documentation & copy deck
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Autocap

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Available Scripts

```bash
# Development
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
npm run format       # Format code with Prettier
npm run test         # Run Jest tests
npm run test:coverage # Test coverage report

# Git Hooks
npm run prepare      # Install Husky git hooks
npm run lint-staged  # Run on staged files (pre-commit)
```

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Mapbox (for portfolio map)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here

# Add other environment variables as needed
```

## Key Features

### For Entrepreneurs
- Information about selling workshops to AutoCap
- Benefits of joining the AutoCap network
- Contact form for workshop owners

### For Investors
- Investment case presentation
- 4 investment pillars
- Investor relations contact

### Portfolio
- Interactive map of 12 workshop locations
- Workshop detail pages
- Geographic coverage visualization

### News & Media
- Press releases and announcements
- Article pages with rich content
- Media kit download

### Company Information
- Company story and timeline
- Leadership team and board
- Contact information

## Content Management

All website content is managed through structured TypeScript files in `/src/content/`:

- `homepage.ts` - Homepage content
- `entrepreneurs.ts` - Entrepreneurs section
- `investors.ts` - Investors section
- `news.ts` - News articles and press releases
- `portfolio.ts` - Workshop locations and data
- `about.ts` - Company information

To update content, edit the relevant file and the changes will be reflected automatically.

## Design System

The website follows AutoCap's brand guidelines:

### Colors
- **AutoCap Red:** `#C8102E` (primary brand color)
- **Nordic Black:** `#1C1C1E` (text and dark elements)
- **Birch:** `#D8E4DC` (Entrepreneurs section - green)
- **Fjord:** `#C9D8E8` (Investors section - blue)
- **Stone:** `#E4E2DE` (Portfolio section - grey)
- **Linen White:** `#F5F0EB` (Light sections)

### Typography
- **Font:** Inter (variable font)
- **Headings:** Bold, black weight (900)
- **Body:** Regular weight (400)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The website is optimized for deployment on Vercel or similar Next.js hosting platforms:

```bash
# Build for production
npm run build

# The build output is in .next/ directory
```

## Contributing

This project follows the Vibecoding workflow methodology. For development workflow details, see `CLAUDE.md`.

## License

Proprietary - AutoCap Group Sweden AB

## Contact

**AutoCap Group Sweden AB**
Nybrogatan 7, Stockholm
Email: kontakt@autocapgroup.se
Website: [autocapgroup.se](https://autocapgroup.se)

---

Built with ❤️ for AutoCap Group
