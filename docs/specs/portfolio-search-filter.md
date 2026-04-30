# Specification: Portfolio Search & City Filter

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-30
**Status:** Implemented

---

## 1. Overview

### 1.1 Summary

A search and filter system for the Portfolio page workshop directory that enables users to quickly find specific workshops by name and filter by city location. The feature combines a real-time search input with an integrated city dropdown selector in a unified, clean interface with white background for clear visibility.

### 1.2 Goals

- Enable users to quickly find workshops by name (e.g., "Däckgruppen", "Mölndal")
- Allow filtering workshops by specific city locations
- Support combined filtering (search term + city filter working together)
- Maintain existing page performance and animations
- Provide clear feedback when no workshops match search criteria
- Ensure responsive design across all device sizes

### 1.3 Non-Goals

- Multi-select city filtering (filter by multiple cities at once)
- Region-based filtering (separate from city)
- Sort functionality (by name, date acquired, etc.)
- Search by workshop description or other metadata
- URL state persistence / shareable filter links
- Advanced search features (fuzzy matching, search operators)
- Search history or saved filters

### 1.4 User Story

As a **website visitor or potential investor**,
I want **to search and filter the workshop portfolio by name and location**,
So that **I can quickly find specific workshops or view all locations in a particular city without scrolling through the entire grid**.

---

## 2. Acceptance Criteria

### AC-001: Real-time search by workshop name

GIVEN I am viewing the Portfolio page with 12 workshops displayed
WHEN I type text into the search input field
THEN the workshop grid updates in real-time to show only workshops whose names contain the search term
  AND the search is case-insensitive (e.g., "däck" matches "Däckpoint")
  AND partial matches are supported (e.g., "gruppen" finds "Däckgruppen Bromma")

---

### AC-002: City dropdown filter

GIVEN I am viewing the Portfolio page
WHEN I open the city dropdown selector on the right side of the search bar
THEN I see "All Cities" as the first option (selected by default)
  AND I see all unique city names from the workshop data, sorted alphabetically
WHEN I select a specific city from the dropdown
THEN the workshop grid shows only workshops in that city
  AND the dropdown value updates to reflect my selection

---

### AC-003: Combined search and city filtering

GIVEN I have selected a city filter (e.g., "Mölndal")
  AND I have entered a search term (e.g., "däck")
WHEN both filters are active
THEN the workshop grid shows only workshops that match BOTH criteria
  AND workshops must be in the selected city AND match the search term

---

### AC-004: Empty state handling

GIVEN I have applied filters that result in zero matching workshops
WHEN no workshops match my search and/or city filter
THEN I see an empty state message with a building icon
  AND the message text reflects the active filters:
    - Search only: "No results for '{search term}'"
    - City only: "No workshops in {city name}"
    - Both: "No results for '{search term}' in {city name}"
  AND the empty state is centered and visually clear

---

### AC-005: Clear search functionality

GIVEN I have entered text in the search input
WHEN I click the X (clear) button on the right side of the search input
THEN the search term is cleared immediately
  AND the workshop grid updates to show workshops filtered only by city (or all if city is "All Cities")
  AND the clear button disappears until I type again

---

### AC-006: Edge Case - Swedish character support

GIVEN workshop names contain Swedish characters (å, ä, ö)
WHEN I search using Swedish characters (e.g., "Mölndal", "Täby")
THEN the search correctly matches workshops with those characters
  AND case-insensitive matching works for Swedish characters (Ö matches ö)

---

### AC-007: Edge Case - Whitespace handling

GIVEN I enter whitespace-only input in the search field
WHEN the search term contains only spaces or tabs
THEN the input is treated as empty (no filtering applied)
  AND all workshops matching the city filter are shown

---

### AC-008: Responsive design requirements

GIVEN I am viewing the Portfolio page on different screen sizes
WHEN the viewport width is 320px-767px (mobile)
THEN the search input and dropdown adjust to fit the screen
  AND both remain horizontally aligned with appropriate spacing
WHEN the viewport width is 768px-1023px (tablet)
THEN the search bar is centered with max-width constraint
  AND the workshop grid displays in 2 columns
WHEN the viewport width is 1024px+ (desktop)
THEN the search bar is centered with max-width of 4xl (896px)
  AND the workshop grid displays in 3 columns
  AND all hover effects and animations work smoothly

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | Manual Testing | Real-time search functionality | ✅ |
| AC-002 | Manual Testing | City dropdown filter | ✅ |
| AC-003 | Manual Testing | Combined filtering | ✅ |
| AC-004 | Manual Testing | Empty state display | ✅ |
| AC-005 | Manual Testing | Clear button behavior | ✅ |
| AC-006 | Manual Testing | Swedish character search | ✅ |
| AC-007 | Manual Testing | Whitespace handling | ✅ |
| AC-008 | Manual Testing | Responsive breakpoints | ✅ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

