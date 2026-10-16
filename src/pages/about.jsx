import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  RightWhorlConch,
  EndlessKnot,
  DharmachakraWatermark
} from '../components/MonasteryIcons';
import './about.css';

/**
 * ONLINE DUMMY IMAGES
 * You can replace any of these URLs with your own monastic photos or uploaded assets in the future.
 */
export const ABOUT_DUMMY_IMAGES = {
  heroBg: '/images/about/hero-bg.jpg',
  legacyTemple: '/images/about/legacy-temple.jpg',
  legacyMountain: '/images/about/legacy-mountain.jpg',
  legacyComplex: '/images/about/legacy-complex.jpg',
  abbotKhangser: '/images/about/abbot-khangser.jpg',
  abbotYangten: '/images/about/abbot-yangten.jpg',
  pastAbbotsGrid: '/images/about/past-abbots-grid.jpg',
  deptAdmin: '/images/about/dept-admin.jpg',
  deptEdu: '/images/about/dept-edu.jpg',
  deptHealthcare: '/images/about/dept-health.jpg'
};

/**
 * 19 Individual Past Abbot Lineage Portraits
 * Each abbot has their own distinct image file in /images/about/abbots/abbot-X.jpg
 */
export const PAST_ABBOTS = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  img: `/images/about/abbots/abbot-${i + 1}.jpg`,
  alt: `Gyuto Monastery Abbot ${i + 1}`
}));

