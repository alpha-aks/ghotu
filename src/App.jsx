import React, { useState, useEffect } from 'react';
import Home from './pages/home';
import HomeTb from './pages/hometb';
import Contact from './pages/contact';
import ContactTb from './pages/contacttb';
import Support from './pages/support';
import SupportTb from './pages/supporttb';
import Departments from './pages/departments';
import DepartmentsTb from './pages/departmentstb';
import About from './pages/about';
import AboutTb from './pages/abouttb';
import Programmes from './pages/programmes';
import ProgrammesTb from './pages/programmestb';
import News from './pages/news';
import NewsTb from './pages/newstb';
import Gallery from './pages/gallery';
import GalleryTb from './pages/gallerytb';

export default function App() {
  // Helper to determine active page from current window location (supports both pathname and legacy hash)
  const getPageFromLocation = () => {
    const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    const hash = window.location.hash.toLowerCase();

    // 1. Pathname checks
    if (pathname === '/news' || pathname === '/updates') return 'news';
    if (pathname === '/about') return 'about';
    if (pathname === '/programmes' || pathname === '/programs') return 'programmes';
    if (pathname === '/contact') return 'contact';
    if (pathname === '/support' || pathname === '/donate') return 'support';
    if (pathname === '/departments') return 'departments';
    if (pathname === '/gallery' || pathname === '/photo-gallery') return 'gallery';

    // 2. Hash fallback
    if (hash === '#news' || hash === '#updates') return 'news';
    if (hash === '#about') return 'about';
    if (hash === '#programmes' || hash === '#programs') return 'programmes';
    if (hash === '#contact') return 'contact';
    if (hash === '#donate' || hash === '#support') return 'support';
    if (hash === '#departments' || hash === '#all-departments') return 'departments';
    if (hash === '#gallery' || hash === '#photo-gallery') return 'gallery';

    return 'home';
  };

  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'tb'
  const [currentPage, setCurrentPage] = useState(getPageFromLocation);

  // Pathname and history based routing synchronization
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Preload hero images in background for instant, smooth language transitions
  useEffect(() => {
    const enHero = new Image();
    enHero.src = '/images/home-hero.jpg';
    const tbHero = new Image();
    tbHero.src = '/images/home-hero-tb.jpg';
  }, []);

  // Minimalist on-arrival scroll reveal animation for sections and key content blocks
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const selector = [
      'section',
      'article',
      '.gt-dept-card',
      '.gt-dept-item',
      '.gt-dept-sidebar',
      '.gt-dept-event-card',
      '.gt-event-card',
      '.gt-event-card-item',
      '.gt-stat-item',
      '.gt-stat-box',
      '.gt-news-item',
      '.gt-news-card',
      '.gt-update-card',
      '.gt-news-featured-card',
      '.gt-legacy-story-row',
      '.gt-legacy-text-content',
      '.gt-legacy-img-col',
      '.gt-leader-card',
      '.gt-leader-content-box',
      '.gt-past-abbot-card',
      '.gt-past-abbots-grid',
      '.gt-about-dept-card',
      '.gt-programme-card',
      '.gt-pcard',
      '.gt-gallery-item',
      '.gt-gallery-card',
      '.gt-contact-grid',
      '.gt-contact-block',
      '.gt-contact-map-card',
      '.gt-support-pledge-col',
      '.gt-donation-card',
      '.gt-support-card',
      '.gt-tier-card',
      '.gt-bank-card',
      '.gt-calendar-shell',
      '.gt-org-diagram-wrapper',
      '.gt-org-table-box',
      '.gt-notices-container',
      '.gt-notice-card',
      '.gt-library-content-col',
      '.gt-library-img-col',
      '.gt-footer-brand-wrap',
      '.gt-footer-col',
      '.gt-footer-bottom',
      '.gt-support-inner'
    ].join(', ');

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-arrived');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -25px 0px',
          threshold: 0.05
        }
      );

      elements.forEach((el) => {
        // Exclude top-level header and primary hero containers from delay
        if (
          el.closest('.gt-top-header') ||
          el.closest('.gt-navbar') ||
          el.classList.contains('gt-hero-section') ||
          el.classList.contains('gt-programmes-hero') ||
          el.classList.contains('gt-about-hero') ||
          el.classList.contains('gt-dept-hero') ||
          el.classList.contains('gt-updates-hero') ||
          el.classList.contains('gt-gallery-hero') ||
          el.classList.contains('gt-contact-hero') ||
          el.classList.contains('gt-support-hero')
        ) {
          return;
        }

        if (!el.classList.contains('gt-arrive')) {
          el.classList.add('gt-arrive');

          // Subtle stagger delay for child items in grids and card groups
          const parent = el.parentElement;
          if (parent && parent.children.length > 1) {
            const childIndex = Array.prototype.indexOf.call(parent.children, el);
            if (childIndex > 0 && childIndex <= 8) {
              el.classList.add(`gt-delay-${childIndex}`);
            }
          }
        }
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [currentPage, currentLang]);

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page) => {
    let path = '/';
    if (page === 'news' || page === 'updates') {
      path = '/news';
    } else if (page === 'about') {
      path = '/about';
    } else if (page === 'programmes' || page === 'programs') {
      path = '/programmes';
    } else if (page === 'contact') {
      path = '/contact';
    } else if (page === 'support' || page === 'donate') {
      path = '/support';
    } else if (page === 'departments') {
      path = '/departments';
    } else if (page === 'gallery' || page === 'photo-gallery') {
      path = '/gallery';
    } else {
      path = '/';
    }

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPage(page === 'donate' ? 'support' : page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {currentPage === 'news' || currentPage === 'updates' ? (
        currentLang === 'en' ? (
          <News onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <NewsTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : currentPage === 'about' ? (
        currentLang === 'en' ? (
          <About onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <AboutTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : currentPage === 'programmes' ? (
        currentLang === 'en' ? (
          <Programmes onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <ProgrammesTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : currentPage === 'contact' ? (
        currentLang === 'en' ? (
          <Contact onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <ContactTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : currentPage === 'support' ? (
        currentLang === 'en' ? (
          <Support onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <SupportTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : currentPage === 'departments' ? (
        currentLang === 'en' ? (
          <Departments onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <DepartmentsTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : currentPage === 'gallery' ? (
        currentLang === 'en' ? (
          <Gallery onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <GalleryTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      ) : (
        currentLang === 'en' ? (
          <Home onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        ) : (
          <HomeTb onSwitchLanguage={switchLanguage} onNavigate={navigateTo} />
        )
      )}
    </div>
  );
}
