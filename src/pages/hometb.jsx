import React, { useState, useRef } from 'react';
import './Home.css';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { 
  RightWhorlConch,
  EndlessKnot, 
  TibetanVajra,
  DharmachakraWatermark 
} from '../components/MonasteryIcons';
import { 
  MapPin, 
  Play, 
  ExternalLink
} from 'lucide-react';

export default function HomeTb({ onSwitchLanguage, onNavigate }) {
  const [activeNoticeTab, setActiveNoticeTab] = useState('announcement');
  const [activeStatDot, setActiveStatDot] = useState(0);
  const statsGridRef = useRef(null);

  const handleStatsScroll = () => {
    if (!statsGridRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = statsGridRef.current;
    if (scrollWidth <= clientWidth + 10) return;
    const itemWidth = scrollWidth / 4;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveStatDot(Math.min(3, Math.max(0, index)));
  };

  const scrollToStat = (idx) => {
    if (!statsGridRef.current) return;
    const items = statsGridRef.current.querySelectorAll('.gt-stat-item');
    if (items[idx]) {
      items[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveStatDot(idx);
    }
  };

  return (
    <div className="gyuto-page tibetan-text">
      {/* ====================================================================
          1. HEADER & NAVIGATION BAR (Extracted Component)
          ==================================================================== */}
      <Header 
        lang="tb" 
        active="home" 
        onSwitchLanguage={onSwitchLanguage} 
        onNavigate={onNavigate} 
      />

      {/* ====================================================================
          3. HERO SECTION WITH IMAGE & 4-FEATURE STATS BAR (Figma specs)
          ==================================================================== */}
      <section id="home" className="gt-hero-section">
        <div className="gt-hero-image-wrap">
          <img 
            src="/images/home-hero-tb.jpg" 
            alt="Gyuto Tantric Monastery Assembly of Monks with Himalayan Mountains" 
            className="gt-hero-img gt-hero-tb"
          />
        </div>

        {/* 4 Feature Badges Bar (Figma: Frame 625795: #FFFAF1) */}
        <div className="gt-hero-stats-bar">
          <div className="gt-stats-grid">
            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/stupa.svg" alt="Founded" width={60} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">བཙུགས་ལོ</span>
                <span className="gt-stat-value">༡༤༧༤ (བོད)</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/monk.svg" alt="Community" width={47} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">པར་མཛོད།</span>
                <span className="gt-stat-value">༢༥༠–༣༠༠</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/lotus_buddha.svg" alt="Tradition" width={60} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">སྤྱི་ཚོགས།</span>
                <span className="gt-stat-value">དགེ་ལུགས་གདན་ས།</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/mountains.svg" alt="Location" width={103} height={55} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">གནས་ཡུལ།</span>
                <span className="gt-stat-value">དྷར་མ་ཤ་ལ། ཧི་མ་ཅལ། རྒྱ་གར།</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. A LIVING MONASTIC INSTITUTION (Figma: Frame 625770: #FFD781)
          ==================================================================== */}
      <section id="about" className="gt-living-section">
        <div className="gyuto-container">
          <div className="gt-living-inner">
            <div className="gt-conch-badge">
              <RightWhorlConch width={48} height={80} />
            </div>
            <h2 className="gt-living-title">གཞིག་པའི་དགོན་པ་གཟི་བརྗིད་ཅན།</h2>
            <p className="gt-living-text">
              ལོ་ལྔ་བརྒྱ་ལས་མང་པོར་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་དེ་སློབ་གཉེར་དང་སྒོམ་སྒྲུབ། ཆོས་སྐུད་རྒྱུན་པའི་གཞི་རིམ་ལ་བོད་བརྒྱུད་ཆོས་གཞུང་ཉར་ཚགས་བྱེད། དེ་རིང་ཡང་དགེ་སྦྱོང་ལ་སློབ་གཉེར་དང་རིག་གཞུང་ཉར་ཚགས། རྒྱ་ཕལ་གྱི་སྒོམ་རྒྱུགས་པ་དང་ཞུགས་མི་ལ་ཞབས་ཞུ་བྱེད་བཞིན་ཡོད།
            </p>
            <a 
              href="/about" 
              className="gt-figma-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('about');
                }
              }}
            >
              དཔལ་ལྡན་རྒྱུད་སྟོད་སྐོར།
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. FROM THE MONASTERY (NOTICES / TABS / ANNOUNCEMENT / UPDATE)
          Exact pixel match to user screenshot and Figma Frame 2147236727 / 2147236825
          ==================================================================== */}
      <section id="news" className="gt-notices-section">
        <div className="gyuto-container">
          {/* Top Bar with Continuous Hairline, Tabs, and Right Golden Vajra */}
          <div className="gt-notices-top-bar">
            <div className="gt-notices-top-hairline" />

            <div className="gt-notices-tabs-group">
              <button 
                className={`gt-notice-tab-btn ${activeNoticeTab === 'update' ? 'active' : ''}`}
                onClick={() => setActiveNoticeTab('update')}
                type="button"
              >
                གསར་འགྱུར།
              </button>
              <button 
                className={`gt-notice-tab-btn ${activeNoticeTab === 'announcement' ? 'active' : ''}`}
                onClick={() => setActiveNoticeTab('announcement')}
                type="button"
              >
                གསལ་བསྒྲགས།
              </button>
            </div>

            <div className="gt-notices-top-vajra-wrap">
              <TibetanVajra width={72} height={24} />
            </div>
          </div>

          {/* Body Content: Announcement View matches user screenshot 1:1 */}
          {activeNoticeTab === 'announcement' ? (
            <div className="gt-notices-announcement-view">
              <h3 className="gt-notices-announcement-title">གྲྭ་ཚང་གི་གནས་ཚུལ།</h3>
              <p className="gt-notices-announcement-text">
                དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཉེ་བའི་མཛད་སྒོ་དང་། ཆོས་ཕྱོགས་ཀྱི་བྱེད་སྒོ། སྡེ་ཚན་ཁག་གི་གནས་ཚུལ་གསར་པ་དང་གལ་ཆེའི་བརྡ་ཐོ་ཁག་ལ་རྒྱུས་ལོན་གནང་རོགས།
              </p>
            </div>
          ) : (
            <div className="gt-notices-update-view">
              <div className="gt-news-left">
                <h3>གྲྭ་ཚང་གི་གནས་ཚུལ།</h3>
                <p>
                  དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཉེ་བའི་མཛད་སྒོ་དང་། ཆོས་ཕྱོགས་ཀྱི་བྱེད་སྒོ། སྡེ་ཚན་ཁག་གི་གནས་ཚུལ་གསར་པ་ཁག་ལ་རྒྱུས་ལོན་གནང་རོགས།
                </p>
                <a 
                  href="/news" 
                  className="gt-figma-btn"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('news');
                    }
                  }}
                >
                  ཚང་མ་གཟིགས།
                </a>
              </div>

              <div className="gt-news-right">
                <div className="gt-news-video-card">
                  <img 
                    src="/images/chant-preview.jpg" 
                    alt="Sacred Tantric Chants assembly in monastery hall" 
                    className="gt-news-video-img"
                  />
                  <div className="gt-video-overlay">
                    <button className="gt-play-btn" aria-label="Play recording">
                      <Play size={20} fill="#ffffff" />
                    </button>
                    <span className="gt-video-caption">
                      གསང་སྔགས་རྒྱུད་སྡེའི་དབྱངས་རྟ་དང་ཞལ་འདོན་ཆོ་ག
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Bar with Left Golden Vajra, Breathing Gap, and Continuous Hairline */}
          <div className="gt-notices-bottom-bar">
            <div className="gt-notices-bottom-vajra-wrap">
              <TibetanVajra width={72} height={24} />
            </div>
            <div className="gt-notices-bottom-hairline" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. SERVING EVERY ASPECT OF MONASTIC LIFE (Departments Preview)
          ==================================================================== */}
      <section id="departments" className="gt-about-depts-section">
        <div className="gyuto-container">
          <div className="gt-about-depts-head">
            <div className="gt-about-depts-text">
              <h2 className="gt-about-depts-title">དགོན་པའི་བློ་ཞིང་ཡོངས་སུ་འཛུགས་པ།</h2>
              <p className="gt-about-depts-desc">
                དགོན་པའི་ལས་སྣེ་རྣམས་ཀྱིས་རིམ་པས་དགོན་པའི་སྒྲིག་འཛུགས་དང་། ཆོས་སྤྱོད་ཀྱི་ཞབས་ཞུ། སྨན་དང་ཞབས་ཏོག་སོགས་ཞལ་འདེབས་བསྒྲུབས་བཞིན་ཡོད། དེ་དག་གིས་ཆོས་ཀྱི་བརྒྱུད་པ་སྲུང་སྐྱོབ་ལ་ཕན་ཐོགས་ཆེན་པོ་བྱུང་ཡོད།
              </p>
            </div>
            <button
              type="button"
              className="gt-view-depts-btn"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('departments');
                }
              }}
            >
              རྒྱས་སྐོར་གཟིགས་རྒྱུ།
            </button>
          </div>

          <div className="gt-about-depts-cards-grid">
            {/* Administration */}
            <div className="gt-about-dept-card">
              <div className="gt-about-dept-img-wrap">
                <img
                  src="/images/about/dept-admin.jpg"
                  alt="Monastery Administration"
                  className="gt-about-dept-img"
                  loading="lazy"
                />
              </div>
              <div className="gt-about-dept-body">
                <h3 className="gt-about-dept-name">འཛིན་སྐྱོང་།</h3>
                <p className="gt-about-dept-snippet">
                  དགོན་པའི་ཉིན་རེའི་འཛིན་སྐྱོང་དང་ལས་དོན་གཉེར་བའི་གཞི་རྟེན་ཡིན།
                </p>
                <a
                  href="#departments"
                  className="gt-about-dept-link"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('departments');
                    }
                  }}
                >
                  རྒྱས་པར་གཟིགས། <span>→</span>
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="gt-about-dept-card">
              <div className="gt-about-dept-img-wrap">
                <img
                  src="/images/about/dept-edu.jpg"
                  alt="Monastic Education"
                  className="gt-about-dept-img"
                  loading="lazy"
                />
              </div>
              <div className="gt-about-dept-body">
                <h3 className="gt-about-dept-name">སློབ་གཉེར།</h3>
                <p className="gt-about-dept-snippet">
                  ནང་དོན་རིག་པའི་གཞུང་ལུགས་དང་རྩོད་པ། རྒྱུད་ཀྱི་སློབ་གཉེར་བཅས་ལ་དམིགས་པའི་སློབ་ཚན།
                </p>
                <a
                  href="#departments"
                  className="gt-about-dept-link"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('departments');
                    }
                  }}
                >
                  རྒྱས་པར་གཟིགས། <span>→</span>
                </a>
              </div>
            </div>

            {/* Healthcare */}
            <div className="gt-about-dept-card">
              <div className="gt-about-dept-img-wrap">
                <img
                  src="/images/about/dept-health.jpg"
                  alt="Healthcare Services"
                  className="gt-about-dept-img"
                  loading="lazy"
                />
              </div>
              <div className="gt-about-dept-body">
                <h3 className="gt-about-dept-name">འཕྲོད་བསྟེན།</h3>
                <p className="gt-about-dept-snippet">
                  དགེ་འདུན་པ་རྣམས་ཀྱི་ལུས་སེམས་བདེ་ཐང་དང་འབྲེལ་བའི་སྨན་བཅོས་ཞབས་ཞུ།
                </p>
                <a
                  href="#departments"
                  className="gt-about-dept-link"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('departments');
                    }
                  }}
                >
                  རྒྱས་པར་གཟིགས། <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. SPIRITUAL PROGRAMMES THROUGHOUT THE YEAR (Figma: Frame 625808: #FFD781)
          ==================================================================== */}
      <section id="programmes" className="gt-programmes-sec">
        <div className="gyuto-container">
          <div className="gt-prog-grid">
            {/* Left Column */}
            <div className="gt-prog-left">
              <h3>ལོའི་ལོ་མ་ལ་གི་གདམས་ངག་དང་ལས་འགུལ།</h3>
              <p>
                བོད་ཟླ་གི་དུས་བཞི་འོག་ནས་དགོན་པ་དེ་གདམས་ངག་དང་། བར་དུ་སྦྱོར་བ། ཆོས་སྐུད། ཤེས་རབ་སྐུར། ཆེ་ལོའི་སྒོམ་སྦྱོར་བཅས་རྒྱུན་འཆར་ཡོད། དགེ་སྦྱོང་དང་སྒོམ་རྒྱུགས་པ། ཞུགས་མི་ལ་རེ་རེ་བཞིན་ལ་ཞབས་ཞུ་གཏོང་བ་ཡིན།
              </p>
              <a 
                href="/programmes" 
                className="gt-figma-btn"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('programmes');
                  }
                }}
              >
                ཉིན་ཁྱིམ་ལ་ལྟ
              </a>
            </div>

            {/* Right Column: Events Stack */}
            <div className="gt-prog-right">
              <h4 className="gt-prog-right-title">UPCOMING EVENTS</h4>
              <div className="gt-events-stack">
                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༨-༢༠</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">བོད་ལོ་གསར་པ་ (ལོ་སར།)</h5>
                    <p className="gt-event-desc">
                      བོད་ལོ་གསར་པ་ནི་བོད་ཟླའི་ལོ་གཏོང་ས་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐུད་དང་གདམས་ངག། ཆོས་གཞུང་གསར་ཤོག་དང་རིག་གཞུང་གསར་རྒྱུགས་བཅས་འཚོགས་ཡོད།
                    </p>
                  </div>
                </div>

                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༨-༢༠</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">བོད་ལོ་གསར་པ་ (ལོ་སར།)</h5>
                    <p className="gt-event-desc">
                      བོད་ལོ་གསར་པ་ནི་བོད་ཟླའི་ལོ་གཏོང་ས་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐུད་དང་གདམས་ངག། ཆོས་གཞུང་གསར་ཤོག་དང་རིག་གཞུང་གསར་རྒྱུགས་བཅས་འཚོགས་ཡོད།
                    </p>
                  </div>
                </div>

                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༨-༢༠</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">བོད་ལོ་གསར་པ་ (ལོ་སར།)</h5>
                    <p className="gt-event-desc">
                      བོད་ལོ་གསར་པ་ནི་བོད་ཟླའི་ལོ་གཏོང་ས་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐུད་དང་གདམས་ངག། ཆོས་གཞུང་གསར་ཤོག་དང་རིག་གཞུང་གསར་རྒྱུགས་བཅས་འཚོགས་ཡོད།
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. PRESERVING BUDDHIST KNOWLEDGE (Figma: Frame 625809: #6B9EBD)
          ==================================================================== */}
      <section id="archive" className="gt-library-sec">
        <div className="gt-library-container">
          <div className="gt-library-texture-wrap" aria-hidden="true">
            <img
              src="/images/about/dharmachakra-watermark.png"
              alt=""
              className="gt-library-texture-img"
              loading="lazy"
            />
          </div>
          <div className="gt-library-content-col">
            <div className="gt-library-text-block">
              <h3 className="gt-library-title">ཆོས་གཞུང་ཉར་ཚགས།</h3>
              <p className="gt-library-desc">
                དགོན་པའི་དེབ་མཛོད་དེ་སྔོན་གི་དེབ་དང་བསྟན་འགྱུར། ཆོས་ལུང་དང་དེབ་ལེབ་གསར་པ་བཅས་ཉར་ཚགས་བྱེད། དེབ་གླེང་སྒྲིགས། ཞིབ་དཔྱད། དང་གླེང་ཕུའི་ཆོས་ལུང་སྲུང་སྐྱབ་བྱེད་པ་ཡིན། དགེ་ལུགས་སློབ་གཉེར་ལ་མིའ་གནའི་དེབ་དང་། སྐུ་དགེ་མཚན་གཏོང་བའི་དེབ་ལེབ་སོགས་འདུས་ཡོད།
              </p>
            </div>
            <a 
              href="/departments" 
              className="gt-visit-library-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('departments');
                }
              }}
            >
              དེབ་མཛོད་ལ་ལྟ།
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. SUPPORT THE CONTINUITY OF THE TRADITION (Figma: Frame 625810: #FFFFFF)
          ==================================================================== */}
      <SupportSection lang="tb" onNavigate={onNavigate} />

      {/* ====================================================================
          11. GET IN TOUCH (Figma: Frame 625811: #FFD781)
          ==================================================================== */}
      <section id="contact" className="gt-contact-sec">
        <div className="gyuto-container">
          <div className="gt-contact-grid">
            <div className="gt-contact-left">
              <h3>ཞུགས་མི་ལ་ལམ་སྟོན།</h3>
              <p className="gt-contact-desc">
                གྲྭ་ཚང་གི་ཆོས་སྦྱོང་། ཆོས་འདོན་དང་དབེན་གནས་ཀྱི་དུས་ཚོད་ལ་གུས་བཀུར་གྱིས་མགྲོན་པོ་རྣམས་གྲྭ་ཚང་དུ་ཕེབས་ཆོག
              </p>
              <div className="gt-visitor-etiquette">
                གལ་ཏེ་གྲྭ་ཚང་དུ་ཕེབས་པའི་སྐབས་སུ། གྲྭ་ཚང་གི་ས་ཁོངས་ནང་ཁ་རོག་གེར་བཞུགས་ནས། དགེ་འདུན་པ་རྣམས་ཀྱིས་ཉིན་རེའི་ཆོས་སྒྲུབ་དང་སྦྱོང་བ་ལ་བར་ཆད་མི་འབྱུང་བར་གཟབ་རོགས། ད་དུང་གྲྭ་ཚང་གི་ས་ཁོངས་ནང་བཀོད་པའི་ལམ་སྟོན་ཁག་ལ་གུས་བཀུར་གནང་རོགས་དང་། དགེ་འདུན་པའི་ཆོས་སྒྲུབ་དང་སྦྱོང་བའི་ཆེད་དུ་བཀག་འགོག་བྱས་པའི་ས་ཁུལ་ཁག་ཏུ་འཛུལ་ཞུགས་མ་གནང་རོགས།
              </div>
              <a 
                href="/contact" 
                className="gt-figma-btn"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('contact');
                  }
                }}
              >
                གླེང་སྟེགས།
              </a>
            </div>

            <div className="gt-contact-right">
              <div className="gt-map-card">
                <div className="gt-map-img-wrap">
                  <img 
                    src="/images/contact-map.jpg" 
                    alt="Map of Sidhbari and Dharamsala location for Gyuto Monastery" 
                    className="gt-map-img"
                  />
                </div>
                <a 
                  href="https://maps.google.com/?q=Gyuto+Tantric+Monastery+Sidhbari+Dharamsala" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gt-map-link-overlay"
                >
                  <MapPin size={16} /> Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          12. FOOTER (Extracted Component)
          ==================================================================== */}
      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}
