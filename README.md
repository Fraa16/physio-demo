# MOTIO Health Lab

Multi-page marketing website for MOTIO Health Lab, a physiotherapy center in Munich. Built with Vite, React, TypeScript, Tailwind CSS, and React Router.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Pages

- `/` – Home (hero with motion-capture figure, statement, principles, categories, stats, process, testimonials)
- `/leistungen` – editorial index of all services, grouped by category
- `/leistungen/:categoryId` – detail page per category (`sport`, `praevention`, `technologie`)
- `/ueber-uns` – story, values, founders, location
- `/team` – team grid with recruiting slot
- `/kontakt` – contact form, info, map, FAQ
- `/impressum`, `/datenschutz` – legal pages; unknown routes get a designed 404

## Structure

- `src/data/services.ts` – single source of truth for services; drives the Leistungen pages, footer links, and the contact form dropdown.
- `src/data/team.ts` – team and founder data shared by `/team` and `/ueber-uns`.
- `src/components/layout/Layout.tsx` – shared chrome (header with progress bar and full-screen mobile menu, footer, scroll restoration, page transition).
- `src/components/art/` – hand-built SVG assets: motion-capture figure, corner marks, noise overlay.

The contact form is client-side only (no backend) and shows a success message on submit. The Google Maps embed requires outbound network access at runtime.
