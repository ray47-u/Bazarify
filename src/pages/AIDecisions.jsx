import React, { useState } from 'react';
import './AIDecisions.css';

const AIDecisions = () => {
  const [selectedDecision, setSelectedDecision] = useState(null);

  const priceDecisions = [
    {
      id: 1,
      product: 'চিনি (১ কেজি)',
      time: '১০:৩০ AM',
      before: '৮৫ টাকা',
      after: '৮২ টাকা',
      reason: 'প্রতিযোগী দোকানের দাম কম',
      impact: '+৮ টি অতিরিক্ত বিক্রয়',
      confidence: 92,
      status: 'implemented'
    },
    {
      id: 2,
      product: 'ডাল (১ কেজি)',
      time: '১১:১৫ AM',
      before: '১২০ টাকা',
      after: '১২৫ টাকা',
      reason: 'চাহিদা বেশি, মজুদ কম',
      impact: '+১,২০০ টাকা অতিরিক্ত লাভ',
      confidence: 88,
      status: 'pending'
    },
    {
      id: 3,
      product: 'আটা (১ কেজি)',
      time: '২:৪৫ PM',
      before: '৫৫ টাকা',
      after: '৫২ টাকা',
      reason: 'পুরাতন মজুদ শেষ করার জন্য',
      impact: '+১২ টি অতিরিক্ত বিক্রয়',
      confidence: 85,
      status: 'implemented'
    }
  ];

  const trustDecisions = [
    {
      id: 1,
      customer: 'করিম মিয়া',
      trustScore: 85,
      decision: 'বাকি দেওয়া হয়েছে',
      amount: '৩,৫০০ টাকা',
      reason: 'গত ৬ মাস সময়মতো পেমেন্ট দিয়েছেন',
      paymentHistory: '১৮/২০ টি সময়মতো',
      risk: 'কম',
      time: '৯:২০ AM'
    },
    {
      id: 2,
      customer: 'সালমা বেগম',
      trustScore: 72,
      decision: 'ছাড় দেওয়া হয়েছে',
      amount: '৫% (২৮০ টাকা)',
      reason: 'নিয়মিত ক্রেতা, বড় অর্ডার',
      paymentHistory: '১৫/২০ টি সময়মতো',
      risk: 'মাঝারি',
      time: '১:১০ PM'
    },
    {
      id: 3,
      customer: 'রহিম সাহেব',
      trustScore: 45,
      decision: 'নগদ পেমেন্ট চাওয়া হয়েছে',
      amount: '২,১০০ টাকা',
      reason: 'নতুন ক্রেতা, ইতিহাস নেই',
      paymentHistory: '৩/৫ টি সময়মতো',
      risk: 'উচ্চ',
      time: '৩:৩০ PM'
    }
  ];

  const getTrustColor = (score) => {
    if (score >= 80) return 'high-trust';
    if (score >= 60) return 'medium-trust';
    return 'low-trust';
  };

  const getRiskColor = (risk) => {
    if (risk === 'কম') return 'low-risk';
    if (risk === 'মাঝারি') return 'medium-risk';
    return 'high-risk';
  };

  return (
    <div className="ai-decisions-page">
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">🤖 AI সিদ্ধান্ত কেন্দ্র</h1>
          <p className="page-subtitle">আজ AI আপনার ব্যবসার জন্য যে সিদ্ধান্ত নিয়েছে</p>
        </div>
        <div className="ai-stats">
          <div className="stat-badge">
            <span className="stat-icon">✅</span>
            <span className="stat-text">{priceDecisions.filter(d => d.status === 'implemented').length} টি প্রয়োগ হয়েছে</span>
          </div>
          <div className="stat-badge pending">
            <span className="stat-icon">⏳</span>
            <span className="stat-text">{priceDecisions.filter(d => d.status === 'pending').length} টি অপেক্ষমাণ</span>
          </div>
        </div>
      </header>

      {/* Price Recommendations Section */}
      <section className="decisions-section">
        <div className="section-header">
          <h2 className="section-title">💰 দাম সুপারিশ</h2>
          <p className="section-description">AI বাজার বিশ্লেষণ করে দাম পরিবর্তনের পরামর্শ দিচ্ছে</p>
        </div>

        <div className="decisions-grid">
          {priceDecisions.map((decision) => (
            <div 
              key={decision.id} 
              className={`decision-card ${decision.status}`}
              onClick={() => setSelectedDecision(decision)}
            >
              <div className="decision-header">
                <div className="product-info">
                  <h3 className="product-name">{decision.product}</h3>
                  <span className="decision-time">{decision.time}</span>
                </div>
                {decision.status === 'implemented' && (
                  <span className="status-badge implemented">প্রয়োগ হয়েছে</span>
                )}
                {decision.status === 'pending' && (
                  <span className="status-badge pending">অপেক্ষমাণ</span>
                )}
              </div>

              <div className="price-comparison">
                <div className="price-box before">
                  <span className="price-label">আগে</span>
                  <span className="price-value">{decision.before}</span>
                </div>
                <div className="arrow-indicator">→</div>
                <div className="price-box after">
                  <span className="price-label">এখন</span>
                  <span className="price-value">{decision.after}</span>
                </div>
              </div>

              <div className="decision-reason">
                <span className="reason-icon">💡</span>
                <span className="reason-text">{decision.reason}</span>
              </div>

              <div className="decision-impact">
                <span className="impact-label">প্রত্যাশিত ফলাফল:</span>
                <span className="impact-value">{decision.impact}</span>
              </div>

              <div className="confidence-bar">
                <div className="confidence-label">
                  <span>আত্মবিশ্বাস</span>
                  <span className="confidence-percent">{decision.confidence}%</span>
                </div>
                <div className="confidence-track">
                  <div 
                    className="confidence-fill" 
                    style={{ width: `${decision.confidence}%` }}
                  ></div>
                </div>
              </div>

              {decision.status === 'pending' && (
                <div className="decision-actions">
                  <button className="action-btn approve">✓ অনুমোদন</button>
                  <button className="action-btn reject">✗ বাতিল</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Trust-Based Decisions Section */}
      <section className="decisions-section">
        <div className="section-header">
          <h2 className="section-title">🤝 বিশ্বস্ততা-ভিত্তিক সিদ্ধান্ত</h2>
          <p className="section-description">ক্রেতাদের ইতিহাস দেখে AI যে সিদ্ধান্ত নিয়েছে</p>
        </div>

        <div className="trust-decisions-list">
          {trustDecisions.map((decision) => (
            <div key={decision.id} className="trust-decision-card">
              <div className="trust-header">
                <div className="customer-info">
                  <div className="customer-avatar">👤</div>
                  <div className="customer-details">
                    <h3 className="customer-name">{decision.customer}</h3>
                    <div className="trust-score-display">
                      <span className="trust-label">বিশ্বস্ততা স্কোর:</span>
                      <span className={`trust-score ${getTrustColor(decision.trustScore)}`}>
                        {decision.trustScore}/100
                      </span>
                    </div>
                  </div>
                </div>
                <span className="decision-time">{decision.time}</span>
              </div>

              <div className="decision-summary">
                <div className="summary-item main">
                  <span className="summary-label">AI সিদ্ধান্ত:</span>
                  <span className="summary-value">{decision.decision}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">পরিমাণ:</span>
                  <span className="summary-value highlight">{decision.amount}</span>
                </div>
              </div>

              <div className="decision-analysis">
                <div className="analysis-row">
                  <span className="analysis-icon">💡</span>
                  <div className="analysis-content">
                    <span className="analysis-label">কারণ:</span>
                    <span className="analysis-text">{decision.reason}</span>
                  </div>
                </div>
                
                <div className="analysis-row">
                  <span className="analysis-icon">📊</span>
                  <div className="analysis-content">
                    <span className="analysis-label">পেমেন্ট ইতিহাস:</span>
                    <span className="analysis-text">{decision.paymentHistory}</span>
                  </div>
                </div>

                <div className="analysis-row">
                  <span className="analysis-icon">⚠️</span>
                  <div className="analysis-content">
                    <span className="analysis-label">ঝুঁকি মাত্রা:</span>
                    <span className={`risk-badge ${getRiskColor(decision.risk)}`}>
                      {decision.risk}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIDecisions;
