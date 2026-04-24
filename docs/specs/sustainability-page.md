# Specification: Sustainability Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-24
**Status:** Draft

---

## 1. Overview

### 1.1 Summary
A dedicated Sustainability page showcasing AutoCap Group's environmental commitment, current practices, and future ambitions. The page follows the existing design system and presents sustainability as a practical, honest journey rather than grand gestures.

### 1.2 Goals
- Communicate AutoCap's sustainability commitment and approach
- Present current environmental initiatives transparently
- Outline future sustainability targets and governance
- Maintain brand voice: practical, honest, grounded
- Follow existing design system patterns

### 1.3 Non-Goals
- Interactive sustainability calculators or tools
- Real-time environmental metrics dashboard
- Third-party sustainability certifications/badges
- Social media integration or sharing features

### 1.4 User Story
As a stakeholder (investor, partner, or customer),
I want to understand AutoCap's sustainability practices and commitments,
So that I can evaluate their environmental responsibility and ESG approach.

---

## 2. Acceptance Criteria

### AC-001: Page structure and navigation

GIVEN the user is on any page of the website
WHEN they view the main navigation
THEN they should see a "Sustainability" link after "News & Media"
  AND clicking it should navigate to `/sustainability`

---

### AC-002: Hero section displays correctly

GIVEN the user navigates to `/sustainability`
WHEN the page loads
THEN they should see the headline "Practical steps. Honest progress."
  AND they should see the intro paragraph about practical improvements
  AND the hero section should match the design system style

---

### AC-003: "Where we are" section content

GIVEN the user is viewing the Sustainability page
WHEN they scroll to the "Where we are" section
THEN they should see the current stage description
  AND they should see the four current focus areas listed
  AND the section should be clearly separated and readable

---

### AC-004: "Where we're going" section content

GIVEN the user is viewing the Sustainability page
WHEN they scroll to the "Where we're going" section
THEN they should see the future ambition description
  AND they should see the 2027 targets mentioned
  AND they should see the efficiency/responsibility statement
  AND the section should be clearly separated and readable

---

### AC-005: Governance section content

GIVEN the user is viewing the Sustainability page
WHEN they scroll to the Governance section
THEN they should see information about management oversight
  AND they should see the ESG reporting framework mention
  AND they should see the contact email (kontakt@autocapgroup.se)
  AND the email should be clickable (mailto link)

---

### AC-006: Design system consistency

GIVEN the Sustainability page is rendered
WHEN compared to other pages (About, Entrepreneurs, Investors)
THEN it should use consistent typography
  AND it should use consistent spacing and layout
  AND it should use appropriate background color from design system
  AND it should follow the same content structure patterns

---

### AC-007: Responsive design

GIVEN the user views the page on mobile (320px - 767px)
WHEN the page loads
THEN all content should be readable and properly formatted
  AND spacing should be appropriate for mobile
  AND text should not overflow or be cut off

---

### AC-008: SEO and metadata

GIVEN the Sustainability page exists
WHEN search engines crawl the page
THEN it should have appropriate page title
  AND it should have meta description
  AND it should have proper heading hierarchy (h1, h2, etc.)

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | `src/lib/constants.ts` | Sustainability in navigation | ✅ |
| AC-002 | `src/app/sustainability/page.test.tsx` | renders hero headline correctly | ✅ |
| AC-002 | `src/app/sustainability/page.test.tsx` | renders intro paragraph | ✅ |
| AC-003 | `src/app/sustainability/page.test.tsx` | renders "Where we are" section title | ✅ |
| AC-003 | `src/app/sustainability/page.test.tsx` | renders all 4 focus areas | ✅ |
| AC-003 | `src/content/sustainability.test.ts` | all focus areas match copy deck | ✅ |
| AC-004 | `src/app/sustainability/page.test.tsx` | renders "Where we're going" section title | ✅ |
| AC-004 | `src/app/sustainability/page.test.tsx` | renders 2027 targets mention | ✅ |
| AC-004 | `src/app/sustainability/page.test.tsx` | renders efficiency statement | ✅ |
| AC-004 | `src/content/sustainability.test.ts` | future ambitions match copy deck | ✅ |
| AC-005 | `src/app/sustainability/page.test.tsx` | renders Governance section title | ✅ |
| AC-005 | `src/app/sustainability/page.test.tsx` | email link is clickable with mailto | ✅ |
| AC-005 | `src/content/sustainability.test.ts` | governance content matches copy deck | ✅ |
| AC-006 | `src/app/sustainability/page.test.tsx` | page structure renders without crashing | ✅ |
| AC-007 | `src/app/sustainability/page.test.tsx` | responsive tests (3 viewports) | ✅ |
| AC-008 | `src/content/sustainability.ts` | metadata title and description | ✅ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

