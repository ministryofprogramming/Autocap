# Specification: Investors Case Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-24
**Status:** Draft

---

## 1. Overview

### 1.1 Summary
A dedicated Investment Case page at `/investors/case` presenting the market opportunity, AutoCap's six-pillar value creation strategy, and growth milestones. The page targets institutional investors and provides a clear investment thesis without disclosing sensitive financial details.

### 1.2 Goals
- Present compelling market opportunity data
- Communicate the six-pillar value creation strategy
- Visualize growth milestones and roadmap
- Maintain professional investor-focused tone
- Follow existing design system patterns

### 1.3 Non-Goals
- Detailed financial projections (EBITDA, multiples)
- Investor login or gated content
- Interactive financial calculators
- Real-time metrics dashboard
- Social sharing features

### 1.4 User Story
As an institutional investor,
I want to understand AutoCap's investment case and growth strategy,
So that I can evaluate the market opportunity and value creation approach.

---

## 2. Acceptance Criteria

### AC-001: Page accessible at /investors/case

GIVEN the user is on the website
WHEN they navigate to `/investors/case`
THEN the page should load successfully
  AND it should display the Investment Case content

---

### AC-002: Market Opportunity section

GIVEN the user is viewing the Investment Case page
WHEN they see the Market Opportunity section
THEN it should display the market size (SEK 15-20 billion)
  AND it should mention ~2,000 independent workshops
  AND it should describe the consolidation opportunity
  AND it should present the value creation opportunity

---

### AC-003: Six Pillars strategy section

GIVEN the user is viewing the Investment Case page
WHEN they scroll to the Strategy section
THEN it should display a title "The AutoCap Strategy — Six pillars of value creation"
  AND it should show 6 pillar cards in a 2x3 grid on desktop
  AND it should show pillars stacked vertically on mobile
  AND each pillar should have an icon, title, and description

---

### AC-004: All six pillars are present

GIVEN the user is viewing the Six Pillars section
WHEN examining the pillar cards
THEN it should include "Strategic Acquisitions" pillar
  AND it should include "Procurement Consolidation" pillar
  AND it should include "Operational Efficiency" pillar
  AND it should include "Data & Analytics" pillar
  AND it should include "Cross-Sell & Partnerships" pillar
  AND it should include "Customer Experience" pillar

---

### AC-005: Growth Milestones timeline

GIVEN the user is viewing the Investment Case page
WHEN they scroll to the Growth Milestones section
THEN it should display a visual roadmap/timeline
  AND completed milestones (H2 2025, Q1 2026) should be styled in red
  AND future milestones (2026, 2027, 2028) should be styled in grey
  AND each milestone should show the period and description

---

### AC-006: Financial disclosure note

GIVEN the user is viewing the Growth Milestones section
WHEN they see the timeline
THEN there should be a disclaimer note below
  AND it should state that detailed financials are not published
  AND it should mention that qualified investors receive info through direct dialogue

---

### AC-007: Responsive grid layout

GIVEN the user views the Six Pillars on different devices
WHEN on desktop (≥1024px)
THEN pillars should display in a 2x3 grid (2 columns, 3 rows)
WHEN on tablet (768px - 1023px)
THEN pillars should display in a 2x3 grid or 2 columns
WHEN on mobile (<768px)
THEN pillars should stack vertically (1 column)

---

### AC-008: Design system consistency

