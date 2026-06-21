# Mike Green — AI Portfolio

Personal AI project portfolio site for Mike Green, Auckland NZ.

**Live URL:** https://my-new-webapp-kappa.vercel.app/
**Vercel project:** `my-new-webapp` (org: `greenmich1-2666s-projects`)
**GitHub repo:** https://github.com/greenmich1/my-new-webapp

## Project structure

```
index.html          # Main page (all sections: hero, work, about, contact, modal)
styles.css          # All styles — single flat file, no build step
app.js              # All JS — IIFE, project data array, all interactions
tweaks-panel.jsx    # React tweaks panel (loaded via unpkg Babel, in-browser)
images/             # Project screenshot images (4 PNGs)
uploads/            # Gazette magazine covers (Gazette1–3.PNG)
vercel.json         # Vercel config
```

No build step. Static HTML/CSS/JS deployed directly to Vercel.

## Deploying

**Git push alone does NOT trigger a Vercel redeploy.** Always deploy explicitly:

```bash
# Production deploy
vercel --prod

# Preview deploy
vercel
```

The GitHub → Vercel auto-deploy integration is not active on this project.

## Design workflow

Designs live at claude.ai/design. Use the `DesignSync` MCP tool to import files:

- **Design project ID:** `85400588-5d8c-4b09-bac8-0ba03277498c`
- Import target file with `get_file`, then write changes locally, commit, and `vercel --prod`

### Image gotcha

Images fetched via `DesignSync get_file` come back as base64. Large images (>200KB) may be **truncated** in the tool result. If an image renders only partially on the live site, check the file size — if it's smaller than expected, source the original from `~/Downloads` or re-fetch via the design project.

## Key interactions (app.js)

- **PROJECTS array** — source of truth for all project data; order = display order
- `featured: true` on a project → renders a gazette strip below the title row
- `live: true` on a project → modal CTA links to `p.link` instead of showing Locked
- **Theme toggle** — SHIFT key or the nav button; persisted in `localStorage`
- **Hero canvas** — damped wave simulation, cursor-reactive

## Accent colours (tweaks panel)

Default: `#19E0B4`. Options in the panel: `#C6F833`, `#3B6BFF`, `#FF5A2C`, `#C08BFF`, `#19E0B4`.
