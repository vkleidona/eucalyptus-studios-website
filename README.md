# Eucalyptus Studios

Website for Eucalyptus Studios, a collection of studio apartments in Kalamata, Greece.

Built with React, Vite and Tailwind CSS. Deployed on Vercel: every push to `main` goes live, and other branches get a preview link.

## Running locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Where things live

- `src/siteConfig.js`: business details (form key, email, phone, address, map location, opening date). Empty fields are hidden on the site.
- `src/data/studios.jsx`: studio names, prices, descriptions and photos. Each studio gets its own page at `/studios/<id>`.
- `src/data/amenities.js`: amenities shown on the home page and every studio page.
- `src/index.css`: the colour palette (`@theme`). Change a colour there and it updates everywhere.
- `src/pages/`: Home, StudioPage, Privacy and NotFound.
- `src/components/`: page sections and shared pieces (EnquiryForm, NotifySignup, ...).

## Icons

Icons come from [Tabler](https://tabler.io/icons). Only the ones listed in `src/components/Icon.jsx` are included; add a new icon there before using it.

## Forms

Enquiries and "notify me" sign-ups are sent through [Web3Forms](https://web3forms.com) to the email linked to `web3formsKey`.

## Adding studio photos

Put the images in `public/photos/` and add a `photos` list to the studio in `src/data/studios.jsx`:

```js
photos: [
  { src: '/photos/elia-1.jpg', alt: 'Elia living area with balcony' },
  { src: '/photos/elia-2.jpg', alt: 'Balcony view over the olive groves' },
],
```

## Search engines and link previews

- `public/og-image.png`: picture shown when the site is shared (source: `scripts/og-image.html`).
- `public/sitemap.xml` and `public/robots.txt`: help Google find every page. Add new pages to the sitemap.
- `index.html`: page description and hotel details for Google (the `ld+json` block).

**Moving to your own domain:** update `VITE_SITE_URL` in `.env`, and the addresses in `public/robots.txt` and `public/sitemap.xml`.
