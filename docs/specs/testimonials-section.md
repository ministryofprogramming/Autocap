# Feature Specification: Testimonials Section

**Feature:** Workshop Owner Testimonials Section
**Location:** `/entrepreneurs` page (new section)
**Status:** Draft → Awaiting Approval
**Created:** 2026-04-23
**Approved:** [Pending]

---

## 1. Overview

### Purpose
Add a testimonials section to the Entrepreneurs page featuring real workshop owners who have joined AutoCap Group. This provides social proof and builds trust with potential sellers by showing authentic success stories from their peers.

### Business Context
Per the copy deck section 4.4: "Template built at P1 launch; content populated at P2."

The Testimonials section is critical for the entrepreneur conversion funnel. Workshop owners (typically 45-65, successful, thinking about succession) need to see that other workshop owners like them have had positive experiences with AutoCap.

Testimonials reduce perceived risk, demonstrate that AutoCap honors its promises (keeping the brand name, preserving the team, fair treatment), and provide relatable peer validation.

### Target Audience
- Workshop owners considering selling or partnering
- Entrepreneurs evaluating AutoCap vs competitors
- Workshop owners in early research phase

### Success Criteria
- All 3 testimonials displayed with proper formatting
- Responsive design works on mobile and desktop
- Photos display correctly or fall back to placeholders
- Content matches copy deck exactly
- Section is visually distinct with Linen White background

---

## 2. Acceptance Criteria (Given/When/Then Format)

### AC-001: Section Layout and Background

