import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const supportMap = '/images/contact-map.jpg';
import './contact.css';

export default function SupportTb({ onSwitchLanguage, onNavigate }) {
  const [frequency, setFrequency] = useState('recurring'); // 'recurring' | 'one-time'
  const [selectedAmount, setSelectedAmount] = useState('30');
  const [customAmount, setCustomAmount] = useState('');
  const [coverFees, setCoverFees] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const amounts = ['10', '20', '30', '40'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const finalAmount = selectedAmount === 'other' ? (customAmount || '0') : selectedAmount;

  return (
    <div className="gt-page-wrapper tibetan-page">
      <Header 
        lang="tb" 
        active="donate" 
        onSwitchLanguage={onSwitchLanguage} 
        onNavigate={onNavigate} 
      />

      <main className="gt-main-content">
        {/* 1. Main Donation Section */}
        <section className="gt-support-section">
          <div className="gt-support-grid">
            {/* Left Column: Pledge Text in Tibetan */}
            <div className="gt-support-pledge-col">
              <h1 className="gt-support-title">ང་ཚོར་རྒྱབ་སྐྱོར་གནང་རོགས།</h1>
              <div className="gt-support-pledge-text">
                <p>
                  ང་ཚོས་ཁྱེད་ཀྱིས་ཕུལ་བའི་ཞལ་འདེབས་ཆ་ཚང་བ་གཟབ་ནན་དང་འགན་འཁུར་ཆེན་པོས་བཀོལ་སྤྱོད་བྱེད་རྒྱུ་ཡིན་ལ། ཁྱེད་ཀྱི་རོགས་སྐྱོར་གྱིས་ང་ཚོའི་དམིགས་ཡུལ་ལ་ཇི་ལྟར་ཕན་ཐོགས་ཀྱི་ཡོད་མེད་ཀྱི་གནས་ཚུལ་ཡོངས་རྫོགས་ཕྱི་གསལ་ནང་གསལ་བྱེད་རྒྱུ་ཡིན།
                </p>
                <p>
                  ལོ་འཁོར་སྙན་ཐོའི་ནང་དགོན་པའི་ལས་དོན་དང་། དངུལ་རྩིས་ཀྱི་འཛིན་སྐྱོང་། གྲུབ་འབྲས་བཅས་ཀྱི་སྐོར་ཞིབ་ཕྲ་བཀོད་ཡོད་པ་དེ་དག་རེ་སྐུལ་ཞུས་ན་མཁོ་སྤྲོད་བྱ་རྒྱུ་ཡིན།
                </p>
                <p>
                  བསྟན་པ་རྣལ་མ་མི་ཉམས་རྒྱུན་འཛིན་དང་། ཉམས་ལེན་གོང་འཕེལ། སྤྱི་ཚོགས་ཞབས་ཞུ་བཅས་གྲྭ་ཚང་གི་ལས་དོན་འདི་དག་གི་ཐོག་ལ་སྐུ་ཉིད་ནས་རྒྱབ་སྐྱོར་གནང་བར་ང་ཚོས་སྙིང་ཐག་པ་ནས་ཐུགས་རྗེ་ཆེ་ཞུ།
                </p>
                <p style={{ marginTop: '28px' }}>
                  གུས་བཀུར་དང་བཅས།
                </p>
                <p className="gt-support-signature">
                  དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་འདུས་སྤྱི་ནས།
                </p>
              </div>
            </div>

            {/* Right Column: Donation Form Widget */}
            <div className="gt-donation-card">
              <form onSubmit={handleSubmit}>
                {/* Frequency */}
                <label className="gt-donation-field-label">ཞལ་འདེབས་འབུལ་ཐེངས།</label>
                <div className="gt-frequency-pill-group">
                  <button
                    type="button"
                    className={`gt-freq-btn ${frequency === 'recurring' ? 'active' : 'inactive'}`}
                    onClick={() => setFrequency('recurring')}
                  >
                    རྒྱུན་ཆགས།
                  </button>
                  <button
                    type="button"
                    className={`gt-freq-btn ${frequency === 'one-time' ? 'active' : 'inactive'}`}
                    onClick={() => setFrequency('one-time')}
                  >
                    ཐེངས་གཅིག
                  </button>
                </div>

                {/* Amount */}
                <label className="gt-donation-field-label">དངུལ་འབོར། (ཨ་སྒོར།)</label>
                <div className="gt-amount-pill-group">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`gt-amount-btn ${selectedAmount === amt ? 'active' : ''}`}
                      onClick={() => setSelectedAmount(amt)}
                    >
                      ${amt}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`gt-amount-btn ${selectedAmount === 'other' ? 'active' : ''}`}
                    onClick={() => setSelectedAmount('other')}
                  >
                    གཞན།
                  </button>
                </div>

                {selectedAmount === 'other' && (
                  <div className="gt-custom-amount-wrap">
                    <input
                      type="number"
                      min="1"
                      step="any"
                      placeholder="ཨ་སྒོར་འབོར་གྲངས་འབྲི་རོགས།"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="gt-custom-amount-input"
                      required
                    />
                  </div>
                )}

                {/* Cover transaction fees checkbox */}
                <label className="gt-fee-checkbox-row">
                  <input
                    type="checkbox"
                    className="gt-custom-checkbox"
                    checked={coverFees}
                    onChange={(e) => setCoverFees(e.target.checked)}
                  />
                  <span className="gt-fee-label-text">
                    གདམ་ཁ་གཞན། ངས་སེར་སྣ་མེད་པར་ཟླ་རེར་ཨ་སྒོར་ ༠་༧༥ ཁ་སྣོན་གྱིས་དངུལ་གཏོང་ལེན་གྱི་གླ་ཆ་འབུལ་རྒྱུ་ཡིན།
                  </span>
                </label>

                {/* Name Field */}
                <div className="gt-name-field-wrap">
                  <label htmlFor="donor-name-tb" className="gt-donation-field-label">ཞལ་འདེབས་འབུལ་པ་པོའི་གནས་ཚུལ། མིང་།</label>
                  <input
                    id="donor-name-tb"
                    type="text"
                    placeholder="[ཁྱེད་ཀྱི་མཚན་འབྲི་རོགས།]"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="gt-name-input"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="gt-donate-submit-btn">
                  བྱིན།
                </button>

                {submitted && (
                  <div className="gt-donation-success-banner">
                    <strong>ཐུགས་རྗེ་ཆེ། {donorName || 'སྦྱིན་བདག་ལགས'}!</strong>
                    <br />
                    ཁྱེད་ཀྱི་ཞལ་འདེབས་ཨ་སྒོར་ ${finalAmount} འབྱོར་སོང་། 
                    དགེ་བའི་མཐུ་ལས་སེམས་ཅན་ཐམས་ཅད་བདེ་སྐྱིད་དང་ལྡན་པར་གྱུར་ཅིག
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* 2. "Before You Attend" Gold Section */}
        <section className="gt-attend-gold-section">
          <div className="gt-attend-grid">
            {/* Left: Text and Contact Button */}
            <div className="gt-attend-text-col">
              <h2 className="gt-attend-title">མཉམ་ཞུགས་མ་གནང་གོང་།</h2>
              <div className="gt-attend-body">
                <p>
                  བྱེད་སྒོར་མཉམ་ཞུགས་གནང་ཕྱོགས་དང་། བརྙན་པར་ལེན་ཕྱོགས་ཀྱི་སྒྲིག་ཁྲིམས། དགོན་པའི་ཉམས་ལེན་ལ་གུས་བརྩི་བཅས་ཀྱི་ལམ་སྟོན།
                </p>
                <p>
                  མཛད་རིམ་ཁ་ཅིག་ནི་དགེ་འདུན་པ་ཁོ་ནར་དམིགས་པ་དང་། གཞན་ཁག་ནི་སྒྲུབ་པ་པོ་དང་། གནས་མཇལ་བ། ཡང་ན་མང་ཚོགས་བཅས་ལ་དམིགས་པ་ཡིན་ཆོག མཉམ་ཞུགས་མ་གནང་གོང་ནས་མཛད་རིམ་སོ་སོའི་ཞིབ་ཕྲའི་གནས་ཚུལ་ལ་གཟིགས་རོགས།
                </p>
              </div>
              <button
                type="button"
                className="gt-attend-contact-btn"
                onClick={() => onNavigate && onNavigate('contact')}
              >
                འབྲེལ་གཏུགས།
              </button>
            </div>

            {/* Right: Map Card */}
            <div className="gt-attend-map-col">
              <div className="gt-attend-map-card">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gyuto+Tantric+Monastery+Sidhbari+Dharamshala" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Google ས་ཁྲ་ནང་དུ་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་ཁ་ཕྱེ་བ།"
                >
                  <img 
                    src={supportMap} 
                    alt="Gyuto Tantric Monastery Location Map" 
                    className="gt-attend-map-img" 
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="tb" onNavigate={onNavigate} />
    </div>
  );
}

export { SupportTb };
