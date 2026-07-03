# MOTIO Health Lab

One-page marketing website for MOTIO Health Lab, a physiotherapy center in Munich. Built with Vite, React, TypeScript, Tailwind CSS, and React Router.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Structure

- `src/data/services.ts` – single source of truth for the services list, used both by the "Leistungen im Detail" section and the contact form's service dropdown.
- `src/components/sections/` – one component per page section (Hero, USP tiles, Leistungen, About, Team, Contact, ...).
- `src/pages/` – route-level pages: `Home`, `Impressum`, `Datenschutz`.

The contact form is client-side only (no backend) and shows a success message on submit.
