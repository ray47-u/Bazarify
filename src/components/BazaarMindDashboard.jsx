import React, { useState } from 'react';
import './BazaarMindDashboard.css';

const BazaarMindDashboard = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  // Sample data - in real app, this would come from API
  const businessData = {
    shopName: "রহিম ট্রেডার্স",
    ownerName: "আবদুর রহিম",
    todayDate: "২৫ ডিসেম্বর, ২০২৫",
    businessHealth: {
      status: "ভালো চলছে",
      score: 78,
      trend: "up",
      message: "গতকালের চেয়ে ১২% বেশি বিক্রয় হয়েছে"
    },
    todayPulse: {
      sales: { amount: "৪৮,৫০০", target: "৫০,০০০", percentage: 97 },
      customers: { count: 47, new: 8, returning: 39 },
      inventory: { low: 3, critical: 1 },
      cashflow: { incoming: "৫২,০০০", outgoing: "২১,৫০০", net: "৩০,৫০০" }
    },
    aiDecisions: [
      {
        id: 1,
        type: "pricing",
        title: "দাম কমানোর পরামর্শ",
        product: "চিনি (১ কেজি)",
        currentPrice: "৮৫ টাকা",
        suggestedPrice: "৮২ টাকা",
        reason: "প্রতিযোগীরা ৮০-৮৩ টাকায় বিক্রয় করছে",
        impact: "দৈনিক ২০ কেজি বেশি বিক্রয় হতে পারে",
        confidence: 89,
        status: "pending"
      },
      {
        id: 2,
        type: "inventory",
        title: "স্টক বাড়ানোর সময়",
        product: "ডাল (মসুর)",
        currentStock: "১৫ কেজি",
        suggestedOrder: "৫০ কেজি",
        reason: "আগামী সপ্তাহে রমজান শুরু, চাহিদা বাড়বে",
        impact: "স্টক শেষ হওয়ার ঝুঁকি এড়ানো যাবে",
        confidence: 94,
        status: "approved"
      },
      {
        id: 3,
        type: "timing",
        title: "দোকান খোলার সময় পরিবর্তন",
        current: "সকাল ৮টা",
        suggested: "সকাল ৭:৩০",
        reason: "৭:৩০-৮:৩০ তে গড়ে ১২ জন কাস্টমার আসছে",
        impact: "মাসে ৮,০০০ টাকা বেশি আয়",
        confidence: 76,
        status: "pending"
      }
    ],
    risksAndOpportunities: [
      {
        type: "risk",
        severity: "high",
        title: "চালের স্টক শেষ হতে যাচ্ছে",
        description: "আজকের বিক্রয়ের হার দেখে মনে হচ্ছে ২ দিনে স্টক শেষ",
        action: "আজই ৫০ কেজি অর্ডার করুন",
        urgent: true
      },
      {
        type: "opportunity",
        severity: "medium",
        title: "শীতকালীন পণ্যের চাহিদা",
        description: "গুড়, খেজুর রস, পিঠার উপকরণ - এই মাসে ৩৫% বেশি বিক্রয়",
        action: "নতুন সাপ্লায়ার যোগ করুন",
        urgent: false
      },
      {
        type: "alert",
        severity: "low",
        title: "পেমেন্ট বাকি আছে",
        description: "করিম মিয়া - ৩,৫০০ টাকা (১৫ দিন)",
        action: "আজ রিমাইন্ডার পাঠান",
        urgent: false
      },
      {
        type: "opportunity",
        severity: "high",
        title: "মোবাইল ব্যাংকিং অফার",
        description: "bKash দিয়ে পেমেন্ট নিলে ০.৫% ক্যাশব্যাক",
        action: "QR কোড চালু করুন",
        urgent: false
      }
    ]
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffa94d';
      case 'low': return '#51cf66';
      default: return '#868e96';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'risk': return '⚠️';
      case 'opportunity': return '💡';
      case 'alert': return '🔔';
      default: return '📌';
    }
  };

  return (
    <div className="bazaarmind-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1 className="brand-title">BazaarMind</h1>
          <p className="tagline">আপনার ব্যবসার সহযোগী</p>
        </div>
        <div className="header-center">
          <div className="shop-info">
            <h2 className="shop-name">{businessData.shopName}</h2>
            <p className="owner-greeting">আসসালামু আলাইকুম, {businessData.ownerName}</p>
          </div>
        </div>
        <div className="header-right">
          <div className="date-badge">{businessData.todayDate}</div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="dashboard-grid">
        
        {/* LEFT COLUMN - Business Pulse */}
        <section className="pulse-column">
          <div className="column-header">
            <h2>আজকের ব্যবসা</h2>
            <div className="pulse-indicator">
              <span className={`pulse-dot ${businessData.businessHealth.trend}`}></span>
              <span className="pulse-status">{businessData.businessHealth.status}</span>
            </div>
          </div>

          {/* Health Score */}
          <div className="health-card storytelling-card">
            <div className="health-score-ring">
              <svg viewBox="0 0 120 120" className="score-svg">
                <circle cx="60" cy="60" r="54" className="score-bg"></circle>
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  className="score-fill"
                  style={{
                    strokeDasharray: `${businessData.businessHealth.score * 3.39} 339`,
                  }}
                ></circle>
              </svg>
              <div className="score-text">
                <div className="score-number">{businessData.businessHealth.score}</div>
                <div className="score-label">স্বাস্থ্য স্কোর</div>
              </div>
            </div>
            <p className="health-message">{businessData.businessHealth.message}</p>
          </div>

          {/* Sales Today */}
          <div className="pulse-card sales-card">
            <div className="card-icon">💰</div>
            <div className="card-content">
              <h3>আজকের বিক্রয়</h3>
              <div className="sales-amount">{businessData.todayPulse.sales.amount} টাকা</div>
              <div className="sales-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${businessData.todayPulse.sales.percentage}%` }}
                  ></div>
                </div>
                <span className="progress-label">
                  লক্ষ্য: {businessData.todayPulse.sales.target} টাকা ({businessData.todayPulse.sales.percentage}%)
                </span>
              </div>
            </div>
          </div>

          {/* Customers */}
          <div className="pulse-card customers-card">
            <div className="card-icon">👥</div>
            <div className="card-content">
              <h3>আজকের ক্রেতা</h3>
              <div className="customers-stats">
                <div className="stat-item">
                  <span className="stat-value">{businessData.todayPulse.customers.count}</span>
                  <span className="stat-label">মোট</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value new">{businessData.todayPulse.customers.new}</span>
                  <span className="stat-label">নতুন</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value returning">{businessData.todayPulse.customers.returning}</span>
                  <span className="stat-label">পুরোনো</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cash Flow */}
          <div className="pulse-card cashflow-card">
            <div className="card-icon">💵</div>
            <div className="card-content">
              <h3>আজকের টাকার হিসাব</h3>
              <div className="cashflow-details">
                <div className="flow-item incoming">
                  <span className="flow-label">আসছে</span>
                  <span className="flow-amount">+{businessData.todayPulse.cashflow.incoming}</span>
                </div>
                <div className="flow-item outgoing">
                  <span className="flow-label">যাচ্ছে</span>
                  <span className="flow-amount">-{businessData.todayPulse.cashflow.outgoing}</span>
                </div>
                <div className="flow-divider"></div>
                <div className="flow-item net">
                  <span className="flow-label">হাতে থাকবে</span>
                  <span className="flow-amount net-positive">{businessData.todayPulse.cashflow.net}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Alert */}
          <div className="pulse-card inventory-card">
            <div className="card-icon">📦</div>
            <div className="card-content">
              <h3>স্টক অবস্থা</h3>
              <div className="inventory-status">
                {businessData.todayPulse.inventory.critical > 0 && (
                  <div className="inventory-alert critical">
                    <span className="alert-count">{businessData.todayPulse.inventory.critical}</span>
                    <span className="alert-text">পণ্য একদম শেষ</span>
                  </div>
                )}
                <div className="inventory-alert low">
                  <span className="alert-count">{businessData.todayPulse.inventory.low}</span>
                  <span className="alert-text">পণ্য কমে গেছে</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CENTER COLUMN - AI Decisions */}
        <section className="decisions-column">
          <div className="column-header">
            <h2>AI সুপারিশ ও সিদ্ধান্ত</h2>
            <p className="column-subtitle">আপনার ব্যবসা বাড়ানোর জন্য স্মার্ট পরামর্শ</p>
          </div>

          <div className="decisions-list">
            {businessData.aiDecisions.map((decision) => (
              <div 
                key={decision.id} 
                className={`decision-card ${decision.status}`}
                onClick={() => setSelectedInsight(decision)}
              >
                <div className="decision-header">
                  <div className="decision-type-badge">
                    {decision.type === 'pricing' && '💰'}
                    {decision.type === 'inventory' && '📦'}
                    {decision.type === 'timing' && '⏰'}
                  </div>
                  <div className="decision-title-section">
                    <h3>{decision.title}</h3>
                    <p className="decision-product">{decision.product}</p>
                  </div>
                  <div className="confidence-badge">
                    <span className="confidence-value">{decision.confidence}%</span>
                    <span className="confidence-label">নিশ্চিত</span>
                  </div>
                </div>

                <div className="decision-body">
                  <div className="decision-comparison">
                    <div className="comparison-item current">
                      <span className="comparison-label">এখন</span>
                      <span className="comparison-value">
                        {decision.currentPrice || decision.currentStock || decision.current}
                      </span>
                    </div>
                    <div className="comparison-arrow">→</div>
                    <div className="comparison-item suggested">
                      <span className="comparison-label">প্রস্তাব</span>
                      <span className="comparison-value">
                        {decision.suggestedPrice || decision.suggestedOrder || decision.suggested}
                      </span>
                    </div>
                  </div>

                  <div className="decision-reasoning">
                    <p className="reason-text">
                      <strong>কেন?</strong> {decision.reason}
                    </p>
                    <p className="impact-text">
                      <strong>ফলাফল:</strong> {decision.impact}
                    </p>
                  </div>
                </div>

                <div className="decision-actions">
                  {decision.status === 'pending' && (
                    <>
                      <button className="decision-btn approve">
                        ✓ গ্রহণ করুন
                      </button>
                      <button className="decision-btn reject">
                        ✕ বাতিল
                      </button>
                    </>
                  )}
                  {decision.status === 'approved' && (
                    <div className="decision-status-badge approved">
                      ✓ গ্রহণ করা হয়েছে
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* AI Companion */}
          <div className="ai-companion-card">
            <div className="companion-avatar">🤖</div>
            <div className="companion-message">
              <p className="companion-text">
                "আজ আপনার ব্যবসা ভালো চলছে! তবে চালের স্টক দ্রুত শেষ হচ্ছে। 
                আমি সাপ্লায়ারকে মেসেজ পাঠাতে পারি?"
              </p>
              <button className="companion-action-btn">হ্যাঁ, পাঠান</button>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN - Risks & Opportunities */}
        <section className="risks-column">
          <div className="column-header">
            <h2>সতর্কতা ও সুযোগ</h2>
            <p className="column-subtitle">যা এখনই জানা জরুরি</p>
          </div>

          <div className="risks-list">
            {businessData.risksAndOpportunities.map((item, index) => (
              <div 
                key={index} 
                className={`risk-card ${item.type} ${item.urgent ? 'urgent' : ''}`}
                style={{ borderLeftColor: getSeverityColor(item.severity) }}
              >
                <div className="risk-header">
                  <span className="risk-icon">{getTypeIcon(item.type)}</span>
                  <div className="risk-title-section">
                    <h3>{item.title}</h3>
                    {item.urgent && <span className="urgent-badge">জরুরি</span>}
                  </div>
                </div>
                
                <p className="risk-description">{item.description}</p>
                
                <div className="risk-action">
                  <button className="action-btn">
                    {item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-card">
            <h3>দ্রুত কাজ</h3>
            <div className="quick-actions-grid">
              <button className="quick-action-btn">
                <span className="action-icon">📊</span>
                <span className="action-label">রিপোর্ট দেখুন</span>
              </button>
              <button className="quick-action-btn">
                <span className="action-icon">💬</span>
                <span className="action-label">AI সাথে কথা বলুন</span>
              </button>
              <button className="quick-action-btn">
                <span className="action-icon">➕</span>
                <span className="action-label">নতুন পণ্য</span>
              </button>
              <button className="quick-action-btn">
                <span className="action-icon">⚙️</span>
                <span className="action-label">সেটিংস</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BazaarMindDashboard;
