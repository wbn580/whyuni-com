import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    description: z.string(),
    title: z.string(),
    readingTime: z.number().optional(),
    ogImage: z.string().optional(),
    category: z.string(),
    modDatetime: z.string(),
    tags: z.array(z.string()).default([]),
    pubDatetime: z.string(),
    publishDate: z.string(),

  },
});

export const collections = { articles };
