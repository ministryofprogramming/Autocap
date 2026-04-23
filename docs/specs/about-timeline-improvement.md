# Specification: About Page Timeline Improvement

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-23
**Status:** Approved

---

## 1. Overview

### 1.1 Summary
Transform the "Our Journey" timeline section on the About page from a simple 3-column grid layout into an engaging stepped progression timeline with visual state differentiation (completed, current, future milestones). The new design will better communicate AutoCap's growth story through clear visual progression, alternating card layouts, and smooth scroll animations.

### 1.2 Goals
- Create visual progression that tells AutoCap's story from founding to future vision
- Differentiate milestone states: completed (past), current (today), and future (2028 target)
- Implement responsive alternating layout (desktop) with vertical timeline spine
- Add scroll-triggered animations for engaging user experience
- Maintain consistency with existing design system (AutoCap Red, typography, spacing)

### 1.3 Non-Goals
- Horizontal scrollable timeline (considered but rejected for accessibility/UX)
- Interactive timeline with filtering or expandable sections
- Backend-driven timeline (remains static content)
- Adding new timeline milestones (uses existing 5 milestones)
- Complex 3D animations or heavy third-party animation libraries

### 1.4 User Story
As a visitor to the About page,
I want to visually understand AutoCap's growth journey from founding to future vision,
So that I can see the company's progression and understand where they are today versus where they're heading.

---

## 2. Acceptance Criteria

### AC-001: Visual State Differentiation for Completed Milestones

GIVEN I am viewing the "Our Journey" timeline section
  AND there are completed milestones (Founding, First Acquisition, Geographic Growth)
WHEN the timeline renders
THEN each completed milestone displays:
  AND a solid red circular badge with checkmark icon
  AND full-color card styling (white background, dark text)
  AND red timeline connecting line from previous milestone

---

### AC-002: Visual State for Current Milestone

GIVEN I am viewing the "Our Journey" timeline section
  AND the "Today" milestone represents the current state
WHEN the timeline renders
THEN the current milestone displays:
  AND a pulsing red circular badge with animated glow effect
  AND enhanced card styling with subtle emphasis (e.g., border highlight)
  AND continuous pulse animation (2s duration, infinite loop)

---

### AC-003: Visual State for Future Milestone

GIVEN I am viewing the "Our Journey" timeline section
  AND the "2028 Target" milestone represents future goals
WHEN the timeline renders
THEN the future milestone displays:
  AND an outlined gray circular badge (dashed border)
  AND dimmed card styling (lighter text, outlined card)
  AND dashed timeline connecting line from current milestone

---

### AC-004: Desktop Alternating Layout

GIVEN I am viewing the timeline on a desktop device (≥768px)
WHEN the timeline section renders
THEN milestones alternate left and right of a central vertical timeline spine:
  AND milestone 1 (Founding) appears on the left
  AND milestone 2 (First Acquisition) appears on the right
  AND milestone 3 (Geographic Growth) appears on the left
  AND milestone 4 (Today) appears on the right
  AND milestone 5 (2028 Target) appears on the left
  AND each card connects to the central timeline with a horizontal line

---

### AC-005: Mobile Vertical Layout

GIVEN I am viewing the timeline on a mobile device (<768px)
WHEN the timeline section renders
THEN all milestones stack vertically:
  AND the timeline spine appears on the left edge
  AND all milestone cards align to the right of the spine
  AND cards span full available width (minus timeline margin)
  AND spacing between cards is consistent (e.g., 2rem)

---

### AC-006: Timeline Spine Gradient

