import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import {
  RightWhorlConch,
  EndlessKnot,
  DharmachakraWatermark
} from '../components/MonasteryIcons';
import { ABOUT_DUMMY_IMAGES, PAST_ABBOTS } from './about';
import './about.css';

export default function AboutTb({ onSwitchLanguage, onNavigate }) {
  const handleNav = (pageKey, e, sectionId) => {
    if (onNavigate) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      onNavigate(pageKey, sectionId);
    }
  };

  return (
    <div className="gt-about-page tibetan-about-page tibetan-text">
      {/* 1. Header with 'ABOUT' Active in Tibetan view */}
      <Header
        lang="tb"
        active="about"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-main-content">
        {/* 2. Hero Banner */}
        <section className="gt-about-hero">
          <div className="gt-about-hero-content">
            <h1 className="gt-about-hero-title">དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།</h1>
            <p className="gt-about-hero-sub">
              གསང་སྔགས་རིག་འཛིན་གྱི་སྡེ་ཆེན་པོ།
            </p>
          </div>
        </section>

        {/* 3. Our Legacy Section (Figma Frame 2147236736: #FDF1D7) */}
        <section className="gt-legacy-section">
          <div className="gyuto-container">
            <div className="gt-legacy-story-grid">
              {/* Row 1 (Frame 2147236732): Conch + Title + Text on Left, Complex Image on Right */}
              <div className="gt-legacy-story-row">
                <div className="gt-legacy-text-col">
                  <div className="gt-legacy-conch-wrap">
                    <RightWhorlConch width={48} height={80} />
                  </div>
                  <div className="gt-legacy-text-content">
                    <h2 className="gt-legacy-title">ང་ཚོའི་ལོ་རྒྱུས།</h2>
                    <p className="gt-legacy-para">
                      བོད་གངས་ཅན་གྱི་ལྗོངས་སུ་ཕྱི་ལོ་ ༡༤༧༤ ལོར་ཕྱག་བཏབ་པ་ནས་བཟུང་། དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་འདི་ཉིད་ཀྱིས་ལོ་ངོ་ལྔ་བརྒྱ་ལྷག་གི་རིང་ལ་རི་བོ་དགེ་ལྡན་པའི་གསང་སྔགས་ཀྱི་བསྟན་པ་རྨད་དུ་བྱུང་བ་རྣམས་མི་ཉམས་རྒྱུན་འཛིན་གནང་ཡོད། ཐོག་མའི་ཆགས་ཡུལ་གྱི་ས་ཆའི་ཐོག་ནས་ཐོབ་པའི་གྲྭ་ཚང་གི་མཚན་བྱང་འདིས། གྲྭ་ཚང་འདི་ཉིད་བོད་བརྒྱུད་ནང་བསྟན་གྱི་རིག་གཞུང་ཁྲོད་ལོ་རྒྱུས་ཀྱི་རྩ་བ་གཏིང་ཟབ་མོ་ཡོད་པར་མཚོན་ཡོད་ལ། ཕྱི་ལོ་ ༡༩༥༩ ལོར་རྒྱ་གར་དྷ་རམ་ས་ལར་གྲྭ་ཚང་འདི་ཉིད་བསྐྱར་འཛུགས་གནང་བ་ནས་བཟུང་། ཆོས་སྡེ་འདིས་གཞུང་ཆེན་སློབ་གཉེར་དང་། སྒོམ་སྒྲུབ་ཉམས་ལེན། དེ་བཞིན་འཛམ་གླིང་ས་ཕྱོགས་གང་ས་ནས་ཕེབས་པའི་ཆོས་ཞུ་བ་དང་གཟིགས་སྐོར་བ་རྣམས་ལ་ཞབས་ཞུའི་ཕྱག་ལས་མུ་མཐུད་དེ་གནང་བཞིན་ཡོད།
                    </p>
                  </div>
                </div>
                <div className="gt-legacy-img-col">
                  <img
                    src={ABOUT_DUMMY_IMAGES.legacyComplex}
                    alt="དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།"
                    className="gt-legacy-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Row 2 (Frame 2147236733): Mountain Image on Left, Mission Text on Right */}
              <div className="gt-legacy-story-row reversed">
                <div className="gt-legacy-img-col">
                  <img
                    src={ABOUT_DUMMY_IMAGES.legacyMountain}
                    alt="ཧི་མ་ལ་ཡའི་རི་རྒྱུད་དུ་ཆགས་པའི་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།"
                    className="gt-legacy-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-legacy-text-col gt-legacy-text-col-center">
                  <p className="gt-legacy-para">
                    གྲྭ་ཚང་འདི་ཉིད་ཀྱི་དམིགས་ཡུལ་གཙོ་བོ་ནི། ཤེས་ཡོན་སློབ་གཉེར་དང་། སྒོམ་སྒྲུབ་ཉམས་ལེན། ཆོ་ག་ཕྱག་ལེན། རིག་གཞུང་སྲུང་སྐྱོབ་བཅས་བརྒྱུད་ནས་དགེ་ལུགས་པའི་གསང་སྔགས་ཀྱི་བསྟན་པ་རྣམ་པར་དག་པ་འདི་ཉིད་མི་ཉམས་གོང་འཕེལ་གཏོང་རྒྱུ་དེ་ཡིན། དེང་སྐབས་གྲྭ་ཚང་འདིར་དགེ་འདུན་པ་ཞལ་གྲངས་ ༢༥༠ ནས་ ༣༠༠ ཙམ་གྱིས་ནང་པའི་ལྟ་གྲུབ་དང་། ཚད་མ་རིག་པ། རྒྱུད་ཀྱི་གཞུང་ཟབ་མོ་བཅས་ལ་ལོ་མང་པོའི་རིང་བརྩོན་པ་དྲག་པོས་སློབ་གཉེར་གནང་བཞིན་ཡོད། དབུས་བོད་མིའི་སྒྲིག་འཛུགས་ཀྱིས་ཀྱང་ཆོས་སྡེ་འདི་ཉིད་ཤེས་ཡོན་དང་ཉམས་ལེན་གྱི་བསྟི་གནས་ཁྱད་པར་བ་ཞིག་ཏུ་ངོས་འཛིན་གནང་བར་མ་ཟད། བོད་བརྒྱུད་ནང་བསྟན་གྱི་སྤྱི་ཚོགས་ཁྲོད་ནུས་པ་མཉམ་འདོན་གནང་སའི་ཆོས་སྡེ་གལ་ཆེན་ཞིག་ཀྱང་ཡིན།
                  </p>
                </div>
              </div>

              {/* Row 3 (Frame 2147236734): Reestablishment Text on Left, Yerpa Image on Right */}
              <div className="gt-legacy-story-row">
                <div className="gt-legacy-text-col gt-legacy-text-col-center">
                  <p className="gt-legacy-para">
                    རྒྱ་གར་དུ་གྲྭ་ཚང་འདི་ཉིད་བསྐྱར་འཛུགས་གནང་བ་འདིས། བོད་ཀྱི་ནང་བསྟན་རིག་གཞུང་མི་ཉམས་རྒྱུན་འཛིན་གྱི་ཁྲོད་ནས་གྲུབ་འབྲས་རླབས་ཆེན་ཞིག་མཚོན་ཡོད་ལ། འདི་གའི་འདུས་སྡེ་ཡིས་ལོ་རྒྱུས་ཀྱི་དཀའ་ཚེགས་དུ་མར་གདོང་ལེན་གནང་སྟེ། དགེ་ལྡན་པའི་གསང་སྔགས་ཀྱི་བསྟན་པ་མཚོན་པར་བྱེད་པའི་ཚད་ལྡན་གྱི་བཤད་པ་དང་སྒྲུབ་པ་རྣམས་ལེགས་པར་རྒྱུན་འཛིན་གནང་ཡོད། དེང་གི་ཆར་ཡང་ས་ཕྱོགས་གང་ས་ནས་དགེ་འདུན་པ་མང་དག་ཅིག་ཆོས་སྡེ་འདིར་འདུས་ཤིང་། དེར་བརྟེན་ནས་ནང་བསྟན་གྱི་བཤད་སྒྲུབ་ལ་བརྩོན་པའི་ཆོད་སེམས་ཀྱིས་གཅིག་སྒྲིལ་གྱི་འདུས་སྡེ་ཞིག་གྲུབ་ཡོད། ཤེས་ཡོན་དང་། ཉམས་ཞིབ། ཕྱི་ཕྱོགས་ཀྱི་འཇིག་རྟེན་དང་འབྲེལ་འདྲིས་ཧུར་ཐག་གནང་བ་བཅས་བརྒྱུད་ནས། རྒྱུད་སྟོད་གྲྭ་ཚང་ནི་བོད་ཀྱི་ནང་ཆོས་རྣལ་མ་བརྒྱུད་སྤྲོད་བྱ་སའི་བསྟི་གནས་གལ་ཆེན་ཞིག་ཡིན།
                  </p>
                </div>
                <div className="gt-legacy-img-col">
                  <img
                    src={ABOUT_DUMMY_IMAGES.legacyYerpa}
                    alt="བྲག་ཡེར་པའི་ལྷ་ཁང་།"
                    className="gt-legacy-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Institutional Leadership Section (Figma Gold: #FFD781) */}
        <section className="gt-leadership-section">
          <div className="gyuto-container">
            <div className="gt-leadership-head">
              <h2 className="gt-leadership-title">སྒྲིག་འཛུགས་ཀྱི་དབུ་ཁྲིད།</h2>
              <p className="gt-leadership-intro-text">
                དགོན་པའི་འཛིན་སྐྱོང་དང་ཆོས་ཕྱོགས་ཀྱི་དབུ་ཁྲིད་སྐྱབས་གནས་མཁན་རིན་པོ་ཆེ་ཡིན། དེ་ལ་སློབ་གཉེར་དང་། ཉམས་ལེན། ཡིག་ཚགས། འཕྲོད་བསྟེན། དེ་བཞིན་སྤྱི་ཚོགས་ཞབས་ཞུ་བཅས་ལ་ལྟ་རྟོག་གནང་མཁན་བཅས་སྡེ་ཚན་ཁག་གི་འགན་འཛིན་རྣམས་ཀྱིས་རྒྱབ་སྐྱོར་གནང་བ་དང་། དགེ་བསྐོས་ཀྱིས་དགོན་པའི་སྒྲིག་དང་ཀུན་སྤྱོད་ལ་ལྟ་རྟོག་གནང་ཞིང་། འདུས་སྡེ་འདི་ཉིད་དགེ་ལུགས་པའི་ཕྱག་སྲོལ་ལྟར་གྱི་འདུལ་ཁྲིམས་ནན་པོ་ལ་གནས་པར་བྱེད། སྒྲིག་འཛུགས་ཀྱི་བཀོད་པ་འདི་ནི། དེང་རབས་ཀྱི་དགོས་མཁོ་དང་བསྟུན་ནས་དགོན་པའི་དམིགས་ཡུལ་རྒྱུན་འཁྱོངས་བྱེད་པའི་སླད་དུ། ལོ་ངོ་བརྒྱ་ཕྲག་མང་པོའི་རིང་ལེགས་བཅོས་རིམ་པར་བྱས་པ་ཞིག་ཡིན།
              </p>
            </div>

            <div className="gt-leaders-list">
              {/* Leader 1: Khangser Rinpoche */}
              <div className="gt-leader-card">
                <div className="gt-leader-photo-wrap">
                  <div className="gt-leader-img-box">
                    <img
                      src={ABOUT_DUMMY_IMAGES.abbotKhangser}
                      alt="མཁན་རིན་པོ་ཆེ་ཁང་སེར་མཆོག"
                      className="gt-leader-photo"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="gt-leader-name">ཁང་སེར་རིན་པོ་ཆེ།</h3>
                  <p className="gt-leader-title">མཁན་པོ། (༢༠༢༦)</p>
                </div>

                <div className="gt-leader-bio-wrap">
                  <p>
                    ཁང་སེར་རིན་པོ་ཆེ་མཆོག་ནི། ཕྱི་ལོ་ ༡༩༧༥ ལོའི་ཟླ་བ་ ༥ པའི་ནང་བལ་ཡུལ་གྱི་རྒྱལ་ས་ཀཐ་མན་གྲུར་འཁྲུངས། དགུང་ལོ་ལྔའི་ཐོག་ཡང་སྲིད་འཚོལ་ཞིབ་ཚོགས་ཆུང་གིས་ཁོང་ཉིད་ཁང་སེར་རིན་པོ་ཆེ་སྐུ་ཕྲེང་བདུན་པའི་ཡང་སྲིད་དུ་ངོས་འཛིན་ཞུས། ཁོང་ནི་བོད་ཀྱི་དབུ་ཁྲིད་༸སྤྱི་ནོར་༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོ་མཆོག་གི་ཡང་སྲིད་ངོས་འཛིན་གནང་མཁན་བླ་ཆེན་གསུམ་གྱི་གྲས་ཤིག་ཡིན། ཁོང་གིས་རྡ་སའི་རིགས་ལམ་སློབ་གཉེར་ཁང་དུ་གཞུང་ཆེན་ཁག་གི་སྔོན་འགྲོའི་གསན་བསམ་རྣམས་གནང་ཞིང་། དེའི་རྗེས་གདན་ས་ཆེན་པོ་སེར་བྱེས་གྲྭ་ཚང་དང་། དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་བཅས་སུ་མདོ་སྔགས་ཀྱི་གཞུང་ཆེན་ཁག་ལ་སློབ་གཉེར་མཐར་ཕྱིན་པར་གནང་། གྲྭ་ཚང་དེ་དག་ནས་རིན་པོ་ཆེ་མཆོག་གིས་དགེ་བཤེས་ལྷ་རམས་པ་དང་སྔགས་རམས་པའི་ཕྱག་འཁྱེར་རྩེད་ཕུད་ཀྱི་གྲུབ་འབྲས་ཀྱང་བཞེས།
                  </p>
                  <p>
                    ད་ལྟའི་ཆར་རིན་པོ་ཆེ་མཆོག་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་བླ་མ་དབུ་མཛད་ཡིན་པ་དང་། ཐང་དཀར་བདེ་ཆེན་ཆོས་གླིང་སློབ་གཉེར་ཁང་གསར་འཛུགས་དང་དེའི་ཚོགས་གཙོ་བཅས་ཀྱི་ཐུགས་འགན་བཞེས་བཞིན་ཡོད། བལ་ཡུལ་དུ་ཡོད་པའི་སློབ་གླིང་དེ་ནི་དགོན་པ་དང་སློབ་གྲྭ་གཉིས་ཀ་ཡིན་ཞིང་། དེར་གྲྭ་གཞོན་བརྒྱད་ཅུ་ལྷག་ལ། ཁ་ལག་དང་། སྡོད་གནས། ནང་ཆོས་དང་ནུབ་ཕྱོགས་ཀྱི་དེང་རབས་སློབ་ཚན་གཉིས་ཀའི་ཤེས་ཡོན་བཅས་ཀྱི་མཐུན་རྐྱེན་རིན་མེད་དུ་སྦྱོར་བཞིན་ཡོད། སློབ་ཕྲུག་ཡོངས་རྫོགས་ཉམ་ཐག་དང་། དེའི་ཁྲོད་ཀྱི་མང་པོ་ཞིག་ནི་དྭ་ཕྲུག་ཡིན། ཁང་སེར་རིན་པོ་ཆེ་མཆོག་གིས་འཛམ་གླིང་ཡུལ་གྲུ་གང་སར་དིབ་ཀར་ཆོས་ཚོགས་མང་པོ་གསར་འཛུགས་གནང་ཞིང་། ཉམ་ཐག་རྣམས་ལ་ཞལ་ལག་རིན་མེད་དུ་འབུལ་བ་སོགས་གཞན་ཕན་གྱི་མཛད་འཕྲིན་མང་དུ་སྐྱོང་བཞིན་པ་ལགས་སོ། །
                  </p>
                  <p>
                    <a
                      href="https://us.dipkar.com/khangser/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gt-leader-bio-link"
                    >
                      ཁང་སེར་རིན་པོ་ཆེའི་རྣམ་ཐར་རྒྱས་པ་གཟིགས་པར་འདིར་གནོན།
                    </a>
                  </p>
                </div>
              </div>

              {/* Leader 2: Ven. Yangten Tulku Rinpoche */}
              <div className="gt-leader-card">
                <div className="gt-leader-photo-wrap">
                  <div className="gt-leader-img-box">
                    <img
                      src={ABOUT_DUMMY_IMAGES.abbotYangten}
                      alt="ཡང་སྟེང་རིན་པོ་ཆེ།"
                      className="gt-leader-photo"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="gt-leader-name">ཡང་སྟེང་རིན་པོ་ཆེ།</h3>
                  <p className="gt-leader-title">མཁན་པོ། (༢༠༢༦)</p>
                </div>

                <div className="gt-leader-bio-wrap">
                  <p>
                    ཡང་སྟེང་རིན་པོ་ཆེ་མཆོག་ནི། ཕྱི་ལོ་ ༡༩༧༨ ཟླ་བ་ ༡༢ ཚེས་ ༡༥ ཉིན་བོད་ཁམས་འདབ་པ་རུ་ཡབ་བློ་བཟང་རྡོ་རྗེ་དང་ཡུམ་སྐལ་བཟང་དབྱངས་འཛོམས་གཉིས་ཀྱི་སྲས་སུ་སྐུ་འཁྲུངས། དགུང་ལོ་བཅུའི་ཐོག་ཡང་སྟེང་རིན་པོ་ཆེ་སྐུ་གོང་མའི་ཡང་སྲིད་དུ་ངོས་འཛིན་ཞུས། རྒྱ་ནག་གི་དབང་བསྒྱུར་འོག་བོད་ནང་ལོ་ངོ་ ༡༢ བཞུགས་རྗེས། རང་ཡུལ་བཞག་ནས་རྒྱ་གར་འཕགས་པའི་ཡུལ་དུ་བོད་ཀྱི་སྲོལ་རྒྱུན་གཞུང་ཆེན་ཁག་ལ་སློབ་གཉེར་གནང་བར་ཕེབས།
                  </p>
                  <p>
                    ཕྱི་ལོ་ ༡༩༩༠ ལོར་རྒྱ་གར་ལྷོ་ཕྱོགས་ཀ་ན་ཊ་ཀ་མངའ་སྡེའི་བེལ་ཀོབ་ཏུ་ཡོད་པའི་གདན་ས་ཆེན་པོ་སེར་སྨད་ཐོས་བསམ་ནོར་གླིང་དུ་ཆོས་ཞུགས་གནང་། དེར་རིན་པོ་ཆེ་མཆོག་གིས། རྒྱལ་རོང་མཁན་ཟུར་རིན་པོ་ཆེ་མཆོག་དང་སྒོ་སོག་རིན་པོ་ཆེ་ལ་སོགས་པ་མཁས་གྲུབ་གཉིས་ལྡན་གྱི་བླ་མ་མང་པོའི་ཞབས་ལ་གཏུགས་ཏེ་གྲུབ་མཐའ་དང་། ཚད་མ་རིག་པ། མངོན་པ། འདུལ་བ་སོགས་གཞུང་ཆེན་ཁག་ལ་གསན་བསམ་ལེགས་པར་གནང་། གཞན་ཡང་རིན་པོ་ཆེ་མཆོག་ནི་༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོ་མཆོག་གི་ཉེ་བའི་ཞལ་སློབ་ཅིག་ཡིན་པ་དང་། ད་ལྟའི་ཆར་༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོའི་སྐུ་སྒེར་ཡིག་ཚང་དུ་ཞབས་ཞུ་སྒྲུབ་བཞིན་པ་ལགས་སོ། །
                  </p>
                  <p>
                    <a
                      href="https://jamyangbc.sharepoint.com/:b:/g/EUO-sqSY1llDiNcoqkcIYVcByEVBXHu5RFte5s0CO9N4Tg?e=WyxzWh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gt-leader-bio-link"
                    >
                      ཡང་སྟེང་རིན་པོ་ཆེའི་རྣམ་ཐར་རྒྱས་པ་གཟིགས་པར་འདིར་གནོན།
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Past Abbots of Gyuto Monastery Section (Figma Cream: #FDF1D7) */}
        <section className="gt-past-abbots-section">
          <div className="gyuto-container">
            <div className="gt-past-abbots-head">
              <h2 className="gt-past-abbots-title">གྲྭ་ཚང་གི་མཁན་པོ་རིམ་བྱོན།</h2>
              <p className="gt-past-abbots-desc">
                མི་ལོ་ལྔ་བརྒྱ་ལྷག་གི་རིང་མཁས་ཤིང་གྲུབ་པ་བརྙེས་པའི་སྐྱེས་བུ་རིམ་བྱོན་དག་གིས། དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དགེ་ལྡན་པའི་གསང་སྔགས་ཀྱི་ཕྱག་བཞེས་དང་། ཐོས་བསམ་ཟབ་མོ། ཆོས་ཀྱི་བརྒྱུད་པ་བཅས་འཛིན་སྐྱོང་གནང་ཡོད་ལ། དེང་སྐབས་ཀྱང་གྲྭ་ཚང་འདི་ཉིད་ཀྱིས་ཁོང་རྣམ་པས་ནན་ཏན་མཛད་པའི་ཐོས་བསམ་སྒོམ་གསུམ་གྱི་ཤུལ་བཞག་རྣམས་རྒྱུན་འཛིན་གནང་བཞིན་ཡོད།
              </p>
            </div>

            <div className="gt-past-abbots-grid">
              {PAST_ABBOTS.map((abbot) => (
                <div key={abbot.id} className="gt-past-abbot-card">
                  <img
                    src={abbot.img}
                    alt={`Gyuto Abbot ${abbot.id}`}
                    className="gt-past-abbot-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Serving Every Aspect of Monastic Life (Departments Preview) */}
        <section className="gt-about-depts-section">
          <div className="gyuto-container">
            <div className="gt-about-depts-head">
              <div className="gt-about-depts-text">
                <h2 className="gt-about-depts-title">ཕྱོགས་ཡོངས་ཀྱི་ཞབས་ཞུ་དང་ཆོས་ཕྱོགས་མཛད་རིམ།</h2>
                <p className="gt-about-depts-desc">
                  དྲ་ཚིགས་འདིར་འཁོད་པའི་འཛིན་སྐྱོང་དང་། སློབ་གཉེར། འཕྲོད་བསྟེན་ཚན་པ། ལོ་རེའི་ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ་བཅས་ཀྱི་ངོ་སྤྲོད།
                </p>
              </div>
              <button
                type="button"
                className="gt-view-depts-btn"
                onClick={() => handleNav('departments')}
              >
                སྡེ་ཚན་ཆ་ཚང་གཟིགས་རྒྱུ།
              </button>
            </div>

            <div className="gt-about-depts-cards-grid">
              {/* Administration */}
              <div
                className="gt-about-dept-card"
                onClick={(e) => handleNav('departments', e, 'admin')}
                style={{ cursor: 'pointer' }}
              >
                <div className="gt-about-dept-img-wrap">
                  <img
                    src={ABOUT_DUMMY_IMAGES.deptAdmin}
                    alt="Monastery Administration"
                    className="gt-about-dept-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-about-dept-body">
                  <h3 className="gt-about-dept-name">འཛིན་སྐྱོང་ཚན་པ།</h3>
                  <p className="gt-about-dept-snippet">
                    དགོན་པའི་ཉིན་རེའི་ལས་དོན་དང་། སྒྲིག་འཛུགས་ཀྱི་ལས་དོན་བཅས་ལ་འགན་ཁུར་གནང་བཞིན་ཡོད།
                  </p>
                  <a
                    href="/departments#admin"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e, 'admin')}
                  >
                    རྒྱས་པ་གཟིགས་རྒྱུ། <span>→</span>
                  </a>
                </div>
              </div>

              {/* Education */}
              <div
                className="gt-about-dept-card"
                onClick={(e) => handleNav('departments', e, 'education')}
                style={{ cursor: 'pointer' }}
              >
                <div className="gt-about-dept-img-wrap">
                  <img
                    src={ABOUT_DUMMY_IMAGES.deptEdu}
                    alt="Monastic Education"
                    className="gt-about-dept-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-about-dept-body">
                  <h3 className="gt-about-dept-name">སློབ་གཉེར་ཚན་པ།</h3>
                  <p className="gt-about-dept-snippet">
                    དགེ་ལུགས་ཀྱི་གཞུང་དང་། མཚན་ཉིད་རྩོད་པ། སྔགས་ཀྱི་ཆོ་ག་བཅས་ལ་སློབ་གཉེར་གནང་བཞིན་ཡོད།
                  </p>
                  <a
                    href="/departments#education"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e, 'education')}
                  >
                    རྒྱས་པ་གཟིགས་རྒྱུ། <span>→</span>
                  </a>
                </div>
              </div>

              {/* Healthcare */}
              <div
                className="gt-about-dept-card"
                onClick={(e) => handleNav('departments', e, 'healthcare')}
                style={{ cursor: 'pointer' }}
              >
                <div className="gt-about-dept-img-wrap">
                  <img
                    src={ABOUT_DUMMY_IMAGES.deptHealthcare}
                    alt="Healthcare Services"
                    className="gt-about-dept-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-about-dept-body">
                  <h3 className="gt-about-dept-name">འཕྲོད་བསྟེན་ཚན་པ།</h3>
                  <p className="gt-about-dept-snippet">
                    དགེ་འདུན་པ་རྣམས་ཀྱི་ལུས་སེམས་བདེ་ཐང་ལ་ཞབས་ཞུ་དང་སྨན་བཅོས་མཐུན་རྐྱེན་སྦྱོར་བཞིན་ཡོད།
                  </p>
                  <a
                    href="/departments#healthcare"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e, 'healthcare')}
                  >
                    རྒྱས་པ་གཟིགས་རྒྱུ། <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Spiritual Programmes throughout the Year (Figma Gold: #FFD781) */}
        <section className="gt-about-progs-section">
          <div className="gyuto-container">
            <div className="gt-about-progs-grid">
              {/* Left Column: Description & Action */}
              <div className="gt-about-progs-info-col">
                <h2 className="gt-about-progs-title">ལོ་འཁོར་གཅིག་གི་ཆོས་ཕྱོགས་མཛད་རིམ།</h2>
                <p className="gt-about-progs-body">
                  བོད་ཀྱི་ལོ་ཐོ་ལྟར་དགོན་པས་ལོ་རེའི་ནང་དུ་གསུང་ཆོས་དང་། སྒྲུབ་མཆོད།
                  ཆོས་ཕྱོགས་ཀྱི་རྒྱུགས་སྤྲོད་སོགས་མཛད་རིམ་རྒྱུན་ཆད་མེད་པར་སྤེལ་བཞིན་ཡོད།
                </p>
                <button
                  type="button"
                  className="gt-view-calendar-btn"
                  onClick={() => handleNav('programmes#calendar')}
                >
                  ལོ་ཐོ་གཟིགས་རྒྱུ།
                </button>
              </div>

              {/* Right Column: Event Cards Stack */}
              <div className="gt-events-stack-col">
                <h4>འབྱུང་འགྱུར་གྱི་མཛད་རིམ།</h4>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">བོད་ཟླ་</div>
                    <div className="gt-event-date-day">༡ ཚེས</div>
                    <div className="gt-event-date-year">༡-༡༥</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>ཆོ་འཕྲུལ་སྨོན་ལམ་ཆེན་མོ།</h5>
                    <p>ཆོ་འཕྲུལ་སྨོན་ལམ་ཆེན་མོ་དང་རྒྱུད་སྟོད་སྨོན་ལམ་ཚོགས་པ།</p>
                  </div>
                </div>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">བོད་ཟླ་</div>
                    <div className="gt-event-date-day">༤ ཚེས</div>
                    <div className="gt-event-date-year">༡༥</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>ས་ག་ཟླ་བའི་དུས་ཆེན།</h5>
                    <p>སྟོན་པ་སངས་རྒྱས་ཀྱི་སྐུ་བལྟམས་པ་དང་། སངས་རྒྱས་པ། མྱ་ངན་ལས་འདས་པའི་དུས་ཆེན།</p>
                  </div>
                </div>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">བོད་ཟླ་</div>
                    <div className="gt-event-date-day">༦ ཚེས</div>
                    <div className="gt-event-date-year">༤</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>ཆོས་འཁོར་དུས་ཆེན།</h5>
                    <p>སྟོན་པ་ཤཱཀྱ་ཐུབ་པས་བདེན་བཞིའི་ཆོས་འཁོར་ཐོག་མར་བསྐོར་བའི་དུས་ཆེན།</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Preserving Buddhist Knowledge (Library - Figma Slate Blue: #6B9EBD - Frame 625809) */}
        <section className="gt-library-section">
          <div className="gt-library-container">
            <div className="gt-library-texture-wrap" aria-hidden="true">
              <img
                src={ABOUT_DUMMY_IMAGES.dharmachakraWatermark}
                alt=""
                className="gt-library-texture-img"
                loading="lazy"
              />
            </div>
            <div className="gt-library-content-col">
              <div className="gt-library-text-block">
                <h2 className="gt-library-title">ནང་བསྟན་མི་ཉམས་རྒྱུན་འཛིན་དང་རྒྱབ་སྐྱོར།</h2>
                <p className="gt-library-desc">
                  དགོན་པའི་དཔེ་མཛོད་ཁང་དང་། ཕྱག་དཔེ་གློག་རྡུལ་ཅན་དུ་བསྒྱུར་བའི་ལས་གཞི། ཆོས་བརྒྱུད་མི་ཉམས་རྒྱུན་འཛིན་ལ་རྒྱབ་སྐྱོར་ཞུ་ཕྱོགས་བཅས་ཀྱི་སྐོར།
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

        {/* 9. Support the Continuity of the Tradition (Figma White: #FFFFFF - Frame 625810) */}
        <SupportSection lang="tb" onNavigate={handleNav} />
      </main>

      {/* 10. Footer */}
      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { AboutTb };