GIVEN the Investors Case page is rendered
WHEN compared to other pages
THEN it should use consistent typography and spacing
  AND it should use the fjord background color (#C9D8E8) for Investors section
  AND it should follow the same hero pattern

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | | | ⏳ |
| AC-002 | | | ⏳ |
| AC-003 | | | ⏳ |
| AC-004 | | | ⏳ |
| AC-005 | | | ⏳ |
| AC-006 | | | ⏳ |
| AC-007 | | | ⏳ |
| AC-008 | | | ⏳ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/app/investors/case/page.tsx` | Create | Investment Case page component |
| `src/content/investors-case.ts` | Create | Investment case content constants |
| `src/components/investors/InvestmentPillar.tsx` | Create | Pillar card component |
| `src/components/investors/GrowthTimeline.tsx` | Create | Timeline/roadmap component |
| `src/app/investors/case/page.test.tsx` | Create | Page component tests |
| `src/components/investors/InvestmentPillar.test.tsx` | Create | Pillar component tests |
| `src/components/investors/GrowthTimeline.test.tsx` | Create | Timeline component tests |

### 4.2 Data Model

```typescript
// Investment Pillars
interface InvestmentPillar {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

// Growth Milestones
interface GrowthMilestone {
  period: string
  description: string
  status: 'completed' | 'target'
}

// Content structure
export const investorsCaseContent = {
  hero: {
    title: string
    subtitle?: string
  },
  marketOpportunity: {
    title: string
    paragraphs: string[]
  },
  strategy: {
    title: string
    pillars: InvestmentPillar[]
  },
  milestones: {
    title: string
    items: GrowthMilestone[]
    disclaimer: string
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

- Single column layout for all sections
- Pillars stack vertically (1 column)
- Timeline displays vertically
- Readable font sizes (min 16px body)
- Adequate spacing between sections

### 5.2 Tablet Requirements (768px - 1023px)

- Pillars in 2-column grid
- Timeline can be horizontal or vertical
- Comfortable reading width

### 5.3 Desktop Requirements (1024px+)

- Pillars in 2x3 grid layout
- Timeline horizontal or stepped
- Max-width container for readability

### 5.4 Design System Colors

Use existing Investors color scheme:
- **Background**: Fjord (#C9D8E8) for hero and sections
- **Accents**: Brand red (#C8102E) for emphasis
- **Milestones**:
  - Completed: Red (#C8102E)
  - Future: Grey (#9CA3AF)

### 5.5 Component Design

**Investment Pillar Card:**
- Icon at top (lucide-react)
- Title (font-bold, text-xl)
- Description (2 sentences, text-base)
- Border or subtle background
- Hover effect (optional lift/shadow)

**Growth Timeline:**
- Visual roadmap presentation
- Period labels (H2 2025, Q1 2026, etc.)
- Milestone descriptions
- Color coding: red (completed) vs grey (target)
- Connection lines between milestones (optional)

---

## 6. Content

### 6.1 Market Opportunity (Exact Copy)

**Title:** Market Opportunity

**Paragraphs:**
1. The Swedish tire service market is valued at approximately SEK 15–20 billion annually, spanning passenger vehicles, commercial fleets, and specialty segments. The market is served by roughly 2,000 independent workshops - the vast majority owner-operated, single-location businesses with no succession plan.

2. Consolidation has begun. International players backed by private equity capital are acquiring workshops across the Nordics. But the market remains highly fragmented, and the majority of independent operators have yet to find a partner.

3. For a disciplined acquirer with industry knowledge and operational capability, the opportunity is significant: proven cash flows, attractive entry multiples, and meaningful value creation through procurement consolidation, operational improvement, and geographic density.

### 6.2 Six Pillars (Exact Copy)

**Title:** The AutoCap Strategy — Six pillars of value creation

**Pillars:**
1. **Strategic Acquisitions**: We target well-run, profitable workshops with strong local reputations and owners open to partnership.

2. **Procurement Consolidation**: Group purchasing power across tires, consumables, and equipment. Direct margin improvement that compounds.

3. **Operational Efficiency**: Centralised finance, HR, compliance, and administration. Scalable operating model.

4. **Data & Analytics**: Structured reporting, common KPIs, inventory optimisation, and demand forecasting.

5. **Cross-Sell & Partnerships**: Adjacent services: wheel alignment, fleet contracts, seasonal storage, supplier partnerships.

6. **Customer Experience**: Local brand preservation + group-level quality standards. Consistent service delivery.

### 6.3 Growth Milestones (Exact Copy)

**Title:** Growth Milestones

**Milestones:**
- **H2 2025** (completed): Platform established. Three founding acquisitions completed.
- **Q1 2026** (completed): Largest acquisition completed (7-unit Stockholm group). Portfolio reaches 12 workshops.
- **2026** (target): Scaling phase. Targeting 20+ workshops. Operational playbook standardised.
- **2027** (target): Geographic expansion. Target: 35+ workshops across Sweden's major regions.
- **2028** (target): Platform maturity. ~50 workshops, revenues approaching SEK 1 billion.

**Disclaimer:**
No EBITDA figures, acquisition multiples, or detailed financial projections are published. Revenue targets are directional only. Qualified investors receive detailed information through direct dialogue.

---

## 7. Icon Mapping (Suggested)

| Pillar | Suggested Icon (lucide-react) |
|--------|-------------------------------|
| Strategic Acquisitions | Target, Handshake |
| Procurement Consolidation | ShoppingCart, Package |
| Operational Efficiency | Settings, Zap |
| Data & Analytics | BarChart3, TrendingUp |
| Cross-Sell & Partnerships | Network, Users |
| Customer Experience | Star, Heart |

---

## 8. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Page fails to load | Standard Next.js 404/error | Graceful error boundary |
| Missing content | Component renders empty | Log error, show fallback |

---

## 9. Performance Considerations

- Server-side rendering
- Static content (no API calls)
- Minimal JavaScript
- Fast page load (<1s)
- Lighthouse score >90

---

## 10. Security Considerations

- No user input
- No sensitive financial data displayed
- Public page (no authentication)
- No XSS risk (static content)

---

## 11. Testing Strategy

### 11.1 Unit Tests
- Page component renders correctly
- All content sections present
- 6 pillars displayed
- Timeline shows all milestones
- Milestone status colors correct
- Disclaimer text present

### 11.2 Integration Tests
- Navigation to /investors/case works
- Page accessible from site navigation

### 11.3 Component Tests
- InvestmentPillar component renders icon, title, description
- GrowthTimeline renders all milestones with correct status

### 11.4 Manual Testing
- Test on mobile (320px, 375px, 768px)
- Test on desktop (1024px, 1440px)
- Verify content matches copy deck
- Check 2x3 grid layout on desktop
- Verify mobile stacking

---

## 12. Dependencies

### 12.1 New Dependencies
None - using existing dependencies (lucide-react for icons)

### 12.2 Feature Dependencies
- Need to add navigation link (possibly under Investors submenu)
- Reusable components for pillars and timeline

---

## 13. Navigation Integration

**Options:**
1. Add to Investors dropdown: `/investors` → Investment Case
2. Standalone Investors nav with submenu
3. Link from main Investors page

**Recommendation:** Add as submenu item under existing Investors navigation

---

## 14. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed (Prototype: 5 essential gates)
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 15. Open Questions

- [ ] Should this page be under the Investors submenu or standalone?
  - **Awaiting user decision**
- [ ] Exact icons for each pillar?
  - **Suggested mapping provided, awaiting confirmation**
- [ ] Timeline design preference: horizontal roadmap or vertical stepped?
  - **Awaiting user decision**
- [ ] Should main `/investors` page link to this case page prominently?
  - **Awaiting user decision**

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | [User] | 2026-04-24 | [x] |
| Tech Lead | Alex Chen | 2026-04-24 | [x] |
| Quality Lead | Dr. Priya Patel | | [ ] |

---

## Test Plan

### Unit Tests - Page Component

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | unit | `src/app/investors/case/page.test.tsx` | `page renders without crashing` | none | component fails to mount |
| AC-002 | unit | `src/app/investors/case/page.test.tsx` | `displays market size SEK 15-20B` | none | missing content |
| AC-002 | unit | `src/app/investors/case/page.test.tsx` | `mentions 2000 workshops` | none | wrong number |
| AC-002 | unit | `src/app/investors/case/page.test.tsx` | `Market Opportunity section title renders` | none | missing section |
| AC-003 | unit | `src/app/investors/case/page.test.tsx` | `displays strategy section title` | none | missing title |
| AC-003 | unit | `src/app/investors/case/page.test.tsx` | `renders 6 pillar cards` | none | wrong count |
| AC-004 | unit | `src/app/investors/case/page.test.tsx` | `all 6 pillar titles are present` | none | missing pillars |
| AC-005 | unit | `src/app/investors/case/page.test.tsx` | `Growth Milestones section renders` | none | missing section |
| AC-005 | unit | `src/app/investors/case/page.test.tsx` | `displays all 5 milestones` | none | wrong count |
| AC-006 | unit | `src/app/investors/case/page.test.tsx` | `disclaimer note is present` | none | missing disclaimer |
| AC-008 | unit | `src/app/investors/case/page.test.tsx` | `has proper page metadata` | none | missing SEO |

### Unit Tests - InvestmentPillar Component

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-003 | unit | `src/components/investors/InvestmentPillar.test.tsx` | `renders icon, title, description` | mock pillar data | missing props |
| AC-003 | unit | `src/components/investors/InvestmentPillar.test.tsx` | `displays correct icon` | mock pillar | invalid icon |
| AC-003 | unit | `src/components/investors/InvestmentPillar.test.tsx` | `renders title text` | mock pillar | empty title |
| AC-003 | unit | `src/components/investors/InvestmentPillar.test.tsx` | `renders description text` | mock pillar | empty description |
| AC-007 | unit | `src/components/investors/InvestmentPillar.test.tsx` | `has responsive classes` | none | missing breakpoints |

### Unit Tests - GrowthTimeline Component

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-005 | unit | `src/components/investors/GrowthTimeline.test.tsx` | `renders all milestones` | mock milestones | empty array |
| AC-005 | unit | `src/components/investors/GrowthTimeline.test.tsx` | `completed milestones have red styling` | completed milestone | wrong color |
| AC-005 | unit | `src/components/investors/GrowthTimeline.test.tsx` | `target milestones have grey styling` | target milestone | wrong color |
| AC-005 | unit | `src/components/investors/GrowthTimeline.test.tsx` | `displays period and description` | mock milestone | missing data |

### Content Tests

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-002 | content | `src/content/investors-case.test.ts` | `market opportunity paragraphs match copy deck` | none | typos/changes |
| AC-004 | content | `src/content/investors-case.test.ts` | `all 6 pillars defined` | none | missing pillar |
| AC-004 | content | `src/content/investors-case.test.ts` | `pillar titles match copy deck` | none | wrong titles |
| AC-005 | content | `src/content/investors-case.test.ts` | `all 5 milestones defined` | none | missing milestone |
| AC-005 | content | `src/content/investors-case.test.ts` | `milestone status correctly set` | none | wrong status |
| AC-006 | content | `src/content/investors-case.test.ts` | `disclaimer text matches copy deck` | none | missing disclaimer |

### Responsive Tests

| Breakpoint | File | Test Name | Fixtures | Edge Cases |
|------------|------|-----------|----------|------------|
| 320px | `src/app/investors/case/page.test.tsx` | `renders correctly at 320px mobile` | mock viewport | content overflow |
| 768px | `src/app/investors/case/page.test.tsx` | `renders correctly at 768px tablet` | mock viewport | grid breaks |
| 1024px | `src/app/investors/case/page.test.tsx` | `renders correctly at 1024px desktop` | mock viewport | wrong layout |
| 1024px | `src/app/investors/case/page.test.tsx` | `pillars display in 2x3 grid on desktop` | mock viewport | wrong grid |

### Integration Tests

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | integration | `src/components/layout/Header.test.tsx` | `Investors submenu includes Case link` | none | missing link |
| AC-001 | integration | `src/components/layout/Header.test.tsx` | `Investment Case link navigates to /investors/case` | none | wrong route |

**Total Tests Planned: 36**
- **Unit tests (Page)**: 11 tests
- **Unit tests (InvestmentPillar)**: 5 tests
- **Unit tests (GrowthTimeline)**: 4 tests
- **Content tests**: 6 tests
- **Responsive tests**: 4 tests
- **Integration tests**: 2 tests
- **Navigation tests**: 4 tests

**Test Distribution:**
- Component rendering: 12 tests
- Content accuracy: 6 tests
- Visual styling: 6 tests
- Responsive layout: 4 tests
- Navigation: 2 tests
- Grid layout: 2 tests
- Timeline status colors: 4 tests

---

### Notes for Implementation

1. **Content file**: Create `src/content/investors-case.ts` with all copy
2. **Icons**: Import from lucide-react (Target, Package, Zap, BarChart3, Network, Star)
3. **Grid layout**: Use `grid grid-cols-1 md:grid-cols-2 gap-6` for pillars
4. **Timeline colors**: completed = `text-[#C8102E]`, target = `text-gray-400`
5. **Navigation**: Update NAVIGATION_LINKS to add Investors submenu with Case link
