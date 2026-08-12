# Portfolio — Sona Dheep Raja Balaji

Plain HTML, CSS and JavaScript. No build step, no framework, no `npm install`.

```
index.html          the page structure
css/styles.css      all styling + design tokens
js/data.js          ← all your content lives here
js/main.js          behaviour (tabs, nav, reveals)
assets/             images
case-studies/       put your six PDFs here
```

---

## Run it in VS Code

1. Open the folder: **File → Open Folder** → choose this folder.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel.
3. Right-click `index.html` → **Open with Live Server**.

It opens at `http://127.0.0.1:5500` and reloads every time you save.

You can also just double-click `index.html` to open it in a browser — everything works
except that some browsers restrict local files, so Live Server is the smoother option.

---

## Change the content

Almost everything is in **`js/data.js`**. You don't need to touch HTML.

- **Add a project** — copy any block inside `PROJECTS` and edit it. It appears automatically.
- **Change a tab** — each project has a `tabs` array. Add, remove or rename freely.
- **Timeline, quotes, methods** — the three arrays at the top of the file.

Colours live at the top of **`css/styles.css`** under `:root`. Change one value there
and it updates everywhere.

---

## Before you publish — checklist

- [ ] **Replace the three placeholder quotes** in `js/data.js`. They're in brackets. Publishing with them still in place would be worse than having no quotes section.
- [ ] Add `resume.pdf` to the root folder (the CV button links to it).
- [ ] Add your six case-study PDFs to `case-studies/` and link them from the project tabs.
- [ ] Compress the PDFs first — the iOS portfolio is 52 MB, which is a slow download.
- [ ] Swap any screenshot in `assets/` you're not happy with. Filenames are referenced in `js/data.js`.
- [ ] Check it on your phone.

---

## Put it online

### GitHub Pages — free, and you already have an account

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: main branch, / (root) → Save**.
Live at `https://YOUR-USERNAME.github.io/portfolio/` in about a minute.

### Netlify — easiest

Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this folder onto the page.
That's the whole process. Connect a Git repo later if you want automatic deploys.

### Custom domain

Buy something like `sonadheep.com` (about $15/year from Namecheap, Porkbun or
Cloudflare). Both GitHub Pages and Netlify let you point it at your site from their
settings. A real domain on a CV reads differently from a `github.io` subdomain.

---

## If you want to add more animation later

The site currently uses CSS transitions plus one `IntersectionObserver` for
reveal-on-scroll. If you want more:

- **CSS scroll-driven animations** — `animation-timeline: view()`, no JavaScript at all.
  Supported in current Chrome, Edge, Firefox and Safari; wrap it in
  `@supports (animation-timeline: view())` so older browsers still get a working page.
- **GSAP** — free including all plugins since April 2025. `ScrollTrigger` is the one
  you'd want. Add via CDN, no build step required.

Keep every animation inside `@media (prefers-reduced-motion: no-preference)`.
There's already a reduced-motion block at the bottom of `styles.css`.
