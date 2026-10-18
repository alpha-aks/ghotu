import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { DepartmentsAcrossYear } from './departmentstb';
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
  ArrowRight
} from 'lucide-react';
import './programmes.css';

// Tibetan Month Names
const TIBETAN_MONTH_NAMES = [
  'ཕྱི་ཟླ་ ༡ པོ།', 'ཕྱི་ཟླ་ ༢ པ།', 'ཕྱི་ཟླ་ ༣ པ།', 'ཕྱི་ཟླ་ ༤ པ།', 'ཕྱི་ཟླ་ ༥ པ།', 'ཕྱི་ཟླ་ ༦ པ།',
  'ཕྱི་ཟླ་ ༧ པ།', 'ཕྱི་ཟླ་ ༨ པ།', 'ཕྱི་ཟླ་ ༩ པ།', 'ཕྱི་ཟླ་ ༡༠ པ།', 'ཕྱི་ཟླ་ ༡༡ པ།', 'ཕྱི་ཟླ་ ༡༢ པ།'
];

const TIBETAN_DAY_NAMES = [
  'ཉི་མ།', 'ཟླ་བ།', 'མིག་དམར།', 'ལྷག་པ།', 'ཕུར་བུ།', 'པ་སངས།', 'སྤེན་པ།'
];

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
    year: '༡༨-༢༠',
    dateKey: '2026-02-18',
    title: 'བོད་ཀྱི་ལོ་གསར་ (ལོ་སར།)',
    desc: 'བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ཟླ་ཐོའི་ལོ་འགོ་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐྱོང་དང་གཏོར་རྒྱག་དང་། ཆོས་གཞུང་གསུང་འདོན་དང་རིག་གཞུང་གསར་བརྗེས་བཅས་འཚོགས་ཡོད། ཆོས་སྐྱོང་རྒྱུགས་པ་དང་དད་ལྡན་སྤྱི་གཞུང་འགྲོ་མཁན་རྣམས་ཞུགས་ཆོག',
    category: 'ལོ་གསར་དུས་ཆེན།',
    venue: 'རྒྱུད་སྟོད་གཙུག་ལག་ཁང་།'
  },
  {
    id: 'tb-p2',
    month: 'ཕྱི་ཟླ་',
    day: '༢ ཚེས་',
    year: '༡༨-༢༠',
    dateKey: '2026-02-18',
    title: 'བོད་ཀྱི་ལོ་གསར་ (ལོ་སར།)',
    desc: 'བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ཟླ་ཐོའི་ལོ་འགོ་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐྱོང་དང་གཏོར་རྒྱག་དང་། ཆོས་གཞུང་གསུང་འདོན་དང་རིག་གཞུང་གསར་བརྗེས་བཅས་འཚོགས་ཡོད། ཆོས་སྐྱོང་རྒྱུགས་པ་དང་དད་ལྡན་སྤྱི་གཞུང་འགྲོ་མཁན་རྣམས་ཞུགས་ཆོག',
    category: 'ཆོས་ཕྱོགས་མཛད་སྒོ།',
    venue: 'རྒྱུད་སྟོད་རྩོད་རྭ་ཆེན་མོ།'
  },
  {
    id: 'tb-p3',
    month: 'ཕྱི་ཟླ་',
    day: '༢ ཚེས་',
    year: '༡༨-༢༠',
    dateKey: '2026-02-18',
    title: 'བོད་ཀྱི་ལོ་གསར་ (ལོ་སར།)',
    desc: 'བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ཟླ་ཐོའི་ལོ་འགོ་ཡིན། དགོན་པ་དེར་ཉིན་གསུམ་རིང་ཆོས་སྐྱོང་དང་གཏོར་རྒྱག་དང་། ཆོས་གཞུང་གསུང་འདོན་དང་རིག་གཞུང་གསར་བརྗེས་བཅས་འཚོགས་ཡོད། ཆོས་སྐྱོང་རྒྱུགས་པ་དང་དད་ལྡན་སྤྱི་གཞུང་འགྲོ་མཁན་རྣམས་ཞུགས་ཆོག',
    category: 'དབང་ཆེན་མཛད་སྒོ།',
    venue: 'གཙུག་ལག་ཁང་ཆེན་མོ།'
  }
];