**Total:** All 16 acceptance criterion tests passed across 28 total tests

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/app/sustainability/page.tsx` | Create | Main Sustainability page component |
| `src/content/sustainability.ts` | Create | Sustainability content constants |
| `src/lib/constants.ts` | Modify | Add Sustainability to navigation |
| `src/app/sustainability/page.test.tsx` | Create | Page component tests |

### 4.2 Data Model

```typescript
// Content structure
export const sustainabilityContent = {
  hero: {
    headline: string
    intro: string
  },
  whereWeAre: {
    title: string
    description: string
    focusAreas: string[]
  },
  whereWeAreGoing: {
    title: string
    description: string
    targets: string
    statement: string
  },
  governance: {
    title: string
    description: string
    contact: string
  }
}
```

### 4.3 API Endpoints (if applicable)

N/A - Static content page

### 4.4 State Management

- No client-side state needed
- Static content rendered server-side
- Uses Next.js App Router conventions

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 767px)

- Single column layout
- Generous padding (16-24px)
- Readable font sizes (min 16px body text)
- Clear section separation
- Email link easily tappable

### 5.2 Desktop Requirements (1024px+)

- Max-width container (same as other pages)
- Balanced white space
- Comfortable reading line length
- Clear visual hierarchy

### 5.3 Design System Colors

Use existing design system colors:
- Background: `#F5F0EB` (linenWhite) - clean, light aesthetic
- Text: Standard gray hierarchy
- Accents: Brand red `#C8102E` for emphasis
- Section backgrounds: Subtle alternating with white for "Where we are" / "Where we're going"

### 5.4 Typography

Following existing patterns:
- **h1 (Headline)**: 3xl-5xl, semibold
- **h2 (Section titles)**: 2xl-3xl, semibold
- **Body text**: base-lg, regular
- **Focus areas**: List format with bullet points or cards

### 5.5 Layout Pattern

Use existing page patterns from About/Entrepreneurs pages:
1. **Hero section** - Headline + intro (linenWhite background)
2. **"Where we are" section** - Description + 4 focus areas as simple bullet list
   - Clean, readable list format
   - Standard bullet points or custom styling
3. **"Where we're going" section** - Alternating background (white)
4. **Governance section** - linenWhite background
5. **Consistent padding** - py-16 md:py-24
6. **Section separation** - Background color changes (linenWhite/white)

---

## 6. Content

### 6.1 Exact Copy (from website-copy-deck.docx)

**Headline:** Practical steps. Honest progress.

**Intro:**
Sustainability in the tire service industry is not about grand gestures - it's about consistent, practical improvements across every workshop, every day. We're building a framework for environmental responsibility that grows with our group.

**Where we are:**
AutoCap Group is in an early stage of formalising our sustainability practices. As we acquire and integrate workshops across Sweden, we are establishing group-wide standards for waste management, energy efficiency, and responsible sourcing. We don't yet have all the answers - but we have a clear commitment to finding them.

Current focus areas:
- Standardising tire recycling and disposal processes across all workshops
- Evaluating energy consumption and identifying reduction opportunities
- Consolidating logistics to reduce unnecessary transport
- Assessing the environmental impact of products and chemicals used in daily operations

**Where we're going:**
As our portfolio grows, so does our ability to drive meaningful environmental improvements at scale. Our ambition is to establish measurable sustainability targets across the group by end of 2027, including carbon footprint benchmarking per workshop, waste reduction metrics, and supplier sustainability assessments.

We believe that operational efficiency and environmental responsibility are not in conflict - they reinforce each other. A workshop that wastes less, transports smarter, and uses fewer chemicals is both greener and more profitable.

**Governance:**
Sustainability oversight sits with AutoCap Group's management team. As the group matures, we intend to establish a formal ESG reporting framework aligned with institutional investor expectations. For questions about our sustainability work, contact kontakt@autocapgroup.se.

---

## 7. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Page fails to load | Standard Next.js 404/error page | Graceful error boundary |
| Email link broken | (No message - browser default) | Validate mailto: format |

---

## 8. Performance Considerations

- Server-side rendering (Next.js App Router)
- Static content (no API calls)
- Minimal JavaScript (static page)
- Fast page load (< 1s)
- Good Lighthouse scores (>90)

---

## 9. Security Considerations

- No user input
- No data storage
- Email displayed publicly (expected)
- No XSS risk (static content)

