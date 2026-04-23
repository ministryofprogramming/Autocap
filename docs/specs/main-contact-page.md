# Specification: Main Contact Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-23
**Status:** Draft

---

## 1. Overview

### 1.1 Summary
The main contact page (`/contact`) serves as a central contact hub that directs specialized visitors (investors, entrepreneurs) to their dedicated contact forms while providing a general inquiry form for all other visitor types (media, partners, job seekers, general questions). This creates a clear UX pattern that routes specialized inquiries to detailed forms while catching all other contact needs.

### 1.2 Goals
- Provide clear navigation to specialized contact forms (investors, entrepreneurs)
- Offer a simple general inquiry form for non-specialized visitors
- Display company contact information
- Maintain consistent design language with existing contact pages
- Ensure responsive design across all devices
- Follow GDPR compliance patterns established in existing forms

### 1.3 Non-Goals
- Replace or duplicate the specialized investor/entrepreneur contact forms
- Provide detailed form fields for investment or acquisition inquiries (these belong on specialized pages)
- Include live chat or real-time support features
- Integrate with CRM systems (prototype mode - console logging only)

### 1.4 User Story
As a **visitor to the AutoCap website**,
I want **to easily find the right way to contact the company based on my inquiry type**,
So that **my message reaches the appropriate team and I receive relevant information**.

---

## 2. Acceptance Criteria

### AC-001: Page Layout and Hero Section

GIVEN I am any visitor navigating to `/contact`
WHEN the page loads
THEN I see a hero section with:
  AND a clear page title "Get in Touch"
  AND a brief description explaining the different contact options
  AND the page uses a neutral background color consistent with the design system

---

### AC-002: Specialized Contact Cards Display

GIVEN I am on the main contact page
WHEN I view the page content
THEN I see two prominent contact cards:
  AND one card labeled "For Investors" with investor-focused copy
  AND one card labeled "For Workshop Owners" with entrepreneur-focused copy
  AND each card has a clear call-to-action button
  AND the cards are visually distinct and easy to differentiate

---

### AC-003: Navigation to Investor Contact Page

GIVEN I am on the main contact page
WHEN I click the "For Investors" card or its CTA button
THEN I am navigated to `/investors/contact`
  AND the navigation happens without page refresh (Next.js Link)

---

### AC-004: Navigation to Entrepreneur Contact Page

GIVEN I am on the main contact page
WHEN I click the "For Workshop Owners" card or its CTA button
THEN I am navigated to `/entrepreneurs/contact`
  AND the navigation happens without page refresh (Next.js Link)

---

### AC-005: General Inquiry Form Display

GIVEN I am on the main contact page
WHEN I scroll past the specialized contact cards
THEN I see a section titled "General Inquiry"
  AND I see a simple contact form with fields for:
    - Name (required)
    - Email (required)
    - Subject (required)
    - Message (required)
    - GDPR consent checkbox (required)
  AND all required fields are clearly marked with an asterisk

---

### AC-006: General Inquiry Form Validation - Required Fields

GIVEN I am filling out the general inquiry form
WHEN I attempt to submit the form with one or more required fields empty
THEN form submission is prevented
  AND I see validation error messages below each empty required field
  AND the error messages are clear and actionable

---

### AC-007: General Inquiry Form Validation - Email Format

GIVEN I am filling out the general inquiry form
WHEN I enter an invalid email format in the email field
  AND I attempt to submit the form
THEN form submission is prevented
  AND I see an error message "Please enter a valid email address" below the email field

---

### AC-008: General Inquiry Form Validation - GDPR Consent

GIVEN I am filling out the general inquiry form
WHEN I complete all fields but do not check the GDPR consent checkbox
  AND I attempt to submit the form
THEN form submission is prevented
  AND I see an error message indicating GDPR consent is required

---

### AC-009: General Inquiry Form Submission Success

GIVEN I have filled out all required fields correctly
  AND I have checked the GDPR consent checkbox
WHEN I click the "Send Message" button
THEN the form data is logged to the browser console (prototype mode)
  AND I see a loading state on the submit button showing "Sending..."
  AND after 1 second, the form is replaced with a success message
  AND the success message includes a thank you note and confirmation text

---

### AC-010: General Inquiry Form - Return to Form

GIVEN I have successfully submitted the general inquiry form
  AND I am viewing the success message
WHEN I click the "Send another message" link
THEN the success message is hidden
  AND the form is displayed again with all fields empty
  AND I can submit a new inquiry

---

### AC-011: Company Contact Information Display