export default function About({ onSwitchLanguage, onNavigate }) {
  const handleNav = (pageKey, e) => {
    if (onNavigate) {
      if (e) e.preventDefault();
      onNavigate(pageKey);
    }
  };

  return (
    <div className="gt-about-page">
      {/* 1. Header with 'ABOUT' Active */}
      <Header
        lang="en"
        active="about"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-main-content">
        {/* 2. Hero Banner */}
        <section className="gt-about-hero">
          <div className="gt-about-hero-content">
            <h1 className="gt-about-hero-title">About Gyuto Monastery</h1>
            <p className="gt-about-hero-sub">
              A Living Center of Gelug Tantric Scholarship and Practice
            </p>
          </div>
        </section>

        {/* 3. Our Legacy Section (Figma Cream: #FDF1D7) */}
        <section className="gt-legacy-section">
          <div className="gyuto-container">
            <div className="gt-legacy-header">
              <span className="gt-legacy-conch-icon">
                <RightWhorlConch size={42} />
              </span>
              <h2 className="gt-legacy-title">Our Legacy</h2>
            </div>

            <div className="gt-legacy-story-grid">
              {/* Story 1 */}
              <div className="gt-legacy-story-row">
                <div className="gt-legacy-text-box">
                  <p>
                    Founded in Tibet in 1474, Gyuto Monastery has preserved one of the
                    principal tantric traditions of the Gelug school for more than five centuries.
                    The monastery's name, derived from the region of its original location, reflects
                    its deep historical roots in Tibetan Buddhist culture. Following the
                    reestablishment of the monastery in Dharamshala, India, in 1959, the community
                    continues to engage in rigorous scholarly study, contemplative practice, and
                    service to practitioners and visitors from around the world.
                  </p>
                </div>
                <div className="gt-legacy-img-box">
                  <img
                    src={ABOUT_DUMMY_IMAGES.legacyTemple}
                    alt="Gyuto Monastery Temple Hall"
                    className="gt-legacy-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Story 2 (Reversed) */}
              <div className="gt-legacy-story-row reversed">
                <div className="gt-legacy-img-box">
                  <img
                    src={ABOUT_DUMMY_IMAGES.legacyMountain}
                    alt="Gyuto Monastery nestled against the Himalayas"
                    className="gt-legacy-img"
                    loading="lazy"
                  />
                </div>
                <div className="gt-legacy-text-box">
                  <p>
                    The monastery's mission is to maintain the integrity of the Gelug tantric
                    teachings through education, meditation, ritual practice, and cultural preservation.
                    Today, approximately 250–300 monks live and study at the monastery, following a
                    rigorous multi-year curriculum that spans Buddhist philosophy, logic, epistemology,
                    and advanced tantric practices. The community is recognized by the Central Tibetan
                    Administration as a center of learning and spiritual practice, and it remains an
                    active participant in the broader Tibetan Buddhist community.
                  </p>
                </div>
              </div>

              {/* Story 3 */}
              <div className="gt-legacy-story-row">
                <div className="gt-legacy-text-box">
                  <p>
                    The reestablishment of Gyuto Monastery in India represents a significant
                    achievement in the preservation of Tibetan Buddhist heritage. In the face of
                    historical challenges, the monastic community has successfully maintained the
                    scholarly standards and spiritual practices that define the Gelug tantric tradition.
                    Through education, research, and active engagement with the broader world, Gyuto
                    Monastery remains a vital center for the transmission of authentic Tibetan Buddhist teachings.
                  </p>
                </div>
                <div className="gt-legacy-img-box">
                  <img
                    src={ABOUT_DUMMY_IMAGES.legacyComplex}
                    alt="Gyuto Monastery Complex in Dharamshala"
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
                    alt={abbot.alt}
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
                onClick={() => handleNav('departments')}
              >
                VIEW DEPARTMENTS
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
                  <h3 className="gt-about-dept-name">Administration</h3>
                  <p className="gt-about-dept-snippet">
                    Supports the day-to-day governance, operations, and coordination of the monastery.
                  </p>
                  <a
                    href="#departments"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e)}
                  >
                    LEARN MORE <span>→</span>
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
                  <h3 className="gt-about-dept-name">Education</h3>
                  <p className="gt-about-dept-snippet">
                    Provides structured study in Buddhist philosophy, debate, and tantric traditions.
                  </p>
                  <a
                    href="#departments"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e)}
                  >
                    LEARN MORE <span>→</span>
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
                  <h3 className="gt-about-dept-name">Healthcare</h3>
                  <p className="gt-about-dept-snippet">
                    Medical services supporting the physical and mental well-being of the monastic community.
                  </p>
                  <a
                    href="#departments"
                    className="gt-about-dept-link"
                    onClick={(e) => handleNav('departments', e)}
                  >
                    LEARN MORE <span>→</span>
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
                <h2 className="gt-about-progs-title">Spiritual Programmes throughout the Year</h2>
                <p className="gt-about-progs-body">
                  Following the Tibetan Buddhist calendar, the monastery hosts teachings, retreats,
                  ceremonies, examinations, and seasonal practice sessions throughout the year.
                  Programmes are open to monks, practitioners, and visitors where applicable.
                </p>
                <button
                  type="button"
                  className="gt-view-calendar-btn"
                  onClick={() => handleNav('home')}
                >
                  VIEW CALENDAR
                </button>
              </div>

              {/* Right Column: Event Cards Stack */}
              <div className="gt-events-stack-col">
                <h4>UPCOMING EVENTS</h4>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">FEB</div>
                    <div className="gt-event-date-day">18th</div>
                    <div className="gt-event-date-year">2026</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>Tibetan New Year Celebration</h5>
                    <p>Losar marks the beginning of the Tibetan calendar year with special prayers and sacred ceremonies.</p>
                  </div>
                </div>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">FEB</div>
                    <div className="gt-event-date-day">18th</div>
                    <div className="gt-event-date-year">2026</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>Tibetan New Year Celebration</h5>
                    <p>Losar marks the beginning of the Tibetan calendar year with special prayers and sacred ceremonies.</p>
                  </div>
                </div>

                <div className="gt-event-card-item">
                  <div className="gt-event-date-badge">
                    <div className="gt-event-date-month">FEB</div>
                    <div className="gt-event-date-day">18th</div>
                    <div className="gt-event-date-year">2026</div>
                  </div>
                  <div className="gt-event-card-details">
                    <h5>Tibetan New Year Celebration</h5>
                    <p>Losar marks the beginning of the Tibetan calendar year with special prayers and sacred ceremonies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Preserving Buddhist Knowledge (Library - Figma Slate Blue: #6B9EBD) */}
        <section className="gt-library-section">
          <div className="gyuto-container">
            <div className="gt-library-grid">
              <div className="gt-library-watermark-wrap">
                <DharmachakraWatermark size={240} />
              </div>
              <div className="gt-library-content">
                <h2 className="gt-library-title">Preserving Buddhist Knowledge</h2>
                <p className="gt-library-desc">
                  The monastery's library safeguards rare Tibetan manuscripts, Buddhist commentaries,
                  and contemporary publications while supporting cataloguing, research, and
                  digitisation for future generations. The collection includes foundational texts,
                  scholastic commentaries, and tantric practices essential to Gelug study.
                </p>
                <button
                  type="button"
                  className="gt-visit-library-btn"
                  onClick={() => handleNav('departments')}
                >
                  VISIT THE LIBRARY
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Support the Continuity of the Tradition (Figma White: #FFFFFF) */}
        <section className="gt-support-tradition-section">
          <div className="gyuto-container">
            <div className="gt-support-tradition-wrap">
              <span className="gt-support-knot-icon">
                <EndlessKnot size={48} />
              </span>
              <h2 className="gt-support-tradition-title">Support the Continuity of the Tradition</h2>
              <p className="gt-support-tradition-desc">
                Contributions help sustain monastic education, preserve sacred texts, maintain
                monastery facilities, and support the daily life of the monastic community. Your
                support enables the preservation of the Gelug tantric tradition for future generations.
              </p>
              <button
                type="button"
                className="gt-support-tradition-btn"
                onClick={() => handleNav('support')}
              >
                SUPPORT US
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}

export { About };
