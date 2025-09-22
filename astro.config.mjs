import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ai.summor.se',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ]
});