# McDonald Sebastine — Portfolio

A production-ready personal portfolio built with Next.js App Router, TypeScript,
Tailwind CSS, shadcn/ui-style components, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with CSS variable–based design tokens (light/dark)
- **UI primitives:** Hand-rolled shadcn/ui-style components (Button, Card, Badge,
  Input, Textarea, Label, Separator, Tabs) built on Radix primitives + CVA
- **Animation:** Framer Motion, driven by a single shared token file
  (`lib/motion.ts`) so every transition on the site moves with the same
  easing and rhythm. Respects `prefers-reduced-motion` throughout.
- **Content:** Markdown blog via `gray-matter` + `remark`
- **Icons:** lucide-react

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build       # production build
npm run start        # run the production build locally
npm run lint          # ESLint
npm run typecheck      # tsc --noEmit
```

Node.js 18.17+ is required (matches Next.js 14's minimum).

## Project structure

```
app/
  layout.tsx                Root layout: fonts, metadata, theme provider, Person JSON-LD
  template.tsx               Route transition wrapper (fade/rise between page navigations)
  page.tsx                   Home
  about/page.tsx
  experience/page.tsx        Professional experience + leadership/volunteer section
  projects/page.tsx          Client-side category filtering
  skills/page.tsx
  certifications/page.tsx
  resume/page.tsx             Download + inline resume view
  contact/page.tsx
  blog/page.tsx               Post list (reads content/blog/*.md)
  blog/[slug]/page.tsx         Post detail (SSG) with BlogPosting JSON-LD
  api/contact/route.ts         Contact form submission handler
  sitemap.ts / robots.ts       SEO
  icon.tsx / opengraph-image.tsx   Generated favicon + social share image (next/og)

components/
  ui/                        Reusable primitives (button, card, badge, tabs, etc.)
  navbar.tsx, footer.tsx, hero.tsx, ...   Page-level building blocks
  magnetic.tsx               Cursor-follow hover wrapper for premium CTAs
  animated-heading.tsx        Word-by-word hero headline reveal
  marquee.tsx                 CSS-driven infinite ticker (tools/skills)
  scroll-progress.tsx         Top-of-viewport scroll progress bar
  noise-overlay.tsx            Subtle film-grain texture (decorative, pointer-events-none)
  back-to-top.tsx              Floating scroll-to-top button
  json-ld.tsx                  Generic JSON-LD <script> injector

data/
  experience.ts   Paid roles (`experience`) + volunteer/leadership roles (`leadership`)
  skills.ts, credentials.ts, projects.ts
  Single source of truth for all resume content — edit these files to
  update copy across the entire site without touching JSX.

lib/
  site.ts          Site-wide config (name, contact info, SEO defaults)
  motion.ts         Shared Framer Motion variants/easing — the whole site's animation vocabulary
  seo.ts            `pageMetadata()` + `breadcrumbJsonLd()` helpers, used by every inner page
  validation.ts      Shared contact-form validation, used by both the client form and API route
  utils.ts           cn() class merge helper, date formatting
  blog.ts            Markdown parsing utilities

content/blog/    Markdown blog posts (frontmatter: title, date, excerpt, tags)
```

## Editing content

Almost everything on the site is data-driven, so most updates don't require
touching JSX:

- **Experience:** `data/experience.ts` — `experience` (paid roles) and
  `leadership` (volunteer/leadership roles) are separate arrays rendered by
  the same `<ExperienceTimeline />` component on both `/experience` and
  `/resume`.
- **Skills:** `data/skills.ts`
- **Certifications & education:** `data/credentials.ts`
- **Projects:** `data/projects.ts` (add a `category` from the existing list, or
  add a new category to `projectCategories` to get a new filter tab automatically)
- **Site name, contact info, social links, SEO copy:** `lib/site.ts`
- **Blog posts:** add a new `.md` file to `content/blog/` with frontmatter:

  ```md
  ---
  title: "Post title"
  date: "2026-01-01"
  excerpt: "One-sentence summary shown on the blog list."
  tags: ["Tag One", "Tag Two"]
  ---

  Post content in Markdown.
  ```

## Adding a new page

Every inner page follows the same pattern — copy it when adding a new route:

```tsx
export const metadata: Metadata = pageMetadata({
  title: "Page Title",
  description: "One or two sentences for search results and social previews.",
  path: "/page-path",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Page Title", path: "/page-path" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader eyebrow="..." title="..." description="..." />
      {/* page content */}
    </>
  );
}
```

`pageMetadata()` (in `lib/seo.ts`) sets the canonical URL and Open Graph/Twitter
tags consistently; `breadcrumbJsonLd()` builds the structured-data breadcrumb
trail Google uses in search results.

## Photos

- **Hero portrait:** `public/images/mcdonald-portrait.jpg`, rendered by
  `components/hero.tsx` via `next/image` with a subtle floating animation.
  Replace this file (same name) to swap the photo — Next.js will regenerate
  optimized sizes automatically.
- **Homepage slider:** `public/images/slider/slide-1.jpg` through `slide-4.jpg`,
  rendered by `components/image-slider.tsx` and configured in the
  `sliderImages` array in `app/page.tsx` (each entry has a `src` and
  descriptive `alt` text). Add, remove, or reorder entries in that array to
  change the slideshow — the component adapts automatically. The slider
  auto-advances every 4.5s, pauses on hover/focus, and skips autoplay
  entirely for users with `prefers-reduced-motion` enabled.

## Resume PDF

`public/resume/mcdonald-sebastine-resume.pdf` is the file served by the
"Download PDF" button on `/resume`. Replace it with an updated export
whenever the resume changes — the filename should stay the same, or you
should update the `href` in `app/resume/page.tsx`.

## Contact form

`components/contact-form.tsx` posts to `app/api/contact/route.ts`. Both share
the same validation rules from `lib/validation.ts`, so client and server can
never drift out of sync. The form shows inline, field-level errors with
proper `aria-invalid`/`aria-describedby` wiring. By default the API route
only logs the submission — wire it up to a real email provider (Resend,
SendGrid, Postmark) or a CRM/webhook by filling in the commented-out section
in that file and adding the relevant API key to `.env.local` (see
`.env.example`).

## Motion system

All animation timing lives in `lib/motion.ts`: a shared easing curve, spring
presets, and reusable Framer Motion variants (`fadeUp`, `fadeIn`,
`staggerContainer`, `wordReveal`). Components import from here rather than
hand-rolling their own transitions, so the whole site moves with one
consistent, restrained rhythm. Signature moments — the hero's word-by-word
headline reveal, magnetic CTA buttons, the scroll progress bar — are kept
deliberately rare so they read as intentional rather than decorative noise.

## Design tokens

Colors are defined as HSL CSS variables in `app/globals.css` for both light
and dark themes, then mapped to Tailwind's color scale in
`tailwind.config.ts`. The primary accent is `#DC2626` (red-600) with a
zinc-950 dark background, per the brand brief. Update the `:root` and `.dark`
blocks in `globals.css` to retheme the whole site from one place.

Fonts: **Inter** (body) and **Space Grotesk** (display/headings), loaded via
`next/font/google` in `app/layout.tsx`.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `nav`, `footer`), skip-to-content link
- Visible focus rings on all interactive elements; contact form has proper
  `aria-invalid`/`aria-describedby` error associations
- Mobile nav locks body scroll, closes on Escape, and moves focus to the
  first link when opened
- Color contrast checked against WCAG AA for both themes
- `prefers-reduced-motion` respected throughout (Framer Motion `useReducedMotion`
  plus Tailwind's `motion-safe:`/`motion-reduce:` variants for CSS animation)
- Images use `next/image`-ready patterns; icon/OG images generated at build
  time via `next/og` (no external asset dependency)
- JSON-LD structured data: `Person` (site-wide), `BreadcrumbList` (every inner
  page), `BlogPosting` (every post) — for richer search results
- Static generation (SSG) for every page except the contact API route

## Deployment

See `DEPLOYMENT.md` for step-by-step Vercel and self-hosted deployment
instructions.
