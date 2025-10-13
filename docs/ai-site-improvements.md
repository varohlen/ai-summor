# AI Site Improvements (ai.summor.se)

**Last updated**: 2025-10-12  
**Status**: In progress

This document collects functional and UI recommendations for the AI site. It references specific files and components in the repository to make implementation straightforward.

## Functional Improvements

- **✅ [Remove or implement missing blog collection]** - COMPLETED 2025-10-12
  - Removed `src/pages/blogg/*` routes
  - Removed `blog` collection from `src/content/config.ts`
  - Build now runs clean without warnings

- **✅ [Responsive image sizing]** - COMPLETED 2025-10-12
  - File: `src/styles/images.css`
  - Implemented responsive breakpoints:
    - Mobile (default): `max-width: 300px; max-height: 400px` (phone-friendly)
    - Small tablet (`@media (min-width: 640px)`): `max-width: 500px; max-height: 550px`
    - Tablet (`@media (min-width: 768px)`): `max-width: 640px; max-height: 600px`
    - Desktop (`@media (min-width: 1024px)`): `max-width: 768px; max-height: 700px`
  - Maintains `width: auto; height: auto; object-fit: contain;` for aspect ratio

- **[Lightbox enhancements]**
  - File: `src/scripts/lightbox.js`
  - Add:
    - Caption from image `alt` text
    - ArrowLeft/ArrowRight to cycle images on page
    - Focus trap and `role="dialog" aria-modal="true"` for accessibility
    - Lazy init only if `.prose img` exists

- **[Progress sync (optional)]**
  - Component: `src/components/LessonProgress.astro`
  - Today: likely localStorage-only.
  - Option: Offer opt-in sync via Cloudflare Pages Functions or Supabase. Keep localStorage as default.

- **[Search across lessons]**
  - Add a lightweight client search (e.g., Fuse.js) over a prebuilt JSON index of `ai-kurs` titles/descriptions/frontmatter.

- **[Folder-level draft]**
  - Utility: `src/utils/OrganizeContent.ts`
  - Port the folder-level draft behavior (toggle `draft: true` on `index.md` hides entire folder) used in the main project.

- **[Accessibility pass]**
  - Ensure visible focus states for links/buttons
  - Sufficient contrast in dark mode
  - Lightbox: focus trap, Esc to close (present), ARIA roles

- **[SEO & meta]**
  - File: `src/layouts/BaseLayout.astro`
  - Add OG/Twitter tags, canonical URL, and (optional) Breadcrumb JSON-LD based on `Breadcrumbs.astro`.

- **[Analytics (privacy-friendly)]**
  - Optional: Plausible or Umami; keep student privacy in mind. Make it easy to disable in dev.

- **[Error pages]**
  - Add custom `src/pages/404.astro` for consistent UX.

## UI / Design Improvements

- **[Box layout polish]**
  - File: `src/layouts/BaseLayout.astro`
  - Consider slightly rounded header corners inside the main content box and verify spacing consistency.
  - Optionally expand reading width on large screens (e.g., `max-w-3.5xl`) for long-form lessons.

- **[Color tokens unification]**
  - Maintain a consistent HSL token set and (if moving to a monorepo) extract to shared tokens to keep brand alignment across subdomains.

- **[Hamburger menu (currently hidden)]**
  - File: `src/layouts/CourseLayout.astro` and `src/components/HamburgerMenu.astro`
  - When re-enabling, consider placing the trigger in the top header for consistent alignment and ensure it uses `text-foreground` and box styling tokens.

- **[SidePanel as TOC]**
  - File: `src/components/SidePanel.astro`
  - Extend to optionally render an auto-generated Table of Contents for long pages, with existing Begrepp/Frågor sections.

- **[Callouts styling]**
  - File: `src/styles/callouts.css`
  - Keep the project’s callout syntax (`>[!TYPE] Title`) and tune INFO/WARNING colors to an AI theme while maintaining accessibility.

- **[Icons]**
  - File: `src/layouts/BaseLayout.astro` (Font Awesome import)
  - Prefer inline SVGs or a small tree-shakable icon set to reduce payload; you’re already inlining several SVGs in navigation.

- **[Typography]**
  - File: `tailwind.config.mjs` (typography plugin overrides)
  - Slightly increase line-height in `.prose` and size up `h2/h3` for better scanning.

## Code-Specific Notes

- **`src/layouts/BaseLayout.astro`**
  - Add OG/Twitter meta and canonical; respect `prefers-reduced-motion` for subtle hover animations.

- **`src/styles/images.css`**
  - Keep `.logo-image` exclusions (logo should not get white background/padding)
  - Keep `.webp` selectors due to Astro’s image optimization
  - Make image bounds responsive (see above)

- **`src/scripts/lightbox.js`**
  - Add captions, keyboard navigation, and focus management. Initialize only when needed.

- **`src/utils/OrganizeContent.ts`**
  - Implement folder-level draft and ensure sorting by `order` in frontmatter for consistent nav.

- **`src/pages/blogg/*`**
  - Remove if unused or implement the collection to silence build warnings.

## Quick Wins

- ✅ ~~Remove/implement blog collection~~ - DONE
- ✅ ~~Responsive image sizing per breakpoint~~ - DONE
- Add `src/pages/404.astro`
- Add OG/Twitter meta in `BaseLayout.astro`
- Lightbox captions + a11y improvements
- Optional TOC in `SidePanel.astro`

## Notes on Project Conventions

- Callouts: use `>[!TYPE] Title` with content lines prefixed by `>`
- MDX Mermaid: use the custom `<Mermaid />` component rather than raw markdown fences
- Draft workflow: prefer folder-level draft toggles on `index.md` when ported

---

If you want, we can turn any section above into tasks and implement them incrementally.
