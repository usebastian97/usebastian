# Copilot Instructions for SGU Portfolio

## Project Overview

This is a production-ready multilingual portfolio website built with Astro 5, TypeScript (strictest mode), and Tailwind CSS 4. The site showcases cloud architecture expertise with support for 10 languages (en, de, fr, it, nl, ch, jp, es, pt, pt-br), MDX-powered blog/projects, and is deployed on Cloudflare Pages.

## Architecture & Structure

### Content Collections (Astro)

- **Blog posts**: `src/content/blog/*.mdx` with schema: `title`, `description`, `publishDate`, `tags`, `image`, `draft`, `lang`
- **Projects**: `src/content/projects/*.mdx` with schema: `title`, `description`, `category` (cloud|ai|fullstack|tools), `tags`, `projectUrl`, `githubUrl`, `featured`, `order`, `lang`
- All content uses Astro's type-safe `getCollection()` API - never directly import MDX files
- Dynamic routes use `getStaticPaths()` pattern (see `src/pages/blog/[slug].astro`, `src/pages/projects/[slug].astro`)

### i18n Implementation

- **Config**: `astro.config.mjs` defines all 10 locales: `['en', 'de', 'fr', 'it', 'nl', 'ch', 'jp', 'es', 'pt', 'pt-br']` with `prefixDefaultLocale: false`
- **Translations**: JSON files in `src/i18n/locales/` with nested dot notation keys (e.g., `"home.hero.title"`)
- **Usage**: Import `useTranslations` from `@i18n/utils`, call `t('nav.home')` with dot-separated keys
- **Content filtering**: Filter by `lang` when using `getCollection()`: `getCollection('blog', ({ data }) => data.lang === 'en')`
- **Locale codes**: en (English), de (Deutsch), fr (Français), it (Italiano), nl (Nederlands), ch (简体中文), jp (日本語), es (Español), pt (Português), pt-br (Português BR)

### Layout Hierarchy

1. `BaseLayout.astro` - HTML shell with SEO meta tags, JSON-LD schema, hreflang links for all locales
2. `MainLayout.astro` - Adds Header/Footer chrome, wraps with min-h-screen flex layout
3. `BlogLayout.astro` - Specialized layout for blog posts with reading time

### TypeScript Path Aliases

Use these consistently (defined in `tsconfig.json`):

```typescript
@components/*  // src/components/*
@layouts/*     // src/layouts/*
@utils/*       // src/utils/*
@i18n/*        // src/i18n/*
@content/*     // src/content/*
@styles/*      // src/styles/*
```

## Development Patterns

### Adding New Content

1. **Blog post**: Create `.mdx` in `src/content/blog/` with frontmatter matching schema (required: title, description, publishDate)
2. **Project**: Create `.mdx` in `src/content/projects/` with frontmatter (required: title, description, category)
3. Schema validation is automatic via Zod - respect `z.enum()` values exactly

### Component Structure

- Page-specific components live in `src/pages/{page}/components/` (e.g., `home/components/HeroSection.astro`)
- Shared components in `src/components/` organized by type (cards/, navigation/, ui/)
- Astro components are default - only use React if interactivity requires it

### Styling

- Tailwind CSS 4 via Vite plugin (`@tailwindcss/vite`)
- Dark mode via class strategy: `dark:bg-black`, `dark:text-white`
- Use semantic color patterns: `text-gray-600 dark:text-gray-400`
- Responsive: `md:grid-cols-2 lg:grid-cols-3`

### MDX Configuration

- Syntax highlighting: Shiki with `github-dark` theme
- Rehype plugins: `rehype-slug`, `rehype-autolink-headings` (wrap behavior), `rehype-pretty-code`
- Code blocks automatically get syntax highlighting - no special setup needed

## Commands & Workflows

### Development

```bash
npm run dev      # Starts dev server on localhost:3000
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint + Stylelint
npm run format   # Prettier with Astro/Tailwind plugins
npm run check    # Astro type checking
```

### ESLint Configuration

- Uses flat config (`eslint.config.js`) - not `.eslintrc`
- TypeScript files: Warns on unused vars (allow `_` prefix), warns on `any`
- Astro files: Uses `eslint-plugin-astro` recommended config

## Critical Conventions

1. **Content queries**: Always use `await getCollection('blog')` or `await getCollection('projects')` - never dynamic imports
2. **Sorting blog/projects**: Use `sortByDate()` helper from `@utils/helpers` OR manual `.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())`
3. **Reading time**: Calculate with `calculateReadingTime(entry.body)` from `@utils/helpers` (200 words/min)
4. **Date formatting**: Use `formatDate(date, locale)` helper for i18n-aware dates
5. **Locale handling**: Extract from URL with `getLangFromUrl(Astro.url)` in pages
6. **Image optimization**: Sharp is configured - use Astro's `<Image />` component for optimization
7. **View transitions**: Enabled globally via `<ViewTransitions />` in BaseLayout

## SEO & Performance

- **Sitemap**: Auto-generated with i18n support for all 10 locales
- **Robots.txt**: Allows all, points to sitemap-index.xml
- **Compression**: CSS/HTML/JS/SVG compressed via `astro-compress`
- **Prefetching**: Viewport strategy with `prefetchAll: true`
- **Hreflang**: All pages include hreflang links for all 10 locales + x-default

## Deployment

- **Target**: Cloudflare Pages (adapter configured in `astro.config.mjs`)
- **Build format**: Directory mode with auto inline stylesheets
- **SSR**: Not used - fully static site generation

## Common Gotchas

- When adding translations, update ALL 10 locale files to maintain parity across languages
- Content `lang` property must match one of the 10 configured locales
- Partytown is configured for analytics scripts - use for third-party tracking
