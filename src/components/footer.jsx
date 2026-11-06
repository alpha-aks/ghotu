import React from 'react';
import { GyutoEmblem, TibetanDividerMotif } from './MonasteryIcons';

export default function Footer({ lang = 'en', onNavigate }) {
  const isTibetan = lang === 'tb';

  const handleLinkClick = (pageKey, e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageKey);
    }
  };

  return (
    <footer className="gt-footer">
      <div className="gyuto-container">
        <div className="gt-footer-top-grid">
          {/* Column 1: Brand & Mission */}
          <div className="gt-footer-brand-wrap">
            <GyutoEmblem size={96} className="gt-footer-emblem" />
            <div className="gt-footer-brand-body">
              <h4>{isTibetan ? 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།' : 'Gyuto Monastery'}</h4>
              <p>
                {isTibetan
                  ? 'བོད་བརྒྱུད་ཆོས་གཞུང་གི་གཟི་བརྗིད་ལ་གདུང་བ་དང་། དགེ་ལུགས་སྔགས་ཀྱི་དགེ་རྒྱུད་དང་། མིའི་དོན་དུ་བརྩེ་བའི་ལས་ཀ་བསྒྲུབ་པའི་གཞི་རིམ་ཡིན། ཧི་མ་ཅལ་གྱི་རི་འདབས་སུ་བཞུགས་ཡོད།'
                  : 'A living archive of Tibetan Buddhist tradition, profound scholarship, and compassionate action, situated in the foothills of the Himalayas.'}
              </p>
              <a 
                href="/support" 
                className="gt-footer-support-link"
                onClick={(e) => handleLinkClick('support', e)}
              >
                {isTibetan ? 'ང་ཚོར་རྒྱབ་སྐྱོར་གནོངས།' : 'SUPPORT OUR MISSION'}{' '}
                <span style={{ marginLeft: 6 }}>→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="gt-footer-col">
            <h5>{isTibetan ? 'དཀར་ཆག' : 'EXPLORE'}</h5>
            <ul className="gt-footer-links">
              <li>
                <a href="/news" onClick={(e) => handleLinkClick('news', e)}>{isTibetan ? 'གསར་འགྱུར།' : 'Updates & News'}</a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLinkClick('about', e)}>{isTibetan ? 'ངོ་སྤྲོད།' : 'About us'}</a>
              </li>
              <li>
                <a href="/programmes" onClick={(e) => handleLinkClick('programmes', e)}>{isTibetan ? 'ལས་རིམ།' : 'Spiritual Programmes'}</a>
              </li>
              <li>
                <a href="/departments" onClick={(e) => handleLinkClick('departments', e)}>{isTibetan ? 'སྡེ་ཚན་ཁག' : 'Departments'}</a>
              </li>
              <li>
                <a href="/gallery" onClick={(e) => handleLinkClick('gallery', e)}>{isTibetan ? 'པར་མཛོད།' : 'Gallery'}</a>
              </li>
              <li>
                <a 
                  href="https://www.gyutolibrary.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {isTibetan ? 'དཔེ་མཛོད་ཁང་།' : 'Gyuto Library'} ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="gt-footer-col">
            <h5>{isTibetan ? 'འབྲེལ་གཏུགས།' : 'CONTACT'}</h5>
            <div className="gt-footer-contact-info">
              <p>Sidhbari, Dharamshala,</p>
              <p>Himachal Pradesh, 176215</p>
              <p>India</p>
              <p style={{ marginTop: '8px' }}>
                <a href="mailto:info@gyutomonastery.org" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {isTibetan ? 'གློག་འཕྲིན། ' : ''}info@gyutomonastery.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <TibetanDividerMotif />

        <div className="gt-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            {isTibetan
              ? 'པར་དབང་། Copyright: @2026 Gyuto Monastery. All rights reserved.'
              : '@2026 Gyuto Monastery. All rights reserved.'}
          </span>
          <span style={{ fontStyle: 'italic', opacity: 0.9 }}>
            Preserving Wisdom. Cultivating Compassion.
          </span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
