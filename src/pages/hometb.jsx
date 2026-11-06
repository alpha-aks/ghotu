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
                <span className="gt-stat-label">ཕྱག་བཏབ་ལོ།</span>
                <span className="gt-stat-value">ཕྱི་ལོ་ ༡༤༧༤ (བོད།)</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/monk.svg" alt="Community" width={47} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">དགེ་འདུན་ཞལ་གྲངས།</span>
                <span className="gt-stat-value">༥༠༠ ནས་ ༥༥༠ བར།</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/lotus_buddha.svg" alt="Tradition" width={60} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">ཆོས་བརྒྱུད།</span>
                <span className="gt-stat-value">དགེ་ལུགས་པ།</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/mountains.svg" alt="Location" width={103} height={55} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">ས་གནས།</span>
                <span className="gt-stat-value">རྒྱ་གར་དྷ་རམ་ས་ལ།</span>
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
            <h2 className="gt-living-title">གསང་སྔགས་རིག་འཛིན་གྱི་སྡེ་ཆེན་པོ།</h2>
            <p className="gt-living-text">
              གསང་ཆེན་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་ནི། ཕྱི་ལོ་ ༡༤༧༤ ལོར་ཕྱག་བཏབ་ཅིང་། བོད་བརྒྱུད་ནང་བསྟན་ཁྲོད་ནས་དགེ་ལྡན་པའི་གསང་སྔགས་ཀྱི་ཆོས་བརྒྱུད་གཙོ་བོ་ཞིག་གྲྭ་ཚང་འདིས་མི་ཉམས་རྒྱུན་འཛིན་གནང་ཡོད། རྒྱ་གར་དུ་བསྐྱར་འཛུགས་གནང་བ་ནས་བཟུང་། དགོན་པ་འདིས་སློབ་གཉེར་དང་། སྒོམ་སྒྲུབ་ཉམས་ལེན། རིག་གཞུང་སྲུང་སྐྱོབ། དེ་བཞིན་སྤྱི་ཚོགས་ཞབས་ཞུའི་ལས་དོན་རྣམས་མུ་མཐུད་སྒྲུབ་བཞིན་ཡོད།
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
              དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་སྐོར།
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
              <h3 className="gt-notices-announcement-title">གྲྭ་ཚང་གི་གསར་འགྱུར་དང་གསལ་བསྒྲགས།</h3>
              <p className="gt-notices-announcement-text">
                དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཉེ་བའི་གསར་འགྱུར་དང་། འདུས་སྤྱིའི་བྱེད་སྒོ། གལ་ཆེའི་གསལ་བསྒྲགས། པར་སྐྲུན། དེ་བཞིན་གསར་འགྱུར་གཞན་བཅས་ཀྱི་སྐོར་འདི་ནས་མཁྱེན་རྟོགས་གནང་རོགས།
              </p>
            </div>
          ) : (
            <div className="gt-notices-update-view">
              <div className="gt-news-left">
                <h3>གྲྭ་ཚང་གི་གསར་འགྱུར་དང་གསལ་བསྒྲགས།</h3>
                <p>
                  དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཉེ་བའི་གསར་འགྱུར་དང་། འདུས་སྤྱིའི་བྱེད་སྒོ། གལ་ཆེའི་གསལ་བསྒྲགས། པར་སྐྲུན། དེ་བཞིན་གསར་འགྱུར་གཞན་བཅས་ཀྱི་སྐོར་འདི་ནས་མཁྱེན་རྟོགས་གནང་རོགས།
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
      {/* ====================================================================
          7. SERVING EVERY ASPECT OF MONASTIC LIFE (Departments Preview)
          ==================================================================== */}
      <section id="departments" className="gt-about-depts-section">
        <div className="gyuto-container">
          <div className="gt-about-depts-head">
            <div className="gt-about-depts-text">
              <h2 className="gt-about-depts-title">དགོན་པའི་འཚོ་བར་ཞབས་ཞུ།</h2>
              <p className="gt-about-depts-desc">
                ཤེས་ཡོན་དང་འཛིན་སྐྱོང་སྡེ་ཚན་ནས་བཟུང་སྟེ་དཔེ་མཛོད་དང་། པར་སྐྲུན། སྤྱི་ཚོགས་ཞབས་ཞུ་བཅས་བར་གྱི་སྡེ་ཚན་གྱིས་དགོན་པའི་ཉིན་རེའི་འཚོ་བའི་ཁྲོད་དུ་ཞབས་འདེགས་ཞུ་བཞིན་ཡོད་ལ། སྡེ་ཚན་དེ་དག་མཉམ་རུབ་ཀྱི་ཐོག་ནས་ནང་བསྟན་རྒྱུན་འཛིན་དང་། དགོན་པའི་ལས་དོན་རྣམས་ཚགས་ཚུད་ཡོང་བར་རབ་འདེགས་བྱེད།
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
              སྡེ་ཚན་ཁག་ཆ་ཚང་གཟིགས།
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
                <h3 className="gt-about-dept-name">དབུས་འཛིན་སྐྱོང་སྡེ་ཚན།</h3>
                <p className="gt-about-dept-snippet">
                  དགོན་པའི་སྤྱི་ཡོངས་ཀྱི་འཛིན་སྐྱོང་དང་། དཔལ་འབྱོར། ཉིན་རེའི་ལས་དོན་བཅས་ལ་འགན་འཁུར་བྱེད།
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
                <h3 className="gt-about-dept-name">ཤེས་ཡོན་སྡེ་ཚན།</h3>
                <p className="gt-about-dept-snippet">
                  གཞི་རིམ་གྱི་ཤེས་ཡོན་དང་། ནང་པའི་ལྟ་གྲུབ། རྒྱུད་ཀྱི་སློབ་གཉེར། ཆོ་ག་ཕྱག་ལེན། འདུལ་ཁྲིམས་བཅས་ཟུང་འབྲེལ་གྱིས་གོ་རིམ་ལྡན་པའི་དགོན་པའི་སློབ་གཉེར་ལ་མཐུན་རྐྱེན་སྦྱོར།
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
                <h3 className="gt-about-dept-name">འཕྲོད་བསྟེན་དང་སྤྱི་ཚོགས་ཞབས་ཞུ།</h3>
                <p className="gt-about-dept-snippet">
                  འདིའི་ཁྱབ་ཁོངས་སུ་བཅའ་སྡོད་སྨན་ཞབས་པ་ཡོད་པའི་སྨན་ཁང་ཞིག་ཡོད་པ་དེར་དགེ་འདུན་པ་དང་། ལས་བྱེད། ལྷག་པར་དུ་ནད་པ་དང་བགྲེས་སོང་བཅས་ལ་གཞི་རིམ་སྨན་བཅོས་ཀྱི་ཞབས་ཞུ་སྒྲུབ་བཞིན་ཡོད།
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
              <h3>ལོ་འཁོར་ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།</h3>
              <p>
                བོད་བརྒྱུད་ནང་བསྟན་གྱི་ལོ་ཐོ་གཞི་རུ་བཟུང་ནས་ལོ་འཁོར་མོར་གྲྭ་ཚང་ནས་གསུང་ཆོས་དང་། མཚམས་བསྟེན་སྒྲུབ། ཆོ་ག་ཕྱག་ལེན། རྒྱུགས་སྤྲོད། དེ་བཞིན་ཆོས་ཐོག་སོ་སོའི་ཉམས་ལེན་བཅས་གོ་སྒྲིག་གནང་ཞིང་། ལས་རིམ་འདི་དག་ཏུ་དགེ་འདུན་པ་དང་། ཉམས་ལེན་པ། མཇལ་སྐོར་བ་བཅས་སྐབས་བསྟུན་གྱིས་མཉམ་ཞུགས་གནང་ཆོག
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
                མཛད་རིམ་ཆ་ཚང་གཟིགས།
              </a>
            </div>

            {/* Right Column: Events Stack */}
            <div className="gt-prog-right">
              <h4 className="gt-prog-right-title">འབྱུང་འགྱུར་གྱི་མཛད་རིམ།</h4>
              <div className="gt-events-stack">
                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༨</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">བོད་ཀྱི་ལོ་གསར་དུས་ཆེན་སྲུང་བརྩི།</h5>
                    <p className="gt-event-desc">
                      ལོ་གསར་ནི་བོད་ཀྱི་ལོ་ཐོའི་ལོ་མགོ་མཚོན་བྱེད་ཡིན། གྲྭ་ཚང་འདིར་ཉིན་གསུམ་རིང་ཆོས་ཕྱོགས་ཀྱི་མཛད་སྒོ་དང་སྤྱི་ཚོགས་ཀྱི་མཛད་སྒོ་བཅས་གོ་སྒྲིག་གནང་སྟེ་ནང་པའི་ཆོས་དང་རིག་གཞུང་གསར་གཏོད་ཀྱི་དགའ་སྟོན་རྟེན་འབྲེལ་སྲུང་བརྩི་ཞུ་བར་བྱེད།
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
              <h3 className="gt-library-title">ནང་བསྟན་མི་ཉམས་རྒྱུན་འཛིན།</h3>
              <p className="gt-library-desc">
                དགོན་པའི་དཔེ་མཛོད་ཁང་གིས་བོད་ཀྱི་དཔེ་རིང་ལག་བྲིས་མ་དང་། ནང་བསྟན་གྱི་འགྲེལ་པ། དེང་རབས་དཔེ་སྐྲུན་བཅས་སྲུང་སྐྱོབ་གནང་བ་དང་ཆབས་ཅིག མ་འོངས་མི་རབས་རྣམས་ཀྱི་ཆེད་དུ་དཀར་ཆག་སྒྲིག་སྦྱོར་དང་། ཉམས་ཞིབ། གློག་རྡུལ་ཅན་དུ་བསྒྱུར་བ་བཅས་ཀྱི་མཐུན་རྐྱེན་སྒྲུབ་བཞིན་ཡོད། དཔེ་ཚོགས་དེ་དག་གི་ཁྲོད་དུ་དགེ་ལུགས་པའི་སློབ་གཉེར་ལ་མེད་དུ་མི་རུང་བའི་གཞུང་ཆེན་གྱི་རྩ་བ་རྣམས་དང་། མཁས་པའི་འགྲེལ་པ། རྒྱུད་ཀྱི་ཉམས་ལེན་སྐོར་བཅས་ཚུད་ཡོད།
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
              དཔེ་མཛོད་དང་ཡིག་ཚགས།
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
              <h3>འབྲེལ་གཏུགས།</h3>
              <p className="gt-contact-desc">
                དགོན་པའི་སློབ་གཉེར་དང་། ཆོས་སྤྱོད། མཚམས་བསྟེན་སྒྲུབ་བཅས་ཀྱི་མཛད་རིམ་ལ་གུས་པ་ལྡན་པའི་ཐོག་ནས། གཟིགས་སྐོར་བ་རྣམས་དགོན་པར་ཕེབས་བསུ་ཞུ།
              </p>
              <div className="gt-visitor-etiquette">
                གལ་ཏེ་མཇལ་སྐོར་དུ་ཕེབས་ཚེ། དགོན་པའི་ནང་ཁ་ཁུ་སིམ་པོར་གནས་ཏེ་དགེ་འདུན་པ་རྣམས་ཀྱི་ཉིན་རེའི་ཉམས་ལེན་ལ་བར་ཆད་མི་ཡོང་བ་གནང་རོགས། གཞན་ཡང་གསལ་བསྒྲགས་ནང་གསལ་བའི་ལམ་སྟོན་ཡོངས་ལ་བརྩི་སྲུང་དང་། དགེ་འདུན་པའི་ཉམས་ལེན་ཁོ་ནའི་ཆེད་དུ་བཞག་པའི་དམིགས་གསལ་ས་ཁུལ་ཁག་ཏུ་འཛུལ་ཞུགས་མ་གནང་རོགས་ཞུ།
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
                འབྲེལ་གཏུགས།
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
