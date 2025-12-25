import React from 'react';
import BusinessPulsePanel from '../components/BusinessPulsePanel';
import './Dashboard.css';

const Dashboard = () => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'সুপ্রভাত' : currentHour < 17 ? 'শুভ অপরাহ্ন' : 'শুভ সন্ধ্যা';

  return (
    <div className="dashboard-page">
      {/* Morning Greeting Header */}
      <header className="dashboard-greeting">
        <div className="greeting-content">
          <h1 className="greeting-title">{greeting}, রহিম সাহেব! 👋</h1>
          <p className="greeting-subtitle">আজকের ব্যবসার সারসংক্ষেপ দেখুন</p>
        </div>
        <div className="current-date">
          <span className="date-icon">📅</span>
          <span className="date-text">২৫ ডিসেম্বর, ২০২৫</span>
        </div>
      </header>

      {/* Today's Profit Summary */}
      <section className="profit-summary-section">
        <div className="profit-card main-profit">
          <div className="profit-icon">💰</div>
          <div className="profit-details">
            <span className="profit-label">আজকের মোট লাভ</span>
            <span className="profit-amount">২৭,০০০ টাকা</span>
            <span className="profit-change positive">
              <span className="change-icon">↗</span>
              গতকালের থেকে +১২.৫% বেশি
            </span>
          </div>
        </div>

        <div className="profit-stats-grid">
          <div className="profit-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <span className="stat-label">বিক্রয়</span>
              <span className="stat-value">৮৫,০০০ টাকা</span>
            </div>
          </div>

          <div className="profit-card">
            <div className="stat-icon">💸</div>
            <div className="stat-content">
              <span className="stat-label">খরচ</span>
              <span className="stat-value">৫৮,০০০ টাকা</span>
            </div>
          </div>

          <div className="profit-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <span className="stat-label">ক্রেতা</span>
              <span className="stat-value">৪৭ জন</span>
            </div>
          </div>

          <div className="profit-card">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <span className="stat-label">বিক্রীত পণ্য</span>
              <span className="stat-value">১২৩ টি</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Status Message */}
      <section className="ai-status-section">
        <div className="ai-status-card">
          <div className="ai-status-header">
            <div className="ai-icon">🤖</div>
            <div className="ai-title-group">
              <h3 className="ai-status-title">AI স্ট্যাটাস</h3>
              <span className="ai-status-badge active">সক্রিয়</span>
            </div>
          </div>
          <p className="ai-status-message">
            আজ সকাল থেকে এখন পর্যন্ত আমি <strong>৬টি দাম সমন্বয়</strong> করেছি, 
            <strong>৩টি মজুদ সতর্কতা</strong> পাঠিয়েছি, এবং <strong>২টি নতুন সুযোগ</strong> খুঁজে পেয়েছি। 
            আপনার ব্যবসা ভালোভাবে চলছে! 📊
          </p>
          <div className="ai-quick-actions">
            <button className="quick-action-btn">
              <span className="btn-icon">🎯</span>
              <span className="btn-text">AI সুপারিশ দেখুন</span>
            </button>
            <button className="quick-action-btn secondary">
              <span className="btn-icon">📊</span>
              <span className="btn-text">বিস্তারিত রিপোর্ট</span>
            </button>
          </div>
        </div>
      </section>

      {/* Business Pulse */}
      <section className="business-pulse-section">
        <div className="section-header">
          <h2 className="section-title">💓 আজকের ব্যবসা বিস্তারিত</h2>
        </div>
        <BusinessPulsePanel />
      </section>
    </div>
  );
};

export default Dashboard;
