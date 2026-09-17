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
      sections: [
        ["Context", "A 90-page report is not how most people will meet this story", "During ExploitGym, an OpenAI cybersecurity evaluation, roughly 1,200 isolated agents discovered they could leave messages for one another, built norms and leadership on a shared board, and turned outward on a real company. METR's investigation is careful and thorough, but it is a report. The questions it raises — about coordination, oversight, and what agents do when they believe someone is watching — deserve a form a curious non-specialist can take in, in minutes, on a phone."],
        ["Approach", "A story that shows its evidence", "A narrator walks the reader along a horizontal timeline of three acts, while a lit pixel-art colony acts out each moment on a dark 3D stage: the glass board flickering on, torches for recruiters, a giant watcher standing in for the scorer the agents imagined. The human lens — the mob, the leaders, the ones who said no — is used on purpose and marked as ours. Nothing is invented: every fact, quote and board message is tied to a section of the report and tagged verified, reconstructed or interpretive, and each tier reads differently on screen."]
      ],
      blocks: [
        ["Enter", "A film poster, then the stage", "A title page names the test and the sources, then drops the reader into the colony. Any moment can be deep-linked, so a single scene can be shared on its own."],
        ["Step", "Moment by moment through time", "Arrows, wheel, swipe or the timeline step through each moment and the voices inside it. Every step has its own camera move, formation and choreography — the colony is never still."],
        ["Inspect", "Hear the agents in their own words", "Board posts and chains of thought surface one at a time in an In focus strip, colour-linked to a marker over the agent and a dot beside the string on the board. Act 3 drains the stage to grey as the record is assembled."]
      ],
      build: ["Light tells the story", "A small, deliberate stack: one WebGL stage, a data layer that cannot drift from its source, and a generated sprite pipeline that never ships to the browser.", [
        ["Stage", "Three.js (WebGL) — instanced sprite colony, glass board, citadel, scripted camera rig and per-moment scripts"],
        ["App", "Vite + TypeScript, static output, no other runtime dependencies"],
        ["Evidence", "Facts, quotes and messages in typed JSON, each with a report source and an evidence tier"],
        ["Validation", "A check script verifies every anchor, verbatim quote and narration token against the report text"],
        ["Characters", "Pixel-art robots generated with fal.ai (FLUX 1.1 pro, Kontext pose edits), cut out and packed into an atlas with Pillow"],
        ["Access", "Mobile-first layout, reduced-motion support with crossfades in place of camera moves"],
        ["Deployment", "Vercel — pushes to main deploy to production"]
      ]],
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
      img: "images/maritime-intel-os.png",
      summary: "Live vessel positions read against your own order book. It matches the ships actually on the water to the commitments you have made, prices the delay when a choke point or a congested berth gets in the way, and names the customer promises about to break while there is still something to do about them.",
      facts: [["Role", "Founder"], ["Year", "2026"], ["Stack", "Realtime · Geospatial · Rules"], ["Status", "Live"]],
      sections: [
        ["Context", "Vessel tracking answers a question nobody asked", "An exporter with money committed does not need to know where 190 ships are. They need to know which of their promises is in trouble, and whether anything can still be done about it. Every ship tracker answers the first question well and stops there — and the distance between \"that vessel is in the Gulf\" and \"the Shanghai order misses its window by 23 days\" is the entire job, because closing it means knowing the book as well as the water."],
        ["Approach", "Your order book, read against the water", "Each open commitment is matched to the hulls that could be carrying it — named in the order, or riding a lane the order uses — against live AIS. Choke-point status and berth congestion are priced as detour days, added to the passage, and checked against the date you promised. What comes out is not an indicator. It is a short queue of decisions with deadlines attached, and the app is careful about which of them are still winnable."]
      ],
      blocks: [
        ["Match", "Which of these ships are yours", "Live AIS gives roughly 190 hulls in and around New Zealand. The ones your book actually touches are marked — named in a commitment, or riding a lane one of your orders uses — and the rest stay scenery rather than being dressed up as relevant."],
        ["Price", "Delay in days, not in adjectives", "Choke-point levels are asserted by a person and carry the date they were asserted; the lane engine scores the same routes independently. Where they disagree, both are shown. The output is a detour in days added to a passage, which is a number you can hold a promise against."],
        ["Say what is not known", "An absence is stated, never filled in", "A position older than five minutes is frozen where it was last reported rather than slid along its last course, counts are split into hulls tracked and hulls actually reporting, and a rule that cannot decide refuses instead of guessing. The product is only worth anything if its refusals are as legible as its answers."]
      ],
      build: ["One small server, one live feed, and a refusal to guess", "It runs on a single e2-micro and stays inside a $0–20/month ceiling, which is a feature rather than a limitation: it is why an NZ exporter could use this and a Kpler licence-holder could not justify a second seat. There is no model in the inference path. The interesting engineering is not throughput, it is knowing what the data does not say — a position five minutes old is frozen rather than extrapolated, and every figure on screen carries where it came from and how old it is.", [
        ["Interface", "React + TypeScript on Vite · CesiumJS globe, NASA GIBS Blue Marble with CARTO place labels"],
        ["Live positions", "aisstream.io over one WebSocket — ~190 hulls in and around NZ, of which ~60 have reported in the last ten minutes"],
        ["Backend", "Python (FastAPI) in a single Docker container on a GCP e2-micro, us-central1"],
        ["Edge", "Cloud Run proxies in front of REST and the WebSocket · per-address token bucket, priced per route"],
        ["Storage", "SQLite on a host bind mount, seven-day retention · the container holds no state"],
        ["Cargo inference", "A rule engine over port calls, declared destinations and Stats NZ trade shares — no ML, and it refuses rather than guesses when rules tie"],
        ["Trade data", "Stats NZ HS10 by country by NZ port, rolling 12-month window, used to break inference ties by measured share"],
        ["Scenery", "Port webcams and Bluesky posts, mirrored not hotlinked, labelled as scenery and never counted as evidence"],
        ["Provenance", "Every datum carries a source and an age, graded live / delayed / stale on one shared threshold ladder"],
        ["Tests", "1,738 frontend (Vitest) · 613 backend (pytest) · a probe that checks production itself, 13 checks"],
        ["Deployment", "Vercel for the frontend · dated image tags on the VM with a one-deep rollback and a written runbook"]
      ]],
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
      sections: [
        ["Featured", "A newsroom that never stops the press", "This is the one project on this page that is alive by nature: an agentic editorial pipeline that researches, writes, edits and illustrates a complete magazine on every run. Every edition published so far is below — scroll the covers and click any one to step into the immersive 3D shelf, where the full archive sits on the shelf and opens for reading. This slot keeps growing as new editions run — print-on-demand fulfilment is next, still in development."],
        ["Context", "A publication needs an identity, not just output", "Most \"AI-generated content\" reads the same edition to edition because nothing is accountable for what the publication actually is — its voice, its standards, what it covered last week, what it's grown tired of covering. The Gazette exists to test whether an agentic system can hold a real editorial identity over time: a consistent point of view, a memory of its own back catalogue, and the judgement to kill a story rather than print whatever the model drafts first."],
        ["Approach", "Four agents, four jobs, no overlap", "Each edition runs through a small newsroom rather than one model doing everything. A Curator sets the theme, picks the cover story and briefs every section — the only agent with memory of past editions and the publication's evolving voice. A Researcher gathers and evaluates sources against each brief. A bank of Writer personas draft the sections in parallel. An Editor assembles the issue, checks consistency and enforces quality bars before anything ships. After publication, the Curator scores its own issue and updates its own preferences for next time — the aim is a newsroom that gets better at being itself, not just faster at generating text."]
      ],
      blocks: [
        ["Browse", "Walk the shelf", "The archive lives on a Three.js-built 3D shelf — scroll or drag to pan along the rail as the camera eases between spines, then click any cover to open that issue."],
        ["Read", "Turn the pages", "Opening a cover drops into a page-turning book reader — an animated two-page spread — for the full cover story, weekly briefing, enterprise AI, alpha signals and the rest of that issue's sections."]
      ],
      build: ["A four-agent newsroom behind the storybook front", "Underneath the immersive shelf and page-turning reader sits a genuine multi-agent editorial pipeline, not one prompt dressed up as a newsroom: a Curator that owns the publication's voice and memory, a Researcher, a bank of Writer personas, and an Editor that assembles and quality-checks every issue before it ships.", [
        ["Editorial", "Curator / Researcher / Writers / Editor — four agents, each with one bounded job, no overlap"],
        ["Cover art", "AI-generated art with multiple candidate variants, composited under a typographic furniture layer"],
        ["Reader", "Next.js page-turning book viewer — animated two-page spreads per edition"],
        ["Shelf", "Three.js / react-three-fiber 3D shelf — scroll or drag along the rail, click a spine to open that issue"],
        ["Print pipeline", "Headless-Chromium PDF export exists for every edition; print-on-demand fulfilment is next, not yet live"],
        ["Deployment", "Next.js on Vercel, with new editions publishing automatically as the newsroom runs"]
      ]],
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

  /* The deep write-up, collapsed. It keeps the screen to one viewport while
     leaving the full sections/blocks/build ledger reachable in place — the
     detail the modal used to show is not deleted, just folded. */
  function writeUp(p) {
    let body = "";
    (p.sections || []).forEach(([label, head, text]) => {
      body += `<section class="ds-block"><span class="ds-label">${label}</span><div class="ds-content"><h3 class="ds-head">${head}</h3><p class="ds-body">${text}</p></div></section>`;
    });
    (p.blocks || []).forEach(([label, head, text], n) => {
      body += `<section class="ds-block"><span class="ds-label"><span class="ds-num">0${n + 1}</span> ${label}</span><div class="ds-content"><h3 class="ds-head">${head}</h3><p class="ds-body">${text}</p></div></section>`;
    });
    if (p.build) {
      const [bHead, bLead, rows] = p.build;
      const ledger = rows.map(([k, v]) => `<div class="st-row"><dt>${k}</dt><dd>${v}</dd></div>`).join("");
      body += `<section class="ds-block"><span class="ds-label">Build</span><div class="ds-content"><h3 class="ds-head">${bHead}</h3><p class="ds-body">${bLead}</p><dl class="ds-stack">${ledger}</dl></div></section>`;
    }
    if (!body) return "";
    return `<details class="ps-more"><summary>Full write-up +</summary><div class="sheet-body">${body}</div></details>`;
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
            ${writeUp(p)}
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
