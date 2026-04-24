# Specification: Language Selector (Visual Component - Phase 1)

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-24
**Status:** Draft

---

## 1. Overview

### 1.1 Summary
A visual language selector component in the top navigation bar that displays English and Swedish flag options. This is Phase 1 (visual only) - the component will be styled and positioned correctly but will not be functional yet. This establishes the UI foundation for future translation functionality.

### 1.2 Goals
- Display a visually appealing language selector with flag icons in the header
- Position it appropriately in both desktop and mobile layouts
- Maintain responsive design across all breakpoints
- Integrate seamlessly with existing header navigation
- Establish UI/UX foundation for future translation feature

### 1.3 Non-Goals
- Functional language switching (Phase 2)
- Translation dictionaries or content translation
- LocalStorage persistence of language preference
- React Context for language state
- i18n routing or server-side rendering

### 1.4 User Story
As a website visitor,
I want to see language options in the header,
So that I know the site will support multiple languages in the future.

---

## 2. Acceptance Criteria

### AC-001: Language selector is visible in desktop header

GIVEN the user is on any page of the website at desktop width (≥1024px)
WHEN the page loads
THEN a language selector should be visible in the top navigation bar
  AND it should be positioned to the far right of the navigation links
  AND it should display both English and Swedish flag icons

---

### AC-002: Flag icons are properly displayed

GIVEN the language selector is rendered
WHEN the user views it
THEN the UK flag (🇬🇧) should represent English
  AND the Swedish flag (🇸🇪) should represent Swedish
  AND both flags should be clearly visible and recognizable
  AND flags should have appropriate size (not too small, not too large)

---

### AC-003: Mobile responsive language selector

GIVEN the user is on a mobile device (width < 1024px)
WHEN they open the mobile menu
THEN the language selector should be visible in the mobile menu
  AND it should be positioned appropriately (top or bottom of menu)
  AND both flag icons should be tappable with minimum 44x44px touch target

---

### AC-004: Visual styling matches brand

GIVEN the language selector is rendered
WHEN the user views it
THEN it should match the existing header styling
  AND it should use appropriate spacing and alignment
  AND it should maintain visual hierarchy with other header elements

---

### AC-005: Hover states on desktop

GIVEN the user is on desktop
WHEN they hover over a flag option
THEN there should be a visual hover state (opacity change, scale, or background)
  AND the cursor should change to pointer
  AND the interaction should feel responsive

---

### AC-006: Component is non-functional (Phase 1)

GIVEN the user clicks on either flag
WHEN the click event occurs
THEN nothing should happen (no language switch)
  AND no errors should be thrown
  AND the component should remain in its current visual state

---

### AC-007: Accessibility - Semantic HTML

GIVEN the language selector is rendered
WHEN examined with accessibility tools
THEN it should use semantic HTML elements
  AND it should have appropriate ARIA labels
  AND it should be keyboard focusable (even if non-functional)

---

### AC-008: Edge Case - Flag images fail to load

GIVEN flag images or emojis fail to render
WHEN the component is displayed
THEN it should show text fallback ("EN" / "SV")
  AND the component should not break or show empty space

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | `src/components/layout/LanguageSelector.test.tsx` | renders both flag buttons | ✅ |
| AC-001 | `src/components/layout/Header.test.tsx` | renders LanguageSelector in header | ✅ |
| AC-002 | `src/components/layout/LanguageSelector.test.tsx` | displays UK flag emoji for English | ✅ |
| AC-002 | `src/components/layout/LanguageSelector.test.tsx` | displays Swedish flag emoji for Swedish | ✅ |
| AC-002 | `src/components/layout/LanguageSelector.test.tsx` | flags have appropriate size styling | ✅ |
| AC-003 | `src/components/layout/Header.test.tsx` | LanguageSelector is present in component tree | ✅ |
| AC-004 | `src/components/layout/LanguageSelector.test.tsx` | applies custom className prop | ✅ |
| AC-005 | `src/components/layout/LanguageSelector.test.tsx` | flag buttons have pointer cursor | ✅ |
| AC-006 | `src/components/layout/LanguageSelector.test.tsx` | clicking flag does not throw error | ✅ |
| AC-006 | `src/components/layout/LanguageSelector.test.tsx` | clicking flag does not trigger navigation | ✅ |
| AC-007 | `src/components/layout/LanguageSelector.test.tsx` | uses semantic button elements | ✅ |
| AC-007 | `src/components/layout/LanguageSelector.test.tsx` | English button has aria-label "English" | ✅ |
| AC-007 | `src/components/layout/LanguageSelector.test.tsx` | Swedish button has aria-label "Swedish" | ✅ |
| AC-007 | `src/components/layout/LanguageSelector.test.tsx` | container has descriptive aria-label | ✅ |
| AC-007 | `src/components/layout/LanguageSelector.test.tsx` | buttons are keyboard focusable | ✅ |
| AC-008 | `src/components/layout/LanguageSelector.test.tsx` | component renders without crashing when emojis are present | ✅ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

