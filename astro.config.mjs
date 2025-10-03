import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// @ts-ignore
import remarkCallout from 'remark-callout';

export default defineConfig({
  site: 'https://ai.summor.se',
  integrations: [
    tailwind(),
    mdx({
      remarkPlugins: [
        remarkMath,
        [remarkCallout, {
          titleTagName: "p",
          removeTitleQuotes: true,
          classPrefix: "callout",
          classNames: {
            callout: "callout",
            title: "callout-title",
            content: "callout-content"
          }
        }]
      ],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap()
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      [remarkCallout, {
        titleTagName: "p",
        removeTitleQuotes: true,
        classPrefix: "callout",
        classNames: {
          callout: "callout",
          title: "callout-title",
          content: "callout-content"
        }
      }]
    ],
    rehypePlugins: [rehypeKatex],
  }
});