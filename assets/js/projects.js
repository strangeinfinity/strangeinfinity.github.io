/**
 * StrangeInfinity — Vedic Minimalist Data & Project Renderer
 * assets/js/projects.js
 *
 * Central data store for all StrangeInfinity open-source projects,
 * flagship desktop & mobile products, and technology stack.
 */

const SI_CONFIG = {

  /* ── Social / Contact Channels ── */
  social: {
    github:    { url: 'https://github.com/strangeinfinity/',         handle: '@strangeinfinity',     icon: '<i class="fa-brands fa-github"></i>' },
    instagram: { url: 'https://instagram.com/strangeinfinity.dev',  handle: '@strangeinfinity.dev', icon: '<i class="fa-brands fa-instagram"></i>' },
    linkedin:  { url: 'https://in.linkedin.com/in/ayush-kumar-maurya/', handle: 'Ayush Kumar Maurya',   icon: '<i class="fa-brands fa-linkedin"></i>' },
    email:     { url: 'mailto:strangeinfinity.dev@gmail.com',       handle: 'strangeinfinity.dev@gmail.com', icon: '<i class="fa-solid fa-envelope"></i>' },
    twitter:   { url: 'https://x.com/strang3infinity',             handle: '@strang3infinity',     icon: '<i class="fa-brands fa-x-twitter"></i>' },
  },

  /* ── Vedic Sutras & Wisdom Quotes ── */
  sutras: [
    {
      sanskrit: 'पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥',
      meaning: 'From infinite fullness emerges infinite fullness; when infinity is drawn from infinity, infinity alone remains.',
      context: 'The Vedic Law of Infinity — The Spirit of Open Source Software',
    },
    {
      sanskrit: 'योगः कर्मसु कौशलम् ॥',
      meaning: 'Excellence, deep concentration, and mastery in action is Yoga.',
      context: 'Bhagavad Gita 2.50 — Software Craftsmanship & Engineering Precision',
    },
    {
      sanskrit: 'शून्यं च अनन्तं च ब्रह्माण्डस्य आधारः ॥',
      meaning: 'Zero (Shunya) and Infinity (Ananta) form the bedrock of the cosmos and computation.',
      context: 'Ancient Vedic Mathematics & Computational Logic',
    },
    {
      sanskrit: 'विद्या ददाति विनयं विनयाद्याति पात्रताम् ॥',
      meaning: 'True knowledge bestows humility; from humility arises authentic capability.',
      context: 'Hitopadesha — Continuous Learning & Open Architecture',
    },
    {
      sanskrit: 'सर्वतन्त्र स्वतन्त्रम् ॥',
      meaning: 'Completely sovereign and self-governing; dependent on no external master.',
      context: 'Local-First, Privacy-Preserving & Zero-Telemetry Computing',
    }
  ],

  /* ── Stats ── */
  stats: [
    { value: 28,  suffix: '+',   label: 'Repositories'   },
    { value: 45,  suffix: '+',   label: 'GitHub Stars'   },
    { value: 25,  suffix: 'K+',  label: 'Lines of Code' },
    { value: 3,   suffix: '+ Yr',label: 'Crafting in Public' },
  ],

  /* ── Flagship Products (Desktop & Mobile) ── */
  products: [
    {
      id:       'notes',
      name:     'Notes',
      sanskrit: '॥ लिपि ॥',
      icon:     '<i class="fa-solid fa-note-sticky" style="color:#d4af37"></i>',
      featured: true,
      category: 'Android',
      desc:     'Offline-first Android note-taking application engineered with Kotlin 2.0, Jetpack Compose Material 3, Room SQLite, vector handwriting canvas, and AES-256-GCM encrypted backups.',
      features: [
        'Native Kotlin 2.0 & Jetpack Compose Material 3',
        '100% offline with zero internet permissions, ads, or tracking',
        'Authenticated client-side AES-256-GCM backups (PBKDF2)',
        'Vector sketch & handwriting canvas with Bézier curves',
        'Interactive markdown preview, checklists & color-coded tags',
      ],
      links: {
        github:   'https://github.com/dev-hints/Notes',
        download: 'https://github.com/dev-hints/Notes/releases/download/v1.0.0/Notes-release.apk',
        demo:     'Notes/',
        docs:     'Notes/docs.html',
      },
      tags: ['Kotlin', 'Android', 'Compose', 'Room', 'Offline'],
    },
    {
      id:       'dedroid',
      name:     'Dedroid',
      sanskrit: '॥ यन्त्रम् ॥',
      icon:     '<i class="fa-brands fa-debian" style="color:#d70a53"></i>',
      featured: true,
      category: 'Android',
      desc:     'Debian GNU/Linux 13 (Trixie) rootless terminal workstation for Android built in native Kotlin & Jetpack, powered by PRoot virtualization and custom developer coding keyboard.',
      features: [
        'Native Kotlin & modern Android Jetpack architecture',
        'Debian 13 (Trixie) full apt package ecosystem',
        '100% rootless PRoot virtualization (Knox safe)',
        'Native passwordless sudo & PAM bridge',
        'Custom developer coding toolbar with Ctrl, Alt, and Esc keys',
      ],
      links: {
        github:   'https://github.com/dev-hints/Dedroid',
        download: 'https://github.com/dev-hints/Dedroid/releases/download/First-Release/dedroid-signed.apk',
        demo:     'Dedroid/',
        docs:     'Dedroid/docs.html',
      },
      tags: ['Kotlin', 'Android', 'Debian', 'Linux', 'PRoot'],
    },
    {
      id:       '2048-infinity',
      name:     '2048-Infinity',
      sanskrit: '॥ अनन्त खेल ॥',
      icon:     '<i class="fa-solid fa-gamepad" style="color:#e5a93c"></i>',
      featured: true,
      category: 'Android',
      desc:     'Original native Android puzzle game engineered in Kotlin 2.0 & Jetpack Compose with 64-bit infinite progression beyond 2048, 60/120Hz animations, and zero tracking.',
      features: [
        'Native Kotlin 2.0 & Jetpack Compose Material 3',
        '64-bit engine with progression beyond 2048 into infinity',
        'Multiple grid dimensions: 3x3, 4x4, 5x5',
        'Synthesized audio tones & tactile haptic feedback',
        '100% offline with zero internet permissions',
      ],
      links: {
        github:   'https://github.com/dev-hints/2048-Infinity',
        download: 'https://github.com/dev-hints/2048-Infinity/releases/download/First/2048-Infinity-v1.0.0-release.apk',
        demo:     '2048-Infinity/',
        docs:     '2048-Infinity/docs.html',
      },
      tags: ['Kotlin', 'Android', 'Compose', 'Game', 'Jetpack'],
    },
    {
      id:       'markview',
      name:     'MarkView',
      sanskrit: '॥ संहिता दर्शक ॥',
      icon:     '<i class="fa-solid fa-file-code" style="color:#0ea5e9"></i>',
      featured: true,
      category: 'Desktop',
      desc:     'High-performance cross-platform desktop Markdown workspace in Tauri 2, Rust & React 19 with Shiki syntax highlighting, KaTeX math formulas, and live filesystem watching.',
      features: [
        'Tauri 2 & memory-safe Rust backend',
        'React 19 + TypeScript + Tailwind UI',
        'Shiki code highlighting across 25+ languages',
        'KaTeX math formulas & Mermaid diagrams',
        'Fuzzy Quick Open (Ctrl+P) & workspace search',
      ],
      links: {
        github:   'https://github.com/dev-hints/MarkView',
        download: 'MarkView/#download',
        demo:     'MarkView/',
        docs:     'MarkView/docs.html',
      },
      tags: ['Rust', 'Tauri', 'React', 'TypeScript', 'Desktop'],
    },
    {
      id:       'mydrive',
      name:     'MyDrive Cloud',
      sanskrit: '॥ आकाश भण्डार ॥',
      icon:     '<i class="fa-solid fa-cloud" style="color:#d4af37"></i>',
      featured: true,
      category: 'Cloud',
      desc:     'High-performance, self-hosted private cloud storage and media streaming server with 4MB chunked resumable streaming uploads, contacts sync, and zero tracking.',
      features: [
        'Resumable 4MB chunked streaming upload engine',
        'HTTP 206 range-request media streaming (video/audio)',
        'Phone contacts sync via Web Contact Picker API',
        'Password-protected share links with expiration timers',
        'Argon2id hashing, CSRF defense & Docker support',
      ],
      links: {
        github:   'https://github.com/dev-hints/mydrive',
        download: 'MyDrive/#download',
        demo:     'MyDrive/',
        docs:     'MyDrive/docs.html',
      },
      tags: ['Python', 'FastAPI', 'Docker', 'SQLite', 'Cloud'],
    },
    {
      id:       'airpointer',
      name:     'AirPointer',
      sanskrit: '॥ हस्त स्पर्श ॥',
      icon:     '<i class="fa-solid fa-hand-pointer" style="color:#06b6d4"></i>',
      featured: true,
      category: 'Python',
      desc:     'Touchless real-time virtual mouse system translating webcam hand gestures into ultra-smooth OS cursor movements using MediaPipe and OpenCV.',
      features: [
        'Touchless gesture cursor control',
        'Real-time webcam hand tracking',
        'Smooth mouse movement & click simulation',
        'Customizable gesture sensitivity & calibration',
      ],
      links: {
        github: 'https://github.com/dev-hints/AirPointer',
        demo:   'AirPointer/',
        docs:   'AirPointer/docs.html',
      },
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    },
    {
      id:       'infinity-browser',
      name:     'Infinity Browser',
      sanskrit: '॥ अनन्त चक्र ॥',
      icon:     '<i class="fa-solid fa-globe" style="color:#c86428"></i>',
      featured: true,
      category: 'Desktop',
      desc:     'Privacy-first desktop web browser built with Python and PyQt6. Features built-in ad blocking, local encrypted password vault, and media downloader.',
      features: [
        'Privacy-first with built-in ad blocking',
        'Download manager with live progress tracking',
        'Secure local password vault',
        'Bookmark manager & custom tab groups',
      ],
      links: {
        github:   'https://github.com/dev-hints/infinity-browser',
        download: 'Infinity-Browser/#download',
        demo:     'Infinity-Browser/',
        docs:     'Infinity-Browser/docs.html',
      },
      tags: ['Python', 'PyQt6', 'QtWebEngine', 'Desktop', 'Privacy'],
    },
    {
      id:       'infinity-writer',
      name:     'Infinity Writer',
      sanskrit: '॥ लेखनी ॥',
      icon:     '<i class="fa-solid fa-feather-pointed" style="color:#d4af37"></i>',
      featured: true,
      category: 'Web',
      desc:     'Distraction-free writing tool built to generate clean, semantic HTML5 with native out-of-the-box dark mode and zero dependencies.',
      features: [
        'Generates clean & semantic HTML code',
        'Native out-of-the-box dark mode support',
        'Zero external runtime dependencies',
        'Accessible ARIA component structure',
      ],
      links: {
        github: 'https://github.com/dev-hints/Infinity-Writer',
        demo:   'Infinity-Writer/',
        docs:   'Infinity-Writer/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Web Tool'],
    },
    {
      id:       '2048-nexus',
      name:     '2048 Nexus',
      sanskrit: '॥ नेक्सस ॥',
      icon:     '<i class="fa-solid fa-gamepad" style="color:#22c55e"></i>',
      featured: false,
      category: 'Desktop',
      desc:     'Production-grade 2048 desktop game built with Python and PyQt6, featuring Expectimax AI auto-play, multiple grid modes, and standalone installers (.exe, .deb, .rpm).',
      features: [
        'Automated Expectimax AI solver playback',
        'Cross-platform (.exe, .deb, .rpm packages)',
        'Multiple grid dimensions (3x3 to 8x8)',
      ],
      links: {
        github:   'https://github.com/dev-hints/2048-Nexus',
        download: '2048-Nexus/#download',
        demo:     '2048-Nexus/',
        docs:     '2048-Nexus/docs.html',
      },
      tags: ['Python', 'PyQt6', 'Desktop', 'Game', 'AI'],
    },
    {
      id:       'gemini-cli',
      name:     'Gemini CLI Chatbot',
      sanskrit: '॥ प्रज्ञा ॥',
      icon:     '<i class="fa-solid fa-terminal" style="color:#06b6d4"></i>',
      featured: false,
      category: 'Shell',
      desc:     'Ultra-fast terminal AI companion written 100% in pure Bash. Chat in interactive REPL, pipe Unix commands, and stream responses in real-time.',
      features: [
        '100% Pure Bash shell script with zero overhead',
        'Real-time token streaming with SSE',
        'Unix stdin pipe redirection & multi-turn context',
      ],
      links: {
        github: 'https://github.com/dev-hints/Gemini_cli',
        demo:   'Gemini-CLI/',
        docs:   'Gemini-CLI/docs.html',
      },
      tags: ['Shell', 'Bash', 'AI', 'CLI'],
    },
    {
      id:       'snake-game',
      name:     'Neon Snake Game',
      sanskrit: '॥ सर्प क्रीड़ा ॥',
      icon:     '<i class="fa-solid fa-staff-snake" style="color:#22c55e"></i>',
      featured: false,
      category: 'Web',
      desc:     'Arcade retro Snake game with HTML5 Canvas, glowing particle bursts, power-ups, and synthesized Web Audio sound.',
      features: [
        'HTML5 2D Canvas hardware-accelerated 60 FPS',
        'Procedural Web Audio API sound synthesis',
        'Touch swipe controls & combo multipliers',
      ],
      links: {
        github: 'https://github.com/dev-hints/Snake-Game',
        demo:   'Snake-Game/',
        docs:   'Snake-Game/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Canvas', 'Game'],
    },
    {
      id:       'notes-app',
      name:     'Cosmic Notes App',
      sanskrit: '॥ आकाश टिप्पणी ॥',
      icon:     '<i class="fa-solid fa-note-sticky" style="color:#ec4899"></i>',
      featured: false,
      category: 'Web',
      desc:     'Interactive browser markdown workspace with category tags, instant fuzzy search, and local storage persistence.',
      features: [
        'Deep space glassmorphic UI',
        'Interactive task tagging & categories',
        'Instant search & auto-save to LocalStorage',
      ],
      links: {
        github: 'https://github.com/dev-hints/Notes-App',
        demo:   'Notes-App/',
        docs:   'Notes-App/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Productivity'],
    },
    {
      id:       'calccosmos',
      name:     'CalcCosmos Calculator',
      sanskrit: '॥ गणितम् ॥',
      icon:     '<i class="fa-solid fa-calculator" style="color:#f59e0b"></i>',
      featured: false,
      category: 'Web',
      desc:     'High-precision scientific computation engine with trigonometric operations and persistent calculation history ledger.',
      features: [
        'Trigonometric & logarithmic functions',
        'Dijkstra Shunting-yard expression parsing',
        'Full keyboard numpad bindings',
      ],
      links: {
        github: 'https://github.com/dev-hints/CalcCosmos',
        demo:   'CalcCosmos/',
        docs:   'CalcCosmos/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Math', 'PWA'],
    },
    {
      id:       'to-do',
      name:     'ToDo Task Manager',
      sanskrit: '॥ कर्म सूची ॥',
      icon:     '<i class="fa-solid fa-square-check" style="color:#14b8a6"></i>',
      featured: false,
      category: 'Web',
      desc:     'Distraction-free personal task management and Pomodoro sprint workstation built with 100% local-first privacy.',
      features: [
        'Integrated Pomodoro sprint focus timer',
        'Subtask hierarchy & progress percentage metrics',
        'One-click JSON database backup & restore',
      ],
      links: {
        github: 'https://github.com/dev-hints/To-Do',
        demo:   'To-Do/',
        docs:   'To-Do/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Productivity', 'PWA'],
    },
  ],

  /* ── All Projects List (For Instant Search & Filter) ── */
  projects: [], // Will mirror products with additional metadata

  /* ── Technology Arsenal ── */
  technologies: [
    { name: 'Kotlin',       icon: '<i class="devicon-kotlin-plain colored"></i>', level: 92, color: '#7F52FF' },
    { name: 'Android',      icon: '<i class="devicon-android-plain colored"></i>', level: 90, color: '#3ddc84' },
    { name: 'Python',       icon: '<i class="devicon-python-plain colored"></i>', level: 94, color: '#3776ab' },
    { name: 'Rust',         icon: '<i class="devicon-rust-plain colored"></i>', level: 86, color: '#dea584' },
    { name: 'Tauri 2',      icon: '<i class="fa-solid fa-shield-halved" style="color:#24c8db"></i>', level: 88, color: '#24c8db' },
    { name: 'Jetpack',      icon: '<i class="fa-solid fa-cube" style="color:#4285f4"></i>', level: 90, color: '#4285f4' },
    { name: 'FastAPI',      icon: '<i class="devicon-fastapi-plain colored"></i>', level: 88, color: '#009688' },
    { name: 'JavaScript',   icon: '<i class="devicon-javascript-plain colored"></i>', level: 92, color: '#f7df1e' },
    { name: 'HTML5 & CSS3', icon: '<i class="devicon-html5-plain colored"></i>', level: 96, color: '#e34f26' },
    { name: 'Docker',       icon: '<i class="devicon-docker-plain colored"></i>', level: 86, color: '#2496ed' },
    { name: 'OpenCV',       icon: '<i class="devicon-opencv-plain colored"></i>', level: 82, color: '#5C3EE8' },
    { name: 'PyQt6',        icon: '<i class="fa-solid fa-window-maximize" style="color:#41CD52"></i>', level: 86, color: '#41CD52' },
    { name: 'Bash / Shell', icon: '<i class="devicon-bash-plain colored"></i>', level: 90, color: '#4eaa25' },
    { name: 'Linux System', icon: '<i class="devicon-linux-plain colored"></i>', level: 90, color: '#fcc624' },
  ],

  /* ── Timeline (Evolution of Craftsmanship) ── */
  timeline: [
    {
      date:    '2024 — Foundations',
      title:   'The Genesis & Open Source Origin',
      desc:    'Commenced dev-hints and StrangeInfinity with core focus on lightweight, offline-first utilities, mathematical solvers, and games.',
      active:  false,
    },
    {
      date:    '2025 — Desktop & Vision',
      title:   'Infinity Browser & AirPointer',
      desc:    'Crafted PyQt6 desktop tools alongside AirPointer touchless computer vision virtual mouse using MediaPipe & OpenCV.',
      active:  false,
    },
    {
      date:    '2026 — Sovereign Architecture',
      title:   'Dedroid, Notes & MyDrive Cloud',
      desc:    'Engineered Dedroid rootless Debian terminal for Android, Notes Compose M3 offline journal with AES-256-GCM, and MyDrive self-hosted private cloud.',
      active:  true,
    },
  ],

  /* ── Core Values (Vedic Shilpa Philosophy) ── */
  values: [
    {
      icon: '<i class="fa-solid fa-lock-open" style="color:var(--color-primary)"></i>',
      title: 'Open Source by Default',
      desc: 'All software lives transparently in public. Knowledge multiplies when shared openly with builders across the globe.',
    },
    {
      icon: '<i class="fa-solid fa-shield-halved" style="color:var(--color-secondary)"></i>',
      title: 'Sovereignty & Privacy',
      desc: 'Local-first architecture with zero telemetry. Your computation and data belong strictly to you.',
    },
    {
      icon: '<i class="fa-solid fa-bolt" style="color:#f59e0b"></i>',
      title: 'Speed & Minimalism',
      desc: 'Lightweight, bloat-free code designed to load instantaneously and execute with maximum hardware efficiency.',
    },
    {
      icon: '<i class="fa-solid fa-om" style="color:var(--color-primary-light)"></i>',
      title: 'Precision Craftsmanship',
      desc: 'Treating code as Shilpa (sacred art) — clean architecture, robust security, and deep aesthetic harmony.',
    },
  ]
};

