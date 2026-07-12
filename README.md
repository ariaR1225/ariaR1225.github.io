# ariaR1225.github.io

Personal portfolio of Zhian (Aria) Ruan — a hand-rolled static site (no framework, no build step).

## Structure

- `index.html` — single-page portfolio: intro, research, news, experience, skills, and filterable projects
- `styles.css` — all styling (CSS variables at the top control the palette)
- `script.js` — project category filtering
- `projects/*.html` — one detail page per project
- `assets/proj_img/` — project media and logos
- `images/` — headshot and favicons

## Local preview

```sh
./run_server.sh
```

then open http://localhost:4173. Any static file server works — there is no build step.

## Deploy

Served by GitHub Pages from the repository root. `.nojekyll` disables Jekyll processing.
