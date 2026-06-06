/* ============================================================
   CampDream.store — Main Site JS
   Video rotation, quote rotation, nav, animations
   ============================================================ */

/* ── Loading Screen ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading-screen');
    if (loading) loading.classList.add('hidden');
  }, 1800);
});

/* ── Navbar Scroll Effect ── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Mobile Nav ── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ── Video Background Manager ── */
class VideoBackgroundManager {
  constructor(containerId, category, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.category = category;
    this.interval = options.interval || 12000;
    this.videoPool = [];
    this.currentIndex = 0;
    this.elements = [];
    this.dotsContainer = null;
    this.init();
  }

  getVideos() {
    if (!window.MEDIA_CONFIG) return [];
    const pool = MEDIA_CONFIG.videos[this.category] || [];
    // Mix in other categories for variety on home
    if (this.category === 'all') {
      return shuffle([
        ...MEDIA_CONFIG.videos.beach,
        ...MEDIA_CONFIG.videos.city,
        ...MEDIA_CONFIG.videos.nature,
        ...MEDIA_CONFIG.videos.holiday,
        ...MEDIA_CONFIG.videos.uplifting,
      ]).slice(0, 10);
    }
    return shuffle(pool);
  }

  init() {
    this.videoPool = this.getVideos();
    if (!this.videoPool.length) return;

    // Create video elements (preload next)
    const count = Math.min(this.videoPool.length, 4);
    for (let i = 0; i < count; i++) {
      const vid = document.createElement('video');
      vid.muted = true;
      vid.loop = false;
      vid.playsInline = true;
      vid.setAttribute('playsinline', '');
      vid.setAttribute('webkit-playsinline', '');
      vid.preload = i === 0 ? 'auto' : 'metadata';
      vid.src = this.videoPool[i % this.videoPool.length].src;
      vid.classList.add('bg-video');
      if (i === 0) vid.classList.add('active');
      this.container.appendChild(vid);
      this.elements.push(vid);

      vid.addEventListener('ended', () => this.next());
      vid.addEventListener('error', () => this.next());
    }

    // Create dots
    const hero = this.container.closest('.video-hero, .video-section-bg, .page-hero');
    if (hero && this.videoPool.length > 1) {
      this.dotsContainer = document.createElement('div');
      this.dotsContainer.className = 'video-dots';
      for (let i = 0; i < Math.min(this.videoPool.length, 6); i++) {
        const dot = document.createElement('button');
        dot.className = 'video-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Video ${i + 1}`);
        dot.addEventListener('click', () => this.goTo(i));
        this.dotsContainer.appendChild(dot);
      }
      hero.appendChild(this.dotsContainer);
    }

    // Play first video
    this.elements[0].play().catch(() => {});

    // Auto-advance timer
    this.timer = setInterval(() => this.next(), this.interval);
  }

  next() {
    this.goTo((this.currentIndex + 1) % this.elements.length);
  }

  goTo(index) {
    const prev = this.elements[this.currentIndex];
    prev.classList.remove('active');
    prev.pause();

    this.currentIndex = index;
    const curr = this.elements[this.currentIndex];

    // Preload next
    const nextIndex = (this.currentIndex + 1) % this.elements.length;
    this.elements[nextIndex].src = this.videoPool[(this.currentIndex + 1) % this.videoPool.length].src;

    curr.currentTime = 0;
    curr.classList.add('active');
    curr.play().catch(() => {});

    // Update dots
    if (this.dotsContainer) {
      this.dotsContainer.querySelectorAll('.video-dot').forEach((d, i) => {
        d.classList.toggle('active', i === this.currentIndex);
      });
    }
  }

  destroy() {
    clearInterval(this.timer);
  }
}

/* ── Quote Rotator ── */
class QuoteRotator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container || !window.MEDIA_CONFIG) return;
    this.quotes = shuffle(MEDIA_CONFIG.quotes);
    this.index = 0;
    this.textEl = this.container.querySelector('.quote-text');
    this.authorEl = this.container.querySelector('.quote-author');
    if (!this.textEl) return;
    this.show();
    setInterval(() => this.next(), 7000);
  }

  show() {
    const q = this.quotes[this.index % this.quotes.length];
    this.textEl.style.opacity = '0';
    setTimeout(() => {
      this.textEl.textContent = `"${q.text}"`;
      if (this.authorEl) this.authorEl.textContent = `— ${q.author}`;
      this.textEl.style.opacity = '1';
    }, 400);
  }

  next() {
    this.index++;
    this.show();
  }
}

/* ── Scroll Animations ── */
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in-up');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ── Card Video Thumbs ── */
function initCardVideos() {
  document.querySelectorAll('.card-thumb video').forEach(vid => {
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    const card = vid.closest('.card, .story-card');
    if (!card) return;
    card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
    card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  });
}

/* ── Smooth Page Init ── */
function initPage() {
  initScrollAnimations();
  initCardVideos();

  // Mark active nav link
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    link.classList.toggle('active', href === path || (path.startsWith(href) && href !== '/'));
  });
}

document.addEventListener('DOMContentLoaded', initPage);
