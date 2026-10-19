import React, { useState } from 'react';
import { GyutoEmblem } from './MonasteryIcons';
import { Menu, X } from 'lucide-react';
import './header.css';

export default function Header({ lang = 'en', active = 'home', onSwitchLanguage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTibetan = lang === 'tb';

  const navItems = isTibetan ? [
    { key: 'home', href: '/', label: 'HOME', active: active === 'home' },
    { key: 'news', href: '/news', label: 'NEWS', active: active === 'news' },
    { key: 'departments', href: '/departments', label: 'སྡེ་ཚན་ཁག', active: active === 'departments' },
    { key: 'programmes', href: '/programmes', label: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།', active: active === 'programmes' },
    { key: 'about', href: '/about', label: 'About', active: active === 'about' },
    { key: 'gallery', href: '/gallery', label: 'པར་མཛོད།', active: active === 'gallery' },
    { key: 'contact', href: '/contact', label: 'CONTACT', active: active === 'contact' },
    { key: 'donate', href: '/support', label: 'SUPPORT US', active: active === 'donate' || active === 'support' }
  ] : [
    { key: 'home', href: '/', label: 'HOME', active: active === 'home' },
    { key: 'news', href: '/news', label: 'NEWS', active: active === 'news' },
    { key: 'departments', href: '/departments', label: 'DEPARTMENTS', active: active === 'departments' },
    { key: 'programmes', href: '/programmes', label: 'PROGRAMMES', active: active === 'programmes' },
    { key: 'about', href: '/about', label: 'ABOUT', active: active === 'about' },
    { key: 'gallery', href: '/gallery', label: 'GALLERY', active: active === 'gallery' },
    { key: 'contact', href: '/contact', label: 'CONTACT', active: active === 'contact' },
    { key: 'donate', href: '/support', label: 'SUPPORT US', active: active === 'donate' || active === 'support' }
  ];

  const handleNavClick = (key, href, e) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      if (key === 'contact') {
        e.preventDefault();
        onNavigate('contact');
      } else if (key === 'donate') {
        e.preventDefault();
        onNavigate('support');
      } else if (key === 'news') {
        e.preventDefault();
        onNavigate('news');
      }
      else if (key === 'departments') {
        e.preventDefault();
        onNavigate('departments');
      } else if (key === 'programmes') {
        e.preventDefault();
        onNavigate('programmes');
      } else if (key === 'about') {
        e.preventDefault();
        onNavigate('about');
      } else if (key === 'gallery') {
        e.preventDefault();
        onNavigate('gallery');
      } else if (key === 'home') {
        e.preventDefault();
        onNavigate('home');
      }
    }
  };

  const renderLanguageSwitcher = (isMobile = false) => (
    <div
      className={`gt-lang-switcher-box ${isMobile ? 'gt-lang-switcher-mobile' : ''}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        className={`gt-lang-btn gt-lang-btn-en ${!isTibetan ? 'active' : 'inactive'}`}
        onClick={() => onSwitchLanguage && onSwitchLanguage('en')}
        title={isTibetan ? 'Switch to English' : 'English Language (Active)'}
        type="button"
        aria-pressed={!isTibetan}
      >
        <span className="gt-lang-text-en">ENGLISH</span>
      </button>
      <button
        className={`gt-lang-btn gt-lang-btn-tb ${isTibetan ? 'active' : 'inactive'}`}
        onClick={() => onSwitchLanguage && onSwitchLanguage('tb')}
        title={isTibetan ? 'བོད་ཡིག (འདེམས་ཟིན།)' : 'བོད་ཡིག་ལ་བརྗེ་བ།'}
        type="button"
        aria-pressed={isTibetan}
      >
        <span className="gt-lang-text-tb">བོད་ཡིག</span>
      </button>
    </div>
  );

  return (
    <>
      {/* 1. TOP HEADER (Frame 2147236869: #FAC758, height: 234px, padding: 0 30px 0 108px) */}
      <header className="gt-top-header">
        <div className="gt-top-header-inner">
          <a
            href="/"
            className="gt-brand-group"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
              }
            }}
          >
            <GyutoEmblem width={227} height={190} className="gt-header-logo" />
            <div className="gt-brand-text">
              <span className="gt-tibetan-title">དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།</span>
              <span className="gt-english-title">Gyuto Tantric Monastery</span>
            </div>
          </a>

          {/* Frame 2147236870: Right Column with Language Switch - Desktop only */}
          <div className="gt-header-right-col gt-desktop-only">
            {renderLanguageSwitcher(false)}
          </div>
        </div>
      </header>

      {/* 2. MAROON NAVIGATION BAR (Figma: #92060F, height: 64px) */}
      <nav className="gt-navbar">
        <div className="gyuto-container gt-nav-container">
          {/* Mobile Language Switcher on LEFT */}
          <div className="gt-mobile-lang-wrap">
            {renderLanguageSwitcher(true)}
          </div>

          {/* Mobile Hamburger Menu Toggle on RIGHT */}
          <button
            className="gt-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            type="button"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className={`gt-nav-list ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.key} className="gt-nav-item">
                <a
                  href={item.href}
                  className={`gt-nav-link ${item.active ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.key, item.href, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
