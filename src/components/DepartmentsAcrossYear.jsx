import React from 'react';

/**
 * Universal "Departments Across the Year" Timeline Section (Figma Frame 113)
 * Exactly matched to the Departments page implementation.
 * Supports both English ('en') and Tibetan ('tb').
 */
export default function DepartmentsAcrossYear({ lang = 'en', className = '' }) {
  const isTibetan = lang === 'tb';

  return (
    <section className={`gt-timeline-section ${isTibetan ? 'tibetan-page' : ''} ${className}`.trim()}>
      <div className="container">
        <div className="gt-timeline-header">
          <h2 className="gt-timeline-title">
            {isTibetan ? 'ལོ་འཁོར་གྱི་ལས་རིམ།' : 'Departments Across the Year'}
          </h2>
          <p className="gt-timeline-subtitle">
            {isTibetan 
              ? 'གྲྭ་ཚང་གི་སྡེ་ཚན་སོ་སོའི་ལས་དོན་རྣམས་ལོ་འཁོར་གྱི་སློབ་གཉེར། སྒོམ་སྒྲུབ། ཆོ་ག། དཔྱད་ཞིབ། དབྱར་གནས་དང་མི་སྡེའི་ལས་དོན་སོགས་ཀྱི་དུས་རིམ་དང་མཐུན་ནས་གཉེར་བཞིན་ཡོད།'
              : "The work of each department follows the monastery's annual rhythm of study, practice, ceremonies, examinations, retreats, and community activities."}
          </p>
        </div>

        <div className="gt-timeline-track-container">
          {/* Continuous 58px Pill Bar */}
          <div className="gt-timeline-pill-track">
            <div className="gt-timeline-node-circle" />
            <div className="gt-timeline-segment">
              <span>{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'Feb  -  MAY'}</span>
            </div>
            <div className="gt-timeline-node-circle" />
            <div className="gt-timeline-segment">
              <span>{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'Feb  -  MAY'}</span>
            </div>
            <div className="gt-timeline-node-circle" />
            <div className="gt-timeline-segment">
              <span>{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'Feb  -  MAY'}</span>
            </div>
            <div className="gt-timeline-node-circle" />
          </div>

          {/* 4 Hanging Columns Aligned Under the 4 Circles */}
          <div className="gt-timeline-columns">
            <div className="gt-timeline-col">
              <div className="gt-timeline-stalk" />
              <div className="gt-timeline-labels">
                <span className="gt-timeline-season">{isTibetan ? 'དབྱར་དུས།' : 'summer'}</span>
                <span className="gt-timeline-activity">{isTibetan ? 'སྦྱོར་བ་དང་སྒོམ་སྒྲུབ།' : 'Retreat & Practice'}</span>
              </div>
            </div>

            <div className="gt-timeline-col">
              <div className="gt-timeline-stalk" />
              <div className="gt-timeline-labels">
                <span className="gt-timeline-season">{isTibetan ? 'དཔེ་དུས།' : 'Spring'}</span>
                <span className="gt-timeline-activity">{isTibetan ? 'གདམས་ངག་དང་དཔྱད་རྩོད།' : 'Teaching & Debate'}</span>
              </div>
            </div>

            <div className="gt-timeline-col">
              <div className="gt-timeline-stalk" />
              <div className="gt-timeline-labels">
                <span className="gt-timeline-season">{isTibetan ? 'སྟོད་དུས།' : 'autumn'}</span>
                <span className="gt-timeline-activity">{isTibetan ? 'ཤེས་རབ་སྐུར།' : 'Examinations'}</span>
              </div>
            </div>

            <div className="gt-timeline-col">
              <div className="gt-timeline-stalk" />
              <div className="gt-timeline-labels">
                <span className="gt-timeline-season">{isTibetan ? 'དགུན་དུས།' : 'winter'}</span>
                <span className="gt-timeline-activity">{isTibetan ? 'ཆོས་སྐུད་དང་གཙོ་བོའི་ཆེ་རིས།' : 'Rituals & Observances'}</span>
              </div>
            </div>
          </div>

          {/* Mobile Timeline List */}
          <div className="gt-timeline-mobile-list">
            <div className="gt-timeline-mobile-line" />
            <div className="gt-timeline-mobile-card">
              <div className="gt-timeline-mobile-dot" />
              <span className="gt-timeline-mobile-date">{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'FEB – MAY'}</span>
              <div className="gt-timeline-mobile-season">{isTibetan ? 'དབྱར་དུས།' : 'summer'}</div>
              <div className="gt-timeline-mobile-activity">{isTibetan ? 'སྦྱོར་བ་དང་སྒོམ་སྒྲུབ།' : 'Retreat & Practice'}</div>
            </div>
            <div className="gt-timeline-mobile-card">
              <div className="gt-timeline-mobile-dot" />
              <span className="gt-timeline-mobile-date">{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'FEB – MAY'}</span>
              <div className="gt-timeline-mobile-season">{isTibetan ? 'དཔེ་དུས།' : 'Spring'}</div>
              <div className="gt-timeline-mobile-activity">{isTibetan ? 'གདམས་ངག་དང་དཔྱད་རྩོད།' : 'Teaching & Debate'}</div>
            </div>
            <div className="gt-timeline-mobile-card">
              <div className="gt-timeline-mobile-dot" />
              <span className="gt-timeline-mobile-date">{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'FEB – MAY'}</span>
              <div className="gt-timeline-mobile-season">{isTibetan ? 'སྟོད་དུས།' : 'autumn'}</div>
              <div className="gt-timeline-mobile-activity">{isTibetan ? 'ཤེས་རབ་སྐུར།' : 'Examinations'}</div>
            </div>
            <div className="gt-timeline-mobile-card">
              <div className="gt-timeline-mobile-dot" />
              <span className="gt-timeline-mobile-date">{isTibetan ? 'ཕྱི་ཟླ་༢-༥' : 'FEB – MAY'}</span>
              <div className="gt-timeline-mobile-season">{isTibetan ? 'དགུན་དུས།' : 'winter'}</div>
              <div className="gt-timeline-mobile-activity">{isTibetan ? 'ཆོས་སྐུད་དང་གཙོ་བོའི་ཆེ་རིས།' : 'Rituals & Observances'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DepartmentsAcrossYear };
