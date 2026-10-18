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

    // 2. Hash fallback
    if (hash === '#news' || hash === '#updates') return 'news';
    if (hash === '#about') return 'about';
    if (hash === '#programmes' || hash === '#programs') return 'programmes';
    if (hash === '#contact') return 'contact';
    if (hash === '#donate' || hash === '#support') return 'support';
    if (hash === '#departments' || hash === '#all-departments') return 'departments';

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
