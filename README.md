# Sebastian Georgian Utoiu

> Cloud Solutions Architect | Azure & Multi-Cloud Expert | Security & Performance Advocate

[![Live Site](https://img.shields.io/badge/Live-usebastian.com-blue?style=for-the-badge)](https://www.usebastian.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/sebastian-utoiu)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/usebastian97)

## 👋 About This Portfolio

Production-ready multilingual portfolio showcasing cloud architecture expertise, technical writing, and real-world Azure implementations. Built with modern web technologies and deployed globally on Cloudflare's edge network.

**🌍 Available in 10 Languages**: English, Deutsch, Français, Italiano, Nederlands, 简体中文, 日本語, Español, Português, Português BR

## 🎯 What You'll Find

### 📚 Technical Blog

Deep dives into cloud architecture, security patterns, and Azure best practices. All posts written in MDX with interactive code examples and architectural diagrams.

### 🛠️ Case Studies & Projects

Real-world implementations including:

- **Azure Storage Security**: Zero Trust architecture with private endpoints, Azure AD auth, and comprehensive monitoring
- **Multi-cloud Solutions**: Hybrid deployments across Azure, AWS, and GCP
- **Performance Optimization**: Cost reduction and scalability improvements
- **AI/ML Integrations**: Azure OpenAI, Cognitive Services, and custom solutions

### 🎓 Certifications & Expertise

Complete certification portfolio across:

- Microsoft Azure (Solutions Architect Expert, Security Engineer, Developer)
- AWS & Google Cloud
- Security & Compliance frameworks

## 🚀 Tech Stack

### Core Framework

- **Astro 5.x** - Static site generation with islands architecture
- **TypeScript** - Strictest mode for type safety
- **Tailwind CSS 4** - Utility-first styling with dark mode

### Content & Features

- **MDX** - Rich content with interactive components
- **Shiki** - Syntax highlighting with GitHub Dark theme
- **Mermaid** - Architecture diagrams and flowcharts
- **i18n** - Full internationalization with 10 locales

### Performance & SEO

- **Sharp** - Optimized image processing
- **Astro Compress** - CSS/HTML/JS/SVG compression
- **Sitemap** - Auto-generated with hreflang support
- **JSON-LD** - Structured data for search engines
- **View Transitions** - Smooth page navigation

### Deployment

- **Cloudflare Pages** - Global edge deployment
- **Automatic Deployments** - CI/CD via GitHub integration
- **Edge Optimization** - Worldwide low-latency delivery

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Quick Start

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Commands

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server with hot reload    |
| `npm run build`   | Production build with optimizations |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint + Stylelint checks       |
| `npm run format`  | Format code with Prettier           |
| `npm run check`   | Type-check Astro components         |

## 📝 Content Management

### Adding Blog Posts

Create `.mdx` files in `src/content/blog/` with frontmatter:

```mdx
---
title: 'Your Post Title'
description: 'Brief description for SEO'
publishDate: 2024-01-01
tags: ['Azure', 'Security', 'Architecture']
image: '/images/blog/your-image.jpg'
draft: false
lang: 'en'
---

Your content here...
```

### Adding Projects

Create `.mdx` files in `src/content/projects/` with frontmatter:

```mdx
---
title: 'Project Name'
description: 'Project description'
category: 'cloud' # cloud | ai | fullstack | tools
tags: ['Azure', 'TypeScript']
projectUrl: 'https://example.com'
githubUrl: 'https://github.com/user/repo'
featured: true
order: 1
lang: 'en'
---

Project details...
```

### Adding Use Cases

Create `.mdx` files in `src/content/use-cases/` with frontmatter:

```mdx
---
title: 'Use Case Title'
description: 'Implementation description'
category: 'security' # security | performance | integration
problem: 'The challenge you faced'
solution: 'How you solved it'
result: 'The outcome'
technologies: ['Azure Storage', 'Private Endpoints', 'Azure AD']
order: 1
lang: 'en'
---

Detailed implementation...
```

## 🏗️ Project Structure

```
/
├── public/              # Static assets
│   ├── fonts/          # Custom web fonts
│   ├── images/         # Optimized images
│   └── robots.txt      # SEO crawler rules
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── cards/      # Card components
│   │   ├── mdx/        # MDX custom components
│   │   ├── navigation/ # Header, Footer
│   │   └── ui/         # UI primitives
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts (MDX)
│   │   ├── projects/   # Project showcases (MDX)
│   │   └── use-cases/  # Implementation case studies (MDX)
│   ├── i18n/           # Internationalization
│   │   ├── locales/    # Translation JSON files
│   │   └── utils.ts    # i18n helpers
│   ├── layouts/        # Page layouts
│   │   ├── BaseLayout.astro    # HTML shell + SEO
│   │   ├── MainLayout.astro    # Header + Footer
│   │   ├── BlogLayout.astro    # Blog post layout
│   │   └── DocLayout.astro     # Documentation layout
│   ├── pages/          # File-based routing
│   ├── styles/         # Global CSS
│   └── utils/          # Helper functions
├── astro.config.mjs    # Astro configuration
├── tsconfig.json       # TypeScript config (strictest)
└── tailwind.config.js  # Tailwind CSS config
```

## 🌐 Internationalization

The site supports 10 languages with automatic locale detection and hreflang links:

- 🇬🇧 English (`en`) - Default
- 🇩🇪 Deutsch (`de`)
- 🇫🇷 Français (`fr`)
- 🇮🇹 Italiano (`it`)
- 🇳🇱 Nederlands (`nl`)
- 🇨🇳 简体中文 (`ch`)
- 🇯🇵 日本語 (`jp`)
- 🇪🇸 Español (`es`)
- 🇵🇹 Português (`pt`)
- 🇧🇷 Português BR (`pt-br`)

Translations are managed in `src/i18n/locales/*.json` using dot notation keys.

## 📊 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **First Contentful Paint**: < 0.5s
- **Time to Interactive**: < 1.5s
- **SEO Score**: 100/100
- **Accessibility**: WCAG 2.1 AA compliant

## 🔒 Security

- **CSP Headers**: Content Security Policy via Cloudflare
- **HTTPS Only**: TLS 1.3 encryption
- **Secure Headers**: X-Frame-Options, X-Content-Type-Options
- **No Client Secrets**: All sensitive data in environment variables

## 📄 License

All content © 2024 Sebastian Georgian Utoiu. Code is available for reference only.

## 💬 Get in Touch

- 🌐 **Website**: [usebastian.com](https://www.usebastian.com)
- 📧 **Email**: [contact@usebastian.com](mailto:contact@usebastian.com)
- 💼 **LinkedIn**: [sebastian-utoiu](https://linkedin.com/in/sebastian-utoiu)
- 🐙 **GitHub**: [@usebastian97](https://github.com/usebastian97)

---

**Built with ❤️ using Astro, TypeScript, and Tailwind CSS**
