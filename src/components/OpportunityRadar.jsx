import React, { useState, useEffect } from 'react';
import './OpportunityRadar.css';

const OpportunityRadar = () => {
  const [radarActive, setRadarActive] = useState(true);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  // Simulate radar scanning
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarActive(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Radar Signals (Opportunities & Warnings)
  const radarSignals = [
    {
      id: 1,
      type: 'stock-critical',
      priority: 'high',
      category: 'স্টক সতর্কতা',
      title: 'চাল প্রায় শেষ',
      product: 'চাল (মিনিকেট)',
      indicator: '↓',
      current: '১২ কেজি',
      threshold: '৫০ কেজি',
      timeframe: 'আজ সন্ধ্যার মধ্যে শেষ হবে',
      action: 'এখনই ১০০ কেজি অর্ডার করুন',
      impact: 'বিক্রয় হারানোর ঝুঁকি',
      color: '#FF6B35',
      icon: '📦',
      region: null
    },
    {
      id: 2,
      type: 'demand-spike',
      priority: 'high',
      category: 'চাহিদা বৃদ্ধি',
      title: 'শীতকালীন পণ্যের চাহিদা',
      product: 'খেজুর গুড়, পিঠার আটা',
      indicator: '↑',
      current: '৩৫% বৃদ্ধি',
      trend: 'গত সপ্তাহের তুলনায়',
      timeframe: 'পরবর্তী ১৫ দিন পিক সিজন',
      action: 'স্টক ৫০% বাড়ান',
      impact: '+১৫,০০০ টাকা অতিরিক্ত আয়',
      color: '#06A77D',
      icon: '📈',
      region: 'আপনার এলাকায়'
    },
    {
      id: 3,
      type: 'price-opportunity',
      priority: 'medium',
      category: 'মূল্য সুযোগ',
      title: 'পাইকারি দাম কমেছে',
      product: 'ডাল (মুগ)',
      indicator: '↓',
      current: '১২৮ টাকা/কেজি',
      previous: '১৪৫ টাকা/কেজি',
      timeframe: 'এই সপ্তাহে অস্থায়ী',
      action: 'বাল্ক কিনুন ২০% সাশ্রয়',
      impact: 'মার্জিন ১২% বাড়বে',
      color: '#4895EF',
      icon: '💰',
      region: null
    },
    {
      id: 4,
      type: 'regional-insight',
      priority: 'medium',
      category: 'আঞ্চলিক প্রবণতা',
      title: 'পার্শ্ববর্তী এলাকায় নতুন ট্রেন্ড',
      product: 'প্যাকেজড স্ন্যাকস',
      indicator: '→',
      current: 'মিরপুর এলাকায় ৪২% বৃদ্ধি',
      timeframe: 'গত ৩০ দিনে',
      action: 'নতুন ব্র্যান্ড যোগ করুন',
      impact: 'নতুন ক্রেতা পাওয়া যাবে',
      color: '#F7B801',
      icon: '🗺️',
      region: 'মিরপুর, ঢাকা'
    },
    {
      id: 5,
      type: 'stock-warning',
      priority: 'low',
      category: 'স্টক পর্যবেক্ষণ',
      title: 'মাঝারি স্টক',
      product: 'তেল (সয়াবিন)',
      indicator: '→',
      current: '৩৫ লিটার',
      threshold: '২০ লিটার',
      timeframe: '৫-৬ দিন চলবে',
      action: 'পরবর্তী সপ্তাহে রিস্টক করুন',
      impact: 'পরিকল্পিত ক্রয়',
      color: '#8B7355',
      icon: '📊',
      region: null
    },
    {
      id: 6,
      type: 'demand-spike',
      priority: 'high',
      category: 'আসন্ন চাহিদা',
      title: 'উৎসবের আগে প্রস্তুতি',
      product: 'মশলা, ঘি, খেজুর',
      indicator: '↑',
      current: 'রমজান ১৫ দিনে',
      trend: 'ঐতিহাসিকভাবে ৬০% বৃদ্ধি',
      timeframe: 'এখন থেকে স্টক তৈরি করুন',
      action: 'আগাম অর্ডার দিন',
      impact: 'স্টক শেষ হওয়া এড়ানো',
      color: '#06A77D',
      icon: '🎯',
      region: 'সারাদেশে'
    }
  ];

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high': return { label: 'উচ্চ', color: '#FF6B35' };
      case 'medium': return { label: 'মাঝারি', color: '#F7B801' };
      case 'low': return { label: 'নিম্ন', color: '#4895EF' };
      default: return { label: 'সাধারণ', color: '#8B7355' };
    }
  };

  const getSignalTypeClass = (type) => {
    switch(type) {
      case 'stock-critical': return 'critical';
      case 'demand-spike': return 'opportunity';
      case 'price-opportunity': return 'opportunity';
      case 'regional-insight': return 'insight';
      case 'stock-warning': return 'warning';
      default: return 'info';
    }
  };

  return (
    <div className="opportunity-radar">
      {/* Radar Header */}
      <div className="radar-header">
        <div className="radar-tower">
          <div className={`tower-pulse ${radarActive ? 'active' : ''}`}>
            <div className="tower-icon">📡</div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring delayed"></div>
          </div>
        </div>
        <div className="radar-title-section">
          <h2 className="radar-title">সুযোগ পর্যবেক্ষণ কেন্দ্র</h2>
          <p className="radar-subtitle">ব্যবসায়িক সুযোগ এবং সতর্কতা স্ক্যান করা হচ্ছে</p>
        </div>
        <div className="radar-status">
          <span className={`status-indicator ${radarActive ? 'scanning' : ''}`}></span>
          <span className="status-text">সক্রিয় স্ক্যান</span>
        </div>
      </div>

      {/* Radar Summary Stats */}
      <div className="radar-stats">
        <div className="stat-card critical">
          <span className="stat-icon">⚠️</span>
          <div className="stat-content">
            <span className="stat-number">২</span>
            <span className="stat-label">জরুরি</span>
          </div>
        </div>
        <div className="stat-card opportunity">
          <span className="stat-icon">💡</span>
          <div className="stat-content">
            <span className="stat-number">৩</span>
            <span className="stat-label">সুযোগ</span>
          </div>
        </div>
        <div className="stat-card monitoring">
          <span className="stat-icon">👁️</span>
          <div className="stat-content">
            <span className="stat-number">১</span>
            <span className="stat-label">পর্যবেক্ষণ</span>
          </div>
        </div>
      </div>

      {/* Radar Signals Grid */}
      <div className="radar-signals-grid">
        {radarSignals.map((signal) => {
          const priority = getPriorityBadge(signal.priority);
          const signalClass = getSignalTypeClass(signal.type);

          return (
            <div 
              key={signal.id}
              className={`radar-signal ${signalClass} ${selectedOpportunity === signal.id ? 'selected' : ''}`}
              onClick={() => setSelectedOpportunity(selectedOpportunity === signal.id ? null : signal.id)}
            >
              {/* Signal Header */}
              <div className="signal-header">
                <div className="signal-icon-wrapper" style={{ backgroundColor: signal.color }}>
                  <span className="signal-icon">{signal.icon}</span>
                  <span className="signal-indicator">{signal.indicator}</span>
                </div>
                <div className="signal-meta">
                  <span className="signal-category">{signal.category}</span>
                  <span className="signal-priority" style={{ color: priority.color }}>
                    {priority.label}
                  </span>
                </div>
              </div>

              {/* Signal Content */}
              <div className="signal-content">
                <h3 className="signal-title">{signal.title}</h3>
                <p className="signal-product">{signal.product}</p>

                <div className="signal-metrics">
                  <div className="metric-row">
                    <span className="metric-label">বর্তমান:</span>
                    <span className="metric-value" style={{ color: signal.color }}>
                      {signal.current}
                    </span>
                  </div>
                  {signal.threshold && (
                    <div className="metric-row">
                      <span className="metric-label">প্রয়োজন:</span>
                      <span className="metric-value">{signal.threshold}</span>
                    </div>
                  )}
                  {signal.previous && (
                    <div className="metric-row">
                      <span className="metric-label">আগে:</span>
                      <span className="metric-value">{signal.previous}</span>
                    </div>
                  )}
                  {signal.trend && (
                    <div className="metric-row">
                      <span className="metric-label">ট্রেন্ড:</span>
                      <span className="metric-value">{signal.trend}</span>
                    </div>
                  )}
                </div>

                <div className="signal-timeframe">
                  <span className="timeframe-icon">⏱️</span>
                  <span className="timeframe-text">{signal.timeframe}</span>
                </div>

                {signal.region && (
                  <div className="signal-region">
                    <span className="region-icon">📍</span>
                    <span className="region-text">{signal.region}</span>
                  </div>
                )}
              </div>

              {/* Signal Action */}
              <div className="signal-action-section">
                <div className="action-recommendation">
                  <span className="action-label">করণীয়:</span>
                  <span className="action-text">{signal.action}</span>
                </div>
                <div className="action-impact">
                  <span className="impact-icon">📊</span>
                  <span className="impact-text">{signal.impact}</span>
                </div>
              </div>

              {/* Signal Actions */}
              <div className="signal-actions">
                <button className="signal-btn primary" style={{ backgroundColor: signal.color }}>
                  পদক্ষেপ নিন
                </button>
                <button className="signal-btn secondary">
                  বিস্তারিত
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Radar Scanning Animation */}
      <div className="radar-scanning-footer">
        <div className="scanning-animation">
          <div className="scan-line"></div>
          <div className="scan-dots">
            <span className="scan-dot"></span>
            <span className="scan-dot"></span>
            <span className="scan-dot"></span>
          </div>
        </div>
        <p className="scanning-text">পরবর্তী স্ক্যান: ৫ মিনিটে</p>
      </div>
    </div>
  );
};

export default OpportunityRadar;
