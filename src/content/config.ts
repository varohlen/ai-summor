import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
});

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
});

export const collections = {
    'ai-kurs': defineCollection({ type: 'content', schema: baseSchema }),
    'blog': defineCollection({ type: 'content', schema: blogSchema }),
};