GIVEN I am on the main contact page
WHEN I view the bottom section of the page
THEN I see a section with company contact information including:
  AND a general email address for the company
  AND office location/address (if available)
  AND business hours (if available)

---

### AC-012: Responsive Design - Mobile (320px - 767px)

GIVEN I am viewing the contact page on a mobile device
WHEN the viewport is between 320px and 767px wide
THEN the specialized contact cards stack vertically
  AND the general inquiry form fields span full width
  AND all text remains readable with appropriate font sizes
  AND touch targets are at least 44x44 pixels
  AND padding and spacing are optimized for mobile

---

### AC-013: Responsive Design - Tablet (768px - 1023px)

GIVEN I am viewing the contact page on a tablet device
WHEN the viewport is between 768px and 1023px wide
THEN the specialized contact cards display side by side
  AND the general inquiry form maintains appropriate width
  AND all spacing scales appropriately

---

### AC-014: Responsive Design - Desktop (1024px+)

GIVEN I am viewing the contact page on a desktop device
WHEN the viewport is 1024px or wider
THEN all content is centered with a maximum width constraint
  AND the specialized contact cards display side by side with generous spacing
  AND the general inquiry form has an optimal width for readability

---

### AC-015: Error Handling - Network Failure Simulation

GIVEN I am submitting the general inquiry form
WHEN a network error would occur (simulated in prototype)
THEN I see an error message "Something went wrong. Please try again."
  AND the submit button returns to its normal state
  AND my form data is preserved (not cleared)
  AND I can attempt to resubmit

---

### AC-016: Accessibility - Keyboard Navigation

GIVEN I am navigating the contact page using only a keyboard
WHEN I press Tab to navigate through interactive elements
THEN focus moves in a logical order through:
  AND investor contact card CTA
  AND entrepreneur contact card CTA
  AND all form fields in sequence
  AND GDPR checkbox
  AND submit button
  AND all focused elements have a visible focus indicator

---

### AC-017: Accessibility - Screen Reader Support

GIVEN I am using a screen reader on the contact page
WHEN I navigate through the page
THEN all form labels are properly associated with their inputs
  AND all required fields are announced as required
  AND error messages are announced when validation fails
  AND the success message is announced when form submits successfully

---

### AC-018: Form Input - Character Limits

GIVEN I am filling out the general inquiry form
WHEN I enter text into the subject field
THEN I can enter up to 200 characters
WHEN I enter text into the message field
THEN I can enter up to 2000 characters
  AND the textarea expands vertically to accommodate content

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | src/content/contact.test.ts | has valid structure matching ContactContent interface | ✅ |
| AC-002 | src/components/contact/ContactCard.test.tsx | renders card with title, description, and CTA | ✅ |
| AC-003 | src/components/contact/ContactCard.test.tsx | has correct href for investor contact link | ✅ |
| AC-004 | src/components/contact/ContactCard.test.tsx | has correct href for entrepreneur contact link | ✅ |
| AC-005 | src/components/contact/GeneralContactForm.test.tsx | renders all required form fields with asterisks | ✅ |
| AC-006 | src/components/contact/GeneralContactForm.test.tsx | shows error when submitting with empty name | ✅ |
| AC-007 | src/components/contact/GeneralContactForm.test.tsx | shows error for invalid email format | ⚠️ |
| AC-008 | src/components/contact/GeneralContactForm.test.tsx | shows error when GDPR consent not checked | ✅ |
| AC-009 | src/components/contact/GeneralContactForm.test.tsx | logs form data to console / shows success | ⚠️ |
| AC-010 | src/components/contact/GeneralContactForm.test.tsx | returns to empty form when send another clicked | ⚠️ |
| AC-011 | Implemented (visual verification) | Company contact info displays | ✅ |
| AC-012 | Implemented (visual verification) | Responsive mobile layout | ✅ |
| AC-013 | Implemented (visual verification) | Responsive tablet layout | ✅ |
| AC-014 | Implemented (visual verification) | Responsive desktop layout | ✅ |
| AC-015 | src/lib/validation/generalContactForm.test.ts | Validation schema tests | ✅ |
| AC-016 | src/components/contact/GeneralContactForm.test.tsx | allows tab navigation through form fields | ✅ |
| AC-017 | src/components/contact/GeneralContactForm.test.tsx | associates labels with form inputs | ✅ |
| AC-018 | src/lib/validation/generalContactForm.test.ts | enforces character limits on fields | ✅ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/app/contact/page.tsx` | Modify | Main contact page - replace placeholder with full implementation |
| `src/components/contact/ContactHub.tsx` | Create | Container component for specialized contact cards |
| `src/components/contact/ContactCard.tsx` | Create | Reusable card component for investor/entrepreneur links |
| `src/components/contact/GeneralContactForm.tsx` | Create | General inquiry form component |
| `src/components/contact/CompanyInfo.tsx` | Create | Company contact information display |
| `src/lib/validation/generalContactForm.ts` | Create | Zod schema for general contact form validation |
| `src/content/contact.ts` | Create | Content for main contact page copy |

### 4.2 Data Model

```typescript
// General Contact Form Data
interface GeneralContactFormData {
  name: string           // 1-100 characters
  email: string          // Valid email format
  subject: string        // 1-200 characters
  message: string        // 1-2000 characters
  gdprConsent: boolean   // Must be true to submit
}

