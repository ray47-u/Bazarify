import React, { useState } from 'react';
import './TrustDNAVisual.css';

const TrustDNAVisual = ({ customerName = "করিম মিয়া" }) => {
  const [selectedLayer, setSelectedLayer] = useState(null);

  // Trust DNA Components
  const trustFactors = [
    {
      id: 'payment',
      label: 'পেমেন্ট আচরণ',
      description: 'সময়মত টাকা পরিশোধ',
      score: 92,
      maxScore: 100,
      weight: 35,
      color: '#06A77D',
      details: {
        onTimePayments: '২৮ বার',
        latePayments: '২ বার',
        avgDelay: '০ দিন',
        insight: 'প্রায় সবসময় সময়মত টাকা দেন'
      },
      icon: '💰'
    },
    {
      id: 'returns',
      label: 'পণ্য ফেরত',
      description: 'কম পণ্য ফেরত দেন',
      score: 88,
      maxScore: 100,
      weight: 20,
      color: '#4895EF',
      details: {
        totalPurchases: '১৫০ বার',
        returns: '৩ বার',
        returnRate: '২%',
        insight: 'খুব কম পণ্য ফেরত দেন'
      },
      icon: '🔄'
    },
    {
      id: 'consistency',
      label: 'কেনাকাটার ধারাবাহিকতা',
      description: 'নিয়মিত কেনাকাটা করেন',
      score: 95,
      maxScore: 100,
      weight: 25,
      color: '#F7B801',
      details: {
        frequency: 'সপ্তাহে ৩ বার',
        lastVisit: '২ দিন আগে',
        loyaltyMonths: '১৮ মাস',
        insight: 'অত্যন্ত নিয়মিত ক্রেতা'
      },
      icon: '📊'
    },
    {
      id: 'volume',
      label: 'ক্রয়ের পরিমাণ',
      description: 'বড় অর্ডার করেন',
      score: 78,
      maxScore: 100,
      weight: 20,
      color: '#FF6B35',
      details: {
        avgOrderValue: '১,৮৫০ টাকা',
        totalSpent: '২,৭৭,৫০০ টাকা',
        largestOrder: '৮,৫০০ টাকা',
        insight: 'গড়ের চেয়ে বেশি কেনেন'
      },
      icon: '📦'
    }
  ];

  // Calculate overall trust score (weighted average)
  const calculateTrustScore = () => {
    const totalWeight = trustFactors.reduce((sum, factor) => sum + factor.weight, 0);
    const weightedSum = trustFactors.reduce((sum, factor) => {
      return sum + (factor.score * factor.weight / 100);
    }, 0);
    return Math.round(weightedSum);
  };

  const overallTrustScore = calculateTrustScore();

  // Get trust level text
  const getTrustLevel = (score) => {
    if (score >= 90) return { text: 'অসাধারণ বিশ্বস্ত', color: '#06A77D' };
    if (score >= 75) return { text: 'বিশ্বস্ত', color: '#4895EF' };
    if (score >= 60) return { text: 'মোটামুটি বিশ্বস্ত', color: '#F7B801' };
    return { text: 'সতর্কতা প্রয়োজন', color: '#D62828' };
  };

  const trustLevel = getTrustLevel(overallTrustScore);

  return (
    <div className="trust-dna-visual">
      {/* Header */}
      <div className="trust-header">
        <div className="trust-customer-info">
          <h2 className="customer-name">{customerName}</h2>
          <p className="trust-subtitle">বিশ্বস্ততার স্তর</p>
        </div>
        <div className="overall-trust-badge" style={{ borderColor: trustLevel.color }}>
          <span className="trust-score-number">{overallTrustScore}</span>
          <span className="trust-score-label">স্কোর</span>
        </div>
      </div>

      {/* Trust Level Indicator */}
      <div className="trust-level-bar">
        <div 
          className="trust-level-fill" 
          style={{ 
            width: `${overallTrustScore}%`,
            background: `linear-gradient(90deg, ${trustLevel.color}, ${trustLevel.color}dd)`
          }}
        >
          <span className="trust-level-text">{trustLevel.text}</span>
        </div>
      </div>

      {/* DNA Explanation */}
      <div className="dna-explanation">
        <h3 className="explanation-title">
          <span className="dna-icon">🧬</span>
          বিশ্বস্ততা কীভাবে তৈরি হয়
        </h3>
        <p className="explanation-text">
          প্রতিটি স্তর ক্রেতার আচরণের একটি দিক দেখায়। সব মিলে সম্পূর্ণ বিশ্বস্ততার ছবি।
        </p>
      </div>

      {/* Trust DNA Layers */}
      <div className="trust-layers">
        {trustFactors.map((factor, index) => (
          <div 
            key={factor.id}
            className={`trust-layer ${selectedLayer === factor.id ? 'selected' : ''}`}
            onClick={() => setSelectedLayer(selectedLayer === factor.id ? null : factor.id)}
          >
            {/* Layer Header */}
            <div className="layer-header">
              <div className="layer-info">
                <span className="layer-icon">{factor.icon}</span>
                <div className="layer-text">
                  <h4 className="layer-label">{factor.label}</h4>
                  <p className="layer-description">{factor.description}</p>
                </div>
              </div>
              <div className="layer-weight-badge">
                <span className="weight-value">{factor.weight}%</span>
                <span className="weight-label">গুরুত্ব</span>
              </div>
            </div>

            {/* Layer Progress Bar */}
            <div className="layer-progress-container">
              <div className="layer-progress-track">
                <div 
                  className="layer-progress-fill"
                  style={{ 
                    width: `${factor.score}%`,
                    backgroundColor: factor.color
                  }}
                >
                  <span className="layer-score">{factor.score}</span>
                </div>
              </div>
              <div className="layer-contribution">
                <span className="contribution-label">অবদান:</span>
                <span className="contribution-value" style={{ color: factor.color }}>
                  +{Math.round(factor.score * factor.weight / 100)}
                </span>
              </div>
            </div>

            {/* Expanded Details */}
            {selectedLayer === factor.id && (
              <div className="layer-details">
                <div className="details-grid">
                  {Object.entries(factor.details).map(([key, value]) => {
                    if (key === 'insight') return null;
                    return (
                      <div key={key} className="detail-item">
                        <span className="detail-label">
                          {key === 'onTimePayments' && 'সময়মত'}
                          {key === 'latePayments' && 'বিলম্বে'}
                          {key === 'avgDelay' && 'গড় বিলম্ব'}
                          {key === 'totalPurchases' && 'মোট কেনাকাটা'}
                          {key === 'returns' && 'ফেরত'}
                          {key === 'returnRate' && 'ফেরতের হার'}
                          {key === 'frequency' && 'ফ্রিকোয়েন্সি'}
                          {key === 'lastVisit' && 'শেষ দর্শন'}
                          {key === 'loyaltyMonths' && 'গ্রাহক ধারাবাহিকতা'}
                          {key === 'avgOrderValue' && 'গড় অর্ডার'}
                          {key === 'totalSpent' && 'মোট খরচ'}
                          {key === 'largestOrder' && 'সবচেয়ে বড় অর্ডার'}
                        </span>
                        <span className="detail-value" style={{ color: factor.color }}>
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="detail-insight">
                  <span className="insight-icon">💡</span>
                  <span className="insight-text">{factor.details.insight}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trust Building Steps */}
      <div className="trust-building-visual">
        <h4 className="building-title">বিশ্বস্ততার ধাপ</h4>
        <div className="building-steps">
          {trustFactors.map((factor, index) => (
            <div key={factor.id} className="building-step">
              <div 
                className="step-block"
                style={{ 
                  backgroundColor: factor.color,
                  height: `${factor.score * factor.weight / 100}px`,
                  opacity: 0.9
                }}
              >
                <span className="step-value">
                  {Math.round(factor.score * factor.weight / 100)}
                </span>
              </div>
              <div className="step-connector"></div>
            </div>
          ))}
          <div className="building-result">
            <div 
              className="result-block"
              style={{ 
                background: `linear-gradient(135deg, ${trustLevel.color}, ${trustLevel.color}dd)`,
                height: `${overallTrustScore * 1.2}px`
              }}
            >
              <span className="result-score">{overallTrustScore}</span>
            </div>
            <span className="result-label">মোট স্কোর</span>
          </div>
        </div>
      </div>

      {/* Credit Recommendation */}
      <div className="credit-recommendation">
        <div className="recommendation-header">
          <span className="recommendation-icon">💳</span>
          <h4 className="recommendation-title">বাকি দেওয়ার সুপারিশ</h4>
        </div>
        <div className="recommendation-content">
          {overallTrustScore >= 85 && (
            <>
              <div className="credit-amount" style={{ color: trustLevel.color }}>
                ৫,০০০ টাকা পর্যন্ত নিরাপদ
              </div>
              <p className="credit-reason">
                উচ্চ বিশ্বস্ততা স্কোর। সময়মত পেমেন্ট এবং নিয়মিত কেনাকাটার রেকর্ড ভালো।
              </p>
            </>
          )}
          {overallTrustScore >= 70 && overallTrustScore < 85 && (
            <>
              <div className="credit-amount" style={{ color: trustLevel.color }}>
                ২,৫০০ টাকা পর্যন্ত নিরাপদ
              </div>
              <p className="credit-reason">
                ভালো বিশ্বস্ততা স্কোর। কিছু সতর্কতার সাথে বাকি দিতে পারেন।
              </p>
            </>
          )}
          {overallTrustScore < 70 && (
            <>
              <div className="credit-amount warning">
                ১,০০০ টাকার বেশি সতর্কতা
              </div>
              <p className="credit-reason">
                বিশ্বস্ততা স্কোর বাড়ানোর জন্য আরও নিয়মিত কেনাকাটা প্রয়োজন।
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrustDNAVisual;
