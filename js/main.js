/* ============================================================
   Torrey Trahanovsky, Portfolio  ·  main.js
   Content is data-driven. Edit the arrays below, then push,
   and the site auto-deploys to Azure. No build step.
   ============================================================ */

/* ---------- EDIT ME: PROJECTS ---------- */
const PROJECTS = [
  {
    icon: "🎓",
    title: "AI Career Advisor",
    year: "2025",
    category: "AI & ML",
    desc: "My UC Berkeley MIDS final capstone (Spring 2025): a generative-AI \"AI Career Advisor,\" the culminating project across my applied-ML, NLP, and data-engineering coursework.",
    tags: ["Gen-AI", "NLP", "Python", "Capstone"],
    links: [],
  },
  {
    icon: "🤖",
    title: "AVM + Copilot (Agent Mode)",
    year: "2026",
    category: "AI & ML",
    desc: "AI-assisted infrastructure-as-code: authoring secure, well-architected Azure Verified Modules with a live GitHub Copilot agent-mode workflow. Presented at Azure Infra Summit 2026.",
    tags: ["LLM", "Copilot", "Bicep", "AVM"],
    links: [],
  },
  {
    icon: "🧬",
    title: "GAN Research at Microsoft Boston",
    year: "2019 to 2020",
    category: "AI & ML",
    desc: "A 10-week applied-ML project with Microsoft Boston PhD researchers, building and studying Generative Adversarial Networks (GANs) during my time as a Microsoft Student Partner.",
    tags: ["GANs", "Deep Learning", "Research"],
    links: [],
  },
  {
    icon: "🧠",
    title: "Azure Percept DK, Edge AI DevKit",
    year: "2021",
    category: "Edge & Hardware",
    desc: "Deployable Edge-AI developer kit with vision and audio, paired with Azure Percept Studio. Drove it from concept (P0) to GA, announced at Microsoft Ignite.",
    tags: ["Edge AI", "Computer Vision", "Azure IoT", "Hardware"],
    links: [],
  },
  {
    icon: "🛡️",
    title: "Azure Light Edge, Secure Edge OS",
    year: "2020 to 2024",
    category: "Edge & Hardware",
    desc: "Operating systems, device imaging, Kubernetes, and Secure Core security certifications for Linux and Windows on constrained edge hardware.",
    tags: ["Kubernetes", "Linux", "Secure Core", "Edge"],
    links: [],
  },
  {
    icon: "🛠️",
    title: "IoT Config Tool V2",
    year: "2020 to 2024",
    category: "Edge & Hardware",
    desc: "Second-generation configuration and provisioning experience for edge devices. Owned PRDs, GTM, telemetry, and partner and ecosystem research end to end.",
    tags: ["Edge", "Provisioning", "Telemetry"],
    links: [],
  },
  {
    icon: "📦",
    title: "Deployment Stacks & IaC CI/CD",
    year: "2026",
    category: "Cloud & DevOps",
    desc: "Product work on Azure deployment stacks, what-if and snapshots, IaC CI/CD, and the Azure Landing Zone (ALZ) accelerator: the backbone of modern Azure delivery.",
    tags: ["Bicep", "Deployment Stacks", "ALZ", "DevOps"],
    links: [],
  },
  {
    icon: "☁️",
    title: "Azure Arc, Adaptive Cloud",
    year: "2020 to 2024",
    category: "Cloud & DevOps",
    desc: "Edge-focused security and CI/CD experiences across Adaptive Cloud (Arc). Full lifecycle from PRD through funding, POC, and MVP for 50+ enterprise customers.",
    tags: ["Azure Arc", "CI/CD", "Security", "Hybrid"],
    links: [],
  },
];

/* ---------- EDIT ME: EXPERIENCE & EDUCATION ---------- */
const EXPERIENCE = [
  {
    role: "Product Manager 2, Bicep & Deployments",
    org: "Microsoft · Azure Core",
    date: "Mar 2026 to Present",
    dur: "5 mos",
    desc: "Drive Bicep and Azure deployment experiences: deployment stacks, AVM + Copilot, IaC CI/CD, and the ALZ accelerator. Evangelize IaC at Azure Infra Summit 2026 and the PowerShell + DevOps Global Summit, including a live Copilot agent-mode demo to a 3,500+ developer audience.",
  },
  {
    role: "Technical Program Manager 2, Xbox",
    org: "Microsoft · Xbox",
    date: "Aug 2024 to Apr 2026",
    dur: "1 yr 9 mos",
    desc: "Xbox Accessories: shipped 15+ customization programs on time and on budget with cost reductions, driving manufacturing, milestone, and reliability improvements across 10+ cross-functional teams.",
  },
  {
    role: "Product Manager 2 & TPM 2, Azure (Arc and Edge)",
    org: "Microsoft · Azure",
    date: "Jul 2020 to Aug 2024",
    dur: "4 yrs 2 mos",
    desc: "Full-lifecycle software, firmware, and hardware program management across Azure Edge Devices (Azure Percept), Azure Light Edge (OS, imaging, Kubernetes, Secure Core), and Adaptive Cloud and Arc (edge security and CI/CD). Launched Percept DK from concept to GA.",
  },
  {
    role: "Microsoft Student Partner",
    org: "Microsoft",
    date: "Oct 2018 to Mar 2020",
    dur: "1 yr 6 mos",
    desc: "Hosted 7+ workshops (50+ attendees each) at CMU, Pitt, and Chatham, and ran a 10-week GAN research project with Microsoft Boston PhD researchers.",
  },
  {
    role: "PM & Innovation Internships",
    org: "Citi (HK) · Google · Ingram Micro",
    date: "2018 to 2019",
    dur: "",
    desc: "Citi Hong Kong TTS summer analyst (sole non-MBA extended a return offer); Google Student Innovator for GCP and G-Suite; Ingram Micro innovation intern who launched a reverse-mentoring program for 20+ senior IT leaders.",
  },
  {
    role: "M.S., Information & Data Science (MIDS)",
    org: "UC Berkeley",
    date: "Aug 2021 to Apr 2025",
    dur: "",
    edu: true,
    desc: "Graduate study in applied AI and ML: Applied Machine Learning, ML at Scale, NLP, Gen-AI, and Data Engineering. Capstone: AI Career Advisor.",
  },
  {
    role: "B.S.B.A., Supply Chain Management",
    org: "University of Pittsburgh",
    date: "Aug 2017 to Apr 2020",
    dur: "Dean's List",
    edu: true,
    desc: "Graduated a year early with partial studies in computer and information science; founded the Google Developer Student Club at Pitt.",
  },
];

