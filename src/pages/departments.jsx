import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import DepartmentsAcrossYear from '../components/DepartmentsAcrossYear';
import { EndlessKnot } from '../components/MonasteryIcons';
const heroBg = '/images/departments/hero-bg.jpg';
import lungtaImg from '../assets/departments-lungta.png';
import orgTableSvg from '../assets/departments-org-table.svg';
import './departments.css';

export default function Departments({ onSwitchLanguage, onNavigate }) {
  // Track which department sections are expanded
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

  const scrollToDept = (id, e) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      // Auto-expand when jumping directly to it
      setExpandedDepts((prev) => ({
        ...prev,
        [id]: true,
      }));
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="gt-dept-page">
      <Header 
        lang="en" 
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
              {/* Left Column: Department Items (Figma Frame 2147236772) */}
              <div className="gt-dept-list-col">

                {/* 01 - Central Administration */}
                <article id="admin" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">1 — Central Administration</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      The Central (General) Administration of Gyuto Tantric Monastery is responsible for the general, administrative, financial, and day-to-day affairs of the Monastery.
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
                        <h3 className="gt-dept-subheading">Governing Body</h3>
                        <p>
                          The Governing Body is the principal governing authority and provides overall direction and supervision of the Monastery. It is responsible for major policy and administrative decisions and ensuring that the objectives of the Society are fulfilled.
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>Venerable Gankar Tulku (President)</li>
                          <li>Ngakrampa Sonam Paljor (Secretary)</li>
                          <li>Ngakrampa Phurbu Tsering (Treasurer)</li>
                          <li>Ngakrampa Lobsang Phuntso (Member)</li>
                          <li>Ngakrampa Dakpa Gyaltsen (Member) (Corrected spelling of "Gyalson")</li>
                          <li>Geshe Ngakrampa Dakpa Genzen Gyana (Member)</li>
                          <li>Geshe Ngakrampa Dhondup Tsering (Member)</li>
                        </ul>

                        <h3 className="gt-dept-subheading">Day-to-Day Administration</h3>
                        <p>
                          The day-to-day administration shall be headed by the Administrator, who shall work under the guidance and supervision of the Governing Body. The Administrator shall be elected every three years and shall be responsible for implementing the decisions of the Governing Body and overseeing the general, financial, and administrative activities of the Monastery with the assistance of administrative and office staff.
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>Ngakrampa Lobsang Dorjee (Administrator)</li>
                          <li>Ngakrampa Lobsang Dargey (Administrator)</li>
                          <li>Geshe Ngakrampa Jambey Tshering Bhutia (Administrator)</li>
                          <li>Geshe Ngakrampa Ngawang Tsundue (Administrator)</li>
                          <li>Geshe Ngakrampa Jamyang Chogyal (Administrator) (Corrected spelling of "Ngakampa")</li>
                          <li>Geshe Ngakrampa Gelek Gonpo (Administrator)</li>
                          <li>Ven. Yeshi Gyaltsen (Administrator)</li>
                          <li>Geshe Ngakrampa Paksam Gyaltso (Secretary)</li>
                          <li>Mr. Thupten Dhargay (Accountant)</li>
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
                  <h2 className="gt-dept-item-title">2 — Education</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      Gyuto Tantric Monastery provides systematic monastic education combining basic education, Buddhist philosophy, Tantric studies, ritual training, and monastic discipline. The educational programme aims to preserve and promote Buddhist teachings and traditional practices while providing monks with academic, spiritual, and practical training.
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
                        <p>
                          The Monastery follows a structured 18-class education system, extending from primary education to advanced Tantric studies. Certificates are awarded at different stages of education upon successful completion of the prescribed examinations.
                        </p>

                        <h3 className="gt-dept-subheading">2.1 Basic Monastic Education</h3>
                        <p>
                          Basic education is provided from Class I to Class VIII, beginning with reading and writing. The curriculum includes Tibetan and English languages, memorization of prayer texts, drawing and painting, Buddhist philosophy, and epistemology.
                        </p>
                        <p>
                          Students are awarded the Certificate of Class VIII upon successfully passing the examination for Primary Class VIII. Students also participate in maintaining the cleanliness of the Monastery and its surroundings as part of their monastic discipline.
                        </p>
                        <h4 className="gt-dept-subheading-lvl2">Teachers:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Geshe Tsering Dhondup — Buddhist Philosophy Teacher</li>
                          <li>Geshe Jampa Tsering — Buddhist Philosophy Teacher</li>
                          <li>Geshe Lobsang Gompo — Buddhist Philosophy Teacher</li>
                          <li>Geshe Lobsang Gyaltsen — Buddhist Philosophy Teacher</li>
                          <li>Geshe Thupten Tsultrim — Buddhist Philosophy Teacher</li>
                          <li>Geshe Jampa Sonam — Tibetan Grammar Teacher</li>
                          <li>Ngakrampa Tenzin Passang — Tibetan Teacher</li>
                          <li>Geshe Tenzin Genden — Tibetan Teacher</li>
                          <li>Ven. Tenzin Topchen — Drawing Teacher</li>
                          <li>Mr. Tashi Dorjee — English Teacher</li>
                          <li>Mr. Tsering Namgyal — Tibetan Teacher</li>
                          <li>Mrs. Passang Dolma — English Teacher</li>
                        </ul>

                        <h3 className="gt-dept-subheading">2.2 Secondary and Higher Secondary Education</h3>
                        <p>
                          After completion of primary education, students continue their studies through Secondary Class IX and Class X, followed by Higher Secondary Classes XI and XII. Students who successfully pass the prescribed examinations are awarded the Certificate of Class X and Certificate of Class XII, respectively.
                        </p>
                        <p>
                          The education at these levels provides students with a foundation for further study of Buddhist philosophy and the major Buddhist scriptures.
                        </p>

                        <h3 className="gt-dept-subheading">2.3 Buddhist Philosophy, Sutra and Tantric Studies</h3>
                        <p>
                          Following higher secondary education, monks undertake advanced study of the major Buddhist scriptures and philosophical subjects. The programme includes Collected Topics, Mind and Awareness, Tenets, Prajnaparamita, Madhyamaka, Ground and Path, Generation and Completion Stages, and Tantric Commentary.
                        </p>
                        <p>
                          The programme includes classroom teaching, memorization, debate, written examinations, and practical training. Students who successfully complete the prescribed four-year study of the major Buddhist scriptures are awarded the B.A. (Zhunluk Rabjampa) certificate.
                        </p>

                        <h3 className="gt-dept-subheading">2.4 Traditional Tantric Education and Ritual Training</h3>
                        <p>
                          Gyuto Tantric Monastery provides specialized Tantric education and practical training in Guhyasamaja, Chakrasamvara, and Vajrabhairava, including their generation and completion stages.
                        </p>
                        <p>
                          The training includes memorization of ritual texts, sadhana practices, ritual chanting, mandala and stupa measurements and drawings, preparation of ritual offerings, and other traditional Tantric practices.
                        </p>
                        <p>
                          For five years, after taking full ordination, the monks learn the principles and methods of universal and particular sadhanas, ritual chanting, measurements and paintings, making and arrangement of balis of hundreds of deities (principally Guhyasamaja, Chakrasamvara, and Vajrabhairava), and measurements of various stupas and their symbolism.
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>First Year: Guhyasamaja</li>
                          <li>Second Year: Chakrasamvara</li>
                          <li>Third Year: Vajrabhairava</li>
                          <li>Fourth &amp; Fifth Years: Sadhana rituals of the Great Iron Mansion of Yamaraj, ritual for amendment and restoration, rituals of Mahakala Great Bāli, Sittapatra Great Bāli, and Burn-Offerings of the four activities.</li>
                        </ul>
                        <h4 className="gt-dept-subheading-lvl2">Teachers:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Geshe Tsering Dhondup — Buddhist Philosophy Teacher</li>
                          <li>Geshe Jampa Tsering — Buddhist Philosophy Teacher</li>
                          <li>Geshe Lobsang Gompo — Buddhist Philosophy Teacher</li>
                          <li>Geshe Lobsang Gyaltsen — Buddhist Philosophy Teacher</li>
                          <li>Geshe Thupten Tsultrim — Buddhist Philosophy Teacher</li>
                          <li>Geshe Jampa Sonam — Tibetan Grammar Teacher</li>
                          <li>Ngakrampa Sonam — Ritual Teacher</li>
                          <li>Geshe Ngakrampa Lobsang Nima — Ritual Teacher</li>
                        </ul>

                        <h3 className="gt-dept-subheading">2.5 Ngakram - Tantric Graduate</h3>
                        <p>
                          The Ngakram (Geshe Ngakrampa) programme represents the highest level of Tantric education at Gyuto Tantric Monastery.
                        </p>
                        <p>
                          After completing the prescribed Buddhist philosophical studies and Tantric education, eligible monks undertake two years of advanced Ngakram Tantric studies. The programme includes advanced textual and practical training in Tantric teachings and practices.
                        </p>
                        <p>
                          Students are assessed through recitation, written, debate, and practical examinations. Those who successfully complete the prescribed requirements are awarded the PhD (Geshe Ngakrampa) certificate.
                        </p>

                        <h3 className="gt-dept-subheading">2.6 Geshe Lharampa Tantric Studies</h3>
                        <p>
                          After admission, the Geshes study the ground and path of tantra as an introduction, followed by the General Explanation of the Four Classes of Tantras, the Generation Stage (Ocean of Spiritual Attainment), the Five Stages of Completion, and the Great Commentary on the root tantra. They also learn the rituals and take a written test in tantra at the end of every annual dharma session to receive certification.
                        </p>
                        <p>
                          Geshe Lharampa degree holders take a debate examination on tantra after three years and are awarded the Geshe Ngakrampa degree (Corrected spelling of "Ngagrampa").
                        </p>
                        <p>
                          Every year, four Geshe Lharampas sit for debate examinations on tantric commentaries lasting five days. After the session, some leave to serve society, while others remain as religious teachers. Meritorious Geshes who complete these examinations may serve first as Abbot of the monastery, then as Sharpa Choeje, and ultimately ascend to the post of Ganden Throne-holder (Regent of Je Tsongkhapa).
                        </p>
                        <h4 className="gt-dept-subheading-lvl2">Teachers:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>His Eminence Khangser Rinpoche — Ngak Teacher</li>
                          <li>His Eminence Yangten Rinpoche — Ngak Teacher</li>
                          <li>Geshe Khedrup Norsang — Ngak Teacher (Corrected spelling of "Khedup")</li>
                        </ul>

                        <h3 className="gt-dept-subheading">2.7 Grading and Certificates</h3>
                        <p>
                          Certificates are awarded at the following stages in accordance with Monastery Education Rules:
                        </p>
                        <ul className="gt-dept-list-bulleted">
                          <li>Certificate of Class VIII: Upon passing Primary Class VIII examination.</li>
                          <li>Certificate of Class X: Upon passing Secondary Class X examination.</li>
                          <li>Certificate of Class XII: Upon passing Higher Secondary Class XII examination.</li>
                          <li>B.A. (Zhunluk Rabjampa): Upon completion and successful examination of the four-year study of major Buddhist scriptures.</li>
                          <li>PhD (Geshe Ngakrampa): Upon completion and successful examination of the two-year Ngakram Tantric studies.</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          Education Administrator: Geshe Ngakrampa Ngawang Tsundue
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

                {/* 03 - Healthcare & Social Services */}
                <article id="healthcare" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">3 — Healthcare &amp; Social Services</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      Gyuto Tantric Monastery maintains a clinic with a resident nurse to provide basic medical care to the monks and staff, particularly the sick and elderly.
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
                          The Monastery provides 100% reimbursement of medical expenses for monks and staff suffering from serious illnesses and financial assistance for other medical treatments in accordance with policy.
                        </p>
                        <h4 className="gt-dept-subheading-lvl2">Staff:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Ms. Pema Tsamchoe (Nurse) (Corrected typos "Miss." and "Nruse")</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          Healthcare Administrator: Geshe Ngakrampa Ngawang Tsundue
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

                {/* 04 - Library & Archives */}
                <article id="library" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">4 — Library &amp; Archives</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      The Gyuto Monastery Library was established to preserve the teachings of the Buddha and provide facilities for the study and research of Buddhism for both Tibetan and non-Tibetan students and scholars.
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
                          The Library collects and preserves Buddhist scriptures, rare Indian Buddhist texts, books in various languages, and Sutra and Tantric textbooks for monks, Geshes from the three great Gelug monastic universities, and students of the Monastery.
                        </p>
                        <p>
                          It also archives valuable teachings, digitizes texts for study, and publishes important Buddhist texts in accordance with publication standards.
                        </p>
                        <h4 className="gt-dept-subheading-lvl2">Staff:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Geshe Ngakrampa Lobsang Lodup (Director)</li>
                          <li>Mr. Tenzin Rabten (Editor)</li>
                          <li>Geshe Jamgyal (Editorial Assistant)</li>
                          <li>Geshe Ngawang Gyaltsen (Website Editor)</li>
                          <li>Mr. Jigmey Gyatso (Supervisor)</li>
                        </ul>
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
                  <h2 className="gt-dept-item-title">5 — Community Kitchen</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      Gyuto Tantric Monastery operates a Community Kitchen to provide regular, 100% vegetarian meals and refreshments using fresh vegetables and seasonal fruits.
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
                        <h3 className="gt-dept-subheading">Daily Meal Schedule</h3>
                        <ul className="gt-dept-schedule-list">
                          <li className="gt-dept-schedule-item">Breakfast: 5:00 AM</li>
                          <li className="gt-dept-schedule-item">Morning Tea: 9:00 AM</li>
                          <li className="gt-dept-schedule-item">Lunch: 12:00 PM</li>
                          <li className="gt-dept-schedule-item">Afternoon Tea: 3:00 PM</li>
                          <li className="gt-dept-schedule-item">Dinner: 5:00 PM</li>
                        </ul>
                        <p>
                          Special meals are arranged during religious ceremonies, Dharma Sessions, and festivals. Every two months, one monk is assigned to assist the Kitchen Administrator as part of monastic duty.
                        </p>
                        <h4 className="gt-dept-subheading-lvl2">Staff:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Ven. Yeshi Gyaltsen (Kitchen Administrator)</li>
                          <li>Mr. Amar Sharma (Head Cook)</li>
                          <li>Mr. Pravik Magar (Assistant Cook)</li>
                          <li>Mr. Tsewang (Tea Attendant)</li>
                          <li>Mr. Nobin Rai (Kitchen Assistant)</li>
                          <li>Mr. Tamdin Wangchuk (Kitchen Assistant)</li>
                          <li>Mr. Jangchup Jigme Tamang (Kitchen Assistant)</li>
                          <li>Mr. Dawa Tamang (Kitchen Assistant)</li>
                          <li>Mr. Ashok Hemram (Kitchen Assistant)</li>
                          <li>Mr. Passang Tamang (Kitchen Assistant)</li>
                          <li>Mr. Passang Norbu (Kitchen Assistant)</li>
                          <li>Mrs. Gita Tamang (Cleaning Attendant)</li>
                          <li>Mrs. Passang Dema (Cleaning Attendant)</li>
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

                {/* 06 - Media, Photography & Communication */}
                <article id="media" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">6 — Media, Photography &amp; Communication Services</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      The Monastery maintains media and communication services for photography, documentation, website management, social media platforms (Facebook), and information dissemination.
                      {!expandedDepts.media && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('media')}
                          aria-expanded={expandedDepts.media}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.media && (
                      <div className="gt-dept-expanded-content">
                        <h4 className="gt-dept-subheading-lvl2">Staff:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Ven. Tenzin Gyamtso</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          Public Relations and Liaison Services Administrator: Ngakrampa Lobsang Dargey
                        </p>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('media')}
                          style={{ marginTop: '14px' }}
                        >
                          Show less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </article>

                {/* 07 - Maintenance & Cleaning */}
                <article id="maintenance" className="gt-dept-item">
                  <div className="gt-dept-divider-row">
                    <EndlessKnot width={42} height={32} color="#92060F" />
                    <div className="gt-dept-divider-line" />
                  </div>
                  <h2 className="gt-dept-item-title">7 — Monastery Maintenance &amp; Cleaning Services</h2>
                  <div className="gt-dept-item-body">
                    <p>
                      Staff members are responsible for maintaining cleanliness, general upkeep of the Monastery premises, and carrying out basic plumbing and maintenance work.
                      {!expandedDepts.maintenance && (
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('maintenance')}
                          aria-expanded={expandedDepts.maintenance}
                        >
                          ....Read more
                        </button>
                      )}
                    </p>

                    {expandedDepts.maintenance && (
                      <div className="gt-dept-expanded-content">
                        <h4 className="gt-dept-subheading-lvl2">Staff:</h4>
                        <ul className="gt-dept-list-bulleted">
                          <li>Mr. Swaran Kumar</li>
                          <li>Mrs. Nancy</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontWeight: '600', color: '#92060F' }}>
                          Facilities and Infrastructure Administrator: Ngakrampa Lobsang Dorjee
                        </p>
                        <button 
                          type="button" 
                          className="gt-dept-readmore-btn"
                          onClick={() => toggleDept('maintenance')}
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
                  <h3 className="gt-dept-nav-title">Departments</h3>
                  <ul className="gt-dept-nav-links">
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#admin" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('admin', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Administration
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#education" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('education', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Education
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#healthcare" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('healthcare', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Healthcare &amp; Social Services
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
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#media" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('media', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Media &amp; Communication
                      </a>
                    </li>
                    <li className="gt-dept-nav-link-item">
                      <a 
                        href="#maintenance" 
                        className="gt-dept-nav-anchor"
                        onClick={(e) => scrollToDept('maintenance', e)}
                      >
                        <span className="gt-dept-nav-arrow">&gt;</span> Maintenance &amp; Cleaning
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 3. ONE MONASTERY, MANY RESPONSIBILITIES (ORGANIZATIONAL TREE) - Rectangle 18601 in Group 112 */}
        <section className="gt-org-chart-section">
          <div className="container">
            <div className="gt-org-header">
              <h2 className="gt-org-title">One Monastery, Many Responsibilities</h2>
              <p className="gt-org-subtitle">
                Education and spiritual practice form the core of monastic life. Administration, healthcare, the kitchen, 
                and the library provide the infrastructure and support that allow that work to continue.
              </p>
            </div>

            <div className="gt-org-diagram-wrapper">
              <img 
                src={orgTableSvg} 
                alt="Gyuto Monastery Organizational Chart" 
                className="gt-org-table-img" 
              />
            </div>
          </div>
        </section>

        {/* 4. DEPARTMENTS ACROSS THE YEAR (TIMELINE) - Figma Frame 113 */}
        <DepartmentsAcrossYear lang="en" />

        {/* 5. QUESTIONS ABOUT A DEPARTMENT (BLUE BANNER) */}
        <section className="gt-dept-cta-blue">
          <div className="container">
            <div className="gt-dept-cta-blue-inner">
              <div className="gt-dept-cta-blue-text">
                <h2 className="gt-dept-cta-blue-title">Questions about a department?</h2>
                <p className="gt-dept-cta-blue-desc">
                  For enquiries about the monastery's departments, activities, or services, please contact the monastery directly.
                </p>
                <button 
                  type="button"
                  className="gt-dept-cta-white-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  Contact Us
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
                  Looking for teachings,<br />ceremonies or retreats?
                </h2>
                <button 
                  type="button"
                  className="gt-dept-calendar-btn"
                  onClick={() => onNavigate && onNavigate('home')}
                >
                  VIEW CALENDAR
                </button>
              </div>

              <div className="gt-dept-events-cards-wrap">
                <span className="gt-dept-events-top-tag">UPCOMING EVENTS</span>
                
                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">FEB</span>
                    <span className="gt-event-day">18th</span>
                    <span className="gt-event-year">2026</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>Tibetan New Year Celebration</h4>
                    <p>Losar marks the beginning of the Tibetan calendar year....</p>
                  </div>
                </div>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">FEB</span>
                    <span className="gt-event-day">18th</span>
                    <span className="gt-event-year">2026</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>Tibetan New Year Celebration</h4>
                    <p>Losar marks the beginning of the Tibetan calendar year....</p>
                  </div>
                </div>

                <div className="gt-dept-event-card">
                  <div className="gt-event-card-date">
                    <span className="gt-event-month">FEB</span>
                    <span className="gt-event-day">18th</span>
                    <span className="gt-event-year">2026</span>
                  </div>
                  <div className="gt-event-card-divider" />
                  <div className="gt-event-card-body">
                    <h4>Tibetan New Year Celebration</h4>
                    <p>Losar marks the beginning of the Tibetan calendar year....</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            7. SUPPORT THE CONTINUITY OF THE TRADITION (Universal Frame 625810)
            ==================================================================== */}
        <SupportSection lang="en" onNavigate={onNavigate} />
      </main>

      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}

export { Departments, DepartmentsAcrossYear };
