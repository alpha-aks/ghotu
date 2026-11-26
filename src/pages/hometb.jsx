import React, { useState, useEffect, useRef } from 'react';
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
  ExternalLink,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getCurrentUpcomingProgrammes } from '../data/monasteryCalendar2026';

const HERO_SLIDES = [
  {
    src: '/images/hero-slider/_DSC3552.jpg',
    alt: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གཙུག་ལག་ཁང་ཆེན་མོ།'
  },
  {
    src: '/images/hero-slider/_DSC4276.jpg',
    alt: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཆོས་ཕྱོགས་མཛད་སྒོ།'
  },
  {
    src: '/images/hero-slider/761A8106.jpg',
    alt: 'དགེ་འདུན་འདུས་པ་རྒྱ་མཚོའི་ཆོ་ག་ཕྱག་ལེན།'
  },
  {
    src: '/images/hero-slider/unnamed.webp',
    alt: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་མཐོང་སྣང་།'
  }
];

export default function HomeTb({ onSwitchLanguage, onNavigate }) {
  const [activeNoticeTab, setActiveNoticeTab] = useState('announcement');
  const [activeStatDot, setActiveStatDot] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isNoticeExpanded, setIsNoticeExpanded] = useState(false);
  const statsGridRef = useRef(null);
  const upcomingEvents = getCurrentUpcomingProgrammes();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentHeroSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsNoticeExpanded(false);
    };
    if (isNoticeExpanded) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNoticeExpanded]);

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
          {HERO_SLIDES.map((slide, idx) => (
            <img 
              key={slide.src}
              src={slide.src} 
              alt={slide.alt} 
              className={`gt-hero-img gt-hero-slide ${currentHeroSlide === idx ? 'active' : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          ))}

          {/* Left / Right Slider Navigation Arrows */}
          <button
            type="button"
            className="gt-hero-arrow-btn gt-hero-arrow-prev"
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
            title="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className="gt-hero-arrow-btn gt-hero-arrow-next"
            onClick={handleNextSlide}
            aria-label="Next Slide"
            title="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicator Dots */}
          <div className="gt-hero-dots-wrap" role="tablist" aria-label="Hero carousel pagination">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`gt-hero-dot ${currentHeroSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentHeroSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                role="tab"
                aria-selected={currentHeroSlide === idx}
              />
            ))}
          </div>
        </div>

        {/* 4 Feature Badges Bar (Figma: Frame 625795: #FFFAF1) */}
        <div className="gt-hero-stats-bar">
          <div className="gt-stats-grid">
            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/stupa.svg" alt="Founded" width={60} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">ཕྱག་བཏབ་དུས།</span>
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
            <h2 className="gt-living-title">གསང་སྔགས་རིག་འཛིན་གྱི་སྡེ་ཆེན་པོ་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།</h2>
            <p className="gt-living-text">
              གསང་ཆེན་དཔལ་ལྡན་སྟོད་རྒྱུད་གྲྭ་ཚང་ནི། ཕྱི་ལོ་ ༡༤༧༤ ལོར་རྗེ་བཙུན་ཀུན་དགའ་དོན་གྲུབ་དཔལ་བཟང་པོ་མཆོག་གི་ཕྱག་བཏབ་ཅིང་། གྲྭ་ཚང་འདིས་བོད་བརྒྱུད་ནང་བསྟན་ཁྲོད་ནས་དགེ་ལྡན་པའི་གསང་སྔགས་ཀྱི་ཆོས་བརྒྱུད་གཙོ་བོ་ཞིག་མི་ཉམས་རྒྱུན་འཛིན་གནང་ཡོད། རྒྱ་གར་དུ་བསྐྱར་འཛུགས་གནང་བ་ནས་བཟུང་། དགོན་པ་འདིས་སློབ་གཉེར་དང་། སྒོམ་སྒྲུབ་ཉམས་ལེན། རིག་གཞུང་སྲུང་སྐྱོབ། དེ་བཞིན་སྤྱི་ཚོགས་ཞབས་ཞུའི་ལས་དོན་རྣམས་མུ་མཐུད་སྒྲུབ་བཞིན་ཡོད།
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

          {/* Body Content: Both Announcement and Update have identical layout with left words and right placeholder */}
          <div className="gt-notices-update-view">
            <div className="gt-news-left">
              <h3>གྲྭ་ཚང་གི་གསར་འགྱུར་དང་གསལ་བསྒྲགས།</h3>
              <p>
                དཔལ་ལྡན་སྟོད་རྒྱུད་གྲྭ་ཚང་གི་ཉེ་བའི་གསར་འགྱུར་དང་། འདུས་སྤྱིའི་བྱེད་སྒོ། གལ་ཆེའི་གསལ་བསྒྲགས། པར་སྐྲུན། དེ་བཞིན་གསར་འགྱུར་གཞན་བཅས་ཀྱི་སྐོར་འདི་ནས་མཁྱེན་རྟོགས་གནོངས།
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
              <div 
                className="gt-news-video-card gt-announcement-card-clickable" 
                onClick={() => setIsNoticeExpanded(true)}
                title="ཆེ་རུ་གཏོང་བ།"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsNoticeExpanded(true); }}
              >
                <img 
                  src="/images/announcements/announcement-dalai-lama-visit-tb.jpg" 
                  alt="དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གལ་ཆེའི་ཆོས་བརྡ་གསལ་བསྒྲགས།"
                  className="gt-announcement-thumb"
                />
                <div className="gt-announcement-expand-badge">
                  <ZoomIn size={14} />
                  <span>ཆེ་རུ་གཏོང་བ།</span>
                </div>
              </div>
            </div>
          </div>

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
              <h2 className="gt-about-depts-title">དགོན་པའི་འཚོ་བ་ཡོངས་ལ་ཞབས་ཞུ།</h2>
              <p className="gt-about-depts-desc">
                ཤེས་ཡོན་དང་འཛིན་སྐྱོང་སྡེ་ཚན་ནས་དཔེ་མཛོད་དང་། པར་སྐྲུན། སྤྱི་ཚོགས་ཞབས་ཞུ་བཅས་བར་གྱི་སྡེ་ཚན་སོ་སོས་དགོན་པའི་ཉིན་རེའི་འཚོ་བའི་ཁྲོད་དུ་ཞབས་འདེགས་ཞུ་བཞིན་ཡོད་ལ། སྡེ་ཚན་དེ་དག་མཉམ་རུབ་ཀྱི་ཐོག་ནས་ནང་བསྟན་རྒྱུན་འཛིན་དང་། དགོན་པའི་ལས་དོན་རྣམས་ཚགས་ཚུད་ཡོང་བར་རྒྱབ་སྐྱོད་བྱེད་ཀྱི་ཡོད།
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
              སྡེ་ཚན་ཆ་ཚང་གཟིགས་རྒྱུ།
            </button>
          </div>

          <div className="gt-about-depts-cards-grid">
            {/* Administration */}
            <div
              className="gt-about-dept-card"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('departments', 'admin');
                }
              }}
              style={{ cursor: 'pointer' }}
            >
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
                  href="/departments#admin"
                  className="gt-about-dept-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (onNavigate) {
                      onNavigate('departments', 'admin');
                    }
                  }}
                >
                  རྒྱས་པ་གཟིགས་རྒྱུ། <span>→</span>
                </a>
              </div>
            </div>

            {/* Education */}
            <div
              className="gt-about-dept-card"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('departments', 'education');
                }
              }}
              style={{ cursor: 'pointer' }}
            >
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
                  གཞི་རིམ་གྱི་ཤེས་ཡོན་དང་། ནང་པའི་ལྟ་གྲུབ། རྒྱུད་ཀྱི་སློབ་གཉེར། ཆོ་ག་ཕྱག་ལེན། འདུལ་ཁྲིམས་བཅས་ཟུང་འབྲེལ་གྱིས་གོ་རིམ་ལྡན་པའི་དགོན་པའི་སློབ་གཉེར་གྱི་མཐུན་རྐྱེན་སྦྱོར།
                </p>
                <a
                  href="/departments#education"
                  className="gt-about-dept-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (onNavigate) {
                      onNavigate('departments', 'education');
                    }
                  }}
                >
                  རྒྱས་པ་གཟིགས་རྒྱུ། <span>→</span>
                </a>
              </div>
            </div>

            {/* Healthcare */}
            <div
              className="gt-about-dept-card"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('departments', 'healthcare');
                }
              }}
              style={{ cursor: 'pointer' }}
            >
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
                  འདིའི་ཁྱབ་ཁོངས་སུ་བཅའ་སྡོད་སྨན་ཞབས་པ་ཡོད་པའི་སྨན་ཁང་ཞིག་ཡོད། དེར་དགེ་འདུན་པ་དང་། ལས་བྱེད་པ།ལྷག་པར་དུ་ནད་པ་དང་བགྲེས་སོང་བཅས་ལ་གཞི་རིམ་སྨན་བཅོས་ཀྱི་ཞབས་ཞུ་སྒྲུབ་བཞིན་ཡོད།
                </p>
                <a
                  href="/departments#healthcare"
                  className="gt-about-dept-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (onNavigate) {
                      onNavigate('departments', 'healthcare');
                    }
                  }}
                >
                  རྒྱས་པ་གཟིགས་རྒྱུ། <span>→</span>
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
                བོད་བརྒྱུད་ནང་བསྟན་གྱི་ལོ་ཐོའི་རྗེས་སུ་འབྲངས་ནས་ལོ་འཁོར་མོར་གྲྭ་ཚང་ནས་གསུང་ཆོས་དང་། མཚམས་བསྙེན་སྒྲུབ། ཆོ་ག་ཕྱག་ལེན། རྒྱུགས་སྤྲོད། དེ་བཞིན་ཆོས་ཐོག་སོ་སོའི་སྒྲུབ་མཆོད་ཁག་ཉམས་ལེན་བཅས་གོ་སྒྲིག་གནང་ཞིང་། ལས་རིམ་འདི་དག་ཏུ་དགེ་འདུན་པ་དང་། ཉམས་ལེན་པ། མཇལ་སྐོར་བ་བཅས་སྐབས་བསྟུན་གྱིས་མཉམ་ཞུགས་གནང་ཆོག
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
                {upcomingEvents.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="gt-event-card">
                    <div className="gt-event-date-box">
                      <span className="gt-event-month">{item.monthTb || item.month}</span>
                      <span className="gt-event-day">{item.dayTb || item.day}</span>
                      <span className="gt-event-year">{item.yearTb || item.year}</span>
                    </div>
                    <div className="gt-event-divider-vert" />
                    <div className="gt-event-info">
                      <h5 className="gt-event-name">{item.titleTb || item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. PRESERVING BUDDHIST KNOWLEDGE (Figma: Frame 625809: #6B9EBD)
          ==================================================================== */}
      <section id="archive" className="gt-library-section gt-library-sec">
        <div className="gt-library-container">
          <div className="gt-library-texture-wrap" aria-hidden="true">
            <DharmachakraWatermark width="100%" height="100%" />
          </div>
          <div className="gt-library-content-col">
            <div className="gt-library-text-block">
              <h2 className="gt-library-title">ནང་བསྟན་མི་ཉམས་རྒྱུན་འཛིན།</h2>
              <p className="gt-library-desc">
                དགོན་པའི་དཔེ་མཛོད་ཁང་གིས་བོད་ཀྱི་དཔེ་རྙིང་ལག་བྲིས་མ་དང་། ནང་བསྟན་གྱི་འགྲེལ་པ། དེང་རབས་དཔེ་སྐྲུན་བཅས་སྲུང་སྐྱོབ་བྱེད་པ་དང་ཆབས་ཅིག མ་འོངས་མི་རབས་རྣམས་ཀྱི་ཆེད་དུ་དཀར་ཆག་སྒྲིག་སྦྱོར་དང་། ཉམས་ཞིབ། གློག་རྡུལ་ཅན་དུ་བསྒྱུར་བ་བཅས་ཀྱི་མཐུན་རྐྱེན་སྒྲུབ་བཞིན་ཡོད། དཔེ་ཚོགས་དེ་དག་གི་ཁྲོད་དུ་དགེ་ལུགས་པའི་སློབ་གཉེར་ལ་མེད་དུ་མི་རུང་བའི་གཞུང་ཆེན་རྩ་བ་རྣམས་དང་། མཁས་པའི་འགྲེལ་པ། རྒྱུད་ཀྱི་ཉམས་ལེན་སྐོར་བཅས་ཚུད་ཡོད།
              </p>
            </div>
            <a 
              href="https://www.gyutolibrary.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="gt-visit-library-btn"
            >
              དཔེ་མཛོད་ལ་གཟིགས་རྒྱུ།
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
                དགོན་པའི་སློབ་གཉེར་དང་། ཆོས་སྤྱོད། མཚམས་བསྙེན་སྒྲུབ་བཅས་ཀྱི་མཛད་རིམ་ལ་གུས་བརྩི་ལྡན་པའི་ཐོག་ནས། གཟིགས་སྐོར་བ་རྣམས་དགོན་པར་ཕེབས་པར་ང་ཚོས་དགའ་བསུ་ཞུ།
              </p>
              <div className="gt-visitor-etiquette">
                གལ་ཏེ་མཇལ་སྐོར་དུ་ཕེབས་ཚེ། དགོན་པའི་ར་བའི་ནང་ཁ་ཁུ་སིམ་པོར་གནས་ཏེ་དགེ་འདུན་པ་རྣམས་ཀྱི་ཉིན་རེའི་ཉམས་ལེན་ལ་བར་ཆད་མི་ཡོང་བ་གནང་རོགས་ཞུ་རྒྱུ་དང་། གཞན་ཡང་གསལ་བསྒྲགས་སྦྱར་བའི་ལམ་སྟོན་ཁག་ལ་བརྩི་སྲུང་དང་། དགེ་འདུན་པ་ཚོའི་ཉམས་ལེན་གནང་སའི་དམིགས་གསལ་ས་ཆ་ཁག་ཏུ་མ་འཛུལ་རོགས་ཞུ།
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

      {/* ====================================================================
          IPHONE-STYLE EXPANDED PHOTO MODAL (Tibetan)
          ==================================================================== */}
      {isNoticeExpanded && (
        <div 
          className="gt-iphone-photo-backdrop tibetan-text" 
          onClick={() => setIsNoticeExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label="གལ་ཆེའི་ཆོས་བརྡ་གསལ་བསྒྲགས།"
        >
          {/* Top Bar with iPhone style circular blur close button */}
          <div className="gt-iphone-top-bar" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gt-iphone-close-btn"
              onClick={() => setIsNoticeExpanded(false)}
              aria-label="Close photo"
              title="Close (Esc)"
            >
              <X size={22} />
            </button>
            <a
              href="/news"
              className="gt-iphone-action-link"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  setIsNoticeExpanded(false);
                  onNavigate('news');
                }
              }}
            >
              <span>གསར་འགྱུར་ནང་གཟིགས།</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Center Expanding Image Container */}
          <div className="gt-iphone-img-stage" onClick={(e) => e.stopPropagation()}>
            <img
              src="/images/announcements/announcement-dalai-lama-visit-tb.jpg"
              alt="དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གལ་ཆེའི་ཆོས་བརྡ་གསལ་བསྒྲགས།"
              className="gt-iphone-photo-img"
              onClick={() => setIsNoticeExpanded(false)}
              title="གང་རུང་ལ་མནན་ནས་ཁ་རྒྱག་པ།"
            />
          </div>

          {/* Bottom Caption Pill */}
          <div className="gt-iphone-bottom-caption" onClick={(e) => e.stopPropagation()}>
            <p className="gt-iphone-caption-title">གལ་ཆེའི་ཆོས་བརྡ་གསལ་བསྒྲགས།</p>
            <p className="gt-iphone-caption-sub">༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོ་མཆོག་དཔལ་ལྡན་སྟོད་རྒྱུད་གྲྭ་ཚང་དུ་ཆིབས་བསྒྱུར་བཀའ་དྲིན་བསྐྱང་གནང་མཛད་རྒྱུ། • ཕྱི་ལོ་ ༢༠༢༦ ཟླ་ ༡༡ ཚེས་ ༢༨</p>
          </div>
        </div>
      )}
    </div>
  );
}
