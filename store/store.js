/**
 * StrangeInfinity App Store — Catalog & Engine
 * store/store.js
 *
 * Professional, high-performance software store engine.
 * Supports synchronized OS filtering, Category filtering, accurate sorting,
 * multi-keyword search, deep linking (URL query params), and quick-view modal.
 */

const APPS_DATA = [
  {
    id: 'notes',
    name: 'Notes',
    tagline: 'Private Offline Android Note-Taking with Jetpack Compose',
    category: 'android',
    categoryName: 'Android Apps',
    platforms: ['android'],
    platformBadge: 'Android 8.0+',
    badge: 'Android App',
    size: '12 MB',
    sizeBytes: 12582912,
    version: 'v1.0.0',
    icon: '../Notes/icons/notes.png',
    summary: 'A complete, production-quality, offline-first Android note-taking application engineered with Kotlin, Jetpack Compose Material 3, and Android Room. Features rich text formatting, interactive checklists, vector drawing canvas, folders, tags, and client-side AES-256-GCM encrypted backups.',
    highlights: [
      '100% offline with zero internet permissions, zero tracking, and zero ads',
      'Engineered in native Kotlin 2.0 & Jetpack Compose Material 3',
      'Client-side AES-256-GCM encrypted backups with PBKDF2 key stretching',
      'Rich text styling, markdown formatting, & interactive checklists',
      'Smooth vector handwriting & sketch canvas with quadratic Bézier curves',
      'Color-coded folders, tags, pinning, instant search, and trash recycle bin'
    ],
    screenshots: [
      { src: '../Notes/screenshots/02-home-with-notes.png', title: 'Staggered Notes Grid & Categories' },
      { src: '../Notes/screenshots/03-note-editor.png', title: 'Distraction-Free Note Editor' },
      { src: '../Notes/screenshots/04-rich-text.png', title: 'Rich Text & Interactive Checklists' },
      { src: '../Notes/screenshots/05-folders.png', title: 'Folder Organization & Color Badges' },
      { src: '../Notes/screenshots/06-search-results.png', title: 'Instant Live Search' },
      { src: '../Notes/screenshots/07-drawing-editor.png', title: 'Vector Drawing & Sketch Canvas' },
      { src: '../Notes/screenshots/08-backup-screen.png', title: 'AES-256-GCM Encrypted Backup Vault' },
      { src: '../Notes/screenshots/11-dark-theme.png', title: 'OLED Obsidian Dark Mode' },
      { src: '../Notes/screenshots/12-settings.png', title: 'App Settings & Customization' }
    ],
    primaryDownload: {
      label: 'Download APK',
      url: 'https://github.com/dev-hints/Notes/releases/download/v1.0.0/Notes-release.apk',
      format: 'APK',
      size: '12 MB'
    },
    packages: [
      {
        name: 'Official Signed Release APK',
        url: 'https://github.com/dev-hints/Notes/releases/download/v1.0.0/Notes-release.apk',
        arch: 'Android 8.0+ (Universal ARM64 / x86_64)',
        size: '12 MB',
        recommended: true
      },
      {
        name: 'Source Code Package (.zip)',
        url: 'https://github.com/dev-hints/Notes/archive/refs/heads/main.zip',
        arch: 'Kotlin Source Code',
        size: '1.2 MB',
        recommended: false
      }
    ],
    keywords: ['notes', 'android', 'apk', 'kotlin', 'compose', 'material3', 'room', 'offline', 'encryption', 'aes-256', 'drawing', 'sketch', 'checklists', 'folders', 'privacy', 'samsung notes', 'keep'],
    portalUrl: '../Notes/',
    docsUrl: '../Notes/docs.html',
    githubUrl: 'https://github.com/dev-hints/Notes',
    license: 'Open Source',
    featured: true
  },
  {
    id: 'dedroid',
    name: 'Dedroid',
    tagline: 'Linux Terminal & Coding Environment for Android',
    category: 'android',
    categoryName: 'Android Apps',
    platforms: ['android', 'linux', 'cli'],
    platformBadge: 'Android 8.0+',
    badge: 'Mobile Terminal',
    size: '82 MB',
    sizeBytes: 85983232,
    version: 'v1.0.0',
    icon: '../Dedroid/icons/dedroid.png',
    summary: 'Native Android application built in Kotlin. Run a full Debian Linux command line environment directly on your Android phone or tablet. Install programming languages, edit code, and manage files without rooting your device.',
    highlights: [
      'Engineered in native Kotlin & Android Jetpack architecture',
      'Full Linux terminal environment for your Android phone or tablet',
      'Run Python, C/C++, Rust, Node.js, Git, and Vim directly on mobile',
      'Access files on your internal storage and SD card safely',
      'Special keyboard toolbar with Ctrl, Alt, Esc, and Tab shortcut keys',
      '100% rootless and completely safe for your device'
    ],
    screenshots: [
      { src: '../Dedroid/screenshots/terminal_session.png', title: 'Interactive Linux Terminal' },
      { src: '../Dedroid/screenshots/setup_wizard.png', title: '1-Click Quick Setup Wizard' },
      { src: '../Dedroid/screenshots/apt_package_manager.png', title: 'Package Manager & Tools' },
      { src: '../Dedroid/screenshots/notification_service.png', title: 'Background Service Notification' }
    ],
    primaryDownload: {
      label: 'Download APK',
      url: 'https://github.com/dev-hints/Dedroid/releases/download/First-Release/dedroid-signed.apk',
      format: 'APK',
      size: '82 MB'
    },
    packages: [
      {
        name: 'Official Signed APK',
        url: 'https://github.com/dev-hints/Dedroid/releases/download/First-Release/dedroid-signed.apk',
        arch: 'Android 8.0+ (Universal ARM64 / x86_64)',
        size: '82 MB',
        recommended: true
      },
      {
        name: 'Source Code Package (.zip)',
        url: 'https://github.com/dev-hints/Dedroid/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '3.4 MB',
        recommended: false
      }
    ],
    keywords: ['kotlin', 'android', 'apk', 'linux', 'terminal', 'debian', 'shell', 'bash', 'coding', 'rootless', 'cli', 'environment', 'sudo'],
    portalUrl: '../Dedroid/',
    docsUrl: '../Dedroid/docs.html',
    githubUrl: 'https://github.com/dev-hints/Dedroid',
    license: 'GPL-3.0',
    featured: true
  },
  {
    id: '2048-infinity',
    name: '2048 Infinity',
    tagline: 'Native Android 2048 Puzzle Game with Jetpack Compose',
    category: 'games',
    categoryName: 'Games & Arcade',
    platforms: ['android'],
    platformBadge: 'Android 8.0+',
    badge: 'Android Game',
    size: '11 MB',
    sizeBytes: 11284557,
    version: 'v1.0.0',
    icon: '../2048-Infinity/icons/2048-infinity.png',
    summary: 'An original native Android puzzle game built from the ground up with Kotlin and Jetpack Compose. Merge tiles, unlock infinite number progression beyond 2048, enjoy fluid 60/120Hz animations, synthesized audio, haptic feedback, multiple grid sizes (3x3, 4x4, 5x5), single-move undo, and 100% offline privacy.',
    highlights: [
      'Engineered in native Kotlin 2.0 & Jetpack Compose Material 3',
      '64-bit integer engine with infinite progression beyond 2048 (4096, 8192, 16384...)',
      'Multiple grid dimensions: 3x3 (Fast Blitz), 4x4 (Classic Standard), and 5x5 (Deep Strategy)',
      'Single-move undo to recover from unintended swipes',
      'Low-latency synthesized audio chimes and tailored tactile haptic vibrations',
      '100% offline with zero advertisements, zero tracking, and zero network permissions'
    ],
    screenshots: [
      { src: '../2048-Infinity/screenshots/home-screen.png', title: 'Active Gameplay (4x4 Standard)' },
      { src: '../2048-Infinity/screenshots/gameplay-merging.png', title: 'Merging High-Value Tiles' },
      { src: '../2048-Infinity/screenshots/dark-mode.png', title: 'Cosmic Dark Mode' },
      { src: '../2048-Infinity/screenshots/home-screen-light.png', title: 'Crisp Light Mode' },
      { src: '../2048-Infinity/screenshots/settings.png', title: 'Settings & Mode Preferences' },
      { src: '../2048-Infinity/screenshots/victory.png', title: '2048 Victory & Infinite Mode' },
      { src: '../2048-Infinity/screenshots/game-over.png', title: 'Game Over & Sharesheet' }
    ],
    primaryDownload: {
      label: 'Download APK',
      url: 'https://github.com/dev-hints/2048-Infinity/releases/download/First/2048-Infinity-v1.0.0-release.apk',
      format: 'APK',
      size: '11 MB'
    },
    packages: [
      {
        name: 'Official Release APK',
        url: 'https://github.com/dev-hints/2048-Infinity/releases/download/First/2048-Infinity-v1.0.0-release.apk',
        arch: 'Android 8.0+ (Universal ARM64 / ARMv7 / x86_64)',
        size: '11 MB',
        recommended: true
      },
      {
        name: 'Source Code (.zip)',
        url: 'https://github.com/dev-hints/2048-Infinity/archive/refs/heads/main.zip',
        arch: 'Kotlin Source Code',
        size: '680 KB',
        recommended: false
      }
    ],
    keywords: ['2048', 'infinity', 'android', 'apk', 'kotlin', 'compose', 'jetpack', 'puzzle', 'game', 'tiles', 'numbers', 'merge', 'offline', 'arcade'],
    portalUrl: '../2048-Infinity/',
    docsUrl: '../2048-Infinity/docs.html',
    githubUrl: 'https://github.com/dev-hints/2048-Infinity',
    license: 'Open Source',
    featured: true
  },
  {
    id: 'markview',
    name: 'MarkView',
    tagline: 'Modern Markdown Document Reader',
    category: 'desktop',
    categoryName: 'Desktop Apps',
    platforms: ['linux', 'windows'],
    platformBadge: 'Linux & Windows',
    badge: 'Document Viewer',
    size: '15 MB',
    sizeBytes: 15728640,
    version: 'v1.0.0',
    icon: '../MarkView/icons/markview.png',
    summary: 'A fast and distraction-free desktop reader for Markdown notes, documentation, math formulas, and diagrams.',
    highlights: [
      'Opens Markdown documents with clean, high-contrast formatting',
      'Displays math equations, charts, code snippets, and checklists',
      'Automatically refreshes preview when you edit and save changes',
      'Lightweight desktop app that opens instantly with minimal memory'
    ],
    screenshots: [
      { src: '../MarkView/icons/markview.png', title: 'MarkView Document Reader' }
    ],
    primaryDownload: {
      label: 'Download AppImage',
      url: 'https://github.com/dev-hints/MarkView/releases/download/new/MarkView-1.0.0-x86_64.AppImage',
      format: 'AppImage',
      size: '15 MB'
    },
    packages: [
      {
        name: 'Linux Universal AppImage',
        url: 'https://github.com/dev-hints/MarkView/releases/download/new/MarkView-1.0.0-x86_64.AppImage',
        arch: 'Linux 64-bit (All Distros)',
        size: '15 MB',
        recommended: true
      },
      {
        name: 'Ubuntu / Debian Package (.deb)',
        url: 'https://github.com/dev-hints/MarkView/releases/download/new/MarkView_1.0.0_amd64.deb',
        arch: 'Ubuntu / Debian 64-bit',
        size: '14.2 MB',
        recommended: false
      },
      {
        name: 'Ubuntu / Debian Package (.deb ARM64)',
        url: 'https://github.com/dev-hints/MarkView/releases/download/new/MarkView_1.0.0_arm64.deb',
        arch: 'ARM64 / Raspberry Pi',
        size: '13.8 MB',
        recommended: false
      },
      {
        name: 'Fedora / Red Hat Package (.rpm)',
        url: 'https://github.com/dev-hints/MarkView/releases/download/new/MarkView-1.0.0-x86_64.rpm',
        arch: 'Fedora / RHEL / openSUSE',
        size: '14.5 MB',
        recommended: false
      },
      {
        name: 'Source Code Package (.zip)',
        url: 'https://github.com/dev-hints/MarkView/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '1.8 MB',
        recommended: false
      }
    ],
    keywords: ['markdown', 'reader', 'viewer', 'appimage', 'deb', 'rpm', 'linux', 'windows', 'docs', 'editor', 'katex', 'mermaid'],
    portalUrl: '../MarkView/',
    docsUrl: '../MarkView/docs.html',
    githubUrl: 'https://github.com/dev-hints/MarkView',
    license: 'MIT',
    featured: true
  },
  {
    id: 'mydrive',
    name: 'MyDrive',
    tagline: 'Personal Cloud Storage & File Hub',
    category: 'cloud',
    categoryName: 'Cloud & Storage',
    platforms: ['linux', 'windows', 'cli'],
    platformBadge: 'Cloud & Docker',
    badge: 'Private Storage',
    size: '2.4 MB',
    sizeBytes: 2516582,
    version: 'v2.4.0',
    icon: '../MyDrive/icons/mydrive.png',
    summary: 'Your private cloud storage to back up files, photos, and phone contacts, and stream videos smoothly from any browser.',
    highlights: [
      'Keep your files private on your own hardware with zero tracking',
      'Upload large files and stream music and video without waiting',
      'Back up phone contacts safely and restore them anytime',
      'Easy to run on Linux, Docker, or even an Android phone'
    ],
    screenshots: [
      { src: '../MyDrive/icons/mydrive.png', title: 'MyDrive Cloud Storage Dashboard' }
    ],
    primaryDownload: {
      label: 'Download Source',
      url: 'https://github.com/dev-hints/mydrive/archive/refs/heads/main.zip',
      format: 'ZIP',
      size: '2.4 MB'
    },
    packages: [
      {
        name: 'MyDrive Server Package (.zip)',
        url: 'https://github.com/dev-hints/mydrive/archive/refs/heads/main.zip',
        arch: 'Python & Docker',
        size: '2.4 MB',
        recommended: true
      },
      {
        name: 'Setup Guide & Manual (PDF)',
        url: '../MyDrive/MyDrive_User_Manual.pdf',
        arch: 'PDF User Manual',
        size: '1.2 MB',
        recommended: false
      }
    ],
    keywords: ['cloud', 'storage', 'backup', 'drive', 'files', 'server', 'docker', 'stream', 'video', 'contacts', 'privacy'],
    portalUrl: '../MyDrive/',
    docsUrl: '../MyDrive/docs.html',
    githubUrl: 'https://github.com/dev-hints/mydrive',
    license: 'MIT',
    featured: true
  },
  {
    id: 'infinity-browser',
    name: 'Infinity Browser',
    tagline: 'Fast & Private Desktop Web Browser',
    category: 'desktop',
    categoryName: 'Desktop Apps',
    platforms: ['windows', 'linux'],
    platformBadge: 'Windows & Linux',
    badge: 'Web Browser',
    size: '8.5 MB',
    sizeBytes: 8912896,
    version: 'v1.2.0',
    icon: '../Infinity-Browser/icons/infinity-browser.png',
    summary: 'A clean desktop web browser engineered for privacy, featuring built-in ad blocking and private browsing.',
    highlights: [
      'Blocks intrusive ads and online trackers out of the box',
      'Fast page loading with low computer memory usage',
      'Private browsing mode that never records history',
      'Clean modern dark and light interfaces'
    ],
    screenshots: [
      { src: '../Infinity-Browser/icons/infinity-browser.png', title: 'Infinity Browser Window' }
    ],
    primaryDownload: {
      label: 'Download App',
      url: 'https://github.com/dev-hints/infinity-browser/archive/refs/heads/main.zip',
      format: 'ZIP',
      size: '8.5 MB'
    },
    packages: [
      {
        name: 'Releases & Standalone Packages',
        url: 'https://github.com/dev-hints/infinity-browser/releases',
        arch: 'Windows / Linux',
        size: '8.5 MB',
        recommended: true
      },
      {
        name: 'Source Code Package (.zip)',
        url: 'https://github.com/dev-hints/infinity-browser/archive/refs/heads/main.zip',
        arch: 'Python Source',
        size: '8.5 MB',
        recommended: false
      }
    ],
    keywords: ['browser', 'web', 'adblock', 'privacy', 'private', 'desktop', 'windows', 'linux', 'internet', 'navigator'],
    portalUrl: '../Infinity-Browser/',
    docsUrl: '../Infinity-Browser/docs.html',
    githubUrl: 'https://github.com/dev-hints/infinity-browser',
    license: 'MIT',
    featured: true
  },
  {
    id: '2048-nexus',
    name: '2048 Nexus',
    tagline: 'Neon 2048 Puzzle Arcade with AI Auto-Play',
    category: 'games',
    categoryName: 'Games & Arcade',
    platforms: ['windows', 'linux'],
    platformBadge: 'Windows & Linux',
    badge: 'Arcade Game',
    size: '42 MB',
    sizeBytes: 44040192,
    version: 'v1.0.0',
    icon: '../2048-Nexus/icons/2048-nexus.png',
    summary: 'The classic number puzzle game upgraded with glowing neon graphics, retro synth music, undo moves, and a smart AI helper.',
    highlights: [
      'Classic 2048 tile gameplay with extra board sizes from 3x3 to 8x8',
      'Smart AI auto-play mode that can solve puzzles automatically',
      'Unlimited undo moves so you can retry mistakes anytime',
      'Standalone game installers for Windows and Linux computers'
    ],
    screenshots: [
      { src: '../2048-Nexus/icons/2048-nexus.png', title: '2048 Nexus Neon Grid' }
    ],
    primaryDownload: {
      label: 'Download for Windows',
      url: 'https://github.com/dev-hints/2048-Nexus/releases/download/v1.0.0/2048-Nexus-Setup.exe',
      format: 'EXE',
      size: '42 MB'
    },
    packages: [
      {
        name: 'Windows 10/11 Installer (.exe)',
        url: 'https://github.com/dev-hints/2048-Nexus/releases/download/v1.0.0/2048-Nexus-Setup.exe',
        arch: 'Windows 64-bit',
        size: '42 MB',
        recommended: true
      },
      {
        name: 'Ubuntu / Debian Package (.deb)',
        url: 'https://github.com/dev-hints/2048-Nexus/releases/download/v1.0.0/2048-nexus_1.0.0_amd64.deb',
        arch: 'Ubuntu / Debian 64-bit',
        size: '38 MB',
        recommended: false
      },
      {
        name: 'Fedora / Red Hat Package (.rpm)',
        url: 'https://github.com/dev-hints/2048-Nexus/releases/download/v1.0.0/2048-nexus-1.0.0-1.x86_64.rpm',
        arch: 'Fedora / RHEL 64-bit',
        size: '39 MB',
        recommended: false
      },
      {
        name: 'Game Source Code (.zip)',
        url: 'https://github.com/dev-hints/2048-Nexus/archive/refs/heads/main.zip',
        arch: 'Python Source',
        size: '18 MB',
        recommended: false
      }
    ],
    keywords: ['game', '2048', 'arcade', 'puzzle', 'ai', 'exe', 'deb', 'rpm', 'windows', 'linux', 'numbers', 'tiles', 'synthwave'],
    portalUrl: '../2048-Nexus/',
    docsUrl: '../2048-Nexus/docs.html',
    githubUrl: 'https://github.com/dev-hints/2048-Nexus',
    license: 'MIT',
    featured: true
  },
  {
    id: 'airpointer',
    name: 'AirPointer',
    tagline: 'Touchless Virtual Mouse via Webcam',
    category: 'tools',
    categoryName: 'Utilities & Tools',
    platforms: ['windows', 'linux'],
    platformBadge: 'Webcam Gesture',
    badge: 'Virtual Mouse',
    size: '3.8 MB',
    sizeBytes: 3984588,
    version: 'v1.1.0',
    icon: '../AirPointer/icons/airpointer.png',
    summary: 'Control your computer mouse without touching hardware using simple, natural hand gestures in front of your webcam.',
    highlights: [
      'Move your cursor smoothly by moving your hand in the air',
      'Pinch your fingers together to click or double-click',
      'Scroll web pages and documents with two-finger gestures',
      'Works with any regular laptop or USB webcam'
    ],
    screenshots: [
      { src: '../AirPointer/icons/airpointer.png', title: 'AirPointer Gesture Tracking' }
    ],
    primaryDownload: {
      label: 'Download App',
      url: 'https://github.com/dev-hints/AirPointer/archive/refs/heads/main.zip',
      format: 'ZIP',
      size: '3.8 MB'
    },
    packages: [
      {
        name: 'AirPointer Application Package (.zip)',
        url: 'https://github.com/dev-hints/AirPointer/archive/refs/heads/main.zip',
        arch: 'Windows / Mac / Linux',
        size: '3.8 MB',
        recommended: true
      }
    ],
    keywords: ['mouse', 'pointer', 'webcam', 'gesture', 'touchless', 'camera', 'ai', 'tracking', 'virtual', 'hands', 'python'],
    portalUrl: '../AirPointer/',
    docsUrl: '../AirPointer/docs.html',
    githubUrl: 'https://github.com/dev-hints/AirPointer',
    license: 'MIT',
    featured: false
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    tagline: 'Terminal AI Assistant & Code Helper',
    category: 'tools',
    categoryName: 'Utilities & Tools',
    platforms: ['cli', 'linux'],
    platformBadge: 'Terminal / CLI',
    badge: 'AI Assistant',
    size: '45 KB',
    sizeBytes: 46080,
    version: 'v1.3.0',
    icon: '../Gemini-CLI/icons/gemini-cli.png',
    summary: 'Ask questions, generate code, and get shell command suggestions directly inside your computer terminal.',
    highlights: [
      'Instant AI answers right where you type your commands',
      'Smooth animated typing output in the terminal',
      'Super lightweight script that runs on Linux, Mac, and Android phones',
      'Zero extra software installations required'
    ],
    screenshots: [
      { src: '../Gemini-CLI/icons/gemini-cli.png', title: 'Gemini CLI Assistant' }
    ],
    primaryDownload: {
      label: 'Download Script',
      url: 'https://github.com/dev-hints/Gemini_cli/archive/refs/heads/main.zip',
      format: 'ZIP',
      size: '45 KB'
    },
    packages: [
      {
        name: 'Gemini CLI Script Package (.zip)',
        url: 'https://github.com/dev-hints/Gemini_cli/archive/refs/heads/main.zip',
        arch: 'Linux / Mac / Termux',
        size: '45 KB',
        recommended: true
      }
    ],
    keywords: ['ai', 'terminal', 'cli', 'bash', 'chat', 'assistant', 'code', 'shell', 'command', 'gemini', 'script'],
    portalUrl: '../Gemini-CLI/',
    docsUrl: '../Gemini-CLI/docs.html',
    githubUrl: 'https://github.com/dev-hints/Gemini_cli',
    license: 'MIT',
    featured: false
  },
  {
    id: 'infinity-writer',
    name: 'Infinity Writer',
    tagline: 'Distraction-Free Writing & Web Document Editor',
    category: 'web',
    categoryName: 'Web Apps',
    platforms: ['web'],
    platformBadge: 'Instant Web App',
    badge: 'Writing Tool',
    size: '120 KB',
    sizeBytes: 122880,
    version: 'v1.0.0',
    icon: '../Infinity-Writer/icons/infinity-writer.png',
    summary: 'A simple writing workspace that turns your notes and markdown into beautiful, formatted web pages ready to share.',
    highlights: [
      'Clean, focused interface designed for writing without distractions',
      'Live side-by-side preview showing your formatted text',
      'Export your writing as an independent web page with dark mode included',
      '100% private in your browser with no account needed'
    ],
    screenshots: [
      { src: '../Infinity-Writer/icons/infinity-writer.png', title: 'Infinity Writer Editor' }
    ],
    primaryDownload: {
      label: 'Open Web App',
      url: '../Infinity-Writer/',
      format: 'Web App',
      size: 'Instant'
    },
    packages: [
      {
        name: 'Launch Web Application',
        url: '../Infinity-Writer/',
        arch: 'Universal Web',
        size: 'Instant',
        recommended: true
      },
      {
        name: 'Download Source Code (.zip)',
        url: 'https://github.com/dev-hints/Infinity-Writer/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '120 KB',
        recommended: false
      }
    ],
    keywords: ['writer', 'markdown', 'editor', 'notes', 'html', 'documents', 'web', 'generator', 'writing', 'text'],
    portalUrl: '../Infinity-Writer/',
    docsUrl: '../Infinity-Writer/docs.html',
    githubUrl: 'https://github.com/dev-hints/Infinity-Writer',
    license: 'MIT',
    featured: false
  },
  {
    id: 'notes-app',
    name: 'Cosmic Notes',
    tagline: 'Quick Notes & Idea Organizer',
    category: 'web',
    categoryName: 'Web Apps',
    platforms: ['web'],
    platformBadge: 'Instant Web App',
    badge: 'Note Taking',
    size: '95 KB',
    sizeBytes: 97280,
    version: 'v1.0.0',
    icon: '../Notes-App/icons/notes-app.png',
    summary: 'A lightweight digital notebook to jot down daily ideas, organize notes by color tags, and find anything in seconds.',
    highlights: [
      'Beautiful cosmic space theme with clear readable text',
      'Instant search to find your thoughts and checklists quickly',
      'Color categories and pin favorite notes to the top',
      'Saves automatically to your browser with full offline privacy'
    ],
    screenshots: [
      { src: '../Notes-App/icons/notes-app.png', title: 'Cosmic Notes Dashboard' }
    ],
    primaryDownload: {
      label: 'Open Web App',
      url: '../Notes-App/',
      format: 'Web App',
      size: 'Instant'
    },
    packages: [
      {
        name: 'Launch Web Application',
        url: '../Notes-App/',
        arch: 'Universal Web',
        size: 'Instant',
        recommended: true
      },
      {
        name: 'Download Source Code (.zip)',
        url: 'https://github.com/dev-hints/Notes-App/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '95 KB',
        recommended: false
      }
    ],
    keywords: ['notes', 'notebook', 'memo', 'ideas', 'tags', 'organizer', 'web', 'privacy', 'offline', 'space'],
    portalUrl: '../Notes-App/',
    docsUrl: '../Notes-App/docs.html',
    githubUrl: 'https://github.com/dev-hints/Notes-App',
    license: 'MIT',
    featured: false
  },
  {
    id: 'calccosmos',
    name: 'CalcCosmos',
    tagline: 'Scientific Calculator & History Ledger',
    category: 'web',
    categoryName: 'Web Apps',
    platforms: ['web'],
    platformBadge: 'Instant Web App',
    badge: 'Calculator',
    size: '110 KB',
    sizeBytes: 112640,
    version: 'v1.0.0',
    icon: '../CalcCosmos/icons/calccosmos.png',
    summary: 'A scientific calculator for quick calculations, advanced formulas, trigonometry, and calculation history.',
    highlights: [
      'Complete scientific math functions (trig, square roots, logs, powers)',
      'Automatic calculation history so you never lose previous work',
      'Keyboard number pad support for fast typing',
      'Works instantly on both mobile phones and desktop computers'
    ],
    screenshots: [
      { src: '../CalcCosmos/icons/calccosmos.png', title: 'CalcCosmos Calculator' }
    ],
    primaryDownload: {
      label: 'Open Calculator',
      url: '../CalcCosmos/',
      format: 'Web App',
      size: 'Instant'
    },
    packages: [
      {
        name: 'Launch Calculator',
        url: '../CalcCosmos/',
        arch: 'Universal Web',
        size: 'Instant',
        recommended: true
      },
      {
        name: 'Download Source Code (.zip)',
        url: 'https://github.com/dev-hints/CalcCosmos/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '110 KB',
        recommended: false
      }
    ],
    keywords: ['calculator', 'calc', 'scientific', 'math', 'trigonometry', 'numbers', 'formulas', 'history', 'web'],
    portalUrl: '../CalcCosmos/',
    docsUrl: '../CalcCosmos/docs.html',
    githubUrl: 'https://github.com/dev-hints/CalcCosmos',
    license: 'MIT',
    featured: false
  },
  {
    id: 'snake-game',
    name: 'Neon Snake',
    tagline: 'Classic Retro Arcade Snake Game',
    category: 'games',
    categoryName: 'Games & Arcade',
    platforms: ['web'],
    platformBadge: 'Instant Web Game',
    badge: 'Arcade Game',
    size: '150 KB',
    sizeBytes: 153600,
    version: 'v1.0.0',
    icon: '../Snake-Game/icons/snake-game.png',
    summary: 'The beloved retro snake arcade game reimagined with glowing neon graphics, fun power-ups, and 8-bit sound effects.',
    highlights: [
      'Smooth arcade gameplay with responsive keyboard and swipe controls',
      '4 fun power-ups: Speed boost, Ghost mode, Freeze, and Score magnet',
      'Retro game sound effects and streak multipliers',
      'Play instantly in any web browser without downloading'
    ],
    screenshots: [
      { src: '../Snake-Game/icons/snake-game.png', title: 'Neon Snake Game Arena' }
    ],
    primaryDownload: {
      label: 'Play Game',
      url: '../Snake-Game/',
      format: 'Web Game',
      size: 'Instant'
    },
    packages: [
      {
        name: 'Play Game in Browser',
        url: '../Snake-Game/',
        arch: 'Universal Web',
        size: 'Instant',
        recommended: true
      },
      {
        name: 'Download Source Code (.zip)',
        url: 'https://github.com/dev-hints/Snake-Game/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '150 KB',
        recommended: false
      }
    ],
    keywords: ['snake', 'game', 'arcade', 'retro', 'neon', 'play', 'browser', 'sound', 'fun', 'web'],
    portalUrl: '../Snake-Game/',
    docsUrl: '../Snake-Game/docs.html',
    githubUrl: 'https://github.com/dev-hints/Snake-Game',
    license: 'MIT',
    featured: false
  },
  {
    id: 'to-do',
    name: 'ToDo Manager',
    tagline: 'Task Checklist & Pomodoro Focus Timer',
    category: 'web',
    categoryName: 'Web Apps',
    platforms: ['web'],
    platformBadge: 'Instant Web App',
    badge: 'Task Manager',
    size: '130 KB',
    sizeBytes: 133120,
    version: 'v1.0.0',
    icon: '../To-Do/icons/to-do.png',
    summary: 'Organize your daily to-do lists, track completion progress, and use the built-in focus timer to get work done.',
    highlights: [
      'Simple checklist for organizing daily tasks and priorities',
      'Integrated 25-minute Pomodoro focus timer with gentle sound chimes',
      'Visual progress bars showing completed tasks',
      '100% private on your device with one-click data backup'
    ],
    screenshots: [
      { src: '../To-Do/icons/to-do.png', title: 'ToDo Task Dashboard' }
    ],
    primaryDownload: {
      label: 'Open Task Manager',
      url: '../To-Do/',
      format: 'Web App',
      size: 'Instant'
    },
    packages: [
      {
        name: 'Launch Task Manager',
        url: '../To-Do/',
        arch: 'Universal Web',
        size: 'Instant',
        recommended: true
      },
      {
        name: 'Download Source Code (.zip)',
        url: 'https://github.com/dev-hints/To-Do/archive/refs/heads/main.zip',
        arch: 'Source Code',
        size: '130 KB',
        recommended: false
      }
    ],
    keywords: ['todo', 'tasks', 'checklist', 'pomodoro', 'timer', 'focus', 'productivity', 'habits', 'schedule', 'web'],
    portalUrl: '../To-Do/',
    docsUrl: '../To-Do/docs.html',
    githubUrl: 'https://github.com/dev-hints/To-Do',
    license: 'MIT',
    featured: false
  }
];

