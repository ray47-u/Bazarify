import React, { useState } from 'react';
import './MainDashboard.css';
import BusinessPulsePanel from './BusinessPulsePanel';
import AIDecisionCenter from './AIDecisionCenter';
import OpportunityRadar from './OpportunityRadar';
import MunshijiPanel from './MunshijiPanel';
import TrustDNAVisual from './TrustDNAVisual';
import ProFeaturesShowcase from './ProFeaturesShowcase';
import { ExplainabilityTrigger } from './ExplainabilityDrawer';

const MainDashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="main-dashboard">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="header-branding">
          <div className="brand-logo">
            <span className="logo-icon">🧠</span>
            <h1 className="brand-name">BazaarMind</h1>
          </div>
          <p className="brand-tagline">আপনার ব্যবসার বুদ্ধিমান সহযোগী</p>
        </div>

        <nav className="dashboard-nav">
          <button 
            className={`nav-item ${activeView === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveView('overview')}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-label">সারসংক্ষেপ</span>
          </button>
          <button 
            className={`nav-item ${activeView === 'trust' ? 'active' : ''}`}
            onClick={() => setActiveView('trust')}
          >
            <span className="nav-icon">🤝</span>
            <span className="nav-label">বিশ্বস্ততা</span>
          </button>
          <button 
            className={`nav-item ${activeView === 'roadmap' ? 'active' : ''}`}
            onClick={() => setActiveView('roadmap')}
          >
            <span className="nav-icon">🚀</span>
            <span className="nav-label">নতুন ফিচার</span>
            <span className="new-badge">নতুন</span>
          </button>
        </nav>

        <div className="header-actions">
          <div className="date-display">
            <span className="date-icon">📅</span>
            <span className="date-text">২৫ ডিসেম্বর, ২০২৫</span>
          </div>
          <button className="notification-btn">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          <div className="user-profile">
            <span className="user-avatar">👤</span>
            <span className="user-name">রহিম সাহেব</span>
          </div>
        </div>
      </header>

      {/* Munshiji Assistant - Always visible at top */}
      <section className="munshiji-section">
        <MunshijiPanel />
      </section>

      {/* Main Content - Three Column Layout */}
      {activeView === 'overview' && (
        <main className="command-room">
          {/* Left Column - Business Pulse (30%) */}
          <div className="command-column pulse-column">
            <div className="column-header">
              <div className="column-title">
                <span className="column-icon">💓</span>
                <h2>আজকের ব্যবসা</h2>
              </div>
              <span className="column-badge">লাইভ</span>
            </div>
            <BusinessPulsePanel />
          </div>

          {/* Center Column - AI Decision Center (40%) */}
          <div className="command-column decision-column">
            <div className="column-header">
              <div className="column-title">
                <span className="column-icon">🤖</span>
                <h2>AI সিদ্ধান্ত কেন্দ্র</h2>
              </div>
              <ExplainabilityTrigger decisionType="price-adjustment">
                <span className="explain-badge">
                  <span className="explain-icon">❓</span>
                  কীভাবে কাজ করে?
                </span>
              </ExplainabilityTrigger>
            </div>
            <AIDecisionCenter />
          </div>

          {/* Right Column - Opportunity & Risk Radar (30%) */}
          <div className="command-column radar-column">
            <div className="column-header">
              <div className="column-title">
                <span className="column-icon">📡</span>
                <h2>সুযোগ ও ঝুঁকি</h2>
              </div>
              <span className="column-badge scanning">স্ক্যানিং</span>
            </div>
            <OpportunityRadar />
          </div>
        

      {/* Roadmap View */}
      {activeView === 'roadmap' && (
        <main className="roadmap-view">
          <ProFeaturesShowcase />
        </main>
      )}</main>
      )}

      {/* Trust View */}
      {activeView === 'trust' && (
        <main className="trust-view">
          <TrustDNAVisual customerName="করিম মিয়া" />
        </main>
      )}

      {/* Quick Stats Footer */}
      <footer className="dashboard-footer">
        <div className="quick-stats">
          <div className="stat-item">
            <span className="stat-icon">💰</span>
            <div className="stat-content">
              <span className="stat-label">আজকের লাভ</span>
              <span className="stat-value profit">২৭,০০০ টাকা</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-icon">📈</span>
            <div className="stat-content">
              <span className="stat-label">গতকালের তুলনা</span>
              <span className="stat-value positive">+১২.৫%</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <div className="stat-content">
              <span className="stat-label">আজকের ক্রেতা</span>
              <span className="stat-value">৪৭ জন</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-icon">🎯</span>
            <div className="stat-content">
              <span className="stat-label">AI সুপারিশ</span>
              <span className="stat-value highlight">৬ টি</span>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <p className="footer-text">
            শেষ আপডেট: ২ মিনিট আগে • সব তথ্য রিয়েল-টাইম
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainDashboard;
