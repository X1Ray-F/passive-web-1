# passive-web-1

Goal: programmatic content site (affiliere/Ads + produse digitale simple) cu plăți PayPal.

Stack: static site (Markdown → HTML), build simplu (Node), hosting Netlify/Vercel/GitHub Pages.

PayPal quick links: paypal.me/FlaviusEduard98

## Structură
- content/ → articole Markdown (front‑matter)
- templates/ → layout HTML și partials
- public/ → output generat
- scripts/ → agenți utilitare
- netlify.toml / vercel.json → deploy

## Comenzi
- npm install
- npm run build  → generează public/
- npm run dev    → build + watch

## Deploy (Netlify)
- Site settings → Build command: `npm run build`
- Publish directory: `public`

## Deploy (Vercel)
- Project → Framework preset: "Other"
- Build command: `npm run build`
- Output dir: `public`

## Plăți PayPal
- Link butoane: `https://paypal.me/FlaviusEduard98?locale.x=en_US&country.x=GB` (parametrizat în templates/partials)

## Următorii pași
- Umplem content/ cu 10 pagini pilot (keyword-miner + content-writer)
- Adăugăm sitemap + interlinking
- Conectăm Netlify și domain (opțional)