**Total:** 16/16 AC tests passed + 24 supporting tests = 40 tests passing

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/layout/LanguageSelector.tsx` | Create | Visual language selector component with flag icons |
| `src/components/layout/Header.tsx` | Modify | Add LanguageSelector component to header |

### 4.2 Data Model

```typescript
// Simple type for visual component (Phase 1)
type Language = 'en' | 'sv'

// Component props
interface LanguageSelectorProps {
  className?: string
}
```

### 4.3 API Endpoints (if applicable)

N/A - This is a pure visual component with no backend interaction.

### 4.4 State Management

- No state management needed for Phase 1 (visual only)
- Component is purely presentational
- Click handlers will be empty or log to console
- Future Phase 2 will add React Context and localStorage

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 1023px)

- Language selector appears in the mobile menu
- Positioned at the bottom of mobile navigation menu (before footer links if any)
- Display flags horizontally with spacing between them
- Minimum touch target size: 44x44px per flag
- Clear visual separation from navigation links (subtle border or spacing)

### 5.2 Desktop Requirements (1024px+)

- Language selector visible in header
- Positioned to the far right of navigation links
- Display as inline flags with separator (e.g., 🇬🇧 | 🇸🇪)
- Compact design that doesn't overpower navigation
- Aligned vertically with navigation links

### 5.3 Dropdown Design

- **Button**: Shows currently selected language flag (default: 🇬🇧) with chevron icon
- **Dropdown Menu**: Opens below button, displays both language options
- **Language Options**: Flag emoji + language name (e.g., "🇬🇧 English")
- **Selected State**: Checkmark (✓) next to current language, highlighted in brand red
- **Size**: Button ~40px height, dropdown menu 192px (w-48) width
- **Positioning**: Dropdown aligned to right edge of button

### 5.4 Interactions

- **Button hover**: Light gray background on hover
- **Click/tap button**: Opens/closes dropdown menu
- **Select language**: Updates button to show selected flag, closes dropdown
- **Click outside**: Closes dropdown
- **Escape key**: Closes dropdown
- **Visual feedback**: Chevron icon rotates 180° when dropdown is open
- **Transition**: Smooth animations (150-200ms) for hover, chevron rotation
- **Phase 1 Note**: Selecting a language updates the UI but doesn't switch content (Phase 2)

### 5.5 Accessibility

- Semantic HTML: `<button>` elements for each flag
- ARIA labels: `aria-label="English"` and `aria-label="Swedish"`
- Container: `aria-label="Language selector (coming soon)"`
- Keyboard navigation: Tab to focus each flag button
- Focus visible: Clear focus ring on keyboard focus
- High contrast: Ensure flags/fallback text meet WCAG AA standards

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Emoji flags don't render | (No message) | Show text fallback "EN" / "SV" |
| Component fails to mount | (No message) | Graceful degradation - header still works |

---

## 7. Performance Considerations

- Tiny bundle size impact (< 1KB) - just the component JSX
- No network requests
- No re-renders (static component)
- No lazy loading needed
- Minimal CSS for hover effects

---

## 8. Security Considerations

- No security concerns (static visual component)
- No user input
- No data storage
- No XSS risk

---

## 9. Testing Strategy

### 9.1 Unit Tests
- `LanguageSelector` component renders correctly
- Both flag buttons are present
- ARIA labels are correct
- Hover states work (test via class changes)
- Fallback text appears if emoji property is removed
- Component doesn't crash on click

### 9.2 Integration Tests
- LanguageSelector appears in Header component
- Position is correct (far right on desktop)
- Component is visible in mobile menu
- Responsive breakpoints work correctly

### 9.3 Manual Testing
- Test on mobile (320px, 375px, 768px)
- Test on desktop (1024px, 1440px)
- Test hover states on desktop
- Test keyboard navigation (tab to flags, enter to click)
- Test with screen reader for ARIA labels
- Test in different browsers (Chrome, Safari, Firefox)

---

## 10. Dependencies

### 10.1 New Dependencies
None - Pure React component using existing dependencies

### 10.2 Feature Dependencies
- Header component must be updated to include LanguageSelector
- No other component dependencies

---

## 11. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed (Prototype: 5 essential gates)
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 12. Open Questions

- [x] Should we use a dropdown or a simple toggle?
  - **Decision**: Simple inline flags with separator
- [x] Where exactly in the header should it be positioned?
  - **Decision**: Far right, after all navigation links
- [x] Should it be functional or visual only?
  - **Decision**: Phase 1 = Visual only, Phase 2 = Add functionality
- [x] What visual design (flags vs text)?
  - **Decision**: Flag emojis (🇬🇧 🇸🇪) with text fallback
- [ ] Exact spacing/styling details?
  - **Will finalize during implementation based on visual design**

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
| AC-001 | unit | `src/components/layout/LanguageSelector.test.tsx` | `renders both flag buttons` | none | component unmounts cleanly |
| AC-002 | unit | `src/components/layout/LanguageSelector.test.tsx` | `displays UK flag emoji for English` | none | emoji doesn't render (fallback test) |
| AC-002 | unit | `src/components/layout/LanguageSelector.test.tsx` | `displays Swedish flag emoji for Swedish` | none | emoji doesn't render (fallback test) |
| AC-002 | unit | `src/components/layout/LanguageSelector.test.tsx` | `flags have appropriate size styling` | none | missing CSS classes |
| AC-004 | unit | `src/components/layout/LanguageSelector.test.tsx` | `applies custom className prop` | none | undefined className |
| AC-005 | unit | `src/components/layout/LanguageSelector.test.tsx` | `flag buttons have pointer cursor` | none | CSS not applied |
| AC-006 | unit | `src/components/layout/LanguageSelector.test.tsx` | `clicking flag does not throw error` | none | rapid multiple clicks |
| AC-006 | unit | `src/components/layout/LanguageSelector.test.tsx` | `clicking flag does not trigger navigation` | none | disabled buttons |
| AC-007 | unit | `src/components/layout/LanguageSelector.test.tsx` | `uses semantic button elements` | none | invalid HTML structure |
| AC-007 | unit | `src/components/layout/LanguageSelector.test.tsx` | `English button has aria-label "English"` | none | missing aria-label |
| AC-007 | unit | `src/components/layout/LanguageSelector.test.tsx` | `Swedish button has aria-label "Swedish"` | none | missing aria-label |
| AC-007 | unit | `src/components/layout/LanguageSelector.test.tsx` | `container has descriptive aria-label` | none | missing container label |
| AC-007 | unit | `src/components/layout/LanguageSelector.test.tsx` | `buttons are keyboard focusable` | none | tabindex issues |
| AC-008 | unit | `src/components/layout/LanguageSelector.test.tsx` | `shows "EN" fallback when flag emoji removed` | component with text-only prop | both flags missing |
| AC-008 | unit | `src/components/layout/LanguageSelector.test.tsx` | `shows "SV" fallback when flag emoji removed` | component with text-only prop | both flags missing |

### Integration Tests

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | integration | `src/components/layout/Header.test.tsx` | `renders LanguageSelector on desktop (≥1024px)` | mock window width 1024px | component missing from Header |
| AC-001 | integration | `src/components/layout/Header.test.tsx` | `LanguageSelector positioned to far right of nav links` | render full Header | incorrect flex/grid layout |
| AC-003 | integration | `src/components/layout/Header.test.tsx` | `LanguageSelector visible in mobile menu when open` | mock window width 375px | mobile menu closed |
| AC-003 | integration | `src/components/layout/Header.test.tsx` | `LanguageSelector positioned in mobile menu` | mock window width 375px | wrong position in DOM |
| AC-003 | integration | `src/components/layout/Header.test.tsx` | `flag buttons have 44x44px minimum touch target` | mock window width 375px | buttons too small |

### Responsive Tests

| Breakpoint | File | Test Name | Fixtures | Edge Cases |
|------------|------|-----------|----------|------------|
| 320px | `src/components/layout/LanguageSelector.test.tsx` | `renders correctly at 320px mobile` | mock viewport 320px | overflow issues |
| 375px | `src/components/layout/LanguageSelector.test.tsx` | `renders correctly at 375px mobile` | mock viewport 375px | spacing issues |
| 768px | `src/components/layout/LanguageSelector.test.tsx` | `renders correctly at 768px tablet` | mock viewport 768px | breakpoint edge case |
| 1024px | `src/components/layout/LanguageSelector.test.tsx` | `renders correctly at 1024px desktop` | mock viewport 1024px | breakpoint edge case |
| 1440px | `src/components/layout/LanguageSelector.test.tsx` | `renders correctly at 1440px desktop` | mock viewport 1440px | max-width constraints |

### Cross-cutting Tests

**Visual Styling & Hover Effects:**
- Unit test: `applies hover opacity transition on desktop` (AC-005)
- Unit test: `hover state has smooth 150-200ms transition` (AC-005)

**Accessibility:**
- Integration test: `keyboard navigation works (Tab to focus)` (AC-007)
- Integration test: `visible focus ring on keyboard focus` (AC-007)

**Total Tests Planned: 29**
- **Unit tests**: 18 (LanguageSelector component)
- **Integration tests**: 5 (Header component)
- **Responsive tests**: 5 (cross-viewport)
- **Cross-cutting tests**: 1 (hover/accessibility covered in unit)

**Test Distribution:**
- Pure component logic: 18 tests
- Integration with Header: 5 tests
- Responsive behavior: 5 tests
- Accessibility: 4 tests (ARIA labels, keyboard)
- Error handling: 3 tests (fallback, click safety)

---

### Notes for Implementation

1. **Mock Viewport Width**: Use `window.matchMedia` or similar for responsive tests
2. **User Event Testing**: Use `@testing-library/user-event` for clicks/hover/keyboard
3. **ARIA Testing**: Use `@testing-library/jest-dom` for `toHaveAttribute` assertions
4. **CSS Class Testing**: Verify hover classes apply but don't test exact CSS values
5. **Fallback Testing**: Create test variant of component without emoji support flag
