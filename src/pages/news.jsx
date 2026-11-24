import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { TibetanVajra, EndlessKnot } from '../components/MonasteryIcons';
import './news.css';

export const UPDATES_DATA = [
  {
    id: 'hhdls-visit-2026',
    tag: 'ANNOUNCEMENT',
    type: 'split',
    date: 'OCTOBER 28, 2026',
    title: 'Important Announcement and Invitation',
    paragraphs: [
      "We are delighted to announce that His Holiness the Dalai Lama, has graciously consented to visit our Gyuto Tantric Monastery on Saturday, November 28, 2026, to inaugurate our new debating courtyard and to celebrate His Holiness's 90th birthday. This is a most auspicious and deeply meaningful occasion for all of us.",
      "Due to the time constraints, it is not feasible for us to personally send individual invitations to all our devotees, sponsors, and well-wishers. Therefore, through this public announcement, we invite you to take note of this news and make arrangements to attend this joyous celebration of His Holiness's long life and profound kindness.",
      "We pray that by attending this sacred event, you will be able to accumulate merit and experience the blessings of His Holiness's presence."
    ],
    signoff: [
      'With utmost reverence and respect,',
      'Lobsang Dorjee',
      'Administrator',
      'Gyuto Tantric Monastery'
    ],
    image: '/images/announcements/announcement-dalai-lama-visit-en.jpg',
    imageAlt: 'Important Announcement and Invitation - His Holiness the Dalai Lama Visit to Gyuto Tantric Monastery'
  },
  {
    id: 'update-nov-8-2026',
    tag: 'UPDATES',
    type: 'split',
    date: 'NOVEMBER 8, 2026',
    title: 'From the Monastery - Community Updates',
    body: 'Community updates, upcoming schedule details, and official notifications from Gyuto Tantric Monastery.',
    image: '/images/gallery/761A7260.jpg',
    imageAlt: 'Gyuto Tantric Monastery Community Updates'
  },
  {
    id: 'announcement-nov-8-2026',
    tag: 'ANNOUNCEMENT',
    type: 'center',
    date: 'NOVEMBER 8, 2026',
    title: 'From the Monastery - Monastic Notices & Guidelines',
    body: 'Monastic notices, ceremony arrangements, and guidelines for visiting practitioners.'
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
            <p className="gt-updates-hero-subtitle">
              Stay informed about recent developments, community activities, important notices, publications, and other updates from Gyuto Tantric Monastery.
            </p>
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
            {filteredUpdates.length > 0 ? (
              filteredUpdates.map((item, index) => (
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
                        {item.paragraphs ? (
                          <div className="gt-update-body">
                            {item.paragraphs.map((para, pIdx) => (
                              <p key={pIdx} style={{ marginBottom: '14px', lineHeight: '1.75' }}>{para}</p>
                            ))}
                            {item.signoff && (
                              <div className="gt-update-signoff" style={{ marginTop: '20px', lineHeight: '1.6', color: '#1B1816' }}>
                                {item.signoff.map((line, lIdx) => (
                                  <p key={lIdx} style={{ margin: '2px 0', fontWeight: lIdx === 0 ? 600 : 400 }}>{line}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="gt-update-body">{item.body}</p>
                        )}
                      </div>

                      <div className="gt-update-split-img-box">
                        {item.image ? (
                          <a href={item.image} target="_blank" rel="noopener noreferrer" title="Click to view full size official document" style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img
                              src={item.image}
                              alt={item.imageAlt || item.title}
                              className="gt-update-img"
                              loading="lazy"
                            />
                          </a>
                        ) : (
                          <div className="gt-update-img-placeholder">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9A9286" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>Photo Placeholder</span>
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
              ))
            ) : (
              /* Blank Placeholder */
              <article className="gt-update-item-split gt-update-placeholder-item">
                <div className="gt-update-split-text">
                  <div className="gt-update-meta-row">
                    <span className="gt-badge-tag">UPDATES & ANNOUNCEMENTS</span>
                    <time className="gt-update-date">COMING SOON</time>
                  </div>
                  <h2 className="gt-update-title">Monastery News & Notices</h2>
                  <p className="gt-update-body">
                    Official announcements, ceremonial notices, and publications from Gyuto Tantric Monastery will appear here once published.
                  </p>
                </div>

                <div className="gt-update-split-img-box">
                  <div className="gt-update-img-placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9A9286" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>Photo Placeholder</span>
                  </div>
                </div>
              </article>
            )}

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
            4. BEFORE YOU ATTEND SECTION (Figma Frame 625811: #FFD781)
            ==================================================================== */}
        <section className="gt-before-attend-section">
          <div className="gyuto-container">
            <div className="gt-attend-grid">
              {/* Left Column: Text & Button (Figma Frame 625782) */}
              <div className="gt-attend-text-col">
                <div className="gt-attend-text-block">
                  <h2 className="gt-attend-title">Before You Attend</h2>
                  <p className="gt-attend-para">
                    Guidelines on event participation, photography rules, and monastic practice respect.
                  </p>
                  <p className="gt-attend-para">
                    Some programmes are intended exclusively for the monastic community, while others may be open to practitioners, visitors, or the wider public. Please check individual programme details before attending.
                  </p>
                </div>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  CONTACT US
                </button>
              </div>

              {/* Right Column: Google Maps Card of Gyuto Tantric Monastery (Figma Frame 625811 / node 1:1729) */}
              <div className="gt-attend-map-col">
                <div className="gt-attend-map-card">
                  <a 
                    href="https://maps.google.com/?q=Gyuto+Tantric+Monastery+Sidhbari+Dharamshala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Open Gyuto Tantric Monastery in Google Maps"
                  >
                    <img 
                      src="/images/contact-map.jpg" 
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
            5. SUPPORT THE CONTINUITY OF THE TRADITION (Universal Frame 625810)
            ==================================================================== */}
        <SupportSection lang="en" onNavigate={onNavigate} />
      </main>

      {/* Footer */}
      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}
