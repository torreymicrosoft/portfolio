/* ============================================================
   Torrey — Portfolio V1  ·  main.js
   All content is data-driven. Edit the arrays below to update
   the site — no build step, just `git push` to redeploy.
   ============================================================ */

/* ---------- EDIT ME: AI PROJECTS ---------- */
const PROJECTS = [
  {
    icon: "🤖",
    title: "Bicep AI Copilot",
    year: "2025",
    category: "LLM Apps",
    desc: "An LLM-powered assistant that generates and reviews Azure Bicep infrastructure-as-code from natural language, with guardrails for governance.",
    tags: ["LLM", "Azure", "Bicep", "TypeScript"],
    links: [{ label: "Case study", href: "#" }, { label: "Demo", href: "#" }],
  },
  {
    icon: "🧠",
    title: "Edge Vision Inference Kit",
    year: "2024",
    category: "Hardware + AI",
    desc: "On-device computer-vision pipeline for microcontrollers — quantized models running real-time inference on constrained hardware.",
    tags: ["Embedded", "TinyML", "C", "ONNX"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    icon: "💬",
    title: "DevRel Insights Agent",
    year: "2025",
    category: "LLM Apps",
    desc: "A RAG agent that mines community questions across YouTube, GitHub, and forums to surface product gaps and content ideas for the dev-advocacy team.",
    tags: ["RAG", "Python", "Vector DB", "LLM"],
    links: [{ label: "Case study", href: "#" }],
  },
  {
    icon: "⚙️",
    title: "Firmware Test Copilot",
    year: "2024",
    category: "Hardware + AI",
    desc: "AI-assisted test-generation tool that reads hardware datasheets and emits HIL test scaffolding, cutting bring-up time for new boards.",
    tags: ["Embedded", "LLM", "Python"],
    links: [{ label: "Write-up", href: "#" }],
  },
  {
    icon: "📊",
    title: "Prompt Eval Harness",
    year: "2025",
    category: "Tooling",
    desc: "Open-source framework to A/B test prompts and models with reproducible scoring, latency, and cost dashboards for product decisions.",
    tags: ["Evals", "TypeScript", "OSS"],
    links: [{ label: "GitHub", href: "#" }, { label: "Docs", href: "#" }],
  },
  {
    icon: "🎙️",
    title: "Talk-to-Docs Voice Assistant",
    year: "2023",
    category: "LLM Apps",
    desc: "Voice-first documentation assistant pairing speech-to-text with retrieval so developers can ask their docs questions hands-free.",
    tags: ["Speech", "RAG", "React"],
    links: [{ label: "Demo", href: "#" }],
  },
];

/* ---------- EDIT ME: EXPERIENCE TIMELINE ---------- */
const EXPERIENCE = [
  {
    role: "Developer Evangelist & Product Manager",
    org: "Azure",
    date: "2021 — Present",
    desc: "Own product direction and developer advocacy for infrastructure-as-code and AI tooling. Build demos, ship features, and grow a developer community through video, talks, and open source.",
  },
  {
    role: "Product Manager, Developer Tools",
    org: "Cloud Platform",
    date: "2018 — 2021",
    desc: "Led roadmap for developer-facing services; partnered with engineering to launch features used by thousands of teams.",
  },
  {
    role: "Firmware / Systems Engineer",
    org: "Hardware Co.",
    date: "2012 — 2018",
    desc: "Board bring-up, firmware, and systems integration for connected devices — the hardware foundation behind my product instincts.",
  },
];

/* ---------- EDIT ME: SPEAKING & CONTENT ---------- */
const SPEAKING = [
  {
    ico: "📺",
    title: "Azure Bicep on YouTube",
    desc: "Host of a technical channel teaching infrastructure-as-code and Azure governance to a growing developer audience.",
    cta: { label: "Watch", href: "#" },
  },
  {
    ico: "🎤",
    title: "Conference Talks",
    desc: "Speaker on developer experience, applied AI, and bridging hardware with the cloud at community and industry events.",
    cta: { label: "See talks", href: "#" },
  },
  {
    ico: "✍️",
    title: "Writing & Tutorials",
    desc: "Long-form guides and tutorials that turn complex platform work into approachable, hands-on developer content.",
    cta: { label: "Read", href: "#" },
  },
];

/* ---------- EDIT ME: CONTACT LINKS ---------- */
const CONTACT = [
  { label: "Email", href: "mailto:you@example.com", ico: "✉️" },
  { label: "LinkedIn", href: "#", ico: "in" },
  { label: "GitHub", href: "#", ico: "GH" },
  { label: "YouTube", href: "#", ico: "▶" },
];

/* ============================================================
   Rendering + interactions (no need to edit below)
   ============================================================ */
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ----- Projects + filters ----- */
  const grid = $("#projects-grid");
  const filterBar = $("#filters");
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  let active = "All";

  function renderProjects() {
    grid.innerHTML = "";
    PROJECTS.filter((p) => active === "All" || p.category === active).forEach((p) => {
      const card = el("article", "project reveal");
      const links = p.links
        .map((l) => `<a href="${l.href}">${l.label} <span aria-hidden="true">→</span></a>`)
        .join("");
      card.innerHTML = `
        <div class="project__top">
          <div class="project__icon" aria-hidden="true">${p.icon}</div>
          <span class="project__year">${p.year}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <div class="project__links">${links}</div>`;
      grid.appendChild(card);
    });
    observeReveals();
  }

  categories.forEach((cat) => {
    const b = el("button", cat === active ? "active" : "", cat);
    b.setAttribute("role", "tab");
    b.addEventListener("click", () => {
      active = cat;
      filterBar.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      renderProjects();
    });
    filterBar.appendChild(b);
  });

  /* ----- Timeline ----- */
  const tl = $("#timeline");
  EXPERIENCE.forEach((e) => {
    const li = el("li", "reveal");
    li.innerHTML = `
      <div class="t-role">${e.role} · <span class="t-org">${e.org}</span></div>
      <span class="t-date">${e.date}</span>
      <p class="t-desc">${e.desc}</p>`;
    tl.appendChild(li);
  });

  /* ----- Speaking ----- */
  const sg = $("#speaking-grid");
  SPEAKING.forEach((s) => {
    const c = el("article", "card reveal");
    c.innerHTML = `
      <div class="card__ico" aria-hidden="true">${s.ico}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="${s.cta.href}">${s.cta.label} →</a>`;
    sg.appendChild(c);
  });

  /* ----- Contact ----- */
  const cl = $("#contact-links");
  CONTACT.forEach((c) => {
    const a = el("a", null, `<span aria-hidden="true">${c.ico}</span> ${c.label}`);
    a.href = c.href;
    if (c.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    cl.appendChild(a);
  });

  /* ----- Theme toggle (persisted) ----- */
  const root = document.documentElement;
  const toggle = $("#themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ----- Mobile nav ----- */
  const burger = $("#burger");
  const links = $(".nav__links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  /* ----- Nav shadow on scroll ----- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Reveal on scroll ----- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((n) => n.classList.add("visible"));
      return;
    }
    io = io || new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach((n) => io.observe(n));
  }

  /* ----- Year ----- */
  $("#year").textContent = new Date().getFullYear();

  renderProjects();
  document.querySelectorAll(".section").forEach((s) => s.classList.add("reveal"));
  observeReveals();
})();
