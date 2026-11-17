/**
 * StrangeInfinity — Vedic Theme Manager & Copy Utility
 * assets/js/theme.js
 *
 * Supports two authentic Vedic themes:
 *   1. Brahmanda (ब्रह्माण्ड — Cosmic Vedic Obsidian & Sacred Gold) [Dark]
 *   2. Bhurjapatra (भूर्जपत्र — Ancient Birch Bark Parchment & Terracotta) [Light]
 */

const ThemeManager = (() => {
  const STORAGE_KEY = 'si-theme';
  const DARK  = 'dark';
  const LIGHT = 'light';

  let currentTheme = DARK;

  /** Show ephemeral Vedic Toast notification */
  function showToast(message) {
    let toast = document.getElementById('vedic-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'vedic-toast';
      toast.className = 'vedic-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-om" style="color:var(--color-primary)"></i> <span>${message}</span>`;
    toast.classList.add('active');

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('active');
    }, 2400);
  }

  /** Apply theme to DOM */
  function applyTheme(theme, notify = false) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle button icon & tooltip
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      if (theme === DARK) {
        btn.setAttribute('aria-label', 'Switch to Bhurjapatra mode (भूर्जपत्र)');
        btn.setAttribute('title', 'Switch to Bhurjapatra mode (भूर्जपत्र)');
        btn.innerHTML = '<i class="fa-solid fa-sun" style="color:#f59e0b"></i>';
      } else {
        btn.setAttribute('aria-label', 'Switch to Brahmanda mode (ब्रह्माण्ड)');
        btn.setAttribute('title', 'Switch to Brahmanda mode (ब्रह्माण्ड)');
        btn.innerHTML = '<i class="fa-solid fa-moon" style="color:#d4af37"></i>';
      }
    }

    // Play subtle synthesized Vedic chime if SoundEngine is present
    if (notify && typeof SoundEngine !== 'undefined' && SoundEngine.playChime) {
      SoundEngine.playChime(theme === DARK ? 432 : 540);
    }

    if (notify) {
      showToast(theme === DARK ? '॥ ब्रह्माण्ड · Cosmic Vedic Dark ॥' : '॥ भूर्जपत्र · Sacred Manuscript Light ॥');
    }

    // Dispatch event for other engines (canvas, etc.)
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  /** Toggle between dark and light */
  function toggle() {
    applyTheme(currentTheme === DARK ? LIGHT : DARK, true);
  }

  /** Initialize theme */
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === DARK || saved === LIGHT) {
      applyTheme(saved, false);
    } else {
      const docTheme = document.documentElement ? document.documentElement.getAttribute('data-theme') : null;
      if (docTheme === DARK || docTheme === LIGHT) {
        applyTheme(docTheme, false);
      } else {
        applyTheme(DARK, false);
      }
    }

    // Wire up toggle button
    const btn = document.getElementById('theme-toggle');
    if (btn && !btn.dataset.themeBound) {
      btn.dataset.themeBound = 'true';
      btn.addEventListener('click', toggle);
    }

    // OS Preference change
    if (!window._themeMediaBound) {
      window._themeMediaBound = true;
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? DARK : LIGHT, false);
        }
      });
    }

    if (typeof CopyCodeManager !== 'undefined' && CopyCodeManager.init) {
      CopyCodeManager.init();
    }
  }

  return { init, toggle, showToast, get current() { return currentTheme; } };
})();

/**
 * Universal Copy Code Manager
 */
const CopyCodeManager = (() => {
  const COPY_ICON = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
  const CHECK_ICON = '<i class="fa-solid fa-check" aria-hidden="true"></i>';

  function detectLanguage(codeText, preEl) {
    const explicitLang = preEl.getAttribute('data-lang');
    if (explicitLang) {
      const lower = explicitLang.toLowerCase();
      let icon = 'fa-solid fa-code';
      if (lower.includes('bash') || lower.includes('sh') || lower.includes('terminal')) icon = 'fa-solid fa-terminal';
      else if (lower.includes('python')) icon = 'fa-brands fa-python';
      else if (lower.includes('js') || lower.includes('javascript')) icon = 'fa-brands fa-js';
      else if (lower.includes('css')) icon = 'fa-brands fa-css3-alt';
      return { name: explicitLang.toUpperCase(), icon, cls: `lang-${lower}` };
    }

    const trimmed = codeText.trim();
    if (/^(#!\/bin\/bash|git |sudo |pip |npm |apt |chmod |curl |wget )/m.test(trimmed)) {
      return { name: 'SHELL', icon: 'fa-solid fa-terminal', cls: 'lang-bash' };
    }
    if (/^(import |from |def |class |python3 )/m.test(trimmed)) {
      return { name: 'PYTHON', icon: 'fa-brands fa-python', cls: 'lang-python' };
    }
    if (/^(function |const |let |var |export )/m.test(trimmed)) {
      return { name: 'JAVASCRIPT', icon: 'fa-brands fa-js', cls: 'lang-javascript' };
    }
    return { name: 'CODE', icon: 'fa-solid fa-code', cls: 'lang-code' };
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {}
    }
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    } catch (e) {
      return false;
    }
  }

  function processPreElement(pre) {
    if (!pre || pre.dataset.noCopy === 'true') return;
    if (pre.closest('.code-block-wrapper')) return;
    if (pre.querySelector('.code-copy-btn')) return;

    const codeElem = pre.querySelector('code');
    const rawText = (codeElem || pre).innerText || (codeElem || pre).textContent || '';
    if (!rawText.trim()) return;

    const langInfo = detectLanguage(rawText, pre);
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';

    const header = document.createElement('div');
    header.className = 'code-block-header';

    const langBadge = document.createElement('div');
    langBadge.className = `code-block-lang ${langInfo.cls}`;
    langBadge.innerHTML = `<i class="${langInfo.icon}" aria-hidden="true"></i> <span>${langInfo.name}</span>`;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.type = 'button';
    copyBtn.innerHTML = `${COPY_ICON}<span>Copy</span>`;

    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = (pre.querySelector('code') || pre).innerText || '';
      const success = await copyToClipboard(textToCopy.trim());
      if (success) {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `${CHECK_ICON}<span>Copied</span>`;
        ThemeManager.showToast('॥ Copied to clipboard ॥');
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = `${COPY_ICON}<span>Copy</span>`;
        }, 2000);
      }
    });

    header.appendChild(langBadge);
    header.appendChild(copyBtn);

    const parent = pre.parentNode;
    if (parent) {
      parent.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    }
  }

  function init(root = document) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('pre').forEach(processPreElement);
  }

  return { init, copyToClipboard };
})();

// Expose globally
window.ThemeManager = ThemeManager;
window.CopyCodeManager = CopyCodeManager;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
  } else {
    ThemeManager.init();
  }
}
