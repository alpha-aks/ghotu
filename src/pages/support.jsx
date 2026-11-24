import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const supportMap = '/images/contact-map.jpg';
import './contact.css';

export default function Support({ onSwitchLanguage, onNavigate }) {
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'recurring'
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

  // Check if returning from payment completion
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
      setPaymentError('Please enter a valid donation amount.');
      return;
    }

    setIsLoading(true);

    try {
      // 1. Call server-side Hostinger PHP endpoint to create order session
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
        throw new Error('Server returned an unexpected response. Please ensure your Cashfree credentials are set in public/api/config.php');
      }

      if (!response.ok || !data.success || !data.payment_session_id) {
        throw new Error(data.message || 'Unable to initialize Cashfree payment session.');
      }

      // 2. Open Cashfree official checkout modal on the page
      if (typeof window.Cashfree !== 'undefined') {
        const cashfree = window.Cashfree({
          mode: data.environment === 'TEST' ? 'sandbox' : 'production'
        });

        cashfree.checkout({
          paymentSessionId: data.payment_session_id,
          redirectTarget: '_modal'
        }).then((result) => {
          if (result && result.error) {
            setPaymentError(result.error.message || 'Payment was not completed. Please try again.');
          }
          if (result && result.paymentDetails) {
            setSubmitted(true);
            setCompletedOrderId(data.order_id);
          }
        });
      } else {
        throw new Error('Cashfree Payment SDK is loading. Please try again in a few seconds.');
      }
    } catch (err) {
      console.error('Cashfree checkout initiation error:', err);
      setPaymentError(err.message || 'Unable to connect to Cashfree payment gateway.');
    } finally {
      setIsLoading(false);
    }
  };

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

                {/* Currency Selection */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label className="gt-donation-field-label" style={{ margin: 0 }}>Select Currency</label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      className={`gt-freq-btn ${currency === 'INR' ? 'active' : 'inactive'}`}
                      style={{ padding: '6px 14px', fontSize: '13px' }}
                      onClick={() => handleCurrencyChange('INR')}
                    >
                      ₹ INR (India)
                    </button>
                    <button
                      type="button"
                      className={`gt-freq-btn ${currency === 'USD' ? 'active' : 'inactive'}`}
                      style={{ padding: '6px 14px', fontSize: '13px' }}
                      onClick={() => handleCurrencyChange('USD')}
                    >
                      $ USD
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <label className="gt-donation-field-label">Select Amount ({currency})</label>
                <div className="gt-amount-pill-group">
                  {activeAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`gt-amount-btn ${selectedAmount === amt ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedAmount(amt);
                      }}
                    >
                      {currencySymbol}{amt}
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
                      placeholder={`Enter custom amount in ${currency}`}
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
                    id="cover-fee"
                    type="checkbox"
                    checked={coverFee}
                    onChange={(e) => setCoverFee(e.target.checked)}
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                  />
                  <label htmlFor="cover-fee" style={{ fontSize: '13px', color: '#4A4643', cursor: 'pointer', lineHeight: '1.4' }}>
                    Yes, I'll generously add $0.75 each month to cover the transaction fees.
                  </label>
                </div>

                {/* Donor Details: Name, Email, Phone */}
                <div className="gt-name-field-wrap">
                  <label htmlFor="donor-name" className="gt-donation-field-label">Full Name</label>
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

                <div className="gt-name-field-wrap" style={{ marginTop: '12px' }}>
                  <label htmlFor="donor-email" className="gt-donation-field-label">Email Address (for receipt)</label>
                  <input
                    id="donor-email"
                    type="email"
                    placeholder="name@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="gt-name-input"
                    required
                  />
                </div>

                <div className="gt-name-field-wrap" style={{ marginTop: '12px' }}>
                  <label htmlFor="donor-phone" className="gt-donation-field-label">Phone Number (for UPI / SMS receipt)</label>
                  <input
                    id="donor-phone"
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
                  {isLoading ? 'INITIATING CASHFREE...' : `DONATE ${currencySymbol}${finalAmount || '0'} NOW`}
                </button>

                {/* Cashfree Trust & Payment Badges */}
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
                    <strong>Thank you, {donorName || 'generous friend'}!</strong>
                    <br />
                    Your donation of {currencySymbol}{finalAmount} has been received successfully via Cashfree.
                    {completedOrderId && <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.85 }}>Order ID: {completedOrderId}</div>}
                    <div style={{ marginTop: '8px' }}>
                      May your generous merits bring peace, wisdom, and joy to all sentient beings.
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
