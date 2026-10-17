import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { TibetanVajra, EndlessKnot } from '../components/MonasteryIcons';
import './news.css';

export const UPDATES_DATA_TB = [
  {
    id: 'upd-tb-1',
    type: 'split',
    tag: 'གསར་འགྱུར།',
    date: '༢༠༢༦ ཟླ་ ༡༡ ཚེས་ ༨',
    title: 'གྲྭ་ཚང་ནས།',
    body: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཆོས་སྤྱོད་ཀྱི་མཛད་རིམ་དང་། དགེ་འདུན་པའི་སློབ་གཉེར། དེ་བཞིན་རྒྱུད་སྡེ་བཞིའི་དཀྱིལ་འཁོར་དང་འབྲེལ་བའི་ཆོ་ག་ཕྱག་ལེན་སོགས་ཀྱི་སྐོར་ལ་རྒྱུན་མཐུད་ནས་སྲི་ཞུ་བསྒྲུབ་བཞིན་པ་ཡིན། འདིར་དགེ་འདུན་འདུས་པ་རྒྱ་མཚོའི་ཐུགས་དམ་ཉམས་བཞེས་དང་ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ་ཁག་གསལ་བསྒྲགས་ཞུ་རྒྱུ་ཡིན།',
    image: '/images/monks-education.jpg',
    imageAlt: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དགེ་འདུན་པའི་སློབ་གཉེར།'
  },
  {
    id: 'upd-tb-2',
    type: 'center',
    tag: 'གསལ་བསྒྲགས།',
    date: '༢༠༢༦ ཟླ་ ༡༡ ཚེས་ ༨',
    title: 'གྲྭ་ཚང་ནས།',
    body: 'གྲྭ་ཚང་གི་དུས་ཆེན་ཁག་དང་། གསོ་སྦྱོང་། དེ་བཞིན་དམིགས་བསལ་གྱི་སྨོན་ལམ་ཚོགས་པའི་སྐབས་སུ་དད་ལྡན་མང་ཚོགས་རྣམས་ཀྱིས་ཆོས་ཕྱོགས་ཀྱི་མཛད་སྒོར་མཉམ་ཞུགས་གནང་སྐབས་དགོན་པའི་སྒྲིག་གཞི་དང་མཐུན་པར་གུས་བཀུར་དང་ལྡན་པའི་སྒོ་ནས་ཕེབས་རོགས་གནང་།'
  },
  {
    id: 'upd-tb-3',
    type: 'split',
    tag: 'གསར་འགྱུར།',
    date: '༢༠༢༦ ཟླ་ ༡༡ ཚེས་ ༨',
    title: 'གྲྭ་ཚང་ནས།',
    body: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དབྱངས་རྟ་དང་གཏོར་བཟོ། དཀྱིལ་འཁོར་ཐིག་རྩ་སོགས་གསང་ཆེན་རྒྱུད་སྡེའི་ཕྱག་བཞེས་རྨད་དུ་བྱུང་བ་རྣམས་ཉམས་པ་མེད་པར་མི་རབས་ནས་མི་རབས་བར་བརྒྱུད་སྤྲོད་གནང་བཞིན་ཡོད།',
    image: '/images/chant-preview.jpg',
    imageAlt: 'རྒྱུད་སྟོད་པའི་གསང་ཆེན་དབྱངས་རྟའི་ཕྱག་བཞེས།'
  },
  {
    id: 'upd-tb-4',
    type: 'center',
    tag: 'གསལ་བསྒྲགས།',
    date: '༢༠༢༦ ཟླ་ ༡༡ ཚེས་ ༨',
    title: 'གྲྭ་ཚང་ནས།',
    body: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་དུ་ཕེབས་མཁན་སྐུ་མགྲོན་རྣམས་ལ་སྔོན་ཚུད་ནས་དགོན་པའི་འཛིན་སྐྱོང་ཡིག་ཚང་དང་འབྲེལ་བ་གནང་ནས་ཕེབས་རོགས་ཞུ། འདིས་དགེ་འདུན་པའི་སྒོམ་སྒྲུབ་དང་སློབ་གཉེར་ལ་བར་ཆད་མེད་པར་ཕན་རླབས་ཆེན་པོ་ཡོད།'
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
    <div className="gt-updates-page tibetan-updates-page">
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
            {filteredUpdates.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.type === 'split' ? (
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
                          <span>གྲྭ་ཚང་གི་གསར་འགྱུར།</span>
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
            ))}

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
                  <h2 className="gt-attend-title">མ་ཕེབས་གོང་གི་གནས་ཚུལ།</h2>
                  <p className="gt-attend-para">
                    མཛད་རིམ་ཁ་ཤས་ནི་དགེ་འདུན་པ་རྣམས་ཁོ་ནའི་ཆེད་དུ་ཡིན་པ་དང་། གཞན་རྣམས་ཉམས་ལེན་པ་དང་ཕྱོགས་མཐའི་སྐུ་མགྲོན་རྣམས་ལ་སྒོ་འཕར་ཕྱེ་ཡོད།
                  </p>
                  <p className="gt-attend-para">
                    མཛད་སྒོར་མ་ཕེབས་གོང་མཛད་རིམ་སོ་སོའི་གནས་ཚུལ་ལ་ཞིབ་རྟོག་གནང་རོགས། དུས་ཚོད་དང་། བརྙན་པར་ལེན་ཕྱོགས། ཞུགས་སྟངས་སོགས་མི་འདྲ་བ་ཡོད།
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

        {/* 5. SUPPORT THE CONTINUITY OF THE TRADITION */}
        <section className="gt-support-tradition-section">
          <div className="gyuto-container">
            <div className="gt-support-knot-icon">
              <EndlessKnot size={52} color="#92060F" />
            </div>
            <h2 className="gt-support-tradition-title">
              སྲོལ་རྒྱུན་རྒྱུན་མཐུད་ལ་རྒྱབ་སྐྱོར་གནང་རོགས།
            </h2>
            <p className="gt-support-tradition-sub">
              ཁྱེད་ཀྱི་ཞལ་འདེབས་ཀྱིས་དགེ་འདུན་པའི་སློབ་གཉེར་དང་། གསུང་རབ་ཉར་ཚགས། གྲྭ་ཚང་གི་མཐུན་རྐྱེན་སྦྱོར་སྤྲོད་བཅས་ལ་རྒྱབ་སྐྱོར་ཆེན་པོ་ཐོབ་ཀྱི་ཡོད། འདིས་དགེ་ལུགས་གསང་ཆེན་རྒྱུད་སྡེའི་བསྟན་པ་འཛིན་སྐྱོང་སྤེལ་གསུམ་ལ་ཕན་ཐོགས་བླ་མེད་འབྱུང་ངོ་།
            </p>
            <button
              type="button"
              className="gt-support-us-btn"
              onClick={() => onNavigate && onNavigate('support')}
            >
              ཞལ་འདེབས་འབུལ་བ།
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}
