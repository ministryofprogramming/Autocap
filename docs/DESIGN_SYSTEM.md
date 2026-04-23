# AutoCap Design System

This document defines the design rules and patterns used across the AutoCap website to ensure consistency.

## Brand Colors

### Primary Colors
- **AutoCap Red**: `#C8102E` - Primary brand color, CTAs, accents
- **Nordic Black**: `#1C1C1E` - Headlines, body text
- **White**: `#FFFFFF` - Card backgrounds, text on dark backgrounds
- **Gray-50**: `#F9FAFB` - Page backgrounds (standard for all pages)

### Secondary Colors
- **Sage Green**: `#D8E4DC` - Entrepreneurs section
- **Ember**: `#F0DADA` - News/Media accents
- **Gray-600**: `#4B5563` - Secondary text
- **Gray-700**: `#374151` - Labels, metadata

### Gradient Variants
- **Red Gradient**: `from-[#C8102E] to-[#A00D25]` - Buttons, CTAs
- **Sage Gradient**: `from-[#D8E4DC] via-[#C8D5CC] to-[#D8E4DC]` - Entrepreneurs hero

## Typography

### Headline (Hero H1)
**Standard Pattern:**
```tsx
className="mb-8 text-5xl font-black leading-[1.1] text-[#1C1C1E] md:text-6xl lg:text-7xl xl:text-8xl"
```

**Usage:** All hero section headlines (About, Entrepreneurs, Investors, News, Portfolio)

**Breakdown:**
- Mobile (< 768px): `text-5xl` (48px)
- Tablet (768px-1023px): `text-6xl` (60px)
- Desktop (1024px-1279px): `text-7xl` (72px)
- Extra Large (≥1280px): `text-8xl` (96px)
- Font weight: `font-black` (900)
- Line height: `leading-[1.1]`
- Color: Nordic Black `#1C1C1E`

### Subheadline (Hero Paragraph)
**Standard Pattern:**
```tsx
className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed"
```

**Breakdown:**
- Mobile: `text-xl` (20px)
- Desktop: `text-2xl` (24px)
- Max width: `max-w-3xl` (768px)
- Color: `text-gray-700`

### Section Headings (H2)
```tsx
className="text-2xl font-bold text-[#1C1C1E] md:text-3xl lg:text-4xl"
```

### Card Titles
```tsx
className="text-xl font-bold text-[#1C1C1E] line-clamp-2"
```

### Body Text
```tsx
className="text-gray-600 leading-relaxed"
```

## Layout Components

### Page Background
**Standard Pattern:**
```tsx
<main className="min-h-screen bg-gray-50">
  {/* Page content */}
</main>
```

**Usage:** All pages (Contact, News, About, etc.)

**Exception:** Pages with colored hero sections (Entrepreneurs) use gradient backgrounds specific to their section

### Hero Section
**Standard Structure:**
```tsx
<section className="relative flex min-h-[60vh] items-center justify-center px-6 py-24 md:px-8">
  <div className="mx-auto max-w-5xl text-center">
    {/* Icon Badge */}
    <div className="mb-8 inline-flex items-center justify-center">
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <Icon className="h-12 w-12 text-[#C8102E] md:h-16 md:w-16" strokeWidth={2} />
      </div>
    </div>

    {/* Headline */}
    <h1 className="mb-8 text-5xl font-black leading-[1.1] text-[#1C1C1E] md:text-6xl lg:text-7xl xl:text-8xl">
      {headline}
    </h1>

    {/* Decorative Line */}
    <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

    {/* Subheadline */}
    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed">
      {subheadline}
    </p>
  </div>
</section>
```

### Icon Badge
**Standard Pattern:**
```tsx
<div className="mb-8 inline-flex items-center justify-center">
  <div className="rounded-2xl bg-white p-4 shadow-sm">
    <Icon className="h-12 w-12 text-[#C8102E] md:h-16 md:w-16" strokeWidth={2} />
  </div>
</div>
```

### Decorative Line
**Standard Pattern:**
```tsx
<div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />
```

### Content Container
**Standard Pattern:**
```tsx
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
  {/* Content */}
</div>
```

## Grid Layouts

### Responsive Grid (3-Column)
```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

**Breakpoints:**
- Mobile: 1 column
- Tablet (≥768px): 2 columns
- Desktop (≥1024px): 3 columns

### Responsive Grid (2-Column)
```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
  {/* Cards */}
</div>
```

## Card Components

### Standard Card
```tsx
<article className="group overflow-hidden rounded-lg border-2 border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]">
  {/* Image */}
  <div className="relative aspect-video w-full overflow-hidden">
    <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
  </div>

  {/* Content */}
  <div className="p-6">
    <h2 className="mb-3 text-xl font-bold text-[#1C1C1E] line-clamp-2">
      {title}
    </h2>
    <p className="text-gray-600 line-clamp-3">
      {excerpt}
    </p>
  </div>
