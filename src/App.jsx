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

export default function App() {
  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'tb'
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'programmes' | 'contact' | 'support' | 'departments'

  // Hash based routing synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#programmes' || hash === '#programs') {
        setCurrentPage('programmes');
      } else if (hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#donate' || hash === '#support') {
        setCurrentPage('support');
      } else if (hash === '#departments' || hash === '#all-departments') {
        setCurrentPage('departments');
      } else if (hash === '#home' || hash === '' || hash === '#') {
        setCurrentPage('home');
      }
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '#about';
    } else if (page === 'programmes') {
      window.location.hash = '#programmes';
    } else if (page === 'contact') {
      window.location.hash = '#contact';
    } else if (page === 'support') {
      window.location.hash = '#donate';
    } else if (page === 'departments') {
      window.location.hash = '#departments';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {currentPage === 'about' ? (
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
