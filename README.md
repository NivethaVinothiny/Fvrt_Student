# Favourite Student List

React + React Router + useContext demo.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
1. Push to the `main` branch.
2. In the repo go to **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

## Why the deployed site used to show a blank page
- Vite defaults to absolute asset paths (`/assets/...`), which 404 when the site lives at `user.github.io/repo-name/`. Fixed with `base: "./"` in `vite.config.js`.
- `BrowserRouter` needs the server to answer every route; GitHub Pages doesn't. Fixed by using `HashRouter` (URLs look like `/#/favourites`).
