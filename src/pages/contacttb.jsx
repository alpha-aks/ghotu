import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const contactMap = '/images/contact-map.jpg';
import './contact.css';

export default function ContactTb({ onSwitchLanguage, onNavigate }) {
  return (
    <div className="gt-page-wrapper tibetan-page tibetan-text">
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
              <h1 className="gt-contact-page-title">ང་ཚོར་འབྲེལ་གཏུག་གནང་ཡུལ།</h1>
            </div>

            {/* Right Column: Address and Communication Details in Tibetan */}
            <div className="gt-contact-info-col">
              <div className="gt-contact-block">
                <p>འབྲེལ་གཏུགས་བྱ་སའི་ཁ་བྱང་།</p>
                <p>Gyuto Tantric Monastery</p>
                <p>P.O. Sidhbari, 176215</p>
                <p>Dharamshala, Kangra</p>
                <p>Himachal Pradesh, India</p>
              </div>

              <div className="gt-contact-block">
                <p>
                  གློག་འཕྲིན་ཁ་བྱང་།{' '}
                  <a href="mailto:gyutomonastery@yahoo.com" className="gt-contact-link">
                    gyutomonastery@yahoo.com
                  </a>
                </p>
                <p>
                  ཁ་པར།{' '}
                  <a href="tel:+911892292835" className="gt-contact-link">
                    +91-1892-292835
                  </a>
                </p>
              </div>

              <div className="gt-contact-block">
                <p>ངོ་དེབ་ཐོག་རྒྱབ་སྐྱོར་གནང་རོགས།</p>
                <p>
                  Facebook:{' '}
                  <a 
                    href="https://www.facebook.com/gyuto.monastery.77" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="gt-social-link"
                  >
                    gyuto.monastery.77
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
              title="Google ས་ཁྲ་ནང་དུ་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་ཁ་ཕྱེ་བ།"
            >
              <img 
                src={contactMap} 
                alt="Gyuto Tantric Monastery Map Sidhbari" 
                className="gt-contact-map-img" 
              />
            </a>
          </div>
          <div className="gt-contact-map-details" style={{ marginTop: '24px', lineHeight: '1.9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#1B1816' }}>ཞིབ་ཕྲའི་ས་ཁྲ།</h3>
            <p style={{ margin: '0 0 6px 0', color: '#4A4643' }}>
              <strong>གནས་ཡུལ།—</strong>རྒྱ་གར་ཧི་མ་ཅལ་མངའ་སྡེ། ཀང་ར་རྫོང་། དྷ་རམ་ས་ལཱ་སིདྷ་བ་རིའི་ཉེ་འགྲམ་དུ་ཆགས་ཡོད།
            </p>
            <p style={{ margin: '0 0 4px 0', color: '#4A4643' }}>
              <strong>ཉེ་འགྲམ་གྱི་ས་རྟགས་གལ་ཆེན་ཁག</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#4A4643' }}>
              <li>རཱ་ཀར་ལམ། (Rakkar Rd)</li>
              <li>ཞི་བདེའི་རྩེད་ཐང་། (Peaceful Playground)</li>
              <li>ནི་ཝིའི་བག་བཟོ་ཁང་། (Nivi's Bake House)</li>
              <li>མུ་ནིཤ་སྐྲ་ཁང་། (Munish Unisex Salon)</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { ContactTb };
