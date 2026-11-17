/**
 * StrangeInfinity — Vedic Sacred Geometry & Cosmic Bindu Engine
 * assets/js/particles.js
 *
 * Ultra-fast 60/120fps hardware-accelerated canvas background.
 * Renders ancient sacred geometry orbits (Golden Ratio / Sri Yantra harmonics)
 * and floating constellation bindu nodes. Zero lag, low CPU/battery consumption.
 */

const ParticleEngine = (() => {
  let canvas, ctx, W, H, animId;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let isMobile = false;
  let isPaused = false;
  let currentTheme = 'dark';

  // ── Vedic Color Palettes ──
  const PALETTES = {
    dark: {
      bindu:   ['rgba(212,175,55,', 'rgba(229,169,60,', 'rgba(200,100,40,', 'rgba(243,198,105,'],
      line:    'rgba(212,175,55,',
      ring:    'rgba(212,175,55,0.06)',
      ringAlt: 'rgba(200,100,40,0.04)',
    },
    light: {
      bindu:   ['rgba(180,83,9,', 'rgba(217,119,6,', 'rgba(154,52,18,', 'rgba(194,65,12,'],
      line:    'rgba(180,83,9,',
      ring:    'rgba(180,83,9,0.05)',
      ringAlt: 'rgba(154,52,18,0.03)',
    }
  };

  // ── Bindus (Nodes) ──
  let bindus = [];
  const BINDU_COUNT_DESKTOP = 45;
  const BINDU_COUNT_MOBILE  = 22;
  const CONNECTION_DIST     = 100;

  class Bindu {
    constructor() { this.reset(); }
    reset() {
      this.x     = Math.random() * W;
      this.y     = Math.random() * H;
      this.r     = Math.random() * 1.5 + 0.8;
      this.vx    = (Math.random() - 0.5) * 0.25;
      this.vy    = (Math.random() - 0.5) * 0.25;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.alphaSpeed = (Math.random() - 0.5) * 0.005;
      const pal = PALETTES[currentTheme] || PALETTES.dark;
      this.color = pal.bindu[Math.floor(Math.random() * pal.bindu.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha += this.alphaSpeed;
      if (this.alpha < 0.15 || this.alpha > 0.8) this.alphaSpeed *= -1;

      // Wrap around edges
      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  // ── Sacred Geometry Orbital Concentric Rings ──
  let orbitAngle = 0;
  function drawSacredOrbits() {
    const pal = PALETTES[currentTheme] || PALETTES.dark;
    const centerX = W * 0.5 + (mouse.x - W * 0.5) * 0.04;
    const centerY = Math.min(H * 0.38, 360) + (mouse.y - H * 0.38) * 0.04;

    // Golden Ratio harmonic radii: r, r * 1.618, r * 2.618
    const baseRadius = Math.min(W, H) * 0.16;
    const radii = [
      baseRadius * 0.618,
      baseRadius,
      baseRadius * 1.618,
      baseRadius * 2.618
    ];

    ctx.save();
    ctx.translate(centerX, centerY);

    // Subtle concentric orbits
    radii.forEach((r, idx) => {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = idx % 2 === 0 ? pal.ring : pal.ringAlt;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Rotating sacred geometry arc markers
    ctx.rotate(orbitAngle);
    ctx.beginPath();
    ctx.arc(0, 0, radii[1], 0, Math.PI * 0.35);
    ctx.arc(0, 0, radii[1], Math.PI, Math.PI * 1.35);
    ctx.strokeStyle = pal.ring;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
  }

  // ── Render Loop ──
  function render() {
    if (isPaused) return;

    ctx.clearRect(0, 0, W, H);

    // Mouse easing
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // 1. Draw Sacred Geometry Rings
    orbitAngle += 0.0008;
    drawSacredOrbits();

    // 2. Draw Constellation Connecting Threads
    const pal = PALETTES[currentTheme] || PALETTES.dark;
    const len = bindus.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx = bindus[i].x - bindus[j].x;
        const dy = bindus[i].y - bindus[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(bindus[i].x, bindus[i].y);
          ctx.lineTo(bindus[j].x, bindus[j].y);
          ctx.strokeStyle = pal.line + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // 3. Update & Draw Bindu Nodes
    bindus.forEach(b => {
      b.update();
      b.draw();
    });

    animId = requestAnimationFrame(render);
  }

  // ── Resize Handler ──
  function onResize() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.scale(dpr, dpr);

    isMobile = W < 768;
    const targetCount = isMobile ? BINDU_COUNT_MOBILE : BINDU_COUNT_DESKTOP;

    bindus = [];
    for (let i = 0; i < targetCount; i++) {
      bindus.push(new Bindu());
    }
  }

  // ── Mouse Move Parallax ──
  function onMouseMove(e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  }

  // ── Initialization ──
  function init() {
    canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d', { alpha: true });

    const docTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    currentTheme = docTheme;

    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Listen to theme changes
    window.addEventListener('themechange', (e) => {
      currentTheme = e.detail && e.detail.theme ? e.detail.theme : 'dark';
      bindus.forEach(b => {
        const pal = PALETTES[currentTheme] || PALETTES.dark;
        b.color = pal.bindu[Math.floor(Math.random() * pal.bindu.length)];
      });
    });

    // Pause when tab is hidden to save 100% CPU/battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isPaused = true;
        cancelAnimationFrame(animId);
      } else {
        isPaused = false;
        animId = requestAnimationFrame(render);
      }
    });

    // Start render
    isPaused = false;
    animId = requestAnimationFrame(render);
  }

  return { init };
})();