</article>
```

**Key Features:**
- Border: `border-2 border-gray-200`
- Hover: `-translate-y-1` + `border-[#C8102E]`
- Image hover: `scale-105`
- Transitions: `duration-300`

## Buttons

### Primary CTA Button
```tsx
<button className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105">
  {text}
</button>
```

### Filter Button (Unselected)
```tsx
<button className="rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:scale-105 hover:border-[#C8102E]">
  {category}
</button>
```

### Filter Button (Selected)
```tsx
<button className="rounded-full border-2 border-[#C8102E] bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white shadow-md">
  {category}
</button>
```

## Category Badges

### News Categories
```tsx
const categoryStyles = {
  'Company News': 'bg-[#C8102E] text-white',
  'Press Release': 'bg-[#1C1C1E] text-white',
  'Industry Insights': 'bg-[#D8E4DC] text-[#1C1C1E]',
  'Media Coverage': 'bg-[#F0DADA] text-[#1C1C1E]',
}

<span className="px-3 py-1 rounded-full text-xs font-semibold {categoryStyles[category]}">
  {category}
</span>
```

## Animations

### Scroll Animation
```tsx
// Use useScrollAnimation hook
const { ref, isInView } = useScrollAnimation()

<div
  ref={ref}
  className={cn(
    'opacity-0 translate-y-4',
    isInView && 'opacity-100 translate-y-0'
  )}
  style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}
>
  {content}
</div>
```

### Hover Effects
- **Cards**: `hover:-translate-y-1` (4px lift)
- **Buttons**: `hover:scale-105` (5% scale)
- **Images**: `group-hover:scale-105` (5% zoom)
- **Duration**: `duration-300` (300ms)

## Spacing

### Section Padding
- Vertical: `py-24` (96px)
- Horizontal: `px-6` desktop: `lg:px-8`

### Card Padding
- Standard: `p-6` (24px)

### Element Margins
- Headline bottom: `mb-8` (32px)
- Subheadline bottom: `mb-12` (48px)
- Icon badge bottom: `mb-8` (32px)
- Card title bottom: `mb-3` (12px)
- Card excerpt bottom: `mb-4` (16px)

### Grid Gaps
- Standard: `gap-8` (32px)
- Filter buttons: `gap-3` (12px)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Extra Large**: ≥ 1280px

## Accessibility

### Focus States
```tsx
className="focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
```

### Alt Text
- Always provide descriptive alt text for images
- Use article/section titles as alt text for hero images

### Semantic HTML
- Use `<article>` for card components
- Use `<section>` for major page sections
- Maintain proper heading hierarchy (h1 → h2 → h3)

## Patterns to Follow

### Image Placeholders
Use consistent fallback pattern with icon + brand color background:
```tsx
<div className="flex h-full w-full items-center justify-center bg-[#F0DADA]">
  <Icon className="h-16 w-16 text-[#1C1C1E] opacity-40" />
</div>
```

### Empty States
```tsx
<div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
  <p className="text-xl text-gray-600">
    No items available at the moment.
  </p>
  <p className="mt-2 text-gray-500">Check back soon for updates!</p>
</div>
```

### Pattern Overlay
```tsx
<div className="absolute inset-0 opacity-[0.02]">
  <div
    className="h-full w-full"
    style={{
      backgroundImage: 'radial-gradient(circle, #1C1C1E 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    }}
  />
</div>
```

## Usage Guidelines

1. **Always use established patterns** - Don't create new component styles without documenting them here first
2. **Maintain consistency** - Hero sections should look identical across pages (only content changes)
3. **Test responsively** - Verify all breakpoints (320px, 375px, 768px, 1024px, 1440px)
4. **Use semantic colors** - Don't hardcode hex values, reference this document
5. **Follow spacing rules** - Use consistent padding/margin values
6. **Respect animations** - Honor prefers-reduced-motion user preference

## Quick Reference

| Element | Class Pattern |
|---------|--------------|
| Hero H1 | `text-5xl font-black leading-[1.1] text-[#1C1C1E] md:text-6xl lg:text-7xl xl:text-8xl` |
| Hero Subheadline | `text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed` |
| Card Title | `text-xl font-bold text-[#1C1C1E] line-clamp-2` |
| Card Excerpt | `text-gray-600 line-clamp-3` |
| Section Container | `mx-auto max-w-7xl px-6 py-24 lg:px-8` |
| 3-Col Grid | `grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3` |
| Primary Button | `bg-gradient-to-r from-[#C8102E] to-[#A00D25] px-10 py-5 text-xl font-bold text-white` |

---

**Last Updated:** 2026-04-23
**Maintained By:** Development Team
