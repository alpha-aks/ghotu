import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const supportMap = '/images/contact-map.jpg';
import './contact.css';

export default function SupportTb({ onSwitchLanguage, onNavigate }) {
  const [frequency, setFrequency] = useState('recurring'); // 'recurring' | 'monthly'
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
              <h1 className="gt-support-title">Help us do more</h1>
              <div className="gt-support-pledge-text">
                <p>
                  ང་ཚོ་ཁྱེད་ཀྱི་སྦྱིན་བདག་དང་རོགས་སྐྱོང་དེ་གཤེགས་རིམ་ལ་ཡིད་མ་ཆེས་པར་བསྐྱར་བ་གཏོང་གི་ཡིན། 
                  སྦྱིན་སྲེག་རེ་རེ་དེ་དགེ་ལུགས་ཞིང་ལའི་དགེ་རྒྱུད་དང་དེ་སྲུང་གི་དོན་དུ་ཆོས་གཞུང་བསྲུང་སྐྱབ་ཀྱི་གཞི་བབ་ལ་དགེ་མཚན་གཏོང་བ་ཡིན། 
                  ཁྱེད་ཀྱི་སྦྱིན་སྲེག་དེ་དགོན་པའི་དགེ་སློང་རྣམས་དང་དགེ་ལུགས་ཞིང་ལའི་བརྒྱུད་པ་སྲུང་སྐྱབ་ལ་དེ་རིགས་ལ་དགེ་མཚན་གཏོང་བ་ཡིན།
                </p>
                <p>
                  ང་ཚོ་ཁྱེད་ཀྱི་སྦྱིན་སྲེག་ཡོངས་སུ་སེམ་དུ་གཏོང་སྟེ་རེ་གདེགས་གིས་རིམ་བཞག་བྱེད་ཀྱི་ཡིན། 
                  ལོ་རེའི་བྱེད་ཕྱུགས་དགོན་པའི་ལས་འགུལ་དང་། ཞབས་ཀའི་རིམ་བཞག། 
                  དང་ཕན་གཏོང་བའི་རིམ་པ་གླེང་སྟེགས་མཁོ་གནང་གི་ཡིན།
                </p>
                <p>
                  དགེ་ལུགས་ཞིང་ལའི་དགེ་རྒྱུད་དང་། ཞི་གནས་བསྒོམ་སྦྱོར། 
                  དང་མི་སེར་ལ་ལེགས་སྐྱུ་གཏོང་བའི་ལས་ཀ་ལ་དགོན་པ་དང་མ་སྦྱར་བཞུགས་ཁྱེད་ལ་ཤེས་རྒྱལ་གྱི་བསྟར་བ་གཏོང་གི་ཡིན།
                </p>
                <p style={{ marginTop: '24px' }}>
                  གཤེགས་རིམ་དང་བསྐྱར་བ་བཅས།
                </p>
                <p className="gt-support-signature">
                  དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དགེ་སློང་རྣམས།
                </p>
              </div>
            </div>

            {/* Right Column: Donation Form Widget */}
            <div className="gt-donation-card">
              <form onSubmit={handleSubmit}>
                {/* Frequency */}
                <label className="gt-donation-field-label">Select Donation Frequency</label>
                <div className="gt-frequency-pill-group">
                  <button
                    type="button"
                    className={`gt-freq-btn ${frequency === 'recurring' ? 'active' : 'inactive'}`}
                    onClick={() => setFrequency('recurring')}
                  >
                    RECURRING
                  </button>
                  <button
                    type="button"
                    className={`gt-freq-btn ${frequency === 'monthly' ? 'active' : 'inactive'}`}
                    onClick={() => setFrequency('monthly')}
                  >
                    MONTHLY
                  </button>
                </div>

                {/* Amount */}
                <label className="gt-donation-field-label">Select Amount (in dollars)</label>
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
                    OTHER
                  </button>
                </div>

                {selectedAmount === 'other' && (
                  <div className="gt-custom-amount-wrap">
                    <input
                      type="number"
                      min="1"
                      step="any"
                      placeholder="Enter custom amount in USD"
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
                    Yes I'll generously add $0.75 each month to cover the transaction fees.
                  </span>
                </label>

                {/* Name Field */}
                <div className="gt-name-field-wrap">
                  <label htmlFor="donor-name-tb" className="gt-donation-field-label">Name</label>
                  <input
                    id="donor-name-tb"
                    type="text"
                    placeholder="Enter your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="gt-name-input"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="gt-donate-submit-btn">
                  DONATE NOW
                </button>

                {submitted && (
                  <div className="gt-donation-success-banner">
                    <strong>ཐུགས་རྗེ་ཆེ། {donorName || 'སྦྱིན་བདག་ལགས'}!</strong>
                    <br />
                    ཁྱེད་ཀྱི་སྦྱིན་སྲེག་དོལ་ལར་ ${finalAmount} འབྱོར་སོང་། 
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
              <h2 className="gt-attend-title">Before You Attend</h2>
              <div className="gt-attend-body">
                <p>
                  Some programmes are intended exclusively for the monastic community, 
                  while others may be open to practitioners, visitors, or the wider public.
                </p>
                <p>
                  Please check the individual programme details before attending. Access, 
                  timings, photography, participation, and visitor requirements may vary between events.
                </p>
              </div>
              <button
                type="button"
                className="gt-attend-contact-btn"
                onClick={() => onNavigate && onNavigate('contact')}
              >
                CONTACT US
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
