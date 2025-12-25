import React, { useState } from 'react';
import './MunshijiPanel.css';

const MunshijiPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Business data for today
  const businessData = {
    ownerName: "রহিম ভাই",
    todaySales: 48500,
    todayExpenses: 21500,
    todayProfit: 27000,
    yesterday: {
      profit: 24000
    },
    insights: {
      bestSellingItem: "চাল (মিনিকেট)",
      slowMovingItem: "সয়াবিন তেল (৫ লিটার)",
      cashInHand: 127000,
      pendingPayments: 8500
    }
  };

  const profitDifference = businessData.todayProfit - businessData.yesterday.profit;
  const profitPercentage = ((profitDifference / businessData.yesterday.profit) * 100).toFixed(1);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "সুপ্রভাত";
    if (hour < 17) return "শুভ অপরাহ্ন";
    if (hour < 21) return "শুভ সন্ধ্যা";
    return "শুভ রাত্রি";
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('bn-BD');
  };

  return (
    <div className="munshiji-panel">
      {/* Munshiji Avatar & Greeting */}
      <div className="munshiji-header">
        <div className="munshiji-avatar">
          <div className="avatar-circle">
            <span className="avatar-icon">👨‍💼</span>
          </div>
          <div className="avatar-status">
            <span className="status-dot"></span>
          </div>
        </div>
        <div className="munshiji-greeting">
          <h3 className="greeting-text">
            {getGreeting()}, {businessData.ownerName}
          </h3>
          <p className="greeting-subtitle">আমি আপনার মুনশিজি, আজকের হিসাব দেখছি</p>
        </div>
      </div>

      {/* Today's Profit Story */}
      <div className="profit-story">
        <div className="story-intro">
          <span className="story-icon">📖</span>
          <h4 className="story-title">আজকের লাভের গল্প</h4>
        </div>
        
        <div className="story-content">
          <p className="story-paragraph">
            আজ আপনার দোকানে{" "}
            <span className="highlight-amount sales">
              {formatCurrency(businessData.todaySales)} টাকার
            </span>{" "}
            পণ্য বিক্রয় হয়েছে।
          </p>
          
          <p className="story-paragraph">
            এর মধ্যে খরচ বাদ দিলে হাতে থাকছে{" "}
            <span className="highlight-amount profit">
              {formatCurrency(businessData.todayProfit)} টাকা
            </span>
            ।
          </p>

          <div className="profit-comparison">
            {profitDifference > 0 ? (
              <div className="comparison-positive">
                <span className="comparison-icon">✨</span>
                <p className="comparison-text">
                  আলহামদুলিল্লাহ! গতকালের থেকে{" "}
                  <strong>{formatCurrency(profitDifference)} টাকা</strong>{" "}
                  ({profitPercentage}%) বেশি লাভ হয়েছে।
                </p>
              </div>
            ) : profitDifference < 0 ? (
              <div className="comparison-negative">
                <span className="comparison-icon">📉</span>
                <p className="comparison-text">
                  গতকালের থেকে{" "}
                  <strong>{formatCurrency(Math.abs(profitDifference))} টাকা</strong>{" "}
                  কম লাভ হয়েছে। চিন্তার কিছু নেই, আগামীকাল ভালো হবে ইনশাআল্লাহ।
                </p>
              </div>
            ) : (
              <div className="comparison-neutral">
                <span className="comparison-icon">➡️</span>
                <p className="comparison-text">
                  গতকালের মতোই লাভ হয়েছে। স্থিতিশীল ব্যবসা।
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Simple Business Insight */}
      <div className="business-insight">
        <div className="insight-header">
          <span className="insight-icon">💡</span>
          <h4 className="insight-title">আজকের পর্যবেক্ষণ</h4>
        </div>
        <p className="insight-text">
          সবচেয়ে বেশি বিক্রয় হয়েছে{" "}
          <strong>{businessData.insights.bestSellingItem}</strong>।{" "}
          আর <strong>{businessData.insights.slowMovingItem}</strong> আজ কম বিক্রয় হয়েছে।
        </p>
      </div>

      {/* Munshiji's Suggestion */}
      <div className="munshiji-suggestion">
        <div className="suggestion-header">
          <div className="suggestion-badge">
            <span className="badge-icon">🎯</span>
            <span className="badge-text">আজকের পরামর্শ</span>
          </div>
        </div>
        
        <div className="suggestion-content">
          <p className="suggestion-message">
            আপনার হাতে এখন{" "}
            <strong>{formatCurrency(businessData.insights.cashInHand)} টাকা</strong> আছে।{" "}
            {businessData.insights.pendingPayments > 0 && (
              <>
                <strong>{formatCurrency(businessData.insights.pendingPayments)} টাকা</strong>{" "}
                বাকি আছে কাস্টমারদের কাছে।
              </>
            )}
          </p>
          
          <div className="suggestion-action">
            <div className="action-card">
              <span className="action-number">১</span>
              <div className="action-text">
                <h5 className="action-title">চালের স্টক দ্রুত কমে যাচ্ছে</h5>
                <p className="action-description">
                  আজই সাপ্লায়ারকে ফোন করে ১০০ কেজি অর্ডার দিন। 
                  নইলে আগামীকাল বিক্রয় করতে পারবেন না।
                </p>
              </div>
            </div>
          </div>

          <div className="suggestion-footer">
            <button className="action-button primary">
              <span className="button-icon">✓</span>
              বুঝেছি, ব্যবস্থা করছি
            </button>
            <button className="action-button secondary">
              পরে দেখব
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      <div className="munshiji-expand">
        <button 
          className="expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="expand-text">
            {isExpanded ? 'কম দেখুন' : 'আরও বিস্তারিত দেখুন'}
          </span>
          <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
        </button>

        {isExpanded && (
          <div className="expanded-details">
            <div className="detail-section">
              <h5 className="detail-title">আজকের হিসাব:</h5>
              <div className="detail-rows">
                <div className="detail-row">
                  <span className="detail-label">মোট বিক্রয়</span>
                  <span className="detail-value">{formatCurrency(businessData.todaySales)} টাকা</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">মোট খরচ</span>
                  <span className="detail-value expense">{formatCurrency(businessData.todayExpenses)} টাকা</span>
                </div>
                <div className="detail-row total">
                  <span className="detail-label">নিট লাভ</span>
                  <span className="detail-value profit">{formatCurrency(businessData.todayProfit)} টাকা</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Munshiji Footer */}
      <div className="munshiji-footer">
        <p className="footer-message">
          কোনো প্রশ্ন থাকলে জিজ্ঞেস করুন, আমি সবসময় আছি 
          <span className="footer-icon">🤝</span>
        </p>
      </div>
    </div>
  );
};

export default MunshijiPanel;
