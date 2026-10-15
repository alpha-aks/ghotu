import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import contactMap from '../assets/contact-map.png';
import './contact.css';

export default function ContactTb({ onSwitchLanguage, onNavigate }) {
  return (
    <div className="gt-page-wrapper tibetan-page">
      <Header 
        lang="tb" 
        active="contact" 
        onSwitchLanguage={onSwitchLanguage} 
        onNavigate={onNavigate} 
      />

      <main className="gt-main-content">
        <section className="gt-contact-section">
          <div className="gt-contact-grid">
            {/* Left Column: Heading */}
            <div className="gt-contact-title-col">
              <h1 className="gt-contact-page-title">Contact us</h1>
            </div>

            {/* Right Column: Address and Communication Details in Tibetan */}
            <div className="gt-contact-info-col">
              <div className="gt-contact-block">
                <p className="gt-contact-highlight-title">གླེང་སྟེགས་ཀྱི་གཞི་རིས།</p>
                <p>དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང༌།</p>
                <p>P.O. Sidhbari, 176215</p>
                <p>དྷ་ར་མ་ཤ་ལ། ཀང་ར།</p>
                <p>ཧི་མ་ཅལ་པ་དེཤ། རྒྱ་གར།</p>
              </div>

              <div className="gt-contact-block">
                <p>
                  གློག་འཕྲིན།{' '}
                  <a href="mailto:info@gyutomonastery.org" className="gt-contact-link">
                    info@gyutomonastery.org
                  </a>
                </p>
                <p>
                  སྐད་ཆ།{' '}
                  <a href="tel:+911892292835" className="gt-contact-link">
                    +91-1892-292835
                  </a>
                </p>
              </div>

              <div className="gt-contact-block">
                <p className="gt-contact-highlight-title">ང་ཚོ་ལ་ལྟ་བ།</p>
                <ul className="gt-social-links-list">
                  <li>
                    Facebook:{' '}
                    <a 
                      href="https://facebook.com/GyutoMonastery" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="gt-social-pill"
                    >
                      [link]
                    </a>
                  </li>
                  <li>
                    YouTube:{' '}
                    <a 
                      href="https://youtube.com/@GyutoMonastery" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="gt-social-pill"
                    >
                      [link]
                    </a>
                  </li>
                  <li>
                    Instagram:{' '}
                    <a 
                      href="https://instagram.com/GyutoMonastery" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="gt-social-pill"
                    >
                      [link]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="gt-contact-map-wrapper">
          <div className="gt-contact-map-card">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Gyuto+Tantric+Monastery+Sidhbari+Dharamshala" 
              target="_blank" 
              rel="noreferrer"
              title="Google ས་ཁྲ་ནང་དུ་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་ཁ་ཕྱེ་བ།"
            >
              <img 
                src={contactMap} 
                alt="Gyuto Tantric Monastery Map Sidhbari" 
                className="gt-contact-map-img" 
              />
              <span className="gt-map-hover-badge">
                📍 Google ས་ཁྲ་ནང་ཁ་ཕྱེ་བ།
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { ContactTb };
