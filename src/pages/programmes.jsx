import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { DepartmentsAcrossYear } from './departments';
import { 
  EndlessKnot, 
  DharmachakraWatermark,
  TibetanVajra 
} from '../components/MonasteryIcons';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Users, 
  X, 
  Info, 
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './programmes.css';

// Monastic Ceremonies and Events mapped by Date key (YYYY-MM-DD)
export const MONASTERY_EVENTS_DATA = {
  '2026-08-06': [
    {
      id: 'ev-aug-06',
      title: 'Gyuto Tantric Chanting & Ritual Practice',
      time: '06:00 AM - 12:30 PM & 03:00 PM - 06:30 PM',
      venue: 'Main Assembly Tsuklakhang Hall',
      category: 'Tantric Ritual',
      access: 'Open to Practitioners & Respectful Visitors',
      tibetanLunar: '24th Day of 6th Tibetan Month (Dawa Drukpa)',
      description: 'The monastic assembly gathers in full ceremonial robes for deep overtone chordal chanting, intricate mudras, and mandala offerings invoking the meditational deities Guhyasamaja, Chakrasamvara, and Yamantaka. Morning and afternoon sessions are open for quiet observation and silent meditation.',
      guidelines: 'Visitors are requested to remove shoes at the entrance, dress modestly with shoulders and knees covered, and maintain silence inside the prayer hall.'
    }
  ],
  '2026-08-15': [
    {
      id: 'ev-aug-15',
      title: 'Full Moon Sojong & Medicine Buddha Healing Puja',
      time: '07:30 AM - 11:30 AM',
      venue: 'Upper Shrine Room',
      category: 'Public Ceremony',
      access: 'Open to All',
      tibetanLunar: '15th Day (Full Moon) of 6th Tibetan Month',
      description: 'Bi-monthly monastic confession and restoration of vows ceremony (Sojong), followed by extensive Menla (Medicine Buddha) prayers and butter lamp lighting dedicated to the health, peace, and longevity of all living beings.',
      guidelines: 'Offerings of fresh flowers, incense, and lamps are welcome. Devotees may bring names of sick or departed loved ones for dedication prayers.'
    }
  ],
  '2026-08-21': [
    {
      id: 'ev-aug-21',
      title: 'Yamantaka (Dorje Jigje) Tantric Self-Initiation',
      time: '09:00 AM - 04:30 PM',
      venue: 'Tantric College Inner Shrine',
      category: 'Tantric Ritual',
      access: 'Monastic Initiates Only',
      tibetanLunar: '21st Day of Tibetan Month',
      description: 'Sacred self-initiation rites of the Solitary Hero Yamantaka, wrathful aspect of Manjushri, upholding the esoteric lineage passed down from Jetsun Sherab Senge.',
      guidelines: 'Strict monastic observance. Visitors are welcomed in the monastery courtyards and outer stupas during this period.'
    }
  ],
  '2026-08-29': [
    {
      id: 'ev-aug-29',
      title: 'Dharmapala Mahakala Day & Protective Rites',
      time: '02:00 PM - 06:00 PM',
      venue: 'Mahakala Gonkhang Shrine',
      category: 'Protective Ceremony',
      access: 'Open for Blessings',
      tibetanLunar: '29th Protector Day',
      description: 'Propitiation of the wrathful Dharma protectors (Six-Armed Mahakala, Kalarupa, and Palden Lhamo), with ceremonial horns, cymbals, and sacred tea offerings for clearing spiritual obstacles.',
      guidelines: 'Special protective cords and consecrated herbs will be distributed at the conclusion of the ceremony.'
    }
  ],
  '2026-02-18': [
    {
      id: 'ev-feb-18',
      title: 'Tibetan New Year Celebration (Losar 2153)',
      time: '06:00 AM - 05:00 PM (3-Day Observance)',
      venue: 'Monastery Grounds & Main Temple',
      category: 'Major Festival',
      access: 'Open to Public & Wider Community',
      tibetanLunar: '1st Day of 1st Tibetan Month (Losar)',
      description: 'Losar marks the beginning of the Tibetan calendar year. The monastery hosts three days of ceremonies, rituals, and community observances celebrating Buddhist teachings and cultural renewal. Open to practitioners and visitors respectful of the sacred atmosphere.',
      guidelines: 'Traditional Losar refreshments, auspicious khapse, and butter tea are offered to all visitors.'
    }
  ],
  '2026-05-23': [
    {
      id: 'ev-may-23',
      title: 'Saka Dawa Duchen (Buddha Enlightenment Day)',
      time: '05:30 AM - 08:30 PM',
      venue: 'Tsuklakhang & Circumambulation Path',
      category: 'Major Buddhist Holy Day',
      access: 'Open to All',
      tibetanLunar: '15th Day (Full Moon) of 4th Tibetan Month',
      description: 'The holiest day celebrating Lord Buddha Shakyamuni’s birth, enlightenment, and Parinirvana. Karmic merits of wholesome actions multiply a hundred thousand times.',
      guidelines: 'Grand butter lamp illuminations along the monastery perimeter starting at dusk.'
    }
  ]
};

