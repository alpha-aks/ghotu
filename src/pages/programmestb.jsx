import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import DepartmentsAcrossYear from '../components/DepartmentsAcrossYear';
import { 
  EndlessKnot, 
  DharmachakraWatermark,
  TibetanVajra 
} from '../components/MonasteryIcons';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  X, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CALENDAR_METADATA, WEEKDAYS, MONTHS_DATA, getTodayCalendarInfo, MONTHLY_UPCOMING_PROGRAMMES } from '../data/monasteryCalendar2026';
import './programmes.css';

// Tibetan Month Names
const TIBETAN_MONTH_NAMES = [
  'ཕྱི་ཟླ་ ༡ པོ།', 'ཕྱི་ཟླ་ ༢ པ།', 'ཕྱི་ཟླ་ ༣ པ།', 'ཕྱི་ཟླ་ ༤ པ།', 'ཕྱི་ཟླ་ ༥ པ།', 'ཕྱི་ཟླ་ ༦ པ།',
  'ཕྱི་ཟླ་ ༧ པ།', 'ཕྱི་ཟླ་ ༨ པ།', 'ཕྱི་ཟླ་ ༩ པ།', 'ཕྱི་ཟླ་ ༡༠ པ།', 'ཕྱི་ཟླ་ ༡༡ པ།', 'ཕྱི་ཟླ་ ༡༢ པ།'
];

const TIBETAN_DAY_NAMES = [
  'ཉི་མ།', 'ཟླ་བ།', 'མིག་དམར།', 'ལྷག་པ།', 'ཕུར་བུ།', 'པ་སངས།', 'སྤེན་པ།'
];

const DAY_NAMES = TIBETAN_DAY_NAMES;

