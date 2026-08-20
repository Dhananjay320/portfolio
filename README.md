# Dhananjay Ahlawat — Portfolio

Personal portfolio website. Built with React + Vite, deployed on Vercel.

## Edit content

All text (name, summary, projects, experience, skills, links) lives in **`src/data.js`** — edit that one file, no component changes needed.

Each project needs a unique `key` — that's what the case-study pages route on. Projects with
`featured: true` appear under **Featured work** (Niyoq is pulled out as the flagship block); the
rest fall into the **All work** grid.

Project screenshots live in `public/shots/` and are wired up per project via `shot` in `data.js`.
Set `shotPortrait: true` for phone captures — they get contained in a taller frame instead of
cropped. A project with no `shot` falls back to a generated monogram cover
(`src/components/ProjectVisual.jsx`).

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
