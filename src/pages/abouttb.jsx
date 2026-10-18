import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  RightWhorlConch,
  EndlessKnot,
  DharmachakraWatermark
} from '../components/MonasteryIcons';
import { ABOUT_DUMMY_IMAGES, PAST_ABBOTS } from './about';
import './about.css';

export default function AboutTb({ onSwitchLanguage, onNavigate }) {
  const handleNav = (pageKey, e) => {
    if (onNavigate) {
      if (e) e.preventDefault();
      onNavigate(pageKey);
    }
  };

  return (
    <div className="gt-about-page tibetan-about-page">
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
            <h1 className="gt-about-hero-title">དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་སྐོར།</h1>
            <p className="gt-about-hero-sub">
              དགེ་ལུགས་སྔགས་ཀྱི་རིག་གནས་དང་སྒོམ་སྒྲུབ་ཀྱི་ལྟེ་གནས།
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
                    <h2 className="gt-legacy-title">བྲག་ཡེར་པའི་རིག་གནས།</h2>
                    <p className="gt-legacy-para">
                      དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་ནི་སྤྱི་ལོ་༡༤༧༤ ལོར་བོད་དུ་བཙུགས་ཤིང་། དགེ་ལུགས་སྔགས་ཀྱི་བརྒྱུད་པ་ལོ་ལྔ་བརྒྱ་ལས་མང་པོར་བསྲུང་གི་ཡིན། ལོ་༡༩༥༩ དུ་རྒྱ་གར་དྷར་མ་ཤ་ལར་སླར་གསར་དུ་བཙུགས་ནས་དེ་རིང་ཡང་རིག་པའི་སྦྱོང་བ། ཞི་གནས་བསྒོམ་སྦྱོར། དང་མི་སེར་ལ་ལེགས་སྐུ་གཏོང་བའི་ལས་ཀ་ལ་གཞོལ་བཞིན་ཡོད།
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
                    དགོན་པའི་གཞི་བབ་ནི་དགེ་ལུགས་སྔགས་ཀྱི་དགེ་རྒྱུད་སློབ་གཉེར། ཞི་གནས་བསྒོམ་སྦྱོར། ཆོས་སྐུད། དང་རིག་གཞུང་ཉར་ཚགས་ལ་བརྩེགས་ཏེ་བསྲུང་བའི་ལས་ཡིན། དེ་རིང་གུ་དགེ་སྦྱོང་༢༥༠-༣༠༠ ཀི་ཕྱིས་ཏེ་དགེ་ལུགས་ཞིང་ལ་རིག་པ། སྐུ་དགེ་མཚན་གཏོང་བའི་རིག་པ། དང་སྔགས་ཀྱི་རིག་པ་ལ་སྦྱང་བཞིན་ཡོད། དབུས་བོད་གཞུང་དགེ་རྐྱེན་ཁང་གིས་དགོན་པ་དེ་ཆོས་དང་རིག་གནས་ལ་གཙོ་བོའི་གཞི་རིམ་དུ་ངོ་སྐུར་བྱས་ཡོད།
                  </p>
                </div>
              </div>

              {/* Row 3 (Frame 2147236734): Reestablishment Text on Left, Yerpa Image on Right */}
              <div className="gt-legacy-story-row">
                <div className="gt-legacy-text-col gt-legacy-text-col-center">
                  <p className="gt-legacy-para">
                    དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་རྒྱ་གར་དུ་སླར་གསར་བཙུགས་པ་ནི་བོད་བརྒྱུད་ཆོས་གཞུང་སྲུང་སྐྱབ་ལ་གཙོ་བོའི་ལས་ཡིན། དུས་ཚོད་ཀྱི་དཀའ་ངལ་ལ་བརྟེན་ནས་དགོན་པ་དེ་དགེ་ལུགས་སྔགས་ཀྱི་དགེ་རྒྱུད་ཉར་ཚགས་བྱེད་བཞིན་ཡོད། དགོན་པར་རིག་གནས་འདོད་པའི་དགེ་སྦྱོང་མང་པོ་ཞུགས་ཡོད་ལ། ཆོས་དང་རིག་གནས་ལ་གཏན་ཐུབ་པའི་དགེ་སྦྱོང་དགོ་དེ་སྐུ་ཕོ་གཞོ་བཞིན་ཡོད།
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
              <h2 className="gt-leadership-title">Institutional Leadership</h2>
              <p className="gt-leadership-intro-text">
                The monastery is led by an Abbot (mkhan po) who serves as both the spiritual
                and administrative head of the community. The Abbot is supported by department
                heads who oversee education, spiritual practice, archives, healthcare, and
                community services. A disciplinarian (dge skos) maintains monastic discipline
                and conduct, ensuring that the community adheres to the strict ethical standards
                established by the Gelug tradition. This organizational structure has been refined
                over centuries to sustain the monastery's mission while adapting to contemporary needs.
              </p>
            </div>

            <div className="gt-leaders-list">
              {/* Leader 1: Khangser Rinpoche */}
              <div className="gt-leader-card">
                <div className="gt-leader-photo-wrap">
                  <div className="gt-leader-img-box">
                    <img
                      src={ABOUT_DUMMY_IMAGES.abbotKhangser}
                      alt="His Eminence Khangser Rinpoche"
                      className="gt-leader-photo"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="gt-leader-name">Khangser Rinpoche</h3>
                  <p className="gt-leader-title">Abbot (2026)</p>
                </div>

                <div className="gt-leader-bio-wrap">
                  <p>
                    His Eminence Khangser Rinpoche was born in Kathmandu, Nepal, in May 1975.
                    At five years of age, a search party positively identified him as the
                    reincarnation of the seventh Khangser Rinpoche. He is one of three high
                    lamas responsible for recognizing the rebirth of the spiritual leader
                    of Tibet, His Holiness the Dalai Lama.
                  </p>
                  <p>
                    Khangser Rinpoche completed his preliminary study of Buddhist philosophy
                    at the Institute of Buddhist Dialectics in Dharamshala, India. He later went
                    on to advanced Buddhist studies in sutra and tantra at Sera Jey Monastery
                    and Gyuto Tantric Monastic University. It was there he earned the Geshe Lharampa
                    degree and a doctorate degree in tantra, both with the highest honors in the
                    top division. Khangser Rinpoche presently serves as vice abbot of Gyuto
                    Monastery and as the founder and administrative head of Thangkar Dechen Choling
                    Monastic Institute.
                  </p>
                  <p>
                    This institute is both a monastery and a school, and generously provides food,
                    housing, and education in both Dharma and contemporary Western curricula to over
                    eighty young monks in Nepal. The entire student population comes from impoverished
                    conditions, many of whom are orphans. Khangser Rinpoche has established many Dipkar
                    centers around the globe, spearheading philanthropic efforts such as providing
                    free food to those in need.
                  </p>
                  <p>
                    <span className="gt-leader-bio-link">
                      Click here to read Khangser Rinpoche's full bio.
                    </span>
                  </p>
                </div>
              </div>

              {/* Leader 2: Ven. Yangten Tulku Rinpoche */}
              <div className="gt-leader-card">
                <div className="gt-leader-photo-wrap">
                  <div className="gt-leader-img-box">
                    <img
                      src={ABOUT_DUMMY_IMAGES.abbotYangten}
                      alt="Ven. Yangten Tulku Rinpoche"
                      className="gt-leader-photo"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="gt-leader-name">Ven. Yangten Tulku Rinpoche</h3>
                  <p className="gt-leader-title">Abbot (2026)</p>
                </div>

                <div className="gt-leader-bio-wrap">
                  <p>
                    Yangten Rinpoche was born in Dhapa in Kham region of Tibet on 15 December 1978.
                    His father is Mr. Lobsang Dorjee and his mother Kalsang Yangzom.
                  </p>
                  <p>
                    He was recognised as the reincarnation of the previous Yangteng Rinpoche at
                    the age of 10. After living in Tibet under the Chinese rule for 12 years he left
                    his homeland for India, the Land of Noble Beings, in pursuit of traditional
                    Tibetan monastic education in south India. In 1990 he came to India and joined
                    Sera Mey College of Sera Monastery in Bylakuppe, Karnataka, in South India.
                    There Rinpoche carried out the study of traditional Buddhist texts on philosophy,
                    logic and epistemology, Buddhist Metaphysics and Cosmology (Abhidharma), and
                    Monastic Code of Conduct (Vinaya). He studied under many illustrious teachers of
                    Sera Mey monastery such as Gyalrong Khensur Rinpoche and Gosok Rinpoche.
                    Rinpoche is also a close disciple of His Holiness the Dalai Lama whom he is
                    serving currently at the Office of His Holiness the Dalai Lama.
                  </p>
                  <p>
                    <span className="gt-leader-bio-link">
                      Click here to read Ven. Yangten Tulku Rinpoche's full bio.
                    </span>
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
              <h2 className="gt-past-abbots-title">Past Abbots of Gyuto Monastery</h2>
              <p className="gt-past-abbots-desc">
                The lineage of accomplished masters who have stewarded Gyuto's Gelug tantric
                tradition, academic excellence, and unbroken transmission of teachings across more
                than five centuries. Today, the monastery continues to uphold their legacy of rigorous
                Buddhist education and contemplative practice.
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
                <h2 className="gt-about-depts-title">དགོན་པའི་བློ་ཞིང་ཡོངས་སུ་འཛུགས་པ།</h2>
                <p className="gt-about-depts-desc">
                  དགོན་པའི་ལས་སྣེ་རྣམས་ཀྱིས་རིམ་པས་དགོན་པའི་སྒྲིག་འཛུགས་དང་། ཆོས་སྤྱོད་ཀྱི་ཞབས་ཞུ།
                  སྨན་དང་ཞབས་ཏོག་སོགས་ཞལ་འདེབས་བསྒྲུབས་བཞིན་ཡོད། དེ་དག་གིས་ཆོས་ཀྱི་བརྒྱུད་པ་སྲུང་སྐྱོབ་ལ་ཕན་ཐོགས་ཆེན་པོ་བྱུང་ཡོད།
                </p>
              </div>
              <button
                type="button"
                className="gt-view-depts-btn"
                onClick={() => handleNav('departments')}
              >
                རྒྱས་སྐོར་གཟིགས་རྒྱུ།
              </button>
            </div>

            <div className="gt-about-depts-cards-grid">
              {/* Administration */}
              <div className="gt-about-dept-card">
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
                    href="#departments"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e)}
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>

              {/* Education */}
              <div className="gt-about-dept-card">
                <div className="gt-about-dept-img-wrap">
                  <img
                    src={ABOUT_DUMMY_IMAGES.deptEdu}
                    alt="Monastic Education"
                    className="gt-about-dept-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-about-dept-body">
                  <h3 className="gt-about-dept-name">ཤེས་ཡོན།</h3>
                  <p className="gt-about-dept-snippet">
                    དགེ་ལུགས་ཀྱི་གཞུང་དང་། མཚན་ཉིད་རྩོད་པ། སྔགས་ཀྱི་ཆོ་ག་བཅས་ལ་སློབ་གཉེར་གནང་བཞིན་ཡོད།
                  </p>
                  <a
                    href="#departments"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e)}
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>

              {/* Healthcare */}
              <div className="gt-about-dept-card">
                <div className="gt-about-dept-img-wrap">
                  <img
                    src={ABOUT_DUMMY_IMAGES.deptHealthcare}
                    alt="Healthcare Services"
                    className="gt-about-dept-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-about-dept-body">
                  <h3 className="gt-about-dept-name">འཕྲོད་བསྟེན་ཞབས་ཞུ།</h3>
                  <p className="gt-about-dept-snippet">
                    དགེ་འདུན་པ་རྣམས་ཀྱི་ལུས་སེམས་བདེ་ཐང་ལ་ཞབས་ཞུ་དང་སྨན་བཅོས་མཐུན་རྐྱེན་སྦྱོར་བཞིན་ཡོད།
                  </p>
                  <a
                    href="#departments"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e)}
                  >
                    Learn more <span>→</span>
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
                <h2 className="gt-about-progs-title">ལོ་རེའི་ཆོས་ཀྱི་གདམས་ངག་དང་ལས་འགུལ།</h2>
                <p className="gt-about-progs-body">
                  བོད་ཀྱི་ལོ་ཐོ་ལྟར་དགོན་པས་ལོ་རེའི་ནང་དུ་གསུང་ཆོས་དང་། སྒྲུབ་མཆོད།
                  ཆོས་ཕྱོགས་ཀྱི་རྒྱུགས་སྤྲོད་སོགས་མཛད་རིམ་རྒྱུན་ཆད་མེད་པར་སྤེལ་བཞིན་ཡོད།
                </p>
                <button
                  type="button"
                  className="gt-view-calendar-btn"
                  onClick={() => handleNav('home')}
                >
                  ཟླ་ཐོ་གཟིགས་རྒྱུ།
                </button>
              </div>

              {/* Right Column: Event Cards Stack */}
              <div className="gt-events-stack-col">
                <h4>UPCOMING EVENTS</h4>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">བོད་ཟླ་</div>
                    <div className="gt-event-date-day">༡ ཚེས</div>
                    <div className="gt-event-date-year">༡༧-༢༠</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>བོད་ཀྱི་ལོ་གསར་ (ལོ་སར)</h5>
                    <p>བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ལོ་ཐོའི་འགོ་འཛུགས་ཡིན།...</p>
                  </div>
                </div>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">བོད་ཟླ་</div>
                    <div className="gt-event-date-day">༡ ཚེས</div>
                    <div className="gt-event-date-year">༡༧-༢༠</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>བོད་ཀྱི་ལོ་གསར་ (ལོ་སར)</h5>
                    <p>བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ལོ་ཐོའི་འགོ་འཛུགས་ཡིན།...</p>
                  </div>
                </div>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">བོད་ཟླ་</div>
                    <div className="gt-event-date-day">༡ ཚེས</div>
                    <div className="gt-event-date-year">༡༧-༢༠</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>བོད་ཀྱི་ལོ་གསར་ (ལོ་སར)</h5>
                    <p>བོད་ཀྱི་ལོ་གསར་ནི་བོད་ཀྱི་ལོ་ཐོའི་འགོ་འཛུགས་ཡིན།...</p>
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
                <h2 className="gt-library-title">ཆོས་གཞུང་ཉར་ཚགས།</h2>
                <p className="gt-library-desc">
                  དགོན་པའི་དེབ་མཛོད་དེ་སྔོན་གི་དེབ་དང་བསྟན་འགྱུར། ཆོས་ལུང་དང་དེབ་ལེབ་གསར་པ་བཅས་ཉར་ཚགས་བྱེད། དེབ་གླེང་སྒྲིགས། ཞིབ་དཔྱད། དང་གླེང་ཕུའི་ཆོས་ལུང་སྲུང་སྐྱབ་བྱེད་པ་ཡིན། དགེ་ལུགས་སློབ་གཉེར་ལ་མིའ་གནའི་དེབ་དང་། སྐུ་དགེ་མཚན་གཏོང་བའི་དེབ་ལེབ་སོགས་འདུས་ཡོད།
                </p>
              </div>
              <button
                type="button"
                className="gt-visit-library-btn"
                onClick={() => handleNav('departments')}
              >
                དེབ་མཛོད་ལ་ལྟ།
              </button>
            </div>
          </div>
        </section>

        {/* 9. Support the Continuity of the Tradition (Figma White: #FFFFFF - Frame 625810) */}
        <section className="gt-support-tradition-section">
          <div className="gyuto-container">
            <div className="gt-support-inner">
              <div className="gt-support-knot">
                <EndlessKnot width={102} height={80} />
              </div>
              <div className="gt-support-text-block">
                <h2 className="gt-support-title">བརྒྱུད་པའི་རྒྱུན་འཛིན་ལ་རོགས་གླེང་གཏོང་བ།</h2>
                <p className="gt-support-desc">
                  སྦྱིན་སྲེག་གི་དངོས་ཡོད་དེ་དགེ་སྦྱོང་ལ་སློབ་གཉེར། དེབ་གཞུང་ཉར་ཚགས། དགོན་པའི་གནས་སྐུལ། དང་དགེ་སྦྱོང་རྣམས་ཀྱི་ཉིན་རེའི་སྤྱོ་ལངས་རྒྱུན་འཛིན་བྱེད་དེ། དགེ་ལུགས་སྔགས་ཀྱི་བརྒྱུད་པ་ལོ་རབས་མ་འོངས་པར་ཉར་ཚགས་བྱེད་པ་ལ་ཞབས་ཞུ་རོགས་གླེང་གཏོང་བ་ཡིན།
                </p>
              </div>
              <button
                type="button"
                className="gt-support-btn"
                onClick={() => handleNav('support')}
              >
                དགོན་པ་ལ་རོགས་གླེང་གཏོང་བ།
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { AboutTb };
