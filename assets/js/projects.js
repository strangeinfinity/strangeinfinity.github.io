/**
 * StrangeInfinity — Project & Product Data
 * assets/js/projects.js
 *
 * Central data store for all projects, products, tech stack, and social links.
 * Features open-source repositories from dev-hints.
 */

/* ──────────────────────────────────────────────
   CONFIGURATION — Edit this to update site data
   ────────────────────────────────────────────── */
const SI_CONFIG = {

  /* ── Social / Contact Links ── */
  social: {
    github:    { url: 'https://github.com/strangeinfinity/',         handle: '@strangeinfinity',     icon: '<i class="fa-brands fa-github"></i>' },
    instagram: { url: 'https://instagram.com/strangeinfinity.dev',  handle: '@strangeinfinity.dev', icon: '<i class="fa-brands fa-instagram"></i>' },
    linkedin:  { url: 'https://in.linkedin.com/in/ayush-kumar-maurya/', handle: 'Ayush Kumar Maurya',   icon: '<i class="fa-brands fa-linkedin"></i>' },
    email:     { url: 'mailto:strangeinfinity.dev@gmail.com',       handle: 'strangeinfinity.dev@gmail.com', icon: '<i class="fa-solid fa-envelope"></i>' },
    twitter:   { url: 'https://x.com/strang3infinity',             handle: '@strang3infinity',     icon: '<i class="fa-brands fa-x-twitter"></i>' },
  },

  /* ── Site Meta ── */
  meta: {
    name:    'StrangeInfinity',
    tagline: 'Building the Future, One Commit at a Time',
    desc:    'Open-source software, cosmic tools, and boundary-breaking technology from the edge of the digital frontier.',
  },

  /* ── Stats ── */
  stats: [
    { value: 27,  suffix: '+', label: 'Repositories'   },
    { value: 45,  suffix: '+', label: 'GitHub Stars'   },
    { value: 25,  suffix: 'K+', label: 'Lines of Code' },
    { value: 3,   suffix: '+', label: 'Years Building' },
  ],

  /* ── Featured Products ── */
  products: [
    {
      id:       'dedroid',
      name:     'Dedroid',
      icon:     '<i class="fa-brands fa-debian" style="color:#d70a53"></i>',
      featured: true,
      status:   'active',
      color:    'crimson',
      desc:     'Debian GNU/Linux 13 (Trixie) rootless terminal CLI workstation for Android built in native Kotlin & Jetpack, powered by PRoot virtualization, passwordless sudo, and SD card storage bridge.',
      features: [
        'Built with native Kotlin & modern Android Jetpack architecture',
        'Debian 13 (Trixie) full apt package ecosystem',
        '100% rootless PRoot virtualization (Knox safe)',
        'Native passwordless sudo & PAM bridge',
        'Direct /sdcard & internal phone storage access',
        'Custom developer coding keyboard toolbar',
      ],
      links: {
        github:   'https://github.com/dev-hints/Dedroid',
        download: 'https://github.com/dev-hints/Dedroid/releases/download/First-Release/dedroid-signed.apk',
        demo:     'https://www.strangeinfinity.store/Dedroid/',
        docs:     'https://www.strangeinfinity.store/Dedroid/docs.html',
      },
      tags: ['Kotlin', 'Android', 'Debian', 'Linux', 'PRoot'],
    },
    {
      id:       '2048-infinity',
      name:     '2048-Infinity',
      icon:     '<i class="fa-solid fa-gamepad" style="color:#6366f1"></i>',
      featured: true,
      status:   'active',
      color:    'primary',
      desc:     'Original native Android puzzle game engineered in Kotlin 2.0 & Jetpack Compose Material 3 with 64-bit infinite progression beyond 2048, 60/120Hz animations, synthesized audio, and zero tracking.',
      features: [
        'Built with native Kotlin 2.0 & Jetpack Compose Material 3',
        '64-bit integer engine with progression beyond 2048 into infinity',
        'Multiple grid dimensions: 3x3 (Blitz), 4x4 (Classic), 5x5 (Strategy)',
        'Single-move undo and Jetpack DataStore local persistence',
        'Low-latency synthesized audio tones & rich tactile haptic feedback',
        '100% offline with zero internet permissions, ads, or trackers',
      ],
      links: {
        github:   'https://github.com/dev-hints/2048-Infinity',
        download: 'https://github.com/dev-hints/2048-Infinity/releases/download/First/2048-Infinity-v1.0.0-release.apk',
        demo:     'https://www.strangeinfinity.store/2048-Infinity/',
        docs:     'https://www.strangeinfinity.store/2048-Infinity/docs.html',
      },
      tags: ['Kotlin', 'Android', 'Compose', 'Jetpack', 'Game'],
    },
    {
      id:       'markview',
      name:     'MarkView',
      icon:     '<i class="fa-solid fa-file-code" style="color:#0ea5e9"></i>',
      featured: true,
      status:   'active',
      color:    'cyan',
      desc:     'High-performance cross-platform desktop Markdown application engineered with Tauri 2, Rust, React 19, TypeScript, Shiki syntax highlighting, KaTeX math, and real-time filesystem watching.',
      features: [
        'Tauri 2 & native memory-safe Rust backend',
        'React 19 + TypeScript + Tailwind CSS 4 UI',
        'Shiki code highlighting across 25+ languages',
        'KaTeX math formulas & Mermaid diagrams',
        'Fuzzy Quick Open (Ctrl+P) & workspace regex search',
        'Debounced real-time filesystem watcher (notify)',
      ],
      links: {
        github:   'https://github.com/dev-hints/MarkView',
        download: 'https://www.strangeinfinity.store/MarkView/#download',
        demo:     'https://www.strangeinfinity.store/MarkView/',
        docs:     'https://www.strangeinfinity.store/MarkView/docs.html',
      },
      tags: ['Rust', 'Tauri', 'React', 'TypeScript', 'Desktop'],
    },
    {
      id:       'mydrive',
      name:     'MyDrive Cloud',
      icon:     '<i class="fa-solid fa-cloud" style="color:#6366f1"></i>',
      featured: true,
      status:   'active',
      color:    'primary',
      desc:     'High-performance, self-hosted private cloud storage and media streaming server with 4MB chunked resumable streaming uploads, contacts sync, role-based access control, and 100% data sovereignty.',
      features: [
        'Resumable 4MB chunked streaming upload engine',
        'HTTP 206 range-request media streaming (video/audio)',
        'Phone contacts sync via Web Contact Picker API',
        'Password-protected share links with expiration timers',
        'Argon2id hashing, CSRF defense & path traversal protection',
        'Runs on Docker, Linux servers, and Android (Termux)',
      ],
      links: {
        github:   'https://github.com/dev-hints/mydrive',
        download: 'https://www.strangeinfinity.store/MyDrive/#download',
        demo:     'https://www.strangeinfinity.store/MyDrive/',
        docs:     'https://www.strangeinfinity.store/MyDrive/docs.html',
      },
      tags: ['Python', 'FastAPI', 'Docker', 'SQLite', 'Cloud'],
    },
    {
      id:       'infinity-writer',
      name:     'Infinity Writer',
      icon:     '<i class="fa-solid fa-feather-pointed" style="color:var(--color-primary-light)"></i>',
      featured: true,
      status:   'active',
      color:    'primary',
      desc:     'Infinity Writer strictly focuses on generating clean, semantic, and production-ready HTML that natively supports dark mode right out of the box.',
      features: [
        'Generates clean & semantic HTML code',
        'Native out-of-the-box dark mode support',
        'Zero external runtime dependencies',
        'Built-in typographic hierarchy',
        'Accessible ARIA component structure',
        'Production-ready export templates',
      ],
      links: {
        github: 'https://github.com/dev-hints/Infinity-Writer',
        demo:   'https://www.strangeinfinity.store/Infinity-Writer/',
        docs:   'https://www.strangeinfinity.store/Infinity-Writer/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Web Tool'],
    },
    {
      id:       'airpointer',
      name:     'AirPointer',
      icon:     '<i class="fa-solid fa-hand-pointer" style="color:var(--color-cyan)"></i>',
      featured: true,
      status:   'active',
      color:    'cyan',
      desc:     'A real-time virtual mouse system enabling touchless computer interaction via webcam hand gesture tracking powered by OpenCV and MediaPipe.',
      features: [
        'Touchless gesture cursor control',
        'Real-time webcam hand tracking',
        'Smooth mouse movement & click simulation',
        'Customizable gesture sensitivity',
        'Cross-platform Python desktop execution',
        'Low latency & lightweight processing',
      ],
      links: {
        github: 'https://github.com/dev-hints/AirPointer',
        demo:   'https://www.strangeinfinity.store/AirPointer/',
        docs:   'https://www.strangeinfinity.store/AirPointer/docs.html',
      },
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    },
    {
      id:       'infinity-browser',
      name:     'Infinity Browser',
      icon:     '<i class="fa-solid fa-globe" style="color:var(--color-purple)"></i>',
      featured: true,
      status:   'active',
      color:    'purple',
      desc:     'A privacy-first, feature-rich desktop web browser built with Python and PyQt6. Experience fast, secure browsing with built-in productivity tools.',
      features: [
        'Privacy-first with built-in ad blocking',
        'Download manager with live progress tracking',
        'Secure local password vault',
        'Bookmark manager & custom tab groups',
        'Built-in PDF viewer & document reader',
        'Custom CSS & JS script injection',
      ],
      links: {
        github:   'https://github.com/dev-hints/infinity-browser',
        download: 'https://www.strangeinfinity.store/Infinity-Browser/#download',
        demo:     'https://www.strangeinfinity.store/Infinity-Browser/',
        docs:     'https://www.strangeinfinity.store/Infinity-Browser/docs.html',
      },
      tags: ['Python', 'PyQt6', 'QtWebEngine', 'Desktop'],
    },
    {
      id:       'notes-app',
      name:     'Cosmic Notes App',
      icon:     '<i class="fa-solid fa-note-sticky" style="color:var(--color-pink)"></i>',
      featured: false,
      status:   'active',
      color:    'pink',
      desc:     'A visually stunning, highly interactive frontend-only Notes Application that brings a deep space experience right into your browser.',
      features: [
        'Deep space cosmic glassmorphism UI',
        'Interactive task tagging & categories',
        'Instant search & auto-save to LocalStorage',
        'Rich text document formatting',
        'Responsive layout across all devices',
        'Pure Vanilla HTML, CSS & JavaScript',
      ],
      links: {
        github: 'https://github.com/dev-hints/Notes-App',
        demo:   'https://www.strangeinfinity.store/Notes-App/',
        docs:   'https://www.strangeinfinity.store/Notes-App/docs.html',
      },
      tags: ['JavaScript', 'CSS3', 'HTML5', 'Productivity'],
    },
    {
      id:       '2048-nexus',
      name:     '2048 Nexus',
      icon:     '<i class="fa-solid fa-gamepad" style="color:var(--color-emerald)"></i>',
      featured: false,
      status:   'active',
      color:    'emerald',
      desc:     'Production-grade 2048 desktop game built with Python and PyQt6, featuring Expectimax AI auto-play, multiple grid modes, neon themes, and standalone installers (.exe, .deb, .rpm).',
      features: [
        'Multiple modes (Classic, Time Attack, AI)',
        'Automated Expectimax AI solver playback',
        'Cross-platform (.exe, .deb, .rpm packages)',
        'Ambient cosmic audio & sound effects',
        'Custom neon themes & skins',
        'Smooth tile merge animations',
      ],
      links: {
        github:   'https://github.com/dev-hints/2048-Nexus',
        download: 'https://www.strangeinfinity.store/2048-Nexus/#download',
        demo:     'https://www.strangeinfinity.store/2048-Nexus/',
        docs:     'https://www.strangeinfinity.store/2048-Nexus/docs.html',
      },
      tags: ['Python', 'PyQt6', 'Desktop', 'Game'],
    },
    {
      id:       'snake-game',
      name:     'Neon Snake Game',
      icon:     '<i class="fa-solid fa-staff-snake" style="color:#22c55e"></i>',
      featured: false,
      status:   'active',
      color:    'emerald',
      desc:     'Arcade retro-futuristic Snake game with HTML5 Canvas, glowing particle bursts, power-ups, and synthesized Web Audio sound.',
      features: [
        'HTML5 2D Canvas hardware-accelerated 60 FPS',
        'Procedural Web Audio API sound synthesis',
        '4 powerups (Speed Boost, Ghost, Freeze, Magnet)',
        'Combo multiplier streak score engine',
        'Responsive mobile touch swipe controls',
        'Zero external runtime dependencies',
      ],
      links: {
        github: 'https://github.com/dev-hints/Snake-Game',
        demo:   'https://www.strangeinfinity.store/Snake-Game/',
        docs:   'https://www.strangeinfinity.store/Snake-Game/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Canvas', 'Game'],
    },
    {
      id:       'gemini-cli',
      name:     'Gemini CLI Chatbot',
      icon:     '<i class="fa-solid fa-terminal" style="color:#06b6d4"></i>',
      featured: false,
      status:   'active',
      color:    'cyan',
      desc:     'Ultra-fast terminal AI companion written 100% in pure Bash. Chat in interactive REPL, pipe Unix commands, and stream responses in real-time.',
      features: [
        '100% Pure Bash shell script with zero runtime overhead',
        'Real-time token streaming with Server-Sent Events (SSE)',
        'Unix stdin pipe redirection & error diagnostics',
        'Multi-turn conversation context history',
        'Custom system personas (Coder, Sysadmin, Auditor)',
        'Encrypted local API key storage',
      ],
      links: {
        github: 'https://github.com/dev-hints/Gemini_cli',
        demo:   'https://www.strangeinfinity.store/Gemini-CLI/',
        docs:   'https://www.strangeinfinity.store/Gemini-CLI/docs.html',
      },
      tags: ['Shell', 'Bash', 'AI', 'CLI'],
    },
    {
      id:       'calccosmos',
      name:     'CalcCosmos Calculator',
      icon:     '<i class="fa-solid fa-calculator" style="color:#f59e0b"></i>',
      featured: false,
      status:   'active',
      color:    'amber',
      desc:     'High-precision scientific computation engine with cosmic glassmorphism UI, trigonometric operations, and persistent calculation history.',
      features: [
        'Arbitrary precision floating-point mitigation',
        'Trigonometric, hyperbolic & logarithmic functions',
        'Dijkstra Shunting-yard expression parsing',
        'Persistent calculation history ledger',
        'Memory registers (M+, M-, MR, MC)',
        'Full keyboard numpad bindings',
      ],
      links: {
        github: 'https://github.com/dev-hints/CalcCosmos',
        demo:   'https://www.strangeinfinity.store/CalcCosmos/',
        docs:   'https://www.strangeinfinity.store/CalcCosmos/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Math', 'PWA'],
    },
    {
      id:       'to-do',
      name:     'ToDo Task Manager',
      icon:     '<i class="fa-solid fa-square-check" style="color:#14b8a6"></i>',
      featured: false,
      status:   'active',
      color:    'cyan',
      desc:     'Distraction-free personal task management and Pomodoro workstation built with cosmic glassmorphism and 100% local persistence.',
      features: [
        'Cosmic glassmorphism dashboard UI',
        'Custom hashtag categories & priority matrix',
        'Integrated Pomodoro sprint focus timer',
        'Subtask hierarchy & progress percentage metrics',
        'One-click JSON database backup & restore',
        'Zero cloud tracking local-first privacy',
      ],
      links: {
        github: 'https://github.com/dev-hints/To-Do',
        demo:   'https://www.strangeinfinity.store/To-Do/',
        docs:   'https://www.strangeinfinity.store/To-Do/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Productivity', 'PWA'],
    },
  ],

  /* ── All Projects ── */
  projects: [
    {
      id:       'dedroid',
      title:    'Dedroid Terminal on Android',
      icon:     '<i class="fa-brands fa-debian" style="color:#d70a53"></i>',
      status:   'active',
      desc:     'Debian GNU/Linux 13 (Trixie) rootless terminal workstation for Android built in Kotlin with PRoot virtualization and custom developer keyboard.',
      tags:     ['Kotlin', 'Android', 'Debian', 'Shell'],
      github:   'https://github.com/dev-hints/Dedroid',
      download: 'https://github.com/dev-hints/Dedroid/releases/download/First-Release/dedroid-signed.apk',
      demo:     'https://www.strangeinfinity.store/Dedroid/',
    },
    {
      id:       '2048-infinity',
      title:    '2048-Infinity Android Game',
      icon:     '<i class="fa-solid fa-gamepad" style="color:#6366f1"></i>',
      status:   'active',
      desc:     'Original native Android puzzle game built in Kotlin 2 & Jetpack Compose M3 with 64-bit infinite progression beyond 2048 and zero permissions.',
      tags:     ['Kotlin', 'Android', 'Compose', 'Game'],
      github:   'https://github.com/dev-hints/2048-Infinity',
      download: 'https://github.com/dev-hints/2048-Infinity/releases/download/First/2048-Infinity-v1.0.0-release.apk',
      demo:     'https://www.strangeinfinity.store/2048-Infinity/',
    },
    {
      id:       'markview',
      title:    'MarkView Desktop Reader',
      icon:     '<i class="fa-solid fa-file-code" style="color:#0ea5e9"></i>',
      status:   'active',
      desc:     'High-performance desktop Markdown application in Tauri 2, Rust & React 19 with Shiki highlighting, KaTeX formulas, and live file watcher.',
      tags:     ['Rust', 'Tauri', 'React', 'Desktop'],
      github:   'https://github.com/dev-hints/MarkView',
      download: 'https://www.strangeinfinity.store/MarkView/#download',
      demo:     'https://www.strangeinfinity.store/MarkView/',
    },
    {
      id:       'mydrive',
      title:    'MyDrive Private Cloud',
      icon:     '<i class="fa-solid fa-cloud" style="color:#6366f1"></i>',
      status:   'active',
      desc:     'High-performance, self-hosted private cloud storage & media streaming server with 4MB chunked uploads, phone contacts sync, and zero tracking.',
      tags:     ['Python', 'FastAPI', 'Docker', 'Cloud'],
      github:   'https://github.com/dev-hints/mydrive',
      download: 'https://www.strangeinfinity.store/MyDrive/#download',
      demo:     'https://www.strangeinfinity.store/MyDrive/',
    },
    {
      id:     'infinity-writer',
      title:  'Infinity Writer',
      icon:   '<i class="fa-solid fa-feather-pointed" style="color:var(--color-primary-light)"></i>',
      status: 'active',
      desc:   'Focuses strictly on generating clean, semantic, and production-ready HTML with native out-of-the-box dark mode support.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Generator'],
      github: 'https://github.com/dev-hints/Infinity-Writer',
      demo:   'https://www.strangeinfinity.store/Infinity-Writer/',
    },
    {
      id:     'airpointer',
      title:  'AirPointer Virtual Mouse',
      icon:   '<i class="fa-solid fa-hand-pointer" style="color:var(--color-cyan)"></i>',
      status: 'active',
      desc:   'Touchless real-time virtual mouse system translating webcam hand gestures into cursor movement using computer vision.',
      tags:   ['Python', 'OpenCV', 'MediaPipe', 'AI'],
      github: 'https://github.com/dev-hints/AirPointer',
      demo:   'https://www.strangeinfinity.store/AirPointer/',
    },
    {
      id:       'infinity-browser',
      title:    'Infinity Browser',
      icon:     '<i class="fa-solid fa-globe" style="color:var(--color-purple)"></i>',
      status:   'active',
      desc:     'Fast, privacy-first desktop web browser built with Python and PyQt6 featuring ad blocking, password vault, and downloads.',
      tags:     ['Python', 'PyQt6', 'Desktop', 'Privacy'],
      github:   'https://github.com/dev-hints/infinity-browser',
      download: 'https://www.strangeinfinity.store/Infinity-Browser/#download',
      demo:     'https://www.strangeinfinity.store/Infinity-Browser/',
    },
    {
      id:     'notes-app',
      title:  'Cosmic Notes App',
      icon:   '<i class="fa-solid fa-note-sticky" style="color:var(--color-pink)"></i>',
      status: 'active',
      desc:   'Visually stunning deep-space themed notes application with rich text formatting, categories, and local storage.',
      tags:   ['JavaScript', 'CSS3', 'HTML5', 'Productivity'],
      github: 'https://github.com/dev-hints/Notes-App',
      demo:   'https://www.strangeinfinity.store/Notes-App/',
    },
    {
      id:       '2048-nexus',
      title:    '2048 Nexus',
      icon:     '<i class="fa-solid fa-gamepad" style="color:var(--color-emerald)"></i>',
      status:   'active',
      desc:     'Production-grade 2048 desktop game for Windows (.exe) & Linux (.deb, .rpm) featuring AI play, multiple grid sizes, and neon UI.',
      tags:     ['Python', 'PyQt6', 'Desktop', 'Game'],
      github:   'https://github.com/dev-hints/2048-Nexus',
      download: 'https://www.strangeinfinity.store/2048-Nexus/#download',
      demo:     'https://www.strangeinfinity.store/2048-Nexus/',
    },
    {
      id:     'snake-game',
      title:  'Neon Snake Game',
      icon:   '<i class="fa-solid fa-staff-snake" style="color:#22c55e"></i>',
      status: 'active',
      desc:   'Modern responsive Snake game built with HTML, CSS, and modular JavaScript with a dark neon glassmorphism UI.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Game'],
      github: 'https://github.com/dev-hints/Snake-Game',
      demo:   'https://www.strangeinfinity.store/Snake-Game/',
    },
    {
      id:     'gemini-cli',
      title:  'Gemini CLI Chatbot',
      icon:   '<i class="fa-solid fa-terminal" style="color:#06b6d4"></i>',
      status: 'active',
      desc:   'Lightweight terminal AI chatbot built entirely in Bash with a hacker/cosmic neon aesthetic and typing animations.',
      tags:   ['Shell', 'Bash', 'AI', 'CLI'],
      github: 'https://github.com/dev-hints/Gemini_cli',
      demo:   'https://www.strangeinfinity.store/Gemini-CLI/',
    },
    {
      id:     'calccosmos',
      title:  'CalcCosmos Calculator',
      icon:   '<i class="fa-solid fa-calculator" style="color:#f59e0b"></i>',
      status: 'active',
      desc:   'Responsive scientific calculator with advanced mathematical operations, history tracking, and cosmic themes.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Math'],
      github: 'https://github.com/dev-hints/CalcCosmos',
      demo:   'https://www.strangeinfinity.store/CalcCosmos/',
    },
    {
      id:     'to-do',
      title:  'ToDo Task Manager',
      icon:   '<i class="fa-solid fa-square-check" style="color:#10b981"></i>',
      status: 'active',
      desc:   'Advanced productivity task management application with glassmorphism UI, progress tracking, and category filters.',
      tags:   ['JavaScript', 'CSS3', 'HTML5', 'Productivity'],
      github: 'https://github.com/dev-hints/To-Do',
      demo:   'https://www.strangeinfinity.store/To-Do/',
    },
  ],

  /* ── Technology Stack ── */
  technologies: [
    { name: 'Kotlin',      icon: '<i class="devicon-kotlin-plain colored"></i>', level: 90, color: '#7F52FF' },
    { name: 'Android',     icon: '<i class="devicon-android-plain colored"></i>', level: 88, color: '#3ddc84' },
    { name: 'Python',      icon: '<i class="devicon-python-plain colored"></i>', level: 92, color: '#3776ab' },
    { name: 'Rust',        icon: '<i class="devicon-rust-plain colored"></i>', level: 85, color: '#dea584' },
    { name: 'JavaScript',  icon: '<i class="devicon-javascript-plain colored"></i>', level: 90, color: '#f7df1e' },
    { name: 'HTML5',       icon: '<i class="devicon-html5-plain colored"></i>', level: 95, color: '#e34f26' },
    { name: 'CSS3',        icon: '<i class="devicon-css3-plain colored"></i>', level: 92, color: '#1572b6' },
    { name: 'FastAPI',     icon: '<i class="devicon-fastapi-plain colored"></i>', level: 88, color: '#009688' },
    { name: 'Docker',      icon: '<i class="devicon-docker-plain colored"></i>', level: 86, color: '#2496ed' },
    { name: 'OpenCV',      icon: '<i class="devicon-opencv-plain colored"></i>', level: 80, color: '#5C3EE8' },
    { name: 'PyQt6',       icon: '<i class="devicon-qt-original colored"></i>', level: 85, color: '#41CD52' },
    { name: 'Bash / Shell',icon: '<i class="devicon-bash-plain colored"></i>', level: 85, color: '#4eaa25' },
    { name: 'Git & GitHub',icon: '<i class="devicon-git-plain colored"></i>', level: 90, color: '#f05032' },
    { name: 'Linux',       icon: '<i class="devicon-linux-plain colored"></i>', level: 88, color: '#fcc624' },
  ],

  /* ── GitHub Repositories ── */
  repos: [
    { name: 'Dedroid',         desc: 'Debian 13 (Trixie) rootless terminal CLI environment for Android',           lang: 'Kotlin / Shell', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 18', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 4' },
    { name: '2048-Infinity',   desc: 'Native Android puzzle game in Kotlin 2 & Jetpack Compose with infinite 64-bit engine', lang: 'Kotlin', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 12', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 2' },
    { name: 'MarkView',        desc: 'Modern cross-platform desktop Markdown application in Tauri 2 & React 19',  lang: 'Rust / TypeScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 14', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 2' },
    { name: 'mydrive',         desc: 'Self-hosted private cloud storage & media streaming server with FastAPI',   lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 22', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 5' },
    { name: 'Infinity-Writer', desc: 'Generates clean, semantic HTML with native out-of-the-box dark mode support', lang: 'JavaScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 12', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 3' },
    { name: 'AirPointer',      desc: 'Real-time virtual mouse system using webcam hand gesture tracking',        lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 15', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 4' },
    { name: 'infinity-browser',desc: 'Fast, private desktop web browser built with Python and PyQt6',            lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 3',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 1' },
    { name: 'Notes-App',       desc: 'Deep space-themed notes app built with pure HTML/CSS/JS',                   lang: 'CSS',        stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: '2048-Nexus',      desc: '2048 desktop game with AI solver, ambient audio, and neon UI',            lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'Snake-Game',      desc: 'Responsive neon Snake game built with pure HTML, CSS, & modular JS',       lang: 'JavaScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'Gemini_cli',      desc: 'Hacker-style terminal AI chatbot in pure Bash with typing animations',    lang: 'Shell',      stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'CalcCosmos',      desc: 'Responsive cosmic scientific calculator built with Vanilla JS & CSS',     lang: 'JavaScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'To-Do',           desc: 'Glassmorphism task manager with progress tracking & categories',           lang: 'CSS',        stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
  ],

  /* ── Timeline ── */
  timeline: [
    {
      date:    'Q1 2026',
      title:   'Open-Source Foundations',
      desc:    'Initiated dev-hints open-source projects including web applications, games, and developer utilities.',
      active:  false,
    },
    {
      date:    'Q2 2026',
      title:   'Infinity Browser & Desktop Apps',
      desc:    'Developed Infinity Browser for privacy-first desktop browsing alongside PyQt6 2048 Nexus game.',
      active:  false,
    },
    {
      date:    'Q3 2026',
      title:   'AirPointer & Gemini CLI',
      desc:    'Released AirPointer computer-vision virtual mouse and Gemini CLI hacker-style terminal chatbot in pure Bash.',
      active:  false,
    },
    {
      date:    'Q4 2026',
      title:   'Dedroid, MarkView & MyDrive',
      desc:    'Launched Dedroid Debian 13 environment for Android, MarkView high-performance Tauri 2 Markdown reader, and MyDrive self-hosted private cloud.',
      active:  true,
    },
  ],

  /* ── Tech Quotes ── */
  quotes: [
    { text: 'Any sufficiently advanced technology is indistinguishable from magic.', author: 'Arthur C. Clarke' },
    { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
    { text: 'Software is eating the world.', author: 'Marc Andreessen' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
    { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'The universe is under no obligation to make sense to you.', author: 'Neil deGrasse Tyson' },
  ],

  /* ── Core Values ── */
  values: [
    { icon: '<i class="fa-solid fa-lock-open" style="color:var(--color-primary-light)"></i>', title: 'Open Source',   desc: 'Everything lives in the open. We build accessible, transparent code for the global developer community.' },
    { icon: '<i class="fa-solid fa-shield-halved" style="color:var(--color-cyan)"></i>', title: 'Privacy First', desc: 'Your data belongs to you. Zero telemetry, local storage, and end-to-end encrypted designs by default.' },
    { icon: '<i class="fa-solid fa-bolt" style="color:#f59e0b"></i>', title: 'Performance',   desc: 'Every millisecond matters. Lightweight, zero-bloat implementations tailored for speed and efficiency.' },
    { icon: '<i class="fa-solid fa-atom" style="color:var(--color-secondary)"></i>', title: 'Innovation',    desc: 'Exploring computer vision, CLI AI tools, PyQt desktop apps, and cutting-edge web applications.' },
  ],

};

/* ──────────────────────────────────────────────
   RENDERER — Reads SI_CONFIG and builds DOM
   ────────────────────────────────────────────── */
const ProjectRenderer = (() => {

  const INITIAL_LIMIT = 6;
  let currentFilter = 'all';
  let isExpanded = false;

  /** Render project cards with 6-item default pagination */
  function renderProjects(filter = 'all', keepExpanded = false) {
    const container = document.getElementById('projects-grid');
    const paginationWrap = document.getElementById('projects-pagination-wrap');
    if (!container) return;

    if (filter !== currentFilter && !keepExpanded) {
      isExpanded = false;
    }
    currentFilter = filter;

    const allFilteredProjects = currentFilter === 'all'
      ? SI_CONFIG.projects
      : SI_CONFIG.projects.filter(p => p.tags.some(t => t.toLowerCase().includes(currentFilter)));

    const visibleProjects = isExpanded
      ? allFilteredProjects
      : allFilteredProjects.slice(0, INITIAL_LIMIT);

    container.innerHTML = visibleProjects.map((p, i) => `
      <article class="project-card reveal" style="transition-delay:${i * 0.05}s"
               data-project="${p.id}" role="article" aria-label="${p.title}">
        <div class="project-card-header">
          <span class="project-icon" aria-hidden="true">${p.icon}</span>
          <span class="project-status-badge status-${p.status}">${p.status}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.desc}</p>
          <div class="project-tags" aria-label="Technologies">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"
               class="btn btn-ghost btn-sm" aria-label="View ${p.title} on GitHub">
               <i class="fa-brands fa-github"></i> GitHub</a>` : ''}
          ${p.download ? `<a href="${p.download}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary btn-sm" aria-label="Download ${p.title}">
               <i class="fa-solid fa-download"></i> Download</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"
               class="btn ${p.download ? 'btn-outline' : 'btn-primary'} btn-sm" aria-label="View ${p.title} live demo">
               ${p.download ? '<span><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</span>' : '<i class="fa-solid fa-rocket"></i> Demo'}</a>` : ''}
          ${!p.github && !p.demo && !p.download ? `<span class="btn btn-ghost btn-sm" style="opacity:0.5;cursor:default;">Coming Soon</span>` : ''}
        </div>
      </article>
    `).join('');

    // Pagination / Load More button
    if (paginationWrap) {
      if (allFilteredProjects.length > INITIAL_LIMIT) {
        paginationWrap.innerHTML = `
          <button id="btn-toggle-projects" class="btn btn-outline" style="margin:0 auto;display:inline-flex;align-items:center;gap:var(--space-2);">
            <span>
              <i class="fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
              ${isExpanded ? 'Show Fewer Projects' : `View All Projects (${allFilteredProjects.length})`}
            </span>
          </button>
        `;
        const toggleBtn = document.getElementById('btn-toggle-projects');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderProjects(currentFilter, true);
            if (!isExpanded) {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
        }
      } else {
        paginationWrap.innerHTML = '';
      }
    }

    // Trigger reveal for new cards
    requestAnimationFrame(() => {
      container.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      if (paginationWrap) paginationWrap.classList.add('revealed');
    });
  }

  let productsExpanded = false;
  const PRODUCTS_INITIAL_COUNT = 4;

  /** Render featured products (Minimal, Clean & Professional) */
  function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    const visibleProducts = productsExpanded
      ? SI_CONFIG.products
      : SI_CONFIG.products.slice(0, PRODUCTS_INITIAL_COUNT);

    container.innerHTML = visibleProducts.map((p, i) => {
      const primaryBadge = p.tags && p.tags[0] ? p.tags[0] : 'Flagship';
      const visibleTags = (p.tags || []).slice(0, 3);

      return `
      <article class="product-card ${p.featured ? 'featured' : ''} reveal revealed"
               role="article" aria-label="${p.name}">
        <div class="product-card-top">
          <div class="product-icon-wrap" aria-hidden="true">${p.icon}</div>
          <span class="product-badge">${primaryBadge}</span>
        </div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-tags" aria-label="Tags">
          ${visibleTags.map(t => `<span class="product-tag">${t}</span>`).join('')}
        </div>
        <div class="product-actions">
          ${p.links.download ? `<a href="${p.links.download}" ${p.links.download.startsWith('http') ? 'download rel="noopener noreferrer"' : ''}
               class="btn btn-primary btn-sm" aria-label="Download ${p.name}">
               <i class="fa-solid fa-download"></i> Download</a>` : ''}
          ${p.links.demo && !p.links.download ? `<a href="${p.links.demo}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary btn-sm" aria-label="${p.name} Live Demo">
               <i class="fa-solid fa-rocket"></i> Demo</a>` : ''}
          ${p.links.docs ? `<a href="${p.links.docs}" target="_blank" rel="noopener noreferrer"
               class="btn btn-ghost btn-sm" aria-label="View ${p.name} Documentation">
               <i class="fa-solid fa-book"></i> Docs</a>` : ''}
          ${p.links.demo && p.links.download ? `<a href="${p.links.demo}" target="_blank" rel="noopener noreferrer"
               class="btn btn-outline btn-sm" aria-label="View ${p.name} Showcase">
               <span><i class="fa-solid fa-arrow-up-right-from-square"></i> Portal</span></a>` : ''}
          ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener noreferrer"
               class="btn btn-ghost btn-sm" aria-label="View ${p.name} on GitHub">
               <i class="fa-brands fa-github"></i> GitHub</a>` : ''}
        </div>
      </article>
      `;
    }).join('');

    updateProductsToggleButton();

    // Ensure immediate visibility on all mobile devices & desktops
    requestAnimationFrame(() => {
      container.querySelectorAll('.product-card').forEach(el => el.classList.add('revealed'));
      const wrap = document.getElementById('products-more-wrap');
      if (wrap) wrap.classList.add('revealed');
    });
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

    if (productsExpanded) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> <span>Show Fewer Products</span>';
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      toggleBtn.innerHTML = `<i class="fa-solid fa-chevron-down"></i> <span>View All Flagship Products (${remaining} more)</span>`;
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function setupProductsToggle() {
    const toggleBtn = document.getElementById('products-toggle-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      productsExpanded = !productsExpanded;
      renderProducts();
      if (!productsExpanded) {
        const section = document.getElementById('products');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /** Render tech stack */
  function renderTech() {
    const container = document.getElementById('tech-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.technologies.map((t, i) => `
      <div class="tech-card reveal delay-${(i % 5) + 1}" data-level="${t.level}"
           aria-label="${t.name} — ${t.level}% proficiency">
        <span class="tech-icon" aria-hidden="true">${t.icon}</span>
        <span class="tech-name">${t.name}</span>
        <div class="tech-level" role="progressbar" aria-valuenow="${t.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${t.name} proficiency">
          <div class="tech-level-fill" data-fill="${t.level}%"></div>
        </div>
      </div>
    `).join('');
  }

  /** Animate tech level bars when visible */
  function animateTechBars() {
    document.querySelectorAll('.tech-level-fill').forEach(bar => {
      bar.style.width = bar.dataset.fill;
    });
  }

  /** Render GitHub repos */
  function renderRepos() {
    const container = document.getElementById('repos-list');
    if (!container) return;

    container.innerHTML = SI_CONFIG.repos.map(r => `
      <a href="https://github.com/dev-hints/${r.name}" target="_blank" rel="noopener noreferrer"
         class="repo-card reveal" aria-label="Repository: ${r.name}">
        <div class="repo-name"><i class="fa-solid fa-cube" style="color:var(--color-primary-light);margin-right:0.4rem;"></i>${r.name}</div>
        <p class="repo-desc">${r.desc}</p>
        <div class="repo-meta">
          <span class="repo-lang">${r.lang}</span>
          <span>${r.stars}</span>
          <span>${r.forks}</span>
        </div>
      </a>
    `).join('');
  }

  /** Render timeline */
  function renderTimeline() {
    const container = document.getElementById('timeline-list');
    if (!container) return;

    container.innerHTML = SI_CONFIG.timeline.map((t, i) => `
      <div class="timeline-item ${t.active ? 'active' : ''} reveal delay-${(i % 4) + 1}">
        <div class="timeline-date">${t.date}</div>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.desc}</p>
      </div>
    `).join('');
  }

  /** Render value cards */
  function renderValues() {
    const container = document.getElementById('values-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.values.map((v, i) => `
      <div class="value-card reveal delay-${i + 1}">
        <div class="value-icon" aria-hidden="true">${v.icon}</div>
        <h4 class="value-title">${v.title}</h4>
        <p class="value-desc">${v.desc}</p>
      </div>
    `).join('');
  }

  /** Render social contact cards */
  function renderSocial() {
    const container = document.getElementById('social-links-grid');
    if (!container) return;

    const socials = [
      { key: 'github',    name: 'GitHub',      bg: 'rgba(36,41,47,0.5)'       },
      { key: 'instagram', name: 'Instagram',   bg: 'rgba(225,48,108,0.15)'    },
      { key: 'twitter',   name: 'X (Twitter)', bg: 'rgba(29,161,242,0.15)'   },
      { key: 'linkedin',  name: 'LinkedIn',    bg: 'rgba(0,119,181,0.15)'     },
      { key: 'email',     name: 'Email',       bg: 'rgba(99,102,241,0.15)'    },
    ];

    container.innerHTML = socials.map((s, i) => {
      const data = SI_CONFIG.social[s.key];
      return `
        <a href="${data.url}" target="_blank" rel="noopener noreferrer"
           class="social-card reveal delay-${i + 1}" aria-label="Connect on ${s.name}">
          <div class="social-icon-wrap" style="background:${s.bg}" aria-hidden="true">${data.icon}</div>
          <div>
            <div class="social-card-name">${s.name}</div>
            <div class="social-card-handle">${data.handle}</div>
          </div>
          <span class="social-card-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.85em;"></i></span>
        </a>
      `;
    }).join('');
  }

  /** Render footer social */
  function renderFooterSocial() {
    const container = document.getElementById('footer-social');
    if (!container) return;

    const links = [
      { key: 'github',    label: 'GitHub' },
      { key: 'instagram', label: 'Instagram' },
      { key: 'twitter',   label: 'Twitter' },
      { key: 'linkedin',  label: 'LinkedIn' },
    ];
    container.innerHTML = links.map(l => {
      const d = SI_CONFIG.social[l.key];
      return `<a href="${d.url}" target="_blank" rel="noopener noreferrer"
                 aria-label="${l.label}: ${d.handle}">${d.icon}</a>`;
    }).join('');
  }

  /** Render nav social icons */
  function renderNavSocial() {
    const container = document.getElementById('nav-social');
    if (!container) return;

    const links = [
      { key: 'github', label: 'GitHub' },
      { key: 'twitter', label: 'Twitter' },
    ];
    container.innerHTML = links.map(l => {
      const d = SI_CONFIG.social[l.key];
      return `<a href="${d.url}" target="_blank" rel="noopener noreferrer"
                 aria-label="${l.label}: ${d.handle}" title="${l.label}">${d.icon}</a>`;
    }).join('');
  }

  /** Init all renderers */
  function init() {
    renderProjects();
    renderProducts();
    setupProductsToggle();
    renderTech();
    renderRepos();
    renderTimeline();
    renderValues();
    renderSocial();
    renderFooterSocial();
    renderNavSocial();
  }

  return { init, renderProjects, animateTechBars };
})();
