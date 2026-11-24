import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { TibetanVajra, EndlessKnot } from '../components/MonasteryIcons';
import './news.css';

export const UPDATES_DATA_TB = [
  {
    id: 'hhdls-visit-2026-tb',
    tag: 'གསལ་བསྒྲགས།',
    type: 'split',
    date: '༢༠༢༦ ཟླ་ ༡༠ ཚེས་ ༢༨',
    title: 'གལ་ཆེའི་ཆོས་བརྡ་གསལ་བསྒྲགས།',
    paragraphs: [
      '༄༅། །འདི་ག་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཆོས་ར་གསར་པ་དབུ་འབྱེད་དང་བསྟུན་རྒྱལ་བའི་སྐུ་གོ་སྟོན་དང་འབྲེལ་བའི་བཀའ་དྲིན་རྗེས་དྲན་གྱི་བརྟན་བཞུགས་བསྟར་འབུལ་སྐབས། ལྷར་བཅས་སྲིད་ཞིའི་གཙུག་རྒྱན་༸སྤྱི་ནོར་༸གོང་ས་༸སྐྱབས་མགོན་རྒྱལ་བའི་དབང་པོ་མཆོག་གྲྭ་ཚང་འདིར་ཆིབས་བསྒྱུར་བཀའ་དྲིན་བསྐྱང་གནང་ཡོད་པའི་གསོལ་བ་ཕུར་ཚུགས་སུ་ཡང་ཡང་བཏབ་པའི་རེ་འབྲས་དངོས་སུ་སྨིན་ཏེ། རིང་མིན་ཕྱི་ལོ་ ༢༠༢༦ ཕྱི་ཟླ་ ༡༡ ཚེས་ ༢༨ ཉིན་༸མགོན་པོ་མཆོག་ཞབས་པད་གསེར་གྱི་རེ་ཁཱ་གྲྭ་ཚང་དུ་མངོན་པར་འཁོད་རྒྱུའི་བཀའ་བཞེས་རིན་པོ་ཆེ་དངོས་བསྩལ་བྱུང་བ་ལགས་ན།',
      'ཕྱོགས་མཐའ་གཏུགས་སུ་བཞུགས་པའི་གྲྭ་ཚང་གི་ཁོངས་གཏོགས་སྐུ་སེར་གཉིས་དང་། དད་ལྡན་སྦྱིན་བདག་ཁག དེ་བཞིན་འབྲེལ་ཡོད་གཞན་རྣམས་ལ་དུས་ཀྱིས་གཏུགས་ནས་རེ་རེ་བཞིན་མགྲོན་བརྡ་ཕུལ་ཐབས་མ་མཆིས་པས། གསལ་བརྡ་འདི་བརྒྱུད་ནས་རྣམ་པར་བཀྲ་ཤིས་པའི་བསྐལ་བཟང་གི་དགའ་སྟོན་དེར་རེས་ཟེབས་ཡོད་པའི་གསལ་བསྒྲགས་དང་མགྲོན་བརྡ་ལྷན་དུ་ཕུལ།'
    ],
    signoff: [
      'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་འདུས་སྤྱི་ལས་ཁང་ནས།',
      'ཕྱི་ལོ་ ༢༠༢༦ ཟླ་ ༡༠ ཚེས་ ༢༨ ལ།'
    ],
    image: '/images/announcements/announcement-dalai-lama-visit-tb.jpg',
    imageAlt: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གལ་ཆེའི་ཆོས་བརྡ་གསལ་བསྒྲགས།'
  },
  {
    id: 'update-nov-8-2026-tb',
    tag: 'གསར་འགྱུར།',
    type: 'split',
    date: '༢༠༢༦ ཕྱི་ཟླ་ ༡༡ ཚེས་ ༨',
    title: 'དགོན་པ་ནས།',
    body: 'ཚོགས་པའི་གནས་ཚུལ། འབྱུང་འགྱུར་གྱི་མཛད་རིམ་གསལ་བཤད། གཞུང་འབྲེལ་བརྡ་ཐོ།',
    image: '/images/gallery/761A7260.jpg',
    imageAlt: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཚོགས་པའི་གནས་ཚུལ།'
  },
  {
    id: 'announcement-nov-8-2026-tb',
    tag: 'གསལ་བསྒྲགས།',
    type: 'center',
    date: '༢༠༢༦ ཕྱི་ཟླ་ ༡༡ ཚེས་ ༨',
    title: 'དགོན་པ་ནས།',
    body: 'དགོན་པའི་བརྡ་ཐོ། མཛད་སྒོ་གོ་སྒྲིག མཇལ་སྐོར་དུ་ཕེབས་པའི་ཉམས་ལེན་པ་ཚོར་ལམ་སྟོན།'
  }
];