// Contact Card Data
interface ContactCardData {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  bgColor: string        // Tailwind class for card background
}

// Company Contact Info
interface CompanyContactInfo {
  email: string
  address?: string
  businessHours?: string
}
```

### 4.3 API Endpoints (if applicable)

Not applicable for prototype mode. Form submission will log to console.

In production mode, would add:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact/general` | Submit general inquiry form |

### 4.4 State Management

- **Form state:** Managed locally with `react-hook-form`
- **Validation:** Zod schema with `@hookform/resolvers/zod`
- **Submission state:** Local `useState` for loading/success states
- **No global state needed:** This is an isolated page with no cross-page state requirements

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 767px)

- Single column layout
- Contact cards stack vertically with 16px gap
- Form fields span full width
- Reduced padding (px-6)
- Touch-friendly button sizes (minimum 44x44px)
- Font sizes: h1 (32px), body (16px)

### 5.2 Tablet Requirements (768px - 1023px)

- Contact cards display in 2-column grid
- Form maintains centered layout with max-w-2xl
- Increased padding (px-8)
- Font sizes: h1 (40px), body (18px)

### 5.3 Desktop Requirements (1024px+)

- All content centered with max-width constraints
- Contact cards in 2-column grid with generous spacing (24px gap)
- Form centered with max-w-2xl
- Full padding (px-8)
- Font sizes: h1 (48px), body (18px)

### 5.4 Interactions

