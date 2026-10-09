# Yousaf’s Creative Studio

An editorial portfolio site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Before launch

- Replace the sample projects, descriptions, and Unsplash photography in `lib/projects.ts` with approved work and owned or licensed assets.
- Replace the studio bio, email, location, and social links in `app/about/page.tsx`, `app/contact/page.tsx`, and `components/site-shell.tsx`.
- Replace the `.example` site URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with the final domain.
- Review and replace the clearly marked draft legal pages in `app/privacy/page.tsx` and `app/terms/page.tsx`.
- Connect the contact form in `components/contact-form.tsx` to an email provider or backend before expecting enquiries to be delivered. It currently validates in the browser and does not transmit or store submissions.
- Add approved, muted studio footage under `public/videos/` and set a project's `previewVideo` paths in `lib/projects.ts` to enable hover previews. The hero media component also accepts local WebM and MP4 sources; it keeps its poster visible and pauses when out of view.

Some sample project imagery still uses remote Unsplash URLs for layout previews. The configured Next.js image host can be removed when all project assets are local.