// ──────────────────────────────────────────────
// APP STORE CONTROLLER
// ──────────────────────────────────────────────

const AppStore = (() => {
  let activeOS = 'all';
  let activeCategory = 'all';
  let activeSort = 'featured';
  let searchQuery = '';

  let gridEl, searchInput, clearBtn, countEl, emptyEl, resetBtn;
  let categorySelect, sortSelect;
  let modalEl, modalContent;

  // ── Cybersecurity Helpers (Defense-in-Depth Sanitization) ──
  function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  function sanitizeUrl(url) {
    if (typeof url !== 'string') return '#';
    const trimmed = url.trim();
    // Allow strict https://, http://, /, ./, ../ paths; block dangerous schemes like javascript:, data:, vbscript:
    if (/^(https?:\/\/|\/|\.\/|\.\.\/)/i.test(trimmed)) {
      return trimmed;
    }
    return '#';
  }

  function init() {
    gridEl = document.getElementById('store-grid');
    searchInput = document.getElementById('store-search');
    clearBtn = document.getElementById('store-search-clear');
    countEl = document.getElementById('store-count');
    emptyEl = document.getElementById('store-empty');
    resetBtn = document.getElementById('store-reset-btn');
    categorySelect = document.getElementById('category-select');
    sortSelect = document.getElementById('sort-select');
    modalEl = document.getElementById('app-modal');
    modalContent = document.getElementById('app-modal-content');

    // Read initial URL params (e.g. ?q=terminal or ?os=android or ?app=dedroid)
    readURLParams();

    setupOSPills();
    setupDropdowns();
    setupSearch();
    setupResetButton();
    setupModal();

    renderApps();
  }

  function readURLParams() {
    const params = new URLSearchParams(window.location.search);

    const q = params.get('q');
    if (q && searchInput) {
      searchQuery = q.trim();
      searchInput.value = searchQuery;
      if (clearBtn) clearBtn.style.display = 'flex';
    }

    const os = params.get('os');
    if (os) {
      activeOS = os.toLowerCase();
      const pill = document.querySelector(`.os-pill[data-os="${activeOS}"]`);
      if (pill) {
        document.querySelectorAll('.os-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    }

    const cat = params.get('cat');
    if (cat && categorySelect) {
      activeCategory = cat.toLowerCase();
      categorySelect.value = activeCategory;
    }

    const sort = params.get('sort');
    if (sort && sortSelect) {
      activeSort = sort.toLowerCase();
      sortSelect.value = activeSort;
    }

    const appId = params.get('app');
    if (appId) {
      const found = APPS_DATA.find(a => a.id === appId.toLowerCase());
      if (found) setTimeout(() => openModal(found), 250);
    }
  }

  function updateURL() {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (activeOS !== 'all') params.set('os', activeOS);
    if (activeCategory !== 'all') params.set('cat', activeCategory);
    if (activeSort !== 'featured') params.set('sort', activeSort);

    const qs = params.toString();
    const newUrl = window.location.pathname + (qs ? '?' + qs : '');
    window.history.replaceState({}, '', newUrl);

    // Update Reset button visibility
    const isFiltered = Boolean(searchQuery.trim() || activeOS !== 'all' || activeCategory !== 'all' || activeSort !== 'featured');
    if (resetBtn) resetBtn.style.display = isFiltered ? 'inline-flex' : 'none';
  }

  /** Render Top Featured Apps Spotlight */
  function renderFeatured(matchingApps) {
    const section = document.getElementById('featured-section');
    const track = document.getElementById('featured-track');
    if (!section || !track) return;

    // When the user searches, hide the featured shelf to prioritize direct search results
    if (searchQuery.trim()) {
      section.style.display = 'none';
      return;
    }

    const source = Array.isArray(matchingApps) ? matchingApps : APPS_DATA;
    const featured = source.filter(a => a.featured).slice(0, 3);

    if (featured.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    track.innerHTML = featured.map(app => `
      <div class="spotlight-card" onclick="AppStore.openModalById('${escapeHTML(app.id)}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AppStore.openModalById('${escapeHTML(app.id)}');}" tabindex="0" role="button" aria-label="${escapeHTML(app.name)} details">
        <div class="spotlight-header">
          <img src="${sanitizeUrl(app.icon)}" alt="${escapeHTML(app.name)}" class="spotlight-icon" loading="lazy" width="56" height="56" />
          <div class="spotlight-text">
            <div class="spotlight-badge-row">
              <span class="spotlight-badge">${escapeHTML(app.badge)}</span>
              <span class="spotlight-platform">${escapeHTML(app.platformBadge)}</span>
            </div>
            <h3 class="spotlight-title">${escapeHTML(app.name)}</h3>
            <p class="spotlight-tagline">${escapeHTML(app.tagline)}</p>
          </div>
        </div>
        <div class="spotlight-action" onclick="event.stopPropagation()">
          <a href="${sanitizeUrl(app.primaryDownload.url)}" ${app.primaryDownload.url.startsWith('http') ? 'download rel="noopener noreferrer"' : ''} class="btn-install" aria-label="Download ${escapeHTML(app.name)}">
            <i class="fa-solid fa-download"></i> <span>${escapeHTML(app.primaryDownload.label)}</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  /** Filter & Sort Apps */
  function getFilteredApps() {
    let list = [...APPS_DATA];

    // 1. OS Filter
    if (activeOS !== 'all') {
      list = list.filter(app => {
        if (activeOS === 'android') return app.platforms.includes('android');
        if (activeOS === 'linux') return app.platforms.includes('linux');
        if (activeOS === 'windows') return app.platforms.includes('windows');
        if (activeOS === 'cli') return app.platforms.includes('cli');
        if (activeOS === 'web') return app.platforms.includes('web');
        return true;
      });
    }

    // 2. Category Filter
    if (activeCategory !== 'all') {
      list = list.filter(app => {
        if (activeCategory === 'android') return app.category === 'android' || app.platforms.includes('android');
        return app.category === activeCategory;
      });
    }

    // 3. Search Query Filter (Precision multi-token matching)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const terms = q.split(/\s+/).filter(Boolean);

      list = list.filter(app => {
        const fullSearchTarget = [
          app.name,
          app.tagline,
          app.summary,
          app.categoryName,
          app.platformBadge,
          app.badge,
          ...(app.keywords || []),
          ...app.packages.map(p => p.name + ' ' + p.arch)
        ].join(' ').toLowerCase();

        return terms.every(term => {
          if (term.length <= 3) {
            const words = fullSearchTarget.split(/[^a-z0-9_-]+/);
            return words.some(w => w === term || (w.startsWith(term) && term.length >= 3));
          }
          return fullSearchTarget.includes(term);
        });
      });
    }

    // 4. Accurate Sorting
    if (activeSort === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (activeSort === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (activeSort === 'size-desc') {
      list.sort((a, b) => (b.sizeBytes || 0) - (a.sizeBytes || 0));
    } else if (activeSort === 'size-asc') {
      list.sort((a, b) => (a.sizeBytes || 0) - (b.sizeBytes || 0));
    } else {
      // 'featured' / Default: Featured apps first, then alphabetical
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.name.localeCompare(b.name));
    }

    return list;
  }

  /** Render Grid of Apps */
  function renderApps() {
    if (!gridEl) return;
    const filtered = getFilteredApps();

    renderFeatured(filtered);

    if (countEl) {
      countEl.textContent = `${filtered.length} ${filtered.length === 1 ? 'app' : 'apps'}`;
    }

    if (filtered.length === 0) {
      gridEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      updateURL();
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';

    gridEl.innerHTML = filtered.map(app => {
      const isWeb = app.category === 'web-apps';
      const actionIcon = isWeb
        ? (app.primaryDownload.format === 'Web Game' ? 'fa-gamepad' : 'fa-arrow-up-right-from-square')
        : 'fa-download';
      const actionText = isWeb
        ? (app.primaryDownload.format === 'Web Game' ? 'Play' : 'Open')
        : (app.primaryDownload.format === 'APK' ? 'Get APK' : 'Download');

      return `
      <article class="app-card" onclick="AppStore.openModalById('${escapeHTML(app.id)}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AppStore.openModalById('${escapeHTML(app.id)}');}" tabindex="0" role="button" aria-label="${escapeHTML(app.name)} details">
        <div class="app-card-header">
          <img src="${sanitizeUrl(app.icon)}" alt="${escapeHTML(app.name)}" class="app-icon" loading="lazy" width="52" height="52" />
          <div class="app-info">
            <h3 class="app-name">${escapeHTML(app.name)}</h3>
            <p class="app-tagline">${escapeHTML(app.tagline)}</p>
            <div class="app-meta">
              <span class="app-chip">${escapeHTML(app.platformBadge)}</span>
              <span class="app-chip">${escapeHTML(app.size)}</span>
              <span class="app-chip app-license">${escapeHTML(app.license)}</span>
            </div>
          </div>
        </div>
        <div class="app-action" onclick="event.stopPropagation()">
          <a href="${sanitizeUrl(app.primaryDownload.url)}" ${app.primaryDownload.url.startsWith('http') ? 'download rel="noopener noreferrer"' : ''} class="btn-install btn-sm" aria-label="${actionText} ${escapeHTML(app.name)}">
            <i class="fa-solid ${actionIcon}"></i> <span>${actionText}</span>
          </a>
        </div>
      </article>
      `;
    }).join('');

    updateURL();
  }

  function setupOSPills() {
    const pills = document.querySelectorAll('.os-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeOS = pill.dataset.os || 'all';
        renderApps();
      });
    });
  }

  function setupDropdowns() {
    if (categorySelect) {
      categorySelect.addEventListener('change', e => {
        activeCategory = e.target.value;
        renderApps();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        activeSort = e.target.value;
        renderApps();
      });
    }
  }

  function setupSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? 'flex' : 'none';
      renderApps();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        renderApps();
      });
    }

    // Ctrl + K or '/' shortcut
    window.addEventListener('keydown', e => {
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });
  }

  function setupResetButton() {
    if (!resetBtn) return;
    resetBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';

      activeOS = 'all';
      document.querySelectorAll('.os-pill').forEach(p => p.classList.toggle('active', p.dataset.os === 'all'));

      activeCategory = 'all';
      if (categorySelect) categorySelect.value = 'all';

      activeSort = 'featured';
      if (sortSelect) sortSelect.value = 'featured';

      renderApps();
    });
  }

  function openModal(app) {
    if (!modalEl || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-header">
        <img src="${sanitizeUrl(app.icon)}" alt="${escapeHTML(app.name)}" class="modal-icon" width="64" height="64" />
        <div class="modal-title-wrap">
          <h2 class="modal-title">${escapeHTML(app.name)}</h2>
          <p class="modal-subtitle">${escapeHTML(app.tagline)}</p>
          <div class="modal-meta-row">
            <span class="modal-badge">${escapeHTML(app.platformBadge)}</span>
            <span class="modal-badge">${escapeHTML(app.size)}</span>
            <span class="modal-badge">${escapeHTML(app.version)}</span>
            <span class="modal-badge">${escapeHTML(app.license)}</span>
          </div>
        </div>
      </div>

      <!-- Packages / Downloads -->
      <div class="modal-packages">
        <h4 class="modal-section-title"><i class="fa-solid fa-download"></i> Available Downloads</h4>
        <div class="packages-list">
          ${app.packages.map(pkg => `
            <a href="${sanitizeUrl(pkg.url)}" ${pkg.url.startsWith('http') ? 'download rel="noopener noreferrer"' : ''} class="pkg-row ${pkg.recommended ? 'recommended' : ''}">
              <div class="pkg-details">
                <span class="pkg-name">${escapeHTML(pkg.name)}</span>
                <span class="pkg-meta">${escapeHTML(pkg.arch)} • ${escapeHTML(pkg.size)}</span>
              </div>
              <span class="pkg-download-btn"><i class="fa-solid fa-cloud-arrow-down"></i> Download</span>
            </a>
          `).join('')}
        </div>
      </div>

      <!-- Screenshots Preview (if available) -->
      ${app.screenshots && app.screenshots.length > 0 ? `
        <div class="modal-screenshots">
          <h4 class="modal-section-title"><i class="fa-solid fa-images"></i> Screenshots</h4>
          <div class="screenshots-track">
            ${app.screenshots.map(s => `
              <div class="screenshot-item">
                <img src="${sanitizeUrl(s.src)}" alt="${escapeHTML(s.title)}" loading="lazy" class="screenshot-img" />
                <span class="screenshot-title">${escapeHTML(s.title)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Key Features -->
      <div class="modal-features">
        <h4 class="modal-section-title"><i class="fa-solid fa-check-circle" style="color:#10b981"></i> Highlights</h4>
        <ul class="features-list">
          ${app.highlights.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
        </ul>
      </div>

      <!-- Action Footer Links -->
      <div class="modal-footer">
        <a href="${sanitizeUrl(app.portalUrl)}" class="btn-modal-link"><i class="fa-solid fa-globe"></i> Showcase</a>
        <a href="${sanitizeUrl(app.docsUrl)}" class="btn-modal-link"><i class="fa-solid fa-book"></i> Documentation</a>
        <a href="${sanitizeUrl(app.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-modal-link"><i class="fa-brands fa-github"></i> GitHub</a>
      </div>
    `;

    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setupModal() {
    const closeBtn = document.getElementById('app-modal-close');
    const backdrop = document.getElementById('app-modal-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalEl && modalEl.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function openModalById(id) {
    const app = APPS_DATA.find(a => a.id === id);
    if (app) openModal(app);
  }

  return { init, openModalById, closeModal };
})();

document.addEventListener('DOMContentLoaded', () => {
  AppStore.init();
});
