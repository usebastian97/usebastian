// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sgu.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
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
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
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
            behavior: 'wrap',
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
    robotsTxt({
      sitemap: ['https://www.sgu.com/sitemap-index.xml'],
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
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