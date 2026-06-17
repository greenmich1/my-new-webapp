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
      title: "Enterprise Training Scheduler",
      tags: "simulation · optimisation · CP-SAT",
      status: "live",
      ph: "training scheduler — simulator UI",
      img: "images/enterprise-training-scheduler.png",
      tagline: "Weeks of manual workforce-training planning, solved in seconds.",
      problem: "Planning training across a large enterprise workforce is a brutal combinatorial puzzle — competing shift patterns, availability windows, role coverage and learning requirements all collide. Done by hand it eats weeks of a planner’s time, and the schedule it produces is still educated guesswork that leaves readiness on the table.",
      solution: "The Scheduler reframes the whole mess as a set of hard and soft constraints and hands it to Google’s CP-SAT constraint solver. You generate a synthetic workforce, watch the chaotic unoptimised baseline, then run the solver — it returns a mathematically optimal schedule in seconds, with a measurable jump in readiness score and a clear optimisation delta against the manual starting point.",
      how: [
        ["Create", "Configure synthetic workforce size, shift patterns, time windows and learning needs."],
        ["Simulate", "Generate the messy, unoptimised schedule a manual planner would actually start from."],
        ["Optimise", "CP-SAT searches the constraint space and returns the best feasible schedule — reporting solve time, readiness score and the delta vs. baseline."]
      ],
      facts: [["Role", "Design + Build"], ["Year", "2025"], ["Stack", "Next.js · CP-SAT"], ["Status", "Live"]],
      link: "https://workforce-readiness-simulator.vercel.app/app"
    },
    {
      title: "Agentic Stock Analyst",
      tags: "agentic AI · equities · NZX / ASX",
      status: "live",
      ph: "AI committee — analysis view",
      img: "images/ai-stock-picker.png",
      tagline: "An AI investment committee doing the research retail investors can’t.",
      problem: "Retail investors are up against institutions with entire research teams. Screening thousands of NZX and ASX listings across quality, momentum and value — and then assembling a coherent portfolio from the survivors — is far beyond the time or tooling most people have.",
      solution: "A committee of eight specialised AI agents works the problem in parallel. They sweep the full investment universe, audit the portfolio for sector gaps, score candidates on quality, momentum and value, then debate the shortlist down to a set of high-conviction ideas — assembling a portfolio with the reasoning shown at every step.",
      how: [
        ["Scan", "Agents sweep 7,000+ NZX / ASX stocks and flag a working universe."],
        ["Audit & score", "Specialised agents surface sector-exposure gaps and rank candidates on quality, momentum and value."],
        ["Assemble", "The committee converges on a shortlist and builds a portfolio, surfacing the conviction behind every pick."]
      ],
      facts: [["Role", "Product + AI"], ["Year", "2025"], ["Stack", "Multi-agent · RAG"], ["Status", "Live"]],
      link: "https://v0-ai-stock-picker-companion.vercel.app/analysis"
    },
    {
      title: "Supply Chain Maritime Intelligence O/S",
      tags: "geospatial · forecasting · supply chain",
      status: "live",
      ph: "maritime map — signal layer",
      img: "images/maritime-intel-os.png",
      tagline: "Turning the noise of global shipping into early economic signal.",
      problem: "The world’s oceans throw off a relentless stream of vessel telemetry, but raw AIS tracks and port movements are nearly impossible to read as a coherent picture. The geopolitical and macroeconomic signals hidden in that noise tend to reach decision-makers far too late to be useful.",
      solution: "Maritime Intelligence OS ingests chaotic maritime telemetry and turns it into structured, predictive signals — tracking choke points, port congestion and trade-flow shifts, then translating them into forward-looking geopolitical and supply-chain indicators you can actually act on.",
      how: [
        ["Ingest", "Stream global vessel telemetry, port activity and route data into a single model."],
        ["Detect", "Surface anomalies, congestion and choke-point pressure as they build, not after the fact."],
        ["Forecast", "Translate movement patterns into predictive geopolitical and macroeconomic signals for supply-chain visibility."]
      ],
      facts: [["Role", "Founder"], ["Year", "2026"], ["Stack", "Realtime · ML · Geospatial"], ["Status", "Live"]],
      link: "https://maritime-intel-os.vercel.app/"
    },
    {
      title: "BioSignal Intelligence",
      tags: "Bayesian conviction · biotech · NZX / ASX",
      status: "live",
      ph: "biosignal — conviction map",
      img: "images/biosignal-intelligence.png",
      tagline: "Turning binary biotech catalysts into a live Bayesian conviction signal.",
      problem: "Biotech is ruled by binary regulatory events — trial readouts, approvals, terminations — that can move a stock 50% overnight. For NZX and ASX biotech names that signal is buried in dense clinical and regulatory filings, and almost no investor can track every catalyst across the sector or judge how much each one actually shifts a company's odds of success.",
      solution: "BioSignal Intelligence models each monitored company as a Bayesian conviction score that updates as new regulatory and clinical evidence lands. It sorts the universe into event-gated and trial-gated buckets, maps the companies as a live network of catalysts, and turns every readout into a quantified shift in conviction — surfacing the position action (add, initiate, hold, trim, exit) the moment the evidence changes.",
      how: [
        ["Monitor", "Continuously ingest clinical readouts, regulatory decisions and trial milestones across NZX / ASX biotech names."],
        ["Score", "Update a Bayesian conviction score per company as evidence arrives, bucketed by event-gated vs trial-gated catalysts."],
        ["Act", "Translate each conviction shift into a clear position action — add, initiate, hold, trim or exit — with the reasoning shown."]
      ],
      facts: [["Role", "Founder"], ["Year", "June 2026"], ["Stack", "Bayesian · ML · Realtime"], ["Status", "Live"]],
      link: "#"
    },
    {
      title: "Project Anti-Matrix",
      tags: "vision AI · multi-device · psychometrics",
      status: "soon",
      ph: "stealth — coming soon",
      tagline: "Proving multimodal AI quietly breaks the abstract reasoning test.",
      problem: "",
      solution: "Details are under wraps for now — a new zero-to-one AI product in active stealth development. Check back soon.",
      how: [],
      facts: [["Role", "Founder"], ["Year", "—"], ["Stack", "—"], ["Status", "Soon"]],
      link: "#"
    },
    {
      title: "Agentic Newsroom",
      tags: "agentic newsroom · 3D · print-on-demand",
      status: "soon",
      ph: "stealth — coming soon",
      tagline: "A bespoke magazine, written by an AI newsroom and shelved in a 3D bookstore.",
      problem: "",
      solution: "Details are under wraps for now — a new zero-to-one AI product in active stealth development. Check back soon.",
      how: [],
      facts: [["Role", "Founder"], ["Year", "—"], ["Stack", "—"], ["Status", "Soon"]],
      link: "#"
    }
  ];

  /* ---------- RENDER PROJECTS ---------- */
  const list = document.getElementById("projList");
  PROJECTS.forEach((p, i) => {
    const el = document.createElement("article");
    el.className = "proj reveal";
    el.dataset.i = i;
    el.dataset.cursor = p.status === "soon" ? "soon" : "view";
    el.innerHTML = `
      <span class="p-idx">(0${i + 1})</span>
      <h3 class="p-title">${p.title}</h3>
      <span class="p-tags">${p.tags}</span>
      <span class="p-status ${p.status}"><span class="blip"></span>${p.status === "soon" ? "Soon" : "Live"}</span>`;
    list.appendChild(el);
  });
  const projEls = [...list.querySelectorAll(".proj")];

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
  const saved = localStorage.getItem("mg-theme");
  if (saved) html.setAttribute("data-theme", saved);
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
    document.querySelectorAll("a, button, .proj, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.classList.add("is-hover");
        const c = el.getAttribute("data-cursor");
        if (c && labels[c]) { ring.classList.add("is-label"); ring.setAttribute("data-label", labels[c]); }
      });
      el.addEventListener("mouseleave", () => {
        ring.classList.remove("is-hover", "is-label");
      });
    });
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

  /* ---------- MODAL ---------- */
  const modal = document.getElementById("modal");
  const mTitle = document.getElementById("m-title");
  const mTagline = document.getElementById("m-tagline");
  const mTags = document.getElementById("m-tags");
  const mProblem = document.getElementById("m-problem");
  const mProblemBlock = document.getElementById("m-problem-block");
  const mSolution = document.getElementById("m-solution");
  const mHow = document.getElementById("m-how");
  const mHowBlock = document.getElementById("m-how-block");
  const mMeta = document.getElementById("m-meta");
  const mImg = document.getElementById("m-img");
  const mFacts = document.getElementById("m-facts");
  const mVisit = document.getElementById("m-visit");
  mVisit.addEventListener("click", (e) => { if (mVisit.classList.contains("locked")) e.preventDefault(); });

  function openModal(i) {
    const p = PROJECTS[i];
    mTitle.textContent = p.title;
    mTagline.textContent = p.tagline || "";
    mTags.textContent = p.tags;
    mMeta.textContent = `Project / 0${i + 1}${p.status === "soon" ? " — Coming soon" : ""}`;
    if (p.img) {
      mImg.setAttribute("data-has-img", "1");
      mImg.style.backgroundImage = `url("${p.img}")`;
    } else {
      mImg.removeAttribute("data-has-img");
      mImg.style.backgroundImage = "";
      mImg.setAttribute("data-ph", p.ph);
    }

    mProblem.textContent = p.problem || "";
    mProblemBlock.style.display = p.problem ? "" : "none";
    mSolution.textContent = p.solution || "";

    if (p.how && p.how.length) {
      mHowBlock.style.display = "";
      mHow.innerHTML = p.how.map(([k, v], n) =>
        `<li class="sb-step"><span class="sb-step-n">0${n + 1}</span><div><b>${k}</b><span>${v}</span></div></li>`).join("");
    } else {
      mHowBlock.style.display = "none";
    }

    mFacts.innerHTML = p.facts.map(([k, v]) => `<div class="row"><span>${k}</span><b>${v}</b></div>`).join("");
    // Project 01 (Enterprise Training Scheduler) links to the live project;
    // every other project shows a Locked button.
    if (i === 0 && p.link && p.link !== "#") {
      mVisit.classList.remove("locked");
      mVisit.removeAttribute("aria-disabled");
      mVisit.href = p.link;
      mVisit.target = "_blank";
      mVisit.rel = "noopener";
      mVisit.dataset.cursor = "↗";
      mVisit.innerHTML = 'Open live project <span>↗</span>';
    } else {
      mVisit.classList.add("locked");
      mVisit.setAttribute("aria-disabled", "true");
      mVisit.href = "#";
      mVisit.removeAttribute("target");
      mVisit.removeAttribute("rel");
      mVisit.dataset.cursor = "locked";
      mVisit.innerHTML = '<span class="lock-ico">🔒</span> Locked';
    }
    mVisit.style.display = "inline-flex";

    modal.querySelector(".sheet").scrollTop = 0;
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  projEls.forEach((el) => el.addEventListener("click", () => openModal(+el.dataset.i)));
  modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeModal));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

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

  /* ---------- TWEAKS HOOK (applied externally) ---------- */
  window.MG = {
    setAccent(hex) {
      document.documentElement.style.setProperty("--accent", hex);
      // pick readable ink-on-accent
      const c = hex.replace("#", "");
      const r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      document.documentElement.style.setProperty("--accent-ink", lum > 0.6 ? "#111110" : "#ffffff");
    },
    setTheme(mode) { html.setAttribute("data-theme", mode); localStorage.setItem("mg-theme", mode); },
    getTheme() { return html.getAttribute("data-theme"); },
    setGrid(on) {
      const cv = document.getElementById("hero-canvas");
      if (cv) cv.style.display = on ? "" : "none";
    }
  };
})();
