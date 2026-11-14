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
import { CALENDAR_METADATA, WEEKDAYS, MONTHS_DATA, getTodayCalendarInfo, MONTHLY_UPCOMING_PROGRAMMES } from '../data/monasteryCalendar2026';
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

export default function Programmes({ onSwitchLanguage, onNavigate }) {
  // Determine current day info (defaults to today's date in 2026-2027 calendar)
  const todayInfo = getTodayCalendarInfo();
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(todayInfo.monthIdx);
  const [selectedDay, setSelectedDay] = useState(todayInfo.dayObj);
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const currentMonthData = MONTHS_DATA[selectedMonthIdx];

  const handlePrevMonth = () => {
    const newIdx = selectedMonthIdx === 0 ? MONTHS_DATA.length - 1 : selectedMonthIdx - 1;
    setSelectedMonthIdx(newIdx);
    setSelectedDay(MONTHS_DATA[newIdx].days[0]);
  };

  const handleNextMonth = () => {
    const newIdx = selectedMonthIdx === MONTHS_DATA.length - 1 ? 0 : selectedMonthIdx + 1;
    setSelectedMonthIdx(newIdx);
    setSelectedDay(MONTHS_DATA[newIdx].days[0]);
  };

  const handleSelectMonth = (idx) => {
    setSelectedMonthIdx(idx);
    setSelectedDay(MONTHS_DATA[idx].days[0]);
  };

  const handleJumpToToday = () => {
    setSelectedMonthIdx(todayInfo.monthIdx);
    setSelectedDay(todayInfo.dayObj);
  };

  // Trailing empty slots to complete the final 7-day row
  const startOffset = currentMonthData.startDayOfWeek;
  const totalDays = currentMonthData.days.length;
  const remainder = (startOffset + totalDays) % 7;
  const trailingEmptyCount = remainder === 0 ? 0 : 7 - remainder;

  const selectedYear = selectedDay.gregMonth === 'Jan' || (selectedDay.gregMonth === 'Feb' && currentMonthData.monthIndex === 12)
    ? '2027'
    : '2026';
  const formattedSelectedDate = `${selectedDay.gregDay} ${selectedDay.gregMonth} ${selectedYear}`;

  // Derive upcoming events dynamically based on currently active/selected calendar month
  const upcomingEvents = MONTHLY_UPCOMING_PROGRAMMES[currentMonthData.monthIndex] || UPCOMING_PROGRAMMES;

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
            2. ANNUAL MONASTIC CALENDAR SECTION (Authentic 12 Months from PDF)
            ==================================================================== */}
        <section className="gt-calendar-section" id="calendar">
          <div className="gyuto-container">
            <div className="gt-calendar-header-group">
              <h2 className="gt-calendar-section-title">Annual Monastic Calendar</h2>
              <p className="gt-calendar-section-sub">
                Gyuto Tantric Monastery follows the authentic Tibetan lunar calendar (བོད་རྒྱལ་ལོ་ ༢༡༥༣ རབ་བྱུང་ ༡༧ པའི་མེ་རྟ་ལོ། — 17th Rabjung Fire Horse Year 2026–2027). Explore monthly ceremonies, Sojong confession days, Naga days, tantric rituals, and community pujas across all twelve months.
              </p>
            </div>

            <div className="gt-calendar-shell">
              {/* Month & Tibetan Year Title */}
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <h3 className="gt-cal-month-title" style={{ marginBottom: 4 }}>
                  {currentMonthData.tibetanMonth} {currentMonthData.tibetanMonthSub}
                </h3>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#A8833D', letterSpacing: '0.02em' }}>
                  {currentMonthData.westernRange} • {CALENDAR_METADATA.tibetanElementYearEn}
                </div>
              </div>

              {/* Blue Navigation Bar with Center Date Display */}
              <div className="gt-cal-nav-bar">
                <button
                  type="button"
                  className="gt-cal-nav-btn"
                  onClick={handlePrevMonth}
                  aria-label="Previous Tibetan Month"
                >
                  <ChevronLeft size={16} />
                  <span>Prev Month</span>
                </button>

                <div className="gt-cal-center-box">
                  <span style={{ fontFamily: 'var(--figma-font-tibetan, serif)', fontSize: '15px', marginRight: 6 }}>
                    {currentMonthData.tibetanMonth}
                  </span>
                  <span>({currentMonthData.westernRange})</span>
                </div>

                <button
                  type="button"
                  className="gt-cal-nav-btn"
                  onClick={handleNextMonth}
                  aria-label="Next Tibetan Month"
                >
                  <span>Next Month</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Quick controls & legend */}
              <div className="gt-cal-quick-controls">
                <div className="gt-cal-legend">
                  <div className="gt-cal-legend-item">
                    <span className="gt-legend-color selected" />
                    <span>Selected Day</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-legend-color today-marker" />
                    <span>Today</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-cal-badge sojong" style={{ fontSize: '10px' }}>གསོ་སྦྱོང༌ Sojong</span>
                    <span>Purification & Confession</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-cal-badge naga" style={{ fontSize: '10px' }}>ཀླུ་ཐེབས Naga</span>
                    <span>Water Spirits Offering Day</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-cal-event-banner" style={{ margin: 0, padding: '2px 6px' }}>Ceremony</span>
                    <span>Monastic Event / Holy Day</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <button
                    type="button"
                    className="gt-cal-jump-today-btn"
                    onClick={handleJumpToToday}
                    title="Jump to today's date"
                  >
                    <span>Today ({todayInfo.dayObj.gregDay} {todayInfo.dayObj.gregMonth})</span>
                  </button>

                  <select
                    value={selectedMonthIdx}
                    onChange={(e) => handleSelectMonth(Number(e.target.value))}
                    className="gt-cal-month-select"
                    aria-label="Select Tibetan Month"
                  >
                    {MONTHS_DATA.map((m, idx) => (
                      <option key={m.monthIndex} value={idx}>
                        {m.tibetanMonth} ({m.westernRange})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 7-Column Grid */}
              <div className="gt-cal-grid" role="grid" aria-label="Monastic Calendar Grid">
                {/* Header Row */}
                {WEEKDAYS.map((wd) => (
                  <div key={wd.key} className="gt-cal-header-cell" role="columnheader">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span>{wd.shortEn}</span>
                      <span style={{ fontFamily: 'var(--figma-font-tibetan, serif)', fontSize: '12px', color: '#888' }}>
                        {wd.shortTb}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Leading empty slots for starting day of week */}
                {Array.from({ length: startOffset }).map((_, i) => (
                  <div key={`empty-lead-${i}`} className="gt-cal-cell empty-slot" role="gridcell" aria-hidden="true" />
                ))}

                {/* Current Month Tibetan Day Cells */}
                {currentMonthData.days.map((day, idx) => {
                  const isSelected = selectedDay && 
                    selectedDay.tibNum === day.tibNum && 
                    selectedDay.gregDay === day.gregDay && 
                    selectedDay.gregMonth === day.gregMonth;

                  const isToday = todayInfo.dayObj && 
                    day.gregDay === todayInfo.dayObj.gregDay && 
                    day.gregMonth === todayInfo.dayObj.gregMonth && 
                    currentMonthData.monthIndex === MONTHS_DATA[todayInfo.monthIdx].monthIndex;

                  return (
                    <div
                      key={`day-${idx}-${day.gregDay}`}
                      role="gridcell"
                      tabIndex={0}
                      className={`gt-cal-cell current-month ${isSelected ? 'selected-day' : ''} ${isToday ? 'is-today' : ''}`}
                      onClick={() => setSelectedDay(day)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedDay(day);
                        }
                      }}
                      title={`${isToday ? '[TODAY] ' : ''}Tibetan ${day.tibNum} • ${day.gregDay} ${day.gregMonth}${day.tag ? ` • ${day.tag}` : ''}`}
                    >
                      <div className="gt-cal-cell-inner">
                        <div className="gt-cal-date-row">
                          <span className="gt-cal-greg-num">
                            {day.gregDay}
                            <span className="gt-cal-greg-month-sub">{day.gregMonth}</span>
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {isToday && (
                              <span className="gt-cal-today-pill" title="Today">
                                TODAY
                              </span>
                            )}
                            <span className="gt-cal-tib-num" title={`Tibetan lunar date: ${day.tibNum}`}>
                              {day.tibNum}
                            </span>
                          </div>
                        </div>

                        <div className="gt-cal-badges-wrap">
                          {day.sojong && (
                            <span className="gt-cal-badge sojong" title="Purification & Confession Day (གསོ་སྦྱོང༌)">
                              གསོ་སྦྱོང༌
                            </span>
                          )}
                          {day.naga && (
                            <span className="gt-cal-badge naga" title="Naga Day (ཀླུ་ཐེབས)">
                              ཀླུ་ཐེབས
                            </span>
                          )}
                          {day.chad && (
                            <span className="gt-cal-badge chad" title={day.note || 'Omitted Day'}>
                              {day.chad}
                            </span>
                          )}
                          {day.lhag && (
                            <span className="gt-cal-badge lhag" title={day.note || 'Duplicated Day'}>
                              {day.lhag}
                            </span>
                          )}
                          {day.inauspicious && (
                            <span className="gt-cal-badge inauspicious" title="Inauspicious">
                              {day.inauspicious}
                            </span>
                          )}
                          {day.element && !day.sojong && !day.naga && (
                            <span className="gt-cal-badge astro">
                              {day.element}
                            </span>
                          )}
                        </div>

                        {day.tag && (
                          <div className="gt-cal-event-banner" title={day.tag}>
                            {day.tag}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Trailing empty slots to fill the final row */}
                {Array.from({ length: trailingEmptyCount }).map((_, i) => (
                  <div key={`empty-trail-${i}`} className="gt-cal-cell empty-slot" role="gridcell" aria-hidden="true" />
                ))}
              </div>

              {/* Interactive Selected Day Details Card */}
              {selectedDay && (
                <div className="gt-cal-selected-info-card">
                  <div className="gt-cal-selected-header">
                    <div>
                      <div className="gt-cal-selected-date-text">
                        {formattedSelectedDate}
                      </div>
                      <div style={{ fontSize: '14px', color: '#6C665D', marginTop: '2px' }}>
                        Tibetan Lunar Day {selectedDay.tibNum} — {currentMonthData.tibetanMonth} {currentMonthData.tibetanMonthSub}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                      {todayInfo.dayObj && 
                       selectedDay.gregDay === todayInfo.dayObj.gregDay && 
                       selectedDay.gregMonth === todayInfo.dayObj.gregMonth && 
                       currentMonthData.monthIndex === MONTHS_DATA[todayInfo.monthIdx].monthIndex && (
                        <span className="gt-cal-today-pill" style={{ fontSize: '11px', padding: '3px 8px' }}>
                          TODAY
                        </span>
                      )}
                      {selectedDay.sojong && (
                        <span className="gt-cal-badge sojong" style={{ fontSize: '12px', padding: '4px 10px' }}>
                          གསོ་སྦྱོང༌ Sojong Day (Confession & Vows Restoration)
                        </span>
                      )}
                      {selectedDay.naga && (
                        <span className="gt-cal-badge naga" style={{ fontSize: '12px', padding: '4px 10px' }}>
                          ཀླུ་ཐེབས Naga Day (Offerings to Water Spirits)
                        </span>
                      )}
                      {selectedDay.chad && (
                        <span className="gt-cal-badge chad" style={{ fontSize: '12px', padding: '4px 10px' }}>
                          {selectedDay.chad} (Omitted Lunar Day)
                        </span>
                      )}
                      {selectedDay.lhag && (
                        <span className="gt-cal-badge lhag" style={{ fontSize: '12px', padding: '4px 10px' }}>
                          {selectedDay.lhag} (Duplicated Lunar Day)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="gt-cal-day-events-list">
                    {selectedDay.tag ? (
                      <div className="gt-cal-event-row">
                        <div className="gt-cal-event-time">
                          <Sparkles size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle', color: '#92060F' }} />
                          Special
                        </div>
                        <div className="gt-cal-event-body">
                          <h4>{selectedDay.tag}</h4>
                          <p>
                            {selectedDay.note || `Auspicious monastic observance and sacred ceremonies held at Gyuto Tantric Monastery for ${selectedDay.tag}.`}
                          </p>
                          {selectedDay.element && (
                            <div style={{ marginTop: 6, fontSize: '13px', color: '#554433' }}>
                              <strong>Astrological Marker:</strong> {selectedDay.element}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="gt-cal-event-row" style={{ background: '#FAF9F6', borderLeftColor: '#A8833D' }}>
                        <div className="gt-cal-event-time" style={{ color: '#A8833D' }}>
                          <Clock size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                          Daily
                        </div>
                        <div className="gt-cal-event-body">
                          <h4 style={{ color: '#2D2A28' }}>Daily Monastic Assembly & Practice</h4>
                          <p>
                            Morning prayers and sadhana meditation at 05:30 AM, scripture memorization, and afternoon dialectical debates at 04:00 PM at Main Assembly Tsuklakhang Hall.
                            {selectedDay.element ? ` Astrological element of the day: ${selectedDay.element}.` : ''}
                            {selectedDay.note ? ` Note: ${selectedDay.note}.` : ''}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Monthly Monastic Observances from Official Publication */}
              {currentMonthData.monthlyEvents && currentMonthData.monthlyEvents.length > 0 && (
                <div className="gt-cal-monthly-events-box">
                  <h3 className="gt-cal-monthly-events-title">
                    <Sparkles size={18} />
                    <span>Monthly Monastic Observances ({currentMonthData.westernRange})</span>
                  </h3>
                  <div className="gt-cal-monthly-grid">
                    <div className="gt-cal-monthly-col">
                      <h4>Tibetan Monastic Schedule (ཟླ་རེའི་ཆོས་ཕྱོགས་མཛད་རིམ།)</h4>
                      <ul className="gt-cal-monthly-list">
                        {currentMonthData.monthlyEvents.map((ev, i) => (
                          <li key={`tb-${i}`} className="gt-cal-monthly-item is-tb">
                            <span className="gt-cal-monthly-dot" />
                            <span>{ev.tb}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="gt-cal-monthly-col">
                      <h4>English Description & Observance Details</h4>
                      <ul className="gt-cal-monthly-list">
                        {currentMonthData.monthlyEvents.map((ev, i) => (
                          <li key={`en-${i}`} className="gt-cal-monthly-item">
                            <span className="gt-cal-monthly-dot" />
                            <span>{ev.en}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
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
                <h2 className="gt-upcoming-title">Upcoming Events</h2>
                <p className="gt-upcoming-sub">
                  Monastic celebrations, ceremonies, and special assemblies for {currentMonthData.westernRange} ({currentMonthData.tibetanMonth}).
                </p>
              </div>

              {/* 3 Programme Cards Stack - Updates automatically per selected month */}
              <div className="gt-upcoming-cards-stack">
                {upcomingEvents.map((item, idx) => (
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
                            venue: item.venue || 'Main Assembly Tsuklakhang Hall',
                            category: item.category || 'Monastic Observance',
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
                      src="/images/programmes/programmes-map.png" 
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
