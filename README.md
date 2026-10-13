# Dhananjay Ahlawat — Portfolio

Personal portfolio website. Built with React + Vite, deployed on Vercel.

## Edit content

All text (name, summary, projects, experience, skills, links) lives in **`src/data.js`** — edit that one file, no component changes needed.

The page itself is a single component, `src/App.jsx`, with styles in `src/index.css`. Theme colours
are set from one accent hue (`HUE` at the top of `App.jsx`) and the dark/light toggle is remembered
per visitor.

Project screenshots live in `public/shots/` and are wired up per project via `shot` in `data.js`.
Set `shotPortrait: true` for phone captures — they get contained instead of cropped. Projects with a
`link` make their whole card clickable.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite — just click **Deploy**. No configuration needed.

Or with the CLI:

```bash
npm i -g vercel
vercel
```
# portfolio
