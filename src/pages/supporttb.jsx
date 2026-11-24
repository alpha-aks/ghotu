import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const supportMap = '/images/contact-map.jpg';
import './contact.css';

export default function SupportTb({ onSwitchLanguage, onNavigate }) {
  const [frequency, setFrequency] = useState('one-time');
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [coverFees, setCoverFees] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [coverFee, setCoverFee] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [completedOrderId, setCompletedOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const amountsINR = ['500', '1000', '2500', '5000'];
  const amountsUSD = ['10', '20', '30', '40'];
  const activeAmounts = currency === 'INR' ? amountsINR : amountsUSD;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get('order_id');
      const status = params.get('status');
      if (orderId && (status === 'complete' || status === 'SUCCESS')) {
        setSubmitted(true);
        setCompletedOrderId(orderId);
      }
    }
  }, []);

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    setSelectedAmount(newCurrency === 'INR' ? '1000' : '20');
    setCustomAmount('');
  };

  const baseAmount = selectedAmount === 'other' ? (customAmount || '0') : selectedAmount;
  const finalAmount = (coverFee && currency === 'USD' && parseFloat(baseAmount) > 0)
    ? (parseFloat(baseAmount) + 0.75).toFixed(2)
    : baseAmount;
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentError('');

    const numericAmount = parseFloat(finalAmount);
    if (!numericAmount || numericAmount <= 0) {
      setPaymentError('ཞལ་འདེབས་ཀྱི་འབོར་གྲངས་འགོད་རོགས།');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/create-order.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: numericAmount,
          currency: currency,
          name: donorName || 'Generous Donor',
          email: donorEmail || 'donor@gyutomonastery.org',
          phone: donorPhone || '9876543210'
        })
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (err) {
        throw new Error('Cashfree མཐུད་ལམ་ལ་སྐྱོན་བྱུང་སོང་། config.php ལ་ཞིབ་བཤེར་གནང་རོགས།');
      }

      if (!response.ok || !data.success || !data.payment_session_id) {
        throw new Error(data.message || 'Cashfree སྒྲིག་འཇུག་མ་ཐུབ།');
      }

      if (typeof window.Cashfree !== 'undefined') {
        const cashfree = window.Cashfree({
          mode: data.environment === 'TEST' ? 'sandbox' : 'production'
        });

        cashfree.checkout({
          paymentSessionId: data.payment_session_id,
          redirectTarget: '_modal'
        }).then((result) => {
          if (result && result.error) {
            setPaymentError(result.error.message || 'དངུལ་སྤྲོད་མ་ཐུབ། ཡང་བསྐྱར་གནང་རོགས།');
          }
          if (result && result.paymentDetails) {
            setSubmitted(true);
            setCompletedOrderId(data.order_id);
          }
        });
      } else {
        throw new Error('Cashfree མཐུད་ལམ་སྒུག་བཞིན་ཡོད། ཡུད་ཙམ་ནས་གནང་རོགས།');
      }
    } catch (err) {
      console.error('Cashfree error:', err);
      setPaymentError(err.message || 'Cashfree མཐུད་ལམ་ལ་སྐྱོན་བྱུང་སོང་།');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gt-page-wrapper tibetan-page tibetan-text">
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
                  ང་ཚོས་ཁྱེད་ཀྱིས་ཕུལ་བའི་ཞལ་འདེབས་ཆ་ཚང་བ་རྣམ་དཔྱོད་དང་འགན་འཁུར་གཉིས་ལྡན་གྱིས་བེད་སྤྱོད་གཏོང་རྒྱུ་དང་། ཁྱེད་ཀྱི་འབུལ་བས་ང་ཚོའི་དམིགས་ཡུལ་ལ་རྒྱབ་སྐྱོར་ཇི་ལྟར་བྱུང་བའི་རྩིས་ཁྲ་རྣམས་ཁ་གསལ་ཡོང་བའི་ཁས་ལེན་ཞུ་བཞིན་ཡོད།
                </p>
                <p>
                  དགོན་པའི་ལས་དོན་དང་། དཔལ་འབྱོར་བདག་གཉེར། གྲུབ་འབྲས་བཅས་ཀྱི་སྐོར་ལ་ལོ་རེའི་ཞིབ་ཕྲའི་ལས་བསྡོམས་རྣམས་རེ་སྐུལ་གནང་ཚེ་མཁོ་སྤྲོད་བྱ་ཆོག་ཆོག་ཡིན།
                </p>
                <p>
                  བསྟན་པ་རྣལ་མ་མི་ཉམས་རྒྱུན་འཛིན་དང་། ཉམས་ལེན་གོང་འཕེལ། སྤྱི་ཚོགས་ཞབས་ཞུ་བཅས་གྲྭ་ཚང་གི་ལས་དོན་འདི་དག་གི་ཐོག་ལ་སྐུ་ཉིད་ནས་རྒྱབ་སྐྱོར་གནང་བར་ང་ཚོས་སྙིང་ཐག་པ་ནས་ཐུགས་རྗེ་ཆེ་ཞུ།
                </p>
                <p style={{ marginTop: '28px' }}>
                  གུས་བཀུར་དང་བཅས།
                </p>
                <p className="gt-support-signature">
                  དཔལ་ལྡན་སྟོད་རྒྱུད་གྲྭ་ཚང་འདུས་སྤྱི་ཡོངས་ནས།
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

                {/* Currency Selection */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label className="gt-donation-field-label" style={{ margin: 0 }}>དངུལ་ལོར་འདེམས་རོགས།</label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      className={`gt-freq-btn ${currency === 'INR' ? 'active' : 'inactive'}`}
                      style={{ padding: '6px 14px', fontSize: '13px' }}
                      onClick={() => handleCurrencyChange('INR')}
                    >
                      ₹ INR (ཧིན་སྒོར།)
                    </button>
                    <button
                      type="button"
                      className={`gt-freq-btn ${currency === 'USD' ? 'active' : 'inactive'}`}
                      style={{ padding: '6px 14px', fontSize: '13px' }}
                      onClick={() => handleCurrencyChange('USD')}
                    >
                      $ USD (ཨ་སྒོར།)
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <label className="gt-donation-field-label">དངུལ་འབོར། ({currency})</label>
                <div className="gt-amount-pill-group">
                  {activeAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`gt-amount-btn ${selectedAmount === amt ? 'active' : ''}`}
                      onClick={() => setSelectedAmount(amt)}
                    >
                      {currencySymbol}{amt}
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
                      placeholder={`${currency} འབོར་གྲངས་འབྲི་རོགས།`}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="gt-custom-amount-input"
                      required
                    />
                  </div>
                )}

                {/* Additional Option: Transaction Fee */}
                <div className="gt-fee-checkbox-wrap" style={{ marginTop: '12px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <input
                    id="cover-fee-tb"
                    type="checkbox"
                    checked={coverFee}
                    onChange={(e) => setCoverFee(e.target.checked)}
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                  />
                  <label htmlFor="cover-fee-tb" style={{ fontSize: '13px', color: '#4A4643', cursor: 'pointer', lineHeight: '1.6' }}>
                    ངས་སེར་སྣ་མེད་པར་ཟླ་རེར་ཨ་སྒོར་ ༠་༧༥ ཁ་སྣོན་གྱིས་དངུལ་གཏོང་ལེན་གྱི་གླ་ཆ་འབུལ་རྒྱུ་ཡིན།
                  </label>
                </div>

                {/* Name Field */}
                <div className="gt-name-field-wrap">
                  <label htmlFor="donor-name-tb" className="gt-donation-field-label">ཞལ་འདེབས་འབུལ་པ་པོའི་མཚན།</label>
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

                <div className="gt-name-field-wrap" style={{ marginTop: '12px' }}>
                  <label htmlFor="donor-email-tb" className="gt-donation-field-label">གློག་འཕྲིན། (འབྱོར་འཛིན་ཆེད།)</label>
                  <input
                    id="donor-email-tb"
                    type="email"
                    placeholder="name@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="gt-name-input"
                    required
                  />
                </div>

                <div className="gt-name-field-wrap" style={{ marginTop: '12px' }}>
                  <label htmlFor="donor-phone-tb" className="gt-donation-field-label">ཁ་པར་ཨང་གྲངས། (UPI དངུལ་སྤྲོད་ཆེད།)</label>
                  <input
                    id="donor-phone-tb"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="gt-name-input"
                    required
                  />
                </div>

                {/* Error Banner */}
                {paymentError && (
                  <div style={{
                    marginTop: '14px',
                    padding: '12px 14px',
                    borderRadius: '6px',
                    background: '#FEE2E2',
                    border: '1px solid #FCA5A5',
                    color: '#991B1B',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}>
                    {paymentError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="gt-donate-submit-btn"
                  disabled={isLoading}
                  style={{
                    marginTop: '18px',
                    opacity: isLoading ? 0.7 : 1,
                    cursor: isLoading ? 'wait' : 'pointer'
                  }}
                >
                  {isLoading ? 'CASHFREE མཐུད་བཞིན་ཡོད...' : `ཞལ་འདེབས་ ${currencySymbol}${finalAmount || '0'} འབུལ་རྒྱུ།`}
                </button>

                {/* Cashfree Trust Badges */}
                <div style={{
                  marginTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#6B7280',
                    fontWeight: 500
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>Secured by <strong>Cashfree Payments</strong></span>
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#9CA3AF',
                    letterSpacing: '0.02em'
                  }}>
                    UPI (Google Pay • PhonePe • Paytm) • Cards • NetBanking
                  </div>
                </div>

                {submitted && (
                  <div className="gt-donation-success-banner" style={{ marginTop: '16px' }}>
                    <strong>ཐུགས་རྗེ་ཆེ། {donorName || 'སྦྱིན་བདག་ལགས'}!</strong>
                    <br />
                    ཁྱེད་ཀྱི་ཞལ་འདེབས་ {currencySymbol}{finalAmount} Cashfree བརྒྱུད་ནས་ལེགས་གྲུབ་བྱུང་སོང་།
                    {completedOrderId && <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.85 }}>Order ID: {completedOrderId}</div>}
                    <div style={{ marginTop: '8px' }}>
                      དགེ་བའི་མཐུ་ལས་སེམས་ཅན་ཐམས་ཅད་བདེ་སྐྱིད་དང་ལྡན་པར་གྱུར་ཅིག
                    </div>
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
