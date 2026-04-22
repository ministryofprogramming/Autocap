# Specification: Entrepreneurs Section

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-22
**Status:** ✅ COMPLETE

---

## 1. Overview

### 1.1 Summary

The Entrepreneurs section is **AutoCap's most important conversion page** - designed to attract workshop owners considering selling their business. This section presents AutoCap's unique value proposition, explains the acquisition process, and provides a contact form for confidential enquiries.

**Design Standard:** Warm, direct, respectful tone with Birch (#D8E4DC) as primary background color. Premium design matching homepage quality.

### 1.2 Goals

- Convert workshop owners from awareness to enquiry
- Communicate AutoCap's unique approach (preserve brand + empower owner)
- Build trust through transparency and testimonials
- Capture qualified leads via contact form
- Differentiate from competitors (chains that rebrand)

### 1.3 Non-Goals

- Generic corporate messaging
- Immediate sales - focus is starting a conversation
- Technical/investor content (separate section)
- Workshop owner dashboard/portal

### 1.4 User Story

**As a workshop owner (45-65 years old),**
I want to understand what makes AutoCap different from selling to a chain,
So that I can decide if I want to have a confidential conversation about selling my business.

---

## 2. Acceptance Criteria

### AC-001: Entrepreneurs Landing Page

**GIVEN** a user navigates to `/entrepreneurs`
**WHEN** the page loads
**THEN** they see:
  - Headline: "You built something worth keeping. Let's build on it together."
  - Subheadline: "If you own a tire service workshop and you're thinking about the next chapter — whether that's retirement, growth, or simply having a stronger partner - we'd like to have a conversation."
  - CTA button: "Learn why workshop owners choose AutoCap →" linking to `/entrepreneurs/why`
  - Birch background (#D8E4DC)
  - Warm, welcoming design

---

### AC-002: Why AutoCap Page - 5 Benefits

**GIVEN** a user navigates to `/entrepreneurs/why`
**WHEN** the page loads
**THEN** they see:
  - Page title: "Why AutoCap"
  - Introduction paragraph
  - 5 benefit sections displayed prominently:
    1. Your name stays on the door
    2. Your people stay
    3. Stay and grow with us
    4. You gain what you couldn't build alone
    5. Fair value. Clear process.
  - Each benefit has heading + detailed description
  - Closing block: "We're entrepreneurs too" with founder context
  - CTA: "Ready to explore? → Start a confidential conversation" linking to `/entrepreneurs/contact`

---

### AC-003: Benefit Sections Display

**GIVEN** a user views the Why AutoCap page
**WHEN** they scroll through benefits
**THEN** each benefit:
  - Has a clear heading (h3)
  - Contains the full description from copy deck
  - Uses Birch background or Linen White alternating
  - Has proper spacing and readability
  - Includes scroll-triggered reveal animation

---

### AC-004: Acquisition Process Page

**GIVEN** a user navigates to `/entrepreneurs/process`
**WHEN** the page loads
**THEN** they see:
  - Page title: "How It Works"
  - Introduction: "Our acquisition process is designed to be clear, respectful, and efficient."
  - 6-step visual process:
    - Step 1: First Conversation (1-2 weeks)
    - Step 2: Indicative Offer (1-2 weeks)
    - Step 3: Letter of Intent (1 week)
    - Step 4: Due Diligence (3-5 weeks)
    - Step 5: Final Agreement (1-2 weeks)
    - Step 6: Welcome to the Group (Ongoing)
  - Each step shows: number, title, description, timeline
  - Total timeline: "8-12 weeks from first conversation to signed deal"
  - CTA: "Start with Step 1 → Have a confidential conversation with us" linking to `/entrepreneurs/contact`

---

### AC-005: Process Step Visualization

**GIVEN** a user views the process page
**WHEN** they see the 6 steps
**THEN** the steps:
  - Display horizontally on desktop (scrollable if needed)
  - Display vertically on mobile
  - Show AutoCap Red (#C8102E) for step numbers
  - Have clear visual hierarchy
  - Include timeline for each step
  - Animate on scroll into view

---

### AC-006: Entrepreneur Contact Form

**GIVEN** a user navigates to `/entrepreneurs/contact`
**WHEN** the page loads
**THEN** they see:
  - Page title: "Let's Talk"
  - Subtext: "This is confidential. We don't share your information... There's no obligation — just a conversation about what might be possible."
  - Contact form with fields:
    - Your name (required)
    - Workshop name (required)
    - City / region (required)
    - Approximate annual revenue (dropdown: <5 / 5-15 / 15-50 / >50 MSEK) (required)
    - Email (required)
    - Phone (required)
    - Anything you'd like us to know (optional textarea)
    - GDPR consent checkbox (required)
  - Birch background (#D8E4DC)
  - Submit button in AutoCap Red

---

### AC-007: Form Validation

**GIVEN** a user submits the contact form
**WHEN** they have missing required fields
**THEN** the form:
  - Shows validation errors below each field
  - Highlights invalid fields
  - Prevents submission
  - Shows helpful error messages
  - Does not lose entered data

---

### AC-008: Form Submission (Mock)

**GIVEN** a user fills out the form correctly
**WHEN** they submit
**THEN** the form:
  - Shows loading state on submit button
  - Displays success message: "Thank you. Your enquiry has been received. A member of our team will be in touch within two business days. Everything you've shared is treated in strict confidence."
  - Clears the form (or shows on separate success page)
  - In prototype: logs data to console (no real email sent)
  - In production: sends to nicklas.knape@autocapgroup.se

---

### AC-009: Responsive Layout - Mobile

**GIVEN** a user views entrepreneurs pages on mobile (320-767px)
**WHEN** they navigate through sections
**THEN** all content:
  - Displays in single column
  - Benefits stack vertically
  - Process steps stack vertically
  - Form is full-width with proper spacing
  - Touch targets are minimum 44px
  - Text remains readable

---

### AC-010: Responsive Layout - Desktop

**GIVEN** a user views entrepreneurs pages on desktop (1024px+)
**WHEN** they navigate through sections
**THEN** content:
  - Uses appropriate max-width (1200px)
  - Benefits display in readable format
  - Process steps show horizontally
  - Form has comfortable width (not too wide)
  - Proper whitespace and padding

---

### AC-011: Navigation Integration

**GIVEN** a user is anywhere on the site
**WHEN** they click "Entrepreneurs" in the header
**THEN** they navigate to `/entrepreneurs`
  AND the header shows "Entrepreneurs" as active

**WHEN** they click any audience card "For Entrepreneurs"
**THEN** they navigate to `/entrepreneurs`

---

### AC-012: Breadcrumb Navigation

**GIVEN** a user is on any entrepreneurs subpage
**WHEN** they view the page
**THEN** they see breadcrumbs:
  - `/entrepreneurs/why` → "Home / Entrepreneurs / Why AutoCap"
  - `/entrepreneurs/process` → "Home / Entrepreneurs / How It Works"
  - `/entrepreneurs/contact` → "Home / Entrepreneurs / Let's Talk"
  - Breadcrumbs are clickable
  - Current page is not a link

---

### AC-013: Cross-linking Between Pages

**GIVEN** a user is on any entrepreneurs page
**WHEN** they want to navigate within the section
**THEN** they can:
  - From landing → go to "Why" or "Process" or "Contact"
  - From "Why" → go to "Contact" (CTA at bottom)
  - From "Process" → go to "Contact" (CTA at bottom)
  - Clear CTAs guide the journey

---

### AC-014: Animations and Transitions

**GIVEN** a user scrolls through entrepreneurs pages
**WHEN** content comes into view
**THEN** they see:
  - Smooth fade-in animations
  - Staggered reveals for lists/steps
  - Hover effects on CTAs
  - Respects `prefers-reduced-motion`
  - No janky or abrupt transitions

---

### AC-015: SEO and Metadata

**GIVEN** entrepreneurs pages are deployed
**WHEN** search engines or social media crawl them
**THEN** each page has:
  - Proper title tag
  - Meta description
  - Open Graph tags (future)
  - Semantic HTML structure

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
| AC-009 | | | ⏳ |
| AC-010 | | | ⏳ |
| AC-011 | | | ⏳ |
| AC-012 | | | ⏳ |
| AC-013 | | | ⏳ |
| AC-014 | | | ⏳ |
| AC-015 | | | ⏳ |

---

## 4. Technical Design

### 4.1 Components/Files to Create

| File | Action | Description |
|------|--------|-------------|
| `src/app/entrepreneurs/page.tsx` | Create | Landing page |
| `src/app/entrepreneurs/why/page.tsx` | Create | Why AutoCap (5 benefits) |
| `src/app/entrepreneurs/process/page.tsx` | Create | Acquisition process |
| `src/app/entrepreneurs/contact/page.tsx` | Create | Contact form |
| `src/components/entrepreneurs/BenefitSection.tsx` | Create | Benefit display component |
| `src/components/entrepreneurs/ProcessStep.tsx` | Create | Process step component |
| `src/components/entrepreneurs/ProcessTimeline.tsx` | Create | Timeline visualization |
| `src/components/entrepreneurs/ContactForm.tsx` | Create | Contact form with validation |
| `src/content/entrepreneurs.ts` | Create | Content data |
| `src/lib/validation/entrepreneurForm.ts` | Create | Zod validation schema |

### 4.2 Data Model

```typescript
// Entrepreneurs content
interface EntrepreneursContent {
  landing: {
    headline: string
    subheadline: string
    ctaText: string
  }
  benefits: Array<{
    id: number
    title: string
    description: string
  }>
  closingBlock: {
    title: string
    description: string
  }
  process: {
    intro: string
    steps: Array<{
      number: number
      title: string
      description: string
      timeline: string
    }>
    totalTimeline: string
  }
}

// Contact form
interface EntrepreneurEnquiry {
  name: string
  workshopName: string
  cityRegion: string
  revenue: '<5 MSEK' | '5-15 MSEK' | '15-50 MSEK' | '>50 MSEK'
  email: string
  phone: string
  message?: string
  gdprConsent: boolean
}
```

### 4.3 Form Handling (Prototype)

**Mock Implementation:**
- Form uses React Hook Form + Zod validation
- On submit: log data to console
- Show success message
- No actual email sent (prototype mode)

**Production Ready:**
- Form action endpoint: `/api/entrepreneurs/contact`
- Email to: `nicklas.knape@autocapgroup.se`
- Store in database
- Send confirmation email to user

---

## 5. UI/UX Requirements

### 5.1 Design Tokens

**Primary Color:** Birch (#D8E4DC) - used throughout
**Accents:** AutoCap Red (#C8102E) for CTAs and step numbers
**Alternating:** Linen White (#F5F0EB) for benefit sections

### 5.2 Tone and Voice

- **Warm, not corporate** - "You built something valuable"
- **Direct, not blunt** - Clear language, no jargon
- **Respectful** - Acknowledges the owner's accomplishment
- **Confident, not arrogant** - "We're entrepreneurs too"

### 5.3 Mobile Requirements

- Single column layouts
- Process steps stack vertically
- Form full-width with proper spacing
- Touch-friendly inputs (44px min)

### 5.4 Desktop Requirements

- Max-width containers (1200px)
- Benefits in readable 2-column or full-width blocks
- Process timeline horizontal
- Form centered, comfortable width (600-700px max)

---

## 6. Content Source

All content extracted from:
`docs/reference/website-copy-deck.docx` - Section 4 (Entrepreneurs)

---

## 7. Dependencies

### 7.1 Existing Dependencies

- React Hook Form (already installed)
- Zod (already installed)
- Framer Motion (already installed)

### 7.2 New Dependencies

None - all requirements met with existing stack

---

## 8. SEO Metadata

| Page | Title | Description |
|------|-------|-------------|
| /entrepreneurs | For Workshop Owners · AutoCap Group | Thinking of selling? AutoCap preserves your brand, keeps your team, and offers fair value. |
| /entrepreneurs/why | Why AutoCap · For Workshop Owners | Discover what makes AutoCap different from selling to a chain. |
| /entrepreneurs/process | How It Works · AutoCap Group | Our clear, respectful acquisition process from first conversation to completion. |
| /entrepreneurs/contact | Contact Us · For Workshop Owners | Start a confidential conversation about your workshop's future. |

---

## 9. Open Questions

- [ ] Do we have real testimonials ready, or use suggested ones from copy deck?
- [ ] Should success page be separate route or inline message?
- [ ] Any specific form analytics/tracking needed?

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | 2026-04-22 | [x] |
| Tech Lead | Alex Chen | 2026-04-22 | [x] |
| Quality Lead | Dr. Priya Patel | | [ ] |

---

## 10. Test Plan

**Quality Lead:** Dr. Priya Patel
**Date:** 2026-04-22
**Status:** Approved

### 10.1 Test Strategy

This test plan covers all 15 acceptance criteria with a mix of:
- **Unit Tests** (30 tests) - Component behavior, validation logic
- **Integration Tests** (15 tests) - Page rendering, navigation flows
- **E2E Tests** (8 tests) - Full user journeys, form submissions

**Total Tests: 53 tests**

### 10.2 Test Matrix

#### Unit Tests (30 tests)

| AC | Test File | Test Name | Fixtures | Edge Cases |
|----|-----------|-----------|----------|------------|
| AC-001 | `__tests__/app/entrepreneurs/page.test.tsx` | should render landing page headline | entrepreneursContent.landing | - |
| AC-001 | `__tests__/app/entrepreneurs/page.test.tsx` | should render landing page subheadline | entrepreneursContent.landing | - |
| AC-001 | `__tests__/app/entrepreneurs/page.test.tsx` | should render CTA button with correct link | entrepreneursContent.landing | - |
| AC-001 | `__tests__/app/entrepreneurs/page.test.tsx` | should apply Birch background color | entrepreneursContent.landing | - |
| AC-002 | `__tests__/app/entrepreneurs/why/page.test.tsx` | should render page title "Why AutoCap" | entrepreneursContent.benefits | - |
| AC-002 | `__tests__/app/entrepreneurs/why/page.test.tsx` | should render all 5 benefits | entrepreneursContent.benefits | - |
| AC-002 | `__tests__/app/entrepreneurs/why/page.test.tsx` | should render closing block | entrepreneursContent.closingBlock | - |
| AC-002 | `__tests__/app/entrepreneurs/why/page.test.tsx` | should render CTA to contact page | entrepreneursContent.benefits | - |
| AC-003 | `__tests__/components/entrepreneurs/BenefitSection.test.tsx` | should render benefit heading as h3 | mockBenefit | - |
| AC-003 | `__tests__/components/entrepreneurs/BenefitSection.test.tsx` | should render benefit description | mockBenefit | - |
| AC-003 | `__tests__/components/entrepreneurs/BenefitSection.test.tsx` | should apply alternating background colors | mockBenefits array | Even/odd benefits |
| AC-003 | `__tests__/components/entrepreneurs/BenefitSection.test.tsx` | should have scroll-triggered animation | mockBenefit | - |
| AC-004 | `__tests__/app/entrepreneurs/process/page.test.tsx` | should render page title "How It Works" | entrepreneursContent.process | - |
| AC-004 | `__tests__/app/entrepreneurs/process/page.test.tsx` | should render introduction text | entrepreneursContent.process | - |
| AC-004 | `__tests__/app/entrepreneurs/process/page.test.tsx` | should render all 6 steps | entrepreneursContent.process.steps | - |
| AC-004 | `__tests__/app/entrepreneurs/process/page.test.tsx` | should display total timeline | entrepreneursContent.process | - |
| AC-004 | `__tests__/app/entrepreneurs/process/page.test.tsx` | should render CTA to contact page | entrepreneursContent.process | - |
| AC-005 | `__tests__/components/entrepreneurs/ProcessStep.test.tsx` | should render step number in AutoCap Red | mockStep | - |
| AC-005 | `__tests__/components/entrepreneurs/ProcessStep.test.tsx` | should render step title | mockStep | - |
| AC-005 | `__tests__/components/entrepreneurs/ProcessStep.test.tsx` | should render step description | mockStep | - |
| AC-005 | `__tests__/components/entrepreneurs/ProcessStep.test.tsx` | should render step timeline | mockStep | - |
| AC-006 | `__tests__/app/entrepreneurs/contact/page.test.tsx` | should render page title "Let's Talk" | - | - |
| AC-006 | `__tests__/app/entrepreneurs/contact/page.test.tsx` | should render confidentiality subtext | - | - |
| AC-006 | `__tests__/app/entrepreneurs/contact/page.test.tsx` | should render all form fields | - | - |
| AC-006 | `__tests__/app/entrepreneurs/contact/page.test.tsx` | should apply Birch background | - | - |
| AC-007 | `__tests__/lib/validation/entrepreneurForm.test.ts` | should validate required fields | validData, invalidData | Missing each required field |
| AC-007 | `__tests__/lib/validation/entrepreneurForm.test.ts` | should validate email format | validEmail, invalidEmails | Various invalid formats |
| AC-007 | `__tests__/lib/validation/entrepreneurForm.test.ts` | should validate phone format | validPhone, invalidPhones | Various formats |
| AC-007 | `__tests__/lib/validation/entrepreneurForm.test.ts` | should validate GDPR consent required | dataWithConsent, dataWithoutConsent | - |
| AC-007 | `__tests__/lib/validation/entrepreneurForm.test.ts` | should allow optional message field | dataWithMessage, dataWithoutMessage | - |

#### Integration Tests (15 tests)

| AC | Test File | Test Name | Fixtures | Edge Cases |
|----|-----------|-----------|----------|------------|
| AC-008 | `__tests__/components/entrepreneurs/ContactForm.test.tsx` | should show loading state on submit | validFormData | - |
| AC-008 | `__tests__/components/entrepreneurs/ContactForm.test.tsx` | should display success message after submit | validFormData | - |
| AC-008 | `__tests__/components/entrepreneurs/ContactForm.test.tsx` | should clear form after success | validFormData | - |
| AC-008 | `__tests__/components/entrepreneurs/ContactForm.test.tsx` | should log data to console in prototype mode | validFormData | - |
| AC-009 | `__tests__/responsive/entrepreneurs-mobile.test.tsx` | should display single column layout on mobile | - | 320px, 375px, 767px |
| AC-009 | `__tests__/responsive/entrepreneurs-mobile.test.tsx` | should stack benefits vertically | entrepreneursContent.benefits | - |
| AC-009 | `__tests__/responsive/entrepreneurs-mobile.test.tsx` | should stack process steps vertically | entrepreneursContent.process | - |
| AC-009 | `__tests__/responsive/entrepreneurs-mobile.test.tsx` | should render full-width form | - | - |
| AC-009 | `__tests__/responsive/entrepreneurs-mobile.test.tsx` | should have 44px minimum touch targets | - | All interactive elements |
| AC-010 | `__tests__/responsive/entrepreneurs-desktop.test.tsx` | should use 1200px max-width container | - | 1024px, 1440px, 1920px |
| AC-010 | `__tests__/responsive/entrepreneurs-desktop.test.tsx` | should display horizontal process timeline | entrepreneursContent.process | - |
| AC-010 | `__tests__/responsive/entrepreneurs-desktop.test.tsx` | should center form with max width | - | - |
| AC-011 | `__tests__/navigation/entrepreneurs-nav.test.tsx` | should navigate to /entrepreneurs from header | - | - |
| AC-011 | `__tests__/navigation/entrepreneurs-nav.test.tsx` | should show active state in header | - | - |
| AC-011 | `__tests__/navigation/entrepreneurs-nav.test.tsx` | should navigate from audience card | - | - |

#### E2E Tests (8 tests)

| AC | Test File | Test Name | Fixtures | Edge Cases |
|----|-----------|-----------|----------|------------|
| AC-012 | `__tests__/e2e/entrepreneurs/breadcrumbs.spec.ts` | should display correct breadcrumbs on why page | - | - |
| AC-012 | `__tests__/e2e/entrepreneurs/breadcrumbs.spec.ts` | should display correct breadcrumbs on process page | - | - |
| AC-012 | `__tests__/e2e/entrepreneurs/breadcrumbs.spec.ts` | should display correct breadcrumbs on contact page | - | - |
| AC-012 | `__tests__/e2e/entrepreneurs/breadcrumbs.spec.ts` | should allow clicking breadcrumb links | - | - |
| AC-013 | `__tests__/e2e/entrepreneurs/cross-linking.spec.ts` | should navigate from landing to all sections | - | - |
| AC-013 | `__tests__/e2e/entrepreneurs/cross-linking.spec.ts` | should navigate from why to contact | - | - |
| AC-013 | `__tests__/e2e/entrepreneurs/cross-linking.spec.ts` | should navigate from process to contact | - | - |
| AC-014 | `__tests__/e2e/entrepreneurs/animations.spec.ts` | should show fade-in animations on scroll | - | - |

#### Metadata Tests (Integrated with page tests)

| AC | Test File | Test Name | Fixtures | Edge Cases |
|----|-----------|-----------|----------|------------|
| AC-015 | `__tests__/app/entrepreneurs/page.test.tsx` | should render correct SEO metadata | - | - |
| AC-015 | `__tests__/app/entrepreneurs/why/page.test.tsx` | should render correct SEO metadata | - | - |
| AC-015 | `__tests__/app/entrepreneurs/process/page.test.tsx` | should render correct SEO metadata | - | - |
| AC-015 | `__tests__/app/entrepreneurs/contact/page.test.tsx` | should render correct SEO metadata | - | - |

### 10.3 Test Data Fixtures

**File:** `__tests__/fixtures/entrepreneurs.ts`

```typescript
export const mockBenefit = {
  id: 1,
  title: "Your name stays on the door",
  description: "We don't rebrand your workshop...",
}

export const mockBenefits = [
  { id: 1, title: "Your name stays on the door", description: "..." },
  { id: 2, title: "Your people stay", description: "..." },
  { id: 3, title: "Stay and grow with us", description: "..." },
  { id: 4, title: "You gain what you couldn't build alone", description: "..." },
  { id: 5, title: "Fair value. Clear process.", description: "..." },
]

export const mockProcessStep = {
  number: 1,
  title: "First Conversation",
  description: "A relaxed, confidential discussion...",
  timeline: "1-2 weeks",
}

export const mockProcessSteps = [
  { number: 1, title: "First Conversation", description: "...", timeline: "1-2 weeks" },
  { number: 2, title: "Indicative Offer", description: "...", timeline: "1-2 weeks" },
  { number: 3, title: "Letter of Intent", description: "...", timeline: "1 week" },
  { number: 4, title: "Due Diligence", description: "...", timeline: "3-5 weeks" },
  { number: 5, title: "Final Agreement", description: "...", timeline: "1-2 weeks" },
  { number: 6, title: "Welcome to the Group", description: "...", timeline: "Ongoing" },
]

export const validFormData = {
  name: "Anders Svensson",
  workshopName: "Svenssons Däckservice",
  cityRegion: "Göteborg",
  revenue: "5-15 MSEK" as const,
  email: "anders@svensson-dack.se",
  phone: "+46 70 123 4567",
  message: "Interested in learning more about the process",
  gdprConsent: true,
}

export const invalidFormData = {
  name: "",
  workshopName: "",
  cityRegion: "",
  revenue: "" as const,
  email: "invalid-email",
  phone: "",
  gdprConsent: false,
}
```

### 10.4 Animation Testing

**Animations must respect `prefers-reduced-motion`:**

```typescript
// Test in __tests__/hooks/useScrollAnimation.test.ts
describe('useScrollAnimation with reduced motion', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
      })),
    })
  })

  it('should skip animations when prefers-reduced-motion is set', () => {
    const { result } = renderHook(() => useScrollAnimation())
    expect(result.current.isInView).toBe(true)
  })
})
```

### 10.5 Form Validation Edge Cases

**Email validation edge cases:**
- Empty string
- Missing @ symbol
- Missing domain
- Invalid characters
- Valid formats: `user@domain.com`, `user+tag@domain.co.uk`

**Phone validation edge cases:**
- Empty string
- International format: `+46 70 123 4567`
- Swedish format: `070-123 45 67`
- Various separators: spaces, dashes, none

**Revenue dropdown:**
- All 4 options must be selectable
- Required field validation

**GDPR consent:**
- Must be explicitly checked (not default true)
- Form cannot submit without consent

### 10.6 Responsive Breakpoint Tests

| Breakpoint | Width | Test Scenarios |
|------------|-------|----------------|
| Mobile Small | 320px | Single column, readable text, 44px touch targets |
| Mobile Large | 375px | Single column, form full-width |
| Tablet | 768px | Benefits stack, process vertical |
| Desktop | 1024px | Process horizontal, form centered |
| Desktop Large | 1440px | Max-width applied, proper whitespace |

### 10.7 Coverage Targets (Prototype Mode)

- **Unit Tests:** 100% of components
- **Integration Tests:** All page renders and form interactions
- **E2E Tests:** Critical user journeys only
- **Overall Coverage:** > 80% (prototype mode)

---

## 11. Updated Traceability Matrix

| Criterion | Test Level | Test File | Test Count | Status |
|-----------|------------|-----------|------------|--------|
| AC-001 | Unit | `__tests__/app/entrepreneurs/page.test.tsx` | 4 | ⏳ |
| AC-002 | Unit | `__tests__/app/entrepreneurs/why/page.test.tsx` | 4 | ⏳ |
| AC-003 | Unit | `__tests__/components/entrepreneurs/BenefitSection.test.tsx` | 4 | ⏳ |
| AC-004 | Unit | `__tests__/app/entrepreneurs/process/page.test.tsx` | 5 | ⏳ |
| AC-005 | Unit | `__tests__/components/entrepreneurs/ProcessStep.test.tsx` | 4 | ⏳ |
| AC-006 | Unit | `__tests__/app/entrepreneurs/contact/page.test.tsx` | 4 | ⏳ |
| AC-007 | Unit | `__tests__/lib/validation/entrepreneurForm.test.ts` | 5 | ⏳ |
| AC-008 | Integration | `__tests__/components/entrepreneurs/ContactForm.test.tsx` | 4 | ⏳ |
| AC-009 | Integration | `__tests__/responsive/entrepreneurs-mobile.test.tsx` | 5 | ⏳ |
| AC-010 | Integration | `__tests__/responsive/entrepreneurs-desktop.test.tsx` | 3 | ⏳ |
| AC-011 | Integration | `__tests__/navigation/entrepreneurs-nav.test.tsx` | 3 | ⏳ |
| AC-012 | E2E | `__tests__/e2e/entrepreneurs/breadcrumbs.spec.ts` | 4 | ⏳ |
| AC-013 | E2E | `__tests__/e2e/entrepreneurs/cross-linking.spec.ts` | 3 | ⏳ |
| AC-014 | E2E | `__tests__/e2e/entrepreneurs/animations.spec.ts` | 1 | ⏳ |
| AC-015 | Unit | Page tests (metadata checks) | 4 | ⏳ |
| **TOTAL** | | | **53** | ⏳ |

---

## 12. Test Plan Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Quality Lead | Dr. Priya Patel | 2026-04-22 | [x] |
| Tech Lead | Alex Chen | 2026-04-22 | [ ] |