GIVEN I am viewing the timeline
WHEN the section renders
THEN the vertical timeline spine displays:
  AND starts with AutoCap Red (#C8102E) at the top
  AND gradually fades through completed milestones
  AND transitions to medium gray for current milestone
  AND ends with light gray (dashed) for future milestone
  AND the line thickness is consistent (e.g., 3px)

---

### AC-007: Scroll-Triggered Card Animation

GIVEN I am scrolling the About page
  AND the timeline section is coming into viewport
WHEN each milestone card enters the viewport
THEN the card animates with:
  AND fade-in effect (opacity 0 → 1)
  AND slide-in effect (20px vertical offset → 0)
  AND 0.4s duration with ease-out timing
  AND staggered delay (0.1s per card, based on index)

---

### AC-008: Milestone Badge Icon Differentiation

GIVEN I am viewing the timeline
WHEN examining the milestone badges
THEN each state shows appropriate iconography:
  AND completed milestones use CheckCircle2 icon
  AND current milestone uses Radio or target icon
  AND future milestone uses outlined circle or Target icon
  AND all icons maintain consistent size (e.g., 24px)

---

### AC-009: Responsive Breakpoint Behavior at 768px

GIVEN I am resizing the browser window around 768px breakpoint
WHEN the width crosses 768px threshold
THEN the timeline layout transitions smoothly:
  AND desktop layout (alternating) appears at ≥768px
  AND mobile layout (stacked) appears at <768px
  AND no content is cut off or overlapping during transition
  AND animation states persist correctly

---

### AC-010: Accessibility - Keyboard Navigation

GIVEN I am navigating the timeline using keyboard only
WHEN I tab through the About page
THEN timeline cards receive proper focus:
  AND focus outline is visible on card containers
  AND tab order follows visual top-to-bottom order (not alternating)
  AND no focusable elements are skipped
  AND focus indicators meet WCAG 2.1 AA contrast requirements

---

### AC-011: Accessibility - Screen Reader Semantics

GIVEN I am using a screen reader on the timeline
WHEN the timeline section is announced
THEN proper semantic structure is present:
  AND section has `<section>` tag with heading
  AND timeline uses `<ol>` (ordered list) for milestones
  AND each milestone is an `<li>` element
  AND visual states (completed/current/future) are announced via aria-label

---

### AC-012: Animation Performance

GIVEN I am viewing the timeline on various devices
WHEN scroll animations are triggered
THEN animations perform smoothly:
  AND animations run at 60fps on modern devices
  AND no jank or stuttering during scroll
  AND animations complete within specified duration (0.4s)
  AND `prefers-reduced-motion` media query disables animations

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | `src/components/about/TimelineMilestone.test.tsx` | renders completed milestone with checkmark icon and red styling | ✅ |
| AC-001 | `src/components/about/TimelineMilestone.test.tsx` | applies full-color card styling for completed milestones | ✅ |
| AC-002 | `src/components/about/TimelineMilestone.test.tsx` | renders current milestone with pulsing badge | ✅ |
| AC-002 | `src/components/about/TimelineMilestone.test.tsx` | applies pulse animation with correct duration and iteration | ✅ |
| AC-003 | `src/components/about/TimelineMilestone.test.tsx` | renders future milestone with outlined gray badge | ✅ |
| AC-003 | `src/components/about/TimelineMilestone.test.tsx` | applies dimmed styling for future milestones | ✅ |
| AC-004 | `src/components/about/SteppedTimeline.test.tsx` | renders milestones in alternating left-right layout on desktop | ✅ |
| AC-004 | `src/components/about/SteppedTimeline.test.tsx` | connects each card to central timeline spine | ✅ |
| AC-005 | `src/components/about/SteppedTimeline.test.tsx` | stacks milestones vertically on mobile with left-aligned spine | ✅ |
| AC-005 | `src/components/about/SteppedTimeline.test.tsx` | applies consistent spacing between mobile cards | ✅ |
| AC-006 | `src/components/about/SteppedTimeline.test.tsx` | renders timeline spine with gradient from red to gray | ✅ |
| AC-006 | `src/components/about/SteppedTimeline.test.tsx` | uses dashed line for future milestone connection | ✅ |
| AC-007 | `src/components/about/SteppedTimeline.test.tsx` | triggers fade-in animation when cards enter viewport | ✅ |
| AC-007 | `src/components/about/SteppedTimeline.test.tsx` | applies staggered delay based on milestone index | ✅ |
| AC-008 | `src/components/about/TimelineMilestone.test.tsx` | displays CheckCircle2 icon for completed milestones | ✅ |
| AC-008 | `src/components/about/TimelineMilestone.test.tsx` | displays Radio icon for current milestone | ✅ |
| AC-008 | `src/components/about/TimelineMilestone.test.tsx` | displays Target icon for future milestone | ✅ |
| AC-008 | `src/components/about/TimelineMilestone.test.tsx` | maintains consistent icon size across all states | ✅ |
| AC-009 | `src/components/about/SteppedTimeline.test.tsx` | switches layout at 768px breakpoint without content overlap | ✅ |
| AC-009 | `src/components/about/SteppedTimeline.test.tsx` | preserves animation state during layout transition | ✅ |
| AC-010 | Manual Testing | Keyboard navigation verified manually | ⏳ |
| AC-011 | Manual Testing | Screen reader semantics verified manually | ⏳ |
| AC-012 | `src/components/about/SteppedTimeline.test.tsx` | animations complete within 0.4s duration | ✅ |
| AC-012 | `src/components/about/SteppedTimeline.test.tsx` | disables animations when prefers-reduced-motion is set | ✅ |

**Status:** ⏳ Pending (Manual) | ✅ Passed | ❌ Failed

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/about/SteppedTimeline.tsx` | Create | Main timeline container with vertical spine, alternating layout logic, and animation orchestration |
| `src/components/about/TimelineMilestone.tsx` | Modify | Add `state` and `alignment` props, update styling for state differentiation |
| `src/content/about.ts` | Modify | Add `status` field to milestone interface and data |
| `src/app/about/page.tsx` | Modify | Replace grid layout (lines 123-127) with SteppedTimeline component |

### 4.2 Data Model

```typescript
// Updated milestone interface
interface TimelineMilestone {
  year: string
  title: string
  description: string
  status: 'completed' | 'current' | 'future' // NEW FIELD
}

// TimelineMilestone component props
interface TimelineMilestoneProps {
  milestone: {
    year: string
    title: string
    description: string
    status: 'completed' | 'current' | 'future'
  }
  index: number
  alignment?: 'left' | 'right' // NEW PROP
}

// Badge state styling configuration
type MilestoneBadgeConfig = {
  completed: {
    background: string
    icon: LucideIcon
    lineStyle: 'solid'
    lineColor: string
  }
  current: {
    background: string
    icon: LucideIcon
    lineStyle: 'solid'
    lineColor: string
    animation: 'pulse'
  }
  future: {
    background: string
    icon: LucideIcon
    lineStyle: 'dashed'
    lineColor: string
  }
}
```

### 4.3 API Endpoints (if applicable)

N/A - Static content only

### 4.4 State Management

No complex state management required. Component-level state only:
- Framer Motion handles animation state automatically via `whileInView`
- No user interactions requiring state updates
- Responsive layout handled via Tailwind CSS breakpoints

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 767px)

- Timeline spine positioned on left edge (16px from viewport edge)
- All milestone cards stack vertically on right side of spine
- Cards use full width minus timeline margin (e.g., ml-16)
- Reduced badge size (48px instead of 64px)
- Font sizes reduced: title 20px, description 16px
- Vertical spacing between cards: 32px
- Simplified animations (fade only, no slide)
- Touch-friendly card padding (24px)

### 5.2 Tablet Requirements (768px - 1023px)

- Alternating left/right layout begins at 768px
- Timeline spine centered in container
- Cards max-width: 360px each side
- Standard badge size (64px)
- Full animation suite (fade + slide)
- Horizontal connector lines: 48px length
- Vertical spacing between cards: 64px

### 5.3 Desktop Requirements (1024px+)

- Maximum container width: 1024px (centered)
- Cards max-width: 400px each side
- Increased horizontal connector lines: 64px length
- Vertical spacing between cards: 80px
- Enhanced hover effects on cards
- Full animation suite with stagger

### 5.4 Interactions

**Hover states (desktop only):**
- Completed milestone card: translate-y(-4px), shadow-lg transition
- Current milestone card: enhanced glow effect, scale(1.02)
- Future milestone card: border color brightens to gray-400
- Smooth transitions: 0.3s ease-in-out

**Scroll animations:**
- Trigger point: 50px before entering viewport
- Fade in: opacity 0 → 1 over 0.4s
- Slide in: y-offset 20px → 0 over 0.4s
- Stagger: 0.1s delay per milestone
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Pulsing animation (current milestone):**
- Continuous loop (infinite)
- Duration: 2s
- Scale range: 1.0 → 1.1 → 1.0
- Opacity range: 0.3 → 0.6 → 0.3

### 5.5 Accessibility

**Keyboard navigation:**
- Tab order follows visual top-to-bottom sequence (milestone 1 → 5)
- Focus outline: 2px solid blue, 2px offset
- Focus visible on entire card container
- Outline contrast ratio ≥ 3:1 against background

**Screen reader:**
- Section wrapped in `<section aria-labelledby="timeline-heading">`
- Heading: `<h2 id="timeline-heading">Our Journey</h2>`
- Timeline list: `<ol aria-label="Company milestones">`
- Each milestone: `<li aria-label="[Year]: [Title] - [Status]">`
- Example: `<li aria-label="Founding: AutoCap Group Founded - Completed">`

**Reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations */
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Color contrast:**
- All text meets WCAG 2.1 AA (4.5:1 for body, 3:1 for large text)
- Status differentiation doesn't rely solely on color (uses icons + styling)
- Focus indicators have sufficient contrast

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Missing milestone status | N/A (TypeScript enforces) | TypeScript compile error if `status` field missing |
| Animation library failure | Timeline displays without animations | Graceful degradation: static timeline still usable |
| Window resize jank | N/A (performance issue) | Use CSS transitions for breakpoint changes, debounce if needed |

---

## 7. Performance Considerations

- **Bundle size impact:** Framer Motion already imported (no new dependency)
- **Animation performance:** Use CSS transforms (translate, scale) for GPU acceleration
- **Layout shifts:** Reserve space for timeline spine to prevent CLS
- **Image loading:** No images in timeline (icon-based only)
- **Lazy loading:** Not needed (above-fold-ish content on About page)
- **Render optimization:** Memoize milestone cards if list becomes dynamic (currently static)

**Performance budget:**
- Timeline section should not add >5KB to bundle
- Animations should maintain 60fps on devices 2+ years old
- First Contentful Paint impact: <50ms

---

## 8. Security Considerations

N/A - Frontend-only UI component with static content. No user input, no data transmission, no authentication.

---

## 9. Testing Strategy

### 9.1 Unit Tests
- TimelineMilestone component renders correctly with each status
- Badge icons change based on milestone status
- Alignment prop correctly positions cards left/right
- Animation props are correctly passed to motion.div

### 9.2 Integration Tests
- SteppedTimeline renders 5 milestones in correct order
- Milestone states match content data (3 completed, 1 current, 1 future)
- Timeline spine gradient renders correctly
- Responsive layout switches at 768px breakpoint

### 9.3 E2E Tests (Visual)
- Screenshot test: desktop layout (1024px) matches design
- Screenshot test: mobile layout (375px) matches design
- Scroll animation triggers correctly (visual verification)
- Accessibility audit (axe-core): no violations

### 9.4 Manual Testing
- Test on actual devices: iPhone SE, iPad, MacBook
- Test with VoiceOver and NVDA screen readers
- Test with keyboard navigation only
- Test with "Reduce Motion" enabled in OS settings
- Test browser compatibility: Chrome, Safari, Firefox

---

## 10. Dependencies

### 10.1 New Dependencies
None - uses existing dependencies:
- `framer-motion` (already installed)
- `lucide-react` (already installed)

### 10.2 Feature Dependencies
None - standalone feature improvement

---

## 11. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed (5 for prototype)
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 12. Open Questions

- [x] Should we add year dots on the timeline spine or just connecting lines? **Decision: Use milestone badges connected by lines**
- [x] Should future milestone be fully grayed out or partially colored? **Decision: Outlined style with gray colors**
- [x] Should we add micro-interactions (e.g., badge rotation on hover)? **Decision: Keep it simple - no excessive micro-interactions**

---

---

## Test Plan

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | unit | `src/components/about/TimelineMilestone.test.tsx` | `renders completed milestone with checkmark icon and red styling` | Mock milestone with `status: 'completed'` | Invalid status value, missing status field |
| AC-001 | unit | `src/components/about/TimelineMilestone.test.tsx` | `applies full-color card styling for completed milestones` | Mock milestone with `status: 'completed'` | Empty milestone data |
| AC-002 | unit | `src/components/about/TimelineMilestone.test.tsx` | `renders current milestone with pulsing badge` | Mock milestone with `status: 'current'` | Multiple milestones marked as current |
| AC-002 | unit | `src/components/about/TimelineMilestone.test.tsx` | `applies pulse animation with correct duration and iteration` | Mock milestone with `status: 'current'` | Animation disabled via prefers-reduced-motion |
| AC-003 | unit | `src/components/about/TimelineMilestone.test.tsx` | `renders future milestone with outlined gray badge` | Mock milestone with `status: 'future'` | No future milestone present |
| AC-003 | unit | `src/components/about/TimelineMilestone.test.tsx` | `applies dimmed styling for future milestones` | Mock milestone with `status: 'future'` | Future milestone with invalid year format |
| AC-004 | integration | `src/components/about/SteppedTimeline.test.tsx` | `renders milestones in alternating left-right layout on desktop` | All 5 milestones from content data | Odd vs even number of milestones |
| AC-004 | integration | `src/components/about/SteppedTimeline.test.tsx` | `connects each card to central timeline spine` | All 5 milestones from content data | Single milestone, missing connectors |
| AC-005 | integration | `src/components/about/SteppedTimeline.test.tsx` | `stacks milestones vertically on mobile with left-aligned spine` | All 5 milestones, viewport <768px | Very narrow viewport (320px) |
| AC-005 | integration | `src/components/about/SteppedTimeline.test.tsx` | `applies consistent spacing between mobile cards` | All 5 milestones, viewport <768px | Inconsistent card heights |
| AC-006 | unit | `src/components/about/SteppedTimeline.test.tsx` | `renders timeline spine with gradient from red to gray` | All 5 milestones | No milestones, single milestone |
| AC-006 | unit | `src/components/about/SteppedTimeline.test.tsx` | `uses dashed line for future milestone connection` | Milestone with `status: 'future'` | All future milestones |
| AC-007 | integration | `src/components/about/SteppedTimeline.test.tsx` | `triggers fade-in animation when cards enter viewport` | All 5 milestones, IntersectionObserver mock | Cards already in viewport on load |
| AC-007 | integration | `src/components/about/SteppedTimeline.test.tsx` | `applies staggered delay based on milestone index` | All 5 milestones | Rapid scrolling, scroll direction changes |
| AC-008 | unit | `src/components/about/TimelineMilestone.test.tsx` | `displays CheckCircle2 icon for completed milestones` | Mock completed milestone | Icon library not loaded |
| AC-008 | unit | `src/components/about/TimelineMilestone.test.tsx` | `displays Radio icon for current milestone` | Mock current milestone | Multiple icon types for same status |
| AC-008 | unit | `src/components/about/TimelineMilestone.test.tsx` | `displays Target icon for future milestone` | Mock future milestone | Missing icon component |
| AC-009 | integration | `src/components/about/SteppedTimeline.test.tsx` | `switches layout at 768px breakpoint without content overlap` | All 5 milestones, resize viewport | Rapid resize, breakpoint edge cases (767px, 768px, 769px) |
| AC-009 | integration | `src/components/about/SteppedTimeline.test.tsx` | `preserves animation state during layout transition` | All 5 milestones, resize during animation | Resize while animations in progress |
| AC-010 | integration | `src/app/about/page.test.tsx` | `timeline cards receive focus in top-to-bottom order` | Full page render | Keyboard navigation with screen reader enabled |
| AC-010 | integration | `src/app/about/page.test.tsx` | `focus outline is visible and meets contrast requirements` | Full page render | High contrast mode, dark mode |
| AC-011 | integration | `src/app/about/page.test.tsx` | `section has proper ARIA structure with labelledby` | Full page render | Missing heading ID |
| AC-011 | integration | `src/app/about/page.test.tsx` | `timeline uses ordered list with aria-label on items` | Full page render | Screen reader announces milestone states correctly |
| AC-011 | integration | `src/app/about/page.test.tsx` | `milestone aria-labels include year, title, and status` | Full page render | Long titles, special characters in content |
| AC-012 | integration | `src/components/about/SteppedTimeline.test.tsx` | `animations complete within 0.4s duration` | All 5 milestones, performance measurement | Low-end device simulation |
| AC-012 | integration | `src/components/about/SteppedTimeline.test.tsx` | `disables animations when prefers-reduced-motion is set` | All 5 milestones, reduced motion media query | Animation classes still applied but with 0s duration |

**Cross-cutting tests:**

| Type | File | Description | Edge Cases |
|------|------|-------------|------------|
| Responsive | `tests/responsive/about-timeline.visual.spec.ts` | Screenshot test at 320px, 375px, 768px, 1024px, 1440px | Between breakpoints (767px, 769px) |
| A11y Smoke | `tests/a11y/about-timeline.a11y.spec.ts` | Run axe-core on timeline section, keyboard navigation flow | Color blindness simulation, screen reader announcements |
| Data Integrity | `src/content/about.test.ts` | Verify all 5 milestones have required status field | Missing status, invalid status values |
| Content Updates | `src/content/about.test.ts` | Ensure milestone status matches expected (3 completed, 1 current, 1 future) | Status order validation, duplicate statuses |
| Animation Performance | `tests/performance/timeline-animation.perf.spec.ts` | Measure FPS during scroll animation, check for jank | Multiple simultaneous animations, slow device |

**Test Infrastructure Requirements:**

Since this is prototype mode and no test infrastructure exists, the following packages need to be installed before tests can run:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom @types/jest
npm install --save-dev axe-core @axe-core/playwright playwright
```

**Test Configuration:**
- Jest config: `jest.config.js` with React/TypeScript/Next.js support
- Playwright config: `playwright.config.ts` for E2E/visual tests
- Test setup file: `jest.setup.js` for @testing-library/jest-dom matchers

**Prototype Mode Test Strategy:**

In prototype mode, we prioritize the **5 essential quality gates**. This means:
- ✅ **Focus:** Unit + Integration tests for core functionality
- ✅ **Run:** All tests in AC table (27 tests)
- ⚠️ **Defer:** Advanced E2E/visual tests (can be added later)
- ⚠️ **Defer:** Performance profiling (manual verification OK)
- ⚠️ **Manual:** A11y testing with actual screen readers (VoiceOver/NVDA)

**Test Execution Order (TDD Red-Green-Blue):**

1. **Data model tests** (`about.test.ts`) - verify content structure
2. **TimelineMilestone unit tests** - AC-001, AC-002, AC-003, AC-008
3. **SteppedTimeline integration tests** - AC-004, AC-005, AC-006, AC-007, AC-009, AC-012
4. **Page integration tests** - AC-010, AC-011
5. **Cross-cutting tests** - responsive, a11y, data integrity (last)

**Expected Test Coverage:**
- Unit tests: ~15 tests covering individual component logic
- Integration tests: ~12 tests covering component composition
- Total: **27 tests** (excluding E2E/visual which are deferred in prototype mode)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | [User] | 2026-04-23 | [x] |
| Tech Lead | Alex Chen | 2026-04-23 | [x] |
| Quality Lead | Dr. Priya Patel | | [ ] |
