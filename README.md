# Olea Living

Website for Olea Living, a collection of studio apartments in Kalamata, Greece.

Built with React, Vite and Tailwind CSS. Deployed on Vercel: every push to `main` goes live, and other branches get a preview link.

## Running locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Where things live

- `src/siteConfig.js`: business details (email, phone, address, map location). Empty fields are hidden on the site.
- `src/index.css`: the colour palette (`@theme`). Change a colour there and it updates everywhere.
- `src/components/`: one file per page section (Navbar, Hero, Rooms, Amenities, Location, Contact, Footer).
