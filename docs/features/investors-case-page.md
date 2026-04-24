# Feature: Investors Case Page

**Status**: ✅ COMPLETE
**Date Completed**: 2026-04-24
**Route**: `/investors/case`

## Overview

The Investors Case page presents AutoCap's investment opportunity to qualified investors, showcasing market opportunity, value creation strategy, and growth milestones in a professional, investor-focused layout.

## User-Facing Features

### Hero Section
- **Title**: "Investment Case"
- **Subtitle**: "Market opportunity, strategy, and growth roadmap"
- **Visual**: TrendingUp icon in white rounded container
- **Background**: Fjord gradient (#C9D8E8) with subtle dot pattern overlay
- **Layout**: Centered, 85vh minimum height for impactful first impression

### Market Opportunity Section
Presents three key paragraphs describing:
1. Market size (SEK 15-20B annually) and structure (2,000 independent workshops)
2. Consolidation dynamics (PE-backed international players, fragmented market)
3. Value creation opportunities (procurement, operations, geographic density)

### Strategy: Six Pillars of Value Creation
Displays 6 investment pillars in a 2x3 responsive grid:

1. **Strategic Acquisitions**: Target well-run, profitable workshops
2. **Procurement Consolidation**: Group purchasing power across supplies
3. **Operational Efficiency**: Centralized finance, HR, compliance
4. **Data & Analytics**: Structured reporting, KPIs, inventory optimization
5. **Cross-Sell & Partnerships**: Adjacent services and supplier partnerships
6. **Customer Experience**: Local brand preservation + group standards

Each pillar card features:
- Unique Lucide React icon (Target, Package, Zap, BarChart3, Network, Star)
- Icon background: Red accent with 10% opacity (#C8102E/10)
- Hover effect: Subtle shadow lift
- White background with border for clean, professional appearance

### Growth Milestones Timeline
Vertical timeline showing 5 milestones with visual status indicators:

**Completed Milestones** (red checkmarks):
- **H2 2025**: Platform established. Three founding acquisitions completed.
- **Q1 2026**: Largest acquisition completed (7-unit Stockholm group). Portfolio reaches 12 workshops.

**Target Milestones** (gray circles):
- **2026**: Scaling phase. Targeting 20+ workshops. Operational playbook standardised.
- **2027**: Geographic expansion. Target: 35+ workshops across Sweden's major regions.
- **2028**: Platform maturity. ~50 workshops, revenues approaching SEK 1 billion.

### Disclaimer Section
Gray-boxed disclaimer below timeline with "Note:" prefix explaining:
- No EBITDA/multiples published
- Revenue targets are directional
- Qualified investors receive detailed information through direct dialogue

## Technical Implementation

### File Structure
```
src/
├── app/investors/case/
│   ├── page.tsx                    # Main page component
│   └── page.test.tsx               # 29 page tests
├── components/investors/
│   ├── InvestmentPillar.tsx        # Pillar card component
│   ├── InvestmentPillar.test.tsx   # 27 component tests
│   ├── GrowthTimeline.tsx          # Timeline component
│   └── GrowthTimeline.test.tsx     # 29 component tests
└── content/
    ├── investors-case.ts           # Content data & types
    └── investors-case.test.ts      # 25 content tests
```

### Components

#### InvestmentPillar
**Purpose**: Reusable pillar card component
**Props**:
```typescript
interface InvestmentPillarProps {
  pillar: InvestmentPillar
}

interface InvestmentPillar {
  id: string
  icon: LucideIcon
  title: string
  description: string
}
```

**Features**:
- White card with border and rounded corners
- Icon container: 48x48px with red background (10% opacity)
- Responsive typography (text-xl → text-2xl)
- Hover effect: shadow-lg transition
- Responsive padding (p-6 → md:p-8)

#### GrowthTimeline
**Purpose**: Vertical timeline for growth milestones
**Props**:
```typescript
interface GrowthTimelineProps {
  milestones: readonly GrowthMilestone[]
}

interface GrowthMilestone {
  period: string
  description: string
  status: 'completed' | 'target'
}
```

**Features**:
- Flex layout with icon + content
- Conditional icon rendering: CheckCircle2 (completed) vs Circle (target)
- Color-coded status: Red (#C8102E) for completed, Gray for target
- Vertical spacing: space-y-8 between milestones
- Non-shrinking icon container for consistent alignment

### Content Layer

**File**: `src/content/investors-case.ts`

All page content centralized in typed constant:
```typescript
export const investorsCaseContent = {
  hero: { title, subtitle },
  marketOpportunity: { title, paragraphs: [3] },
  strategy: { title, pillars: [6] },
  milestones: { title, items: [5], disclaimer },
  metadata: { title, description }
}
```

**Benefits**:
- Single source of truth for all content
- Easy content updates without touching components
- Type safety prevents missing/incorrect data
- Comprehensive test coverage (25 tests)

### Navigation Integration

Updated `src/lib/constants.ts` to add Investors submenu:
```typescript
{
  label: 'Investors',
  href: '/investors',
  submenu: [
    { label: 'Investment Case', href: '/investors/case' }
  ]
}
```

## Responsive Design

### Breakpoints
- **Mobile (< 768px)**: Single column layout, smaller text
- **Tablet (768px - 1023px)**: 2-column pillar grid, medium text
- **Desktop (≥ 1024px)**: 2-column pillar grid, large text
- **XL Desktop (≥ 1280px)**: Maximum text sizes

### Typography Scale
- **Hero title**: text-5xl → md:text-6xl → lg:text-7xl → xl:text-8xl
- **Section headings**: text-4xl → md:text-5xl → lg:text-6xl
- **Pillar titles**: text-xl → md:text-2xl
- **Body text**: text-xl → md:text-2xl (market paragraphs)
- **Timeline periods**: text-lg → md:text-xl
- **Descriptions**: text-base → md:text-lg

### Layout Adaptation
- **Pillar grid**: grid-cols-1 (mobile) → md:grid-cols-2 (tablet+)
- **Padding**: px-6 py-20 (mobile) → md:px-8 md:py-28 (desktop)
- **Max widths**: max-w-4xl (market), max-w-5xl (hero), max-w-6xl (pillars)

## Testing

### Test Coverage: 110 Tests

#### Content Tests (25 tests)
- `investors-case.test.ts`
- Verifies all content matches copy deck specifications
- Tests market data accuracy (SEK 15-20B, 2000 workshops)
- Validates all 6 pillar definitions
- Confirms all 5 milestone periods and statuses
- Checks disclaimer wording

#### Component Tests (56 tests)

**InvestmentPillar.test.tsx** (27 tests):
- Rendering: title, description, icon
- Styling: background, border, rounded corners, hover effects
- Typography: font weights, sizes, colors
- Accessibility: heading levels
- Edge cases: long titles/descriptions

**GrowthTimeline.test.tsx** (29 tests):
- Rendering: all milestones, periods, descriptions
- Status icons: CheckCircle2 vs Circle based on status
- Period styling: color coding by status
- Description styling: responsive text, colors
- Layout: flex, spacing, icon containers
- Edge cases: empty array, single milestone, many milestones

#### Page Tests (29 tests)
- `page.test.tsx`
- All 8 acceptance criteria with multiple assertions each
- Hero section rendering
- Market opportunity paragraphs (exact count and content)
- Strategy section and all 6 pillars
- Timeline with all 5 milestones
- Disclaimer text and styling
- Page metadata
- Responsive design features
- Visual design consistency

### Running Tests
```bash
# Run all investor tests
npm run test -- investors

# Run specific test file
npm run test -- investors-case.test.ts

# Run with coverage
npm run test:coverage -- investors
```

## Design System Compliance

### Colors
- **Primary Red**: #C8102E (AutoCap Red) - icons, accents, completed status
- **Nordic Black**: #1C1C1E - headlines, titles
- **Fjord**: #C9D8E8 - hero and strategy section backgrounds (investor theme)
- **Grays**: gray-50, gray-100, gray-600, gray-700 - backgrounds, text

### Typography
- **Font Family**: System font stack (Next.js default)
- **Weights**: font-black (900) for headlines, font-bold (700) for titles
- **Line Heights**: leading-[1.1] for headlines, leading-relaxed for body

### Spacing
- **Sections**: py-20 md:py-28 vertical padding
- **Cards**: p-6 md:p-8 internal padding
- **Grids**: gap-6 md:gap-8 between items
- **Stacks**: space-y-6 (paragraphs), space-y-8 (timeline)

### Icons
- **Source**: Lucide React
- **Size**: h-6 w-6 (pillar icons), h-12 w-12 (hero icon), h-8 w-8 (timeline icons)
- **Stroke Width**: strokeWidth={2} (pillar icons), strokeWidth={2.5} (consistent)

## SEO & Metadata

```typescript
export const metadata: Metadata = {
  title: 'Investment Case · AutoCap Group',
  description: 'Market opportunity, value creation strategy, and growth roadmap. The Swedish tire service consolidation opportunity for institutional investors.'
}
```

**Keywords**: Investment case, Swedish tire service market, consolidation opportunity, SEK 15-20 billion, independent workshops, strategic acquisitions, procurement consolidation, growth milestones

## Content Source

All content sourced from:
- **Document**: `docs/reference/website-copy-deck.docx` v1.1
- **Page**: 16 (Investment Case section)
- **Date**: As of implementation

## Accessibility

- ✅ Semantic HTML (h1, h2, h3, section, main)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Color contrast: All text meets WCAG AA standards
- ✅ Responsive text scaling for readability
- ✅ Icon-only elements have accompanying text
- ✅ Focus states on interactive elements (hover effects)

## Browser Support

Tested and verified on:
- ✅ Chrome (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)

## Performance

- **SSR**: Server-side rendered (no client JavaScript required for content)
- **Bundle Size**: Minimal impact (reuses existing design system)
- **Images**: Icon components only (vector SVG, no raster images)
- **Fonts**: System fonts (zero additional font loading)

## Future Enhancements (Not in Scope)

- Interactive charts for market data visualization
- Downloadable investor presentation PDF
- Animated entrance effects for timeline milestones
- "Request Information" form for qualified investors
- Multi-language support (Swedish translation)

## Maintenance Notes

### Updating Content
1. Edit `src/content/investors-case.ts`
2. Run tests: `npm run test -- investors-case.test.ts`
3. Update tests if content structure changes

### Adding New Pillars
1. Add pillar definition to `investorsCaseContent.strategy.pillars`
2. Import appropriate Lucide icon
3. Update grid layout if exceeding 6 pillars (currently 2x3)
4. Add corresponding test in `investors-case.test.ts`

### Adding New Milestones
1. Add milestone to `investorsCaseContent.milestones.items`
2. Set appropriate status ('completed' | 'target')
3. Update timeline tests to reflect new count
4. Visual indicators update automatically based on status

## Related Features

- Language Selector (EN/SV dropdown in navigation)
- Back to Top button (appears after 300px scroll)
- Sustainability page (similar hero pattern and design system)
- About page (template for hero section design)

## Status

✅ **FEATURE COMPLETE**

All acceptance criteria met, all tests passing, no linting issues, responsive design verified, and ready for production deployment.
