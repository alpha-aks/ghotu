import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import DepartmentsAcrossYear from '../components/DepartmentsAcrossYear';
import { EndlessKnot } from '../components/MonasteryIcons';
const heroBg = '/images/departments/hero-bg.jpg';
import lungtaImg from '../assets/departments-lungta.png';
import orgTableSvgTb from '../assets/departments-org-table-tb.svg';
import './departments.css';

export default function DepartmentsTb({ onSwitchLanguage, onNavigate }) {
  const [expandedDepts, setExpandedDepts] = useState({
    admin: false,
    education: false,
    healthcare: false,
    library: false,
    kitchen: false,
  });

  const toggleDept = (deptKey) => {
    setExpandedDepts((prev) => ({
      ...prev,
      [deptKey]: !prev[deptKey],
    }));
  };

  const scrollToDept = (id, e) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      setExpandedDepts((prev) => ({
        ...prev,
        [id]: true,
      }));
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="gt-dept-page tibetan-page">
      <Header 
        lang="tb" 
        active="departments" 
        onSwitchLanguage={onSwitchLanguage} 
        onNavigate={onNavigate} 
      />

      <main className="gt-dept-main-content">
        {/* 1. HERO SECTION */}
        <section 
          className="gt-dept-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="gt-dept-hero-overlay" />
          <div className="gt-dept-hero-content">
            <h1 className="gt-dept-hero-title">
              An Interconnected<br />Institution
            </h1>
            <p className="gt-dept-hero-desc">
              The monastery's work is organised across several departments, each with a distinct responsibility. 
              Together, they support monastic education and practice, preserve knowledge, care for the 
              community, and maintain the day-to-day functioning of the institution.
            </p>
          </div>
        </section>

        {/* 2. DEPARTMENTS DIRECTORY & SIDEBAR */}
        <section className="gt-dept-main-section">
          <div className="container">
            <div className="gt-dept-layout-grid">
              {/* Left Column: Department Items */}
              <div className="gt-dept-list-col">

                {/* 01 - Administration */}
                <article id="admin" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">འཛིན་སྐྱོང་།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      འཛིན་སྐྱོང་སྡེ་ཚན་གྱིས་གྲྭ་ཚང་གི་ཉིན་རེའི་ལས་དོན། མཐུན་རྐྱེན། མཁོ་ཆས་དང་སྤྱིའི་འཛིན་སྐྱོང་ལས་དོན་རྣམས་གཉེར་བཞིན་ཡོད།
                      {!expandedDepts.admin && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('admin')}
                          aria-expanded={expandedDepts.admin}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.admin && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">འཛིན་སྐྱོང་ལྷན་ཚོགས།</h3>
                        <p>
                          འཛིན་སྐྱོང་ལྷན་ཚོགས་ནི་གྲྭ་ཚང་གི་ཆེས་མཐོའི་འགན་འཛིན་ལྷན་ཚོགས་ཡིན་ཞིང་། སྲིད་བྱུས་གཏན་འབེབས་དང་སྤྱིའི་དོ་དམ་ལམ་སྟོན་གནང་གི་ཡོད།
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>སྐུ་ཞབས་གན་དཀར་སྤྲུལ་སྐུ་རིན་པོ་ཆེ། (ཚོགས་གཙོ།)</li>
                          <li>སྔགས་རམ་པ་བསོད་ནམས་དཔལ་འབྱོར། (དྲུང་ཆེ།)</li>
                          <li>སྔགས་རམ་པ་ཕུར་བུ་ཚེ་རིང་། (དངུལ་གཉེར།)</li>
                          <li>སྔགས་རམ་པ་བློ་བཟང་ཕུན་ཚོགས། (ཚོགས་མི།)</li>
                        </ul>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('admin')}
                          style={{ marginTop: '14px' }}
                        >
                          Show less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 02 - Education */}
                <article id="education" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">སློབ་གཉེར།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      སློབ་གཉེར་སྡེ་ཚན་གྱིས་ནང་ཆོས་ཀྱི་གཞུང་ལུགས། རྩོད་པ། དཔྱད་ཞིབ་དང་སྔགས་ཀྱི་སློབ་གཉེར་བཅས་ཀྱི་སློབ་ཚན་ལ་རྒྱབ་སྐྱོར་བྱེད་ཀྱི་ཡོད།
                      {!expandedDepts.education && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('education')}
                          aria-expanded={expandedDepts.education}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.education && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">དགེ་རྒན་དང་སློབ་ཚན་ཁག</h3>
                        <p>
                          གྲྭ་ཚང་ནང་གཞི་རིམ་ནས་མཐོ་རིམ་སྔགས་ཀྱི་སློབ་གཉེར་བར་འཛིན་གྲྭ་ ༡༨ ཡོད་ཅིང་། གཞུང་ཆེན་བཀའ་པོད་ལྔ་དང་རྒྱུད་སྡེ་བཞིའི་གཞུང་ལ་སློབ་གཉེར་མཐར་ཕྱིན་པ་གནང་གི་ཡོད།
                        </p>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('education')}
                          style={{ marginTop: '14px' }}
                        >
                          Show less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 03 - Healthcare */}
                <article id="healthcare" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">སྨན་བཅོས་ཞབས་ཞུ།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      སྨན་བཅོས་ཞབས་ཞུ་སྡེ་ཚན་གྱིས་གྲྭ་ཚང་གི་དགེ་སློང་དང་མི་སྡེའི་བདེ་ཐང་ལ་རྒྱབ་སྐྱོར་བྱེད་ཀྱི་ཡོད།
                      {!expandedDepts.healthcare && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('healthcare')}
                          aria-expanded={expandedDepts.healthcare}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.healthcare && (
                      <div className="gt-dept-expanded-content">
                        <p>
                          གྲྭ་ཚང་གི་སྨན་ཁང་ནང་ཉིན་ལྟར་སྨན་ཞབས་པས་ནད་པ་ལ་ལྟ་རྟོག་དང་། ཛ་དྲག་གི་སྨན་བཅོས་མཐུན་རྐྱེན་ ༡༠༠% རིན་མེད་དུ་མཁོ་སྤྲོད་བྱེད་བཞིན་ཡོད།
                        </p>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('healthcare')}
                          style={{ marginTop: '14px' }}
                        >
                          Show less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 04 - Library */}
                <article id="library" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">དཔེ་མཛོད་དང་ཡིག་ཚགས།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      དཔེ་མཛོད་ཀྱིས་བོད་ཀྱི་ནང་ཆོས་ཀྱི་དཔེ་ཆ། བསྟན་བཅོས་དང་ཤེས་བྱའི་ཡིག་ཆ་གཞན་རྣམས་ཉར་ཚགས་བྱས་ཏེ་སློབ་གཉེར་དང་ཞིབ་འཇུག་ལ་རྒྱབ་སྐྱོར་བྱེད་ཀྱི་ཡོད།
                      {!expandedDepts.library && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('library')}
                          aria-expanded={expandedDepts.library}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.library && (
                      <div className="gt-dept-expanded-content">
                        <p>
                          རྒྱུད་སྟོད་དཔེ་མཛོད་ཁང་དུ་བཀའ་འགྱུར་བསྟན་འགྱུར་དང་། རྩ་ཆེའི་དཔེ་རྙིང་། དེང་རབས་ཀྱི་གློག་རྡུལ་དཔེ་དེབ་བཅས་ཉར་ཚགས་གནང་ཡོད།
                        </p>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('library')}
                          style={{ marginTop: '14px' }}
                        >
                          Show less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 05 - Community Kitchen */}
                <article id="kitchen" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">མི་སྡེའི་ཐབ་ཚང་།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      མི་སྡེའི་ཐབ་ཚང་གིས་གྲྭ་ཚང་གི་དགེ་སློང་རྣམས་ལ་ཉིན་རེའི་ཁ་ལག་དང་། གྲྭ་ཚང་གི་ལས་རིམ་དང་དུས་ཆེན་ཁག་ལ་ཟས་དང་ཞབས་ཞུ་སྒྲུབ་ཀྱི་ཡོད།
                      {!expandedDepts.kitchen && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('kitchen')}
                          aria-expanded={expandedDepts.kitchen}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.kitchen && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">ཉིན་རེའི་གསོལ་ཚིགས་དུས་ཚོད།</h3>
                        <ul className="gt-dept-schedule-list">
                          <li className="gt-dept-schedule-item">ཞོགས་ཟས། ༥:༠༠</li>
                          <li className="gt-dept-schedule-item">ཞོགས་ཇ། ༩:༠༠</li>
                          <li className="gt-dept-schedule-item">ཉིན་ཟས། ༡༢:༠༠</li>
                          <li className="gt-dept-schedule-item">དགོང་ཇ། ༣:༠༠</li>
                          <li className="gt-dept-schedule-item">དགོང་ཟས། ༥:༠༠</li>
                        </ul>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('kitchen')}
                          style={{ marginTop: '14px' }}
                        >
                          Show less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

              </div>

              {/* Right Column: Sticky Navigation Card */}
              <aside className="gt-dept-sidebar">
                <div className="gt-dept-nav-card">
                  <h3 className="gt-dept-nav-title">སྡེ་ཚན་ཁག</h3>
                  <ul className="gt-dept-nav-links">
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#admin" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('admin', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> འཛིན་སྐྱོང་སྡེ་ཚན།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#education" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('education', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ཤེས་ཡོན།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#healthcare" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('healthcare', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> འཕྲོད་བསྟེན་ཞབས་ཞུ།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#library" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('library', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Library &amp; Archives
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#kitchen" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('kitchen', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Community Kitchen
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 3. ONE MONASTERY, MANY RESPONSIBILITIES (ORGANIZATIONAL TREE) */}
        <section className="gt-org-chart-section">
          <div className="container">
            <div className="gt-org-header">
              <h2 className="gt-org-title">གྲྭ་ཚང་གཅིག་ འགན་འཁྲི་མང་པོ།</h2>
              <p className="gt-org-subtitle">
                སློབ་གཉེར་དང་ཆོས་སྒྲུབ་ནི་གྲྭ་ཚང་གི་འཚོ་བའི་ལྟེ་བ་ཡིན་ཞིང་། འཛིན་སྐྱོང་། སྨན་བཅོས། ཐབ་ཚང་དང་དཔེ་མཛོད་བཅས་ཀྱིས་དེ་དག་རྒྱུན་འཁྱོངས་པར་མཁོ་བའི་རྒྱབ་སྐྱོར་སྒྲུབ་ཀྱི་ཡོད།
              </p>
            </div>

            <div className="gt-org-diagram-wrapper">
              <img 
                src={orgTableSvgTb} 
                alt="Gyuto Monastery Organizational Chart (Tibetan)" 
                className="gt-org-table-img" 
              />
            </div>
          </div>
        </section>

        {/* 4. DEPARTMENTS ACROSS THE YEAR (TIMELINE) - Figma Frame 113 / 2147236787 */}
        <DepartmentsAcrossYear lang="tb" />

        {/* 5. QUESTIONS ABOUT A DEPARTMENT (BLUE BANNER) */}
        <section className="gt-dept-cta-blue">
          <div className="container">
            <div className="gt-dept-cta-blue-inner">
              <div className="gt-dept-cta-blue-text">
                <h2 className="gt-dept-cta-blue-title">ཁུལ་སྐོར་ལ་དྲི་བ་ཡོད་པ་ལམ།</h2>
                <p className="gt-dept-cta-blue-desc">
                  དགོན་པའི་ཁུལ་སྐོར། ལས་འགུལ། དང་ཞབས་ཏོགས་སྐོར་དུ་དྲི་བ་ཡོད་ན་དགོན་པར་གླེང་སྟེགས་གཏོང་བ་གནང་།
                </p>
                <button 
                  type="button"
                  className="gt-dept-cta-white-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  འབྲེལ་གཏུགས་གནང་བ།
                </button>
              </div>
              <div className="gt-dept-cta-blue-visual">
                <img 
                  src={lungtaImg} 
                  alt="Tibetan Wind Horse (Lungta)" 
                  className="gt-dept-lungta-img" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. UPCOMING EVENTS (GOLD BANNER) */}
        <section className="gt-dept-events-gold">
          <div className="container">
            <div className="gt-dept-events-grid">
              <div className="gt-dept-events-left">
                <p className="gt-dept-events-sub">
                  Explore the monastery's annual spiritual programme.
                </p>
                <h2 className="gt-dept-events-heading">
                  ལོའི་ལོ་མ་ལ་གི་གདམས་ངག་<br />དང་ལས་འགུལ།
                </h2>
                <button 
                  type="button"
                  className="gt-dept-calendar-btn"
                  onClick={() => onNavigate && onNavigate('home')}
                >
                  ཉིན་ཁྲིམ་ལ་ལྟ
                </button>
              </div>

              <div className="gt-dept-events-cards-wrap">
                <span className="gt-dept-events-top-tag">UPCOMING EVENTS</span>
                
                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༤-༢༠</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>བོད་ལོ་གསར་པ་ (ལོ་སར།)</h4>
                    <p>བོད་ལོ་གསར་པ་ནི་བོད་ཟླའི་ལོ་གཏོད་པ་ཡིན། དགོན་པ་དེར་ཉིན་ག...</p>
                  </div>
                </div>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༤-༢༠</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>བོད་ལོ་གསར་པ་ (ལོ་སར།)</h4>
                    <p>བོད་ལོ་གསར་པ་ནི་བོད་ཟླའི་ལོ་གཏོད་པ་ཡིན། དགོན་པ་དེར་ཉིན་ག...</p>
                  </div>
                </div>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">ཕྱི་ཟླ་</span>
                    <span className="gt-event-day">༢ ཚེས་</span>
                    <span className="gt-event-year">༡༤-༢༠</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>བོད་ལོ་གསར་པ་ (ལོ་སར།)</h4>
                    <p>བོད་ལོ་གསར་པ་ནི་བོད་ཟླའི་ལོ་གཏོད་པ་ཡིན། དགོན་པ་དེར་ཉིན་ག...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            7. SUPPORT THE CONTINUITY OF THE TRADITION (Universal Frame 625810)
            ==================================================================== */}
        <SupportSection lang="tb" onNavigate={onNavigate} />
      </main>

      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { DepartmentsTb, DepartmentsAcrossYear };
