# Fumadocs-Inspired Documentation System

This project now includes a **Fumadocs-inspired documentation system** integrated seamlessly with Astro. While Fumadocs itself is built for Next.js, we've implemented similar features and aesthetics for our Astro-based portfolio.

## 🎯 What Was Implemented

### 1. **Documentation Hub** (`/docs`)

A centralized documentation homepage that showcases:

- **Latest Blog Posts** - Technical insights and cloud architecture guides
- **Featured Projects** - Cloud solutions and enterprise implementations  
- **Enterprise Use Cases** - Real-world solutions and success stories

**Features:**

- Unified search across all content
- Statistics dashboard showing content counts
- Category-based organization
- Quick links to all documentation types

**Access:** Visit `/docs` to see the documentation hub in action.

### 2. **Advanced Search with Fuse.js**

A powerful client-side search component (`FumaSearch.astro`) featuring:

- **Fuzzy search** across blog posts, projects, and use cases
- **Real-time results** as you type
- **Keyboard navigation** (↑/↓ arrow keys + Enter to select)
- **Keyboard shortcut** (Ctrl/Cmd + K to focus search)
- **Smart highlighting** of matching terms
- **Category badges** for result types
- **Search index** auto-generated during build

**Search Index:**

- Automatically generated from content collections
- Includes title, description, tags, and excerpt
- Stored in `public/search-index.json`
- Regenerated on every build

### 3. **Enhanced Table of Contents (FumaTOC)**

An interactive sidebar TOC component with:

- **Active section highlighting** based on scroll position
- **Reading progress indicator** showing completion percentage
- **Smooth scroll** to sections when clicked
- **Sticky positioning** that stays visible while scrolling
- **Visual feedback** for current section

**Features:**

- Auto-detects h2 and h3 headings
- IntersectionObserver for performance
- Progress bar updates in real-time
- Clean, modern design matching Fumadocs aesthetic

### 4. **Fumadocs-Style MDX Components**

#### `<FumaCallout>`

Enhanced callout/admonition component with:

- **6 types:** note, warning, danger, success, info, tip
- **Custom icons** using Lucide icons
- **Themed colors** for each type
- **Proper typography** for nested content

**Usage:**

```mdx
<FumaCallout type="note" title="Important">
This is a note callout with custom styling
</FumaCallout>

<FumaCallout type="warning">
Warning callouts have their own color scheme
</FumaCallout>
```

#### `<FumaCodeBlock>`

Advanced code block component featuring:

- **Copy to clipboard** button
- **Optional filename** display
- **Language badges**
- **Line numbering** support
- **Syntax highlighting** via existing Shiki integration
- **Success feedback** when code is copied

**Usage:**

```mdx
<FumaCodeBlock filename="example.ts" lang="typescript" showLineNumbers>
  ```ts
  const greeting = "Hello World";
  ```

</FumaCodeBlock>
```

### 5. **Enhanced DocLayout**

The existing `DocLayout.astro` now uses the new `FumaTOC` component for:

- Better visual hierarchy
- Improved scroll tracking
- Reading progress indicators
- More polished aesthetics

## 📁 File Structure

```
src/
├── components/
│   ├── mdx/
│   │   ├── FumaCallout.astro       # Enhanced callout component
│   │   └── FumaCodeBlock.astro     # Code block with copy button
│   └── ui/
│       ├── FumaSearch.astro        # Search component with Fuse.js
│       └── FumaTOC.astro           # Enhanced table of contents
├── layouts/
│   └── DocLayout.astro             # Updated to use FumaTOC
├── pages/
│   └── docs.astro                  # Documentation hub page
├── scripts/
│   └── generate-search-index.ts    # Generates search index
└── public/
    └── search-index.json           # Auto-generated (do not edit)
```

## 🚀 Usage

### Accessing Documentation

1. **Documentation Hub:** Navigate to `/docs` to see all content
2. **Search:** Use Ctrl/Cmd + K anywhere on the site to search
3. **Browse:** Use the category cards to filter by type

### Using Components in MDX

All Fuma components are available in your MDX files:

```mdx
---
title: My Blog Post
description: A post with Fuma components
---

<FumaCallout type="tip" title="Pro Tip">
Use keyboard shortcuts to navigate faster!
</FumaCallout>

<FumaCodeBlock filename="config.ts">
```ts
export const config = {
  theme: 'dark',
  search: true
};
```

</FumaCodeBlock>
```

### Search Index Generation

The search index is automatically generated during build:

```bash
npm run build  # Generates search index, then builds site
```

To manually generate the index:

```bash
npm run search:index
```

## 🎨 Styling

All components use **Tailwind CSS** and follow the existing design system:

- Consistent color palette (blue, gray accents)
- Smooth transitions and hover effects
- Responsive design for all screen sizes
- Dark mode ready (can be extended)

## ⚡ Performance

- **Client-side search** is fast (uses Fuse.js with optimized indexes)
- **Lazy loading** for search data (only loaded when needed)
- **IntersectionObserver** for TOC active states (efficient scrolling)
- **Minimal JavaScript** (~10KB gzipped for search)

## 🔧 Configuration

### Search Options

Edit `src/components/ui/FumaSearch.astro` to adjust:

- **Fuse.js threshold** (search sensitivity)
- **Key weights** (prioritize title vs description)
- **Result limits** (how many results to show)

### TOC Options

Edit `src/components/ui/FumaTOC.astro` to adjust:

- **Heading depth** (h2, h3, h4, etc.)
- **Sticky offset** (distance from top)
- **Progress bar colors**

## 📝 Content Collections

The system automatically integrates with your existing collections:

- **Blog:** `src/content/blog/*.mdx`
- **Projects:** `src/content/projects/*.mdx`
- **Use Cases:** `src/content/use-cases/*.mdx`

All content is indexed for search and displayed in the docs hub.

## 🎯 Key Differences from Fumadocs

While inspired by Fumadocs, this implementation is tailored for Astro:

| Feature | Fumadocs (Next.js) | Our Implementation (Astro) |
|---------|-------------------|---------------------------|
| Framework | Next.js + React | Astro + Minimal JS |
| Search | Algolia/Orama | Fuse.js (client-side) |
| TOC | React component | Vanilla JS + Astro |
| Components | React/TSX | Astro components |
| Routing | Next.js pages | Astro file-based routing |
| Data | Content Collections API | Astro Content Collections |

## 📚 Learn More

- **Fuse.js Documentation:** <https://fusejs.io/>
- **Fumadocs:** <https://fumadocs.dev/> (original inspiration)
- **Astro Content Collections:** <https://docs.astro.build/en/guides/content-collections/>

## 🎉 Benefits

✅ **Unified Documentation** - All content in one place  
✅ **Fast Search** - Client-side fuzzy search with no backend  
✅ **Better UX** - Keyboard shortcuts, progress tracking, smooth scrolling  
✅ **Modern Design** - Clean Fumadocs-inspired aesthetics  
✅ **Type-Safe** - Full TypeScript support  
✅ **SEO-Friendly** - Static generation, fast page loads  
✅ **Accessible** - Keyboard navigation, semantic HTML

---

**Ready to use!** Visit `/docs` to see your new documentation hub in action! 🚀