// 3 Highlighted upcoming programmes from Figma mockup (Frame 2147236792)
export const UPCOMING_PROGRAMMES = [
  {
    id: 'losar-2026-1',
    month: 'FEB',
    day: '18th',
    year: '2026',
    dateKey: '2026-02-18',
    title: 'Tibetan New Year Celebration',
    desc: 'Losar marks the beginning of the Tibetan calendar year. The monastery hosts three days of ceremonies, rituals, and community observances celebrating Buddhist teachings and cultural renewal. Open to practitioners and visitors respectful of the sacred atmosphere.',
    category: 'Major Festival',
    venue: 'Monastery Courtyard & Main Prayer Hall'
  },
  {
    id: 'losar-2026-2',
    month: 'FEB',
    day: '18th',
    year: '2026',
    dateKey: '2026-02-18',
    title: 'Tibetan New Year Celebration',
    desc: 'Losar marks the beginning of the Tibetan calendar year. The monastery hosts three days of ceremonies, rituals, and community observances celebrating Buddhist teachings and cultural renewal. Open to practitioners and visitors respectful of the sacred atmosphere.',
    category: 'Scholastic Debate & Ritual',
    venue: 'Gyuto Debate Courtyard'
  },
  {
    id: 'losar-2026-3',
    month: 'FEB',
    day: '18th',
    year: '2026',
    dateKey: '2026-02-18',
    title: 'Tibetan New Year Celebration',
    desc: 'Losar marks the beginning of the Tibetan calendar year. The monastery hosts three days of ceremonies, rituals, and community observances celebrating Buddhist teachings and cultural renewal. Open to practitioners and visitors respectful of the sacred atmosphere.',
    category: 'Tantric Empowerment',
    venue: 'Main Assembly Tsuklakhang'
  }
];