**Note:** This feature was implemented in prototype mode with manual testing. Automated tests can be added in future iterations if moved to production mode.

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/portfolio/WorkshopSearchInput.tsx` | Create | Combined search input with integrated city dropdown selector |
| `src/components/portfolio/CityFilter.tsx` | Create | Button-based city filter (created but not used in final implementation) |
| `src/components/portfolio/WorkshopGrid.tsx` | Modify | Convert to client component, add filtering logic and state management |
| `src/content/workshops.ts` | Modify | Add `getCities()` helper function |

### 4.2 Data Model

```typescript
// Workshop interface (existing)
interface Workshop {
  id: number
  name: string      // Search target
  city: string      // Filter target
  slug: string
  region: string
  latitude: number
  longitude: number
  status: 'acquired' | 'pending' | 'target'
  yearAcquired: number
  localWebsite: string
  description: string
}

// Component props
interface WorkshopSearchInputProps {
  value: string
  onChange: (value: string) => void
  selectedCity: string
  onCityChange: (city: string) => void
  cities: string[]
}

interface WorkshopGridProps {
  workshops: Workshop[]
}
```

### 4.3 API Endpoints

Not applicable - all data is static and imported from `src/content/workshops.ts`

### 4.4 State Management

Local component state using React hooks:

```typescript
// In WorkshopGrid component
const [searchTerm, setSearchTerm] = useState('')
const [selectedCity, setSelectedCity] = useState('All')
const cities = useMemo(() => getCities(), [])