GIVEN I am viewing the Entrepreneurs page
WHEN I scroll to the Testimonials section
THEN I see a section with Linen White (#F5F0EB) background
AND the section has proper padding and spacing
AND the section appears between the main content and the contact CTA

---

### AC-002: Section Header

GIVEN I am viewing the Testimonials section
WHEN I look at the top of the section
THEN I see a heading "What Workshop Owners Say"
AND the heading uses the standard h2 styling (text-4xl, font-black, Nordic Black color)
AND there is a red decorative line below the heading

---

### AC-003: Testimonial Grid Layout

GIVEN I am viewing the Testimonials section
WHEN I examine the layout
THEN testimonials are displayed in a responsive grid
AND the grid shows 1 column on mobile
AND the grid shows 2 columns on tablet (md breakpoint)
AND the grid shows 3 columns on desktop (lg breakpoint)
AND there is consistent gap spacing between cards (gap-8)

---

### AC-004: Testimonial Card Structure

GIVEN I am viewing a single testimonial card
WHEN I examine its contents
THEN the card has a white background with rounded corners
AND the card has subtle shadow for depth
AND the card contains (in order):
  - Workshop photo (or placeholder)
  - Owner portrait (or placeholder)
  - Quote text in quotation marks
  - Owner name
  - Workshop name and city
  - Key fact line
AND all elements are properly aligned and spaced

---

### AC-005: Martin - Däckpoint i Mölndal Testimonial

GIVEN I am viewing the testimonials
WHEN I look at the first testimonial
THEN I see the following content:

**Key fact:** "Däckpoint i Mölndal · AutoCap's founding acquisition · October 2025"

**Quote:** "I'd been running Däckpoint for years and I knew the business inside out. What I didn't have was a plan for the future. When I met David and Nicklas, it felt different from other conversations I'd had. They understood the business, they respected what I'd built, and they were honest about what they wanted to do. My name is still on the door, my team is still here, and I still run the workshop — but now I have backup."

**Attribution:** "Martin, Däckpoint i Mölndal"

---

### AC-006: Verksta'n i Öxnered Testimonial

GIVEN I am viewing the testimonials
WHEN I look at the second testimonial
THEN I see the following content:

**Key fact:** "Verksta'n i Öxnered · Expanding AutoCap's reach to Västra Götaland · December 2025"

**Quote:** "Running a workshop in a smaller town means you do everything yourself — tires, admin, marketing, supplier negotiations. When AutoCap approached us, I was sceptical at first. But they didn't want to change what we do. They wanted to take the things off my plate that weren't my strength, so I could focus on what I'm good at. Three months in, I can already see the difference."

**Attribution:** "[Owner name], Verksta'n i Öxnered"

**Note:** Owner name placeholder pending real name approval

---

### AC-007: Svenska Däckgruppen Testimonial

GIVEN I am viewing the testimonials
WHEN I look at the third testimonial
THEN I see the following content:

**Key fact:** "7 workshops across Stockholm · AutoCap's largest acquisition · January 2026"

**Quote:** "When we hit difficulties, it was AutoCap who stepped in. They helped us navigate the reconstruction — not as distant observers, but hands-on, with real commitment. They understood the business, they believed in what we'd built, and they put in the work to make sure we came through it. When the reconstruction was complete, joining the group was the natural next step. Our seven workshops now operate under the Däckgruppen name with the stability and backing we needed. That kind of trust isn't something you negotiate — it's something you earn. They earned it."

**Attribution:** "[Owner name], Svenska Däckgruppen"

**Note:** Owner name placeholder pending real name approval

---

### AC-008: Photo Handling - Workshop Photos

GIVEN a testimonial has a workshop photo URL
WHEN the card is rendered
THEN the workshop photo displays at the top of the card
AND the image uses Next.js Image component
AND the image has proper alt text: "Workshop exterior for [Workshop Name]"
AND the image has rounded top corners to match card
AND the image maintains aspect ratio (16:9 suggested)

---

### AC-009: Photo Handling - Owner Portraits

GIVEN a testimonial has an owner portrait URL
WHEN the card is rendered
THEN the portrait displays below the workshop photo
AND the portrait is circular (rounded-full)
AND the portrait is centered horizontally
AND the portrait has a white border/ring for separation
AND the portrait has proper alt text: "[Owner name] from [Workshop name]"
AND the portrait is positioned slightly overlapping the workshop photo (negative margin)

---

### AC-010: Photo Placeholders

GIVEN a testimonial is missing workshop photo or owner portrait
WHEN the card is rendered
THEN a branded placeholder is shown instead of the missing photo
AND workshop placeholders show workshop initials on AutoCap Red background
AND owner placeholders show owner initials on AutoCap Red background
AND placeholders maintain the same dimensions as real photos
AND placeholders use white text for initials

---

### AC-011: Quote Styling

GIVEN I am viewing a testimonial quote
WHEN I examine the text styling
THEN the quote text is in large, readable font (text-lg)
AND the quote has opening and closing quotation marks
AND the quote uses proper line height for readability (leading-relaxed)
AND the quote text is gray-700 color
AND the quote is left-aligned (not centered)

---

### AC-012: Attribution Styling

GIVEN I am viewing a testimonial attribution
WHEN I examine the attribution
THEN the owner name is displayed in bold or semibold
AND the workshop name and city follow on the same line or next line
AND the attribution uses Nordic Black color (#1C1C1E)
AND the attribution is clearly separated from the quote with margin

---

### AC-013: Key Fact Styling

GIVEN I am viewing a testimonial key fact
WHEN I examine the styling
THEN the key fact appears at the bottom of the card
AND the key fact uses smaller font size (text-sm)
AND the key fact uses AutoCap Red color (#C8102E)
AND the key fact is semibold for emphasis
AND bullet separators (·) are used between segments

---

### AC-014: Responsive Design - Mobile

GIVEN I am viewing the Testimonials section on mobile (< 768px)
WHEN I examine the layout
THEN testimonials stack vertically (1 column)
AND each card is full width with appropriate padding
AND images scale proportionally
AND text remains readable
AND spacing is optimized for mobile

---

### AC-015: Responsive Design - Tablet

GIVEN I am viewing the Testimonials section on tablet (768px - 1023px)
WHEN I examine the layout
THEN testimonials display in a 2-column grid
AND the third testimonial spans appropriately or starts new row
AND cards maintain consistent height or allow natural height
AND spacing is balanced

---

### AC-016: Responsive Design - Desktop

GIVEN I am viewing the Testimonials section on desktop (≥ 1024px)
WHEN I examine the layout
THEN testimonials display in a 3-column grid
AND all three testimonials are visible in one row
AND cards are equal width
AND the section is centered with max-width constraint
AND there is ample whitespace

---

### AC-017: Content Authenticity Note

GIVEN the testimonials content is based on copy deck
WHEN testimonials are displayed
THEN the content matches the copy deck section 4.4 exactly
AND placeholders are clearly marked for missing owner names
AND the copy deck note is preserved: "These are suggested quotes. Before publication, each owner must review and approve their testimonial, ideally in their own words. Real always beats polished."

**Note:** This is a P1 template implementation. P2 will involve getting real owner approval and potentially updating quotes to owner's own words.

---

### AC-018: Accessibility - Screen Readers

GIVEN I am using a screen reader
WHEN navigating the Testimonials section
THEN the section has proper heading hierarchy (h2 for section title)
AND each testimonial is in a semantic article or blockquote element
AND images have descriptive alt text
AND quote attribution is properly associated with the quote
AND keyboard navigation works correctly

---

### AC-019: No Placeholder Names in Production

GIVEN owner names are marked as "[Owner name]" placeholders
WHEN rendering the testimonials
THEN placeholder owner names are handled gracefully
AND either:
  - Real names are used if provided in CMS/data
  - OR placeholder is shown as "Workshop Owner" (not "[Owner name]")
  - OR the first name from the workshop is used if available

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | src/app/entrepreneurs/page.test.tsx | renders testimonials section with Linen White background | ✅ |
| AC-002 | src/app/entrepreneurs/page.test.tsx | displays section header with decorative line | ✅ |
| AC-003 | src/components/entrepreneurs/TestimonialsSection.test.tsx | renders testimonials in responsive grid layout | ✅ |
| AC-004 | src/components/entrepreneurs/TestimonialCard.test.tsx | renders card with all structural elements | ✅ |
| AC-005 | src/content/testimonials.test.ts | has correct Martin/Däckpoint testimonial content | ✅ |
| AC-006 | src/content/testimonials.test.ts | has correct Verksta'n testimonial content | ✅ |
| AC-007 | src/content/testimonials.test.ts | has correct Svenska Däckgruppen testimonial content | ✅ |
| AC-008 | src/components/entrepreneurs/TestimonialCard.test.tsx | renders workshop photo with Next Image when URL provided | ✅ |
| AC-009 | src/components/entrepreneurs/TestimonialCard.test.tsx | renders circular owner portrait with overlap styling | ✅ |
| AC-010 | src/components/entrepreneurs/TestimonialCard.test.tsx | shows branded placeholders for missing photos | ✅ |
| AC-011 | src/components/entrepreneurs/TestimonialCard.test.tsx | applies correct quote text styling | ✅ |
| AC-012 | src/components/entrepreneurs/TestimonialCard.test.tsx | applies correct attribution styling | ✅ |
| AC-013 | src/components/entrepreneurs/TestimonialCard.test.tsx | applies correct key fact styling with bullet separators | ✅ |
| AC-014 | src/components/entrepreneurs/TestimonialsSection.test.tsx | renders single column layout on mobile | ✅ |
| AC-015 | src/components/entrepreneurs/TestimonialsSection.test.tsx | renders two column layout on tablet | ✅ |
| AC-016 | src/components/entrepreneurs/TestimonialsSection.test.tsx | renders three column layout on desktop | ✅ |
| AC-017 | src/content/testimonials.test.ts | testimonials match copy deck content exactly | ✅ |
| AC-018 | src/components/entrepreneurs/TestimonialCard.test.tsx | provides accessible markup and labels | ✅ |
| AC-019 | src/components/entrepreneurs/TestimonialCard.test.tsx | handles placeholder owner names gracefully | ✅ |

---

## 4. Technical Specification

### File Structure
```
src/
├── content/
│   └── testimonials.ts              # Testimonial data
├── components/
│   └── entrepreneurs/
│       ├── TestimonialCard.tsx      # Individual testimonial card
│       ├── TestimonialCard.test.tsx # Card component tests
│       └── TestimonialsSection.tsx  # Section container
│       └── TestimonialsSection.test.tsx
└── app/
    └── entrepreneurs/
        └── page.tsx                 # Add section to page
```

### Data Model
```typescript
interface Testimonial {
  id: string
  workshopName: string
  city: string
  ownerName: string // May be placeholder
  quote: string
  keyFact: string
  workshopPhotoUrl?: string
  ownerPhotoUrl?: string
  acquisitionDate: string // e.g., "October 2025"
  order: number
}
```

### Design Tokens
```typescript
Background: Linen White (#F5F0EB)
Card Background: White
Text: Gray-700 (quote), Nordic Black (attribution)
Accent: AutoCap Red (#C8102E) for key facts
```

### Dependencies
- Next.js Image component
- Reuse PhotoPlaceholder component from team section
- Tailwind CSS for styling

---

## 5. Open Questions

1. ✅ **Owner names:** Two testimonials have "[Owner name]" placeholders. For P1 launch, should we:
   - Use "Workshop Owner" as placeholder?
   - Use first names only?
   - Wait for real names before launching?

2. ✅ **Photos:** Do we have workshop exterior photos and owner portraits ready?
   - If not, we'll use branded placeholders per AC-010

3. ✅ **Section placement:** Exact position on `/entrepreneurs` page?
   - Recommendation: After "Why AutoCap" benefits, before contact CTA
   - Alternative: After hero, before main content

4. ✅ **P2 Content updates:** Process for getting owner approval and updating quotes?
   - Document for future reference
   - Not blocking for P1 template implementation

---

## 6. Design References

Per copy deck section 4.4:
- Format: workshop photo, owner portrait, name, workshop name, city, 2–3 sentence quote, one key fact line
- Linen White background
- Real photography preferred, placeholders acceptable for P1

Visual inspiration:
- Customer testimonials with photos (authentic, not stock)
- Portrait overlapping workshop photo (depth/connection)
- Quote-forward design (quote is hero element)

---

## 7. Implementation Notes

### Phase 1 (P1): Template Implementation
- Build component structure
- Implement with copy deck content
- Use placeholders for missing photos
- Handle "[Owner name]" gracefully

### Phase 2 (P2): Content Refinement
- Get real owner approval for quotes
- Update quotes to owner's own words if needed
- Add real workshop and owner photos
- Add more testimonials as acquisitions grow

### Future Enhancements
- CMS integration for easy testimonial management
- Video testimonials
- Filtering by region or workshop type
- "Load more" for > 3 testimonials

---

## 8. Success Metrics (Post-Launch)

- Scroll depth: % of entrepreneur page visitors who reach testimonials
- Time on section: Average engagement time
- Conversion impact: Contact form submissions before/after testimonials
- A/B testing: With/without testimonials impact on conversion

---

## 9. Copy Deck Compliance

This spec is based on **Website Copy Deck v1.1, Section 4.4 - Testimonials**.

All content, styling, and structure follows the copy deck specifications exactly.

---

## 10. Test Plan

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | integration | `src/app/entrepreneurs/page.test.tsx` | `renders testimonials section with Linen White background` | None | Section missing, wrong background color |
| AC-002 | integration | `src/app/entrepreneurs/page.test.tsx` | `displays section header with decorative line` | None | Missing heading, wrong text |
| AC-003 | integration | `src/components/entrepreneurs/TestimonialsSection.test.tsx` | `renders testimonials in responsive grid layout` | Mock testimonials data | Empty testimonials array |
| AC-004 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `renders card with all structural elements` | Single testimonial object | Missing fields |
| AC-005 | unit | `src/content/testimonials.test.ts` | `has correct Martin/Däckpoint testimonial content` | None | Content mismatch |
| AC-006 | unit | `src/content/testimonials.test.ts` | `has correct Verksta'n testimonial content` | None | Content mismatch |
| AC-007 | unit | `src/content/testimonials.test.ts` | `has correct Svenska Däckgruppen testimonial content` | None | Content mismatch |
| AC-008 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `renders workshop photo with Next Image when URL provided` | Testimonial with photoUrl | Invalid URL, missing alt text |
| AC-009 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `renders circular owner portrait with overlap styling` | Testimonial with ownerPhotoUrl | Invalid URL, missing styling |
| AC-010 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `shows branded placeholders for missing photos` | Testimonial without photos | Placeholder not shown |
| AC-011 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `applies correct quote text styling` | Testimonial with quote | Missing quotation marks, wrong alignment |
| AC-012 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `applies correct attribution styling` | Testimonial with owner/workshop | Missing bold, wrong color |
| AC-013 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `applies correct key fact styling with bullet separators` | Testimonial with keyFact | Wrong color, missing separators |
| AC-014 | integration | `src/components/entrepreneurs/TestimonialsSection.test.tsx` | `renders single column layout on mobile` | Mock testimonials | Grid not stacking |
| AC-015 | integration | `src/components/entrepreneurs/TestimonialsSection.test.tsx` | `renders two column layout on tablet` | Mock testimonials | Wrong column count |
| AC-016 | integration | `src/components/entrepreneurs/TestimonialsSection.test.tsx` | `renders three column layout on desktop` | Mock testimonials | Wrong column count |
| AC-017 | unit | `src/content/testimonials.test.ts` | `testimonials match copy deck content exactly` | None | Content drift |
| AC-018 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `provides accessible markup and labels` | Testimonial object | Missing ARIA labels, wrong elements |
| AC-019 | unit | `src/components/entrepreneurs/TestimonialCard.test.tsx` | `handles placeholder owner names gracefully` | Testimonial with "[Owner name]" | Literal placeholder shown |

**Cross-cutting tests:**
- Responsive breakpoints: Covered by AC-014, AC-015, AC-016 (320px, 768px, 1024px)
- Accessibility: Covered by AC-018 (semantic HTML, ARIA, keyboard nav)
- Photo placeholder reuse: Can reuse `PhotoPlaceholder` component from team section

**Total tests planned:** 19 tests
- **Unit tests:** 13 (content validation, card component, styling)
- **Integration tests:** 6 (section layout, page integration, responsive grid)
- **E2E tests:** 0 (not needed for this feature)

**Component hierarchy:**
1. **Content layer** (`src/content/testimonials.ts`) - 3 tests
2. **TestimonialCard component** (`src/components/entrepreneurs/TestimonialCard.tsx`) - 10 tests
3. **TestimonialsSection component** (`src/components/entrepreneurs/TestimonialsSection.tsx`) - 4 tests
4. **Page integration** (`src/app/entrepreneurs/page.tsx`) - 2 tests

**Fixtures needed:**
```typescript
// Mock testimonial data for testing
const mockTestimonial: Testimonial = {
  id: 'test-1',
  workshopName: 'Test Workshop',
  city: 'Stockholm',
  ownerName: 'Test Owner',
  quote: 'This is a test quote for validation.',
  keyFact: 'Test Workshop · Test acquisition · January 2026',
  workshopPhotoUrl: '/images/test-workshop.jpg',
  ownerPhotoUrl: '/images/test-owner.jpg',
  acquisitionDate: 'January 2026',
  order: 1
}

const mockTestimonialWithoutPhotos: Testimonial = {
  ...mockTestimonial,
  workshopPhotoUrl: undefined,
  ownerPhotoUrl: undefined
}

const mockTestimonialWithPlaceholderName: Testimonial = {
  ...mockTestimonial,
  ownerName: '[Owner name]'
}
```

**Test implementation order (TDD):**
1. Content layer (AC-005, AC-006, AC-007, AC-017) - validate data structure
2. TestimonialCard component (AC-004, AC-008-013, AC-018, AC-019) - unit tests
3. TestimonialsSection component (AC-003, AC-014-016) - integration tests
4. Page integration (AC-001, AC-002) - page-level tests

---

**Status:** Test Plan Complete
**Next Step:** User approval to proceed to implementation (/implement)
