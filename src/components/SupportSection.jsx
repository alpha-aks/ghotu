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
    ? 'ཆོས་རྒྱུད་ཡུན་གནས་ལ་རྒྱབ་སྐྱོར།' 
    : 'Support the Continuity of the Tradition');

  const desc = customDesc || (isTibetan
    ? 'སྐུ་ཉིད་ཀྱི་རོགས་རམ་གྱིས་དགོན་པའི་སློབ་གཉེར་རྒྱུན་འཛིན་དང་། རྩ་ཆེའི་གཞུང་ཉར་ཚགས། དགོན་པའི་མཐུན་རྐྱེན་རྒྱུན་འཁོངས་བཅས་ལ་ཕན་པར་མ་ཟད། དགེ་འདུན་གྱི་སྡེའི་ཉིན་རེའི་འཚོ་བར་རམ་འདེགས་བྱེད་ཅིང་། ཉིད་ཀྱི་རྒྱབ་སྐྱོར་ལ་བརྟེན་ནས། མ་འོངས་མི་རབས་ཚོའི་ཆེད་དུ་དགེ་ལྡན་པའི་གསང་སྔགས་ཀྱི་ལམ་སྲོལ་འདི་ཉིད་མི་ཉམས་རྒྱུན་འཛིན་ཐུབ་པར་བྱེད།'
    : 'Contributions help sustain monastic education, preserve sacred texts, maintain monastery facilities, and support the daily life of the monastic community. Your support enables the preservation of the Gelug tantric tradition for future generations.');

  const btnText = customBtnText || (isTibetan ? 'རྒྱབ་སྐྱོར།' : 'SUPPORT US');

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