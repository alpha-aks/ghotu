import React, { memo, useCallback } from 'react';
import { EndlessKnot } from './MonasteryIcons';
import './SupportSection.css';

/**
 * Universal Support Section: "Support the Continuity of the Tradition" (Figma Frame 625810)
 * Optimized for mobile/phone screens: fluid typography, no text clipping, pure Figma structure.
 */
function SupportSection({
  lang = 'en',
  onNavigate,
  id = 'donate',
  className = '',
  customTitle,
  customDesc,
  customBtnText
}) {
  const isTibetan = lang === 'tb';

  const handleClick = useCallback((e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('support');
    }
  }, [onNavigate]);

  const title = customTitle || (isTibetan 
    ? 'བརྒྱུད་པའི་རྒྱུན་འཛིན་ལ་རོགས་གླེང་གཏོང་བ།' 
    : 'Support the Continuity of the Tradition');

  const desc = customDesc || (isTibetan
    ? 'སྦྱིན་སྲེག་གི་དངོས་ཡོད་དེ་དགེ་སྦྱོང་ལ་སློབ་གཉེར། དེབ་གཞུང་ཉར་ཚགས། དགོན་པའི་གནས་སྐུལ། དང་དགེ་སྦྱོང་རྣམས་ཀྱི་ཉིན་རེའི་སྤྱོ་ལངས་རྒྱུན་འཛིན་བྱེད་དེ། དགེ་ལུགས་སྔགས་ཀྱི་བརྒྱུད་པ་ལོ་རབས་མ་འོངས་པར་ཉར་ཚགས་བྱེད་པ་ལ་ཞབས་ཞུ་རོགས་གླེང་གཏོང་བ་ཡིན།'
    : 'Contributions help sustain monastic education, preserve sacred texts, maintain monastery facilities, and support the daily life of the monastic community. Your support enables the preservation of the Gelug tantric tradition for future generations.');

  const btnText = customBtnText || (isTibetan ? 'དགོན་པ་ལ་རོགས་གླེང་གཏོང་བ།' : 'SUPPORT US');

  return (
    <section 
      id={id} 
      role="region"
      aria-label="Support the Continuity of the Tradition"
      className={`gt-support-tradition-section gt-support-sec ${isTibetan ? 'tibetan-text' : ''} ${className}`.trim()}
    >
      <div className="gyuto-container">
        <div className="gt-support-inner">
          {/* Sacred Endless Knot Icon */}
          <div className="gt-support-knot" aria-hidden="true">
            <EndlessKnot width={102} height={80} />
          </div>

          {/* Text Block: Title & Contextual Description */}
          <div className="gt-support-text-block">
            <h2 className="gt-support-title">
              {title}
            </h2>

            <p className="gt-support-desc">
              {desc}
            </p>
          </div>

          {/* Support Us Button */}
          <a
            href="/support"
            className="gt-support-btn"
            onClick={handleClick}
          >
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(SupportSection);
export { SupportSection };