// Mirror products into projects for unified indexing
SI_CONFIG.projects = SI_CONFIG.products.map(p => ({
  id:       p.id,
  title:    p.name,
  sanskrit: p.sanskrit,
  icon:     p.icon,
  status:   'active',
  desc:     p.desc,
  tags:     p.tags,
  category: p.category,
  github:   p.links.github,
  download: p.links.download,
  demo:     p.links.demo,
  docs:     p.links.docs,
  features: p.features,
}));

/* ──────────────────────────────────────────────
   RENDERER — Vedic Minimalist UI Engine
   ────────────────────────────────────────────── */
const ProjectRenderer = (() => {

  const getInitialLimit = () => (window.innerWidth <= 768 ? 4 : 6);
  let currentFilter = 'all';
  let searchQuery = '';
  let isExpanded = false;
  let productsExpanded = false;
  const PRODUCTS_INITIAL_COUNT = 4;

  /** Open Quickview Modal for any project */
  function openQuickview(projectId) {
    const item = SI_CONFIG.products.find(p => p.id === projectId) || SI_CONFIG.projects.find(p => p.id === projectId);
    if (!item) return;

    let backdrop = document.getElementById('quickview-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'quickview-backdrop';
      backdrop.className = 'quickview-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="quickview-modal" role="dialog" aria-modal="true" aria-label="${item.name || item.title}">
        <button class="quickview-close" aria-label="Close dialog" id="quickview-close-btn">&times;</button>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
          <div class="product-icon-wrap" style="width:48px;height:48px;font-size:1.5rem;">${item.icon}</div>
          <div>
            <div style="display:flex;align-items:center;gap:8px;">
              <h3 style="font-size:1.35rem;margin:0;">${item.name || item.title}</h3>
              <span class="project-card-sanskrit">${item.sanskrit || ''}</span>
            </div>
            <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);">${item.category || (item.tags && item.tags[0]) || ''}</span>
          </div>
        </div>
        
        <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.65;margin-bottom:16px;">${item.desc}</p>
        
        <div style="margin-bottom:16px;">
          <h4 style="font-size:0.85rem;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:0.1em;color:var(--color-primary);margin-bottom:8px;">Highlights & Specifications</h4>
          <ul style="display:flex;flex-direction:column;gap:6px;">
            ${(item.features || []).map(f => `<li style="font-size:0.825rem;color:var(--text-secondary);display:flex;align-items:flex-start;gap:8px;"><i class="fa-solid fa-check" style="color:var(--color-primary);font-size:0.75rem;margin-top:4px;"></i> <span>${f}</span></li>`).join('')}
          </ul>
        </div>

        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;">
          ${(item.tags || []).map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;padding-top:12px;border-top:1px solid var(--border-color);">
          ${item.links && item.links.download ? `<a href="${item.links.download}" class="btn btn-primary btn-sm"><i class="fa-solid fa-download"></i> Direct Download</a>` : (item.download ? `<a href="${item.download}" class="btn btn-primary btn-sm"><i class="fa-solid fa-download"></i> Direct Download</a>` : '')}
          ${item.links && item.links.demo ? `<a href="${item.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Portal</a>` : (item.demo ? `<a href="${item.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Portal</a>` : '')}
          ${item.links && item.links.docs ? `<a href="${item.links.docs}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm"><i class="fa-solid fa-book"></i> Documentation</a>` : (item.docs ? `<a href="${item.docs}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm"><i class="fa-solid fa-book"></i> Docs</a>` : '')}
          ${item.links && item.links.github ? `<a href="${item.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm"><i class="fa-brands fa-github"></i> GitHub</a>` : (item.github ? `<a href="${item.github}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm"><i class="fa-brands fa-github"></i> GitHub</a>` : '')}
        </div>
      </div>
    `;

    backdrop.classList.add('active');
    document.getElementById('quickview-close-btn').addEventListener('click', () => backdrop.classList.remove('active'));
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });

    if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) {
      SoundEngine.playChime(648);
    }
  }

  /** Render projects grid with live search & category filtering */
  function renderProjects(filter = null, keepExpanded = false) {
    const container = document.getElementById('projects-grid');
    const paginationWrap = document.getElementById('projects-pagination-wrap');
    if (!container) return;

    if (filter !== null && filter !== currentFilter && !keepExpanded) {
      isExpanded = false;
      currentFilter = filter;
    }

    const q = searchQuery.toLowerCase().trim();

    const filtered = SI_CONFIG.projects.filter(p => {
      const matchFilter = currentFilter === 'all' || p.tags.some(t => t.toLowerCase().includes(currentFilter)) || (p.category && p.category.toLowerCase().includes(currentFilter));
      if (!matchFilter) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    });

    const limit = getInitialLimit();
    const visibleProjects = isExpanded ? filtered : filtered.slice(0, limit);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:var(--space-8);color:var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size:2rem;margin-bottom:12px;opacity:0.4;"></i>
          <p style="margin:0;">No repositories matching "<strong>${searchQuery}</strong>".</p>
        </div>
      `;
      if (paginationWrap) paginationWrap.innerHTML = '';
      return;
    }

    container.innerHTML = visibleProjects.map((p, i) => `
      <article class="project-card reveal revealed" data-project="${p.id}" role="article" aria-label="${p.title}">
        <div class="project-card-header">
          <span class="project-icon" aria-hidden="true">${p.icon}</span>
          <div style="display:flex;align-items:center;gap:6px;">
            <span class="project-card-sanskrit">${p.sanskrit || ''}</span>
            <span class="project-status-badge status-${p.status}">${p.status}</span>
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.desc}</p>
          <div class="project-tags" aria-label="Technologies">
            ${p.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <button class="btn btn-ghost btn-sm btn-quickview" data-id="${p.id}" type="button" aria-label="Quick details for ${p.title}">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          ${p.download ? `<a href="${p.download}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-solid fa-download"></i> Get</a>` : ''}
          ${p.demo && !p.download ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ''}
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm"><i class="fa-brands fa-github"></i></a>` : ''}
        </div>
      </article>
    `).join('');

    // Attach quickview listeners
    container.querySelectorAll('.btn-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openQuickview(btn.dataset.id);
      });
    });

    // Pagination / Toggle button
    if (paginationWrap) {
      if (filtered.length > limit) {
        paginationWrap.innerHTML = `
          <button id="btn-toggle-projects" class="btn btn-outline" style="margin:0 auto;display:inline-flex;align-items:center;gap:6px;">
            <i class="fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
            <span>${isExpanded ? 'Show Fewer Repositories' : `View All ${filtered.length} Repositories`}</span>
          </button>
        `;
        const toggleBtn = document.getElementById('btn-toggle-projects');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderProjects(currentFilter, true);
            if (!isExpanded) {
              const sec = document.getElementById('projects');
              if (sec) sec.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      } else {
        paginationWrap.innerHTML = '';
      }
    }
  }

  /** Render flagship products */
  function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    const visibleProducts = productsExpanded
      ? SI_CONFIG.products
      : SI_CONFIG.products.slice(0, PRODUCTS_INITIAL_COUNT);

    container.innerHTML = visibleProducts.map(p => `
      <article class="product-card ${p.featured ? 'featured' : ''} reveal revealed" role="article" aria-label="${p.name}">
        <div class="product-card-top">
          <div class="product-icon-wrap" aria-hidden="true">${p.icon}</div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span class="project-card-sanskrit">${p.sanskrit || ''}</span>
            <span class="product-badge">${p.category || 'Flagship'}</span>
          </div>
        </div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-tags" aria-label="Tags">
          ${(p.tags || []).slice(0, 3).map(t => `<span class="product-tag">${t}</span>`).join('')}
        </div>
        <div class="product-actions">
          <button class="btn btn-ghost btn-sm btn-product-quickview" data-id="${p.id}" type="button">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          ${p.links.download ? `<a href="${p.links.download}" class="btn btn-primary btn-sm"><i class="fa-solid fa-download"></i> Download</a>` : ''}
          ${p.links.demo && !p.links.download ? `<a href="${p.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Portal</a>` : ''}
          ${p.links.docs ? `<a href="${p.links.docs}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm"><i class="fa-solid fa-book"></i> Docs</a>` : ''}
          ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>` : ''}
        </div>
      </article>
    `).join('');

    container.querySelectorAll('.btn-product-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openQuickview(btn.dataset.id);
      });
    });

    updateProductsToggleButton();
  }

  function updateProductsToggleButton() {
    const toggleBtn = document.getElementById('products-toggle-btn');
    if (!toggleBtn) return;
    const remaining = SI_CONFIG.products.length - PRODUCTS_INITIAL_COUNT;
    if (remaining <= 0) {
      toggleBtn.style.display = 'none';
      return;
    }
    toggleBtn.style.display = 'inline-flex';
    toggleBtn.innerHTML = productsExpanded
      ? '<i class="fa-solid fa-chevron-up"></i> <span>Show Fewer Products</span>'
      : `<i class="fa-solid fa-chevron-down"></i> <span>View All Flagship Products (${remaining} more)</span>`;
  }

  function setupProductsToggle() {
    const toggleBtn = document.getElementById('products-toggle-btn');
    if (!toggleBtn) return;
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      productsExpanded = !productsExpanded;
      renderProducts();
      if (!productsExpanded) {
        const sec = document.getElementById('products');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /** Render tech stack cards */
  function renderTech() {
    const container = document.getElementById('tech-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.technologies.map(t => `
      <div class="tech-card reveal revealed" data-level="${t.level}" aria-label="${t.name}">
        <span class="tech-icon" aria-hidden="true">${t.icon}</span>
        <span class="tech-name">${t.name}</span>
        <div class="tech-level" role="progressbar" aria-valuenow="${t.level}" aria-valuemin="0" aria-valuemax="100">
          <div class="tech-level-fill" style="width:${t.level}%"></div>
        </div>
      </div>
    `).join('');
  }

  /** Render timeline */
  function renderTimeline() {
    const container = document.getElementById('timeline-list');
    if (!container) return;

    container.innerHTML = SI_CONFIG.timeline.map(t => `
      <div class="timeline-item ${t.active ? 'active' : ''} reveal revealed">
        <div class="timeline-date">${t.date}</div>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.desc}</p>
      </div>
    `).join('');
  }

  /** Render core values */
  function renderValues() {
    const container = document.getElementById('values-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.values.map(v => `
      <div class="value-card reveal revealed">
        <div class="value-icon" aria-hidden="true">${v.icon}</div>
        <h4 class="value-title">${v.title}</h4>
        <p class="value-desc">${v.desc}</p>
      </div>
    `).join('');
  }

  /** Render social links */
  function renderSocial() {
    const container = document.getElementById('social-links-grid');
    if (!container) return;

    const socials = [
      { key: 'github',    name: 'GitHub' },
      { key: 'email',     name: 'Email Transmission' },
      { key: 'twitter',   name: 'X (Twitter)' },
      { key: 'linkedin',  name: 'LinkedIn' },
      { key: 'instagram', name: 'Instagram' },
    ];

    container.innerHTML = socials.map(s => {
      const data = SI_CONFIG.social[s.key];
      return `
        <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="social-card reveal revealed" aria-label="${s.name}">
          <div class="social-icon-wrap" aria-hidden="true">${data.icon}</div>
          <div>
            <div class="social-card-name">${s.name}</div>
            <div class="social-card-handle">${data.handle}</div>
          </div>
          <span class="social-card-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
      `;
    }).join('');
  }

  /** Render footer social */
  function renderFooterSocial() {
    const container = document.getElementById('footer-social');
    if (!container) return;

    const links = ['github', 'twitter', 'linkedin', 'instagram'];
    container.innerHTML = links.map(k => {
      const d = SI_CONFIG.social[k];
      return `<a href="${d.url}" target="_blank" rel="noopener noreferrer" class="footer-channel-btn" aria-label="${k}">${d.icon}</a>`;
    }).join('') + `<a href="mailto:strangeinfinity.dev@gmail.com" class="footer-channel-btn" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>`;
  }

  /** Setup Live Instant Search on Projects */
  function setupSearch() {
    const input = document.getElementById('projects-search-input');
    const clearBtn = document.getElementById('projects-search-clear');
    if (!input) return;

    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? 'inline-block' : 'none';
      renderProjects(null, true);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        renderProjects(null, true);
        input.focus();
      });
    }

    // Setup Filter Tab Click Handlers
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const filter = tab.dataset.filter || 'all';
        renderProjects(filter);

        if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) {
          SoundEngine.playChime(540);
        }
      });
    });
  }

  /** Init all renderers */
  function init() {
    renderProjects('all');
    renderProducts();
    setupProductsToggle();
    setupSearch();
    renderTech();
    renderTimeline();
    renderValues();
    renderSocial();
    renderFooterSocial();
  }

  return { init, renderProjects, openQuickview };
})();

window.ProjectRenderer = ProjectRenderer;
window.SI_CONFIG = SI_CONFIG;
