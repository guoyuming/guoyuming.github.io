import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.date().optional(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: z.string().optional(),
    url: z.string().optional(),
    urlLabel: z.string().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.string(),
    stage: z.string(),
    url: z.string(),
    logo: z.string(),
    screenshots: z.array(z.string()),
    color: z.string(),
    order: z.number(),
    verdicts: z.array(z.object({
      quote: z.string(),
      source: z.string(),
    })),
  }),
});

export const collections = { posts, projects, tools };
