import React, { useState, useEffect } from 'react';
import './AIDecisionCenter.css';

const AIDecisionCenter = () => {
  const [activeDecision, setActiveDecision] = useState(null);
  const [thinkingAnimation, setThinkingAnimation] = useState(true);

  useEffect(() => {
    // Simulate AI thinking animation
    const timer = setTimeout(() => setThinkingAnimation(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // AI Decisions Timeline Data
  const decisions = [
    {
      id: 1,
      type: 'pricing',
      status: 'recommended',
      timestamp: '১০ মিনিট আগে',
      title: 'দাম সমন্বয়ের সুপারিশ',
      product: 'চিনি (১ কেজি)',
      before: {
        label: 'বর্তমান দাম',
        value: '৮৫ টাকা',
        context: 'গত ৭ দিনে ৩ টি বিক্রয়'
      },
      after: {
        label: 'প্রস্তাবিত দাম',
        value: '৮২ টাকা',
        context: 'প্রতিদিন ১৫+ বিক্রয় সম্ভব'
      },
      reasoning: 'আশেপাশের ৩টি দোকানে ৮০-৮৩ টাকায় বিক্রয় হচ্ছে। আপনার দাম কমালে প্রতিযোগিতায় এগিয়ে থাকবেন।',
      impact: {
        label: 'সম্ভাব্য প্রভাব',
        metrics: [
          { icon: '📈', text: 'দৈনিক ১২ কেজি বেশি বিক্রয়' },
          { icon: '💰', text: 'মাসে ৪,৮০০ টাকা বেশি লাভ' }
        ]
      },
      confidence: 89
    },
    {
      id: 2,
      type: 'negotiation',
      status: 'completed',
      timestamp: '২ ঘণ্টা আগে',
      title: 'সাপ্লায়ারের সাথে দর কষাকষি সম্পন্ন',
      product: 'ডাল (মসুর) - ৫০ কেজি অর্ডার',
      before: {
        label: 'সাপ্লায়ারের দাম',
        value: '১২০ টাকা/কেজি',
        context: 'মোট: ৬,০০০ টাকা'
      },
      after: {
        label: 'AI দর কষাকষির পর',
        value: '১১৫ টাকা/কেজি',
        context: 'মোট: ৫,৭৫০ টাকা'
      },
      reasoning: 'বাজারের তথ্য অনুযায়ী গড় পাইকারি দাম ১১৪-১১৭ টাকা। AI আপনার পক্ষে সাপ্লায়ারকে বার্তা পাঠিয়ে ভালো দামে সম্মত করিয়েছে।',
      impact: {
        label: 'আপনার সাশ্রয়',
        metrics: [
          { icon: '✅', text: '২৫০ টাকা কম খরচ' },
          { icon: '📊', text: 'প্রফিট মার্জিন ৪% বেড়েছে' }
        ]
      },
      confidence: 95,
      aiAction: 'বার্তা পাঠানো হয়েছে এবং নিশ্চিত করা হয়েছে'
    },
    {
      id: 3,
      type: 'inventory',
      status: 'processing',
      timestamp: 'এখন সক্রিয়',
      title: 'স্টক পুনর্বিন্যাস চলছে',
      product: 'আটা (১ কেজি)',
      before: {
        label: 'বর্তমান স্টক',
        value: '২৮ কেজি',
        context: 'দৈনিক বিক্রয়: ১২ কেজি'
      },
      after: {
        label: 'প্রয়োজনীয় স্টক',
        value: '৭৫ কেজি',
        context: 'পরবর্তী ১৫ দিনের জন্য'
      },
      reasoning: 'আগামী সপ্তাহে ঈদের আগে আটার চাহিদা ৩০% বাড়বে বলে পূর্বাভাস। AI স্বয়ংক্রিয়ভাবে সাপ্লায়ারকে অর্ডার পাঠাচ্ছে।',
      impact: {
        label: 'AI যা করছে',
        metrics: [
          { icon: '🤖', text: 'সাপ্লায়ারকে মেসেজ পাঠানো হচ্ছে' },
          { icon: '⏱️', text: 'স্টক ফুরানোর ঝুঁকি এড়ানো হবে' }
        ]
      },
      confidence: 92,
      aiAction: 'অর্ডার প্রস্তুত করা হচ্ছে...'
    },
    {
      id: 4,
      type: 'timing',
      status: 'recommended',
      timestamp: 'আজ সকাল',
      title: 'ব্যবসায়িক সময় পরিবর্তন',
      product: 'দোকান খোলা-বন্ধের সময়',
      before: {
        label: 'বর্তমান সময়',
        value: 'সকাল ৮:০০ - রাত ৯:০০',
        context: '১৩ ঘণ্টা খোলা'
      },
      after: {
        label: 'সুপারিশকৃত সময়',
        value: 'সকাল ৭:৩০ - রাত ৯:৩০',
        context: '১৪ ঘণ্টা খোলা'
      },
      reasoning: 'গত মাসের তথ্য বলছে ৭:৩০-৮:৩০ এবং ৯:০০-৯:৩০ তে গড়ে ১৮ জন অতিরিক্ত ক্রেতা আসেন।',
      impact: {
        label: 'অতিরিক্ত আয়',
        metrics: [
          { icon: '🕐', text: 'প্রতিদিন ১ ঘণ্টা বেশি' },
          { icon: '💵', text: 'মাসে ১২,০০০ টাকা বেশি বিক্রয়' }
        ]
      },
      confidence: 76
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#06A77D';
      case 'processing': return '#4895EF';
      case 'recommended': return '#F7B801';
      default: return '#868e96';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'সম্পন্ন';
      case 'processing': return 'প্রক্রিয়াধীন';
      case 'recommended': return 'সুপারিশ';
      default: return 'পর্যালোচনা';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'pricing': return '💰';
      case 'negotiation': return '🤝';
      case 'inventory': return '📦';
      case 'timing': return '⏰';
      default: return '🤖';
    }
  };

  return (
    <div className="ai-decision-center">
      {/* AI Header */}
      <div className="ai-header">
        <div className="ai-brain-icon">
          <div className={`brain-pulse ${thinkingAnimation ? 'thinking' : ''}`}>🧠</div>
        </div>
        <div className="ai-header-text">
          <h2 className="ai-title">AI ব্যবসা ম্যানেজার</h2>
          <p className="ai-subtitle">আপনার ব্যবসার জন্য স্বয়ংক্রিয় সিদ্ধান্ত নিচ্ছে</p>
        </div>
        <div className="ai-status-indicator">
          <span className="status-dot active"></span>
          <span className="status-text">সক্রিয়</span>
        </div>
      </div>

      {/* AI Decisions Timeline */}
      <div className="decisions-timeline">
        {decisions.map((decision, index) => (
          <div 
            key={decision.id}
            className={`decision-block ${decision.status} ${activeDecision === decision.id ? 'expanded' : ''}`}
            onClick={() => setActiveDecision(activeDecision === decision.id ? null : decision.id)}
          >
            {/* Timeline Connector */}
            {index < decisions.length - 1 && (
              <div className="timeline-connector"></div>
            )}

            {/* Decision Node */}
            <div className="decision-node" style={{ borderColor: getStatusColor(decision.status) }}>
              <span className="node-icon">{getTypeIcon(decision.type)}</span>
            </div>

            {/* Decision Content */}
            <div className="decision-content">
              {/* Header */}
              <div className="decision-header">
                <div className="decision-meta">
                  <span className="decision-timestamp">{decision.timestamp}</span>
                  <span 
                    className="decision-status-badge"
                    style={{ backgroundColor: getStatusColor(decision.status) }}
                  >
                    {getStatusText(decision.status)}
                  </span>
                </div>
                <h3 className="decision-title">{decision.title}</h3>
                <p className="decision-product">{decision.product}</p>
              </div>

              {/* Before → After Comparison */}
              <div className="comparison-flow">
                <div className="comparison-box before">
                  <span className="comparison-label">{decision.before.label}</span>
                  <span className="comparison-value">{decision.before.value}</span>
                  <span className="comparison-context">{decision.before.context}</span>
                </div>

                <div className="flow-arrow">
                  <div className="arrow-line"></div>
                  <div className="arrow-head">→</div>
                  <div className="arrow-label">AI সুপারিশ</div>
                </div>

                <div className="comparison-box after">
                  <span className="comparison-label">{decision.after.label}</span>
                  <span className="comparison-value highlighted">{decision.after.value}</span>
                  <span className="comparison-context">{decision.after.context}</span>
                </div>
              </div>

              {/* AI Reasoning */}
              <div className="ai-reasoning">
                <div className="reasoning-icon">💡</div>
                <p className="reasoning-text">{decision.reasoning}</p>
              </div>

              {/* Impact Metrics */}
              <div className="impact-section">
                <span className="impact-label">{decision.impact.label}</span>
                <div className="impact-metrics">
                  {decision.impact.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-item">
                      <span className="metric-icon">{metric.icon}</span>
                      <span className="metric-text">{metric.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Action Status */}
              {decision.aiAction && (
                <div className="ai-action-status">
                  <div className="action-indicator">
                    {decision.status === 'processing' && (
                      <div className="processing-spinner"></div>
                    )}
                    {decision.status === 'completed' && (
                      <div className="completed-check">✓</div>
                    )}
                  </div>
                  <span className="action-text">{decision.aiAction}</span>
                </div>
              )}

              {/* Confidence Score */}
              <div className="confidence-bar">
                <div className="confidence-label-row">
                  <span className="confidence-label">AI নিশ্চিততা</span>
                  <span className="confidence-value">{decision.confidence}%</span>
                </div>
                <div className="confidence-progress">
                  <div 
                    className="confidence-fill"
                    style={{ 
                      width: `${decision.confidence}%`,
                      backgroundColor: decision.confidence > 85 ? '#06A77D' : decision.confidence > 70 ? '#4895EF' : '#F7B801'
                    }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              {decision.status === 'recommended' && (
                <div className="decision-actions">
                  <button className="action-button approve">
                    <span className="button-icon">✓</span>
                    <span className="button-text">অনুমোদন করুন</span>
                  </button>
                  <button className="action-button details">
                    <span className="button-icon">📊</span>
                    <span className="button-text">বিস্তারিত দেখুন</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* AI Activity Summary */}
      <div className="ai-activity-footer">
        <div className="activity-stat">
          <span className="stat-number">২৪</span>
          <span className="stat-label">আজকের সিদ্ধান্ত</span>
        </div>
        <div className="activity-divider"></div>
        <div className="activity-stat">
          <span className="stat-number">৮৯%</span>
          <span className="stat-label">সফলতার হার</span>
        </div>
        <div className="activity-divider"></div>
        <div className="activity-stat">
          <span className="stat-number">১২,৫০০</span>
          <span className="stat-label">টাকা সাশ্রয়</span>
        </div>
      </div>
    </div>
  );
};

export default AIDecisionCenter;
