# Portfolio Search & City Filter

**Status:** ✅ COMPLETE
**Date Completed:** 2026-04-30
**Implementation:** Prototype Mode

---

## Overview

Search and filter functionality for the Portfolio page workshop directory. Users can search workshops by name and filter by city using a unified search bar with integrated dropdown selector.

## User-Facing Features

### Search Functionality
- **Real-time search** - Results update as you type
- **Case-insensitive** - "däckgruppen" matches "Däckgruppen"
- **Partial matching** - "gruppen" finds all "Däckgruppen" workshops
- **Swedish character support** - Searches work with å, ä, ö
- **Clear button** - X icon appears when typing to quickly reset search

### City Filter
- **Dropdown selector** - Positioned on right side of search bar
- **All Cities option** - Default view shows all 12 workshops
- **Dynamic city list** - Automatically updated from workshop data
- **Combined filtering** - Search and city filter work together

### Empty States
Contextual messages appear when no workshops match:
- "No results for '{search term}'"
- "No workshops in {city}"
- "No results for '{search term}' in {city}"

### Visual Design
- **White search bar** - Clear contrast against gray background
- **Red focus states** - Brand color (#C8102E) for active inputs
- **Responsive layout** - Works on mobile, tablet, and desktop
- **Preserved animations** - Existing Framer Motion card animations maintained

---

## Technical Documentation

### Architecture

**Component Structure:**
```
WorkshopGrid (Client Component)
├── WorkshopSearchInput
│   ├── Search Icon
│   ├── Text Input
│   ├── Clear Button (conditional)
│   └── City Dropdown
└── Workshop Cards Grid
    └── WorkshopCard (with animations)
```

### Files Created

1. **`src/components/portfolio/WorkshopSearchInput.tsx`** (72 lines)
   - Combined search input and city dropdown
   - Props: `value`, `onChange`, `selectedCity`, `onCityChange`, `cities`
   - White background, red focus states
   - Flex layout for horizontal arrangement

2. **`src/components/portfolio/CityFilter.tsx`** (32 lines)
   - Button-based filter component (not used in final implementation)
   - Kept for potential future use

### Files Modified

1. **`src/components/portfolio/WorkshopGrid.tsx`**
   - Added `'use client'` directive (converted to client component)
   - Added state management: `useState` for search/city filtering
   - Added `useMemo` for optimized filtering logic
   - Integrated WorkshopSearchInput component
   - Added empty state handling
   - Lines changed: ~44 → ~113 (+69 lines)

2. **`src/content/workshops.ts`**
   - Added `getCities()` helper function
   - Returns unique, alphabetically sorted city list
   - Lines added: +6

### State Management

```typescript
const [searchTerm, setSearchTerm] = useState('')
const [selectedCity, setSelectedCity] = useState('All')
const cities = useMemo(() => getCities(), [])
```

### Filtering Logic

```typescript
const filteredWorkshops = useMemo(() => {
  let result = workshops

  // Apply city filter
  if (selectedCity !== 'All') {
    result = result.filter(w => w.city === selectedCity)
  }

  // Apply search filter (case-insensitive partial match)
  if (searchTerm.trim()) {
    const lowerSearch = searchTerm.toLowerCase()
    result = result.filter(w =>
      w.name.toLowerCase().includes(lowerSearch)
    )
  }

  return result
}, [selectedCity, searchTerm, workshops])
```

**Performance:** `useMemo` prevents unnecessary re-filtering on every render, only recomputes when dependencies change.

### Data Structure

**Workshop Interface:**
```typescript
interface Workshop {
  id: number
  name: string      // Search target
  city: string      // Filter target
  slug: string
  region: string
  // ... other fields
}
```

**Cities in Dataset:**
- Bromma
- Kungsängen
- Mölndal (3 workshops)
- Sollentuna
- Solna
- Stockholm
- Tumba
- Tyresö
- Täby
- Öxnered

### Styling

**Search Bar:**
- Height: `h-12` (48px)
- Background: `bg-white`
- Left padding: `pl-12` (for search icon)
- Right padding: `pr-12` (for clear button)
- Focus: Red border and ring (`border-[#C8102E]`, `ring-[#C8102E]/20`)

**Dropdown:**
- Height: `h-12` (48px)
- Min width: `min-w-[180px]`
- Background: `bg-white`
- Border: `border-2 border-gray-300`
- Hover: `hover:border-[#C8102E]`
- Focus: Red border and ring

**Container:**
- Max width: `max-w-4xl`
- Margin: `mx-auto mb-12`
- Flex layout: `flex gap-3`

### Responsive Behavior

- **Mobile (320px-767px):** Search input flexes, dropdown maintains min-width
- **Tablet (768px-1023px):** Full width layout, 2-column grid
- **Desktop (1024px+):** Centered with max-width, 3-column grid

---

## Testing Notes

### Manual Testing Completed
- ✅ Search filters in real-time
- ✅ Case-insensitive matching works
- ✅ Swedish characters (å, ä, ö) work correctly
- ✅ Clear button appears/disappears appropriately
- ✅ City dropdown filters correctly
- ✅ Combined filters work together
- ✅ Empty states show contextual messages
- ✅ Build compiles successfully
- ✅ Linting passes with 0 errors

### Edge Cases Handled
- Empty search term → Shows all workshops (or filtered by city)
- Whitespace-only search → Treated as empty
- Special characters → Handled by `.toLowerCase()` and `.includes()`
- No results → Empty state with contextual message
- All filters cleared → Returns to default view (all 12 workshops)

---

## Future Enhancements

### Potential Improvements
1. **Multi-select cities** - Filter by multiple cities at once
2. **Region filter** - Additional filter by region (Västra Götaland, Stockholm)
3. **Sort options** - Sort by name, city, year acquired
4. **Search by description** - Expand search to include workshop descriptions
5. **URL state persistence** - Save filters in URL query params
6. **Keyboard shortcuts** - Focus search with `/`, clear with `Esc`
7. **Search history** - Remember recent searches
8. **Fuzzy matching** - Handle typos gracefully

### Technical Debt
- None identified - Clean implementation following existing patterns

---

## Dependencies

**External:**
- `lucide-react` - Search and X icons
- `react` - useState, useMemo hooks

**Internal:**
- `@/components/ui/atoms/input` - Base input component
- `@/lib/utils` - cn() utility for class merging
- `@/content/workshops` - Workshop data and getCities helper
- `./WorkshopCard` - Individual workshop card component

---

## Performance

**Metrics:**
- Build size impact: ~470KB → 624KB for /portfolio page
- Filtering operations: O(n) where n = 12 workshops (negligible)
- Re-renders minimized with `useMemo` optimization
- No performance issues identified

**Lighthouse (Expected):**
- Performance: 90+
- Accessibility: Maintains existing score
- Best Practices: No degradation

---

## Maintenance

### Updating Cities
Cities are **automatically derived** from workshop data. When new workshops are added to `src/content/workshops.ts`, the city dropdown updates automatically via the `getCities()` helper.

### Modifying Search Behavior
Search logic is centralized in `WorkshopGrid.tsx` filtering logic (lines ~23-38). To change search behavior:
1. Locate `filteredWorkshops` useMemo
2. Modify the `.filter()` condition in the search term block
3. Test with various search terms

### Styling Updates
Search and dropdown styling is in `WorkshopSearchInput.tsx`. Brand color references (#C8102E) are consistent throughout. Update focus states, borders, and backgrounds in this file.

---

## Related Documentation

- **Workshop Data:** `src/content/workshops.ts`
- **Design System:** Component follows existing Input and Select patterns
- **News Filter:** Similar implementation in `src/app/news/page.tsx` (CategoryFilter pattern)
- **Implementation Plan:** `/Users/igorkriasnik/.claude/projects/-Users-igorkriasnik-work-Autocap/ebbd75db-54df-4270-ad93-43745c3a2643.jsonl`

---

**Feature completed and approved:** 2026-04-30
**Implemented by:** Claude Code (Tech Lead persona)
**Approved by:** User
