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
      problem: "Planning training across a large enterprise workforce is a brutal combinatorial puzzle — competing shift patterns, availability windows, role coverage and learning requirements all collide. Done by hand it eats weeks of a planner's time, and the schedule it produces is still educated guesswork that leaves readiness on the table.",
      solution: "The Scheduler reframes the whole mess as a set of hard and soft constraints and hands it to Google's CP-SAT constraint solver. You generate a synthetic workforce, watch the chaotic unoptimised baseline, then run the solver — it returns a mathematically optimal schedule in seconds, with a measurable jump in readiness score and a clear optimisation delta against the manual starting point.",
      how: [
        ["Create", "Configure synthetic workforce size, shift patterns, time windows and learning needs."],
        ["Simulate", "Generate the messy, unoptimised schedule a manual planner would actually start from."],
        ["Optimise", "CP-SAT searches the constraint space and returns the best feasible schedule — reporting solve time, readiness score and the delta vs. baseline."]
      ],
      facts: [["Role", "Design + Build"], ["Year", "2025"], ["Stack", "Next.js · CP-SAT"], ["Status", "Live"]],
      link: "https://workforce-readiness-simulator.vercel.app/app"
    },
    {
      title: "AI Sharesies Stock Picker",
      tags: "agentic AI · equities · NZX / ASX",
      status: "live",
      ph: "AI committee — analysis view",
      img: "images/ai-stock-picker.png",
      tagline: "An AI investment committee doing the research retail investors can't.",
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
      title: "Maritime Intelligence OS",
      tags: "geospatial · forecasting · supply chain",
      status: "live",
      ph: "maritime map — signal layer",
      img: "images/maritime-intel-os.png",
      tagline: "Turning the noise of global shipping into early economic signal.",
      problem: "The world's oceans throw off a relentless stream of vessel telemetry, but raw AIS tracks and port movements are nearly impossible to read as a coherent picture. The geopolitical and macroeconomic signals hidden in that noise tend to reach decision-makers far too late to be useful.",
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
      title: "Project Nexus",
      tags: "concept · AI · vision",
      status: "soon",
      ph: "stealth — coming soon",
      tagline: "Next-generation AI product in stealth.",
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

  /* ---------- CLOCK (Auckland) ---------- */
  const clock = document.getElementById("clock");
  const clock2 = document.getElementById("clock2");
  function updateClock() {
    try {
      const s = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Pacific/Auckland", hour: "2-digit", minute: "2-digit",
        second: "2-digit", hour12: false
      }).format(new Date());
      const txt = s + " AKL";
      clock.textContent = txt;
      clock2.textContent = txt;
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
    let w, h, dpr, cells = [], spacing = 46;
    let pointer = { x: -9999, y: -9999, active: false };

    function ink() {
      return getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#111";
    }
    function accent() {
      return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#C6F833";
    }

    function build() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cells = [];
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++)
          cells.push({ x: x * spacing + spacing / 2, y: y * spacing + spacing / 2, a: 0, ta: 0 });
    }

    let t = 0;
    function draw() {
      t += 0.006;
      ctx.clearRect(0, 0, w, h);
      const col = ink(), acc = accent();
      const len = 13, R = 220;
      for (const c of cells) {
        const dx = pointer.x - c.x, dy = pointer.y - c.y;
        const dist = Math.hypot(dx, dy);
        // base angle: slow flowing noise; near pointer: orient toward pointer
        let ang = Math.sin((c.x * 0.01) + t) * 0.6 + Math.cos((c.y * 0.012) - t) * 0.6;
        let near = 0;
        if (pointer.active && dist < R) {
          near = 1 - dist / R;
          const toPointer = Math.atan2(dy, dx);
          ang = ang * (1 - near) + toPointer * near;
        }
        c.ta = pointer.active ? Math.max(0.12, near) : 0.12;
        c.a += (c.ta - c.a) * 0.08;
        const l = len * (0.6 + near * 1.1);
        const ex = c.x + Math.cos(ang) * l, ey = c.y + Math.sin(ang) * l;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = near > 0.55 ? acc : col;
        ctx.globalAlpha = (near > 0.55 ? 0.9 : 0.22) * (0.4 + c.a);
        ctx.lineWidth = near > 0.55 ? 1.6 : 1;
        ctx.stroke();
        // node dot near pointer
        if (near > 0.3) {
          ctx.beginPath();
          ctx.arc(c.x, c.y, 1.4 + near * 1.6, 0, Math.PI * 2);
          ctx.fillStyle = acc; ctx.globalAlpha = near;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    const rect = () => cv.getBoundingClientRect();
    window.addEventListener("mousemove", (e) => {
      const r = rect();
      if (e.clientY <= r.bottom) { pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.active = true; }
      else pointer.active = false;
    });
    window.addEventListener("mouseleave", () => pointer.active = false);
    cv.addEventListener("touchmove", (e) => {
      const r = rect(), tch = e.touches[0];
      pointer.x = tch.clientX - r.left; pointer.y = tch.clientY - r.top; pointer.active = true;
    }, { passive: true });

    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(build, 150); });
    build();
    if (!reduceMotion) draw(); else { /* static single frame */ pointer.active = false; draw(); }
  })();

  /* ---------- PROJECT HOVER PREVIEW ---------- */
  if (finePointer) {
    const preview = document.getElementById("preview");
    const pph = preview.querySelector(".ph");
    let px = 0, py = 0, tx = 0, ty = 0, raf = null;
    function loop() {
      px += (tx - px) * 0.16; py += (ty - py) * 0.16;
      preview.style.left = px + "px"; preview.style.top = py + "px";
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; });

    projEls.forEach((el) => {
      const i = +el.dataset.i;
      el.addEventListener("mouseenter", () => {
        list.classList.add("hovering");
        projEls.forEach((p) => p.classList.toggle("active", p === el));
        const pj = PROJECTS[i];
        if (pj.img) {
          pph.setAttribute("data-has-img", "1");
          pph.style.backgroundImage = `url("${pj.img}")`;
        } else {
          pph.removeAttribute("data-has-img");
          pph.style.backgroundImage = "";
          pph.setAttribute("data-ph", pj.ph);
        }
        preview.classList.add("show");
        if (!raf) loop();
      });
      el.addEventListener("mouseleave", () => {
        if (!el.matches(":hover")) { preview.classList.remove("show"); }
      });
    });
    list.addEventListener("mouseleave", () => {
      list.classList.remove("hovering");
      projEls.forEach((p) => p.classList.remove("active"));
      preview.classList.remove("show");
      cancelAnimationFrame(raf); raf = null;
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
    mVisit.style.display = (p.status === "soon" || p.link === "#") ? "none" : "inline-flex";
    mVisit.href = p.link;

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
