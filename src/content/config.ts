import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
});

export const collections = {
    'ai-kurs': defineCollection({ type: 'content', schema: baseSchema }),
};
