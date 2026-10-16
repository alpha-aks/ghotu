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
                href="#donate" 
                className="gt-footer-support-link"
                onClick={(e) => handleLinkClick('support', e)}
              >
                {isTibetan ? 'ང་ཚོ་ལ་རོགས་གླེང་གཏོང་བ།' : 'SUPPORT OUR MISSION'}{' '}
                <span style={{ marginLeft: 6 }}>→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="gt-footer-col">
            <h5>{isTibetan ? 'ལ་ལྟ།' : 'EXPLORE'}</h5>
            <ul className="gt-footer-links">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick('about', e)}>{isTibetan ? 'ང་ཚོའི་སྐོར།' : 'About us'}</a>
              </li>
              <li>
                <a href="#programmes" onClick={(e) => handleLinkClick('home', e)}>{isTibetan ? 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།' : 'Spiritual Programmes'}</a>
              </li>
              <li>
                <a href="#departments" onClick={(e) => handleLinkClick('departments', e)}>{isTibetan ? 'སྡེ་ཚན་ཁག' : 'Departments'}</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick('home', e)}>{isTibetan ? 'སྐུ་པར།' : 'Gallery'}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="gt-footer-col">
            <h5>{isTibetan ? 'འབྲེལ་གཏུགས།' : 'CONTACT'}</h5>
            <div className="gt-footer-contact-info">
              <p>{isTibetan ? 'སི་དྷ་བ་རི། དྷ་ར་མ་ཤ་ལ།' : 'Sidhbari, Dharamshala,'}</p>
              <p>{isTibetan ? 'ཧི་མ་ཅལ་པ་དེཤ། ༡༧༦༢༡༥' : 'Himachal Pradesh, 176215'}</p>
              <p>{isTibetan ? 'རྒྱ་གར།' : 'India'}</p>
              <p style={{ marginTop: '8px' }}>
                <a href="mailto:info@gyutomonastery.org" style={{ color: 'inherit', textDecoration: 'none' }}>
                  info@gyutomonastery.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <TibetanDividerMotif />

        <div className="gt-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            {isTibetan
              ? '@༢༠༢༦ དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་། སྐྱེས་བུ་ཐམས་ཅད་ལ་དབང་ཡོད།'
              : '@2026 Gyuto Monastery. All rights reserved.'}
          </span>
          <span style={{ fontStyle: 'italic', opacity: 0.9 }}>
            {isTibetan
              ? 'ཤེས་རབ་ཉར་ཚགས། སྙིང་རྗེ་སྐྱེད་སྲིང་།'
              : 'Preserving Wisdom. Cultivating Compassion.'}
          </span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
