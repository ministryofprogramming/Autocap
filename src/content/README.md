# Content Directory

Structured content for the AutoCap application.

## Purpose

This directory contains:
- Website copy and text content
- Structured data exports
- Content that can be imported into components

## Setup

Content files should be TypeScript/JavaScript modules that export typed data structures.

Example structure:
```
content/
├── pages/
│   ├── home.ts       # Homepage content
│   ├── about.ts      # About page content
│   └── features.ts   # Features page content
├── workshops.ts      # Workshop location data
└── index.ts          # Re-exports all content
```

## Usage

```tsx
import { homeContent } from '@/content/pages/home'
import { workshops } from '@/content/workshops'
```

## Source

Content is derived from reference materials in `/docs/reference/`.
