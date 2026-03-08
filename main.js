// =====================
// PORTFOLIO — MAIN JS
// AbdouX — System Architect
// =====================

const Portfolio = {

  // ─── STATE ───────────────────────────────────────
  state: {
    theme: 'dark',
    lang: 'en',
    menuOpen: false,
  },

  // ─── TRANSLATIONS ────────────────────────────────
  i18n: {
    en: {
      nav_home: 'Home',
      nav_projects: 'Projects',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_insights: 'Thinking',
      nav_contact: 'Contact',
      hero_eyebrow: 'Product Engineer & Founder — Algeria',
      hero_h1_1: "I don't build",
      hero_h1_2: 'apps.',
      hero_h1_3: 'I architect',
      hero_h1_4: 'systems.',
      hero_sub: 'Designing scalable ecosystems for the Arab world\'s most complex infrastructure challenges — from urban logistics to AI-powered productivity.',
      hero_cta1: 'View Systems',
      hero_cta2: 'Start a Project',
      hero_stat1_num: '4+',
      hero_stat1_label: 'Ecosystems Built',
      hero_stat2_num: '3',
      hero_stat2_label: 'Active Products',
      hero_stat3_num: '∞',
      hero_stat3_label: 'Scale Mindset',
      hero_status: 'Available for strategic projects',
      theme_day: 'DAY',
      theme_night: 'NIGHT',
    },
    fr: {
      nav_home: 'Accueil',
      nav_projects: 'Projets',
      nav_about: 'À propos',
      nav_skills: 'Compétences',
      nav_insights: 'Réflexions',
      nav_contact: 'Contact',
      hero_eyebrow: 'Ingénieur Produit & Fondateur — Algérie',
      hero_h1_1: "Je ne code pas",
      hero_h1_2: "des apps.",
      hero_h1_3: "Je conçois des",
      hero_h1_4: "systèmes.",
      hero_sub: 'Concevoir des solutions scalables pour les défis infrastructurels complexes du monde arabe — de la logistique urbaine à la productivité IA.',
      hero_cta1: 'Voir les systèmes',
      hero_cta2: 'Démarrer un projet',
      hero_stat1_num: '4+',
      hero_stat1_label: 'Écosystèmes construits',
      hero_stat2_num: '3',
      hero_stat2_label: 'Produits actifs',
      hero_stat3_num: '∞',
      hero_stat3_label: 'Vision scalable',
      hero_status: 'Disponible pour projets stratégiques',
      theme_day: 'JOUR',
      theme_night: 'NUIT',
    },
    ar: {
      nav_home: 'الرئيسية',
      nav_projects: 'المشاريع',
      nav_about: 'عني',
      nav_skills: 'المهارات',
      nav_insights: 'أفكاري',
      nav_contact: 'تواصل',
      hero_eyebrow: 'مهندس منتجات ومؤسس — الجزائر',
      hero_h1_1: 'أنا لا أبني',
      hero_h1_2: 'تطبيقات.',
      hero_h1_3: 'أنا أُصمِّم',
      hero_h1_4: 'أنظمة.',
      hero_sub: 'أحوّل التحديات المعقدة إلى بنى رقمية قابلة للتوسع — من إدارة المدن إلى الذكاء الاصطناعي.',
      hero_cta1: 'استعرض الأنظمة',
      hero_cta2: 'ابدأ مشروعاً',
      hero_stat1_num: '+4',
      hero_stat1_label: 'منظومات مبنية',
      hero_stat2_num: '3',
      hero_stat2_label: 'منتجات نشطة',
      hero_stat3_num: '∞',
      hero_stat3_label: 'تفكير قابل للتوسع',
      hero_status: 'متاح للمشاريع الاستراتيجية',
      theme_day: 'نهار',
      theme_night: 'ليل',
    }
  },

  // ─── INIT ─────────────────────────────────────────
  init() {
    this.detectLanguage();
    this.initCursor();
    this.initNavbar();
    this.initTheme();
    this.initLang();
    this.initAnimations();
    this.initMobileMenu();
  },

  // ─── LANGUAGE DETECTION ──────────────────────────
  detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const saved = localStorage.getItem('portfolio_lang');
    if (saved) {
      this.state.lang = saved;
    } else if (browserLang.startsWith('ar')) {
      this.state.lang = 'ar';
    } else if (browserLang.startsWith('fr')) {
      this.state.lang = 'fr';
    } else {
      this.state.lang = 'en';
    }
  },

  // ─── CURSOR ──────────────────────────────────────
  initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animate);
    };
    animate();

    document.querySelectorAll('a, button, .bento-card, .project-card, .skill-item, .act, .insight-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'rgba(232,255,71,0.6)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(232,255,71,0.4)';
      });
    });
  },

  // ─── NAVBAR ──────────────────────────────────────
  initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  },

  // ─── THEME ───────────────────────────────────────
  initTheme() {
    const saved = localStorage.getItem('portfolio_theme') || 'dark';
    this.setTheme(saved);
  },

  setTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
    const btn = document.querySelector('.btn-theme');
    if (btn) {
      const t = this.i18n[this.state.lang];
      btn.textContent = theme === 'dark' ? (t.theme_day || 'DAY') : (t.theme_night || 'NIGHT');
    }
  },

  toggleTheme() {
    this.setTheme(this.state.theme === 'dark' ? 'light' : 'dark');
  },

  // ─── LANGUAGE ────────────────────────────────────
  initLang() {
    this.applyLang(this.state.lang);
  },

  applyLang(lang) {
    this.state.lang = lang;
    localStorage.setItem('portfolio_lang', lang);
    const t = this.i18n[lang];

    // Direction
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    // Active lang btn
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update theme button text
    const themeBtn = document.querySelector('.btn-theme');
    if (themeBtn) {
      themeBtn.textContent = this.state.theme === 'dark' ? (t.theme_day || 'DAY') : (t.theme_night || 'NIGHT');
    }
  },

  switchLang(lang) {
    this.applyLang(lang);
  },

  // ─── ANIMATIONS ──────────────────────────────────
  initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  },

  // ─── MOBILE MENU ─────────────────────────────────
  initMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileNav = document.querySelector('.nav-mobile');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      this.state.menuOpen = !this.state.menuOpen;
      mobileNav.classList.toggle('open', this.state.menuOpen);
    });

    document.querySelectorAll('.nav-mobile a').forEach(a => {
      a.addEventListener('click', () => {
        this.state.menuOpen = false;
        mobileNav.classList.remove('open');
      });
    });
  },
};

// ─── GLOBAL HANDLERS ─────────────────────────────
window.toggleTheme = () => Portfolio.toggleTheme();
window.switchLang = (l) => Portfolio.switchLang(l);

// ─── START ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => Portfolio.init());
