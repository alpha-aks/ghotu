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
    alt: 'Gyuto Tantric Monastery Assembly & Shrine Hall'
  },
  {
    src: '/images/hero-slider/_DSC4276.jpg',
    alt: 'Gyuto Tantric Monks Sacred Ritual Ceremony'
  },
  {
    src: '/images/hero-slider/761A8106.jpg',
    alt: 'Monastic Assembly in Prayer and Practice'
  },
  {
    src: '/images/hero-slider/unnamed.webp',
    alt: 'Gyuto Monastery Campus and Himalayan Foothills'
  }
];

export default function Home({ onSwitchLanguage, onNavigate }) {
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
    <div className="gyuto-page">
      {/* ====================================================================
          1. HEADER & NAVIGATION BAR (Extracted Component)
          ==================================================================== */}
      <Header
        lang="en"
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
                <span className="gt-stat-label">Founded</span>
                <span className="gt-stat-value">1474 (Tibet)</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/monk.svg" alt="Community" width={47} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">Community</span>
                <span className="gt-stat-value">500 - 550 Monks</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/lotus_buddha.svg" alt="Tradition" width={60} height={60} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">Tradition</span>
                <span className="gt-stat-value">Gelug School</span>
              </div>
            </div>

            <div className="gt-stat-item">
              <div className="gt-stat-icon">
                <img src="/images/stats/mountains.svg" alt="Location" width={103} height={55} />
              </div>
              <div className="gt-stat-texts">
                <span className="gt-stat-label">Location</span>
                <span className="gt-stat-value">Dharamshala, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. A LIVING MONASTIC INSTITUTION (Figma: Frame 625771: #FFD781)
          ==================================================================== */}
      <section id="about" className="gt-living-section">
        <div className="gyuto-container">
          <div className="gt-living-inner">
            <div className="gt-conch-badge">
              <RightWhorlConch width={48} height={80} />
            </div>
            <h2 className="gt-living-title">A Living Monastic Institution</h2>
            <p className="gt-living-text">
              Gyuto Tantric Monastery was founded in 1474 by the great Je Tsong Khapa disciple, Jetsun Kunga Dondup Pelsangpo. The monastery has preserved and continued one of the principal traditions of the Gelug school of Tibetan Buddhism, particularly its esoteric tantric teachings.
              Since its re-establishment in India, the monastery has continued to dedicate itself to Buddhist education, meditation and spiritual practice, the preservation of Tibetan culture and heritage, as well as various activities aimed at serving society.
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
              LEARN OUR HISTORY
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
                UPDATE
              </button>
              <button
                className={`gt-notice-tab-btn ${activeNoticeTab === 'announcement' ? 'active' : ''}`}
                onClick={() => setActiveNoticeTab('announcement')}
                type="button"
              >
                ANNOUNCEMENT
              </button>
            </div>

            <div className="gt-notices-top-vajra-wrap">
              <TibetanVajra width={72} height={24} />
            </div>
          </div>

          {/* Body Content: Both Announcement and Update have identical layout with left words and right placeholder */}
          <div className="gt-notices-update-view">
            <div className="gt-news-left">
              <h3>From the Monastery</h3>
              <p>
                Stay informed about recent developments, community activities, important notices,
                publications, and other updates from Gyuto Tantric Monastery.
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
                VIEW ALL
              </a>
            </div>

            <div className="gt-news-right">
              <div 
                className="gt-news-video-card gt-announcement-card-clickable" 
                onClick={() => setIsNoticeExpanded(true)}
                title="Tap to expand announcement"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsNoticeExpanded(true); }}
              >
                <img 
                  src="/images/announcements/announcement-dalai-lama-visit-en.jpg" 
                  alt="Important Announcement and Invitation: His Holiness the Dalai Lama Visit to Gyuto Tantric Monastery"
                  className="gt-announcement-thumb"
                />
                <div className="gt-announcement-expand-badge">
                  <ZoomIn size={14} />
                  <span>Tap to expand</span>
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
      <section id="departments" className="gt-about-depts-section">
        <div className="gyuto-container">
          <div className="gt-about-depts-head">
            <div className="gt-about-depts-text">
              <h2 className="gt-about-depts-title">Serving Every Aspect of Monastic Life</h2>
              <p className="gt-about-depts-desc">
                Each department contributes to the daily life of the monastery—from education and
                administration to the library, publications, and community services. Together, they
                support the preservation of Buddhist teachings and the smooth functioning of the institution.
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
              VIEW DEPARTMENTS
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
                <h3 className="gt-about-dept-name">Central Administration</h3>
                <p className="gt-about-dept-snippet">
                  Responsible for the general, administrative, financial, and day-to-day affairs of the Monastery.
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
                  LEARN MORE <span>→</span>
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
                <h3 className="gt-about-dept-name">Education</h3>
                <p className="gt-about-dept-snippet">
                  Provides systematic monastic education combining basic education, Buddhist philosophy, Tantric studies, ritual training, and monastic discipline.
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
                  LEARN MORE <span>→</span>
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
                <h3 className="gt-about-dept-name">Healthcare & Social Services</h3>
                <p className="gt-about-dept-snippet">
                  Maintains a clinic with a resident nurse to provide basic medical care to monks and staff, particularly the sick and elderly.
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
                  LEARN MORE <span>→</span>
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
              <h3>Spiritual Programmes throughout the Year</h3>
              <p>
                Following the Tantric traditions and calendar, the monastery conducts
                regular teachings, retreats, ceremonies, prayers for peace, and seasonal festivals
                throughout the year. Programmes are open to monks, practitioners, and visitors where applicable.
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
                VIEW CALENDAR
              </a>
            </div>

            {/* Right Column: Events Stack */}
            <div className="gt-prog-right">
              <h4 className="gt-prog-right-title">UPCOMING EVENTS</h4>
              <div className="gt-events-stack">
                {upcomingEvents.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="gt-event-card">
                    <div className="gt-event-date-box">
                      <span className="gt-event-month">{item.month}</span>
                      <span className="gt-event-day">{item.day}</span>
                      <span className="gt-event-year">{item.year}</span>
                    </div>
                    <div className="gt-event-divider-vert" />
                    <div className="gt-event-info">
                      <h5 className="gt-event-name">{item.title}</h5>
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
              <h2 className="gt-library-title">Preserving Buddhist Knowledge</h2>
              <p className="gt-library-desc">
                The monastery's library safeguards rare Tibetan manuscripts, Buddhist commentaries,
                and contemporary publications while supporting cataloguing, research, and
                digitisation for future generations. The collection includes foundational texts,
                scholastic commentaries, and tantric practices essential to Gelug study.
              </p>
            </div>
            <a 
              href="https://www.gyutolibrary.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="gt-visit-library-btn"
            >
              VISIT THE LIBRARY
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. SUPPORT THE CONTINUITY OF THE TRADITION (Figma: Frame 625810: #FFFFFF)
          ==================================================================== */}
      <SupportSection lang="en" onNavigate={onNavigate} />

      {/* ====================================================================
          11. GET IN TOUCH (Figma: Frame 625811: #FFD781)
          ==================================================================== */}
      <section id="contact" className="gt-contact-sec">
        <div className="gyuto-container">
          <div className="gt-contact-grid">
            <div className="gt-contact-left">
              <h3>Get in Touch</h3>
              <p className="gt-contact-desc">
                Visitors are welcome to the monastery and enjoy a peaceful sanctuary for reflection, prayer, and study.
              </p>
              <div className="gt-visitor-etiquette">
                If you are visiting, please maintain silence within the monastery grounds and dress modestly
                in accordance with daily practices without interruption. Please also observe all posted
                guidelines and refrain from entering areas reserved for monastic practice.
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
                CONTACT US
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
      <Footer lang="en" onNavigate={onNavigate} />

      {/* ====================================================================
          IPHONE-STYLE EXPANDED PHOTO MODAL
          ==================================================================== */}
      {isNoticeExpanded && (
        <div 
          className="gt-iphone-photo-backdrop" 
          onClick={() => setIsNoticeExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded Announcement"
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
              <span>View in News</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Center Expanding Image Container */}
          <div className="gt-iphone-img-stage" onClick={(e) => e.stopPropagation()}>
            <img
              src="/images/announcements/announcement-dalai-lama-visit-en.jpg"
              alt="Official Announcement: His Holiness the Dalai Lama visit"
              className="gt-iphone-photo-img"
              onClick={() => setIsNoticeExpanded(false)}
              title="Click anywhere to close"
            />
          </div>

          {/* Bottom Caption Pill */}
          <div className="gt-iphone-bottom-caption" onClick={(e) => e.stopPropagation()}>
            <p className="gt-iphone-caption-title">Important Announcement &amp; Invitation</p>
            <p className="gt-iphone-caption-sub">His Holiness the Dalai Lama to visit Gyuto Tantric Monastery • Nov 28, 2026</p>
          </div>
        </div>
      )}
    </div>
  );
}
