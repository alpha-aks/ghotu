import React, { useState } from 'react';
import './Home.css';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  RightWhorlConch,
  EndlessKnot,
  TibetanVajra,
  DharmachakraWatermark
} from '../components/MonasteryIcons';
import {
  Landmark,
  Users,
  GraduationCap,
  MapPin,
  Play,
  ExternalLink
} from 'lucide-react';

export default function Home({ onSwitchLanguage, onNavigate }) {
  const [activeNoticeTab, setActiveNoticeTab] = useState('announcement');

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
          <img
            src="/images/19adcb4acb3bef0a3901217f7a92b1c6f3106c52.jpg"
            alt="Gyuto Tantric Monastery Assembly of Monks with Himalayan Mountains"
            className="gt-hero-img gt-hero-en"
          />
        </div>

        {/* 4 Feature Badges Bar (Figma: Frame 625795: #FFFAF1) */}
        <div className="gt-hero-stats-bar">
          <div className="gyuto-container">
            <div className="gt-stats-grid">
              <div className="gt-stat-item">
                <div className="gt-stat-icon">
                  <Landmark size={44} strokeWidth={1.6} />
                </div>
                <div className="gt-stat-texts">
                  <span className="gt-stat-label">Founded</span>
                  <span className="gt-stat-value">1474 (Tibet)</span>
                </div>
              </div>

              <div className="gt-stat-item">
                <div className="gt-stat-icon">
                  <Users size={44} strokeWidth={1.6} />
                </div>
                <div className="gt-stat-texts">
                  <span className="gt-stat-label">Community</span>
                  <span className="gt-stat-value">500 - 550 Monks</span>
                </div>
              </div>

              <div className="gt-stat-item">
                <div className="gt-stat-icon">
                  <GraduationCap size={44} strokeWidth={1.6} />
                </div>
                <div className="gt-stat-texts">
                  <span className="gt-stat-label">Tradition</span>
                  <span className="gt-stat-value">Gelug School</span>
                </div>
              </div>

              <div className="gt-stat-item">
                <div className="gt-stat-icon">
                  <MapPin size={44} strokeWidth={1.6} />
                </div>
                <div className="gt-stat-texts">
                  <span className="gt-stat-label">Location</span>
                  <span className="gt-stat-value">Dharamshala, India</span>
                </div>
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
              Founded in 1474, Gyuto Tantric Monastery has preserved one of the principal tantric traditions
              of the Gelug school of Tibetan Buddhism. Following its re-establishment in India,
              the monastery continues to cultivate learning, spiritual practice, cultural preservation,
              and service to society.
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

          {/* Body Content: Announcement View matches user screenshot 1:1 */}
          {activeNoticeTab === 'announcement' ? (
            <div className="gt-notices-announcement-view">
              <h3 className="gt-notices-announcement-title">From the Monastery</h3>
              <p className="gt-notices-announcement-text">
                Stay informed about recent developments, community activities, important notices, publications, and other updates from Gyuto Tantric Monastery.
              </p>
            </div>
          ) : (
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
                      Sacred Tantric Chants & Daily Assembly Prayers
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
          7. SERVING EVERY ASPECT OF MONASTIC LIFE (Figma: Frame 625783)
          ==================================================================== */}
      <section id="departments" className="gt-departments-sec">
        <div className="gyuto-container">
          <div className="gt-dept-header-row">
            <div className="gt-dept-header-left">
              <h3>Serving Every Aspect of Monastic Life</h3>
              <p>
                Each department contributes to the daily life of the monastery — from education
                and administration to healthcare, maintenance, and community service — together
                they support the preservation of Buddhist teachings and the smooth functioning of the institution.
              </p>
            </div>
            <a
              href="#departments"
              className="gt-figma-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('departments');
                }
              }}
            >
              VIEW DEPARTMENTS
            </a>
          </div>

          <div className="gt-dept-cards-grid">
            {/* Card 1: General Administration */}
            <div className="gt-dept-card">
              <div className="gt-dept-img-wrap">
                <img
                  src="/images/dept-admin.jpg"
                  alt="General Administration"
                  className="gt-dept-img"
                />
              </div>
              <div className="gt-dept-card-body">
                <h4 className="gt-dept-card-title">General Administration</h4>
                <p className="gt-dept-card-text">
                  Overseeing the administration and daily operations of the monastery,
                  responsible for governance, communications, finance, and the day-to-day
                  affairs of the monastery.
                </p>
                <a href="#admin-dept" className="gt-dept-card-link">
                  Learn more <span className="gt-dept-arrow-line" />
                </a>
              </div>
            </div>

            {/* Card 2: Education */}
            <div className="gt-dept-card">
              <div className="gt-dept-img-wrap">
                <img
                  src="/images/dept-education.jpg"
                  alt="Monastic Education"
                  className="gt-dept-img"
                />
              </div>
              <div className="gt-dept-card-body">
                <h4 className="gt-dept-card-title">Education</h4>
                <p className="gt-dept-card-text">
                  Dedicated to higher Buddhist education and monastic studies, education
                  programs in philosophy, debate, rituals, tantric studies, and continuing
                  education for all monk levels.
                </p>
                <a href="#education-dept" className="gt-dept-card-link">
                  Learn more <span className="gt-dept-arrow-line" />
                </a>
              </div>
            </div>

            {/* Card 3: Healthcare & Social Services */}
            <div className="gt-dept-card">
              <div className="gt-dept-img-wrap">
                <img
                  src="/images/dept-healthcare.jpg"
                  alt="Healthcare and Social Services"
                  className="gt-dept-img"
                />
              </div>
              <div className="gt-dept-card-body">
                <h4 className="gt-dept-card-title">Healthcare & Social Services</h4>
                <p className="gt-dept-card-text">
                  Gyuto Tantric Monastery continues to provide for health and well-being,
                  supporting medical care and community outreach, providing clinics and wellness support.
                </p>
                <a href="#health-dept" className="gt-dept-card-link">
                  Learn more <span className="gt-dept-arrow-line" />
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
                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">FEB</span>
                    <span className="gt-event-day">14th</span>
                    <span className="gt-event-year">2026</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">Tibetan New Year Celebration</h5>
                    <p className="gt-event-desc">
                      Join us to mark the beginning of the Tibetan calendar year with auspicious prayers.
                    </p>
                  </div>
                </div>

                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">FEB</span>
                    <span className="gt-event-day">18-20</span>
                    <span className="gt-event-year">2026</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">Tibetan New Year (Losar)</h5>
                    <p className="gt-event-desc">
                      Join us to mark the beginning of the Tibetan calendar year with special tantric pujas.
                    </p>
                  </div>
                </div>

                <div className="gt-event-card">
                  <div className="gt-event-date-box">
                    <span className="gt-event-month">FEB</span>
                    <span className="gt-event-day">24th</span>
                    <span className="gt-event-year">2026</span>
                  </div>
                  <div className="gt-event-divider-vert" />
                  <div className="gt-event-info">
                    <h5 className="gt-event-name">Tibetan New Year Celebration</h5>
                    <p className="gt-event-desc">
                      Consecration of sand mandala and sacred recited ritual assemblies by the monastic assembly.
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
        <div className="gyuto-container">
          <div className="gt-library-inner">
            <div className="gt-library-watermark-wrap">
              <DharmachakraWatermark width={560} height={420} />
            </div>

            <div className="gt-library-content">
              <h3>Preserving Buddhist Knowledge</h3>
              <p>
                The monastery’s library safeguards rare Tibetan manuscripts, tantric texts,
                and philosophy commentaries while supporting cataloging, research, and digitization
                for future generations. The collection includes canonical texts, ritual manuals,
                and works by great monastic masters.
              </p>
              <a 
                href="/departments" 
                className="gt-figma-btn-light"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('departments');
                  }
                }}
              >
                VISIT THE LIBRARY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. SUPPORT THE CONTINUITY OF THE TRADITION (Figma: Frame 625810: #FFFFFF)
          ==================================================================== */}
      <section id="donate" className="gt-support-sec">
        <div className="gyuto-container">
          <div className="gt-support-inner">
            <div className="gt-support-knot">
              <EndlessKnot width={102} height={80} color="#92060F" />
            </div>
            <h3>Support the Continuity of the Tradition</h3>
            <p>
              Contributions help sustain monastic education, preserve sacred texts, maintain
              monastery facilities, and support the livelihood of the monastic community.
              Your support ensures the preservation of this living Tantric tradition for future generations.
            </p>
            <a 
              href="/support" 
              className="gt-figma-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('support');
                }
              }}
            >
              SUPPORT US
            </a>
          </div>
        </div>
      </section>

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
    </div>
  );
}