/* ---------- EDIT ME: SPEAKING & CONTENT ---------- */
const SPEAKING = [
  {
    ico: "🎤",
    title: "PowerShell + DevOps Global Summit 2026",
    desc: "The Bicep team ran four on-demand sessions: the local-deploy Bicep extension, learning Bicep with AI, deployment stacks, and the state of IaC on Azure.",
    cta: { label: "See on LinkedIn", href: "https://www.linkedin.com/in/torrey-tnt" },
  },
  {
    ico: "🗣️",
    title: "Azure Infra Summit 2026",
    desc: "Five on-demand Bicep sessions: power-user patterns, deployment stacks, AVM + Copilot, IaC CI/CD, the ALZ accelerator, and a live Copilot agent-mode demo.",
    cta: { label: "Bicep: Beyond the Basics", href: "https://www.youtube.com/watch?v=y7G7aXwe6QY" },
  },
  {
    ico: "📺",
    title: "Bicep Community & Content",
    desc: "Ongoing Bicep updates, demos, and developer evangelism, teaching infrastructure-as-code, governance, and AI-assisted workflows.",
    cta: { label: "Azure Bicep on GitHub", href: "https://github.com/Azure/bicep" },
  },
];

/* ---------- EDIT ME: CONTACT ---------- */
const CONTACT = [
  { label: "Email", href: "mailto:torrey@berkeley.edu", ico: "✉️" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/torrey-tnt", ico: "in" },
  { label: "GitHub", href: "https://github.com/torreymicrosoft", ico: "GH" },
  { label: "Resume", href: "assets/resume.pdf", ico: "📄" },
];

/* ---------- Marquee items ---------- */
const MARQUEE = [
  "Azure Bicep", "Deployment Stacks", "GitHub Copilot", "Azure Percept",
  "Edge AI", "Xbox Hardware", "UC Berkeley MIDS", "Generative AI",
  "Kubernetes", "IaC CI/CD", "Developer Evangelism", "Azure Arc",
];

/* ============================================================
   Rendering + interactions (no need to edit below)
   ============================================================ */
(function () {
  const $ = (s, c = document) => c.querySelector(s);
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
        .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label} <span aria-hidden="true">↗</span></a>`)
        .join("");
      card.innerHTML = `
        <div class="project__top">
          <div class="project__icon" aria-hidden="true">${p.icon}</div>
          <span class="project__year">${p.year}</span>
        </div>
        <div>
          <span class="project__cat">${p.category}</span>
          <h3>${p.title}</h3>
        </div>
        <p>${p.desc}</p>
        <div class="project__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        ${links ? `<div class="project__links">${links}</div>` : ""}`;
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
    const li = el("li", "reveal" + (e.edu ? " edu" : ""));
    const dur = e.dur ? ` <span class="sep">·</span> <b>${e.dur}</b>` : "";
    li.innerHTML = `
      <div class="t-role">${e.role}</div>
      <span class="t-date"><span class="t-org">${e.org}</span>, ${e.date}${dur}</span>
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
      <a href="${s.cta.href}" target="_blank" rel="noopener">${s.cta.label} →</a>`;
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

  /* ----- Marquee (duplicated for seamless loop) ----- */
  const mq = $("#marquee");
  mq.innerHTML = [...MARQUEE, ...MARQUEE].map((t) => `<span>${t}</span>`).join("");

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
  const links = $("#navLinks");
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

  /* ----- Nav scroll state + scroll progress + active link ----- */
  const nav = $("#nav");
  const progress = $("#progress");
  const navMap = new Map(
    [...links.querySelectorAll("a")].map((a) => [a.getAttribute("href").slice(1), a])
  );
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navMap.forEach((a) => a.classList.remove("active"));
            const a = navMap.get(e.target.id);
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ----- Stat count-up ----- */
  function animateStat(n) {
    const target = parseFloat(n.dataset.count);
    const suffix = n.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      n.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const statEls = document.querySelectorAll("#stats strong[data-count]");
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animateStat(e.target); so.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    statEls.forEach((s) => so.observe(s));
  } else {
    statEls.forEach((s) => { s.textContent = (+s.dataset.count).toLocaleString("en-US") + (s.dataset.suffix || ""); });
  }

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