const filteredWorkshops = useMemo(() => {
  let result = workshops

  // Apply city filter first
  if (selectedCity !== 'All') {
    result = result.filter(w => w.city === selectedCity)
  }

  // Apply search filter
  if (searchTerm.trim()) {
    const lowerSearch = searchTerm.toLowerCase()
    result = result.filter(w =>
      w.name.toLowerCase().includes(lowerSearch)
    )
  }

  return result
}, [selectedCity, searchTerm, workshops])
```

**Performance optimization:** `useMemo` prevents unnecessary re-filtering on every render, only recomputes when dependencies change.

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 767px)

- Search input and dropdown remain horizontally aligned
- Search input flexes to fill available space, dropdown maintains minimum width (200px)
- Gap between search and dropdown: 12px (gap-3)
- Workshop grid displays single column
- Touch targets are minimum 44px height for accessibility
- Dropdown options are easily tappable on mobile devices

### 5.2 Tablet Requirements (768px - 1023px)

- Search bar centered with responsive max-width
- Workshop grid displays 2 columns with 32px gap (gap-8)
- Hover states active on dropdown
- Filter section maintains white background for contrast

### 5.3 Desktop Requirements (1024px+)

- Search bar centered with max-width of 896px (max-w-4xl)
- Workshop grid displays 3 columns with 32px gap
- Smooth hover effects on all interactive elements
- Dropdown width: minimum 200px, comfortable click target
- Focus states clearly visible with red ring

### 5.4 Interactions

**Search Input:**
- Hover: No visual change (input field)
- Focus: Red border (#C8102E) and red ring with 20% opacity
- Typing: Real-time filtering with no debounce (dataset is small)
- Clear button: Appears only when text exists, hover changes color to darker gray

**City Dropdown:**
- Default: White background, gray border, gray text
- Hover: Border changes to red (#C8102E)
- Focus: Red border and red ring with 20% opacity
- Selection: Immediate filtering applied

**Workshop Cards:**
- Existing Framer Motion stagger animation preserved
- Hover lift effect maintained
- Smooth transitions when cards enter/exit during filtering

### 5.5 Accessibility

- Search input has descriptive placeholder: "Search workshops..."
- Dropdown has semantic `<select>` element with proper options
- Clear button has `aria-label="Clear search"`
- Keyboard navigation: Tab through search → dropdown → cards
- Focus indicators visible (red ring on focus)
- Empty state provides clear feedback to screen readers
- Color contrast meets WCAG AA standards (white on gray background)

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| No matching results | "No workshops found" + contextual message based on filters | Display empty state component with Building2 icon and specific message |
| Invalid characters in search | N/A - All input accepted | `.toLowerCase()` and `.includes()` handle all character types safely |
| Dropdown selection fails | N/A - Select element is reliable | Native browser select behavior, no custom handling needed |
| State update issues | N/A - React handles gracefully | React's useState ensures consistent state updates |

**Note:** Since this is a client-side filtering feature with static data, error scenarios are minimal. All edge cases are handled gracefully without error states.

---

## 7. Performance Considerations

- **Filtering performance:** O(n) where n=12 workshops - negligible performance impact
- **Re-render optimization:** `useMemo` prevents unnecessary filtering operations
- **Bundle size impact:** Minimal - only adds ~180 lines of code and lucide-react icons (already in use)
- **No lazy loading needed:** Workshop data is small (12 items), loaded immediately
- **Caching strategy:** `getCities()` result memoized to prevent recalculation
- **Animation performance:** Existing Framer Motion animations preserved, no additional animation overhead

**Measured Impact:**
- Page bundle size: 470KB → 624KB (includes all page assets)
- Build time: No significant change
- Runtime performance: No measurable impact (filtering 12 items is instant)

---

## 8. Security Considerations

- **No authentication required:** Public-facing portfolio page
- **No authorization checks:** All workshop data is public information
- **Input validation:** Not required - search accepts any text, no XSS risk (no innerHTML rendering)
- **Data sanitization:** React automatically escapes all rendered values
- **No user data stored:** All filtering is ephemeral (in-memory only)
- **No API calls:** Static data only, no external requests

**Security assessment:** Low risk - feature is read-only with static data and no user data storage.

---

## 9. Testing Strategy

### 9.1 Unit Tests

Not implemented in prototype mode. If moved to production, test:
- `getCities()` returns unique, sorted city list
- Filtering logic correctly filters by search term
- Filtering logic correctly filters by city
- Combined filtering works correctly
- Empty state logic returns correct messages

### 9.2 Integration Tests

Not implemented in prototype mode. If moved to production, test:
- WorkshopGrid renders with initial data
- Search input updates trigger re-filtering
- Dropdown selection triggers re-filtering
- Empty state displays when appropriate
- Clear button functionality

### 9.3 Manual Testing

Completed during implementation:
- ✅ Search filters in real-time as user types
- ✅ Case-insensitive matching works
- ✅ Swedish characters (å, ä, ö) search correctly
- ✅ Partial matching works ("gruppen" finds "Däckgruppen")
- ✅ Clear button appears/disappears appropriately
- ✅ Dropdown filters by city correctly
- ✅ Combined filters work together
- ✅ Empty states show correct contextual messages
- ✅ Responsive design works at all breakpoints
- ✅ Animations preserved (card hover, stagger on load)
- ✅ Build compiles successfully
- ✅ Linting passes with 0 errors

---

## 10. Dependencies

### 10.1 New Dependencies

None - feature uses existing dependencies:
- `lucide-react` (already in use) - Search and X icons
- `react` (already in use) - useState, useMemo hooks

### 10.2 Feature Dependencies

- Workshop data structure in `src/content/workshops.ts`
- Existing Input component (`src/components/ui/atoms/input.tsx`)
- Existing WorkshopCard component (`src/components/portfolio/WorkshopCard.tsx`)
- Utility function `cn()` from `src/lib/utils.ts`
- Framer Motion (already in use for card animations)

---

## 11. Rollout Plan

- [x] Implementation complete
- [x] All tests passing (manual testing completed)
- [x] Quality gates passed (lint clean, build succeeds)
- [x] User testing approved (approved by user on 2026-04-30)
- [x] Documentation generated (`docs/features/portfolio-search-filter.md`)
- [ ] Ready for commit (awaiting user instruction)

---

## 12. Open Questions

- [x] ~~Should city filter be buttons or dropdown?~~ → Resolved: Dropdown on right side of search bar
- [x] ~~Should search bar be same color as background or white?~~ → Resolved: White for better contrast
- [x] ~~How much spacing for dropdown from right edge?~~ → Resolved: min-w-200px with pr-10 padding

**All questions resolved during implementation.**

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | 2026-04-30 | [x] |
| Tech Lead | Alex Chen (Claude Code) | 2026-04-30 | [x] |
| Quality Lead | Dr. Priya Patel (Claude Code) | 2026-04-30 | [x] |

---

## Implementation Notes

This specification was created **retroactively** after feature implementation. The feature was built in prototype mode following user requirements gathered during implementation. All acceptance criteria have been verified through manual testing and user approval.

**Key Implementation Decisions:**

1. **Dropdown vs Buttons:** Initially planned button-based city filter, but user requested dropdown for better UX - implemented immediately
2. **Search Bar Color:** User requested white background for better contrast against gray page background - adjusted in final design
3. **Dropdown Spacing:** User requested more spacing for dropdown arrow from right edge - increased min-width to 200px and right padding to pr-10

**Files Created:**
- `src/components/portfolio/WorkshopSearchInput.tsx` (74 lines)
- `src/components/portfolio/CityFilter.tsx` (32 lines) - created but not used
- `docs/features/portfolio-search-filter.md` (feature documentation)
- `docs/specs/portfolio-search-filter.md` (this specification)

**Files Modified:**
- `src/components/portfolio/WorkshopGrid.tsx` (+69 lines)
- `src/content/workshops.ts` (+6 lines)

**Total Impact:** ~181 lines of production code + comprehensive documentation
