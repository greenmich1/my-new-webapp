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
      title: "Agentic Newsroom",
      eyebrow: "Agentic Publishing",
      tags: "agentic newsroom · 3D · print-on-demand",
      status: "soon",
      featured: true,
      ph: "the frontiers gazette — inaugural edition",
      // Fallback only — used until the live fetch to ai-gazette's /api/editions resolves,
      // or if it fails. The live response is the source of truth once it lands.
      gazetteEditions: [
        { edition: "001d", cap: "The Engine Room: How SpaceX Turned Raptor Into a Manufacturing Problem", src: "uploads/Gazette1.PNG", alt: "The Frontiers Gazette — Edition 001d cover", link: "https://frontiers-gazette.vercel.app/edition/001d", pubMonthYear: "June 2026" },
        { edition: "001e", cap: "The Church That Cannot Enforce Its Conscience", src: "uploads/Gazette-001e.PNG", alt: "The Frontiers Gazette — Edition 001e cover", link: "https://frontiers-gazette.vercel.app/edition/001e", pubMonthYear: "June 2026" },
        { edition: "001g", cap: "The Cardiologist in the Loop", src: "uploads/Gazette-001g.PNG", alt: "The Frontiers Gazette — Edition 001g cover", link: "https://frontiers-gazette.vercel.app/edition/001g", pubMonthYear: "June 2026" },
        { edition: "002b", cap: "The Enterprise Agent Stack: Key Architectural Decisions", src: "uploads/Gazette-002b.PNG", alt: "The Frontiers Gazette — Edition 002b cover", link: "https://frontiers-gazette.vercel.app/edition/002b", pubMonthYear: "June 2026" },
        { edition: "003", cap: "The Engineer in the Room: Palantir's Bet That AI Needs a Human in the Building", src: "uploads/Gazette-003.PNG", alt: "The Frontiers Gazette — Edition 003 cover", link: "https://frontiers-gazette.vercel.app/edition/003", pubMonthYear: "July 2026" }
      ],
      summary: "A bespoke magazine — The Frontiers Gazette — written, edited and illustrated end-to-end by an autonomous AI newsroom, browsed in a 3D bookstore, with a path to print-on-demand. Shown below: the inaugural edition.",
      facts: [["Role", "Founder"], ["Year", "2026"], ["Stack", "Agentic · 3D · Print"], ["Status", "Inaugural edition"]],
      sections: [
        ["Featured", "A newsroom that never stops the press", "This is the one project on this page that is alive by nature: an agentic editorial pipeline that researches, writes, edits and illustrates a complete magazine on every run. Five editions have published so far — scroll through the covers below and click one to read the full issue on The Frontiers Gazette. This slot keeps growing as new editions run."]
      ],
      blocks: [],
      link: "#"
    },
    {
      title: "Enterprise Training Scheduler",
      eyebrow: "Workforce Optimisation",
      tags: "simulation · optimisation · CP-SAT",
      status: "live",
      ph: "training scheduler — simulator UI",
      img: "images/enterprise-training-scheduler.png",
      summary: "A scheduling tool for enterprise workforce training. It builds a synthetic workforce, shows the schedule a human planner would produce by hand, then solves the same problem with a constraint solver and returns an optimal plan in seconds.",
      facts: [["Role", "Design + Build"], ["Year", "2025"], ["Stack", "Next.js · CP-SAT"], ["Status", "Live"]],
      sections: [
        ["Context", "Planning training by hand does not scale", "A large workforce carries competing shift patterns, availability windows, role-coverage rules and individual learning requirements, all at once. Scheduled by hand, the work takes a planner weeks, and the result is still a reasonable guess rather than the best available plan. There is no way to know how much readiness was left unclaimed, because the alternatives were never searched."],
        ["Approach", "The schedule as a constraint problem", "The tool reframes scheduling as a set of hard constraints that must hold and soft constraints the solver tries to satisfy, then hands the model to Google's CP-SAT constraint solver. A problem a planner can only approximate by intuition becomes one a solver can search in full. It returns a feasible, provably optimal schedule together with the numbers that matter: solve time, a readiness score, and the measured gain over the manual baseline."]
      ],
      blocks: [
        ["Create", "Configure the workforce", "Set the workforce size, shift patterns, availability windows and learning requirements. The tool assembles a synthetic organisation to those parameters, so the solver can be tested against realistic structures before it is pointed at real data."],
        ["Simulate", "See the manual baseline", "Before optimising, the tool generates the unoptimised schedule a human planner would start from. This is the honest point of comparison: a workable but suboptimal plan that the solver then has to beat, rather than a strawman."],
        ["Optimise", "Solve, then measure", "CP-SAT searches the constraint space and returns the best feasible schedule it can prove. The result is reported against the baseline — how long it took to solve, the readiness score it reached, and the size of the improvement."]
      ],
      build: ["Enterprise-grade by construction", "The brief is unforgiving: complex constraints, secure multi-tenant access, and integration with systems that already exist. The solver sits at the centre; everything around it is chosen for reliability over novelty.", [
        ["Interface", "React / Angular dashboards and calendar views · Tailwind CSS"],
        ["Backend", "Java (Spring Boot) or C# (.NET Core) — type safety and legacy integration"],
        ["Optimisation", "Google OR-Tools (CP-SAT), with OptaPlanner / Timefold for constraint logic"],
        ["Conversational layer", "LangChain / LangGraph over an enterprise LLM (Azure OpenAI GPT-4o, Claude via Bedrock)"],
        ["Data", "PostgreSQL with TimescaleDB for scheduling history · Redis for sessions and caching"],
        ["Auth", "OAuth2 / OIDC and SAML for Okta and Active Directory"],
        ["Deployment", "Docker and Kubernetes on AWS or Azure"]
      ]],
      live: true,
      link: "https://workforce-readiness-simulator.vercel.app/app"
    },
    {
      title: "Agentic Stock Analyst",
      eyebrow: "Equity Research",
      tags: "agentic AI · equities · NZX / ASX",
      status: "live",
      ph: "AI committee — analysis view",
      img: "images/ai-stock-picker.png",
      img2: "images/agenticstock2.PNG",
      summary: "A committee of specialised AI agents that researches NZX and ASX equities. They screen the full market, score what survives, debate a shortlist, and assemble a portfolio — showing the reasoning at each step.",
      facts: [["Role", "Product + AI"], ["Year", "2025"], ["Stack", "Multi-agent · RAG"], ["Status", "Live"]],
      sections: [
        ["Context", "Retail investors are outgunned on research", "Institutions run whole teams to screen the market, weigh quality against momentum and value, and build a coherent portfolio. A retail investor has none of that capacity. Reading thousands of listings across the NZX and ASX, then turning the survivors into a balanced set of positions, is well beyond the time and tooling most people have."],
        ["Approach", "Research divided across a committee", "Rather than one model answering everything, the work is split among eight specialised agents that run in parallel. Each owns part of the process — universe screening, sector-exposure audit, factor scoring, portfolio construction — and the agents pass findings between them. The shortlist is argued down to a set of high-conviction ideas, and the reasoning behind each decision stays visible instead of disappearing into a single black-box answer."]
      ],
      blocks: [
        ["Scan", "Sweep the full universe", "Agents work through more than 7,000 NZX and ASX listings and reduce them to a working universe worth deeper analysis, filtering out names that fail basic quality and liquidity checks before any scoring begins."],
        ["Audit & score", "Rank on quality, momentum and value", "Specialised agents score each candidate across quality, momentum and value, while a separate audit agent checks the emerging portfolio for sector concentration and exposure gaps — so the shortlist is balanced rather than a pile of correlated bets."],
        ["Assemble", "Build the portfolio, show the conviction", "The committee debates the shortlist down to a final set of positions and assembles a portfolio, surfacing the case for every holding: why it made the cut and how strongly each agent backed it."]
      ],
      build: ["Deterministic maths, agentic reasoning", "Two things have to hold at once: real-time market data feeding hard quantitative models, and language models reasoning over the results without ever overriding the risk rules. The architecture keeps the maths and the judgement separate, and lets the guardrails win.", [
        ["Interface", "Next.js (React); Flutter for a mobile-first, Sharesies-like feel"],
        ["Backend", "Python (FastAPI) — native to the data-science and AI stack"],
        ["Agents", "CrewAI / AutoGen / LangGraph orchestrating Fundamental, Technical and Risk-Manager agents"],
        ["Reasoning", "GPT-4o and Claude, chosen for tool-calling and structured reasoning"],
        ["Quant", "Pandas, NumPy, scikit-learn and TA-Lib for technical analysis"],
        ["Data feeds", "Yahoo Finance, Alpha Vantage and Bloomberg for prices and financials"],
        ["Storage", "PostgreSQL with pgvector, plus Pinecone / Milvus for report embeddings"],
        ["Guardrails", "Celery task queues and rule-based backtesting that overrides the AI on risk breaches"]
      ]],
      link: "https://v0-ai-stock-picker-companion.vercel.app/analysis"
    },
    {
      title: "Supply Chain Maritime Intelligence O/S",
      eyebrow: "Maritime Intelligence",
      tags: "geospatial · forecasting · supply chain",
      status: "live",
      ph: "maritime map — signal layer",
      img: "images/maritime-intel-os.png",
      summary: "A system that reads global shipping telemetry as economic signal. It ingests vessel and port data, detects congestion and choke-point pressure as it builds, and translates movement into forward-looking supply-chain and macro indicators.",
      facts: [["Role", "Founder"], ["Year", "2026"], ["Stack", "Realtime · ML · Geospatial"], ["Status", "Live"]],
      sections: [
        ["Context", "The signal in shipping arrives too late", "The world's oceans produce a constant stream of vessel telemetry, but raw AIS tracks and port movements are almost impossible to read as a coherent picture. The geopolitical and macroeconomic signals buried in that noise — a tightening choke point, a port backing up, a trade flow rerouting — usually reach decision-makers long after they would have been useful."],
        ["Approach", "Telemetry turned into structured signal", "Maritime Intelligence OS pulls chaotic maritime data into a single model and turns it into structured, predictive indicators. Instead of plotting where ships are, it tracks how movement patterns change: choke-point pressure, port congestion, and shifts in trade flow. Those patterns are translated into forward-looking signals a supply-chain or macro analyst can act on while there is still time to respond."]
      ],
      blocks: [
        ["Ingest", "One model for the whole ocean", "Global vessel telemetry, port activity and route data stream into a single live model, replacing scattered feeds with one coherent picture of what is moving and where."],
        ["Detect", "Catch pressure as it builds", "The system surfaces anomalies, congestion and choke-point strain as they develop rather than after the fact, flagging the early movement that tends to precede a visible disruption."],
        ["Forecast", "Movement into macro signal", "Detected patterns are translated into predictive geopolitical and macroeconomic indicators, giving supply-chain visibility that looks forward instead of reporting what has already happened."]
      ],
      build: ["High-throughput, geospatial, real-time", "The system swallows a continuous flood of vessel telemetry, reads it spatially, and watches it with computer vision — all while it is still streaming. Ingestion runs in fast compiled languages; the AI work runs in Python; the two meet over a message broker.", [
        ["Interface", "React with Mapbox GL and CesiumJS for 2D / 3D vessel tracking"],
        ["Backend", "Python (FastAPI) for AI workflows · Go and Rust for ingestion pipelines"],
        ["Streaming", "Apache Kafka / AWS Kinesis for live AIS signal streams"],
        ["Geospatial", "PostGIS, GeoPandas and Fiona"],
        ["Computer vision", "PyTorch and YOLOv10 / v11 for vessel, port and dark-vessel detection"],
        ["Anomaly detection", "scikit-learn / TensorFlow for trajectory and route-deviation models"],
        ["Storage", "PostgreSQL + PostGIS · InfluxDB / TimescaleDB for historical tracks"],
        ["Deployment", "AWS Greengrass at the edge on vessels · Kubernetes shore-side"]
      ]],
      link: "https://maritime-intel-os.vercel.app/"
    },
    {
      title: "BioSignal Intelligence",
      eyebrow: "Biotech Signal",
      tags: "Bayesian conviction · biotech · NZX / ASX",
      status: "live",
      ph: "biosignal — conviction map",
      img: "images/biosignal-intelligence.png",
      img2: "images/biosignall2.PNG",
      summary: "A Bayesian conviction engine for biotech equities. It models each company's odds of success as a score that updates with every clinical and regulatory event, and turns each update into a clear position action.",
      facts: [["Role", "Founder"], ["Year", "June 2026"], ["Stack", "Bayesian · ML · Realtime"], ["Status", "Live"]],
      sections: [
        ["Context", "Biotech moves on binary events", "Biotech is governed by binary regulatory and clinical events — trial readouts, approvals, terminations — any of which can move a stock fifty percent overnight. For NZX and ASX biotech names, those events are buried in dense clinical and regulatory filings. Almost no investor can track every catalyst across the sector, let alone judge how much each one actually shifts a company's probability of success."],
        ["Approach", "Conviction as a Bayesian score", "BioSignal Intelligence models each monitored company as a Bayesian conviction score — a running probability of success that updates as new evidence lands. It sorts the universe into event-gated and trial-gated buckets, maps the companies as a live network of upcoming catalysts, and treats every readout as evidence that revises the prior rather than a headline to react to."]
      ],
      blocks: [
        ["Monitor", "Track every catalyst", "The system continuously ingests clinical readouts, regulatory decisions and trial milestones across NZX and ASX biotech names, holding a live map of which companies are gated on an event and which are gated on a trial."],
        ["Score", "Update the odds with the evidence", "As each piece of evidence arrives, the company's Bayesian conviction score is revised and bucketed by catalyst type, so the number reflects what is actually known rather than sentiment or momentum."],
        ["Act", "Turn conviction into a position", "Every shift in conviction is translated into a clear position action — add, initiate, hold, trim or exit — with the reasoning shown, so the move follows from the evidence rather than a hunch."]
      ],
      link: "#"
    },
    {
      title: "Project Anti-Matrix",
      eyebrow: "Vision AI",
      tags: "vision AI · multi-device · psychometrics",
      status: "soon",
      ph: "stealth — coming soon",
      summary: "A study in whether multimodal AI can quietly pass the abstract reasoning tests used to screen and select people — and what that means for psychometrics.",
      facts: [["Role", "Founder"], ["Year", "—"], ["Stack", "—"], ["Status", "In development"]],
      sections: [
        ["Status", "In stealth", "A zero-to-one project in active development, working at the edge of vision models, multi-device capture and psychometric testing. The full write-up is held back for now. Check back soon."]
      ],
      blocks: [],
      link: "#"
    },
    {
      title: "Sax & Zoe's Lawn Mowing Service",
      eyebrow: "Neighbourhood Commerce",
      tags: "paper-cut illustration · live weather · kids' business",
      status: "live",
      ph: "lawn mowing service — Church Street",
      img: "images/lawn-mow-service.png",
      img2: "images/lawn-mow-service2.png",
      summary: "A storybook website for my kids' real lawn-mowing round on our Auckland street, built so the white picket fence out front doubles as the booking calendar and live weather quietly gates out rainy days.",
      facts: [["Role", "Design + Build"], ["Year", "2026"], ["Stack", "Next.js · Postgres"], ["Status", "Live"]],
      sections: [
        ["Context", "A real business needs a real trust signal", "Sax and Zoe genuinely mow lawns on our street — I help with edging and logistics, and residents pay electronically afterwards. A generic tradesperson site would have undersold that, and a Yellow Pages layout says nothing about who is actually turning up at the gate. The brief called for something closer to Airbnb or Pixar than a trade listing: friendly, alive, and built to make supporting two neighbourhood kids feel effortless."],
        ["Approach", "The fence becomes the booking bar", "The centrepiece is a paper-cut, soft-3D illustration of the house on Church Street, and rather than bolt a calendar widget on top of it, the white picket fence itself became the date selector — each picket a bookable day, a gold picket meaning every shift that day is already taken. Live weather from Open-Meteo greys out days forecast to rain, and the hero quietly shifts between sunny, dawn and night states as the story around it unfolds."]
      ],
      blocks: [
        ["Meet", "Meet the crew", "Friendly portraits and short, honest bios for Sax and Zoe sit right under the hero, so the first thing a neighbour sees is who is actually going to be mowing their lawn."],
        ["Book", "Pick a day at the fence", "Residents scroll the picket fence, pick an open day and shift, add their name and house number, and choose a regular or large lawn — booked in under a minute, with no account required."],
        ["Pay", "Pay after, however suits", "There is no checkout. Once the mow is done, payment is requested simply — cash, bank transfer or a QR code — keeping the transaction as low-friction as the booking."]
      ],
      build: ["A real stack behind a storybook front door", "Underneath the paper-cut illustration sits an ordinary, dependable web stack: serverless functions for availability and bookings, a Postgres database for state, and a Google-gated admin view so shifts can be managed without touching code.", [
        ["Interface", "Hand-built paper-cut / soft-3D illustration layers, animated independently — house, sun, clouds, butterflies"],
        ["Booking mechanic", "The picket fence rendered as a horizontal date selector; gold pickets mark fully-booked days"],
        ["Weather", "Open-Meteo live forecast for Church St, Northcote Point, gating out rainy days automatically"],
        ["Backend", "Vercel serverless functions (Node) for availability and booking endpoints"],
        ["Data", "Neon serverless Postgres for bookings and shift state"],
        ["Admin auth", "Google Sign-In via google-auth-library and jose, gating a parent-only admin dashboard"],
        ["Payment", "Cash, bank transfer or QR code — requested after the mow, no online checkout"]
      ]],
      live: true,
      link: "https://sax-and-zoes-lawn-service.vercel.app/"
    }
  ];

  /* ---------- GAZETTE LIVE DATA ---------- */
  // Fetched at runtime from ai-gazette's own deployment — new editions published there
  // appear here automatically with no redeploy of this site required. Falls back to the
  // hardcoded gazetteEditions above if the fetch fails or hasn't resolved yet.
  const GAZETTE_API = "https://frontiers-gazette.vercel.app/api/editions";
  let gazetteState = {
    editions: PROJECTS[0].gazetteEditions,
    latest: PROJECTS[0].gazetteEditions.at(-1)
  };

  function gazetteHeroInnerHTML() {
    const g = gazetteState.latest;
    if (!g) return "";
    return `
      <div class="gaz-cap">
        <span class="gaz-lbl">The Frontiers Gazette</span>
        <span class="gaz-sub">Latest edition · updates automatically</span>
      </div>
      <div class="gaz-hero">
        <figure class="gaz-hero-fig">
          <img src="${g.src}" alt="${g.alt}" loading="lazy" />
          <figcaption>
            <span class="gaz-hero-cap">${g.cap}</span>
            ${g.pubMonthYear ? `<span class="gaz-hero-date">${g.pubMonthYear}</span>` : ""}
          </figcaption>
        </figure>
      </div>`;
  }

  function updateGazetteUI() {
    const stripEl = list.querySelector(".proj.is-featured .gazette-strip");
    if (stripEl) stripEl.innerHTML = gazetteHeroInnerHTML();
  }

  /* ---------- RENDER PROJECTS ---------- */
  const list = document.getElementById("projList");
  PROJECTS.forEach((p, i) => {
    const el = document.createElement("article");
    el.className = "proj reveal";
    el.dataset.i = i;
    el.dataset.cursor = p.status === "soon" ? "soon" : "view";
    const gazStrip = p.featured ? `<div class="gazette-strip">${gazetteHeroInnerHTML()}</div>` : "";
    el.innerHTML = `
      <span class="p-idx">(0${i + 1})</span>
      <h3 class="p-title">${p.title}</h3>
      <span class="p-tags">${p.tags}</span>
      <span class="p-status ${p.status}"><span class="blip"></span>${p.status === "soon" ? "Soon" : "Live"}</span>${gazStrip}`;
    if (p.featured) el.classList.add("is-featured");
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
      updateGazetteUI();
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

  /* ---------- MODAL ---------- */
  const modal = document.getElementById("modal");
  const mTitle = document.getElementById("m-title");
  const mEyebrow = document.getElementById("m-eyebrow");
  const mSummary = document.getElementById("m-summary");
  const mSpec = document.getElementById("m-spec");
  const mBody = document.getElementById("m-body");
  const mFootmark = document.getElementById("m-footmark");
  const mMeta = document.getElementById("m-meta");
  const mImgWrap = document.getElementById("m-img-wrap");
  const mGazette = document.getElementById("m-gazette");
  const mVisit = document.getElementById("m-visit");
  mVisit.addEventListener("click", (e) => { if (mVisit.classList.contains("locked")) e.preventDefault(); });

  let carouselInterval = null;
  function clearCarousel() { if (carouselInterval) { clearInterval(carouselInterval); carouselInterval = null; } }

  function openModal(i) {
    clearCarousel();
    const p = PROJECTS[i];
    mEyebrow.textContent = p.eyebrow || "Project";
    mTitle.textContent = p.title;
    mSummary.textContent = p.summary || "";
    mMeta.textContent = `Project / 0${i + 1}${p.status === "soon" ? " — In development" : ""}`;
    mFootmark.textContent = `${p.title} — ${p.status === "soon" ? "In development" : "Live"}`;
    if (p.featured) {
      mImgWrap.style.display = "none";
      mGazette.hidden = false;
      mGazette.innerHTML = `
        <div class="sg-cap"><span class="sg-lbl">The Frontiers Gazette</span><span class="sg-sub">${gazetteState.editions.length} editions and counting · click a cover to read</span></div>
        <div class="sg-grid">${gazetteState.editions.map((g) => `
          <figure class="sg-page">
            <a href="${g.link}" target="_blank" rel="noopener" data-cursor="↗" aria-label="Read edition ${g.edition} — ${g.cap}">
              <span class="sg-ed">Edition <b>${g.edition}</b></span>
              <img src="${g.src}" alt="${g.alt}" loading="lazy" />
              <figcaption>${g.cap}${g.pubMonthYear ? ` <span class="sg-date">— ${g.pubMonthYear}</span>` : ""}</figcaption>
            </a>
          </figure>`).join("")}</div>`;
      bindCursorHover(mGazette);
    } else {
      mImgWrap.style.display = "";
      mGazette.hidden = true;
      mGazette.innerHTML = "";
      if (p.img2) {
        const imgs = [p.img, p.img2];
        mImgWrap.className = "sheet-img-carousel";
        mImgWrap.innerHTML = `
          <div class="sic-track">
            ${imgs.map((src, n) => `<img src="${src}" alt="${p.title} — screenshot ${n + 1}" />`).join("")}
          </div>
          <div class="sic-dots">
            ${imgs.map((_, n) => `<span class="sic-dot${n === 0 ? " active" : ""}"></span>`).join("")}
          </div>`;
        const track = mImgWrap.querySelector(".sic-track");
        const dots = [...mImgWrap.querySelectorAll(".sic-dot")];
        let cur = 0;
        const goTo = (idx) => {
          cur = idx;
          track.style.transform = `translateX(-${cur * 100}%)`;
          dots.forEach((d, n) => d.classList.toggle("active", n === cur));
        };
        dots.forEach((d, n) => d.addEventListener("click", () => { clearCarousel(); goTo(n); }));
        carouselInterval = setInterval(() => goTo((cur + 1) % imgs.length), 4000);
      } else if (p.img) {
        mImgWrap.className = "sheet-img";
        mImgWrap.innerHTML = `<div class="ph" data-has-img="1" style="background-image: url('${p.img}')"><span class="corner tl"></span><span class="corner"></span></div>`;
      } else {
        mImgWrap.className = "sheet-img";
        mImgWrap.innerHTML = `<div class="ph" data-ph="${p.ph}"><span class="corner tl"></span><span class="corner"></span></div>`;
      }
    }

    mSpec.innerHTML = (p.facts || []).map(([k, v]) =>
      `<div class="sp"><span class="sp-k">${k}</span><span class="sp-v">${v}</span></div>`).join("");

    let body = "";
    (p.sections || []).forEach(([label, head, text]) => {
      body += `<section class="ds-block"><span class="ds-label">${label}</span><div class="ds-content"><h3 class="ds-head">${head}</h3><p class="ds-body">${text}</p></div></section>`;
    });
    (p.blocks || []).forEach(([label, head, text], n) => {
      body += `<section class="ds-block"><span class="ds-label"><span class="ds-num">0${n + 1}</span> ${label}</span><div class="ds-content"><h3 class="ds-head">${head}</h3><p class="ds-body">${text}</p></div></section>`;
    });
    if (p.build) {
      const [bHead, bLead, rows] = p.build;
      const ledger = rows.map(([k, v]) =>
        `<div class="st-row"><dt>${k}</dt><dd>${v}</dd></div>`).join("");
      body += `<section class="ds-block"><span class="ds-label">Build</span><div class="ds-content"><h3 class="ds-head">${bHead}</h3><p class="ds-body">${bLead}</p><dl class="ds-stack">${ledger}</dl></div></section>`;
    }
    mBody.innerHTML = body;

    // The featured/live project links out to its live build; all others lock.
    if (p.live && p.link && p.link !== "#") {
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
    clearCarousel();
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
