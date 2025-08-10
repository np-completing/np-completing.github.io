# NP-Completing (Astro + React + Tailwind)

A fast, content-first personal site that deploys to **GitHub Pages** via **GitHub Actions**.

## Quick start
1. Create repo named `your-username.github.io` (public).
2. Clone it locally and copy this template in.
3. `npm install`
4. `npm run dev` (local preview at http://localhost:4321)
5. Commit & push to `main`.
6. Repo → **Settings → Pages** → **Build and deployment**: Source = **GitHub Actions**.
7. Wait for the Action to finish. Your site appears at `https://your-username.github.io`.

### Customize
- Update `astro.config.mjs` `site` URL if you add a custom domain later.
- Edit navigation in `src/layouts/Base.astro`.
- Add posts under `src/content/blog/`.
- Add publications in `src/data/pubs.ts`.

### Notes
- Use **Actions** (recommended). If you must use "Deploy from a branch", add a `.nojekyll` file to the repo root to avoid Jekyll parsing Astro files.