// Seasonal Departments Rhythm in Tibetan
const TIBETAN_SEASONAL_RHYTHM = [
  {
    id: 'tb-summer',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'དབྱར་དུས།',
    activity: 'སྒྲུབ་པ་དང་སྒོམ་སྒྲུབ།'
  },
  {
    id: 'tb-spring',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'དཔྱིད་དུས།',
    activity: 'གདམས་ངག་དང་དཔྱད་རྩོད།'
  },
  {
    id: 'tb-autumn',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'སྟོན་དུས།',
    activity: 'ཤེས་རབ་རྒྱུགས་།'
  },
  {
    id: 'tb-winter',
    period: 'ཕྱི་ཟླ་ ༢-༥',
    season: 'དགུན་དུས།',
    activity: 'ཆོས་སྤྱོད་དང་གཏོར་མའི་ཆེ་རིམ།'
  }
];

export default function ProgrammesTb({ onSwitchLanguage, onNavigate }) {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(7); // August 2026
  const [selectedDateKey, setSelectedDateKey] = useState('2026-08-06');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleResetToDesign = () => {
    setCurrentYear(2026);
    setCurrentMonth(7);
    setSelectedDateKey('2026-08-06');
  };

  // Generate 42 calendar grid cells
  const generateCalendarDays = () => {
    const days = [];
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
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
        events: TIBETAN_EVENTS_DATA[dateKey] || []
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
        events: TIBETAN_EVENTS_DATA[dateKey] || []
      });
    }

    // 3. Trailing days from next month
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
        events: TIBETAN_EVENTS_DATA[dateKey] || []
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const prevMonthLabel = currentMonth === 0 ? 'July' : (currentMonth === 7 ? 'July' : `ཕྱི་ཟླ་ ${currentMonth}`);
  const nextMonthLabel = currentMonth === 11 ? 'September' : (currentMonth === 7 ? 'September' : `ཕྱི་ཟླ་ ${currentMonth + 2}`);
  const monthDisplayTitle = `${currentMonth === 7 ? 'August' : TIBETAN_MONTH_NAMES[currentMonth]}, ${currentYear}`;

  const [selYear, selMonth, selDay] = selectedDateKey.split('-').map(Number);
  const formattedSelectedDate = `${String(selDay).padStart(2, '0')} August ${selYear}`;
  const selectedDayEvents = TIBETAN_EVENTS_DATA[selectedDateKey] || [];

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
              ལོ་འཁོར་གྱི་སློབ་གཉེར་དང་སྒྲུབ་པ་ཚོགས།
            </h1>
            <p className="gt-programmes-hero-sub">
              ལོ་འཁོར་གྱི་དུས་རིམ་ནང་། རྒྱུད་སྟོད་གྲྭ་ཚང་ནས་བོད་ཀྱི་ཟླ་ཐོ་ལྟར་དུས་ཆེན་ཁག་དང་། ཆོས་ཕྱོགས་ཀྱི་སྒྲུབ་པ་སོགས། ཆོས་གར་དང་། དབང་ལུང་གནང་སྒྲུབ་ཀྱི་མཛད་རིམ་རྒྱུན་ཆད་མེད་པར་སྤེལ་བཞིན་ཡོད། དགེ་འདུན་པ་རྣམས་ཀྱིས་ཆོས་སྤྱོད་ཆེན་པོའི་དུས་མཆོད་ཁག་གཞུང་བཞིན་གནང་གི་ཡོད།
            </p>
          </div>
        </section>

        {/* ====================================================================
            2. ANNUAL CALENDAR SECTION (Tibetan)
            ==================================================================== */}
        <section className="gt-calendar-section" id="calendar">
          <div className="gyuto-container">
            <div className="gt-calendar-header-group">
              <h2 className="gt-calendar-section-title">ལོ་འཁོར་ལས་རིམ་གྱི་དུས་ཐོ།</h2>
              <p className="gt-calendar-section-sub">
                གྲྭ་ཚང་གི་ལས་རིམ་རྣམས་བོད་ཀྱི་ཟླ་ཐོ་ལྟར་དུས་ཚོད་སྔ་མ་ནས་གཏན་འཁེལ་གྱི་ཡོད། དུས་ཆེན་དང་གཟབ་རྒྱས་ཀྱི་ཆོས་ཕྱོགས་མཛད་རིམ་ཁག་གཤམ་གསལ་ཟླ་ཐོ་ནས་གཟིགས་ཐུབ།
              </p>
            </div>

            <div className="gt-calendar-shell">
              {/* Month & Year Title */}
              <h3 className="gt-cal-month-title">
                {monthDisplayTitle}
              </h3>

              {/* Blue Navigation Bar with Center Date Display */}
              <div className="gt-cal-nav-bar">
                <button
                  type="button"
                  className="gt-cal-nav-btn"
                  onClick={handlePrevMonth}
                >
                  <ChevronLeft size={16} />
                  <span>{prevMonthLabel}</span>
                </button>

                <div className="gt-cal-center-box">
                  {formattedSelectedDate}
                </div>

                <button
                  type="button"
                  className="gt-cal-nav-btn"
                  onClick={handleNextMonth}
                >
                  <span>{nextMonthLabel}</span>
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
                    <span className="gt-legend-color event" />
                    <span>ཆོས་ཕྱོགས་དུས་ཆེན།</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="gt-cal-reset-btn"
                  onClick={handleResetToDesign}
                >
                  August 2026 ལ་བསྐྱར་ལྡོག
                </button>
              </div>

              {/* 7-Column Grid */}
              <div className="gt-cal-grid" role="grid">
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
                          {ev.time.split('དང་')[0]}
                        </div>
                        <div className="gt-cal-event-body">
                          <h4>{ev.title}</h4>
                          <p>{ev.description}</p>
                          <div style={{ marginTop: 8, fontSize: '13px', color: '#2778A7', display: 'flex', gap: 16 }}>
                            <span><strong>གནས་ཡུལ།:</strong> {ev.venue}</span>
                            <span><strong>ཞུགས་ཆོག:</strong> {ev.access}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="gt-cal-no-events">
                    ཉིན་རེའི་སྔ་དྲོའི་ཆོས་སྤྱོད་དང་། ཕྱི་དྲོའི་རྩོད་པ་སོགས་གཙུག་ལག་ཁང་དུ་རྒྱུན་ལྡན་ལྟར་ཚོགས་བཞིན་ཡོད། དམིགས་བསལ་དུས་ཆེན་ཁག་ལ་གོང་གི་དམར་ཐིག་ཡོད་པའི་ཚེས་གྲངས་ཁག་ལ་གནོན་རོགས།
                  </p>
                )}
              </div>
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
                <h2 className="gt-upcoming-title">ཕྱི་མའི་ལས་རིམ་ཁག</h2>
                <p className="gt-upcoming-sub">
                  གྲྭ་ཚང་གི་ཕྱི་མའི་ཆོས་འབྲེལ། ཆོས་ཚོགས། དགོན་གནས་དང་སྤྱི་ཚོགས་ཞབས་ཞུའི་ལས་རིམ་ཁག་ལ་གཟིགས་རོགས།
                </p>
              </div>

              {/* 3 Programme Cards Stack */}
              <div className="gt-upcoming-cards-stack">
                {TIBETAN_UPCOMING_PROGRAMMES.map((item, idx) => (
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
                          const ev = TIBETAN_EVENTS_DATA[item.dateKey]?.[0] || {
                            title: item.title,
                            time: 'སྔ་དྲོ་ ༠༦:༠༠ - ཕྱི་དྲོ་ ༠༥:༠༠',
                            venue: item.venue,
                            category: item.category,
                            access: 'ཀུན་ལ་སྒོ་ཕྱེས།',
                            description: item.desc,
                            guidelines: 'དགོན་པའི་སྒྲིག་གཞི་དང་མཐུན་པའི་གྱོན་གོས་གྱོན་རོགས།'
                          };
                          setActiveModalEvent({ ...ev, dateStr: `${item.month} ${item.day} ${item.year}` });
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
        <DepartmentsAcrossYear lang="tb" className="gt-timeline-white" />

        {/* ====================================================================
            5. BEFORE YOU ATTEND SECTION (Tibetan)
            ==================================================================== */}
        <section className="gt-before-attend-section">
          <div className="gyuto-container">
            <div className="gt-attend-grid">
              {/* Left Column: Text & Button */}
              <div className="gt-attend-text-col">
                <h2 className="gt-attend-title">ཞུགས་པའི་སྔོན་དུ།</h2>
                <p className="gt-attend-para">
                  ལས་རིམ་འགའ་ཞིག་གྲྭ་ཚང་གི་དགེ་འདུན་པ་ཁོ་ནས་ཡིན་པ་དང་། གཞན་དག་ནི་སྒྲུབ་པ་པོ་ལྟ་སྐོར་བ་དང་སྤྱི་ཚོགས་ཡོངས་ལ་སྒོ་ཕྱེས་ཡོད།
                </p>
                <p className="gt-attend-para">
                  ཞུགས་པའི་སྔོན་དུ་ལས་རིམ་རེ་རེའི་གསལ་བཤད་ལ་གཟིགས་རོགས། ཞུགས་ཆོག་པའི་ཆ་རྐྱེན། དུས་ཚོད། པར་ལེན་པ་དང་དགེ་འདུན་པའི་སྒྲིག་གཞི་སོགས་ལས་རིམ་སོ་སོར་ཁྱད་པར་ཡོད།
                </p>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  འབྲེལ་གཏུགས།
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
