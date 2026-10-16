import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { TibetanVajra, EndlessKnot } from '../components/MonasteryIcons';
import './news.css';

export const UPDATES_DATA = [
  {
    id: 'upd-1',
    type: 'split',
    tag: 'UPDATES',
    date: '8TH NOVEMBER 2026',
    title: 'From the Monastery',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/images/monks-education.jpg',
    imageAlt: 'Monks in traditional Tibetan studies at Gyuto'
  },
  {
    id: 'upd-2',
    type: 'center',
    tag: 'ANNOUNCEMENT',
    date: '8TH NOVEMBER 2026',
    title: 'From the Monastery',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 'upd-3',
    type: 'split',
    tag: 'UPDATES',
    date: '8TH NOVEMBER 2026',
    title: 'From the Monastery',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/images/chant-preview.jpg',
    imageAlt: 'Sacred chanting and overtone ritual practice'
  },
  {
    id: 'upd-4',
    type: 'center',
    tag: 'ANNOUNCEMENT',
    date: '8TH NOVEMBER 2026',
    title: 'From the Monastery',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

export default function News({ onSwitchLanguage, onNavigate }) {
  const [filter, setFilter] = useState('ALL');

  const filteredUpdates = UPDATES_DATA.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'UPDATES') return item.tag === 'UPDATES';
    if (filter === 'ANNOUNCEMENT') return item.tag === 'ANNOUNCEMENT';
    return true;
  });

  return (
    <div className="gt-updates-page">
      {/* 1. Header with 'updates' / 'news' active */}
      <Header
        lang="en"
        active="news"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-main-content">
        {/* 2. Hero Banner: Announcements & Updates */}
        <section className="gt-updates-hero">
          <div className="gt-updates-hero-overlay"></div>
          <div className="gt-updates-hero-content">
            <h1 className="gt-updates-hero-title">Announcements & Updates</h1>
          </div>
        </section>

        {/* 3. Feed of Updates and Announcements with Sacred Tibetan Vajra Dividers */}
        <section className="gt-updates-feed-section">
          <div className="gt-updates-container">

            {/* Filter Pills (All / Updates / Announcements) */}
            <div className="gt-updates-filter-bar">
              <button
                type="button"
                className={`gt-filter-pill ${filter === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilter('ALL')}
              >
                All
              </button>
              <button
                type="button"
                className={`gt-filter-pill ${filter === 'UPDATES' ? 'active' : ''}`}
                onClick={() => setFilter('UPDATES')}
              >
                Updates
              </button>
              <button
                type="button"
                className={`gt-filter-pill ${filter === 'ANNOUNCEMENT' ? 'active' : ''}`}
                onClick={() => setFilter('ANNOUNCEMENT')}
              >
                Announcements
              </button>
            </div>

            {/* Top Divider (Hairline with right golden Vajra) */}
            <div className="gt-updates-divider right" aria-hidden="true">
              <div className="gt-updates-divider-line"></div>
              <div className="gt-updates-vajra-wrap">
                <TibetanVajra width={64} height={22} />
              </div>
            </div>

            {/* Feed Items */}
            {filteredUpdates.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.type === 'split' ? (
                  /* 2-Column Split Layout */
                  <article className="gt-update-item-split">
                    <div className="gt-update-split-text">
                      <div className="gt-update-meta-row">
                        <span className="gt-badge-tag">{item.tag}</span>
                        <time className="gt-update-date">{item.date}</time>
                      </div>
                      <h2 className="gt-update-title">{item.title}</h2>
                      <p className="gt-update-body">{item.body}</p>
                    </div>

                    <div className="gt-update-split-img-box">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          className="gt-update-img"
                          loading="lazy"
                        />
                      ) : (
                        <div className="gt-update-img-placeholder">
                          <span>Monastery Update</span>
                        </div>
                      )}
                    </div>
                  </article>
                ) : (
                  /* Centered Single-Column Layout */
                  <article className="gt-update-item-center">
                    <div className="gt-update-meta-row">
                      <span className="gt-badge-tag announcement">{item.tag}</span>
                      <time className="gt-update-date">{item.date}</time>
                    </div>
                    <h2 className="gt-update-title">{item.title}</h2>
                    <p className="gt-update-body">{item.body}</p>
                  </article>
                )}

                {/* Divider between items: right vajra */}
                {index < filteredUpdates.length - 1 && (
                  <div className="gt-updates-divider right" aria-hidden="true">
                    <div className="gt-updates-divider-line"></div>
                    <div className="gt-updates-vajra-wrap">
                      <TibetanVajra width={64} height={22} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Bottom Divider: Left Vajra with trailing hairline (Exact Figma design) */}
            <div className="gt-updates-divider left" aria-hidden="true">
              <div className="gt-updates-vajra-wrap">
                <TibetanVajra width={64} height={22} />
              </div>
              <div className="gt-updates-divider-line"></div>
            </div>

          </div>
        </section>

        {/* ====================================================================
            4. BEFORE YOU ATTEND SECTION (Figma Gold: #FBC758)
            ==================================================================== */}
        <section className="gt-before-attend-section">
          <div className="gyuto-container">
            <div className="gt-attend-grid">
              {/* Left Column: Text & Button */}
              <div className="gt-attend-text-col">
                <h2 className="gt-attend-title">Before You Attend</h2>
                <p className="gt-attend-para">
                  Some programmes are intended exclusively for the monastic community, while others may be open to practitioners, visitors, or the wider public.
                </p>
                <p className="gt-attend-para">
                  Please check the individual programme details before attending. Access, timings, photography, participation, and visitor requirements may vary between events.
                </p>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  CONTACT US
                </button>
              </div>

              {/* Right Column: Google Maps Card of Gyuto Tantric Monastery */}
              <div className="gt-attend-map-col">
                <div className="gt-attend-map-card">
                  <a 
                    href="https://maps.google.com/?q=Gyuto+Tantric+Monastery+Sidhbari+Dharamshala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Open Gyuto Tantric Monastery in Google Maps"
                  >
                    <img 
                      src="/images/dharamsala-map.jpg" 
                      alt="Google Map showing Gyuto Tantric Monastery in Sidhbari, Dharamshala" 
                      className="gt-attend-map-img" 
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. SUPPORT THE CONTINUITY OF THE TRADITION
            ==================================================================== */}
        <section className="gt-support-tradition-section">
          <div className="gyuto-container">
            <div className="gt-support-knot-icon">
              <EndlessKnot size={52} color="#92060F" />
            </div>
            <h2 className="gt-support-tradition-title">
              Support the Continuity of the Tradition
            </h2>
            <p className="gt-support-tradition-sub">
              Contributions help sustain monastic education, preserve sacred texts, maintain monastery facilities, and support the daily life of the monastic community. Your support enables the preservation of the Gelug tantric tradition for future generations.
            </p>
            <button
              type="button"
              className="gt-support-us-btn"
              onClick={() => onNavigate && onNavigate('support')}
            >
              SUPPORT US
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}
