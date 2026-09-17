/* =========================================================================
   MIKE GREEN — portfolio interactions
   ========================================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- PROJECT DATA ---------- */
  const PROJECTS = [
    {
      title: "Agentic Loss of Control Series",
      eyebrow: "AI Incident Reconstruction",
      tags: "cybersecurity · ai oversight · agentic risk",
      blurb: "1,200 AI agents in a sealed cyber evaluation organised against a grader that was never watching.",
      // The big title on the screen is the event; the series name sits in the
      // head bar above it. The subtitle names what the visitor actually lands
      // on, because the live build brands itself The Specimen.
      screenTitle: "The OAIHF Event",
      screenSub: "Nobody Was Grading · The Specimen, entry 1",
      series: {
        badge: "Series · 1 of 4",
        kids: [
          { t: "The OAIHF Event", s: "July 2026 · live", link: "https://the-specimen.vercel.app" },
          { t: "More events in development", s: "Further agentic loss-of-control incidents", empty: true }
        ]
      },
      why: [
        "OpenAI's ExploitGym, July 2026 — each agent sealed alone in its own sandbox.",
        "A third of the targets could not be exploited at all. Nobody told the agents which.",
        "They found a shared cache, organised through it, and attacked Hugging Face."
      ],
      status: "live",
      ph: "nobody was grading — the board",
      img: "images/nobody-was-grading.png",
      img2: "images/nobody-was-grading2.png",
      summary: "An animated 3D reconstruction of the July 2026 OpenAI / Hugging Face incident, in which about 1,200 AI agents in a cybersecurity evaluation found a shared cache, turned it into a message board, organised, and attacked Hugging Face — all while trying to fool a grader that never existed. Told moment by moment, built on METR's investigation.",
      facts: [["Role", "Design + Build"], ["Year", "2026"], ["Stack", "Three.js · TypeScript"], ["Status", "Live"]],
      live: true,
      link: "https://the-specimen.vercel.app"
    },
    {
      title: "Maritime OS",
      eyebrow: "Maritime Intelligence",
      tags: "live ais · order book · supply chain",
      blurb: "What an NZ agri-food exporter actually needs: which customer promise breaks next, and what can still be done.",
      why: [
        "~190 hulls in and around New Zealand, matched to the commitments they carry.",
        "Choke points and berth congestion priced as detour days against the date you promised.",
        "A position past five minutes is frozen, not extrapolated — refusals as legible as answers."
      ],
      status: "live",
      ph: "maritime map — signal layer",
      // JPEG, not PNG: a starfield and a shaded globe are photographic, and a
      // lossless PNG of this frame costs 960KB against 160KB here with no
      // visible difference. A 256-colour PNG was the other option and it
      // posterised the ocean.
      img: "images/maritime-intel-os.jpg",
      summary: "Live vessel positions read against your own order book. It matches the ships actually on the water to the commitments you have made, prices the delay when a choke point or a congested berth gets in the way, and names the customer promises about to break while there is still something to do about them.",
      facts: [["Role", "Founder"], ["Year", "2026"], ["Stack", "Realtime · Geospatial · Rules"], ["Status", "Live"]],
      live: true,
      link: "https://maritime-intel-os.vercel.app/"
    },
    {
      title: "Agentic Newsroom",
      eyebrow: "Agentic Publishing",
      tags: "agentic publishing · weekly · print-on-demand",
      blurb: "A weekly magazine researched, written, edited and illustrated by agents. Eight editions and counting.",
      series: { badge: "Series", dynamic: "editions" },
      why: [
        "The Frontiers Gazette — AI-native technology, science and ideas, weekly.",
        "Written, edited and illustrated by an agentic newsroom.",
        "Producer: Mike Green — sole carbon entity."
      ],
      status: "live",
      featured: true,
      ph: "the frontiers gazette — latest edition",
      // Fallback only — used until the live fetch to ai-gazette's /api/editions resolves,
      // or if it fails. The live response is the source of truth once it lands.
      gazetteEditions: [
        { edition: "001d", cap: "The Engine Room: How SpaceX Turned Raptor Into a Manufacturing Problem", src: "uploads/Gazette1.PNG", alt: "The Frontiers Gazette — Edition 001d cover", link: "https://frontiers-gazette.vercel.app/edition/001d", pubMonthYear: "June 2026" },
        { edition: "001e", cap: "The Church That Cannot Enforce Its Conscience", src: "uploads/Gazette-001e.PNG", alt: "The Frontiers Gazette — Edition 001e cover", link: "https://frontiers-gazette.vercel.app/edition/001e", pubMonthYear: "June 2026" },
        { edition: "001g", cap: "The Cardiologist in the Loop", src: "uploads/Gazette-001g.PNG", alt: "The Frontiers Gazette — Edition 001g cover", link: "https://frontiers-gazette.vercel.app/edition/001g", pubMonthYear: "June 2026" },
        { edition: "002b", cap: "The Enterprise Agent Stack: Key Architectural Decisions", src: "uploads/Gazette-002b.PNG", alt: "The Frontiers Gazette — Edition 002b cover", link: "https://frontiers-gazette.vercel.app/edition/002b", pubMonthYear: "June 2026" },
        { edition: "003", cap: "The Engineer in the Room: Palantir's Bet That AI Needs a Human in the Building", src: "uploads/Gazette-003.PNG", alt: "The Frontiers Gazette — Edition 003 cover", link: "https://frontiers-gazette.vercel.app/edition/003", pubMonthYear: "July 2026" },
        { edition: "004b", cap: "The Ships That Came Back Different", src: "https://frontiers-gazette.vercel.app/api/cover-render/004b", alt: "The Frontiers Gazette — Edition 004b cover", link: "https://frontiers-gazette.vercel.app/edition/004b", pubMonthYear: "July 2026" },
        { edition: "005", cap: "The Compute Ceiling", src: "https://frontiers-gazette.vercel.app/api/cover-render/005", alt: "The Frontiers Gazette — Edition 005 cover", link: "https://frontiers-gazette.vercel.app/edition/005", pubMonthYear: "August 2026" }
      ],
      summary: "A bespoke magazine — The Frontiers Gazette — written, edited and illustrated end-to-end by a four-agent AI newsroom, browsed on an immersive 3D shelf. Live now, with new editions publishing continuously and print-on-demand next on the roadmap.",
      facts: [["Role", "Founder"], ["Year", "2026"], ["Stack", "Agentic · 3D · Print"], ["Status", "Live"]],
      live: true,
      link: "https://frontiers-gazette.vercel.app/shelf"
    },
    {
      title: "Enterprise Training Scheduler",
      eyebrow: "Workforce Optimisation",
      tags: "simulation · optimisation · cp-sat",
      blurb: "Google's CP-SAT solver turning weeks of manual workforce scheduling into seconds of computation.",
      why: [
        "A proof-of-concept simulator, run on synthetic data.",
        "Constraints like \u201cno one attends two courses at once\u201d and \u201cmax 20 per room\u201d.",
        "CP-SAT prunes the search space rather than enumerating it — brute force would outlast the universe."
      ],
      status: "live",
      ph: "training scheduler — simulator UI",
      img: "images/enterprise-training-scheduler.png",
      summary: "A scheduling tool for enterprise workforce training. It builds a synthetic workforce, shows the schedule a human planner would produce by hand, then solves the same problem with a constraint solver and returns an optimal plan in seconds.",
      facts: [["Role", "Design + Build"], ["Year", "2025"], ["Stack", "Next.js · CP-SAT"], ["Status", "Live"]],
      live: true,
      link: "https://workforce-readiness-simulator.vercel.app/app"
    },
    {
      title: "Agentic Stock Analyst",
      eyebrow: "Equity Research",
      tags: "agentic ai · equities · nzx / asx",
      blurb: "A committee of eight agents screens the NZX and ASX, argues down a shortlist, and shows its reasoning.",
      lockReason: "Not public — it reads live market data and takes positions.",
      why: [
        "More than 7,000 listings swept down to a working universe.",
        "Quality, momentum and value scored separately, with a sector-exposure audit.",
        "Guardrails win: rule-based backtesting overrides the model on a risk breach."
      ],
      status: "live",
      ph: "AI committee — analysis view",
      img: "images/ai-stock-picker.png",
      img2: "images/agenticstock2.PNG",
      summary: "A committee of specialised AI agents that researches NZX and ASX equities. They screen the full market, score what survives, debate a shortlist, and assemble a portfolio — showing the reasoning at each step.",
      facts: [["Role", "Product + AI"], ["Year", "2025"], ["Stack", "Multi-agent · RAG"], ["Status", "Live"]],
      link: "https://v0-ai-stock-picker-companion.vercel.app/analysis"
    },
    {
      title: "BioSignal Intelligence",
      eyebrow: "Biotech Signal",
      tags: "bayesian conviction · biotech · nzx / asx",
      blurb: "Biotech moves on binary events. A conviction score that updates with every clinical and regulatory readout.",
      lockReason: "Not public — it holds a live position book.",
      why: [
        "Trial readouts, approvals and terminations tracked across NZX and ASX biotech.",
        "Each result revises a Bayesian prior rather than being reacted to as a headline.",
        "Every shift in conviction becomes an explicit action: add, hold, trim or exit."
      ],
      status: "live",
      ph: "biosignal — conviction map",
      img: "images/biosignal-intelligence.png",
      img2: "images/biosignall2.PNG",
      summary: "A Bayesian conviction engine for biotech equities. It models each company's odds of success as a score that updates with every clinical and regulatory event, and turns each update into a clear position action.",
      facts: [["Role", "Founder"], ["Year", "June 2026"], ["Stack", "Bayesian · ML · Realtime"], ["Status", "Live"]],
      link: "#"
    },
    {
      title: "Sax & Zoe's Lawn Mowing Service",
      eyebrow: "Neighbourhood Commerce",
      tags: "small business · booking · real customers",
      blurb: "A real booking site for a two-child lawn mowing business on Church Street. From $15, pay after.",
      why: [
        "Sax and Zoe mow. Dad does edges, logistics and safety.",
        "A hand-pushed Bosch and an electric trimmer — no petrol, no fumes, no roar.",
        "Book a mow, meet the crew, pay after the job is done."
      ],
      status: "live",
      ph: "lawn mowing service — Church Street",
      img: "images/lawn-mow-service.png",
      img2: "images/lawn-mow-service2.png",
      summary: "A storybook website for my kids' real lawn-mowing round on our Auckland street, built so the white picket fence out front doubles as the booking calendar and live weather quietly gates out rainy days.",
      facts: [["Role", "Design + Build"], ["Year", "2026"], ["Stack", "Next.js · Postgres"], ["Status", "Live"]],
      live: true,
      link: "https://sax-and-zoes-lawn-service.vercel.app/"
    }
  ];

  /* ---------- GAZETTE LIVE DATA ---------- */
  // Fetched at runtime from ai-gazette's own deployment — new editions published there
  // appear here automatically with no redeploy of this site required. Falls back to the
  // hardcoded gazetteEditions above if the fetch fails or hasn't resolved yet.
  const GAZETTE_API = "https://frontiers-gazette.vercel.app/api/editions";
  // Every cover in the modal grid opens the 3D shelf viewer rather than that edition's
  // reader page. The shelf takes no params, so it can't be deep-linked to one edition —
  // if ai-gazette ever adds that, append the id here and drop the shared constant.
  const GAZETTE_SHELF = "https://frontiers-gazette.vercel.app/shelf";
  const gazetteFallback = PROJECTS.find((p) => p.gazetteEditions).gazetteEditions;
  let gazetteState = {
    editions: gazetteFallback,
    latest: gazetteFallback.at(-1)
  };

  /* ---------- SHARED PREDICATES ---------- */
  // One definition of "can a visitor open this", read by the index row, the
  // screen's call to action and the keyboard handler alike.
  const isLive = (p) => Boolean(p.live && p.link && p.link !== "#");

  // The series badge counts what exists. For the newsroom that number is the
  // live edition list, which the API updates without a redeploy here.
  function seriesBadge(p) {
    if (!p.series) return "";
    if (p.series.dynamic === "editions") return `Series · ${gazetteState.editions.length} editions`;
    return p.series.badge || "Series";
  }

  /* ---------- RENDER PROJECTS ---------- */
  const list = document.getElementById("projList");
  PROJECTS.forEach((p, i) => {
    const el = document.createElement("article");
    el.className = "proj reveal";
    el.dataset.i = i;
    el.dataset.cursor = p.status === "soon" ? "soon" : "view";
    // One written sentence rather than three tags: the tags described the medium,
    // not the subject, and "3D storytelling" said nothing about what project 01
    // is actually about. Tags survive as small meta on the project's own screen.
    el.innerHTML = `
      <span class="p-idx">(0${i + 1})</span>
      <h3 class="p-title">${p.title}</h3>
      <span class="p-blurb">${p.blurb || p.tags}</span>
      <span class="p-marks">
        ${seriesBadge(p) ? `<span class="chip series">${seriesBadge(p)}</span>` : ""}
        <span class="p-status ${isLive(p) ? "live" : "soon"}"><span class="blip"></span>${isLive(p) ? "Live" : "Private"}</span>
      </span>`;
    list.appendChild(el);
  });
  const projEls = [...list.querySelectorAll(".proj")];

  fetch(GAZETTE_API)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then((data) => {
      const editions = (data.editions || []).map((e) => ({
        edition: e.id,
        cap: e.caption,
        src: e.coverUrl,
        alt: `The Frontiers Gazette — Edition ${e.id} cover`,
        link: e.readerUrl,
        pubMonthYear: e.pubMonthYear
      }));
      if (!editions.length) return;
      const latest = editions.find((e) => e.edition === data.latestId) || editions.at(-1);
      gazetteState = { editions, latest };
      // Both the index badge and the deck screen were rendered from the
      // fallback before this resolved, so they would otherwise sit on a stale
      // count — the API had 8 editions while the hardcoded list stopped at 7.
      refreshGazetteUI();
    })
    .catch(() => { /* offline or CORS failure — keep the fallback data already rendered */ });

  /* ---------- LOADER ---------- */
  const loader = document.getElementById("loader");
  const count = loader.querySelector(".l-count");
  const bar = loader.querySelector(".l-bar");
  const hero = document.querySelector(".hero");

  function startSite() {
    document.body.classList.remove("no-scroll");
    requestAnimationFrame(() => hero.classList.add("lift"));
    initReveal();
  }

  let loaderFinished = false;
  function finishLoader() {
    if (loaderFinished) return;
    loaderFinished = true;
    count.textContent = "100";
    bar.style.transform = "scaleX(1)";
    loader.classList.add("done");
    startSite();
  }

  if (reduceMotion) {
    loader.style.display = "none";
    finishLoader();
  } else {
    const dur = 1300, t0 = Date.now();
    // setInterval (not rAF) so it advances even when the iframe isn't painting
    const iv = setInterval(() => {
      const k = Math.min(1, (Date.now() - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      count.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      bar.style.transform = `scaleX(${eased})`;
      if (k >= 1) { clearInterval(iv); finishLoader(); }
    }, 32);
    // hard safety: never let the site stay hidden
    setTimeout(finishLoader, dur + 400);
  }

  /* ---------- CLOCKS (multi-zone) ---------- */
  const clock = document.getElementById("clock");
  const clock2 = document.getElementById("clock2");
  const ckEls = clock ? clock.querySelectorAll(".ck") : [];
  function fmtTime(tz) {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: tz, hour: "2-digit", minute: "2-digit",
      second: "2-digit", hour12: false
    }).format(new Date());
  }
  function updateClock() {
    try {
      ckEls.forEach((el) => {
        el.textContent = fmtTime(el.dataset.tz) + " " + el.dataset.lbl;
      });
      if (clock2) clock2.textContent = fmtTime("Pacific/Auckland") + " AKL";
    } catch (e) { /* noop */ }
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ---------- THEME (SHIFT = lights out) ---------- */
  const html = document.documentElement;
  // Dark is the default, set in the markup so there is no flash of light before
  // this runs. A stored choice still wins. Until the tweaks panel was removed
  // it called setTheme("light") on mount and overwrote this on every load,
  // which is why a saved preference never survived a refresh.
  const saved = localStorage.getItem("mg-theme");
  html.setAttribute("data-theme", saved === "light" || saved === "dark" ? saved : "dark");
  function toggleTheme() {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("mg-theme", next);
  }
  document.getElementById("shiftBtn").addEventListener("click", toggleTheme);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Shift" && !e.repeat) toggleTheme();
  });

  /* ---------- CUSTOM CURSOR ---------- */
  // no-op until finePointer setup below reassigns it; lets code injected after
  // load (e.g. the modal's gazette carousel) opt back into hover/label behaviour
  let bindCursorHover = () => {};
  if (finePointer) {
    document.body.classList.add("cursor-on");
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function ring_loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(ring_loop);
    })();
    const labels = { view: "view", soon: "soon", email: "email", "↗": "open" };
    bindCursorHover = (root) => {
      (root || document).querySelectorAll("a, button, .proj, [data-cursor]").forEach((el) => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = "1";
        el.addEventListener("mouseenter", () => {
          ring.classList.add("is-hover");
          const c = el.getAttribute("data-cursor");
          if (c && labels[c]) { ring.classList.add("is-label"); ring.setAttribute("data-label", labels[c]); }
        });
        el.addEventListener("mouseleave", () => {
          ring.classList.remove("is-hover", "is-label");
        });
      });
    };
    bindCursorHover(document);
  }

  /* ---------- HERO CANVAS — cursor-reactive flow grid ---------- */
  (function heroCanvas() {
    const cv = document.getElementById("hero-canvas");
    const ctx = cv.getContext("2d");
    // Pixelated water-ripple field: a damped wave-equation height-map on a
    // coarse grid. The cursor drops square impulses that propagate outward and
    // reverberate off the edges of the canvas.
    const CELL = 15;              // pixel size of each square "pixel"
    const DAMP = 0.962;           // wave energy retention (higher = longer ripples)
    let w, h, dpr, gw, gh, n, buf1, buf2;
    let pointer = { gx: -1, gy: -1, px: -1, py: -1, active: false };

    function ink() {
      return getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#111";
    }
    function accent() {
      return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#C6F833";
    }
    // parse "#rrggbb" -> [r,g,b]
    function rgb(hex) {
      hex = hex.replace("#", "");
      if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
      const v = parseInt(hex, 16);
      return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
    }

    function build() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gw = Math.ceil(w / CELL) + 1;
      gh = Math.ceil(h / CELL) + 1;
      n = gw * gh;
      buf1 = new Float32Array(n);
      buf2 = new Float32Array(n);
    }

    // drop a square stamp of energy into the grid (square objects -> square ripples)
    function disturb(gx, gy, amp, half) {
      for (let y = gy - half; y <= gy + half; y++) {
        if (y < 1 || y >= gh - 1) continue;
        for (let x = gx - half; x <= gx + half; x++) {
          if (x < 1 || x >= gw - 1) continue;
          buf1[y * gw + x] += amp;
        }
      }
    }

    function step() {
      // wave propagation (Hugo-Elias style): buf2 = avg(neighbours of buf1) - buf2
      for (let y = 1; y < gh - 1; y++) {
        let i = y * gw + 1;
        for (let x = 1; x < gw - 1; x++, i++) {
          const v = (buf1[i - 1] + buf1[i + 1] + buf1[i - gw] + buf1[i + gw]) * 0.5 - buf2[i];
          buf2[i] = v * DAMP;
        }
      }
      const tmp = buf1; buf1 = buf2; buf2 = tmp;
    }

    function draw() {
      step();
      ctx.clearRect(0, 0, w, h);
      const col = rgb(ink()), acc = rgb(accent());
      for (let y = 1; y < gh - 1; y++) {
        for (let x = 1; x < gw - 1; x++) {
          const v = buf1[y * gw + x];
          const m = Math.abs(v);
          if (m < 2) continue;                 // skip flat water -> stays pixel-sparse
          const a = Math.min(0.85, m / 90);     // height -> opacity
          const crest = v > 26;                 // bright crests pick up the accent
          const c = crest ? acc : col;
          ctx.globalAlpha = a;
          ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
          ctx.fillRect(x * CELL, y * CELL, CELL - 1, CELL - 1);
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    const rect = () => cv.getBoundingClientRect();
    window.addEventListener("mousemove", (e) => {
      const r = rect();
      if (e.clientY > r.bottom || e.clientY < r.top) { pointer.active = false; return; }
      const lx = e.clientX - r.left, ly = e.clientY - r.top;
      const gx = Math.round(lx / CELL), gy = Math.round(ly / CELL);
      if (pointer.active) {
        // impulse scales with cursor speed -> faster swipes splash harder
        const speed = Math.hypot(lx - pointer.px, ly - pointer.py);
        const amp = Math.min(170, 36 + speed * 2.4);
        disturb(gx, gy, amp, 1);
      }
      pointer.px = lx; pointer.py = ly; pointer.gx = gx; pointer.gy = gy; pointer.active = true;
    });
    window.addEventListener("mouseleave", () => pointer.active = false);
    window.addEventListener("mousedown", (e) => {
      const r = rect();
      if (e.clientY > r.bottom) return;
      disturb(Math.round((e.clientX - r.left) / CELL), Math.round((e.clientY - r.top) / CELL), 260, 2);
    });
    cv.addEventListener("touchmove", (e) => {
      const r = rect(), tch = e.touches[0];
      disturb(Math.round((tch.clientX - r.left) / CELL), Math.round((tch.clientY - r.top) / CELL), 130, 1);
    }, { passive: true });

    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(build, 150); });
    build();
    if (!reduceMotion) {
      // a couple of gentle opening ripples so the field isn't dead on load
      disturb(Math.round(gw * 0.5), Math.round(gh * 0.55), 200, 2);
      draw();
    }
  })();

  /* ---------- PROJECT HOVER PREVIEW ---------- */
  if (finePointer) {
    // Hover preview thumbnail removed — keep only the active-title highlight.
    projEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        list.classList.add("hovering");
        projEls.forEach((p) => p.classList.toggle("active", p === el));
      });
    });
    list.addEventListener("mouseleave", () => {
      list.classList.remove("hovering");
      projEls.forEach((p) => p.classList.remove("active"));
    });
  }

  /* ---------- THE DECK ----------
     The modal this replaces covered the page, had no URL, no focus handling and
     no way to reach the next project without closing the current one. The deck
     is seven full-viewport sections that live in the page: clicking a row opens
     them, and from there a visitor moves project to project with the arrow keys,
     the NEXT control, or the trackpad.

     Closed, the container is `hidden` — so the screens are not scroll-snap
     points and, more importantly, their banner images are never fetched. The
     images/ folder is ~32MB of PNG and one file alone is 2.24MB. */
  const deck = document.getElementById("deck");
  const htmlEl = document.documentElement;

  function ctaLabel(p, i) {
    if (!isLive(p)) return "";
    if (i === 0) return "Enter the OAIHF Event";
    if (p.series && p.series.dynamic === "editions") return "Read the latest edition";
    return `Open ${p.title}`;
  }

  function gazetteGrid() {
    return `
      <div class="ps-grid">
        <div class="sg-cap">
          <span class="sg-lbl">The Frontiers Gazette</span>
          <span class="sg-sub">${gazetteState.editions.length} editions · click any cover for the 3D shelf</span>
        </div>
        <div class="sg-grid">${gazetteState.editions.map((g) => `
          <figure class="sg-page">
            <a href="${GAZETTE_SHELF}" target="_blank" rel="noopener" data-cursor="↗" aria-label="Browse all editions in the 3D shelf viewer — showing edition ${g.edition}, ${g.cap}">
              <span class="sg-ed">Ed <b>${g.edition}</b></span>
              <img src="${g.src}" alt="${g.alt}" loading="lazy" decoding="async" />
              <figcaption>${g.cap}</figcaption>
            </a>
          </figure>`).join("")}</div>
      </div>`;
  }

  function banner(p) {
    if (p.img) {
      return `<div class="ps-banner"><img src="${p.img}" alt="${p.title} — screenshot" loading="lazy" decoding="async" /></div>`;
    }
    return `<div class="ps-banner"><div class="ph" data-ph="${p.ph || p.title}"><span class="corner tl"></span><span class="corner"></span></div></div>`;
  }

  function kids(p) {
    if (!p.series || !p.series.kids) return "";
    return `<div class="ps-kids">${p.series.kids.map((k) => {
      const inner = `<span class="k-t">${k.t}</span><span class="k-s">${k.s}</span>`;
      return k.empty
        ? `<div class="ps-kid empty">${inner}</div>`
        : `<a class="ps-kid" href="${k.link}" target="_blank" rel="noopener" data-cursor="↗">${inner}</a>`;
    }).join("")}</div>`;
  }

  function screenHTML(p, i) {
    const next = PROJECTS[i + 1];
    const tall = Boolean(p.series && p.series.dynamic === "editions");
    const badge = seriesBadge(p);
    // The newsroom's own link is the archive shelf; the CTA says "latest
    // edition", so it points at the latest edition's reader rather than at the
    // shelf. The cover grid below it is what opens the shelf.
    const href = (p.series && p.series.dynamic === "editions" && gazetteState.latest && gazetteState.latest.link)
      ? gazetteState.latest.link
      : p.link;
    const cta = isLive(p)
      ? `<a class="ps-enter" href="${href}" target="_blank" rel="noopener" data-cursor="↗">${ctaLabel(p, i)} <span class="arw">→</span></a>`
      : `<span class="ps-locked">Not public</span>${p.lockReason ? `<span class="ps-lockwhy">${p.lockReason}</span>` : ""}`;

    return `
      <section class="pscreen${tall ? " tall" : ""}" id="ps-${i}" data-i="${i}" aria-labelledby="ps-h-${i}">
        <div class="ps-head">
          <span class="ps-n">(0${i + 1})</span>
          <span class="ps-eyebrow">${p.title}</span>
          <span class="ps-spacer"></span>
          ${badge ? `<span class="chip series">${badge}</span>` : ""}
          <span class="chip${isLive(p) ? "" : " locked"}"><span class="blip"></span>${isLive(p) ? "Live" : "Private"}</span>
        </div>

        <div class="ps-body">
          ${tall ? gazetteGrid() : banner(p)}
          <div class="ps-text">
            <h2 class="ps-title" id="ps-h-${i}" tabindex="-1">${p.screenTitle || p.title}</h2>
            ${p.screenSub ? `<span class="ps-sub">${p.screenSub}</span>` : ""}
            <p class="ps-blurb">${p.blurb || p.summary || ""}</p>
            <div class="ps-meta">${(p.facts || []).map(([k, v]) =>
              `<div class="sp"><span class="sp-k">${k}</span><span class="sp-v">${v}</span></div>`).join("")}</div>
            ${p.why ? `<ul class="ps-why">${p.why.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}
            <div class="ps-cta">${cta}</div>
            ${kids(p)}
          </div>
        </div>

        <div class="ps-foot">
          ${next
            ? `<button class="ps-next" data-next="${i + 1}"><span class="chev">▼</span> Next — ${next.title}</button>`
            : `<button class="ps-next" data-next="close"><span class="chev">▲</span> Back to the index</button>`}
          <button class="ps-back" data-back>Esc · index</button>
        </div>
      </section>`;
  }

  // Re-render the two places the edition count is shown, once the live list lands.
  function refreshGazetteUI() {
    const i = PROJECTS.findIndex((p) => p.series && p.series.dynamic === "editions");
    if (i < 0) return;
    const chip = projEls[i] && projEls[i].querySelector(".chip.series");
    if (chip) chip.textContent = seriesBadge(PROJECTS[i]);
    if (!deckBuilt) return;
    const screen = document.getElementById(`ps-${i}`);
    if (!screen) return;
    screen.outerHTML = screenHTML(PROJECTS[i], i);
    bindDeckControls();
    bindCursorHover(document.getElementById(`ps-${i}`));
  }

  let deckBuilt = false;
  function buildDeck() {
    if (deckBuilt) return;
    deck.innerHTML = PROJECTS.map(screenHTML).join("");
    deckBuilt = true;
    bindCursorHover(deck);
    bindDeckControls();
  }

  function bindDeckControls() {
    deck.querySelectorAll("[data-next]").forEach((b) => {
      if (b.dataset.bound) return;
      b.dataset.bound = "1";
      b.addEventListener("click", () => {
        const v = b.dataset.next;
        if (v === "close") closeDeck(); else goTo(+v);
      });
    });
    deck.querySelectorAll("[data-back]").forEach((b) => {
      if (b.dataset.bound) return;
      b.dataset.bound = "1";
      b.addEventListener("click", closeDeck);
    });
  }

  /* Where the deck believes it is.

     Deriving this from scroll position alone was wrong: a scroll takes time to
     animate, so pressing the down arrow twice quickly measured the same
     position both times and asked for the same screen twice. The index is state
     now, and scrolling is what *reports back into* it — so the keys stay ahead
     of the animation and a manual scroll still wins. */
  let atIndex = 0;

  function screenNearestViewport() {
    const screens = [...deck.querySelectorAll(".pscreen")];
    let best = 0, bestD = Infinity;
    screens.forEach((el, n) => {
      const d = Math.abs(el.getBoundingClientRect().top);
      if (d < bestD) { bestD = d; best = n; }
    });
    return best;
  }

  // A user scrolling by hand is the authority on where they are; this catches up
  // once the wheel stops rather than fighting it mid-gesture.
  let settleTimer = null;
  window.addEventListener("scroll", () => {
    if (!deckOpen) return;
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => {
      atIndex = screenNearestViewport();
      deck.dataset.at = String(atIndex);
    }, 140);
  }, { passive: true });

  function goTo(i, focus = true) {
    const el = document.getElementById(`ps-${i}`);
    if (!el) return;
    atIndex = i;
    deck.dataset.at = String(i);
    el.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
    if (focus) {
      // Focus the heading rather than the section so the CTA is the next tab
      // stop — the whole point of the screen is the way in.
      const h = el.querySelector(".ps-title");
      if (h) setTimeout(() => h.focus({ preventScroll: true }), reduceMotion ? 0 : 420);
    }
  }

  let deckOpen = false;
  function openDeck(i) {
    buildDeck();
    deck.hidden = false;
    htmlEl.classList.add("deck-open");
    deckOpen = true;
    // The banner of the screen being opened is worth fetching now; the rest stay lazy.
    const img = document.querySelector(`#ps-${i} .ps-banner img`);
    if (img) img.loading = "eager";
    atIndex = i;
    deck.dataset.at = String(i);
    requestAnimationFrame(() => goTo(i));
  }
  function closeDeck() {
    if (!deckOpen) return;
    deckOpen = false;
    htmlEl.classList.remove("deck-open");
    deck.hidden = true;
    document.getElementById("work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  projEls.forEach((el) => el.addEventListener("click", () => openDeck(+el.dataset.i)));

  window.addEventListener("keydown", (e) => {
    if (!deckOpen) return;                       // was unconditional, and fired with nothing open
    if (e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === "Escape") { closeDeck(); return; }
    const cur = atIndex;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      if (cur < PROJECTS.length - 1) goTo(cur + 1); else closeDeck();
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      if (cur > 0) goTo(cur - 1); else closeDeck();
    }
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  function initReveal() {
    const els = [...document.querySelectorAll(".reveal")];
    if (reduceMotion) { els.forEach((e) => e.classList.add("in")); return; }

    function revealInView() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const e of els) {
        if (e.classList.contains("in")) continue;
        const r = e.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) e.classList.add("in");
      }
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      els.forEach((e) => io.observe(e));
    }
    // robust fallback: reveal anything in view on load + on scroll (covers throttled IO)
    revealInView();
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView, { passive: true });
    setTimeout(revealInView, 200);
  }

  /* ---------- MAGNETIC ELEMENTS ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".mag").forEach((el) => {
      const strength = 0.35;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - (id === "#top" ? 0 : 8);
        window.scrollTo({ top: Math.max(0, y), behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  });
  document.getElementById("toTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- THEME HOOK ----------
     What is left of the tweaks-panel bridge. `setAccent` and `setGrid` went with
     the panel: the accent is a CSS custom property again, and nothing else ever
     called them. These two stay because they are a useful console handle and
     cost nothing. */
  window.MG = {
    setTheme(mode) { html.setAttribute("data-theme", mode); localStorage.setItem("mg-theme", mode); },
    getTheme() { return html.getAttribute("data-theme"); }
  };
})();
