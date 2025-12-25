import React from 'react';
import './Insights.css';

const Insights = () => {
  const insights = [
    {
      category: 'বিক্রয় বৃদ্ধি',
      icon: '📈',
      message: 'গত সপ্তাহে বৃহস্পতিবার সবচেয়ে বেশি বিক্রয় হয়েছে। বৃহস্পতিবারে বিশেষ অফার দিলে বিক্রয় ২৫% বাড়তে পারে।',
      impact: 'উচ্চ',
      actionable: true,
      action: 'বৃহস্পতিবারের অফার তৈরি করুন'
    },
    {
      category: 'মুনাফা সুরক্ষা',
      icon: '💰',
      message: 'ডালের দাম বাড়ছে। এখন মজুদ করলে পরে ভালো দামে বিক্রয় করতে পারবেন। ৩০০০ টাকা বিনিয়োগে ৫০০০ টাকা লাভ সম্ভব।',
      impact: 'মাঝারি',
      actionable: true,
      action: 'সরবরাহকারীকে কল করুন'
    },
    {
      category: 'খরচ সাশ্রয়',
      icon: '💡',
      message: 'আপনি যে ট্রাক থেকে পণ্য আনেন, সেখানে একসাথে বেশি নিলে পরিবহন খরচ ৪০% কমবে। পাশের দোকানের সাথে মিলে অর্ডার দিন।',
      impact: 'মাঝারি',
      actionable: false,
      action: ''
    }
  ];

  const performanceMetrics = [
    {
      metric: 'আজকের বিক্রয়',
      value: '২৭,০০০ টাকা',
      comparison: 'গতকালের চেয়ে ১২% বেশি',
      trend: 'up',
      emoji: '🎯'
    },
    {
      metric: 'এই সপ্তাহে মুনাফা',
      value: '৪৫,০০০ টাকা',
      comparison: 'গত সপ্তাহের চেয়ে ৮% বেশি',
      trend: 'up',
      emoji: '💵'
    },
    {
      metric: 'বাকি আদায়',
      value: '৮৫%',
      comparison: 'গত মাসের চেয়ে ৫% বেশি',
      trend: 'up',
      emoji: '🤝'
    }
  ];

  const getImpactColor = (impact) => {
    if (impact === 'উচ্চ') return 'high';
    if (impact === 'মাঝারি') return 'medium';
    return 'low';
  };

  return (
    <div className="insights-page">
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">🧠 মুন্সিজির পরামর্শ</h1>
          <p className="page-subtitle">আপনার ব্যবসা সম্পর্কে সহজ ভাষায় বুঝুন</p>
        </div>
      </header>

      {/* Munshiji Greeting */}
      <section className="munshiji-greeting">
        <div className="greeting-card">
          <div className="munshiji-avatar">
            <div className="avatar-image">👨‍💼</div>
            <div className="avatar-badge">AI মুন্সিজি</div>
          </div>
          <div className="greeting-content">
            <h2 className="greeting-title">নমস্কার! আজকের হিসাব দেখি...</h2>
            <p className="greeting-message">
              আপনার ব্যবসা ভালো চলছে। আজ আমি তিনটি গুরুত্বপূর্ণ বিষয় লক্ষ করেছি যা জানা দরকার।
              এগুলো সহজ ভাষায় বুঝিয়ে দিচ্ছি।
            </p>
          </div>
        </div>
      </section>

      {/* Performance Overview */}
      <section className="performance-section">
        <h2 className="section-title">📊 আজকের পারফরম্যান্স</h2>
        <div className="performance-grid">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="performance-card">
              <div className="metric-icon">{metric.emoji}</div>
              <div className="metric-content">
                <span className="metric-label">{metric.metric}</span>
                <span className="metric-value">{metric.value}</span>
                <span className={`metric-comparison ${metric.trend}`}>
                  {metric.trend === 'up' ? '📈' : '📉'} {metric.comparison}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Insights */}
      <section className="insights-section">
        <h2 className="section-title">💡 মুন্সিজির পরামর্শ</h2>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-header">
                <div className="category-badge">
                  <span className="category-icon">{insight.icon}</span>
                  <span className="category-name">{insight.category}</span>
                </div>
                <div className={`impact-badge ${getImpactColor(insight.impact)}`}>
                  প্রভাব: {insight.impact}
                </div>
              </div>

              <div className="insight-body">
                <p className="insight-message">{insight.message}</p>
              </div>

              {insight.actionable && (
                <div className="insight-action">
                  <button className="action-btn">
                    <span className="btn-icon">⚡</span>
                    <span className="btn-text">{insight.action}</span>
                  </button>
                </div>
              )}

              <div className="insight-footer">
                <span className="munshiji-signature">- আপনার AI মুন্সিজি</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explanation Section */}
      <section className="explanation-section">
        <div className="explanation-card">
          <h2 className="explanation-title">🤔 AI কীভাবে এই পরামর্শ দেয়?</h2>
          <div className="explanation-steps">
            <div className="step-card">
              <div className="step-number">১</div>
              <div className="step-content">
                <h3 className="step-title">ডেটা সংগ্রহ</h3>
                <p className="step-text">আপনার বিক্রয়, মজুদ, পেমেন্ট - সব তথ্য বিশ্লেষণ করে</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">২</div>
              <div className="step-content">
                <h3 className="step-title">প্যাটার্ন খুঁজে</h3>
                <p className="step-text">কোন দিন বেশি বিক্রয়, কোন পণ্য বেশি চলে - এসব দেখে</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">৩</div>
              <div className="step-content">
                <h3 className="step-title">সহজ পরামর্শ</h3>
                <p className="step-text">জটিল ডেটা সহজ ভাষায় বুঝিয়ে কী করতে হবে বলে দেয়</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="tips-card">
          <h2 className="tips-title">📚 ব্যবসা বৃদ্ধির টিপস</h2>
          <div className="tips-list">
            <div className="tip-item">
              <div className="tip-icon">✅</div>
              <p className="tip-text">প্রতিদিন সকালে একবার Insights চেক করুন</p>
            </div>
            <div className="tip-item">
              <div className="tip-icon">✅</div>
              <p className="tip-text">AI যে পরামর্শ দেয় তা ট্রাই করে দেখুন</p>
            </div>
            <div className="tip-item">
              <div className="tip-icon">✅</div>
              <p className="tip-text">ক্রেতাদের সাথে ভালো সম্পর্ক রাখুন</p>
            </div>
            <div className="tip-item">
              <div className="tip-icon">✅</div>
              <p className="tip-text">নিয়মিত হিসাব রাখুন - AI আরও ভালো পরামর্শ দেবে</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
