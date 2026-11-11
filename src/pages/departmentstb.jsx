import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import DepartmentsAcrossYear from '../components/DepartmentsAcrossYear';
import { EndlessKnot } from '../components/MonasteryIcons';
const heroBg = '/images/departments/departments-hero.jpg';
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
    media: false,
    maintenance: false,
  });

  const toggleDept = (deptKey) => {
    setExpandedDepts((prev) => ({
      ...prev,
      [deptKey]: !prev[deptKey],
    }));
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = (window.location.hash || '').replace('#', '');
      if (hash && ['admin', 'education', 'healthcare', 'library', 'kitchen', 'media', 'maintenance'].includes(hash)) {
        setExpandedDepts((prev) => ({
          ...prev,
          [hash]: true,
        }));
        setTimeout(() => {
          const elem = document.getElementById(hash);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
    <div className="gt-dept-page tibetan-page tibetan-text">
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
              ཕན་ཚུན་འབྲེལ་མཐུད་ལྡན་པའི་སྒྲིག་འཛུགས།
            </h1>
            <p className="gt-dept-hero-desc">
              དགོན་པའི་ལས་དོན་རྣམས་ཚན་པ་མི་འདྲ་བ་དུ་མར་བགོས་ཡོད་ཅིང་། ཚན་པ་རེ་རེར་ལས་འགན་དམིགས་བསལ་རེ་ཡོད། ཚན་པ་འདི་དག་མཉམ་རུབ་ཀྱི་ཐོག་ནས་དགེ་འདུན་པའི་སློབ་གཉེར་དང་ཉམས་ལེན་ལ་རྒྱབ་སྐྱོར་དང་། རིག་གནས་སྲུང་སྐྱོབ། འདུས་སྡེར་ལྟ་སྐྱོང་། དེ་བཞིན་བསྟི་གནས་འདིའི་ཉིན་རེའི་བྱེད་སྒོ་རྒྱུན་སྐྱོང་བཅས་གནང་གི་ཡོད།
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
                  <h2 className="gt-dept-item-title">༡ — སྤྱི་ཁྱབ་འཛིན་སྐྱོང་། (ཕྱག་མཛོད་ཁང་།)</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་སྤྱི་ཁྱབ་འཛིན་སྐྱོང་གིས་དགོན་པའི་ལས་དོན་སྤྱི་དང་། འཛིན་སྐྱོང་། དཔལ་འབྱོར། དེ་བཞིན་ཉིན་རེའི་བྱེད་སྒོ་བཅས་ལ་འགན་འཁུར་གཙོ་བོ་བཞེས་ཀྱི་ཡོད།
                      {!expandedDepts.admin && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('admin')}
                          aria-expanded={expandedDepts.admin}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.admin && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">འཛིན་སྐྱོང་ལྷན་ཚོགས།</h3>
                        <p>
                          འཛིན་སྐྱོང་ལྷན་ཚོགས་ནི་འཛིན་སྐྱོང་གི་དབང་ཚད་མཐོ་ཤོས་དང་། དགོན་པའི་སྤྱི་ཡོངས་ཀྱི་ལམ་སྟོན་དང་ལྟ་རྟོག་གནང་མཁན་དེ་ཡིན། ལྷན་ཚོགས་འདིས་ལས་དོན་གལ་ཆེན་དང་འཛིན་སྐྱོང་གི་ཐག་གཅོད་ཁག་གནང་བར་མ་ཟད། ཚོགས་པའི་དམིགས་ཡུལ་ཁག་ལེགས་འགྲུབ་ཡོང་བའི་འགན་ལེན་ཡང་གནང་གི་ཡོད།
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>བཙུན་པ་ཡེ་ཤེས་རྒྱལ་མཚན། (ཐབ་ཚང་འཛིན་སྐྱོང་བ།)</li>
                          <li>སྔགས་རམས་པ་བསོད་ནམས་དཔལ་འབྱོར། (དྲུང་ཡིག)</li>
                          <li>སྔགས་རམས་པ་ཕུར་བུ་ཚེ་རིང་། (དཀོར་གཉེར།)</li>
                          <li>སྔགས་རམས་པ་བློ་བཟང་ཕུན་ཚོགས། (ཚོགས་མི།)</li>
                          <li>སྔགས་རམས་པ་གྲགས་པ་རྒྱལ་མཚན། (ཚོགས་མི།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་གྲགས་པ་རྒྱལ་མཚན་རྒྱ་མཚོ། (ཚོགས་མི།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་དོན་གྲུབ་ཚེ་རིང་། (ཚོགས་མི།)</li>
                        </ul>

                        <h3 className="gt-dept-subheading">ཉིན་རེའི་འཛིན་སྐྱོང་།</h3>
                        <p>
                          འཛིན་སྐྱོང་བས་སྡེ་ཁག་དེ་ཉིད་ཀྱི་ཉིན་རེའི་འཛིན་སྐྱོང་གི་ལས་དོན་ཁག་གནང་དགོས་པ་དང་། འཛིན་སྐྱོང་བས་འཛིན་སྐྱོང་ལྷན་ཚོགས་ཀྱི་ལམ་སྟོན་དང་ལྟ་རྟོག་འོག་ཕྱག་ལས་གནང་དགོས། འཛིན་སྐྱོང་བ་ནི་ལོ་གསུམ་རེའི་མཚམས་ནས་འོས་འདེམས་བྱ་རྒྱུ་དང་། དེས་འཛིན་སྐྱོང་ལྷན་ཚོགས་ཀྱི་ཐག་གཅོད་ཁག་ལག་བསྟར་གནང་བ་དང་། འཛིན་སྐྱོང་གི་ལས་བྱེད་དང་ལས་ཁུངས་ཀྱི་ལས་བྱེད་རྣམས་ཀྱི་ཕྱག་རོགས་ལ་བརྟེན་ནས། དགོན་པའི་ལས་དོན་སྤྱི་དང་། དཔལ་འབྱོར། འཛིན་སྐྱོང་གི་བྱེད་སྒོ་ཁག་ལ་ལྟ་རྟོག་གནང་དགོས།
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>སྔགས་རམས་པ་བློ་བཟང་རྡོ་རྗེ། (འཛིན་སྐྱོང་བ།)</li>
                          <li>སྔགས་རམས་པ་བློ་བཟང་དར་རྒྱས། (འཛིན་སྐྱོང་བ།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་འཇམ་དཔལ་ཚེ་རིང་བྷུ་ཊི་ཡ། (འཛིན་སྐྱོང་བ།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་ངག་དབང་བརྩོན་འགྲུས། (འཛིན་སྐྱོང་བ།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་འཇམ་དབྱངས་ཆོས་རྒྱལ། (འཛིན་སྐྱོང་བ།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་དགེ་ལེགས་མགོན་པོ། (འཛིན་སྐྱོང་བ།)</li>
                          <li>བཙུན་པ་ཡེ་ཤེས་རྒྱལ་མཚན། (འཛིན་སྐྱོང་བ།)</li>
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་དཔག་བསམ་རྒྱ་མཚོ། (དྲུང་ཡིག)</li>
                          <li>སྐུ་ངོ་ཐུབ་བསྟན་དར་རྒྱས། (རྩིས་པ།)</li>
                        </ul>

                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('admin')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
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
                  <h2 className="gt-dept-item-title">༢ — སློབ་གཉེར།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      གྲྭ་ཚང་འདིར་གཞི་རིམ་གྱི་ཤེས་ཡོན་དང་། ནང་བསྟན་མཚན་ཉིད་རིག་པ། གསང་སྔགས་ཀྱི་སློབ་གཉེར། ཆོ་ག་ཕྱག་ལེན་གྱི་སྦྱོང་བརྡར། དགོན་པའི་སྒྲིག་ཁྲིམས་བཅས་ཟུང་འབྲེལ་གྱིས་གོ་རིམ་ལྡན་པའི་སློབ་གཉེར་གནང་གི་ཡོད། སློབ་གཉེར་གྱི་ལས་རིམ་འདིའི་དམིགས་ཡུལ་ནི། དཔེ་འཁྱུར་རྣམས་ལ་ཤེས་ཡོན་དང་། ཆོས་ཕྱོགས། ལག་ལེན་བཅས་ཀྱི་སྦྱོང་བརྡར་སྤྲོད་པ་དང་ཆབས་ཅིག མཁས་པའི་ཡོན་ཏན་དང་སྲོལ་རྒྱུན་གྱི་ཕྱག་ལེན་དངོས་གཉིས་ཀ་གོང་འཕེལ་གཏོང་རྒྱུ་དེ་ཡིན།
                      {!expandedDepts.education && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('education')}
                          aria-expanded={expandedDepts.education}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.education && (
                      <div className="gt-dept-expanded-content">
                        <p>
                          གྲྭ་ཚང་འདིར་གཞི་རིམ་ནས་ཆེས་མཐོའི་གསང་སྔགས་ཀྱི་སློབ་གཉེར་བར་འཛིན་རིམ་བཅོ་བརྒྱད་ཡོད་པ། དེར་གོ་རིམ་ལྡན་པའི་སློབ་གཉེར་གྱི་ལམ་ལུགས་ཤིག་ཡོད། གཏན་འབེབས་ཀྱི་རྒྱུགས་སྤྲོད་ཁག་ལེགས་པར་མཐར་ཕྱིན་པ་ན། སློབ་གཉེར་གྱི་རིམ་པ་སོ་སོར་ཕྱག་འཁྱེར་སྩོལ་གྱི་ཡོད།
                        </p>

                        <h3 className="gt-dept-subheading">དགེ་རྒན་གྱི་མཚན་གཞུང་།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>དགེ་བཤེས་བློ་བཟང་མགོན་པོ། — དཔེ་ཁྲིད་དགེ་རྒན།</li>
                          <li>དགེ་བཤེས་བློ་བཟང་རྒྱལ་མཚན། — དཔེ་ཁྲིད་དགེ་རྒན།</li>
                          <li>དགེ་བཤེས་ཐུབ་བསྟན་ཚུལ་ཁྲིམས། — དཔེ་ཁྲིད་དགེ་རྒན།</li>
                          <li>དགེ་བཤེས་བྱམས་པ་བསོད་ནམས། — བོད་ཀྱི་བརྡ་སྤྲོད་དགེ་རྒན།</li>
                          <li>སྔགས་རམས་པ་བསྟན་འཛིན་པ་སངས། — བོད་ཡིག་དགེ་རྒན།</li>
                          <li>དགེ་བཤེས་བསྟན་འཛིན་དགེ་ལྡན། — བོད་ཡིག་དགེ་རྒན།</li>
                          <li>བཙུན་པ་བསྟན་འཛིན་སྟོབས་ཆེན། — རི་མོ་དགེ་རྒན།</li>
                          <li>སྐུ་ཞབས་བཀྲ་ཤིས་རྡོ་རྗེ། — དབྱིན་ཡིག་དགེ་རྒན།</li>
                          <li>སྐུ་ཞབས་ཚེ་རིང་རྣམ་རྒྱལ། — བོད་ཡིག་དགེ་རྒན།</li>
                          <li>ལྕམ་སྐུ་པ་སངས་སྒྲོལ་མ། — དབྱིན་ཡིག་དགེ་རྒན།</li>
                        </ul>

                        <h3 className="gt-dept-subheading">༢.༢ འབྲིང་རིམ་དང་མཐོ་རིམ་སློབ་འབྲིང་གི་སློབ་སྦྱོང་།</h3>
                        <p>
                          གཞི་རིམ་གྱི་སློབ་གཉེར་གྲུབ་རྗེས། སློབ་མ་ཚོས་མུ་མཐུད་དེ་འབྲིང་རིམ་འཛིན་གྲྭ་དགུ་པ་དང་བཅུ་པ། དེ་ནས་མཐོ་རིམ་སློབ་འབྲིང་འཛིན་གྲྭ་བཅུ་གཅིག་པ་དང་བཅུ་གཉིས་པ་བཅས་སུ་སློབ་གཉེར་གནང་ཞིང་། གཏན་འབེབས་ཀྱི་རྒྱུགས་སྤྲོད་རྣམས་ལེགས་པར་འཕྲོད་པའི་སློབ་མ་རྣམས་ལ་འཛིན་གྲྭ་བཅུ་པ་དང་བཅུ་གཉིས་པའི་ཕྱག་འཁྱེར་རིམ་བཞིན་སྩོལ་གྱི་ཡོད།
                        </p>

                        <h3 className="gt-dept-subheading">གསང་སྔགས་ཀྱི་ལོ་ལྔའི་མཛད་རིམ།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>ལོ་རིམ་དང་པོ། དཔལ་གསང་བ་འདུས་པ།</li>
                          <li>ལོ་རིམ་གཉིས་པ། འཁོར་ལོ་བདེ་མཆོག</li>
                          <li>ལོ་རིམ་གསུམ་པ། དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད།</li>
                          <li>ལོ་རིམ་བཞི་པ་དང་ལྔ་པ། གཤིན་རྗེ་ལྕགས་མཁར་གྱི་སྒྲུབ་མཆོད་དང་། བསྐང་གསོ། མགོན་པོ་གཏོར་ཆེན། གདུགས་དཀར་གཏོར་ཆེན། ལས་བཞིའི་སྦྱིན་སྲེགས་བཅས་སོ། །</li>
                        </ul>

                        <h3 className="gt-dept-subheading">གསང་སྔགས་ཀྱི་དཔེ་ཁྲིད་དགེ་རྒན།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>སྐྱབས་རྗེ་ཁང་སེར་རིན་པོ་ཆེ། — སྔགས་ཀྱི་དཔེ་ཁྲིད་དགེ་རྒན།</li>
                          <li>སྐྱབས་རྗེ་ཡང་སྟེང་རིན་པོ་ཆེ། — སྔགས་ཀྱི་དཔེ་ཁྲིད་དགེ་རྒན།</li>
                          <li>དགེ་བཤེས་མཁས་གྲུབ་ནོར་བཟང་། — སྔགས་ཀྱི་དཔེ་ཁྲིད་དགེ་རྒན།</li>
                        </ul>

                        <h3 className="gt-dept-subheading">༢.༧ འཛིན་རིམ་དང་ཕྱག་འཁྱེར།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>༡༽ འཛིན་གྲྭ་བརྒྱད་པའི་ཕྱག་འཁྱེར། — གཞི་རིམ་འོག་མའི་འཛིན་གྲྭ་བརྒྱད་པའི་རྒྱུགས་སྤྲོད་ལེགས་པར་ཐོན་སྐབས།</li>
                          <li>༢༽ འཛིན་གྲྭ་བཅུ་པའི་ཕྱག་འཁྱེར། — འབྲིང་རིམ་འཛིན་གྲྭ་བཅུ་པའི་རྒྱུགས་སྤྲོད་ལེགས་པར་ཐོན་སྐབས།</li>
                          <li>༣༽ འཛིན་གྲྭ་བཅུ་གཉིས་པའི་ཕྱག་འཁྱེར། — མཐོ་རིམ་སློབ་འབྲིང་འཛིན་གྲྭ་བཅུ་གཉིས་པའི་རྒྱུགས་སྤྲོད་ལེགས་པར་ཐོན་སྐབས།</li>
                          <li>༤༽ གཞུང་ལུགས་རབ་འབྱམས་པ། (ཉེ་བའི་གཙུག་ལག་རབ་འབྱམས་པ།) — ནང་དོན་རིག་པའི་གཞུང་ཆེན་ཁག་ལ་ལོ་བཞིའི་རིང་སློབ་གཉེར་དང་རྒྱུགས་སྤྲོད་ལེགས་པར་གྲུབ་སྐབས།</li>
                          <li>༥༽ དགེ་བཤེས་སྔགས་རམས་པ། (འབུམ་རམས་པ།) — ལོ་གཉིས་ཀྱི་སྔགས་རམས་པའི་སློབ་གཉེར་དང་རྒྱུགས་སྤྲོད་ལེགས་པར་ཐོན་སྐབས།</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          སློབ་གཉེར་འགན་འཛིན། — དགེ་བཤེས་སྔགས་རམས་པ་ངག་དབང་བརྩོན་འགྲུས།
                        </p>

                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('education')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 03 - Healthcare & Social Services */}
                <article id="healthcare" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">༣ — འཕྲོད་བསྟེན་དང་སྤྱི་ཚོགས་ཞབས་ཞུ།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གིས་དགོན་པར་གཏན་སྡོད་སྨན་ཞབས་པ་ཡོད་པའི་སྨན་ཁང་ཞིག་གཉེར་བཞིན་ཡོད་ལ། དེས་དགེ་འདུན་པ་དང་ལས་བྱེད་རྣམས་ལ་གཞི་རིམ་སྨན་བཅོས་ཀྱི་ཞབས་ཞུ་སྒྲུབ་ཀྱི་ཡོད།
                      {!expandedDepts.healthcare && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('healthcare')}
                          aria-expanded={expandedDepts.healthcare}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.healthcare && (
                      <div className="gt-dept-expanded-content">
                        <p>
                          གྲྭ་ཚང་ནང་ནད་གཞི་ལྕི་མོ་ཕོག་པའི་དགེ་འདུན་པ་དང་ལས་བྱེད་རྣམས་ཀྱི་སྨན་བཅོས་འགྲོ་གྲོན་བརྒྱ་ཆ་བརྒྱ་ཐམ་པ་ཆ་ཚང་གྲྭ་ཚང་ནས་ཕྱིར་སློག་གནང་བར་མ་ཟད། དེ་བཞིན་སྨན་བཅོས་གཞན་དག་ལའང་གྲྭ་ཚང་གི་གཏན་འབེབས་ལམ་སྟོན་དང་མཐུན་པར་དཔལ་འབྱོར་གྱི་རོགས་རམ་གནང་བར་བྱེད།
                        </p>
                        <h3 className="gt-dept-subheading">ལས་བྱེད།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>ལྕམ་སྐུ་པདྨ་མཚམས་གཅོད། (སྨན་ཞབས་པ།)</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          འཕྲོད་བསྟེན་འགན་འཛིན། — དགེ་བཤེས་སྔགས་རམས་པ་ངག་དབང་བརྩོན་འགྲུས།
                        </p>
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('healthcare')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 04 - Library & Archives */}
                <article id="library" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">༤ — དཔེ་མཛོད་དང་ཡིག་ཚགས།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      རྒྱུད་སྟོད་དཔེ་མཛོད་ཁང་ནི། རྒྱལ་བའི་གསུང་རབ་རྣམས་གཅེས་ཉར་བྱ་བའི་ཆེད་དང༌། བོད་རིགས་དང་བོད་རིགས་མ་ཡིན་པའི་སློབ་གཉེར་བ་དང་མཁས་པ་རྣམས་ལ་ནང་ཆོས་ཀྱི་སློབ་གཉེར་དང་ཞིབ་འཇུག་གི་མཐུན་རྐྱེན་སྦྱོར་བའི་ཆེད་དུ་བཙུགས་པ་ཞིག་ཡིན།
                      {!expandedDepts.library && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('library')}
                          aria-expanded={expandedDepts.library}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.library && (
                      <div className="gt-dept-expanded-content">
                        <p>
                          དཔེ་མཛོད་ཁང་འདིར་ནང་ཆོས་ཀྱི་གཞུང་ལུགས་དང་། རྒྱ་གར་གྱི་ནང་ཆོས་དཔེ་རྙིང་དཀོན་རིགས། སྐད་ཡིག་སྣ་ཚོགས་ཀྱི་དཔེ་དེབ། དེ་བཞིན་དགེ་འདུན་པ་དང་། དགེ་ལུགས་པའི་གདན་ས་ཆེན་པོ་གསུམ་ནས་ཕེབས་པའི་དགེ་བཤེས། གྲྭ་ཚང་གི་སློབ་གཉེར་བ་རྣམས་ཀྱི་ཆེད་དུ་དམིགས་པའི་མདོ་སྔགས་ཀྱི་ཕྱག་དཔེ་བཅས་ཕྱོགས་བསྡུ་དང་ཉར་ཚགས་བྱེད་བཞིན་ཡོད།
                        </p>
                        <p>
                          དེ་བཞིན་རིན་ཐང་ཆེ་བའི་གསུང་ཆོས་རྣམས་ཡིག་ཚགས་སུ་ཉར་ཚགས་དང་། སློབ་གཉེར་གྱི་ཆེད་དུ་ཡིག་ཆ་རྣམས་གློག་རྡུལ་ཅན་དུ་བསྒྱུར་བ། དཔེ་སྐྲུན་ཚད་ལྡན་གྱི་སྒོ་ནས་གལ་ཆེའི་གཞུང་ལུགས་ཁག་དེབ་སྐྲུན་བྱེད་པ་བཅས་ཀྱི་ལས་དོན་ཡང་སྒྲུབ་བཞིན་ཡོད།
                        </p>
                        <h3 className="gt-dept-subheading">ལས་བྱེད།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>དགེ་བཤེས་སྔགས་རམས་པ་བློ་བཟང་ཀླུ་སྒྲུབ། (ངེས་སྟོན་པ།)</li>
                          <li>སྐུ་ཞབས་བསྟན་འཛིན་རབ་བརྟན། (རྩོམ་སྒྲིག་པ།)</li>
                          <li>དགེ་བཤེས་འཇམ་རྒྱལ། (རྩོམ་སྒྲིག་ལས་རོགས།)</li>
                          <li>དགེ་བཤེས་ངག་དབང་རྒྱལ་མཚན། (དྲ་ཚིགས་རྩོམ་སྒྲིག་པ།)</li>
                          <li>སྐུ་ཞབས་འཇིགས་མེད་རྒྱ་མཚོ། (ལྟ་རྟོག་པ།)</li>
                        </ul>
                        <div style={{ marginTop: '16px', marginBottom: '8px' }}>
                          <a
                            href="https://www.gyutolibrary.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 18px',
                              background: '#92060F',
                              color: '#FFFFFF',
                              borderRadius: '4px',
                              textDecoration: 'none',
                              fontSize: '14px',
                              fontWeight: '600',
                              fontFamily: 'Noto Serif Tibetan, serif'
                            }}
                          >
                            རྒྱུད་སྟོད་དཔེ་མཛོད་ཁང་གི་གཞུང་འབྲེལ་དྲ་ཚིགས་ལ་གཟིགས་རྒྱུ། (gyutolibrary.com) →
                          </a>
                        </div>
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('library')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
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
                  <h2 className="gt-dept-item-title">༥ — སྤྱི་ཐབ་ཁང་།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      རྒྱུད་སྟོད་གྲྭ་ཚང་གིས་སྤྱི་ཐབ་ཁང་ཞིག་གཉེར་བཞིན་ཡོད་པ་དེས་རྒྱུན་དུ་ཚལ་གསོས་པ་དང༌། དམ་དུས་དང་མཐུན་པའི་ཤིང་ཏོག་བཅས་ཀྱིས་དཀར་ཟས་གཙང་མ་དང་བཏུང་བ་བཅས་ཀྱི་མཐུན་རྐྱེན་སྦྱོར་བཞིན་ཡོད།
                      {!expandedDepts.kitchen && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('kitchen')}
                          aria-expanded={expandedDepts.kitchen}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.kitchen && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">ཉིན་རེའི་ཞལ་ལག་གི་དུས་ཚོད།</h3>
                        <ul className="gt-dept-schedule-list">
                          <li className="gt-dept-schedule-item">ཞོགས་ཟས། སྔ་དྲོ་ཆུ་ཚོད་ ༦:༠༠</li>
                          <li className="gt-dept-schedule-item">སྔ་དྲོའི་གསོལ་ཇ། སྔ་དྲོ་ཆུ་ཚོད་ ༩:༠༠</li>
                          <li className="gt-dept-schedule-item">གུང་ཟས། ཉིན་གུང་ཆུ་ཚོད་ ༡༢:༠༠</li>
                          <li className="gt-dept-schedule-item">ཕྱི་དྲོའི་གསོལ་ཇ། ཕྱི་དྲོ་ཆུ་ཚོད་ ༣:༠༠</li>
                          <li className="gt-dept-schedule-item">དགོང་ཟས། ཕྱི་དྲོ་ཆུ་ཚོད་ ༥:༠༠</li>
                        </ul>
                        <p>
                          ཆོས་ཕྱོགས་ཀྱི་མཛད་སྒོ་དང་། ཆོས་ཐོག དུས་ཆེན་ཁག་བཅས་ཀྱི་སྐབས་སུ་དམིགས་བསལ་ཞལ་ལག་གྲ་སྒྲིག་གནང་བ་དང་། གྲྭ་ཚང་གི་ལས་འགན་གྱི་ཆ་ཤས་སུ་ཟླ་བ་གཉིས་རེའི་མཚམས་ནས་གྲྭ་ཚང་གི་དགེ་འདུན་པ་ཞིག་ཐབ་ཚང་འགན་འཛིན་གྱི་ཕྱག་རོགས་སུ་བསྐོ་བཞག་བྱེད།
                        </p>
                        <h3 className="gt-dept-subheading">ལས་བྱེད།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>བཙུན་པ་ཡེ་ཤེས་རྒྱལ་མཚན། (ཐབ་ཚང་འགན་འཛིན།)</li>
                          <li>སྐུ་ཞབས་ཨ་མར་ཤར་མ། (མ་བྱན་གཙོ་བོ།)</li>
                          <li>སྐུ་ཞབས་པར་ཝིག་མ་གྷར། (མ་བྱན་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་ཚེ་དབང་། (ཇ་མ།)</li>
                          <li>སྐུ་ཞབས་ནོ་བིན་རཱ་ཡེ། (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་རྟམ་མགྲིན་དབང་ཕྱུག (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་བྱང་ཆུབ་འཇིགས་མེད་རྟ་མང་། (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་ཟླ་བ་རྟ་མང་། (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་ཨ་ཤོག་ཧེམ་རམ། (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་པ་སངས་རྟ་མང་། (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>སྐུ་ཞབས་པ་སངས་ནོར་བུ། (ཐབ་ཚང་ལས་རོགས།)</li>
                          <li>ལྕམ་སྐུ་གཱི་ཏ་རྟ་མང་། (གཙང་བཟོ་བ།)</li>
                          <li>ལྕམ་སྐུ་པ་སངས་སྒྲེ་མ། (གཙང་བཟོ་བ།)</li>
                        </ul>
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('kitchen')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 06 - Media, Photography & Communication Services */}
                <article id="media" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">༦ — བརྒྱུད་ལམ། བརྙན་པར། འབྲེལ་མཐུད་ཞབས་ཞུ།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      གྲྭ་ཚང་གིས་པར་ལེན་དང་འབྲེལ་བའི་བརྒྱུད་ལམ་དང་བརྡ་འཕྲིན་གྱི་ཞབས་ཞུ་དང་། ཡིག་ཚགས་བདག་ཉར། དྲ་ཚིགས་ཉར་ཚགས། སྤྱི་ཚོགས་འབྲེལ་མཐུད་དྲ་ལམ་(ངོ་དེབ)། དེ་བཞིན་གནས་ཚུལ་ཁྱབ་སྤེལ་བཅས་གཉེར་བཞིན་ཡོད།
                      {!expandedDepts.media && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('media')}
                          aria-expanded={expandedDepts.media}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.media && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">ལས་བྱེད།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>བཙུན་པ་བསྟན་འཛིན་རྒྱ་མཚོ།</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          ཕྱི་འབྲེལ་དང་འབྲེལ་མཐུད་ཞབས་ཞུའི་འགན་འཛིན། — སྔགས་རམས་པ་བློ་བཟང་དར་རྒྱས།
                        </p>
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('media')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 07 - Monastery Maintenance & Cleaning Services */}
                <article id="maintenance" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">༧ — དགོན་པའི་ཉམས་གསོ་དང་གཙང་བཟོ་ཞབས་ཞུ།</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      ལས་བྱེད་ཚོས་གཙང་སྦྲ་དང་། དགོན་པའི་ས་ཁོངས་སྤྱིའི་བདག་སྐྱོང་། དེ་བཞིན་གཞི་རྩའི་ཆུ་ལས་དང་ཉམས་གསོའི་ལས་དོན་བཅས་ཀྱི་འགན་འཁུར་བཞིན་ཡོད།
                      {!expandedDepts.maintenance && (
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('maintenance')}
                          aria-expanded={expandedDepts.maintenance}
                        >
                          ....རྒྱས་པ་གཟིགས་རྒྱུ།
                        </button>
                      )}
                    </p>

                    {expandedDepts.maintenance && (
                      <div className="gt-dept-expanded-content">
                        <h3 className="gt-dept-subheading">ལས་བྱེད།</h3>
                        <ul className="gt-dept-list-bulleted">
                          <li>སྐུ་ཞབས་སྭ་རན་ཀུ་མར།</li>
                          <li>ལྕམ་སྐུ་ནན་སི།</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          མཐུན་རྐྱེན་དང་རྨང་གཞིའི་འཛུགས་སྐྲུན་གྱི་འགན་འཛིན། — སྔགས་རམས་པ་བློ་བཟང་རྡོ་རྗེ།
                        </p>
                        <button
                          type="button"
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('maintenance')}
                          style={{ marginTop: '14px' }}
                        >
                          བསྡུ་རྒྱུ། ↑
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
                        <span className="gt-dept-nav-arrow">&gt;</span> ༡༽ སྤྱི་ཁྱབ་འཛིན་སྐྱོང་།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a
                        href="#education"
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('education', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ༢༽ སློབ་གཉེར།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a
                        href="#healthcare"
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('healthcare', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ༣༽ འཕྲོད་བསྟེན་དང་སྤྱི་ཚོགས།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a
                        href="#library"
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('library', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ༤༽ དཔེ་མཛོད་དང་ཡིག་ཚགས།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a
                        href="#kitchen"
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('kitchen', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ༥༽ སྤྱི་ཐབ་ཁང་།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a
                        href="#media"
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('media', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ༦༽ བརྒྱུད་ལམ་དང་འབྲེལ་མཐུད།
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a
                        href="#maintenance"
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('maintenance', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> ༧༽ ཉམས་གསོ་དང་གཙང་བཟོ།
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

        {/* 4. DEPARTMENTS ACROSS THE YEAR (TIMELINE) */}
        <DepartmentsAcrossYear lang="tb" />

        {/* 5. QUESTIONS ABOUT A DEPARTMENT (BLUE BANNER) */}
        <section className="gt-dept-cta-blue">
          <div className="container">
            <div className="gt-dept-cta-blue-inner">
              <div className="gt-dept-cta-blue-text">
                <h2 className="gt-dept-cta-blue-title">མཛད་རིམ་གྱི་སྐོར་ལ་དྲི་བ་ཡོད་དམ།</h2>
                <p className="gt-dept-cta-blue-desc">
                  དགོན་པའི་མཛད་རིམ་ཁག་དང་། བྱེད་སྒོ། ཞབས་ཞུ་བཅས་ཀྱི་སྐོར་ལ་འདྲི་རྩད་གནང་དགོས་ཚེ། དགོན་པར་ཐད་ཀར་འབྲེལ་བ་གནང་རོགས།
                </p>
                <button
                  type="button"
                  className="gt-dept-cta-white-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  འབྲེལ་གཏུགས་གནང་རོགས།
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
                  དགོན་པའི་ལོ་འཁོར་གཅིག་གི་ཆོས་ཕྱོགས་མཛད་རིམ་ལ་གཟིགས་རྟོག་གནང་རོགས།
                </p>
                <h2 className="gt-dept-events-heading">
                  ལོ་འཁོར་གཅིག་གི་ཆོས་ཕྱོགས་མཛད་རིམ།
                </h2>
                <button
                  type="button"
                  className="gt-dept-calendar-btn"
                  onClick={() => onNavigate && onNavigate('programmes')}
                >
                  ལོ་ཐོ་གཟིགས་རྒྱུ།
                </button>
              </div>

              <div className="gt-dept-events-cards-wrap">
                <span className="gt-dept-events-top-tag">འབྱུང་འགྱུར་གྱི་མཛད་རིམ།</span>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">བོད་ཟླ་</span>
                    <span className="gt-event-day">༡ ཚེས</span>
                    <span className="gt-event-year">༡-༡༥</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>ཆོ་འཕྲུལ་སྨོན་ལམ་ཆེན་མོ།</h4>
                    <p>ཆོ་འཕྲུལ་སྨོན་ལམ་ཆེན་མོ་དང་རྒྱུད་སྟོད་སྨོན་ལམ་ཚོགས་པ།</p>
                  </div>
                </div>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">བོད་ཟླ་</span>
                    <span className="gt-event-day">༤ ཚེས</span>
                    <span className="gt-event-year">༡༥</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>ས་ག་ཟླ་བའི་དུས་ཆེན།</h4>
                    <p>སྟོན་པ་སངས་རྒྱས་ཀྱི་སྐུ་བལྟམས་པ་དང་། སངས་རྒྱས་པ། མྱ་ངན་ལས་འདས་པའི་དུས་ཆེན།</p>
                  </div>
                </div>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">བོད་ཟླ་</span>
                    <span className="gt-event-day">༦ ཚེས</span>
                    <span className="gt-event-year">༤</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>ཆོས་འཁོར་དུས་ཆེན།</h4>
                    <p>སྟོན་པ་ཤཱཀྱ་ཐུབ་པས་བདེན་བཞིའི་ཆོས་འཁོར་ཐོག་མར་བསྐོར་བའི་དུས་ཆེན།</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SUPPORT SECTION */}
        <SupportSection lang="tb" onNavigate={onNavigate} />
      </main>

      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { DepartmentsTb, DepartmentsAcrossYear };
