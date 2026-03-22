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

export const collections = { posts, projects };
