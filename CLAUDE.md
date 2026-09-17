# Mike Green — AI Portfolio

Personal AI project portfolio site for Mike Green, Auckland NZ.

**Live URL:** https://my-new-webapp-kappa.vercel.app/
**Vercel project:** `my-ai-projects` (org: `greenmich1-2666s-projects`)
**Project ID:** `prj_e6RjKbjoHn8Hbqb2nRbIYMhuTr6C` — the local `.vercel/project.json` still caches the old name `my-new-webapp`; the project was renamed on Vercel. Match on project ID, not name.
**GitHub repo:** https://github.com/greenmich1/my-new-webapp — **PUBLIC.**

> **This repository is public and deploys on push.** Never commit a key, a token
> or a `.env` value. Keys live in `~/.claude/keys.md`, outside every repo.

## Project structure

```
index.html          # The whole page: hero, work index, about, contact, #deck container
styles.css          # All styles — single flat file, no build step
app.js              # All JS — one IIFE: PROJECTS data, the deck, loader, cursor, hero canvas
images/             # 11 files — project banners + loader-bot.png sprite sheet
uploads/            # 7 Gazette magazine covers (fallback only; the live list is fetched)
vercel.json         # cleanUrls: true, trailingSlash: false
```

No build step, no dependencies, no bundler. Static HTML/CSS/JS.

## Deploying

**`git push origin master` deploys to production on its own.** The GitHub →
Vercel integration is active; a push is live in roughly 20–30 seconds.

An earlier version of this file said the opposite — "git push alone does NOT
trigger a Vercel redeploy, always run `vercel --prod`". That is wrong. Seven
consecutive deploys on 17 Sep 2026 each came from a plain push with
`vercel --prod` never invoked. Check with `npx vercel ls` rather than
re-asserting it.

## The deck — how project detail works

There is **no modal.** It was removed on 17 Sep: it covered the page, had no
URL, no focus handling, and no way to reach the next project without closing
the current one.

Clicking a row in the work index opens **the deck**: seven full-viewport
sections built into `#deck`, moved through with `↓ ↑ PageUp PageDown`, the NEXT
control, or the trackpad. `Esc` returns to the index.

- Closed, `#deck` is `hidden` — so the screens are not scroll-snap targets and
  their banner images are never fetched. `images/` is several MB; this matters.
- `scroll-snap-type: y **proximity**`, deliberately not `mandatory` — mandatory
  strands the overflow of the taller newsroom screen and fights trackpads.
- **Position is state (`atIndex`), not derived from scroll.** It used to be read
  from scroll position, which meant pressing ↓ twice quickly measured a scroll
  that had not finished and asked for the same screen twice. Scrolling reports
  *into* the state; the keys stay ahead of the animation.
- Screens fit `100svh` except the newsroom, which is `.tall` on purpose — its
  subject is a cover grid that grows.

## PROJECTS array (app.js) — source of truth, order = display order

| field | what it does |
|---|---|
| `blurb` | one sentence on the index row **and** the screen. Replaced three tags. |
| `tags` | small mono meta on the screen only |
| `why` | 2–3 short lines, the `→` list on the screen |
| `facts` | the Role / Year / Stack / Status meta row |
| `series` | `{ badge, kids }`, or `{ dynamic: "editions" }` to count from the live API |
| `screenTitle` / `screenSub` | when the screen's title differs from the index row (project 01) |
| `live: true` **and** `link` | both required, or the screen shows `Not public` + `lockReason` |
| `img` | banner. `.ps-banner` takes the artwork's 16:10 proportions, so landscape art is not cropped into a portrait column. |

`sections`, `blocks` and `build` **no longer exist.** They fed a "full write-up"
disclosure that was removed; leaving ~120 lines of data nothing rendered would
have been dead weight.

The newsroom's edition count and cover grid come from
`frontiers-gazette.vercel.app/api/editions` at runtime and **re-render when the
fetch resolves** — the hardcoded fallback is stale by design.

## Theme

**Dark by default**, set in the markup (`<html data-theme="dark">`) so there is
no flash before JS runs. `SHIFT` or the nav button toggles; stored in
`localStorage` under `mg-theme`.

`tweaks-panel.jsx` is **deleted.** It pulled React, ReactDOM and Babel from
unpkg and compiled JSX in the browser on every load — and it called
`setTheme("light")` on mount, overwriting a visitor's saved preference every
single time, which is why dark never stuck. The mint accent it injected at
runtime (`#19E0B4`) is now a plain `--accent` in `:root`.

## Focus

`:focus-visible` gets a 2px mint ring. `.ps-title` explicitly gets **none** — it
carries `tabindex="-1"` and is focused programmatically so a screen reader lands
on the new screen's heading. Nobody can tab to it, so a ring there reads as an
unexplained box around whichever project was just opened. It was reported as
exactly that.

## Images

Banners are `loading="lazy"` except the screen being opened. Photographic art is
**JPEG** — `maritime-intel-os.jpg` is 160KB where a lossless PNG was 960KB and a
256-colour PNG posterised the ocean into bands.

`loader-bot.png` is a 144×48 sheet of three 48px frames (dark → warming →
awake), 2,268 bytes, stepped by the loader counter via a `--f` custom property.
Generated with fal.ai FLUX; the wake states are derived from one sprite by
channel-ratio masking the mint pixels, so the frames cannot drift in style.

## Testing this in a headless / CDP-driven browser

Four things behave differently there. Each one cost time before being pinned
down, so check the harness before filing a bug against the page:

- **Scroll animations do not run.** Anything asking for `behavior: "smooth"`
  reads back as never having moved. Verify positions with `behavior: "instant"`.
  Reproduced in a blank iframe with none of this site's CSS or JS.
- **`loading="lazy"` images never fetch** — set `loading = "eager"` before
  measuring or screenshotting.
- **`resize_window` does not change the viewport**, so the `1000px` / `760px` /
  `720px` / `640px` breakpoints cannot be exercised.
- **A screenshot can render an image black while the browser holds correct
  pixels.** Sample with a canvas `getImageData` before believing it.

Also: the browser caches `styles.css` aggressively. If a change seems not to
apply, compare `getComputedStyle` against the served file before assuming the
edit failed.

## Design workflow

Designs live at claude.ai/design; import with the `DesignSync` MCP tool.

- **Design project ID:** `85400588-5d8c-4b09-bac8-0ba03277498c`
- Images from `DesignSync get_file` come back base64 and files over ~200KB may
  be **truncated** in the tool result. If an image renders only partially, check
  its size and re-source the original.
