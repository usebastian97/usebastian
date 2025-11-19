import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['en', 'de', 'fr', 'ro', 'it']).default('en'),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['cloud', 'ai', 'fullstack', 'tools']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    projectUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    lang: z.enum(['en', 'de', 'fr', 'ro', 'it']).default('en'),
  }),
});

export const collections = {
  blog,
  projects,
};
