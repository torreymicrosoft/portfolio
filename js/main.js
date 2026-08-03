/* ============================================================
   Torrey Trahanovsky, Portfolio  ·  main.js
   Content is data-driven. Edit the arrays below, then push,
   and the site auto-deploys to Azure. No build step.
   ============================================================ */

/* ---------- EDIT ME: PROJECTS ---------- */
const PROJECTS = [
  {
    icon: "✨",
    title: "This Portfolio, Vibe-Coded with AI",
    year: "2026",
    category: "AI & ML",
    desc: "This very site was vibe-coded with GitHub Copilot in agent mode: a dependency-free static site, prompt-driven from layout to content, versioned with git and auto-deployed to Azure on every push.",
    tags: ["GitHub Copilot", "Agent Mode", "Vibe Coding", "Azure SWA"],
    details: "A meta showcase of AI-assisted building: I directed a GitHub Copilot agent to design, write, and iterate the HTML, CSS, and JavaScript, then shipped it through Azure Static Web Apps CI/CD. It is the same AI-native workflow I bring to infrastructure-as-code, applied to my own portfolio.",
    links: [{ label: "Built with GitHub Copilot", href: "https://github.com/features/copilot" }],
  },
  {
    icon: "🎓",
    title: "AI Career Advisor",
    year: "2025",
    category: "AI & ML",
    desc: "My UC Berkeley MIDS final capstone (Spring 2025): a generative-AI \"AI Career Advisor,\" the culminating project across my applied-ML, NLP, and data-engineering coursework.",
    tags: ["Gen-AI", "NLP", "Python", "Capstone"],
    details: "Built as my Master's capstone, applying the program's Gen-AI, NLP, and data-engineering coursework end to end.",
    links: [],
  },
  {
    icon: "🤖",
    title: "AVM + Copilot (Agent Mode)",
    year: "2026",
    category: "AI & ML",
    desc: "AI-assisted infrastructure-as-code: authoring secure, well-architected Azure Verified Modules with a live GitHub Copilot agent-mode workflow. Presented at Azure Infra Summit 2026.",
    tags: ["LLM", "Copilot", "Bicep", "AVM"],
    details: "Core to my current Bicep PM work: secure-by-default modules with AI assistance, featured across Azure Infra Summit 2026 sessions.",
    links: [{ label: "Bicep: Beyond the Basics", href: "https://www.youtube.com/watch?v=y7G7aXwe6QY" }],
  },
  {
    icon: "🧬",
    title: "GAN Research at Microsoft Boston",
    year: "2019 to 2020",
    category: "AI & ML",
    desc: "A 10-week applied-ML project with Microsoft Boston PhD researchers, building and studying Generative Adversarial Networks (GANs) during my time as a Microsoft Student Partner.",
    tags: ["GANs", "Deep Learning", "Research"],
    details: "Ran through the Advanced Machine Learning Lab, pairing with PhD researchers to build and study GANs. Co-authored a published explainer in Microsoft's Azure engineering publication.",
    links: [{ label: "Read: GANs on Microsoft Medium", href: "https://medium.com/microsoft/generative-adversarial-networks-gans-b92af4bf481d" }],
  },
  {
    icon: "🎮",
    title: "Xbox Special-Edition Controllers",
    year: "2024 to 2026",
    category: "Edge & Hardware",
    desc: "As an Xbox Accessories TPM, I worked on every publicly launched Xbox special-edition and Xbox Design Lab controller from August 2024 onward, driving manufacturing, milestones, and reliability across each program.",
    tags: ["Xbox", "Hardware", "Manufacturing", "Consumer Devices"],
    details: "A sample of public launches I worked on. Links go to the official Xbox Wire announcements.",
    links: [
      { label: "Xbox 25th Anniversary", href: "https://news.xbox.com/en-us/2026/06/07/xbox-25th-anniversary-console-controller-x25-xbox-games-showcase-2026/" },
      { label: "Team Spirit (Design Lab)", href: "https://news.xbox.com/en-us/2026/05/26/xbox-design-lab-team-spirit-wireless-controller/" },
      { label: "Forza Horizon 6", href: "https://news.xbox.com/en-us/2026/04/20/forza-horizon-6-limited-edition-xbox-controller-and-headset/" },
      { label: "Fallout Pip-Boy", href: "https://news.xbox.com/en-us/2025/12/10/fallout-pip-boy-xbox-controller-design-lab/" },
      { label: "SpongeBob Movie", href: "https://news.xbox.com/en-us/2025/11/18/spongebob-movie-limited-edition-xbox-controllers/" },
      { label: "The Outer Worlds 2", href: "https://news.xbox.com/en-us/2025/10/08/the-outer-worlds-2-xbox-design-lab-controllers/" },
      { label: "Ninja Gaiden 4", href: "https://news.xbox.com/en-us/2025/09/24/ninja-gaiden-4-xbox-design-lab-controllers/" },
      { label: "Breaker Series", href: "https://news.xbox.com/en-us/2025/09/03/xbox-wireless-controller-breaker-special-edition-series/" },
      { label: "The Witcher 3 (10th Anniv.)", href: "https://news.xbox.com/en-us/2025/05/22/the-witcher-3-wild-hunt-10th-anniversary-xbox-controllers/" },
      { label: "Pulse Cipher", href: "https://news.xbox.com/en-us/2025/01/21/pulse-cipher-special-edition-controller/" },
      { label: "Squid Game S2", href: "https://news.xbox.com/en-us/2024/12/05/xbox-squid-game-season-2-controllers/" },
      { label: "Juice WRLD (Design Lab)", href: "https://news.xbox.com/en-us/2024/11/27/xbox-juice-wrld-fortnite-controllers/" },
    ],
  },
  {
    icon: "🧠",
    title: "Azure Percept DK, Edge AI DevKit",
    year: "2021",
    category: "Edge & Hardware",
    desc: "Deployable Edge-AI developer kit with vision and audio, paired with Azure Percept Studio. Drove it from concept (P0) to GA, announced at Microsoft Ignite.",
    tags: ["Edge AI", "Computer Vision", "Azure IoT", "Hardware"],
    details: "Launch-team PM across EV, DV, PV, MP, and NPI, with 17+ localizations reaching 25+ countries. Owned an ASUS firmware release end to end, and led the full product lifecycle through end-of-life as subject-matter expert.",
    links: [],
  },
  {
    icon: "🛡️",
    title: "Azure Light Edge, Secure Edge OS",
    year: "2020 to 2024",
    category: "Edge & Hardware",
    desc: "Operating systems, device imaging, Kubernetes, and Secure Core security certifications for Linux and Windows on constrained edge hardware.",
    tags: ["Kubernetes", "Linux", "Secure Core", "Edge"],
    details: "Owned OS, imaging, agentry, and Secure Core security certifications for Linux and Windows on the edge.",
    links: [],
  },
  {
    icon: "🛠️",
    title: "IoT Config Tool V2",
    year: "2020 to 2024",
    category: "Edge & Hardware",
    desc: "Second-generation configuration and provisioning experience for edge devices. Owned PRDs, GTM, telemetry, and partner and ecosystem research end to end.",
    tags: ["Edge", "Provisioning", "Telemetry"],
    details: "Owned PRDs, GTM, telemetry, and partner and ecosystem research end to end for the v2 provisioning experience.",
    links: [],
  },
  {
    icon: "📦",
    title: "Deployment Stacks & IaC CI/CD",
    year: "2026",
    category: "Cloud & DevOps",
    desc: "Product work on Azure deployment stacks, what-if and snapshots, IaC CI/CD, and the Azure Landing Zone (ALZ) accelerator: the backbone of modern Azure delivery.",
    tags: ["Bicep", "Deployment Stacks", "ALZ", "DevOps"],
    details: "Current PM scope on the Azure Deployments team: stacks, what-if and snapshots, IaC CI/CD, and the ALZ accelerator.",
    links: [],
  },
  {
    icon: "☁️",
    title: "Azure Arc, Adaptive Cloud",
    year: "2020 to 2024",
    category: "Cloud & DevOps",
    desc: "Edge-focused security and CI/CD experiences across Adaptive Cloud (Arc). Full lifecycle from PRD through funding, POC, and MVP for 50+ enterprise customers.",
    tags: ["Azure Arc", "CI/CD", "Security", "Hybrid"],
    details: "Lead PM from PRD through funding, POC, and MVP, and drove the end-to-end launch of Azure Arc Site Manager across go-to-market, compliance, and privacy, with UX research across 50+ enterprise customers.",
    links: [],
  },
  {
    icon: "🌴",
    title: "PTO Runway",
    year: "2026",
    category: "Side Projects",
    desc: "A personal project that projects your time-off balance month by month and finds high-leverage getaways by bridging holidays and weekends. Hosted on Azure and shipped end to end.",
    tags: ["Azure", "Deployment Stacks", "Static Web Apps", "Side Project"],
    details: "Built solo as a learning project: policy presets for 35+ employers, an unlimited-PTO recommender, calendar export, and a time-off value estimator. Versioned with git and managed through Azure Deployment Stacks.",
    links: [{ label: "Try PTO Runway", href: "https://tinyurl.com/pto-runway" }],
  },
  {
    icon: "🧭",
    title: "Career Coach",
    year: "2026",
    category: "Side Projects",
    desc: "A free, fully in-browser career toolkit: resume optimizer, interview practice, and referral helper. Everything runs client-side, so nothing you type ever leaves your device.",
    tags: ["In-Browser", "Privacy-First", "Web App", "Side Project"],
    details: "A privacy-by-design product built as a learning project, with no accounts and no servers, hosted on Azure Static Web Apps.",
    links: [{ label: "Try Career Coach", href: "https://purple-island-0fc9c8b10.7.azurestaticapps.net/" }],
  },
  {
    icon: "🔥",
    title: "EmberFI",
    year: "2026",
    category: "Side Projects",
    desc: "A financial-independence calculator with Standard, Barista, and Expat FIRE modes, plus a Boglehead index-investing view. Built with React and Vite.",
    tags: ["React", "Vite", "FIRE", "Side Project"],
    details: "A side project exploring different paths to financial independence, with clean scenario modeling and a fast, no-login interface on Azure.",
    links: [{ label: "Try EmberFI", href: "https://icy-mud-03eee400f.7.azurestaticapps.net/" }],
  },
  {
    icon: "📊",
    title: "Wealth Runway",
    year: "2026",
    category: "Side Projects",
    desc: "A personal net-worth tracker and compensation modeler that projects your financial runway toward retirement. React and Recharts, with all data kept locally in your browser.",
    tags: ["React", "Recharts", "Personal Finance", "Side Project"],
    details: "Built to visualize savings, compensation, and long-term runway in one place, with local-only storage, hosted on Azure Static Web Apps.",
    links: [{ label: "Try Wealth Runway", href: "https://victorious-field-0ffd94b0f.7.azurestaticapps.net/" }],
  },
  {
    icon: "🛰️",
    title: "Task Orbit",
    year: "2026",
    category: "Side Projects",
    desc: "A fast, keyboard-friendly task manager and credit-card rewards maximizer: it organizes work into focused orbits and helps you get more value out of every card.",
    tags: ["Productivity", "Credit-Card Rewards", "Web App", "Side Project"],
    details: "My most actively iterated side project: a lightweight personal task system plus a credit-card rewards maximizer, shipped and hosted on Azure.",
    links: [{ label: "Try Task Orbit", href: "https://gray-tree-021a9a70f.7.azurestaticapps.net/" }],
  },
  {
    icon: "💪",
    title: "Longevity Maxer",
    year: "2026",
    category: "Side Projects",
    desc: "A tool focused on longevity and healthspan that turns daily habits and metrics into a clear, actionable plan.",
    tags: ["Longevity", "Healthspan", "Side Project"],
    details: "A personal healthspan tracker that turns habits and metrics into an actionable plan, shipped and hosted on Azure alongside my other side projects.",
    links: [{ label: "Try Longevity Maxer", href: "https://lively-desert-065ebfd0f.7.azurestaticapps.net/" }],
  },
];

