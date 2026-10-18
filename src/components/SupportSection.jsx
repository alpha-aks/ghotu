import React from 'react';
import { EndlessKnot } from './MonasteryIcons';

/**
 * Universal Support Section: "Support the Continuity of the Tradition" (Figma Frame 625810)
 * Used universally across Home, About, News/Updates, Departments, and Programmes pages.
 * Supports both English ('en') and Tibetan ('tb') languages.
 */
export default function SupportSection({ lang = 'en', onNavigate, id = 'donate', className = '' }) {
  const isTibetan = lang === 'tb';

  const handleClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('support');
    }
  };

  return (
    <section 
      id={id} 
      className={`gt-support-tradition-section gt-support-sec ${isTibetan ? 'tibetan-text' : ''} ${className}`.trim()}
    >
      <div className="gyuto-container">
        <div className="gt-support-inner">
          <div className="gt-support-knot">
            <EndlessKnot width={102} height={80} />
          </div>
          <div className="gt-support-text-block">
            <h2 className="gt-support-title">
              {isTibetan 
                ? 'བརྒྱུད་པའི་རྒྱུན་འཛིན་ལ་རོགས་གླེང་གཏོང་བ།' 
                : 'Support the Continuity of the Tradition'}
            </h2>
            <p className="gt-support-desc">
              {isTibetan
                ? 'སྦྱིན་སྲེག་གི་དངོས་ཡོད་དེ་དགེ་སྦྱོང་ལ་སློབ་གཉེར། དེབ་གཞུང་ཉར་ཚགས། དགོན་པའི་གནས་སྐུལ། དང་དགེ་སྦྱོང་རྣམས་ཀྱི་ཉིན་རེའི་སྤྱོ་ལངས་རྒྱུན་འཛིན་བྱེད་དེ། དགེ་ལུགས་སྔགས་ཀྱི་བརྒྱུད་པ་ལོ་རབས་མ་འོངས་པར་ཉར་ཚགས་བྱེད་པ་ལ་ཞབས་ཞུ་རོགས་གླེང་གཏོང་བ་ཡིན།'
                : 'Contributions help sustain monastic education, preserve sacred texts, maintain monastery facilities, and support the daily life of the monastic community. Your support enables the preservation of the Gelug tantric tradition for future generations.'}
            </p>
          </div>
          <a
            href="/support"
            className="gt-support-btn"
            onClick={handleClick}
          >
            {isTibetan ? 'དགོན་པ་ལ་རོགས་གླེང་གཏོང་བ།' : 'SUPPORT US'}
          </a>
        </div>
      </div>
    </section>
  );
}

export { SupportSection };