// Tibetan Event Data
const TIBETAN_EVENTS_DATA = {
  '2026-08-06': [
    {
      id: 'tb-ev-aug-06',
      title: 'རྒྱུད་སྟོད་དབྱངས་རྟ་དང་གསང་སྔགས་ཆོས་སྤྱོད་ཀྱི་སྒྲུབ་པ།',
      time: 'སྔ་དྲོ་ ༠༦:༠༠ - ༡༢:༣༠ དང་ ཕྱི་དྲོ་ ༠༣:༠༠ - ༠༦:༣༠',
      venue: 'གཙུག་ལག་ཁང་ཆེན་མོ།',
      category: 'གསང་སྔགས་སྒྲུབ་པ།',
      access: 'དད་ལྡན་མང་ཚོགས་ཞུགས་ཆོག',
      tibetanLunar: 'བོད་ཟླ་ ༦ ཚེས་ ༢༤',
      description: 'དགེ་འདུན་འདུས་པ་རྒྱ་མཚོས་ཆོས་གོས་རྣམ་གསུམ་བཞེས་ཏེ་གསང་འདུས་དང་བདེ་མཆོག་འཇིགས་བྱེད་ཀྱི་དབྱངས་རྟ་དམིགས་བསལ་གྱིས་གསུང་འདོན་དང་དཀྱིལ་འཁོར་མཆོད་འབུལ་མཛད་པ།',
      guidelines: 'གཙུག་ལག་ཁང་ནང་ཞུགས་སྐབས་ལྷམ་ཕུད་དགོས་པ་དང་། སྐུ་གཟུགས་ཀྱི་ཆ་ཤས་སྤྱོད་ལམ་དང་མཐུན་པའི་གྱོན་གོས་གྱོན་དགོས།'
    }
  ],
  '2026-08-15': [
    {
      id: 'tb-ev-aug-15',
      title: 'ཉ་གང་གསོ་སྦྱོང་དང་སྨན་བླའི་སྨོན་ལམ་ཆེན་མོ།',
      time: 'སྔ་དྲོ་ ༠༧:༣༠ - ༡༡:༣༠',
      venue: 'ལྷ་ཁང་གོང་མ།',
      category: 'མང་ཚོགས་མཆོད་འབུལ།',
      access: 'ཀུན་ལ་སྒོ་ཕྱེས།',
      tibetanLunar: 'བོད་ཟླ་ ༦ ཚེས་ ༡༥ (ཉ་གང་།)',
      description: 'ཟླ་རེའི་གསོ་སྦྱོང་དང་བཅས་འགྲོ་བ་ཀུན་གྱི་ནད་མུག་ཞི་ཞིང་ཚེ་བསོད་རྒྱས་པའི་ཆེད་དུ་བཅོམ་ལྡན་འདས་སྨན་གྱི་བླ་མའི་མཆོད་ཆོག་རྒྱས་པ་འཚོགས་པ།',
      guidelines: 'མེ་ཏོག་དང་སྤོས་དང་མར་མེ་སོགས་མཆོད་རྫས་དྭངས་བླངས་ཀྱིས་འབུལ་ཆོག'
    }
  ],
  '2026-08-21': [
    {
      id: 'tb-ev-aug-21',
      title: 'དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད་ཀྱི་བདག་འཇུག་ཆེན་མོ།',
      time: 'སྔ་དྲོ་ ༠༩:༠༠ - ཕྱི་དྲོ་ ༠༤:༣༠',
      venue: 'རྒྱུད་པ་གྲྭ་ཚང་གི་ནང་སྒྲུབ་ཁང་།',
      category: 'གསང་སྔགས་ཆོས་སྤྱོད།',
      access: 'གྲྭ་ཚང་གི་དགེ་འདུན་པ་ཁོ་ན།',
      tibetanLunar: 'བོད་ཟླ་ ༦ ཚེས་ ༢༡',
      description: 'རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཡི་དམ་གཙོ་བོ་དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད་དཔའ་བོ་གཅིག་པའི་བདག་འཇུག་ཆེན་མོའི་སྒྲུབ་པ་མཛད་པ།',
      guidelines: 'གྲྭ་ཚང་གི་ནང་དོན་སྒྲིག་གཞི་ལྟར་དགེ་འདུན་པ་ཁོ་ནས་གནང་བ་ཡིན།'
    }
  ],
  '2026-08-29': [
    {
      id: 'tb-ev-aug-29',
      title: 'ཆོས་སྐྱོང་མགོན་པོ་ཕྱག་དྲུག་པའི་བསྐང་གསོ་ཆེན་མོ།',
      time: 'ཕྱི་དྲོ་ ༠༢:༠༠ - ༠༦:༠༠',
      venue: 'མགོན་ཁང་ཆེན་མོ།',
      category: 'ཆོས་སྐྱོང་བསྐང་གསོ།',
      access: 'བྱིན་རླབས་ཞུ་བར་ཕེབས་ཆོག',
      tibetanLunar: 'བོད་ཟླ་ ༦ ཚེས་ ༢༩ (དགུ་གཏོར།)',
      description: 'བསྟན་སྲུང་དམ་ཅན་རྒྱ་མཚོའི་ཐུགས་དམ་བསྐང་ཞིང་བར་ཆད་ཀུན་སེལ་ཆེད་དུང་ཆེན་དང་རོལ་མོའི་སྒྲ་དབྱངས་བཅས་བསྐང་གསོ་གནང་བ།',
      guidelines: 'མཛད་སྒོ་གྲུབ་རྗེས་བྱིན་རྟེན་དང་སྲུང་སྐུད་བགོ་འགྲེམས་ཞུ་རྒྱུ།'
    }
  ],
  '2026-02-18': [
    {
      id: 'tb-ev-feb-18',
      title: 'བོད་ཀྱི་ལོ་གསར་ (ལོ་སར།)',
      time: 'སྔ་དྲོ་ ༠༦:༠༠ - ཕྱི་དྲོ་ ༠༥:༠༠',
      venue: 'དགོན་པའི་གཙུག་ལག་ཁང་དང་ཁྱམས་ར།',
      category: 'ལོ་གསར་དུས་ཆེན།',
      access: 'མི་མང་ཀུན་ལ་སྒོ་ཕྱེས།',
      tibetanLunar: 'བོད་ཟླ་ ༡ ཚེས་ ༡',
      description: 'བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ཟླ་ཐོའི་ལོ་འགོ་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐྱོང་དང་གཏོར་རྒྱག་དང་། ཆོས་གཞུང་གསུང་འདོན་དང་རིག་གཞུང་གསར་བརྗེས་བཅས་འཚོགས་ཡོད། ཆོས་སྐྱོང་རྒྱུགས་པ་དང་དད་ལྡན་སྤྱི་གཞུང་འགྲོ་མཁན་རྣམས་ཞུགས་ཆོག',
      guidelines: 'ལོ་གསར་གྱི་ཁ་བཏགས་དང་གྲོ་སོ་ཕྱེ་མར་སོགས་ཀྱིས་བསུ་བ་ཞུ་རྒྱུ།'
    }
  ]
};