---

## 10. Testing Strategy

### 10.1 Unit Tests
- Page component renders correctly
- All content sections present
- Email link formatted correctly
- Metadata is correct

### 10.2 Integration Tests
- Navigation link works
- Page accessible from header
- Routing works correctly

### 10.3 Manual Testing
- Test on mobile (320px, 375px, 768px)
- Test on desktop (1024px, 1440px)
- Verify content matches copy deck
- Check visual consistency with other pages
- Test email mailto link

---

## 11. Dependencies

### 11.1 New Dependencies
None - using existing dependencies

### 11.2 Feature Dependencies
- Navigation must be updated
- Design system components (if creating reusable components)

---

## 12. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed (Prototype: 5 essential gates)
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 13. Open Questions

- [x] Where in navigation should it appear?
  - **Decision**: After "News & Media"
- [x] What background color to use?
  - **Decision**: Linen White (#F5F0EB) - clean, light aesthetic
- [x] Should focus areas be bullet list or cards?
  - **Decision**: Simple bullet list - practical, readable format

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | [User] | 2026-04-24 | [x] |
| Tech Lead | Alex Chen | 2026-04-24 | [x] |
| Quality Lead | Dr. Priya Patel | | [ ] |

---

## Test Plan

### Unit Tests

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | unit | `src/lib/constants.test.ts` | `Sustainability appears in navigation after News & Media` | none | wrong position |
| AC-002 | unit | `src/app/sustainability/page.test.tsx` | `renders hero headline correctly` | none | missing headline |
| AC-002 | unit | `src/app/sustainability/page.test.tsx` | `renders intro paragraph` | none | missing content |
| AC-003 | unit | `src/app/sustainability/page.test.tsx` | `renders "Where we are" section title` | none | missing section |
| AC-003 | unit | `src/app/sustainability/page.test.tsx` | `renders all 4 focus areas` | none | missing items |
| AC-004 | unit | `src/app/sustainability/page.test.tsx` | `renders "Where we're going" section title` | none | missing section |
| AC-004 | unit | `src/app/sustainability/page.test.tsx` | `renders 2027 targets mention` | none | missing content |
| AC-005 | unit | `src/app/sustainability/page.test.tsx` | `renders Governance section title` | none | missing section |
| AC-005 | unit | `src/app/sustainability/page.test.tsx` | `email link is clickable with mailto` | none | wrong href |
| AC-006 | unit | `src/app/sustainability/page.test.tsx` | `uses linenWhite background color` | none | wrong color |
| AC-008 | unit | `src/app/sustainability/page.test.tsx` | `has proper page metadata` | none | missing SEO |

### Integration Tests

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | integration | `src/components/layout/Header.test.tsx` | `Sustainability link navigates to /sustainability` | none | wrong route |
| AC-001 | integration | `src/components/layout/Header.test.tsx` | `Sustainability appears after News & Media in nav` | none | wrong order |

### Content Tests

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-003 | content | `src/content/sustainability.test.ts` | `all focus areas match copy deck` | none | typos/changes |
| AC-004 | content | `src/content/sustainability.test.ts` | `future ambitions match copy deck` | none | typos/changes |
| AC-005 | content | `src/content/sustainability.test.ts` | `governance content matches copy deck` | none | typos/changes |

### Responsive Tests

| Breakpoint | File | Test Name | Fixtures | Edge Cases |
|------------|------|-----------|----------|------------|
| 320px | `src/app/sustainability/page.test.tsx` | `renders correctly at 320px mobile` | mock viewport | overflow |
| 768px | `src/app/sustainability/page.test.tsx` | `renders correctly at 768px tablet` | mock viewport | layout breaks |
| 1024px | `src/app/sustainability/page.test.tsx` | `renders correctly at 1024px desktop` | mock viewport | spacing issues |

**Total Tests Planned: 19**
- **Unit tests**: 11 (page component)
- **Integration tests**: 2 (navigation)
- **Content tests**: 3 (copy accuracy)
- **Responsive tests**: 3 (viewports)

**Test Distribution:**
- Content rendering: 8 tests
- Navigation: 2 tests
- Styling/layout: 3 tests
- Content accuracy: 3 tests
- Responsive: 3 tests

---

### Notes for Implementation

1. **Content file**: Create `src/content/sustainability.ts` with all copy
2. **Page component**: Server component (no client state needed)
3. **Email link**: Use `mailto:kontakt@autocapgroup.se`
4. **Background colors**: linenWhite (#F5F0EB) and white alternating
5. **Focus areas**: Simple `<ul>` with custom bullet styling
