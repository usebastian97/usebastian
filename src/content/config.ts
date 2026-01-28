import { defineCollection, z } from 'astro:content';

const faqSchema = z
  .array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  )
  .optional();

const howToSchema = z
  .object({
    name: z.string(),
    steps: z.array(
      z.object({
        name: z.string().optional(),
        text: z.string(),
      })
    ),
  })
  .optional();

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
    faq: faqSchema,
    howTo: howToSchema,
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['m365', 'power-platform', 'security-compliance', 'copilot-governance']),
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
    category: z.enum(['m365', 'power-platform', 'security-compliance', 'copilot-governance']),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    technologies: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
    lang: z.string().default('en'),
    faq: faqSchema,
    howTo: howToSchema,
  }),
});

export const collections = {
  blog,
  projects,
  'use-cases': useCases,
};
