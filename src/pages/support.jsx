import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const supportMap = '/images/contact-map.jpg';
import './contact.css';

export default function Support({ onSwitchLanguage, onNavigate }) {
  const [frequency, setFrequency] = useState('recurring'); // 'recurring' | 'one-time'
  const [selectedAmount, setSelectedAmount] = useState('30'); // '10', '20', '30', '40', 'other'
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
    <div className="gt-page-wrapper">
      <Header 
        lang="en" 
        active="donate" 
        onSwitchLanguage={onSwitchLanguage} 
        onNavigate={onNavigate} 
      />

      <main className="gt-main-content">
        {/* 1. Main Donation Section */}
        <section className="gt-support-section">
          <div className="gt-support-grid">
            {/* Left Column: Pledge Text */}
            <div className="gt-support-pledge-col">
              <h1 className="gt-support-title">Help us do more</h1>
              <div className="gt-support-pledge-text">
                <p>
                  We pledge to use all donations wisely and responsibly, with full 
                  transparency regarding how your gift supports our mission. Annual reports 
                  detailing the monastery's activities, financial stewardship, and impact 
                  are available upon request.
                </p>
                <p>
                  Thank you for standing with Gyuto Monastery in our work to preserve 
                  authentic Buddhist teachings, foster spiritual practice, and serve the 
                  broader community.
                </p>
                <p style={{ marginTop: '28px', fontStyle: 'italic' }}>
                  With deep respect and gratitude,
                </p>
                <p className="gt-support-signature">
                  The Community of Gyuto Tantric Monastery
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
                    className={`gt-freq-btn ${frequency === 'one-time' ? 'active' : 'inactive'}`}
                    onClick={() => setFrequency('one-time')}
                  >
                    ONE TIME
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
                      onClick={() => {
                        setSelectedAmount(amt);
                      }}
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
                  <label htmlFor="donor-name" className="gt-donation-field-label">Name</label>
                  <input
                    id="donor-name"
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
                    <strong>Thank you, {donorName || 'generous friend'}!</strong>
                    <br />
                    Your pledge of ${finalAmount} ({frequency}) is deeply appreciated. 
                    May your generous merits bring harmony, health, and peace to all sentient beings.
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
                  title="Open Gyuto Tantric Monastery map"
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

      <Footer lang="en" onNavigate={onNavigate} />
    </div>
  );
}

export { Support };
