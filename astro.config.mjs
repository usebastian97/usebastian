// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.usebastian.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['astro-icon'],
    },
  },
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [
    sitemap(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
      },
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: {
              className: ['heading-link'],
            },
          },
        ],
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: false,
          },
        ],
      ],
      components: {
        // Callouts & Admonitions
        Callout: './src/components/mdx/Callout.astro',
        Admonition: './src/components/mdx/Admonition.astro',
        
        // Code
        CodeBlock: './src/components/mdx/CodeBlock.astro',
        CodeGroup: './src/components/mdx/CodeGroup.astro',
        
        // Cards & Layout
        Card: './src/components/mdx/Card.astro',
        Cards: './src/components/mdx/Cards.astro',
        LinkCard: './src/components/mdx/LinkCard.astro',
        
        // Interactive
        Accordion: './src/components/mdx/Accordion.astro',
        Details: './src/components/mdx/Details.astro',
        Tabs: './src/components/mdx/Tabs.astro',
        TabPanel: './src/components/mdx/TabPanel.astro',
        
        // Steps & Timeline
        Steps: './src/components/mdx/Steps.astro',
        Step: './src/components/mdx/Step.astro',
        Timeline: './src/components/mdx/Timeline.astro',
        TimelineItem: './src/components/mdx/TimelineItem.astro',
        
        // Media
        ImageZoom: './src/components/mdx/ImageZoom.astro',
        YouTube: './src/components/mdx/YouTube.astro',
        VideoEmbed: './src/components/mdx/VideoEmbed.astro',
        Diagram: './src/components/mdx/Diagram.astro',
        
        // Content
        Quote: './src/components/mdx/Quote.astro',
        TOC: './src/components/mdx/TOC.astro',
        TableOfContents: './src/components/mdx/TableOfContents.astro',
        Checklist: './src/components/mdx/Checklist.astro',
        Badge: './src/components/mdx/Badge.astro',
        Stats: './src/components/mdx/Stats.astro',
      },
    }),
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['*'],
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