// Seasonal cycle of departments across the year
export const SEASONAL_RHYTHM = [
  {
    id: 'summer',
    period: 'FEB - MAY',
    season: 'SUMMER',
    activity: 'Retreat & Practice',
    description: 'Intensive meditation retreats, sadhana practices, and mantra accumulations undertaken in the peaceful Himalayan mountain environment.'
  },
  {
    id: 'spring',
    period: 'FEB - MAY',
    season: 'SPRING',
    activity: 'Teaching & Debate',
    description: 'Extensive scriptural study, philosophical debate sessions (Tsennyi), and commentary on the Great Stages of Secret Mantra.'
  },
  {
    id: 'autumn',
    period: 'FEB - MAY',
    season: 'AUTUMN',
    activity: 'Examinations',
    description: 'Rigorous oral memorization recitations and dialectical examinations determining Geshe and Ngagrampa degrees.'
  },
  {
    id: 'winter',
    period: 'FEB - MAY',
    season: 'WINTER',
    activity: 'Rituals & Observances',
    description: 'Grand end-of-year protector pujas, sacred cham dances, preparation of intricate butter torma offerings, and peace prayers.'
  }
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Programmes({ onSwitchLanguage, onNavigate }) {
  // Calendar state initialized to August 2026 matching design mockup
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(7); // 7 = August (0-indexed)
  const [selectedDateKey, setSelectedDateKey] = useState('2026-08-06'); // August 6, 2026 selected
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  // Handle previous month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  // Handle next month navigation
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  // Reset to default August 2026 (matching design)
  const handleResetToDesign = () => {
    setCurrentYear(2026);
    setCurrentMonth(7);
    setSelectedDateKey('2026-08-06');
  };

  // Generate 42 calendar grid cells (6 rows x 7 days)
  const generateCalendarDays = () => {
    const days = [];
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // 0-6
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    // 1. Leading days from previous month
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = prevMonthDays - i;
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const dateKey = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      days.push({
        dayNum,
        dateKey,
        isOtherMonth: true,
        year: prevYear,
        month: prevMonth,
        events: MONASTERY_EVENTS_DATA[dateKey] || []
      });
    }

    // 2. Days of current month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({
        dayNum: i,
        dateKey,
        isOtherMonth: false,
        year: currentYear,
        month: currentMonth,
        events: MONASTERY_EVENTS_DATA[dateKey] || []
      });
    }

    // 3. Trailing days from next month to fill standard 42 cell grid
    const remainingSlots = 42 - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      const dateKey = `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({
        dayNum: i,
        dateKey,
        isOtherMonth: true,
        year: nextYear,
        month: nextMonth,
        events: MONASTERY_EVENTS_DATA[dateKey] || []
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const prevMonthName = MONTH_NAMES[currentMonth === 0 ? 11 : currentMonth - 1];
  const nextMonthName = MONTH_NAMES[currentMonth === 11 ? 0 : currentMonth + 1];
  const currentMonthName = MONTH_NAMES[currentMonth];

  // Parse currently selected date for formatted display
  const [selYear, selMonth, selDay] = selectedDateKey.split('-').map(Number);
  const formattedSelectedDate = `${String(selDay).padStart(2, '0')} ${MONTH_NAMES[selMonth - 1]} ${selYear}`;
  const selectedDayEvents = MONASTERY_EVENTS_DATA[selectedDateKey] || [];

  return (
    <div className="gt-programmes-page">
      {/* 1. Header with 'PROGRAMMES' active */}
      <Header
        lang="en"
        active="programmes"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-main-content">
        {/* ====================================================================
            1. HERO SECTION
            ==================================================================== */}
        <section className="gt-programmes-hero">
          <div className="gt-programmes-hero-content">
            <h1 className="gt-programmes-hero-title">
              A Year of Study,<br />
              Practice & Ceremony
            </h1>
            <p className="gt-programmes-hero-sub">
              Throughout the year, Gyuto Tantric Monastery follows a cycle of teachings, ritual practices, retreats, examinations, and ceremonial observances according to the Tibetan Buddhist calendar. The programme brings together the monastery's monastic activities and selected events open to practitioners, visitors, and the wider community.
            </p>
          </div>
        </section>

        {/* ====================================================================
            2. ANNUAL CALENDAR SECTION (Working interactive calendar)
            ==================================================================== */}
        <section className="gt-calendar-section" id="calendar">
          <div className="gyuto-container">
            <div className="gt-calendar-header-group">
              <h2 className="gt-calendar-section-title">Annual Calendar</h2>
              <p className="gt-calendar-section-sub">
                The monastery's programme follows the Tibetan Buddhist calendar, with activities taking place throughout the year. Use the calendar to explore upcoming teachings, ceremonies, retreats, examinations, and other events.
              </p>
            </div>

            <div className="gt-calendar-shell">
              {/* Month & Year Title */}
              <h3 className="gt-cal-month-title">
                {currentMonthName}, {currentYear}
              </h3>

              {/* Blue Navigation Bar with Center Date Display */}
              <div className="gt-cal-nav-bar">
                <button
                  type="button"
                  className="gt-cal-nav-btn"
                  onClick={handlePrevMonth}
                  aria-label={`Previous month, ${prevMonthName}`}
                >
                  <ChevronLeft size={16} />
                  <span>{prevMonthName}</span>
                </button>

                <div className="gt-cal-center-box">
                  {formattedSelectedDate}
                </div>

                <button
                  type="button"
                  className="gt-cal-nav-btn"
                  onClick={handleNextMonth}
                  aria-label={`Next month, ${nextMonthName}`}
                >
                  <span>{nextMonthName}</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Quick controls & legend */}
              <div className="gt-cal-quick-controls">
                <div className="gt-cal-legend">
                  <div className="gt-cal-legend-item">
                    <span className="gt-legend-color selected" />
                    <span>Selected Date</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-legend-color event" />
                    <span>Special Monastic Ceremony</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="gt-cal-reset-btn"
                  onClick={handleResetToDesign}
                  title="Reset to August 2026 design view"
                >
                  Reset to August 2026
                </button>
              </div>

              {/* 7-Column Grid */}
              <div className="gt-cal-grid" role="grid" aria-label="Monastic Calendar Grid">
                {/* Header Row */}
                {DAY_NAMES.map((dayName) => (
                  <div key={dayName} className="gt-cal-header-cell" role="columnheader">
                    {dayName}
                  </div>
                ))}

                {/* Day Cells */}
                {calendarDays.map((cell, idx) => {
                  const isSelected = cell.dateKey === selectedDateKey;
                  const hasEvents = cell.events.length > 0;

                  return (
                    <div
                      key={idx}
                      role="gridcell"
                      tabIndex={0}
                      className={`gt-cal-cell ${cell.isOtherMonth ? 'other-month' : 'current-month'} ${isSelected ? 'selected-day' : ''}`}
                      onClick={() => {
                        setSelectedDateKey(cell.dateKey);
                        if (cell.isOtherMonth) {
                          setCurrentMonth(cell.month);
                          setCurrentYear(cell.year);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedDateKey(cell.dateKey);
                        }
                      }}
                      title={`${cell.dayNum} ${MONTH_NAMES[cell.month]} ${cell.year}${hasEvents ? ` • ${cell.events[0].title}` : ''}`}
                    >
                      <div className="gt-cal-cell-top">
                        <span className="gt-cal-day-number">{cell.dayNum}</span>
                        {hasEvents && (
                          <div className="gt-cal-event-indicator">
                            <span className="gt-cal-dot" />
                          </div>
                        )}
                      </div>

                      {hasEvents && (
                        <div className="gt-cal-cell-events">
                          <span className="gt-cal-micro-tag">
                            {cell.events[0].category}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Interactive Selected Day Details Card */}
              <div className="gt-cal-selected-info-card">
                <div className="gt-cal-selected-header">
                  <div className="gt-cal-selected-date-text">
                    {formattedSelectedDate}
                  </div>
                  {selectedDayEvents.length > 0 && selectedDayEvents[0].tibetanLunar && (
                    <span className="gt-cal-tibetan-lunar-badge">
                      {selectedDayEvents[0].tibetanLunar}
                    </span>
                  )}
                </div>

                {selectedDayEvents.length > 0 ? (
                  <div className="gt-cal-day-events-list">
                    {selectedDayEvents.map((ev) => (
                      <div key={ev.id} className="gt-cal-event-row">
                        <div className="gt-cal-event-time">
                          <Clock size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                          {ev.time.split('&')[0].trim()}
                        </div>
                        <div className="gt-cal-event-body">
                          <h4>{ev.title}</h4>
                          <p>{ev.description}</p>
                          <div style={{ marginTop: 8, fontSize: '13px', color: '#2778A7', display: 'flex', gap: 16 }}>
                            <span><strong>Venue:</strong> {ev.venue}</span>
                            <span><strong>Access:</strong> {ev.access}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="gt-cal-no-events">
                    Daily monastic prayers, morning meditation at 05:30 AM, and afternoon dialectical debates at 04:00 PM are conducted daily at Tsuklakhang. Click on dates marked with red dots (such as August 6th, 15th, 21st, 29th) to view special ceremonies and public pujas.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. UPCOMING PROGRAMMES SECTION (Figma Frame 2147236792: Warm Cream with Dharmachakra Watermark)
            ==================================================================== */}
        <section className="gt-programmes-upcoming-section">
          {/* Watermark Dharmachakra on the right side */}
          <div className="gt-upcoming-watermark-wrap" aria-hidden="true">
            <img
              src="/images/programmes/dharma-cakra-gold.png"
              alt=""
              className="gt-upcoming-watermark-img"
            />
          </div>

          <div className="gyuto-container">
            <div className="gt-upcoming-inner">
              <div className="gt-upcoming-header-group">
                <h2 className="gt-upcoming-title">Upcoming Programmes</h2>
                <p className="gt-upcoming-sub">
                  Explore the monastery's upcoming teachings, ceremonies, retreats, and community events.
                </p>
              </div>

              {/* 3 Programme Cards Stack */}
              <div className="gt-upcoming-cards-stack">
                {UPCOMING_PROGRAMMES.map((item, idx) => (
                  <article key={`${item.id}-${idx}`} className="gt-programme-card">
                    {/* Left Column: Date Badge */}
                    <div className="gt-pcard-date-col">
                      <span className="gt-pdate-month">{item.month}</span>
                      <span className="gt-pdate-day">{item.day}</span>
                      <span className="gt-pdate-year">{item.year}</span>
                    </div>

                    {/* Vertical Divider Line */}
                    <div className="gt-pcard-divider" aria-hidden="true" />

                    {/* Right Column: Title, Description & Action */}
                    <div className="gt-pcard-body-col">
                      <h3 className="gt-pcard-title">{item.title}</h3>
                      <p className="gt-pcard-desc">{item.desc}</p>
                      <button
                        type="button"
                        className="gt-pcard-learn-btn"
                        onClick={() => {
                          const ev = MONASTERY_EVENTS_DATA[item.dateKey]?.[0] || {
                            title: item.title,
                            time: '06:00 AM - 05:00 PM',
                            venue: item.venue,
                            category: item.category,
                            access: 'Open to All Respectful Visitors',
                            description: item.desc,
                            guidelines: 'Please dress conservatively with covered shoulders and knees. Photography inside the inner prayer hall is restricted during active ceremonies.'
                          };
                          setActiveModalEvent({ ...ev, dateStr: `${item.month} ${item.day}, ${item.year}` });
                        }}
                      >
                        <span>LEARN MORE</span>
                        <svg width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="gt-pcard-learn-arrow" aria-hidden="true">
                          <path d="M0.761194 4.84419C0.340798 4.84419 0 5.18499 0 5.60538C0 6.02578 0.340798 6.36658 0.761194 6.36658V5.60538V4.84419ZM0.761194 5.60538V6.36658H33.2388V5.60538V4.84419H0.761194V5.60538ZM33.7771 6.14363C34.0743 5.84636 34.0743 5.3644 33.7771 5.06714L28.9328 0.222927C28.6356 -0.0743383 28.1536 -0.0743383 27.8564 0.222927C27.5591 0.520192 27.5591 1.00215 27.8564 1.29942L32.1623 5.60538L27.8564 9.91134C27.5591 10.2086 27.5591 10.6906 27.8564 10.9878C28.1536 11.2851 28.6356 11.2851 28.9328 10.9878L33.7771 6.14363Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. DEPARTMENTS ACROSS THE YEAR SECTION (Figma Frame 113)
            ==================================================================== */}
        <DepartmentsAcrossYear lang="en" className="gt-timeline-white" />

        {/* ====================================================================
            5. BEFORE YOU ATTEND SECTION (Warm Golden Background with Map)
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
                      src="/images/gyuto-maps-location-real.png" 
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
            6. SUPPORT THE CONTINUITY OF THE TRADITION (Universal Frame 625810)
            ==================================================================== */}
        <SupportSection lang="en" onNavigate={onNavigate} />
      </main>

      {/* ====================================================================
          PROGRAMME MODAL (Opens when clicking LEARN MORE)
          ==================================================================== */}
      {activeModalEvent && (
        <div 
          className="gt-modal-backdrop" 
          onClick={() => setActiveModalEvent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="gt-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="gt-modal-header">
              <div>
                <h3 className="gt-modal-title">{activeModalEvent.title}</h3>
                <span className="gt-modal-date-tag">
                  {activeModalEvent.dateStr || formattedSelectedDate} • {activeModalEvent.category}
                </span>
              </div>
              <button 
                type="button" 
                className="gt-modal-close-btn" 
                onClick={() => setActiveModalEvent(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            <div className="gt-modal-body">
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">Time & Schedule:</span>
                <span>{activeModalEvent.time}</span>
              </div>
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">Location:</span>
                <span>{activeModalEvent.venue}</span>
              </div>
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">Participation:</span>
                <span>{activeModalEvent.access}</span>
              </div>
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">Description:</span>
                <span>{activeModalEvent.description}</span>
              </div>
              {activeModalEvent.guidelines && (
                <div className="gt-modal-detail-row" style={{ marginTop: 12, padding: 12, backgroundColor: '#FFFDF6', borderLeft: '3px solid #E5C583' }}>
                  <span className="gt-modal-label">Visitor Guidelines:</span>
                  <span>{activeModalEvent.guidelines}</span>
                </div>
              )}
            </div>

            <div className="gt-modal-footer">
              <button
                type="button"
                className="gt-cal-reset-btn"
                onClick={() => setActiveModalEvent(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="gt-attend-contact-btn"
                style={{ padding: '8px 18px', fontSize: '12px' }}
                onClick={() => {
                  setActiveModalEvent(null);
                  onNavigate && onNavigate('contact');
                }}
              >
                Inquire With Administration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}
