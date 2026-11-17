/**
 * StrangeInfinity — Vedic Minimalist Main Application Controller
 * assets/js/main.js
 *
 * Orchestrates:
 *   • Instant, zero-delay loading screen
 *   • Pure Web Audio API Vedic Sound Synthesizer (432Hz harmonic chimes)
 *   • Command Palette Teleport HUD (Cmd+K / Ctrl+K / /)
 *   • Vedic Sutra Rotator (Ancient wisdom connected to open source)
 *   • Smooth sticky navbar & section highlights
 *   • Scroll reveal & stat counter animations
 *   • Keyboard shortcuts & Easter egg
 */

/* ──────────────────────────────────────────────
   1. WEB AUDIO API VEDIC CHIME SYNTHESIZER (0KB)
   ────────────────────────────────────────────── */
const SoundEngine = (() => {
  let audioCtx = null;
  const STORAGE_KEY = 'si-sound';
  let isSoundEnabled = localStorage.getItem(STORAGE_KEY) === 'true';

  function getContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  /**
   * Plays a pure harmonic singing bowl / Vedic chime
   * @param {number} freq - Base frequency (default 432Hz - cosmic tuning)
   */
  function playChime(freq = 432) {
    if (!isSoundEnabled) return;
    try {
      const ctx = getContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Fundamental oscillator
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      // Perfect fifth harmonic overtone (freq * 1.5)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 1.5, now);

      // Envelope: soft attack, gentle exponential decay
      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.exponentialRampToValueAtTime(0.05, now + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.25);
      osc2.stop(now + 0.85);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    localStorage.setItem(STORAGE_KEY, isSoundEnabled ? 'true' : 'false');
    updateToggleButton();
    if (isSoundEnabled) {
      playChime(432);
      if (typeof ThemeManager !== 'undefined' && ThemeManager.showToast) {
        ThemeManager.showToast('॥ Vedic Chime: Activated ॥');
      }
    } else {
      if (typeof ThemeManager !== 'undefined' && ThemeManager.showToast) {
        ThemeManager.showToast('॥ Vedic Chime: Muted ॥');
      }
    }
  }

  function updateToggleButton() {
    const btn = document.getElementById('sound-toggle');
    if (!btn) return;
    btn.innerHTML = isSoundEnabled
      ? '<i class="fa-solid fa-bell" style="color:var(--color-primary)"></i>'
      : '<i class="fa-regular fa-bell-slash"></i>';
    btn.setAttribute('title', isSoundEnabled ? 'Vedic Chimes: On' : 'Vedic Chimes: Off');
    btn.setAttribute('aria-label', isSoundEnabled ? 'Mute sound chimes' : 'Enable sound chimes');
  }

  function init() {
    updateToggleButton();
    const btn = document.getElementById('sound-toggle');
    if (btn) btn.addEventListener('click', toggleSound);
  }

  return { init, playChime, toggleSound, get isEnabled() { return isSoundEnabled; } };
})();

window.SoundEngine = SoundEngine;

/* ──────────────────────────────────────────────
   2. COMMAND PALETTE TELEPORT HUD (Cmd+K)
   ────────────────────────────────────────────── */
const CommandPalette = (() => {
  let modalBackdrop = null;
  let searchInput = null;
  let resultsContainer = null;
  let isOpen = false;
  let selectedIndex = 0;
  let currentResults = [];

  function buildItems() {
    const items = [];

    // Products
    SI_CONFIG.products.forEach(p => {
      items.push({
        title: p.name,
        subtitle: p.desc,
        tag: 'Product',
        icon: p.icon || '<i class="fa-solid fa-box"></i>',
        action: () => {
          if (p.links.demo) window.open(p.links.demo, '_blank');
          else if (p.links.download) window.open(p.links.download, '_blank');
          else if (p.links.github) window.open(p.links.github, '_blank');
        }
      });
    });

    // Open Source Repositories & Utilities
    if (SI_CONFIG && SI_CONFIG.projects) {
      SI_CONFIG.projects.forEach(p => {
        if (!items.some(it => it.title.toLowerCase() === p.title.toLowerCase())) {
          items.push({
            title: p.title,
            subtitle: p.desc,
            tag: p.status === 'production' ? 'App' : 'Repo',
            icon: p.icon || '<i class="fa-solid fa-code"></i>',
            action: () => {
              if (p.download) window.open(p.download, '_blank');
              else if (p.demo) window.open(p.demo, '_blank');
              else if (p.github) window.open(p.github, '_blank');
              else {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
        }
      });
    }

    // App Store
    items.push({
      title: 'StrangeInfinity App Store',
      subtitle: 'Download Android APKs, Linux AppImage/deb/rpm packages, and Windows installers',
      tag: 'Store',
      icon: '<i class="fa-solid fa-bag-shopping" style="color:var(--color-primary)"></i>',
      action: () => window.location.href = 'store/'
    });

    // Navigation Anchors
    const sections = [
      { id: 'hero', title: 'Home / Origin', tag: 'Section', icon: '<i class="fa-solid fa-house"></i>' },
      { id: 'projects', title: 'Open Source Repositories', tag: 'Section', icon: '<i class="fa-solid fa-code"></i>' },
      { id: 'products', title: 'Flagship Products & Apps', tag: 'Section', icon: '<i class="fa-solid fa-rocket"></i>' },
      { id: 'technologies', title: 'Engineering & Tech Arsenal', tag: 'Section', icon: '<i class="fa-solid fa-gear"></i>' },
      { id: 'about', title: 'About & Vedic Philosophy', tag: 'Section', icon: '<i class="fa-solid fa-om"></i>' },
      { id: 'contact', title: 'Contact & Channels', tag: 'Section', icon: '<i class="fa-solid fa-envelope"></i>' },
    ];
    sections.forEach(s => {
      items.push({
        title: s.title,
        subtitle: `Jump to #${s.id}`,
        tag: s.tag,
        icon: s.icon,
        action: () => {
          const el = document.getElementById(s.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Social & GitHub
    items.push({
      title: 'GitHub Organization (@strangeinfinity)',
      subtitle: 'Browse all open-source repositories and code in public',
      tag: 'External',
      icon: '<i class="fa-brands fa-github"></i>',
      action: () => window.open(SI_CONFIG.social.github.url, '_blank')
    });

    return items;
  }

  function renderList(query = '') {
    if (!resultsContainer) return;
    const all = buildItems();
    const q = query.toLowerCase().trim();

    currentResults = all.filter(it => {
      if (!q) return true;
      return it.title.toLowerCase().includes(q) || (it.subtitle && it.subtitle.toLowerCase().includes(q)) || it.tag.toLowerCase().includes(q);
    });

    selectedIndex = Math.min(selectedIndex, Math.max(0, currentResults.length - 1));

    if (currentResults.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding:var(--space-6);text-align:center;color:var(--text-muted);font-size:0.85rem;">
          No matching destinations found for "${query}".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = currentResults.map((item, idx) => `
      <div class="command-palette-item ${idx === selectedIndex ? 'selected' : ''}" data-index="${idx}">
        <div class="command-palette-item-left">
          <span class="command-palette-item-icon">${item.icon}</span>
          <div>
            <div style="font-weight:600;color:var(--text-primary);font-size:0.88rem;">${item.title}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">${item.subtitle || ''}</div>
          </div>
        </div>
        <span class="command-palette-item-tag">${item.tag}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.command-palette-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10);
        executeItem(idx);
      });
      el.addEventListener('mouseenter', () => {
        selectedIndex = parseInt(el.dataset.index, 10);
        updateSelectionHighlight();
      });
    });
  }

  function updateSelectionHighlight() {
    if (!resultsContainer) return;
    resultsContainer.querySelectorAll('.command-palette-item').forEach((el, idx) => {
      el.classList.toggle('selected', idx === selectedIndex);
    });
  }

  function executeItem(idx) {
    if (currentResults[idx]) {
      close();
      if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) SoundEngine.playChime(648);
      currentResults[idx].action();
    }
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    modalBackdrop.classList.add('active');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    renderList('');
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 50);
    if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) SoundEngine.playChime(432);
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    modalBackdrop.classList.remove('active');
  }

  function init() {
    modalBackdrop = document.getElementById('command-palette-backdrop');
    if (!modalBackdrop) return;

    searchInput = document.getElementById('command-palette-input');
    resultsContainer = document.getElementById('command-palette-results');
    const closeBtn = document.getElementById('command-palette-close');

    if (closeBtn) closeBtn.addEventListener('click', close);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) close();
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        selectedIndex = 0;
        renderList(e.target.value);
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = (selectedIndex + 1) % Math.max(1, currentResults.length);
          updateSelectionHighlight();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = (selectedIndex - 1 + currentResults.length) % Math.max(1, currentResults.length);
          updateSelectionHighlight();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          executeItem(selectedIndex);
        } else if (e.key === 'Escape') {
          close();
        }
      });
    }

    // Nav command button
    const navBtn = document.getElementById('nav-command-btn');
    if (navBtn) navBtn.addEventListener('click', open);

    // Global keyboard listener (Cmd+K / Ctrl+K / /)
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? close() : open();
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        open();
      } else if (e.key === 'Escape' && isOpen) {
        close();
      }
    });
  }

  return { init, open, close };
})();

window.CommandPalette = CommandPalette;

/* ──────────────────────────────────────────────
   3. MAIN ORCHESTRATION ON DOM READY
   ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Fast Instant Loading (Zero Artificial Delay) ── */
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    // Fade out immediately once DOM is interactive
    requestAnimationFrame(() => {
      loadingScreen.classList.add('hidden');
    });
  }

  /* ── Init Core Engines ── */
  ThemeManager.init();
  SoundEngine.init();
  ParticleEngine.init();
  ProjectRenderer.init();
  CommandPalette.init();
  if (typeof CopyCodeManager !== 'undefined') CopyCodeManager.init();

  /* ── Sticky Navbar ── */
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;
  let scrollTicking = false;

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (navbar) {
          navbar.classList.toggle('scrolled', scrollY > 40);
          if (scrollY > 300) {
            navbar.style.transform = scrollY > lastScrollY + 8 ? 'translateY(-100%)' : 'translateY(0)';
          } else {
            navbar.style.transform = 'translateY(0)';
          }
        }
        lastScrollY = scrollY;

        const btt = document.getElementById('back-to-top');
        if (btt) btt.classList.toggle('visible', scrollY > 500);

        updateActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Active Nav Highlight ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNav() {
    let current = '';
    const scrollMid = window.scrollY + window.innerHeight / 3;
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollMid) current = sec.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.classList.toggle('active', href === current);
    });
  }

  /* ── Mobile Hamburger ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Scroll Reveals ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeReveal() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      revealObserver.observe(el);
    });
  }
  observeReveal();

  /* ── Stat Counters ── */
  function animateCounter(el, target, suffix, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start) + suffix;
    }, 16);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-count]').forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        const suffix = counter.dataset.suffix || '';
        animateCounter(counter, target, suffix);
      });
      statsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section, .stats-grid, .hero-stats').forEach(el => {
    if (el.querySelector('[data-count]')) statsObserver.observe(el);
  });

  /* ── Vedic Sutra Rotator ── */
  const sutraBanner = document.getElementById('vedic-sutra-banner');
  if (sutraBanner && SI_CONFIG.sutras && SI_CONFIG.sutras.length) {
    let sIdx = 0;
    const sText = document.getElementById('vedic-sutra-text');
    const sMeaning = document.getElementById('vedic-sutra-meaning');

    function cycleSutra() {
      sIdx = (sIdx + 1) % SI_CONFIG.sutras.length;
      const cur = SI_CONFIG.sutras[sIdx];
      if (sText) {
        sText.style.opacity = '0';
        setTimeout(() => {
          sText.textContent = cur.sanskrit;
          if (sMeaning) sMeaning.textContent = `"${cur.meaning}" — ${cur.context}`;
          sText.style.opacity = '1';
        }, 200);
      }
    }

    sutraBanner.addEventListener('click', () => {
      cycleSutra();
      if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) SoundEngine.playChime(540);
    });
    setInterval(cycleSutra, 9000);
  }

  /* ── Back to Top Button ── */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Keyboard Navigation (Clean & Unobtrusive) ── */
  document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.key.toLowerCase() === 't') {
      ThemeManager.toggle();
    } else if (e.key === 'Escape') {
      if (window.CommandPalette && CommandPalette.close) CommandPalette.close();
      const qv = document.getElementById('quickview-backdrop');
      if (qv) qv.classList.remove('active');
    }
  });

  /* ── Mobile Application Dock (Native App UX) ── */
  const dockTabs = document.querySelectorAll('.dock-tab[data-section]');
  const dockTeleportBtn = document.getElementById('dock-teleport-btn');

  function handleSearchTrigger(e) {
    if (e) e.preventDefault();
    if (window.CommandPalette && typeof CommandPalette.open === 'function') {
      CommandPalette.open();
    } else {
      const fallbackInput = document.getElementById('projects-search-input');
      if (fallbackInput) {
        fallbackInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => fallbackInput.focus(), 250);
      }
    }
    if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) {
      SoundEngine.playChime(648);
    }
  }

  if (dockTeleportBtn) {
    dockTeleportBtn.addEventListener('click', handleSearchTrigger);
  }

  dockTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetId = tab.dataset.section;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        dockTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (typeof SoundEngine !== 'undefined' && SoundEngine.playChime) SoundEngine.playChime(540);
      }
    });
  });

  // Active dock tab syncing via IntersectionObserver
  const dockSections = ['hero', 'products', 'projects', 'about', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && dockSections.length > 0) {
    const dockObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dockTabs.forEach(tab => {
            if (tab.dataset.section === id) {
              dockTabs.forEach(t => t.classList.remove('active'));
              tab.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    dockSections.forEach(s => dockObserver.observe(s));
  }

  /* ── Typewriter in Hero ── */
  const typeEl = document.getElementById('hero-typewriter');
  if (typeEl) {
    const words = ['software', 'tools', 'browsers', 'experiments', 'the cosmos'];
    let wIdx = 0, cIdx = 0, deleting = false;
    function type() {
      const word = words[wIdx % words.length];
      if (!deleting) {
        typeEl.textContent = word.slice(0, ++cIdx);
        if (cIdx === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typeEl.textContent = word.slice(0, --cIdx);
        if (cIdx === 0) {
          deleting = false;
          wIdx++;
        }
      }
      setTimeout(type, deleting ? 50 : 100);
    }
    type();
  }

});
