import React, { useState } from 'react';
import { GyutoEmblem } from './MonasteryIcons';
import { Menu, X } from 'lucide-react';

export default function Header({ lang = 'en', active = 'home', onSwitchLanguage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTibetan = lang === 'tb';

  const navItems = [
    { key: 'home', href: '#home', label: 'HOME', active: active === 'home' },
    { key: 'news', href: '#news', label: 'NEWS', active: active === 'news' },
    { key: 'departments', href: '#departments', label: 'DEPARTMENTS', active: active === 'departments' },
    { key: 'programmes', href: '#programmes', label: 'PROGRAMMES', active: active === 'programmes' },
    { key: 'about', href: '#about', label: 'ABOUT', active: active === 'about' },
    { key: 'gallery', href: '#gallery', label: 'GALLERY', active: active === 'gallery' },
    { key: 'contact', href: '#contact', label: 'CONTACT', active: active === 'contact' },
    { key: 'donate', href: '#donate', label: 'SUPPORT US', active: active === 'donate' || active === 'support' }
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
      } else if (key === 'departments') {
        e.preventDefault();
        onNavigate('departments');
      } else if (key === 'home') {
        e.preventDefault();
        onNavigate('home');
      }
    }
  };

  return (
    <>
      {/* 1. TOP HEADER (Figma: #FBC758, height: 234px, padding: 0 30px 0 108px) */}
      <header className="gt-top-header">
        <div className="gyuto-container gt-top-header-inner">
          <a 
            href="#home" 
            className="gt-brand-group"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
              }
            }}
          >
            <GyutoEmblem size={120} />
            <div className="gt-brand-text">
              <span className="gt-tibetan-title">དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།</span>
              <span className="gt-english-title">Gyuto Tantric Monastery</span>
            </div>
          </a>

          {/* Exact Language switch widget from Figma */}
          <div className="gt-lang-switcher-box">
            <button 
              className={`gt-lang-btn ${!isTibetan ? 'active' : 'inactive'}`}
              onClick={() => onSwitchLanguage && onSwitchLanguage('en')}
              title={isTibetan ? 'Switch to English' : 'English Language'}
              type="button"
            >
              <span className="gt-lang-text-en">english</span>
            </button>
            <button 
              className={`gt-lang-btn ${isTibetan ? 'active' : 'inactive'}`}
              onClick={() => onSwitchLanguage && onSwitchLanguage('tb')}
              title={isTibetan ? 'བོད་ཡིག' : 'བོད་ཡིག་ལ་བརྗེ་བ།'}
              type="button"
            >
              <span className="gt-lang-text-tb">བོད་ཡིག</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAROON NAVIGATION BAR (Figma: #92060F, height: 64px) */}
      <nav className="gt-navbar">
        <div className="gyuto-container gt-nav-container">
          <button 
            className="gt-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