// 3 Highlighted Upcoming Programmes in Tibetan
const TIBETAN_UPCOMING_PROGRAMMES = [
  {
    id: 'tb-p1',
    month: 'ཕྱི་ཟླ་',
    day: '༢ ཚེས་',
    year: '༡༨',
    dateKey: '2026-02-18',
    title: 'བོད་ཀྱི་ལོ་གསར་སྲུང་བརྩི།',
    desc: 'ལོ་གསར་ནི་བོད་ཀྱི་ལོ་ཐོའི་ལོ་མགོ་མཚོན་བྱེད་ཡིན་ལ། དགོན་པ་འདིས་ཉིན་གསུམ་གྱི་རིང་ཆོས་ཕྱོགས་ཀྱི་མཛད་སྒོ་དང་སྤྱི་ཚོགས་ཀྱི་མཛད་སྒོ་བཅས་གོ་སྒྲིག་གནང་ཏེ་ནང་པའི་ཆོས་དང་རིག་གཞུང་དར་ཞིང་རྒྱས་པའི་དགའ་སྟོན་རྟེན་འབྲེལ་སྲུང་བརྩི་ཞུ་བར་བྱེད།',
    category: 'ལོ་གསར་དུས་ཆེན།',
    venue: 'དགོན་པའི་གཙུག་ལག་ཁང་དང་ཁྱམས་ར།'
  },
  {
    id: 'tb-p2',
    month: 'ཕྱི་ཟླ་',
    day: '༥ ཚེས་',
    year: '༣༡',
    dateKey: '2026-05-31',
    title: 'ས་ག་ཟླ་བའི་དུས་ཆེན།',
    desc: 'སྟོན་པ་སངས་རྒྱས་ཀྱི་སྐུ་བལྟམས་པ་དང་། སངས་རྒྱས་པ། མྱ་ངན་ལས་འདས་པའི་དུས་ཆེན་ཁྱད་པར་ཅན། དགེ་འདུན་འདུས་པ་རྒྱ་མཚོས་སྨོན་ལམ་ཆེན་མོ་དང་མཆོད་འབུལ་རྒྱ་ཆེན་གནང་བ།',
    category: 'དུས་ཆེན་ཁྱད་པར་ཅན།',
    venue: 'གཙུག་ལག་ཁང་ཆེན་མོ།'
  },
  {
    id: 'tb-p3',
    month: 'ཕྱི་ཟླ་',
    day: '༧ ཚེས་',
    year: '༡༨',
    dateKey: '2026-07-18',
    title: 'ཆོས་འཁོར་དུས་ཆེན།',
    desc: 'སྟོན་པ་ཤཱཀྱ་ཐུབ་པས་བདེན་བཞིའི་ཆོས་འཁོར་ཐོག་མར་བསྐོར་བའི་དུས་ཆེན་ཁྱད་པར་ཅན། ཆོས་ཕྱོགས་ཀྱི་བགྲོ་གླེང་དང་གསུང་ཆོས་གནང་བ།',
    category: 'ཆོས་ཕྱོགས་མཛད་སྒོ།',
    venue: 'རྒྱུད་སྟོད་རྩོད་རྭ་ཆེན་མོ།'
  }
];

// Seasonal Departments Rhythm in Tibetan
const TIBETAN_SEASONAL_RHYTHM = [
  {
    id: 'tb-spring',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'དཔྱིད་ཀ',
    activity: 'འཆད་ཉན་དང་རྩོད་པ།'
  },
  {
    id: 'tb-summer',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'དབྱར་ཁ།',
    activity: 'མཚམས་དང་སྒྲུབ་པ།'
  },
  {
    id: 'tb-autumn',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'སྟོན་ཀ',
    activity: 'རྒྱུགས་སྤྲོད།'
  },
  {
    id: 'tb-winter',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'དགུན་ཁ།',
    activity: 'ཆོ་ག་ཕྱག་ལེན་དང་དུས་མཆོད་སྲུང་བརྩི།'
  }
];