/* ---------- EDIT ME: EXPERIENCE & EDUCATION ---------- */
const EXPERIENCE = [
  {
    role: "Product Manager 2, Bicep & Deployments",
    org: "Microsoft · Azure Core",
    date: "Mar 2026 to Present",
    dur: "5 mos",
    now: true,
    desc: "Drive Bicep and Azure deployment experiences: deployment stacks, AVM + Copilot, IaC CI/CD, and the ALZ accelerator. Evangelize IaC at Azure Infra Summit 2026 and the PowerShell + DevOps Global Summit, including a live Copilot agent-mode demo to a 3,500+ developer audience.",
  },
  {
    role: "Technical Program Manager 2, Xbox",
    org: "Microsoft · Xbox",
    date: "Aug 2024 to Apr 2026",
    dur: "1 yr 9 mos",
    desc: "Xbox Accessories: shipped 15+ customization programs on time and on budget with cost reductions, driving manufacturing, milestone, and reliability improvements. Chosen to lead an executive-sponsored program spanning 10+ cross-functional teams, and onboarded new TPMs in Xbox China.",
  },
  {
    role: "Product Manager 2 & TPM 2, Azure (Arc and Edge)",
    org: "Microsoft · Azure",
    date: "Jul 2020 to Aug 2024",
    dur: "4 yrs 2 mos",
    desc: "Full-lifecycle software, firmware, and hardware program management across Azure Edge Devices (Azure Percept), Azure Light Edge (OS, imaging, Kubernetes, Secure Core), and Adaptive Cloud and Arc (edge security and CI/CD). Launched Azure Percept DK from concept to GA, led the end-to-end launch of Azure Arc Site Manager, and later drove Percept's retirement as an SME.",
  },
  {
    role: "Microsoft Student Partner",
    org: "Microsoft",
    date: "Oct 2018 to Mar 2020",
    dur: "1 yr 6 mos",
    desc: "Hosted 7+ workshops (50+ attendees each) at CMU, Pitt, and Chatham, judged Tartanhacks 2020 alongside the Microsoft team, and ran a 10-week GAN research project with Microsoft Boston PhD researchers. Selected as 1 of 9 of 200+ US Microsoft Student Partners invited to a Microsoft Ignite summit.",
  },
  {
    role: "PM & Innovation Internships",
    org: "Citi (HK) · Google · Ingram Micro",
    date: "2018 to 2019",
    dur: "",
    desc: "Citi Hong Kong TTS summer analyst (sole non-MBA extended a return offer), digitizing forms across APAC (12 countries) and delivering a China mobile-wallet go-to-market project; Google Student Innovator for GCP and G-Suite, a top performer who built training that helped ~200 student innovators earn GCP certifications; Ingram Micro innovation intern who inspired the CIO to launch a reverse-mentoring program for 20+ senior IT leaders worldwide.",
  },
  {
    role: "Undergraduate Student Researcher",
    org: "Pitt School of Education (CEAC)",
    date: "Jan 2018 to Apr 2018",
    dur: "",
    desc: "Project lead for the Collaborative for Evaluation and Assessment Capacity, researching how maker spaces shape developmental learning across ~23 Pittsburgh K-12 districts. Compiled and analyzed district data, connected the CEAC with Google for Education and Niche, and presented a research poster at Pitt's annual celebration of research.",
  },
  {
    role: "Co-founder",
    org: "Rollin, fintech side project",
    date: "2018 to 2021",
    dur: "$20k+ raised",
    desc: "Built a fintech side project alongside school and internships; won 4 pitch competitions and 2 incubators.",
  },
  {
    role: "M.S., Information & Data Science (MIDS)",
    org: "UC Berkeley",
    date: "Aug 2021 to Apr 2025",
    dur: "GPA 3.83",
    edu: true,
    desc: "Graduate study in applied AI and ML: Applied Machine Learning, ML at Scale, NLP, Gen-AI, and Data Engineering. Capstone: AI Career Advisor.",
  },
  {
    role: "B.S.B.A., Supply Chain Management",
    org: "University of Pittsburgh",
    date: "Aug 2017 to Apr 2020",
    dur: "GPA 3.7 · Dean's List",
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

/* ---------- EDIT ME: RECOMMENDATIONS ---------- */
const TESTIMONIALS = [
  {
    quote: "Torrey demonstrated outstanding proficiency in data science and natural language processing... his solid background and rapid comprehension of new concepts were consistently apparent, and his problem-solving skills underscored his expertise. Beyond the technical, his multilingual proficiency and sense of humor make him a valuable team player.",
    name: "Shuo (Alex) Wang, P.E., CFM",
    role: "UC Berkeley MIDS classmate, NLP with Deep Learning",
  },
];

/* ---------- EDIT ME: CONTACT ---------- */
const CONTACT = [
  { label: "Email", href: "mailto:torrey@berkeley.edu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/torrey-tnt" },
  { label: "GitHub", href: "https://github.com/torreymicrosoft" },
  { label: "Resume", href: "assets/resume.pdf" },
];

/* ---------- EDIT ME: MEDIA ----------
   Drop image files into assets/ to populate these. Each is optional and
   self-hides if the file is missing, so the site looks intact without them.
     assets/profile.jpg  ->  hero avatar portrait (falls back to "TT")
     assets/banner.jpg   ->  subtle hero background
   Per-role logos: add  logo: "assets/your-logo.png"  to any EXPERIENCE entry. */
const MEDIA = { profile: "assets/profile.jpg", banner: "assets/banner.jpg" };

/* ---------- EDIT ME: HIGHLIGHTS ---------- */
const HIGHLIGHTS = [
  { ico: "🚀", text: "Shipped Azure Percept to GA (Ignite)" },
  { ico: "🎤", text: "3,500+ developer audience" },
  { ico: "🤖", text: "GitHub Copilot certified (GH-300)" },
  { ico: "🎓", text: "UC Berkeley M.S. Data Science" },
];

/* ---------- Marquee items ---------- */
const MARQUEE = [
  "Azure Bicep", "Deployment Stacks", "GitHub Copilot", "Azure Percept",
  "Edge AI", "Xbox Hardware", "UC Berkeley MIDS", "Generative AI",
  "Kubernetes", "IaC CI/CD", "Developer Evangelism", "Azure Arc",
];

/* ---------- Inline SVG icons (contact) ---------- */
const ICONS = {
  Email: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  LinkedIn: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"/></svg>',
  GitHub: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 1.5A10.5 10.5 0 0 0 8.7 22c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5z"/></svg>',
  Resume: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
};
const EMAIL = "torrey@berkeley.edu";

/* ---------- Category accent colors ---------- */
const CAT_ACCENT = {
  "AI & ML": "#a06bff",
  "Edge & Hardware": "#34e0c4",
  "Cloud & DevOps": "#6ea8fe",
  "Side Projects": "#f6a94b",
};

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
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  /* ----- Optional media: load only if the asset exists (no broken images) ----- */
  const loadImg = (src) =>
    new Promise((res) => {
      if (!src) return res(null);
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = () => res(null);
      im.src = src;
    });
  loadImg(MEDIA.profile).then((im) => {
    const a = $(".avatar");
    if (!im || !a) return;
    const g = el("img", "avatar__img");
    g.src = MEDIA.profile;
    g.alt = "Torrey Trahanovsky";
    a.classList.add("avatar--photo");
    a.appendChild(g);
  });
  loadImg(MEDIA.banner).then((im) => {
    const h = $(".hero");
    if (!im || !h) return;
    h.style.setProperty("--hero-banner", `url("${MEDIA.banner}")`);
    h.classList.add("hero--banner");
  });

  /* ----- Toast ----- */
  const toast = el("div", "toast", "");
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  /* ----- Highlights ----- */
  const hl = $("#highlights");
  if (hl) {
    HIGHLIGHTS.forEach((h) => {
      hl.appendChild(el("span", "highlight", `<span aria-hidden="true">${h.ico}</span> ${esc(h.text)}`));
    });
  }

  /* ----- Projects + filters ----- */
  const grid = $("#projects-grid");
  const filterBar = $("#filters");
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  let active = "All";

  function renderProjects() {
    grid.innerHTML = "";
    PROJECTS.filter((p) => active === "All" || p.category === active).forEach((p, i) => {
      const card = el("article", "project reveal");
      card.dataset.cat = p.category;
      if (CAT_ACCENT[p.category]) card.style.setProperty("--card-accent", CAT_ACCENT[p.category]);
      const links = p.links
        .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} <span aria-hidden="true">↗</span></a>`)
        .join("");
      const detailId = `pd-${i}`;
      const more = p.details
        ? `<button class="project__toggle" aria-expanded="false" aria-controls="${detailId}">More detail</button>
           <p class="project__more" id="${detailId}" hidden>${esc(p.details)}</p>`
        : "";
      card.innerHTML = `
        <div class="project__top">
          <div class="project__icon" aria-hidden="true">${p.icon}</div>
          <span class="project__year">${esc(p.year)}</span>
        </div>
        <div>
          <span class="project__cat">${esc(p.category)}</span>
          <h3>${esc(p.title)}</h3>
        </div>
        <p>${esc(p.desc)}</p>
        <div class="project__tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        ${more}
        ${links ? `<div class="project__links">${links}</div>` : p.status ? `<div class="project__links"><span class="project__soon">${esc(p.status)}</span></div>` : ""}`;
      const toggle = card.querySelector(".project__toggle");
      if (toggle) {
        toggle.addEventListener("click", () => {
          const openNow = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", String(!openNow));
          toggle.textContent = openNow ? "More detail" : "Less detail";
          card.querySelector(".project__more").hidden = openNow;
        });
      }
      grid.appendChild(card);
    });
    observeReveals();
  }

  /* Filters with keyboard support (roving tabindex) */
  const filterBtns = [];
  categories.forEach((cat, idx) => {
    const b = el("button", cat === active ? "active" : "", cat);
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(cat === active));
    b.tabIndex = cat === active ? 0 : -1;
    b.addEventListener("click", () => selectFilter(idx));
    b.addEventListener("keydown", (e) => {
      let n = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (idx + 1) % filterBtns.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (idx - 1 + filterBtns.length) % filterBtns.length;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = filterBtns.length - 1;
      if (n !== null) { e.preventDefault(); selectFilter(n); filterBtns[n].focus(); }
    });
    filterBtns.push(b);
    filterBar.appendChild(b);
  });
  function selectFilter(idx) {
    active = categories[idx];
    filterBtns.forEach((b, i) => {
      const on = i === idx;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
    });
    renderProjects();
  }

  /* ----- Timeline ----- */
  const tl = $("#timeline");
  EXPERIENCE.forEach((e) => {
    const li = el("li", "reveal" + (e.edu ? " edu" : "") + (e.now ? " now" : ""));
    const dur = e.dur ? ` <span class="sep">·</span> <b>${esc(e.dur)}</b>` : "";
    const badge = e.now ? ` <span class="t-now">Current</span>` : "";
    li.innerHTML = `
      <div class="t-role">${esc(e.role)}${badge}</div>
      <span class="t-date"><span class="t-org">${esc(e.org)}</span>, ${esc(e.date)}${dur}</span>
      <p class="t-desc">${esc(e.desc)}</p>`;
    if (e.logo) {
      loadImg(e.logo).then((im) => {
        const roleEl = li.querySelector(".t-role");
        if (!im || !roleEl) return;
        const g = el("img", "t-logo");
        g.src = e.logo;
        g.alt = "";
        roleEl.insertBefore(g, roleEl.firstChild);
      });
    }
    tl.appendChild(li);
  });

  /* ----- Speaking ----- */
  const sg = $("#speaking-grid");
  SPEAKING.forEach((s) => {
    const c = el("article", "card reveal");
    c.innerHTML = `
      <div class="card__ico" aria-hidden="true">${s.ico}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
      <a href="${s.cta.href}" target="_blank" rel="noopener">${esc(s.cta.label)} →</a>`;
    sg.appendChild(c);
  });

  /* ----- Recommendations ----- */
  const qg = $("#quotes");
  if (qg) {
    TESTIMONIALS.forEach((t) => {
      const fig = el("figure", "quote reveal");
      fig.innerHTML = `
        <blockquote>${esc(t.quote)}</blockquote>
        <figcaption><span class="quote__name">${esc(t.name)}</span><span class="quote__role">${esc(t.role)}</span></figcaption>`;
      qg.appendChild(fig);
    });
  }

  /* ----- Contact (SVG icons + copy email) ----- */
  const cl = $("#contact-links");
  CONTACT.forEach((c) => {
    const a = el("a", "contact__link", `<span class="contact__ico" aria-hidden="true">${ICONS[c.label] || ""}</span> ${esc(c.label)}`);
    a.href = c.href;
    if (c.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    cl.appendChild(a);
  });
  const copyBtn = el("button", "contact__link contact__copy",
    `<span class="contact__ico" aria-hidden="true">${ICONS.Email}</span> Copy email`);
  copyBtn.type = "button";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast("Email copied: " + EMAIL);
    } catch {
      showToast(EMAIL);
    }
  });
  cl.appendChild(copyBtn);

  /* ----- Marquee ----- */
  const mq = $("#marquee");
  mq.innerHTML = [...MARQUEE, ...MARQUEE].map((t) => `<span>${esc(t)}</span>`).join("");

  /* ----- Theme toggle (persisted) ----- */
  const root = document.documentElement;
  const toggle = $("#themeToggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const THEME_COLORS = { dark: "#0a0e16", light: "#f6f8fc" };
  const syncThemeColor = (t) => { if (themeMeta) themeMeta.setAttribute("content", THEME_COLORS[t] || THEME_COLORS.dark); };
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
  syncThemeColor(root.getAttribute("data-theme"));
  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncThemeColor(next);
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
            navMap.forEach((a) => { a.classList.remove("active"); a.removeAttribute("aria-current"); });
            const a = navMap.get(e.target.id);
            if (a) { a.classList.add("active"); a.setAttribute("aria-current", "true"); }
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
  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const setStatFinal = (s) => { s.textContent = (+s.dataset.count).toLocaleString("en-US") + (s.dataset.suffix || ""); };
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    statEls.forEach(setStatFinal);
  } else {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animateStat(e.target); so.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    statEls.forEach((s) => so.observe(s));
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
