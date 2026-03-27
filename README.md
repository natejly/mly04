# Melana Ly Portfolio Clone

This is a React + Vite rebuild of the original Wix portfolio, structured as a single-page app with client-side routing.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel deployment

This repo is configured for Vercel as a Vite SPA:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Client-side routes such as `/engineering-projects` and `/photography` are handled by [vercel.json](/Users/natejly/Documents/GitHub/mly04/vercel.json), which rewrites non-asset requests to the app entry point.

## Notes

- The site currently uses the original Wix-hosted media and PDF URLs.
- `npm run lint` and `npm run build` should both pass before deployment.