export default function ProgrammesTb({ onSwitchLanguage, onNavigate }) {
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

  // Trailing empty slots to complete final 7-day row
  const startOffset = currentMonthData.startDayOfWeek;
  const totalDays = currentMonthData.days.length;
  const remainder = (startOffset + totalDays) % 7;
  const trailingEmptyCount = remainder === 0 ? 0 : 7 - remainder;

  const selectedYear = selectedDay.gregMonth === 'Jan' || (selectedDay.gregMonth === 'Feb' && currentMonthData.monthIndex === 12)
    ? '༢༠༢༧'
    : '༢༠༢༦';
  const formattedSelectedDate = `ཕྱི་ལོ་ ${selectedYear} ཟླ་ ${selectedDay.gregMonth} ཚེས་ ${selectedDay.gregDay} (བོད་ཚེས་ ${selectedDay.tibNum})`;

  // Derive upcoming events dynamically based on currently active/selected calendar month
  const upcomingEvents = MONTHLY_UPCOMING_PROGRAMMES[currentMonthData.monthIndex] || TIBETAN_UPCOMING_PROGRAMMES;

  return (
    <div className="gt-programmes-page tibetan-text">
      {/* 1. Header with 'PROGRAMMES' active in Tibetan */}
      <Header
        lang="tb"
        active="programmes"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-main-content">
        {/* ====================================================================
            1. HERO SECTION (Tibetan)
            ==================================================================== */}
        <section className="gt-programmes-hero">
          <div className="gt-programmes-hero-content">
            <h1 className="gt-programmes-hero-title">
              ལོ་འཁོར་གཅིག་གི་ཆོས་ཕྱོགས་མཛད་རིམ།
            </h1>
            <p className="gt-programmes-hero-sub">
              དགོན་པའི་ལོ་འཁོར་གཅིག་གི་ཆོས་ཕྱོགས་མཛད་རིམ་ལ་གཟིགས་རྟོག་གནང་རོགས།
            </p>
          </div>
        </section>

        {/* ====================================================================
            2. ANNUAL MONASTIC CALENDAR SECTION (Authentic 12 Months from PDF - Tibetan)
            ==================================================================== */}
        <section className="gt-calendar-section" id="calendar">
          <div className="gyuto-container">
            <div className="gt-calendar-header-group">
              <h2 className="gt-calendar-section-title">ལོ་ཐོ་དང་མཛད་རིམ།</h2>
              <p className="gt-calendar-section-sub">
                དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གཞུང་འབྲེལ་ལོ་ཐོ། (བོད་རྒྱལ་ལོ་ ༢༡༥༣ རབ་བྱུང་ ༡༧ པའི་མེ་རྟ་ལོ། — ཕྱི་ལོ་ ༢༠༢༦-༢༠༢༧) ཟླ་རེའི་ཆོས་ཕྱོགས་མཛད་རིམ་དང་། གསོ་སྦྱོང་། ཀླུ་ཐེབས། དུས་མཆོད་ཁག་གཤམ་གསལ་ལོ་ཐོ་ལས་གཟིགས་རྟོག་གནང་ཐུབ།
              </p>
            </div>

            <div className="gt-calendar-shell">
              {/* Month & Tibetan Year Title */}
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <h3 className="gt-cal-month-title" style={{ marginBottom: 4 }}>
                  {currentMonthData.tibetanMonth} {currentMonthData.tibetanMonthSub}
                </h3>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#A8833D', letterSpacing: '0.02em' }}>
                  {currentMonthData.westernRange} • {CALENDAR_METADATA.tibetanElementYear}
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
                  <span>ཟླ་བ་སྔོན་མ།</span>
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
                  <span>ཟླ་བ་རྗེས་མ།</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Quick controls & legend */}
              <div className="gt-cal-quick-controls">
                <div className="gt-cal-legend">
                  <div className="gt-cal-legend-item">
                    <span className="gt-legend-color selected" />
                    <span>གདམ་ཟིན་པའི་ཚེས།</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-legend-color today-marker" />
                    <span>དེ་རིང་ (Today)</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-cal-badge sojong" style={{ fontSize: '10px' }}>གསོ་སྦྱོང༌</span>
                    <span>གསོ་སྦྱོང་ཉིན་མོ།</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-cal-badge naga" style={{ fontSize: '10px' }}>ཀླུ་ཐེབས</span>
                    <span>ཀླུ་ཐེབས་ཉིན་མོ།</span>
                  </div>
                  <div className="gt-cal-legend-item">
                    <span className="gt-cal-event-banner" style={{ margin: 0, padding: '2px 6px' }}>མཛད་སྒོ།</span>
                    <span>དམིགས་བསལ་དུས་ཆེན།</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <button
                    type="button"
                    className="gt-cal-jump-today-btn"
                    onClick={handleJumpToToday}
                    title="དེ་རིང་གི་ཚེས་གྲངས་ལ་བསྐྱོད་པ།"
                  >
                    <span>དེ་རིང་ ({todayInfo.dayObj.gregDay} {todayInfo.dayObj.gregMonth})</span>
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
                      <span style={{ fontFamily: 'var(--figma-font-tibetan, serif)', fontSize: '14px' }}>
                        {wd.nameTb}
                      </span>
                      <span style={{ fontSize: '11px', color: '#888' }}>
                        {wd.shortEn}
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
                      title={`${isToday ? '[དེ་རིང་] ' : ''}བོད་ཚེས་ ${day.tibNum} • ${day.gregDay} ${day.gregMonth}${day.tag ? ` • ${day.tag}` : ''}`}
                    >
                      <div className="gt-cal-cell-inner">
                        <div className="gt-cal-date-row">
                          <span className="gt-cal-greg-num">
                            {day.gregDay}
                            <span className="gt-cal-greg-month-sub">{day.gregMonth}</span>
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {isToday && (
                              <span className="gt-cal-today-pill" title="དེ་རིང་ (Today)">
                                དེ་རིང་
                              </span>
                            )}
                            <span className="gt-cal-tib-num" title={`Tibetan lunar date: ${day.tibNum}`}>
                              {day.tibNum}
                            </span>
                          </div>
                        </div>

                        <div className="gt-cal-badges-wrap">
                          {day.sojong && (
                            <span className="gt-cal-badge sojong" title="གསོ་སྦྱོང་ཉིན་མོ།">
                              གསོ་སྦྱོང༌
                            </span>
                          )}
                          {day.naga && (
                            <span className="gt-cal-badge naga" title="ཀླུ་ཐེབས་ཉིན་མོ།">
                              ཀླུ་ཐེབས
                            </span>
                          )}
                          {day.chad && (
                            <span className="gt-cal-badge chad" title={day.note || 'ཚེས་ཆད།'}>
                              {day.chad}
                            </span>
                          )}
                          {day.lhag && (
                            <span className="gt-cal-badge lhag" title={day.note || 'ཚེས་ལྷག'}>
                              {day.lhag}
                            </span>
                          )}
                          {day.inauspicious && (
                            <span className="gt-cal-badge inauspicious" title="ཉི་ནག">
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
                        {currentMonthData.tibetanMonth} {currentMonthData.tibetanMonthSub} ཚེས་ {selectedDay.tibNum}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                      {todayInfo.dayObj && 
                       selectedDay.gregDay === todayInfo.dayObj.gregDay && 
                       selectedDay.gregMonth === todayInfo.dayObj.gregMonth && 
                       currentMonthData.monthIndex === MONTHS_DATA[todayInfo.monthIdx].monthIndex && (
                        <span className="gt-cal-today-pill" style={{ fontSize: '11px', padding: '3px 8px' }}>
                          དེ་རིང་
                        </span>
                      )}
                      {selectedDay.sojong && (
                        <span className="gt-cal-badge sojong" style={{ fontSize: '13px', padding: '4px 10px' }}>
                          གསོ་སྦྱོང་ཉིན་མོ།
                        </span>
                      )}
                      {selectedDay.naga && (
                        <span className="gt-cal-badge naga" style={{ fontSize: '13px', padding: '4px 10px' }}>
                          ཀླུ་ཐེབས་ཉིན་མོ།
                        </span>
                      )}
                      {selectedDay.chad && (
                        <span className="gt-cal-badge chad" style={{ fontSize: '13px', padding: '4px 10px' }}>
                          {selectedDay.chad} (ཚེས་ཆད།)
                        </span>
                      )}
                      {selectedDay.lhag && (
                        <span className="gt-cal-badge lhag" style={{ fontSize: '13px', padding: '4px 10px' }}>
                          {selectedDay.lhag} (ཚེས་ལྷག)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="gt-cal-day-events-list">
                    {selectedDay.tag ? (
                      <div className="gt-cal-event-row">
                        <div className="gt-cal-event-time">
                          <Sparkles size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle', color: '#92060F' }} />
                          དུས་ཆེན།
                        </div>
                        <div className="gt-cal-event-body">
                          <h4>{selectedDay.tag}</h4>
                          <p>
                            {selectedDay.note || `རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཆོས་ཕྱོགས་མཛད་རིམ་དང་དམིགས་བསལ་དུས་ཆེན་ ${selectedDay.tag} སྲུང་བརྩི་མཛད་པ།`}
                          </p>
                          {selectedDay.element && (
                            <div style={{ marginTop: 6, fontSize: '13px', color: '#554433' }}>
                              <strong>འབྱུང་ཁམས།:</strong> {selectedDay.element}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="gt-cal-event-row" style={{ background: '#FAF9F6', borderLeftColor: '#A8833D' }}>
                        <div className="gt-cal-event-time" style={{ color: '#A8833D' }}>
                          <Clock size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                          རྒྱུན་ལྡན།
                        </div>
                        <div className="gt-cal-event-body">
                          <h4 style={{ color: '#2D2A28' }}>རྒྱུན་ལྡན་ཆོས་སྤྱོད་དང་རྩོད་པའི་ཚོགས་པ།</h4>
                          <p>
                            ཉིན་རེའི་སྔ་དྲོ་ཆུ་ཚོད་ ༠༥:༣༠ ཐོག་ཆོས་སྤྱོད་གསུང་འདོན་དང་། དཔེ་ཁྲིད་བློ་འཛིན། ཕྱི་དྲོ་ཆུ་ཚོད་ ༠༤:༠༠ ཐོག་རྩོད་པའི་ཚོགས་པ་བཅས་གཙུག་ལག་ཁང་དུ་ཚོགས་བཞིན་ཡོད།
                            {selectedDay.element ? ` ཉིན་འདིའི་འབྱུང་ཁམས་ནི། ${selectedDay.element} ཡིན།` : ''}
                            {selectedDay.note ? ` མཆན། ${selectedDay.note}` : ''}
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
                    <span>ཟླ་རེའི་ཆོས་ཕྱོགས་མཛད་རིམ་ཞིབ་ཕྲ། ({currentMonthData.westernRange})</span>
                  </h3>
                  <div className="gt-cal-monthly-grid">
                    <div className="gt-cal-monthly-col">
                      <h4>བོད་ཡིག་གཞུང་འབྲེལ་མཛད་རིམ།</h4>
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
                      <h4>དབྱིན་ཡིག་གསལ་བཤད། (English Description)</h4>
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
            3. UPCOMING PROGRAMMES SECTION (Tibetan)
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
                <h2 className="gt-upcoming-title">འབྱུང་འགྱུར་གྱི་མཛད་རིམ།</h2>
                <p className="gt-upcoming-sub">
                  དགོན་པའི་འབྱུང་འགྱུར་གྱི་མཛད་རིམ་ཞིབ་ཕྲ།
                </p>
              </div>

              {/* 3 Programme Cards Stack - Updates automatically per selected month */}
              <div className="gt-upcoming-cards-stack">
                {upcomingEvents.map((item, idx) => (
                  <article key={`${item.id}-${idx}`} className="gt-programme-card">
                    {/* Left Column: Date Badge */}
                    <div className="gt-pcard-date-col">
                      <span className="gt-pdate-month">{item.monthTb || item.month}</span>
                      <span className="gt-pdate-day">{item.dayTb || item.day}</span>
                      <span className="gt-pdate-year">{item.yearTb || item.year}</span>
                    </div>

                    {/* Vertical Divider Line */}
                    <div className="gt-pcard-divider" aria-hidden="true" />

                    {/* Right Column: Title, Description & Action */}
                    <div className="gt-pcard-body-col">
                      <h3 className="gt-pcard-title">{item.titleTb || item.title}</h3>
                      <p className="gt-pcard-desc">{item.descTb || item.desc}</p>
                      <button
                        type="button"
                        className="gt-pcard-learn-btn"
                        onClick={() => {
                          const ev = TIBETAN_EVENTS_DATA[item.dateKey]?.[0] || {
                            title: item.titleTb || item.title,
                            time: 'སྔ་དྲོ་ ༠༦:༠༠ - ཕྱི་དྲོ་ ༠༥:༠༠',
                            venue: item.venue || 'གཙུག་ལག་ཁང་ཆེན་མོ།',
                            category: item.categoryTb || 'ཆོས་ཕྱོགས་མཛད་སྒོ།',
                            access: 'ཀུན་ལ་སྒོ་ཕྱེས།',
                            description: item.descTb || item.desc,
                            guidelines: 'དགོན་པའི་སྒྲིག་གཞི་དང་མཐུན་པའི་གྱོན་གོས་གྱོན་རོགས།'
                          };
                          setActiveModalEvent({ ...ev, dateStr: `${item.monthTb || item.month} ${item.dayTb || item.day} ${item.yearTb || item.year}` });
                        }}
                      >
                        <span>རྒྱས་པ་གཟིགས་རྒྱུ།</span>
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
        <DepartmentsAcrossYear lang="tb" className="gt-timeline-white" />

        {/* ====================================================================
            5. BEFORE YOU ATTEND SECTION (Tibetan)
            ==================================================================== */}
        <section className="gt-before-attend-section">
          <div className="gyuto-container">
            <div className="gt-attend-grid">
              {/* Left Column: Text & Button */}
              <div className="gt-attend-text-col">
                <h2 className="gt-attend-title">མཇལ་བཅར་བ་ཚོས་ཐུགས་སྣང་དགོས་པའི་ལམ་སྟོན་ཁག</h2>
                <p className="gt-attend-para">
                  མཛད་རིམ་ཁ་ཅིག་ནི་དགེ་འདུན་པ་ཁོ་ནར་དམིགས་པ་དང་། གཞན་ཁ་ཤས་ནི་སྒྲུབ་པ་པོ་དང་། གནས་མཇལ་བ། ཡང་ན་མང་ཚོགས་བཅས་ལ་དམིགས་པ་ཡིན་ཆོག མཉམ་ཞུགས་མ་གནང་གོང་ནས་མཛད་རིམ་སོ་སོའི་ཞིབ་ཕྲའི་གནས་ཚུལ་ལ་གཟིགས་རོགས། མཛད་རིམ་སོ་སོའི་དུས་ཚོད་དང་། མཉམ་ཞུགས་དང་པར་རྒྱག་ཆོག་མིན། མཉམ་ཞུགས་པའི་ཆ་རྐྱེན་སོགས་མི་འདྲ་བ་ཡོད།
                </p>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  འབྲེལ་གཏུགས་གནང་རོགས།
                </button>
              </div>

              {/* Right Column: Google Maps Card */}
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
        <SupportSection lang="tb" onNavigate={onNavigate} />
      </main>

      {/* Modal Dialog */}
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
                <span className="gt-modal-label">དུས་ཚོད།:</span>
                <span>{activeModalEvent.time}</span>
              </div>
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">ས་གནས།:</span>
                <span>{activeModalEvent.venue}</span>
              </div>
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">ཞུགས་ཆོག:</span>
                <span>{activeModalEvent.access}</span>
              </div>
              <div className="gt-modal-detail-row">
                <span className="gt-modal-label">གསལ་བཤད།:</span>
                <span>{activeModalEvent.description}</span>
              </div>
              {activeModalEvent.guidelines && (
                <div className="gt-modal-detail-row" style={{ marginTop: 12, padding: 12, backgroundColor: '#FFFDF6', borderLeft: '3px solid #E5C583' }}>
                  <span className="gt-modal-label">ལམ་སྟོན།:</span>
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
                ཁ་རྒྱག
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
                འབྲེལ་གཏུགས་ཞུ་བ།
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}
