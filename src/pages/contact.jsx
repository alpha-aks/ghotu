import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const contactMap = '/images/contact-map.jpg';
import './contact.css';

export default function Contact({ onSwitchLanguage, onNavigate }) {
  return (
    <div className="gt-page-wrapper">
      <Header 
        lang="en" 
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

            {/* Right Column: Address and Communication Details */}
            <div className="gt-contact-info-col">
              <div className="gt-contact-block">
                <p>Gyuto Tantric Monastery</p>
                <p>P.O. Sidhbari, 176215</p>
                <p>Dharamshala, Kangra</p>
                <p>Himachal Pradesh, India</p>
              </div>

              <div className="gt-contact-block">
                <p>
                  Email:{' '}
                  <a href="mailto:info@gyutomonastery.org" className="gt-contact-link">
                    info@gyutomonastery.org
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+911892292835" className="gt-contact-link">
                    +91-1892-292835
                  </a>
                </p>
              </div>

              <div className="gt-contact-block">
                <p>Follow Us</p>
                <p>
                  Facebook:{' '}
                  <a 
                    href="https://facebook.com/GyutoMonastery" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="gt-social-link"
                  >
                    [link]
                  </a>
                </p>
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
              title="Open Gyuto Tantric Monastery in Google Maps"
            >
              <img 
                src={contactMap} 
                alt="Map location of Gyuto Tantric Monastery, Sidhbari, Dharamshala" 
                className="gt-contact-map-img" 
              />
            </a>
          </div>
        </section>
      </main>

      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}

export { Contact };