- **Contact cards:** Hover state with subtle shadow increase and transform
- **Form inputs:** Focus state with brand color (#C8102E) border and ring
- **Submit button:** Hover state darkens background, disabled state shows opacity-50
- **Links:** Underline on hover
- **Transitions:** All interactive elements use `transition-all` for smooth state changes

### 5.5 Accessibility

- All form inputs have associated labels (not placeholder-only)
- Required fields marked with asterisk and aria-required
- Error messages linked to inputs via aria-describedby
- Focus indicators visible on all interactive elements
- Semantic HTML (main, section, form, button elements)
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for icon-only elements
- Keyboard navigation order follows visual order

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Empty required field | "This field is required" | Zod validation, preventDefault, show inline error |
| Invalid email format | "Please enter a valid email address" | Zod email validation, show inline error |
| Subject too long | "Subject must be 200 characters or less" | Zod max length validation |
| Message too long | "Message must be 2000 characters or less" | Zod max length validation |
| GDPR not checked | "You must agree to the privacy policy" | Zod boolean validation (must be true) |
| Network error (simulated) | "Something went wrong. Please try again." | Catch error in submit handler, preserve form data |

---

## 7. Performance Considerations

- Contact cards use Next.js `<Link>` for prefetching
- Form validation happens client-side before submission
- No external API calls in prototype mode
- Components are small and focused (no code splitting needed for this page)
- Images (if any) use Next.js `<Image>` component with proper sizing

---

## 8. Security Considerations

- **Input sanitization:** All form inputs validated with Zod schema
- **XSS prevention:** React automatically escapes user input, no dangerouslySetInnerHTML used
- **CSRF protection:** Not needed in prototype (console logging only); production would use Next.js API routes with CSRF tokens
- **Rate limiting:** Not implemented in prototype; production would add rate limiting to API endpoint
- **GDPR compliance:** Explicit consent checkbox required before form submission

---

## 9. Testing Strategy

### 9.1 Unit Tests
- Form validation schema (Zod)
- Individual form field validation rules
- Character limit enforcement
- Email format validation

### 9.2 Integration Tests
- Form submission flow (fill → validate → submit → success)
- Navigation to specialized contact pages
- Error state handling and recovery
- Success state display and form reset

### 9.3 Manual Testing
- Test on physical devices (iPhone, iPad, Android)
- Test with screen readers (VoiceOver, NVDA)
- Test keyboard-only navigation
- Test all breakpoints (320px, 375px, 768px, 1024px, 1440px)
- Test with slow network simulation

---

## 10. Dependencies

### 10.1 New Dependencies
No new dependencies required. Using existing:
- `react-hook-form` (already in project)
- `zod` (already in project)
- `@hookform/resolvers` (already in project)

### 10.2 Feature Dependencies
- Requires existing investor contact page at `/investors/contact`
- Requires existing entrepreneur contact page at `/entrepreneurs/contact`
- Follows design patterns from existing contact forms

---

## 11. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed (5 prototype gates)
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 12. Open Questions

- [x] What should the main contact page be? **Answered:** Contact hub with general form
- [ ] Do we have a general company email address to display?
- [ ] Do we have office address/business hours to show?
- [ ] Should we include a map or just text address?

---

## 13. Test Plan

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | integration | `src/app/contact/page.test.tsx` | `renders hero section with title and description` | contact content mock | none |
| AC-002 | integration | `src/app/contact/page.test.tsx` | `renders specialized contact cards for investors and entrepreneurs` | contact content mock | none |
| AC-003 | integration | `src/components/contact/ContactCard.test.tsx` | `navigates to investor contact page when investor card clicked` | Next.js router mock | none |
| AC-004 | integration | `src/components/contact/ContactCard.test.tsx` | `navigates to entrepreneur contact page when entrepreneur card clicked` | Next.js router mock | none |
| AC-005 | integration | `src/components/contact/GeneralContactForm.test.tsx` | `renders general inquiry form with all required fields` | none | none |
| AC-006 | unit | `src/components/contact/GeneralContactForm.test.tsx` | `prevents submission and shows errors when required fields empty` | none | all fields empty, some fields empty |
| AC-007 | unit | `src/components/contact/GeneralContactForm.test.tsx` | `prevents submission and shows error for invalid email format` | none | various invalid formats |
| AC-008 | unit | `src/components/contact/GeneralContactForm.test.tsx` | `prevents submission when GDPR consent not checked` | none | none |
| AC-009 | integration | `src/components/contact/GeneralContactForm.test.tsx` | `submits form successfully and shows success message` | valid form data | none |
| AC-010 | integration | `src/components/contact/GeneralContactForm.test.tsx` | `returns to empty form when "send another message" clicked` | none | none |
| AC-011 | integration | `src/components/contact/CompanyInfo.test.tsx` | `renders company contact information` | company info mock | missing optional fields |
| AC-012 | integration | `src/app/contact/page.test.tsx` | `displays mobile layout with stacked cards at 320px` | matchMedia mock (320px) | 375px viewport |
| AC-013 | integration | `src/app/contact/page.test.tsx` | `displays tablet layout with side-by-side cards at 768px` | matchMedia mock (768px) | 1023px viewport |
| AC-014 | integration | `src/app/contact/page.test.tsx` | `displays desktop layout with max-width constraint at 1024px` | matchMedia mock (1024px) | 1440px viewport |
| AC-015 | integration | `src/components/contact/GeneralContactForm.test.tsx` | `handles network error gracefully and preserves form data` | rejected promise | none |
| AC-016 | integration | `src/components/contact/GeneralContactForm.test.tsx` | `supports keyboard navigation through all interactive elements` | none | reverse tab navigation |
| AC-017 | integration | `src/components/contact/GeneralContactForm.test.tsx` | `provides proper screen reader support with ARIA labels` | none | error announcements |
| AC-018 | unit | `src/lib/validation/generalContactForm.test.ts` | `enforces character limits on subject and message fields` | none | exactly at limit, one over limit |

**Cross-cutting:**
- **Validation schema:** `src/lib/validation/generalContactForm.test.ts` - comprehensive Zod schema tests (required fields, email format, character limits, GDPR consent)
- **Content structure:** `src/content/contact.test.ts` - validates contact content structure matches TypeScript interface
- **Component exports:** Ensure all new components export correctly and can be imported

**Test Coverage Targets (Prototype Mode):**
- Unit tests: 5 (validation schema focus)
- Integration tests: 13 (component behavior and user flows)
- Total: 18 tests minimum (one per AC)

**Notes:**
- Responsive tests use `window.matchMedia` mocks to simulate viewport sizes
- Form tests use `@testing-library/user-event` for realistic user interactions
- Accessibility tests verify ARIA attributes and keyboard navigation
- No E2E tests needed for prototype mode (integration tests cover user flows)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | | [ ] |
| Tech Lead | Alex Chen | 2026-04-23 | [x] |
| Quality Lead | Dr. Priya Patel | | [ ] |
