/* ============================================================
   Torrey — Portfolio V1  ·  main.js
   All content is data-driven. Edit the arrays below to update
   the site — no build step, just `git push` to redeploy.
   ============================================================ */

/* ---------- EDIT ME: AI PROJECTS ---------- */
const PROJECTS = [
  {
    icon: "🤖",
    title: "Bicep + Copilot (Agent Mode)",
    year: "2026",
    category: "AI & LLM",
    desc: "AI-assisted infrastructure-as-code — Azure Verified Modules generation and a live Copilot agent-mode workflow that authors and reviews Bicep. Demoed live to a 3,500+ developer audience.",
    tags: ["LLM", "Copilot", "Bicep", "IaC"],
    links: [{ label: "Learn Bicep", href: "https://learn.microsoft.com/azure/azure-resource-manager/bicep/" }],
  },
  {
    icon: "🧠",
    title: "Azure Percept DK — Edge AI DevKit",
    year: "2021",
    category: "Edge & Hardware",
    desc: "Deployable Edge-AI developer kit with vision and audio, paired with Azure Percept Studio. Drove it from concept (P0) to general availability as launch-team PM.",
    tags: ["Edge AI", "Computer Vision", "Azure IoT", "Hardware"],
    links: [],
  },
  {
    icon: "🎓",
    title: "UC Berkeley MIDS — Applied AI",
    year: "2025",
    category: "AI & LLM",
    desc: "Graduate portfolio from a Master's in Information & Data Science: computer vision, NLP, and generative-AI projects built in Python. (Swap in your capstone specifics + links.)",
    tags: ["Computer Vision", "NLP", "Gen-AI", "Python"],
    links: [],
  },
  {
    icon: "🛠️",
    title: "IoT Config Tool V2",
    year: "2022",
    category: "Edge & Hardware",
    desc: "Second-generation configuration and provisioning tool for edge devices — owned PRDs, GTM, telemetry, and partner/ecosystem research end to end.",
    tags: ["Edge", "Provisioning", "Telemetry"],
    links: [],
  },
  {
    icon: "☁️",
    title: "Azure Arc — Site Manager",
    year: "2023",
    category: "Cloud & DevOps",
    desc: "Lead PM on a CI/CD- and security-focused hybrid cloud product; owned UX research across 50+ enterprise customers and drove the end-to-end product launch.",
    tags: ["Azure Arc", "CI/CD", "Security", "Hybrid"],
    links: [],
  },
  {
    icon: "📦",
    title: "Deployment Stacks & IaC CI/CD",
    year: "2026",
    category: "Cloud & DevOps",
    desc: "Product work on Azure deployment stacks, what-if / snapshots, IaC CI/CD, and the Azure Landing Zone (ALZ) accelerator — the backbone of modern Azure delivery.",
    tags: ["Bicep", "Deployment Stacks", "ALZ", "DevOps"],
    links: [{ label: "Learn", href: "https://learn.microsoft.com/azure/azure-resource-manager/bicep/deployment-stacks" }],
  },
];

/* ---------- EDIT ME: EXPERIENCE TIMELINE ---------- */
const EXPERIENCE = [
  {
    role: "Product Manager — Bicep & Deployments",
    org: "Microsoft · Azure Core",
    date: "2020 – Present",
    desc: "Drive Bicep and Azure deployment experiences: deployment stacks, AVM + Copilot, IaC CI/CD, and the ALZ accelerator. Evangelize IaC at Azure Infra Summit 2026 and the PowerShell + DevOps Global Summit — including a live Copilot agent-mode demo to a 3,500+ developer audience.",
  },
  {
    role: "Program Manager — Xbox Hardware",
    org: "Microsoft · Xbox",
    date: "Microsoft rotation",
    desc: "Shipped 15+ customization programs on time and on budget with cost reductions. Led an exec-sponsored project across 10+ cross-functional teams to improve accessory manufacturing, and onboarded new TPMs in Xbox China.",
  },
  {
    role: "Product Manager — Azure Arc",
    org: "Microsoft · Azure Arc",
    date: "Microsoft rotation",
    desc: "Lead PM on a Senior-level CI/CD & security hybrid-cloud product from PRD through funding, POC, and MVP. Owned UX/UI research for 50+ enterprise customers and launched Azure Arc Site Manager.",
  },
  {
    role: "Product Manager — Azure Light Edge",
    org: "Microsoft · Edge",
    date: "Microsoft rotation",
    desc: "Owned Azure Percept DK and the IoT Config Tool V2 across PRDs, specs, GTM, and telemetry. Later PM'd the retirement of Azure Percept DK, Audio, and Studio as a subject-matter expert.",
  },
  {
    role: "Program Manager — Azure Edge Devices",
    org: "Microsoft · Edge",
    date: "Microsoft rotation",
    desc: "Launch team for Azure Percept DK — a deployable Edge-AI dev kit — from concept (P0) to GA. Ran ~5 hardware/software projects through EV/DV/PV/MP/NPI, with 17+ localizations across 25+ countries.",
  },
  {
    role: "M.S., Information & Data Science",
    org: "UC Berkeley",
    date: "2021 – 2025 · 3.83 GPA",
    desc: "Graduate study in applied AI/ML — computer vision, NLP, generative AI, and data engineering.",
  },
  {
    role: "B.S.B.A., Supply Chain Management",
    org: "University of Pittsburgh",
    date: "2017 – 2020 · Dean's List",
    desc: "Business degree with partial studies in computer and information science; founded the Google Developer Student Club at Pitt.",
  },
];

/* ---------- EDIT ME: SPEAKING & CONTENT ---------- */
const SPEAKING = [
  {
    ico: "🎤",
    title: "PowerShell + DevOps Global Summit",
    desc: "Live Copilot agent-mode demo plus deep dives on deployment stacks and snapshots vs. what-if — presented to a 3,500+ developer audience.",
    cta: { label: "About the summit", href: "https://powershelldevopsglobalsummit.org/" },
  },
  {
    ico: "🗣️",
    title: "Azure Infra Summit 2026",
    desc: "Session on modern Azure deployments — deployment stacks, what-if, and safe rollout patterns for infrastructure-as-code.",
    cta: { label: "Learn more", href: "#" },
  },
  {
    ico: "📺",
    title: "Bicep Dev Evangelism",
    desc: "Ongoing community content and demos teaching Azure Bicep, governance, and AI-assisted IaC to developers.",
    cta: { label: "Explore Bicep", href: "https://github.com/Azure/bicep" },
  },
];

/* ---------- EDIT ME: CONTACT LINKS ---------- */
const CONTACT = [
  { label: "Email", href: "mailto:torrey@berkeley.edu", ico: "✉️" },
  { label: "LinkedIn", href: "https://linkedin.com/in/torrey-tnt", ico: "in" },
  { label: "GitHub", href: "https://github.com/torreymicrosoft", ico: "GH" },
  { label: "Resume", href: "assets/resume.pdf", ico: "📄" },
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