export default function NewsTb({ onSwitchLanguage, onNavigate }) {
  const [filter, setFilter] = useState('ALL');

  const filteredUpdates = UPDATES_DATA_TB.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'UPDATES') return item.tag === 'གསར་འགྱུར།';
    if (filter === 'ANNOUNCEMENT') return item.tag === 'གསལ་བསྒྲགས།';
    return true;
  });

  return (
    <div className="gt-updates-page tibetan-updates-page tibetan-text">
      {/* 1. Header with Tibetan language active */}
      <Header
        lang="tb"
        active="news"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-main-content">
        {/* 2. Hero Banner: Announcements & Updates */}
        <section className="gt-updates-hero">
          <div className="gt-updates-hero-overlay"></div>
          <div className="gt-updates-hero-content">
            <h1 className="gt-updates-hero-title">གསལ་བསྒྲགས་དང་གསར་འགྱུར།</h1>
            <p className="gt-updates-hero-subtitle">
              ཉེ་བའི་གནས་ཚུལ་དང་། ཚོགས་པའི་བྱེད་སྒོ་ཁག །གལ་ཆེའི་གསལ་བརྡ། དཔར་སྐྲུན། དེ་མིན་གྱི་གསར་འགྱུར་བཅས་ཀྱི་སྐོར་རྒྱུད་སྟོད་གྲྭ་ཚང་ནས་མཁྱེན་རྟོགས་གནང་རོགས།
            </p>
          </div>
        </section>

        {/* 3. Feed of Updates with Sacred Tibetan Vajra Dividers */}
        <section className="gt-updates-feed-section">
          <div className="gt-updates-container">

            {/* Filter Pills */}
            <div className="gt-updates-filter-bar">
              <button
                type="button"
                className={`gt-filter-pill ${filter === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilter('ALL')}
              >
                ཚང་མ།
              </button>
              <button
                type="button"
                className={`gt-filter-pill ${filter === 'UPDATES' ? 'active' : ''}`}
                onClick={() => setFilter('UPDATES')}
              >
                གསར་འགྱུར།
              </button>
              <button
                type="button"
                className={`gt-filter-pill ${filter === 'ANNOUNCEMENT' ? 'active' : ''}`}
                onClick={() => setFilter('ANNOUNCEMENT')}
              >
                གསལ་བསྒྲགས།
              </button>
            </div>

            {/* Top Divider */}
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
                              <p key={pIdx} style={{ marginBottom: '14px', lineHeight: '1.85' }}>{para}</p>
                            ))}
                            {item.signoff && (
                              <div className="gt-update-signoff" style={{ marginTop: '20px', lineHeight: '1.8', color: '#1B1816' }}>
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
                          <a href={item.image} target="_blank" rel="noopener noreferrer" title="ཡིག་ཆ་ཆ་ཚང་གཟིགས་རྒྱུ།" style={{ display: 'block', width: '100%', height: '100%' }}>
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
                            <span>པར་རིས་གནས་ཡུལ།</span>
                          </div>
                        )}
                      </div>
                    </article>
                  ) : (
                    <article className="gt-update-item-center">
                      <div className="gt-update-meta-row">
                        <span className="gt-badge-tag announcement">{item.tag}</span>
                        <time className="gt-update-date">{item.date}</time>
                      </div>
                      <h2 className="gt-update-title">{item.title}</h2>
                      <p className="gt-update-body">{item.body}</p>
                    </article>
                  )}

                  {/* Divider between items */}
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
                    <span className="gt-badge-tag">གསལ་བསྒྲགས་དང་གསར་འགྱུར།</span>
                    <time className="gt-update-date">འབྱུང་འགྱུར།</time>
                  </div>
                  <h2 className="gt-update-title">དགོན་པའི་གསལ་བསྒྲགས་དང་གསར་འགྱུར།</h2>
                  <p className="gt-update-body">
                    དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གཞུང་འབྲེལ་གསལ་བསྒྲགས་དང་ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ་རྣམས་འདིར་འགོད་སྤེལ་ཞུ་རྒྱུ་ཡིན།
                  </p>
                </div>

                <div className="gt-update-split-img-box">
                  <div className="gt-update-img-placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9A9286" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>པར་རིས་གནས་ཡུལ།</span>
                  </div>
                </div>
              </article>
            )}

            {/* Bottom Divider */}
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
              {/* Left Column: Text & Button */}
              <div className="gt-attend-text-col">
                <div className="gt-attend-text-block">
                  <h2 className="gt-attend-title">མཉམ་ཞུགས་མ་གནང་གོང་།</h2>
                  <p className="gt-attend-para">
                    བྱེད་སྒོར་མཉམ་ཞུགས་གནང་ཕྱོགས་དང་། བརྙན་པར་ལེན་ཕྱོགས་ཀྱི་སྒྲིག་ཁྲིམས། དགོན་པའི་ཉམས་ལེན་ལ་གུས་བརྩི་བཅས་ཀྱི་ལམ་སྟོན།
                  </p>
                  <p className="gt-attend-para">
                    མཛད་རིམ་ཁ་ཅིག་ནི་དགེ་འདུན་པ་ཁོ་ནར་དམིགས་པ་དང་། གཞན་ཁག་ནི་སྒྲུབ་པ་པོ་དང་། གནས་མཇལ་བ། ཡང་ན་མང་ཚོགས་བཅས་ལ་དམིགས་པ་ཡིན་ཆོག མཉམ་ཞུགས་མ་གནང་གོང་ནས་མཛད་རིམ་སོ་སོའི་ཞིབ་ཕྲའི་གནས་ཚུལ་ལ་གཟིགས་རོགས།
                  </p>
                </div>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  འབྲེལ་གཏུགས།
                </button>
              </div>

              {/* Right Column: Google Maps Card of Gyuto Tantric Monastery (Figma Frame 625811) */}
              <div className="gt-attend-map-col">
                <div className="gt-attend-map-card">
                  <a 
                    href="https://maps.google.com/?q=Gyuto+Tantric+Monastery+Sidhbari+Dharamshala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Google Maps ནང་རྒྱུད་སྟོད་གྲྭ་ཚང་གཟིགས།"
                  >
                    <img 
                      src="/images/contact-map.jpg" 
                      alt="Google Map ནང་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གནས་ཡུལ།" 
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
        <SupportSection lang="tb" onNavigate={onNavigate} />
      </main>

      {/* Footer */}
      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}
