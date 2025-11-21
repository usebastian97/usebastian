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
  }),
});

const useCases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['enterprise', 'ai-ops', 'cloud-native', 'security', 'automation']),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    technologies: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  projects,
  'use-cases': useCases,
};
